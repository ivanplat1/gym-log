/** Вес тела: хранение в кг, отображение и ввод с точностью до грамма */

export function normalizeBodyWeightKg(kg: number): number {
  if (!Number.isFinite(kg) || kg <= 0) return 0
  return Math.round(kg * 1000) / 1000
}

export function bodyWeightParts(kg: number): { kg: number; grams: number } {
  const totalG = Math.round(normalizeBodyWeightKg(kg) * 1000)
  return {
    kg: Math.floor(totalG / 1000),
    grams: totalG % 1000,
  }
}

export function bodyWeightFromParts(kg: number, grams: number): number {
  const whole = Math.max(0, Math.floor(kg))
  const g = Math.max(0, Math.min(999, Math.round(grams)))
  return normalizeBodyWeightKg(whole + g / 1000)
}

export function parseBodyWeightInput(text: string): number | null {
  const cleaned = text.trim().replace(',', '.')
  if (!cleaned) return null
  const n = Number(cleaned)
  if (!Number.isFinite(n) || n <= 0) return null
  return normalizeBodyWeightKg(n)
}

/** 76.5 → «76,5 кг», 76.351 → «76,351 кг» */
export function formatBodyWeightKg(kg: number): string {
  const n = normalizeBodyWeightKg(kg)
  if (n <= 0) return '—'
  const { kg: whole, grams } = bodyWeightParts(n)
  if (grams === 0) return `${whole} кг`
  const dec = grams.toString().padStart(3, '0').replace(/0+$/, '')
  return `${whole},${dec} кг`
}

/** Значение для поля ввода кг (целая часть) */
export function formatBodyWeightKgInput(kg: number): string {
  if (!Number.isFinite(kg) || kg <= 0) return ''
  return String(bodyWeightParts(kg).kg)
}

/** Значение для поля ввода граммов */
export function formatBodyWeightGramsInput(kg: number): string {
  if (!Number.isFinite(kg) || kg <= 0) return ''
  const g = bodyWeightParts(kg).grams
  return g > 0 ? String(g) : ''
}
