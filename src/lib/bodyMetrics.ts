/** Статичные параметры тела + редактируемый вес */

import { normalizeBodyWeightKg } from './bodyWeight'

export type Sex = 'male' | 'female'
export type GoalIntent = 'cut' | 'maintain' | 'bulk'

export interface UserProfile {
  birthDate: string // YYYY-MM-DD
  heightCm: number
  weightKg: number
  sex: Sex
  intent: GoalIntent
}

/** Иван: всё кроме веса зафиксировано в коде */
export const STATIC_BODY = {
  birthDate: '1993-09-14',
  heightCm: 180,
  sex: 'male' as Sex,
  intent: 'maintain' as GoalIntent,
}

export const DEFAULT_PROFILE: UserProfile = {
  ...STATIC_BODY,
  weightKg: 76,
}

export function ageFromBirthDate(birthDate: string, on = new Date()): number {
  const [y, m, d] = birthDate.split('-').map(Number)
  if (!y || !m || !d) return 30
  let age = on.getFullYear() - y
  const md = on.getMonth() + 1
  const dd = on.getDate()
  if (md < m || (md === m && dd < d)) age -= 1
  return Math.max(14, Math.min(age, 100))
}

/** Mifflin–St Jeor, ккал/сутки */
export function calcBmr(profile: UserProfile, on = new Date()): number {
  const age = ageFromBirthDate(profile.birthDate, on)
  const { weightKg: w, heightCm: h, sex } = profile
  const base = 10 * w + 6.25 * h - 5 * age
  return Math.round(sex === 'male' ? base + 5 : base - 161)
}

const INTENT_DELTA: Record<GoalIntent, number> = {
  cut: -300,
  maintain: 0,
  bulk: 250,
}

/** Множитель активности: отдых / день с тренировкой */
const ACTIVITY = {
  rest: 1.4,
  training: 1.55,
} as const

export type MacroTargets = {
  kcal: number
  protein: number
  carbs: number
  fat: number
  bmr: number
  age: number
}

/** Цели КБЖУ: считаются сами по весу и факту тренировки */
export function calcMacroTargets(
  profile: UserProfile,
  opts?: { trainingDay?: boolean; on?: Date },
): MacroTargets {
  const on = opts?.on ?? new Date()
  const trainingDay = Boolean(opts?.trainingDay)
  const age = ageFromBirthDate(profile.birthDate, on)
  const bmr = calcBmr(profile, on)
  const factor = trainingDay ? ACTIVITY.training : ACTIVITY.rest
  const kcal = Math.max(
    1400,
    Math.round((bmr * factor + INTENT_DELTA[profile.intent]) / 10) * 10,
  )

  // Белок чуть выше в день тренировки
  const protein = Math.round(profile.weightKg * (trainingDay ? 2.1 : 2))
  const fat = Math.max(40, Math.round(profile.weightKg * 0.9))
  const carbKcal = Math.max(0, kcal - protein * 4 - fat * 9)
  const carbs = Math.round(carbKcal / 4)

  return { kcal, protein, carbs, fat, bmr, age }
}

/** В хранилище живёт только вес; остальное всегда из STATIC_BODY */
export function mergeProfile(raw: Partial<UserProfile> | undefined): UserProfile {
  return {
    ...STATIC_BODY,
    weightKg:
      typeof raw?.weightKg === 'number' && raw.weightKg > 0
        ? normalizeBodyWeightKg(raw.weightKg)
        : DEFAULT_PROFILE.weightKg,
  }
}

export function withWeight(weightKg: number): UserProfile {
  return mergeProfile({ weightKg })
}
