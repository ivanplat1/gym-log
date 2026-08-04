/** Профиль для расчёта BMR / целей КБЖУ */

export type Sex = 'male' | 'female'
export type GoalIntent = 'cut' | 'maintain' | 'bulk'

export interface UserProfile {
  birthDate: string // YYYY-MM-DD
  heightCm: number
  weightKg: number
  sex: Sex
  /** Цель по калориям относительно поддержки */
  intent: GoalIntent
}

/** Данные Ивана — стартовый профиль приложения */
export const DEFAULT_PROFILE: UserProfile = {
  birthDate: '1993-09-14',
  heightCm: 180,
  weightKg: 76,
  sex: 'male',
  intent: 'maintain',
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

/**
 * День отдыха: BMR × 1.4 (лёгкая/средняя повседневная активность).
 * Тренировочный расход учитывается отдельно бонусом к цели.
 */
export function calcRestTdee(bmr: number): number {
  return Math.round(bmr * 1.4)
}

const INTENT_DELTA: Record<GoalIntent, number> = {
  cut: -300,
  maintain: 0,
  bulk: 250,
}

export type MacroTargets = {
  kcal: number
  protein: number
  carbs: number
  fat: number
  bmr: number
  age: number
}

/** Цели на день отдыха из профиля */
export function calcMacroTargets(profile: UserProfile, on = new Date()): MacroTargets {
  const age = ageFromBirthDate(profile.birthDate, on)
  const bmr = calcBmr(profile, on)
  const tdee = calcRestTdee(bmr)
  const kcal = Math.max(1400, Math.round((tdee + INTENT_DELTA[profile.intent]) / 10) * 10)

  // Белок ~2 г/кг, жиры ~0.9 г/кг, углеводы — остаток
  const protein = Math.round(profile.weightKg * 2)
  const fat = Math.max(40, Math.round(profile.weightKg * 0.9))
  const carbKcal = Math.max(0, kcal - protein * 4 - fat * 9)
  const carbs = Math.round(carbKcal / 4)

  return { kcal, protein, carbs, fat, bmr, age }
}

export function mergeProfile(raw: Partial<UserProfile> | undefined): UserProfile {
  return {
    birthDate: raw?.birthDate || DEFAULT_PROFILE.birthDate,
    heightCm: raw?.heightCm ?? DEFAULT_PROFILE.heightCm,
    weightKg: raw?.weightKg ?? DEFAULT_PROFILE.weightKg,
    sex: raw?.sex === 'female' ? 'female' : 'male',
    intent:
      raw?.intent === 'cut' || raw?.intent === 'bulk' || raw?.intent === 'maintain'
        ? raw.intent
        : DEFAULT_PROFILE.intent,
  }
}

export const INTENT_LABELS: Record<GoalIntent, string> = {
  cut: 'Сушка (−300)',
  maintain: 'Поддержка',
  bulk: 'Набор (+250)',
}
