import type { FoodPreset } from './foods'

let cache: FoodPreset[] | null = null
let loading: Promise<FoodPreset[]> | null = null

/** Ленивая загрузка ~11k пресетов отдельным чанком */
export function loadFoodPresets(): Promise<FoodPreset[]> {
  if (cache) return Promise.resolve(cache)
  if (!loading) {
    loading = import('./foodPresets.json').then((m) => {
      cache = m.default as FoodPreset[]
      return cache
    })
  }
  return loading
}
