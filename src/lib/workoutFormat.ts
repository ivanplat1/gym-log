import { getExercise } from '../data/exercises'
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
  opts: { timed: boolean; bodyweight?: boolean },
): string {
  if (opts.timed) return `${s.durationSec ?? 0}с`
  if (opts.bodyweight) return `${s.reps ?? 0}`
  return `${s.weight ?? 0}×${s.reps ?? 0}`
}
