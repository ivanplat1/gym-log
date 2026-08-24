const API_BASE = (import.meta.env.VITE_API_BASE as string | undefined) || '/api'

async function req<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
    ...init,
  })
  if (!res.ok) {
    let message = `HTTP ${res.status}`
    try {
      const body = (await res.json()) as { error?: string }
      if (body.error) message = body.error
    } catch {
      /* ignore */
    }
    throw new Error(message)
  }
  return (await res.json()) as T
}

export type Me = { username: string }

export function apiMe() {
  return req<Me>('/me')
}

export function apiLogin(username: string, password: string) {
  return req<Me>('/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  })
}

export function apiLogout() {
  return req<{ ok: boolean }>('/logout', { method: 'POST' })
}

export function apiGetStore<T>() {
  return req<{ store: T | null }>('/store')
}

export function apiPutStore<T>(store: T) {
  return req<{ ok: boolean; savedAt: string }>('/store', {
    method: 'PUT',
    body: JSON.stringify({ store }),
  })
}
