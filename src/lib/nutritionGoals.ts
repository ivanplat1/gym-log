import { calcMacroTargets, mergeProfile } from './bodyMetrics'
import type { Store, WorkoutSession } from './storage'
import { todayKey, weightKgForDate } from './storage'

function sessionOnDate(session: WorkoutSession, date: string): boolean {
  const start = todayKey(new Date(session.startedAt))
  if (start === date) return true
  if (session.finishedAt) {
    return todayKey(new Date(session.finishedAt)) === date
  }
  return false
}

/** Есть тренировка в этот день: активная или любая сессия за дату */
export function hasWorkoutOnDate(
  store: Pick<Store, 'sessions' | 'activeSession'>,
  date: string,
): boolean {
  if (store.activeSession && sessionOnDate(store.activeSession, date)) return true
  return store.sessions.some((s) => sessionOnDate(s, date))
}

export type EffectiveGoals = {
  kcal: number
  protein: number
  carbs: number
  fat: number
  trainingDay: boolean
  boostApplied: boolean
  bmr: number
}

/** Цель на день считается сама: вес + тренировка / отдых */
export function effectiveGoals(
  store: Pick<Store, 'profile' | 'sessions' | 'activeSession' | 'weightHistory'>,
  date: string,
): EffectiveGoals {
  const weightKg = weightKgForDate(store.weightHistory ?? [], store.profile, date)
  const profile = mergeProfile({ ...store.profile, weightKg })
  const trainingDay = hasWorkoutOnDate(store, date)
  const t = calcMacroTargets(profile, { trainingDay })
  return {
    kcal: t.kcal,
    protein: t.protein,
    carbs: t.carbs,
    fat: t.fat,
    trainingDay,
    boostApplied: trainingDay,
    bmr: t.bmr,
  }
}
