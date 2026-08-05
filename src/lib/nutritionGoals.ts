import type { Store, WorkoutSession } from './storage'
import { todayKey } from './storage'

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
}

/** База + бонус в день тренировки (если включено) */
const FALLBACK_BOOST = { enabled: true, kcal: 400, protein: 20, carbs: 50, fat: 0 }

export function effectiveGoals(
  store: Pick<Store, 'goals' | 'sessions' | 'activeSession'>,
  date: string,
): EffectiveGoals {
  const goals = store.goals
  const trainingDay = hasWorkoutOnDate(store, date)
  const boost = goals.trainingBoost ?? FALLBACK_BOOST
  const boostApplied = trainingDay && boost.enabled
  return {
    kcal: goals.kcal + (boostApplied ? boost.kcal : 0),
    protein: goals.protein + (boostApplied ? boost.protein : 0),
    carbs: goals.carbs + (boostApplied ? boost.carbs : 0),
    fat: goals.fat + (boostApplied ? boost.fat : 0),
    trainingDay,
    boostApplied,
  }
}
