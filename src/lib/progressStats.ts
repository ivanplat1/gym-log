import type { LoggedSet, WorkoutSession } from './storage'
import { todayKey } from './storage'

export type SessionPoint = {
  sessionId: string
  date: string
  label: string
  volume: number
  sets: number
}

export type ExercisePoint = {
  sessionId: string
  date: string
  label: string
  maxWeight: number
  volume: number
  e1rm: number
}

export type WeekPoint = {
  label: string
  volume: number
  count: number
}

export type TrackedExercise = {
  exerciseId: string
  name: string
  sessions: number
  lastMax: number
  bestMax: number
}

function sessionDate(s: WorkoutSession): string {
  return todayKey(new Date(s.finishedAt ?? s.startedAt))
}

function formatShort(date: string): string {
  const [, m, d] = date.split('-')
  return `${Number(d)}.${Number(m)}`
}

function mondayOf(d: Date): Date {
  const x = new Date(d)
  x.setHours(0, 0, 0, 0)
  const day = x.getDay()
  const offset = day === 0 ? -6 : 1 - day
  x.setDate(x.getDate() + offset)
  return x
}

export function sessionVolume(s: WorkoutSession): number {
  return s.exercises.reduce(
    (sum, e) => sum + e.sets.reduce((acc, set) => acc + (set.weight ?? 0) * (set.reps ?? 0), 0),
    0,
  )
}

function epley1rm(weight: number, reps: number): number {
  if (weight <= 0 || reps <= 0) return 0
  if (reps === 1) return weight
  return weight * (1 + reps / 30)
}

function bestSetMetrics(sets: LoggedSet[]): { maxWeight: number; volume: number; e1rm: number } {
  let maxWeight = 0
  let volume = 0
  let e1rm = 0
  for (const s of sets) {
    const w = s.weight ?? 0
    const r = s.reps ?? 0
    if (w <= 0 && r <= 0) continue
    volume += w * r
    if (w > maxWeight) maxWeight = w
    const est = epley1rm(w, r)
    if (est > e1rm) e1rm = est
  }
  return { maxWeight, volume, e1rm }
}

export function finishedSessions(sessions: WorkoutSession[]): WorkoutSession[] {
  return [...sessions]
    .filter((s) => s.finishedAt)
    .sort((a, b) => (a.finishedAt ?? '').localeCompare(b.finishedAt ?? ''))
}

export function volumeSeries(sessions: WorkoutSession[], limit = 16): SessionPoint[] {
  return finishedSessions(sessions)
    .slice(-limit)
    .map((s) => ({
      sessionId: s.id,
      date: sessionDate(s),
      label: formatShort(sessionDate(s)),
      volume: Math.round(sessionVolume(s)),
      sets: s.exercises.reduce((n, e) => n + e.sets.length, 0),
    }))
}

export function trackedExercises(sessions: WorkoutSession[]): TrackedExercise[] {
  const map = new Map<string, TrackedExercise>()
  for (const s of finishedSessions(sessions)) {
    for (const ex of s.exercises) {
      if (ex.timed) continue
      const { maxWeight } = bestSetMetrics(ex.sets)
      if (maxWeight <= 0) continue
      const prev = map.get(ex.exerciseId)
      if (!prev) {
        map.set(ex.exerciseId, {
          exerciseId: ex.exerciseId,
          name: ex.name,
          sessions: 1,
          lastMax: maxWeight,
          bestMax: maxWeight,
        })
      } else {
        prev.sessions += 1
        prev.lastMax = maxWeight
        prev.bestMax = Math.max(prev.bestMax, maxWeight)
        prev.name = ex.name
      }
    }
  }
  return [...map.values()].sort(
    (a, b) => b.sessions - a.sessions || a.name.localeCompare(b.name, 'ru'),
  )
}

export function exerciseSeries(
  sessions: WorkoutSession[],
  exerciseId: string,
  limit = 16,
): ExercisePoint[] {
  const points: ExercisePoint[] = []
  for (const s of finishedSessions(sessions)) {
    const match = [...s.exercises].reverse().find((e) => e.exerciseId === exerciseId)
    if (!match || match.timed) continue
    const m = bestSetMetrics(match.sets)
    if (m.maxWeight <= 0 && m.volume <= 0) continue
    const date = sessionDate(s)
    points.push({
      sessionId: s.id,
      date,
      label: formatShort(date),
      maxWeight: Math.round(m.maxWeight * 10) / 10,
      volume: Math.round(m.volume),
      e1rm: Math.round(m.e1rm * 10) / 10,
    })
  }
  return points.slice(-limit)
}

export function weeklyVolume(sessions: WorkoutSession[], weeks = 8): WeekPoint[] {
  const now = new Date()
  const thisMonday = mondayOf(now)
  const buckets: { start: number; label: string; volume: number; count: number }[] = []

  for (let i = weeks - 1; i >= 0; i--) {
    const start = new Date(thisMonday)
    start.setDate(start.getDate() - i * 7)
    buckets.push({
      start: start.getTime(),
      label: `${start.getDate()}.${start.getMonth() + 1}`,
      volume: 0,
      count: 0,
    })
  }

  for (const s of finishedSessions(sessions)) {
    const t = new Date(s.finishedAt!).getTime()
    for (let i = 0; i < buckets.length; i++) {
      const start = buckets[i].start
      const end = start + 7 * 86400000
      if (t >= start && t < end) {
        buckets[i].volume += sessionVolume(s)
        buckets[i].count += 1
        break
      }
    }
  }

  return buckets.map(({ label, volume, count }) => ({
    label,
    volume: Math.round(volume),
    count,
  }))
}
