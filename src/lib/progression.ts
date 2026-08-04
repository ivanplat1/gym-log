import type { DayId, Exercise } from '../data/program'
import { getDay } from '../data/program'
import type { LoggedSet, Session, SessionExerciseLog } from './storage'

export type ProgressionHint = {
  exerciseId: string
  name: string
  message: string
  ready: boolean
}

function midRepThreshold(ex: Exercise): number {
  return Math.ceil((ex.repsMin + ex.repsMax) / 2)
}

function findExercise(dayId: DayId, exerciseId: string): Exercise | undefined {
  const base = exerciseId.replace(/-r\d+$/, '')
  return getDay(dayId).exercises.find((e) => e.id === base)
}

function setsQualifyForGymProgress(ex: Exercise, sets: LoggedSet[]): boolean {
  const work = sets.filter((s) => s.done && s.reps != null)
  if (work.length < ex.sets) return false
  const threshold = midRepThreshold(ex)
  return work.every((s) => {
    const reps = s.reps ?? 0
    const rir = s.rir ?? 0
    return reps >= threshold && rir >= 1
  })
}

function homeRepsReady(ex: Exercise, sets: LoggedSet[]): boolean {
  const work = sets.filter((s) => s.done && (s.reps != null || s.durationSec != null))
  if (!work.length) return false
  if (ex.unit === 'sec') {
    return work.every((s) => (s.durationSec ?? 0) >= ex.repsMax)
  }
  return work.every((s) => (s.reps ?? 0) >= ex.repsMax)
}

export function progressionHints(session: Session): ProgressionHint[] {
  const day = getDay(session.dayId)
  const hints: ProgressionHint[] = []

  if (day.mode === 'circuit') {
    const byBase = new Map<string, LoggedSet[]>()
    for (const log of session.exercises) {
      const base = log.exerciseId.replace(/-r\d+$/, '')
      const prev = byBase.get(base) ?? []
      byBase.set(base, prev.concat(log.sets))
    }
    for (const ex of day.exercises) {
      const sets = byBase.get(ex.id) ?? []
      const ready = homeRepsReady(ex, sets)
      hints.push({
        exerciseId: ex.id,
        name: ex.name,
        ready,
        message: ready
          ? ex.unit === 'sec'
            ? 'Верх диапазона по времени — в следующий раз +5–10 сек или +1 круг'
            : 'Верх диапазона — +1–2 повтора или +1 круг (не скорость)'
          : 'Держи темп и запас; круг лёгкий → +повторы / +круг',
      })
    }
    return hints
  }

  for (const log of session.exercises) {
    const ex = findExercise(session.dayId, log.exerciseId)
    if (!ex || ex.unit === 'sec') continue
    const ready = setsQualifyForGymProgress(ex, log.sets)
    hints.push({
      exerciseId: ex.id,
      name: ex.name,
      ready,
      message: ready
        ? 'Все подходы в верхней половине с запасом ≥1 → +2,5 кг (или +1 повтор)'
        : 'Пока держи вес; цель — верх диапазона с запасом ≥1',
    })
  }
  return hints
}

export function suggestNextWeight(
  lastSets: LoggedSet[] | null,
  dayId: DayId,
  exerciseId: string,
): number | null {
  if (!lastSets?.length) return null
  const weights = lastSets.map((s) => s.weight).filter((w): w is number => w != null)
  if (!weights.length) return null
  const last = Math.max(...weights)
  const ex = findExercise(dayId, exerciseId)
  if (!ex || ex.homeVolume) return last
  if (setsQualifyForGymProgress(ex, lastSets)) return last + 2.5
  return last
}

export function summarizeSession(session: Session): string {
  const done = session.exercises.reduce(
    (n, e) => n + e.sets.filter((s) => s.done).length,
    0,
  )
  const total = session.exercises.reduce((n, e) => n + e.sets.length, 0)
  return `${done}/${total} подходов`
}

export function exerciseCompletion(log: SessionExerciseLog): number {
  if (!log.sets.length) return 0
  return log.sets.filter((s) => s.done).length / log.sets.length
}
