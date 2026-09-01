import type { WeightEntry } from './storage'

function formatShort(date: string): string {
  const [, m, d] = date.split('-')
  return `${Number(d)}.${Number(m)}`
}

export type WeightPoint = {
  date: string
  label: string
  weightKg: number
}

export function weightSeries(history: WeightEntry[], limit = 30): WeightPoint[] {
  return [...history]
    .filter((e) => e.weightKg > 0)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(-limit)
    .map((e) => ({
      date: e.date,
      label: formatShort(e.date),
      weightKg: e.weightKg,
    }))
}

export function weightDelta(history: WeightEntry[]): number | null {
  const series = weightSeries(history, 2)
  if (series.length < 2) return null
  const first = series[0].weightKg
  const last = series[series.length - 1].weightKg
  return Math.round((last - first) * 10) / 10
}
