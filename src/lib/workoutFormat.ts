import { getExercise } from '../data/exercises'
import { isCardioExercise, isDistanceCardio, formatDistance } from './cardio'
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
    const parts: string[] = []
    if (opts.exerciseId && isCardioExercise(opts.exerciseId)) {
      const min = Math.max(1, Math.round((s.durationSec ?? 0) / 60))
      parts.push(`${min} мин`)
    } else {
      parts.push(`${s.durationSec ?? 0}с`)
    }
    if (opts.exerciseId && isDistanceCardio(opts.exerciseId) && (s.distanceM ?? 0) > 0) {
      parts.push(formatDistance(s.distanceM ?? 0))
    }
    return parts.join(' · ')
  }
  if (opts.bodyweight) return `${s.reps ?? 0}`
  return `${s.weight ?? 0}×${s.reps ?? 0}`
}
