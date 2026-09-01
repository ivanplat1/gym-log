import { useState, type FormEvent } from 'react'

export function LoginScreen({
  onLogin,
  onCancel,
  compact = false,
}: {
  onLogin: (username: string, password: string) => Promise<void>
  onCancel?: () => void
  compact?: boolean
}) {
  const [username, setUsername] = useState('ivpl')
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
    <div className={compact ? undefined : 'app-shell'}>
      <div className={compact ? undefined : 'app-main'} style={compact ? undefined : { maxWidth: 420 }}>
        <header className="page-head" style={compact ? { marginBottom: 12 } : undefined}>
          {!compact && (
            <div className="brand">
              <i>G</i> gym-log
            </div>
          )}
          <h1 style={compact ? { fontSize: '1.35rem' } : undefined}>Вход</h1>
          <p>
            {compact
              ? 'После входа данные синхронизируются на сервер. Можно закрыть и остаться гостем.'
              : 'Данные хранятся на сервере. Логин и пароль — твои.'}
          </p>
        </header>

        <form
          className={compact ? undefined : 'glass'}
          style={compact ? undefined : { padding: 18, borderRadius: 18 }}
          onSubmit={submit}
        >
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
          {onCancel && (
            <button
              type="button"
              className="ghost"
              style={{ width: '100%', marginTop: 8 }}
              onClick={onCancel}
            >
              Остаться гостем
            </button>
          )}
        </form>
      </div>
    </div>
  )
}
