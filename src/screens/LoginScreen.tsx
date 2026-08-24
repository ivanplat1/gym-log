import { useState, type FormEvent } from 'react'

export function LoginScreen({
  onLogin,
}: {
  onLogin: (username: string, password: string) => Promise<void>
}) {
  const [username, setUsername] = useState('ivan')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setBusy(true)
    setError('')
    try {
      await onLogin(username.trim(), password)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка входа')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="app-shell">
      <div className="app-main" style={{ maxWidth: 420 }}>
        <header className="page-head">
          <div className="brand">
            <i>G</i> gym-log
          </div>
          <h1>Вход</h1>
          <p>Данные хранятся на сервере. Логин и пароль — твои.</p>
        </header>

        <form className="glass" style={{ padding: 18, borderRadius: 18 }} onSubmit={submit}>
          <div className="field" style={{ marginBottom: 12 }}>
            <label>Логин</label>
            <input
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="field" style={{ marginBottom: 16 }}>
            <label>Пароль</label>
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && (
            <p style={{ color: 'var(--red)', margin: '0 0 12px', fontSize: '0.88rem' }}>{error}</p>
          )}
          <button type="submit" className="primary" style={{ width: '100%' }} disabled={busy}>
            {busy ? 'Вход…' : 'Войти'}
          </button>
        </form>
      </div>
    </div>
  )
}
