import type { HealthDay } from './storage'
import { todayKey } from './storage'

function num(v: unknown): number | null {
  if (v == null || v === '') return null
  const n = typeof v === 'number' ? v : Number(String(v).replace(',', '.'))
  return Number.isFinite(n) ? n : null
}

function str(v: unknown): string {
  return v == null ? '' : String(v)
}

/** Нормализует одну запись из JSON / URL / Shortcuts */
export function normalizeHealthRow(
  raw: Record<string, unknown>,
  fallbackSource = 'import',
): HealthDay | null {
  const date =
    str(raw.date || raw.Date || raw.day).slice(0, 10) || todayKey()
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return null

  // sleep can be minutes or hours
  let sleepMin = num(raw.sleepMin ?? raw.sleep_min ?? raw.sleepMinutes)
  const sleepHours = num(raw.sleepHours ?? raw.sleep_h ?? raw.sleep)
  if (sleepMin == null && sleepHours != null) {
    sleepMin = sleepHours > 24 ? sleepHours : sleepHours * 60
  }

  return {
    date,
    sleepMin,
    steps: num(raw.steps ?? raw.Steps ?? raw.stepCount),
    activeKcal: num(
      raw.activeKcal ?? raw.active_kcal ?? raw.activeEnergy ?? raw.calories,
    ),
    restingHr: num(raw.restingHr ?? raw.resting_hr ?? raw.hr ?? raw.heartRate),
    source: str(raw.source) || fallbackSource,
    updatedAt: str(raw.updatedAt) || new Date().toISOString(),
  }
}

export function parseHealthJson(text: string): HealthDay[] {
  const data = JSON.parse(text) as unknown
  const list = Array.isArray(data)
    ? data
    : Array.isArray((data as { days?: unknown }).days)
      ? (data as { days: unknown[] }).days
      : [data]

  return list
    .map((row) =>
      normalizeHealthRow(
        (row ?? {}) as Record<string, unknown>,
        'import',
      ),
    )
    .filter((x): x is HealthDay => x != null)
}

/** Простой CSV: date,sleepMin,steps,activeKcal,restingHr */
export function parseHealthCsv(text: string): HealthDay[] {
  const lines = text
    .trim()
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean)
  if (lines.length < 2) return []

  const header = lines[0].toLowerCase().split(/[,;]/).map((h) => h.trim())
  const idx = (names: string[]) =>
    header.findIndex((h) => names.some((n) => h === n || h.includes(n)))

  const iDate = idx(['date', 'дата'])
  const iSleep = idx(['sleepmin', 'sleep', 'сон'])
  const iSteps = idx(['steps', 'шаги'])
  const iKcal = idx(['activekcal', 'kcal', 'calories', 'ккал'])
  const iHr = idx(['restinghr', 'hr', 'пульс'])

  const out: HealthDay[] = []
  for (const line of lines.slice(1)) {
    const cols = line.split(/[,;]/).map((c) => c.trim())
    const row: Record<string, unknown> = {
      date: iDate >= 0 ? cols[iDate] : undefined,
      sleepMin: iSleep >= 0 ? cols[iSleep] : undefined,
      steps: iSteps >= 0 ? cols[iSteps] : undefined,
      activeKcal: iKcal >= 0 ? cols[iKcal] : undefined,
      restingHr: iHr >= 0 ? cols[iHr] : undefined,
      source: 'csv',
    }
    const n = normalizeHealthRow(row, 'csv')
    if (n) out.push(n)
  }
  return out
}

/** Импорт из query/hash Ярлыка iOS */
export function parseHealthSearchParams(params: URLSearchParams): HealthDay[] {
  // ?d=<base64url json>
  const packed = params.get('d') || params.get('data')
  if (packed) {
    try {
      const normalized = packed.replace(/-/g, '+').replace(/_/g, '/')
      const pad = normalized + '='.repeat((4 - (normalized.length % 4)) % 4)
      const binary = atob(pad)
      const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0))
      const json = new TextDecoder().decode(bytes)
      return parseHealthJson(json)
    } catch {
      try {
        return parseHealthJson(decodeURIComponent(packed))
      } catch {
        /* fall through */
      }
    }
  }

  if (
    params.has('sleepMin') ||
    params.has('sleep') ||
    params.has('steps') ||
    params.has('activeKcal') ||
    params.has('date')
  ) {
    const row = normalizeHealthRow(
      {
        date: params.get('date'),
        sleepMin: params.get('sleepMin'),
        sleep: params.get('sleep'),
        steps: params.get('steps'),
        activeKcal: params.get('activeKcal'),
        restingHr: params.get('restingHr'),
        source: params.get('source') || 'shortcut',
      },
      'shortcut',
    )
    return row ? [row] : []
  }

  return []
}

export function encodeHealthForShortcut(day: Partial<HealthDay>): string {
  const payload = JSON.stringify(day)
  const b64 = btoa(unescape(encodeURIComponent(payload)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
  return b64
}

export const SHORTCUT_BASE_URL = 'https://ivanplat1.github.io/gym-log/health'
