export interface FoodPreset {
  id: string
  name: string
  /** на порцию по умолчанию */
  portion: string
  kcal: number
  protein: number
  carbs: number
  fat: number
}

export type MealSlot = 'breakfast' | 'lunch' | 'dinner' | 'snack'

export const MEAL_LABELS: Record<MealSlot, string> = {
  breakfast: 'Завтрак',
  lunch: 'Обед',
  dinner: 'Ужин',
  snack: 'Перекус',
}

/** Приём пищи по локальному времени */
export function mealByTime(d = new Date()): MealSlot {
  const h = d.getHours()
  if (h >= 5 && h < 11) return 'breakfast'
  if (h >= 11 && h < 16) return 'lunch'
  if (h >= 16 && h < 21) return 'dinner'
  return 'snack'
}
