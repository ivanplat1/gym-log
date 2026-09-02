export interface MacroSet {
  kcal: number
  protein: number
  carbs: number
  fat: number
}

/**
 * Достаёт граммы из строки порции:
 * "100 г", "150г", "1 шт ~80 г", "2 шт ~100 г", "20 г", "½ шт" → null
 * Для мл считаем 1:1 с граммами воды/жидкости: "200 мл" → 200
 */
export function parsePortionGrams(portion: string): number | null {
  const t = portion.trim().toLowerCase().replace(',', '.')

  // "1 шт ~80 г" / "~80г"
  const approx = t.match(/~\s*(\d+(?:\.\d+)?)\s*г/)
  if (approx) return Number(approx[1])

  // "100 г" / "100г"
  const grams = t.match(/(\d+(?:\.\d+)?)\s*г(?![а-я])/i) || t.match(/(\d+(?:\.\d+)?)\s*g\b/)
  if (grams) return Number(grams[1])

  // "200 мл" / "250 ml"
  const ml = t.match(/(\d+(?:\.\d+)?)\s*мл/) || t.match(/(\d+(?:\.\d+)?)\s*ml\b/)
  if (ml) return Number(ml[1])

  return null
}

/** Сколько «штук» в порции: "1 шт", "2 шт", "3 шт" */
export function parsePortionCount(portion: string): number | null {
  const t = portion.trim().toLowerCase()
  const m = t.match(/(\d+(?:\.\d+)?)\s*шт/)
  if (m) return Number(m[1])
  if (/½|1\/2/.test(t)) return 0.5
  return null
}

export function scaleMacros(base: MacroSet, fromAmount: number, toAmount: number): MacroSet {
  if (!fromAmount || fromAmount <= 0) return { ...base }
  const k = toAmount / fromAmount
  const round1 = (n: number) => Math.round(n * 10) / 10
  return {
    kcal: Math.round(base.kcal * k),
    protein: round1(base.protein * k),
    carbs: round1(base.carbs * k),
    fat: round1(base.fat * k),
  }
}

export type ScaleMode = 'grams' | 'servings'

export function resolveScaleMode(portion: string): {
  mode: ScaleMode
  baseAmount: number
} {
  const grams = parsePortionGrams(portion)
  if (grams != null && grams > 0) {
    return { mode: 'grams', baseAmount: grams }
  }
  const count = parsePortionCount(portion)
  if (count != null && count > 0) {
    return { mode: 'servings', baseAmount: count }
  }
  // дефолт: считаем макросы как на 100 г (пользователь введёт граммы)
  return { mode: 'grams', baseAmount: 100 }
}

export function formatAmountLabel(mode: ScaleMode, amount: number): string {
  if (mode === 'grams') return `${Math.round(amount * 10) / 10} г`
  const rounded = Math.round(amount * 100) / 100
  return `${rounded} шт`
}

/** Шаг +/- для граммов: 100, если стандартная порция > 400 г/мл */
export function gramPortionStep(baseAmount: number): number {
  return baseAmount > 400 ? 100 : 10
}
