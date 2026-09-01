import type { WorkoutSession } from './storage'

export type ExerciseColor = {
  border: string
  bg: string
  accent: string
}

/** Спокойная палитра — без кислотных оттенков */
const PALETTE: ExerciseColor[] = [
  { border: 'rgb(61 214 140 / 0.42)', bg: 'rgb(61 214 140 / 0.11)', accent: '#3dd68c' },
  { border: 'rgb(110 168 254 / 0.42)', bg: 'rgb(110 168 254 / 0.11)', accent: '#6ea8fe' },
  { border: 'rgb(240 180 41 / 0.42)', bg: 'rgb(240 180 41 / 0.11)', accent: '#f0b429' },
  { border: 'rgb(255 107 90 / 0.38)', bg: 'rgb(255 107 90 / 0.1)', accent: '#ff6b5a' },
  { border: 'rgb(167 139 250 / 0.42)', bg: 'rgb(167 139 250 / 0.11)', accent: '#a78bfa' },
  { border: 'rgb(52 211 153 / 0.38)', bg: 'rgb(52 211 153 / 0.1)', accent: '#34d399' },
  { border: 'rgb(251 191 36 / 0.38)', bg: 'rgb(251 191 36 / 0.1)', accent: '#fbbf24' },
  { border: 'rgb(96 165 250 / 0.38)', bg: 'rgb(96 165 250 / 0.1)', accent: '#60a5fa' },
]

const FALLBACK: ExerciseColor = {
  border: 'rgb(255 255 255 / 0.14)',
  bg: 'rgb(255 255 255 / 0.05)',
  accent: 'var(--muted)',
}

function collectExerciseIdsInOrder(
  sessions: WorkoutSession[],
  activeSession: WorkoutSession | null,
): string[] {
  const order: string[] = []
  const seen = new Set<string>()
  const list = [...sessions]
  if (activeSession && !list.some((s) => s.id === activeSession.id)) {
    list.push(activeSession)
  }
  const sorted = list
    .filter((s) => s.finishedAt || s.id === activeSession?.id)
    .sort((a, b) => (a.finishedAt ?? a.startedAt).localeCompare(b.finishedAt ?? b.startedAt))

  for (const s of sorted) {
    for (const ex of s.exercises) {
      if (!seen.has(ex.exerciseId)) {
        seen.add(ex.exerciseId)
        order.push(ex.exerciseId)
      }
    }
  }
  return order
}

/** Стабильные цвета по упражнениям пользователя (порядок первого появления в журнале). */
export function buildExerciseColorMap(
  sessions: WorkoutSession[],
  activeSession: WorkoutSession | null = null,
): Map<string, ExerciseColor> {
  const order = collectExerciseIdsInOrder(sessions, activeSession)
  const map = new Map<string, ExerciseColor>()
  order.forEach((id, i) => {
    map.set(id, PALETTE[i % PALETTE.length])
  })
  return map
}

export function exerciseColor(
  exerciseId: string,
  colorMap: Map<string, ExerciseColor>,
): ExerciseColor {
  return colorMap.get(exerciseId) ?? FALLBACK
}
