import type { FoodPreset } from '../data/foods'

/** Базовое название без суффикса порции «(150 г)» */
function baseName(name: string): string {
  return name.replace(/\s*\(\d+(?:[.,]\d+)?\s*г\)$/i, '').trim().toLowerCase()
}

function rankPreset(p: FoodPreset, query: string): number {
  const name = p.name.toLowerCase()
  const q = query.toLowerCase()
  let rank = 0
  if (q) {
    if (name === q || baseName(p.name) === q) rank -= 100
    else if (name.startsWith(q) || baseName(p.name).startsWith(q)) rank -= 50
    else if (name.split(/\s+/).some((w) => w.startsWith(q))) rank -= 20
  }
  if (p.portion === '100 г') rank -= 8
  if (!/\(\d+/.test(p.name)) rank -= 4
  return rank
}

/** Поиск пресетов без дублей по базовому названию */
export function searchFoodPresets(
  presets: FoodPreset[],
  query: string,
  limit: number,
): FoodPreset[] {
  const q = query.trim().toLowerCase()
  const matched = q
    ? presets.filter(
        (p) =>
          p.name.toLowerCase().includes(q) || baseName(p.name).includes(q),
      )
    : presets

  const byName = new Map<string, FoodPreset>()
  for (const p of matched) {
    const key = baseName(p.name)
    const prev = byName.get(key)
    if (!prev || rankPreset(p, q) < rankPreset(prev, q)) {
      byName.set(key, p)
    }
  }

  const list = [...byName.values()].sort(
    (a, b) => rankPreset(a, q) - rankPreset(b, q) || a.name.localeCompare(b.name, 'ru'),
  )
  return list.slice(0, limit)
}
