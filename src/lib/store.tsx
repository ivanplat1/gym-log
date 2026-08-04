import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react'
import { loadStore, saveStore, type Store } from './storage'

interface StoreCtx {
  store: Store
  setStore: Dispatch<SetStateAction<Store>>
}

const Ctx = createContext<StoreCtx | null>(null)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [store, setStore] = useState<Store>(() => loadStore())

  useEffect(() => {
    saveStore(store)
  }, [store])

  const value = useMemo(() => ({ store, setStore }), [store])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useStore() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useStore outside provider')
  return ctx
}
