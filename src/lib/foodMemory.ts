import {
  parsePortionCount,
  parsePortionGrams,
  type MacroSet,
  type ScaleMode,
} from './foodPortion'
import type { FoodEntry } from './storage'

export interface FoodMemoryItem {
  name: string
  portion: string
  amount: number
  scaleMode: ScaleMode
  macros: MacroSet
  count: number
  lastAt: string
}

function normName(name: string): string {
  return name.trim().toLowerCase().replace(/\s+/g, ' ')
}

export function memoryFromEntry(entry: FoodEntry): FoodMemoryItem | null {
  const name = entry.name.trim()
  if (!name) return null
  const grams = parsePortionGrams(entry.portion)
  const count = parsePortionCount(entry.portion)
  let scaleMode: ScaleMode = 'grams'
  let amount = 100
  if (grams != null && grams > 0) {
    scaleMode = 'grams'
    amount = grams
  } else if (count != null && count > 0) {
    scaleMode = 'servings'
    amount = count
  } else {
    // без граммовки — всё равно запомним как порцию 1
    scaleMode = 'servings'
    amount = 1
  }
  return {
    name,
    portion: entry.portion || (scaleMode === 'grams' ? `${amount} г` : `${amount} шт`),
    amount,
    scaleMode,
    macros: {
      kcal: entry.kcal,
      protein: entry.protein,
      carbs: entry.carbs,
      fat: entry.fat,
    },
    count: 1,
    lastAt: entry.createdAt || new Date().toISOString(),
  }
}

/** Обновить память: то же имя → новая граммовка/КБЖУ, +1 к счётчику */
export function upsertFoodMemory(
  memory: FoodMemoryItem[],
  entry: FoodEntry,
): FoodMemoryItem[] {
  const next = memoryFromEntry(entry)
  if (!next) return memory
  const key = normName(next.name)
  const idx = memory.findIndex((m) => normName(m.name) === key)
  if (idx < 0) return [next, ...memory].slice(0, 80)
  const prev = memory[idx]
  const updated: FoodMemoryItem = {
    ...next,
    count: prev.count + 1,
  }
  return [updated, ...memory.filter((_, i) => i !== idx)].slice(0, 80)
}

/** Собрать память из истории, если ещё пусто */
export function seedFoodMemoryFromFoods(foods: FoodEntry[]): FoodMemoryItem[] {
  let mem: FoodMemoryItem[] = []
  // от старых к новым, чтобы lastAt/amount были последними
  const chronological = [...foods].sort((a, b) =>
    (a.createdAt || '').localeCompare(b.createdAt || ''),
  )
  for (const f of chronological) {
    mem = upsertFoodMemory(mem, f)
  }
  return mem
}

export function suggestFoodMemory(
  memory: FoodMemoryItem[],
  query: string,
  limit = 12,
): FoodMemoryItem[] {
  const q = query.trim().toLowerCase()
  const list = q
    ? memory.filter((m) => m.name.toLowerCase().includes(q))
    : memory
  return [...list]
    .sort((a, b) => {
      if (b.count !== a.count) return b.count - a.count
      return b.lastAt.localeCompare(a.lastAt)
    })
    .slice(0, limit)
}
