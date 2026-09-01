import { getExercise } from '../data/exercises'
import { isCardioExercise } from './cardio'
import type { LoggedSet } from './storage'

export type ExerciseTrackKind = 'weight' | 'reps' | 'timed'

export function isBodyweightExercise(exerciseId: string): boolean {
  return !!getExercise(exerciseId)?.bodyweight
}

export function exerciseTrackKind(ex: {
  exerciseId: string
  timed: boolean
  bodyweight?: boolean
}): ExerciseTrackKind {
  if (ex.timed) return 'timed'
  if (ex.bodyweight ?? isBodyweightExercise(ex.exerciseId)) return 'reps'
  return 'weight'
}

export function formatLoggedSet(
  s: LoggedSet,
  opts: { timed: boolean; bodyweight?: boolean; exerciseId?: string },
): string {
  if (opts.timed) {
    if (opts.exerciseId && isCardioExercise(opts.exerciseId)) {
      const min = Math.max(1, Math.round((s.durationSec ?? 0) / 60))
      return `${min} мин`
    }
    return `${s.durationSec ?? 0}с`
  }
  if (opts.bodyweight) return `${s.reps ?? 0}`
  return `${s.weight ?? 0}×${s.reps ?? 0}`
}
