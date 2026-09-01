import { getExercise, type Exercise } from '../data/exercises'
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
      parts.push(`${s.durationSec ?? 0} сек`)
    }
    if (opts.exerciseId && isDistanceCardio(opts.exerciseId) && (s.distanceM ?? 0) > 0) {
      parts.push(formatDistance(s.distanceM ?? 0))
    }
    return parts.join(' · ')
  }
  if (opts.bodyweight) return `${s.reps ?? 0} повт`
  const w = s.weight ?? 0
  const r = s.reps ?? 0
  return `${w} кг × ${r}`
}

export function formatExerciseSets(
  sets: LoggedSet[],
  opts: { timed: boolean; bodyweight?: boolean; exerciseId?: string },
): string {
  if (!sets.length) return '—'
  return sets
    .map((s) => formatLoggedSet(s, opts))
    .join(' · ')
}

export function stepperRowClass(
  ex: { timed: boolean; bodyweight?: boolean; exerciseId: string },
  custom: Exercise[] = [],
): string {
  const bw = ex.bodyweight ?? isBodyweightExercise(ex.exerciseId)
  if (ex.timed && isDistanceCardio(ex.exerciseId, custom)) {
    return 'stepper-row compact stepper-row--cardio'
  }
  if (ex.timed || bw) return 'stepper-row compact single'
  return 'stepper-row compact'
}
