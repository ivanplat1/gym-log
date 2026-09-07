import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react'
import { apiGetStore, apiLogin, apiLogout, apiMe, apiPutStore } from './api'
import { loadStore, saveStore, type Store } from './storage'

function resolveApiBase(): string {
  const explicit = import.meta.env.VITE_API_BASE as string | undefined
  if (explicit) return explicit.replace(/\/$/, '')
  const base = String(import.meta.env.BASE_URL || '/').replace(/\/$/, '')
  return `${base}/api`
}

const API_BASE = resolveApiBase()

function storeHasUserData(s: Store | null | undefined): boolean {
  if (!s || typeof s !== 'object') return false
  return (
    (s.sessions?.length ?? 0) > 0 ||
    (s.foods?.length ?? 0) > 0 ||
    (s.foodMemory?.length ?? 0) > 0 ||
    (s.weightHistory?.length ?? 0) > 0 ||
    (s.health?.length ?? 0) > 0 ||
    (s.customExercises?.length ?? 0) > 0 ||
    !!s.activeSession
  )
}

interface StoreCtx {
  store: Store
  setStore: Dispatch<SetStateAction<Store>>
  username: string | null
  authReady: boolean
  /** false = только localStorage (GitHub Pages / нет сервера) */
  serverMode: boolean
  syncing: boolean
  syncError: string | null
  login: (username: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const Ctx = createContext<StoreCtx | null>(null)

async function probeServer(): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE}/health`, { credentials: 'include' })
    return res.ok
  } catch {
    return false
  }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [store, setStore] = useState<Store>(() => loadStore())
  const [username, setUsername] = useState<string | null>(null)
  const [authReady, setAuthReady] = useState(false)
  const [serverMode, setServerMode] = useState(false)
  const [syncing, setSyncing] = useState(false)
  const [syncError, setSyncError] = useState<string | null>(null)
  /** Не пушим на сервер, пока не закончилась гидрация сессии */
  const [hydrateDone, setHydrateDone] = useState(false)
  const skipNextUpload = useRef(false)
  const saveTimer = useRef<number | null>(null)
  const storeRef = useRef(store)
  storeRef.current = store

  const hydrateFromServer = useCallback(async () => {
    setHydrateDone(false)
    const { store: remote } = await apiGetStore<Store>()
    const local = loadStore()
    const remoteHas = storeHasUserData(remote)
    const localHas = storeHasUserData(local)

    // Пустой remote не затирает непустой local — наоборот, заливаем local
    if (remote && remoteHas) {
      skipNextUpload.current = true
      setStore(remote)
      saveStore(remote)
      setHydrateDone(true)
      return
    }

    if (localHas) {
      await apiPutStore(local)
      skipNextUpload.current = true
      setStore(local)
      saveStore(local)
      setHydrateDone(true)
      return
    }

    if (remote) {
      skipNextUpload.current = true
      setStore(remote)
      saveStore(remote)
    }
    setHydrateDone(true)
  }, [])

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const online = await probeServer()
      if (cancelled) return
      if (!online) {
        setServerMode(false)
        setUsername('local')
        setHydrateDone(true)
        setAuthReady(true)
        return
      }
      setServerMode(true)
      try {
        const me = await apiMe()
        if (cancelled) return
        await hydrateFromServer()
        if (cancelled) return
        setUsername(me.username)
      } catch {
        if (!cancelled) {
          setUsername(null)
          setHydrateDone(true)
        }
      } finally {
        if (!cancelled) setAuthReady(true)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [hydrateFromServer])

  useEffect(() => {
    saveStore(store)
    if (!serverMode || !username || username === 'local' || !hydrateDone) return
    if (skipNextUpload.current) {
      skipNextUpload.current = false
      return
    }
    // не затираем сервер пустым стором (гонка логина / свежий PWA)
    if (!storeHasUserData(store)) return
    if (saveTimer.current) window.clearTimeout(saveTimer.current)
    saveTimer.current = window.setTimeout(async () => {
      setSyncing(true)
      setSyncError(null)
      try {
        await apiPutStore(storeRef.current)
      } catch (err) {
        setSyncError(err instanceof Error ? err.message : 'Ошибка синхронизации')
      } finally {
        setSyncing(false)
      }
    }, 500)
    return () => {
      if (saveTimer.current) window.clearTimeout(saveTimer.current)
    }
  }, [store, username, serverMode, hydrateDone])

  const login = useCallback(
    async (user: string, password: string) => {
      const me = await apiLogin(user, password)
      // сначала гидрация, потом username — иначе PUT улетит с пустым local
      await hydrateFromServer()
      setUsername(me.username)
    },
    [hydrateFromServer],
  )

  const logout = useCallback(async () => {
    if (!serverMode) return
    try {
      await apiLogout()
    } finally {
      // остаёмся гостем: UI и localStorage, без синка на сервер
      setUsername(null)
      setHydrateDone(true)
      setSyncError(null)
      setSyncing(false)
    }
  }, [serverMode])

  const value = useMemo(
    () => ({
      store,
      setStore,
      username,
      authReady,
      serverMode,
      syncing,
      syncError,
      login,
      logout,
    }),
    [store, username, authReady, serverMode, syncing, syncError, login, logout],
  )

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useStore() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useStore outside provider')
  return ctx
}
