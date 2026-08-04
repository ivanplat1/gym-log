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

/** Частые продукты — быстрый ввод */
export const FOOD_PRESETS: FoodPreset[] = [
  { id: 'egg', name: 'Яйцо куриное', portion: '1 шт', kcal: 78, protein: 6.5, carbs: 0.6, fat: 5.3 },
  { id: 'egg-white', name: 'Белок яйца', portion: '1 шт', kcal: 17, protein: 3.6, carbs: 0.2, fat: 0.1 },
  { id: 'chicken', name: 'Куриная грудка', portion: '100 г', kcal: 165, protein: 31, carbs: 0, fat: 3.6 },
  { id: 'turkey', name: 'Индейка', portion: '100 г', kcal: 135, protein: 29, carbs: 0, fat: 2 },
  { id: 'beef', name: 'Говядина постная', portion: '100 г', kcal: 187, protein: 26, carbs: 0, fat: 9 },
  { id: 'salmon', name: 'Лосось', portion: '100 г', kcal: 208, protein: 20, carbs: 0, fat: 13 },
  { id: 'tuna', name: 'Тунец консерв.', portion: '100 г', kcal: 116, protein: 26, carbs: 0, fat: 1 },
  { id: 'cottage', name: 'Творог 5%', portion: '100 г', kcal: 121, protein: 17, carbs: 3, fat: 5 },
  { id: 'greek-yog', name: 'Йогурт греческий', portion: '100 г', kcal: 97, protein: 9, carbs: 3.6, fat: 5 },
  { id: 'milk', name: 'Молоко 2.5%', portion: '200 мл', kcal: 104, protein: 6.4, carbs: 9.4, fat: 5 },
  { id: 'oats', name: 'Овсянка сухая', portion: '50 г', kcal: 185, protein: 6.5, carbs: 33, fat: 3.5 },
  { id: 'rice', name: 'Рис варёный', portion: '150 г', kcal: 195, protein: 4, carbs: 42, fat: 0.4 },
  { id: 'buckwheat', name: 'Гречка варёная', portion: '150 г', kcal: 165, protein: 6, carbs: 32, fat: 1 },
  { id: 'potato', name: 'Картофель', portion: '150 г', kcal: 130, protein: 3, carbs: 30, fat: 0.2 },
  { id: 'pasta', name: 'Макароны варёные', portion: '150 г', kcal: 198, protein: 7, carbs: 39, fat: 1.2 },
  { id: 'bread', name: 'Хлеб цельнозерн.', portion: '1 ломтик', kcal: 80, protein: 3.5, carbs: 14, fat: 1 },
  { id: 'banana', name: 'Банан', portion: '1 шт', kcal: 105, protein: 1.3, carbs: 27, fat: 0.4 },
  { id: 'apple', name: 'Яблоко', portion: '1 шт', kcal: 95, protein: 0.5, carbs: 25, fat: 0.3 },
  { id: 'avocado', name: 'Авокадо', portion: '½ шт', kcal: 120, protein: 1.5, carbs: 6, fat: 11 },
  { id: 'peanut', name: 'Арахисовая паста', portion: '20 г', kcal: 118, protein: 5, carbs: 4, fat: 10 },
  { id: 'olive-oil', name: 'Оливковое масло', portion: '1 ст.л.', kcal: 119, protein: 0, carbs: 0, fat: 13.5 },
  { id: 'whey', name: 'Протеин сыворот.', portion: '1 порция', kcal: 120, protein: 24, carbs: 3, fat: 1.5 },
  { id: 'creatine', name: 'Креатин', portion: '5 г', kcal: 0, protein: 0, carbs: 0, fat: 0 },
]

export type MealSlot = 'breakfast' | 'lunch' | 'dinner' | 'snack'

export const MEAL_LABELS: Record<MealSlot, string> = {
  breakfast: 'Завтрак',
  lunch: 'Обед',
  dinner: 'Ужин',
  snack: 'Перекус',
}
