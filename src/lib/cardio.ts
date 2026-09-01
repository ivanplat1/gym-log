import { getExercise, type Exercise } from '../data/exercises'
import type { WorkoutSession } from './storage'
import { todayKey } from './storage'

/** MET — умеренная интенсивность, оценка по Compendium */
const CARDIO_MET: Record<string, number> = {
  walk: 3.5,
  run: 9.8,
  bike: 7,
  'row-ergo': 7,
}

export function isCardioExercise(exerciseId: string, custom: Exercise[] = []): boolean {
  return getExercise(exerciseId, custom)?.group === 'cardio'
}

export function getTimedStepperConfig(exerciseId: string, custom: Exercise[] = []) {
  if (isCardioExercise(exerciseId, custom)) {
    return {
      label: 'мин',
      step: 5,
      min: 1,
      editable: true,
      fromSeconds: (sec: number) => Math.max(1, Math.round(sec / 60)),
      toSeconds: (min: number) => Math.max(60, min * 60),
      defaultSeconds: 30 * 60,
    }
  }
  return {
    label: 'сек',
    step: 5,
    min: 5,
    editable: false,
    fromSeconds: (sec: number) => Math.max(5, sec || 30),
    toSeconds: (v: number) => v,
    defaultSeconds: 30,
  }
}

export function cardioMet(exerciseId: string): number {
  return CARDIO_MET[exerciseId] ?? 6
}

/** ккал ≈ MET × вес(кг) × часы */
export function cardioBurnKcal(
  exerciseId: string,
  durationSec: number,
  weightKg: number,
  custom: Exercise[] = [],
): number {
  if (durationSec <= 0 || weightKg <= 0 || !isCardioExercise(exerciseId, custom)) return 0
  return Math.round((cardioMet(exerciseId) * weightKg * durationSec) / 3600)
}

function sessionDate(s: WorkoutSession): string {
  return todayKey(new Date(s.finishedAt ?? s.startedAt))
}

/** Сумма ккал по кардио-подходам за день (завершённые + активная сессия). */
export function cardioBurnForDay(
  sessions: WorkoutSession[],
  activeSession: WorkoutSession | null,
  date: string,
  weightKg: number,
  custom: Exercise[] = [],
): number {
  const list = [...sessions]
  if (
    activeSession &&
    sessionDate(activeSession) === date &&
    !list.some((s) => s.id === activeSession.id)
  ) {
    list.push(activeSession)
  }

  let burn = 0
  for (const s of list) {
    if (sessionDate(s) !== date) continue
    for (const ex of s.exercises) {
      if (!isCardioExercise(ex.exerciseId, custom)) continue
      for (const set of ex.sets) {
        burn += cardioBurnKcal(ex.exerciseId, set.durationSec ?? 0, weightKg, custom)
      }
    }
  }
  return burn
}
