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

const API_BASE = (import.meta.env.VITE_API_BASE as string | undefined) || '/api'

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
  const skipNextUpload = useRef(false)
  const saveTimer = useRef<number | null>(null)

  const hydrateFromServer = useCallback(async () => {
    const { store: remote } = await apiGetStore<Store>()
    const local = loadStore()
    if (remote) {
      skipNextUpload.current = true
      setStore(remote)
      saveStore(remote)
      return
    }
    const hasLocal =
      local.sessions.length > 0 ||
      local.foods.length > 0 ||
      (local.foodMemory?.length ?? 0) > 0
    if (hasLocal) {
      await apiPutStore(local)
      setStore(local)
    }
  }, [])

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const online = await probeServer()
      if (cancelled) return
      if (!online) {
        setServerMode(false)
        setUsername('local')
        setAuthReady(true)
        return
      }
      setServerMode(true)
      try {
        const me = await apiMe()
        if (cancelled) return
        setUsername(me.username)
        await hydrateFromServer()
      } catch {
        if (!cancelled) setUsername(null)
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
    if (!serverMode || !username || username === 'local') return
    if (skipNextUpload.current) {
      skipNextUpload.current = false
      return
    }
    if (saveTimer.current) window.clearTimeout(saveTimer.current)
    saveTimer.current = window.setTimeout(async () => {
      setSyncing(true)
      setSyncError(null)
      try {
        await apiPutStore(store)
      } catch (err) {
        setSyncError(err instanceof Error ? err.message : 'Ошибка синхронизации')
      } finally {
        setSyncing(false)
      }
    }, 500)
    return () => {
      if (saveTimer.current) window.clearTimeout(saveTimer.current)
    }
  }, [store, username, serverMode])

  const login = useCallback(
    async (user: string, password: string) => {
      const me = await apiLogin(user, password)
      setUsername(me.username)
      await hydrateFromServer()
    },
    [hydrateFromServer],
  )

  const logout = useCallback(async () => {
    if (!serverMode) return
    try {
      await apiLogout()
    } finally {
      setUsername(null)
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
