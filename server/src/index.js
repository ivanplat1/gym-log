import bcrypt from 'bcryptjs'
import cookieSession from 'cookie-session'
import cors from 'cors'
import express from 'express'
import fs from 'node:fs'
import helmet from 'helmet'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const DATA_DIR = process.env.DATA_DIR || path.join(ROOT, 'data')
const STORE_FILE = path.join(DATA_DIR, 'store.json')
const USERS_FILE = path.join(DATA_DIR, 'users.json')

const PORT = Number(process.env.PORT || 8787)
/** Путь на общем IP рядом с другими сервисами, напр. /gym-log */
const APP_BASE = normalizeBase(process.env.APP_BASE || process.env.VITE_BASE || '')
const AUTH_USER = process.env.AUTH_USER || 'ivan'
const AUTH_PASSWORD = process.env.AUTH_PASSWORD || 'gym-log-change-me'
const SESSION_SECRET = process.env.SESSION_SECRET || 'gym-log-dev-secret-change-me'
const COOKIE_SECURE = process.env.COOKIE_SECURE === '1'

fs.mkdirSync(DATA_DIR, { recursive: true })

function normalizeBase(raw) {
  const s = String(raw || '')
    .trim()
    .replace(/\/+$/, '')
  if (!s || s === '/') return ''
  return s.startsWith('/') ? s : `/${s}`
}

function readJson(file, fallback) {
  try {
    if (!fs.existsSync(file)) return fallback
    return JSON.parse(fs.readFileSync(file, 'utf8'))
  } catch {
    return fallback
  }
}

function writeJson(file, value) {
  const tmp = `${file}.tmp`
  fs.writeFileSync(tmp, JSON.stringify(value, null, 2))
  fs.renameSync(tmp, file)
}

function ensureUser() {
  const users = readJson(USERS_FILE, null)
  if (users?.username && users?.passwordHash) return users
  const passwordHash = bcrypt.hashSync(AUTH_PASSWORD, 10)
  const next = { username: AUTH_USER, passwordHash }
  writeJson(USERS_FILE, next)
  console.log(`[auth] user ready: ${AUTH_USER}`)
  return next
}

const user = ensureUser()

const app = express()
app.set('trust proxy', 1)
app.use(helmet({ contentSecurityPolicy: false }))
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
)
app.use(express.json({ limit: '5mb' }))
app.use(
  cookieSession({
    name: 'gymlog',
    keys: [SESSION_SECRET],
    maxAge: 1000 * 60 * 60 * 24 * 180,
    httpOnly: true,
    sameSite: 'lax',
    secure: COOKIE_SECURE,
    path: APP_BASE || '/',
  }),
)

function requireAuth(req, res, next) {
  if (req.session?.user === user.username) return next()
  return res.status(401).json({ error: 'unauthorized' })
}

const api = express.Router()

api.get('/health', (_req, res) => {
  res.json({ ok: true, base: APP_BASE || '/' })
})

api.get('/me', (req, res) => {
  if (req.session?.user !== user.username) {
    return res.status(401).json({ error: 'unauthorized' })
  }
  res.json({ username: user.username })
})

api.post('/login', (req, res) => {
  const username = String(req.body?.username || '').trim()
  const password = String(req.body?.password || '')
  if (username !== user.username || !bcrypt.compareSync(password, user.passwordHash)) {
    return res.status(401).json({ error: 'Неверный логин или пароль' })
  }
  req.session.user = user.username
  res.json({ username: user.username })
})

api.post('/logout', (req, res) => {
  req.session = null
  res.json({ ok: true })
})

api.get('/store', requireAuth, (_req, res) => {
  const store = readJson(STORE_FILE, null)
  res.json({ store })
})

api.put('/store', requireAuth, (req, res) => {
  const store = req.body?.store
  if (!store || typeof store !== 'object') {
    return res.status(400).json({ error: 'store required' })
  }
  writeJson(STORE_FILE, store)
  res.json({ ok: true, savedAt: new Date().toISOString() })
})

const mount = express.Router()
mount.use('/api', api)

const dist = process.env.STATIC_DIR || path.join(ROOT, '..', 'dist')
if (fs.existsSync(dist)) {
  mount.use(
    express.static(dist, {
      redirect: false,
      setHeaders(res, filePath) {
        if (
          filePath.endsWith('sw.js') ||
          filePath.endsWith('registerSW.js') ||
          filePath.endsWith('index.html')
        ) {
          res.setHeader('Cache-Control', 'no-store, must-revalidate')
        }
      },
    }),
  )
  mount.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(path.join(dist, 'index.html'))
  })
}

if (APP_BASE) {
  app.use(APP_BASE, mount)
} else {
  app.use(mount)
}

app.listen(PORT, () => {
  const pathHint = APP_BASE ? `${APP_BASE}/` : '/'
  console.log(`[gym-log] http://0.0.0.0:${PORT}${pathHint}`)
})
