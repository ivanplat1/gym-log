export interface WeightEntry {
  date: string // YYYY-MM-DD
  weightKg: number
  loggedAt: string
}

export interface HealthDay {
  date: string // YYYY-MM-DD
  /** Общая длительность сна, минуты */
  sleepMin: number | null
  steps: number | null
  /** Активные ккал (Apple Active Energy / тренировки) */
  activeKcal: number | null
  /** Пульс в покое, уд/мин */
  restingHr: number | null
  /** Откуда пришло: apple-health | shortcut | manual | import */
  source: string
  updatedAt: string
}

export interface LoggedSet {
  weight: number | null
  reps: number | null
  durationSec: number | null
  /** Дистанция для ходьбы / бега, метры */
  distanceM: number | null
  done: boolean
}

export interface SessionExercise {
  key: string
  exerciseId: string
  name: string
  timed: boolean
  /** без внешнего веса — только повторы */
  bodyweight?: boolean
  sets: LoggedSet[]
}

export interface WorkoutSession {
  id: string
  startedAt: string
  finishedAt: string | null
  note: string
  exercises: SessionExercise[]
}

export interface FoodEntry {
  id: string
  date: string // YYYY-MM-DD
  meal: 'breakfast' | 'lunch' | 'dinner' | 'snack'
  name: string
  portion: string
  kcal: number
  protein: number
  carbs: number
  fat: number
  createdAt: string
}

import { calcMacroTargets, mergeProfile, type UserProfile } from './bodyMetrics'
import type { Exercise, MuscleGroup } from '../data/exercises'
import { createCustomExercise } from '../data/exercises'
import {
  seedFoodMemoryFromFoods,
  type FoodMemoryItem,
  upsertFoodMemory,
} from './foodMemory'

export interface NutritionGoals {
  kcal: number
  protein: number
  carbs: number
  fat: number
}

export interface Store {
  sessions: WorkoutSession[]
  foods: FoodEntry[]
  /** Запомненные блюда + последняя граммовка */
  foodMemory: FoodMemoryItem[]
  /** Свои упражнения, добавленные вручную */
  customExercises: Exercise[]
  goals: NutritionGoals
  profile: UserProfile
  /** Незавершённая сессия — живёт при смене вкладок */
  activeSession: WorkoutSession | null
  health: HealthDay[]
  /** Ручной ввод сожжённых активных ккал по датам YYYY-MM-DD */
  manualBurnKcal: Record<string, number>
  /** История взвешиваний */
  weightHistory: WeightEntry[]
}

const STORAGE_KEY = 'gym-log:v2'

function goalsFromProfile(profile: UserProfile): NutritionGoals {
  const t = calcMacroTargets(profile, { trainingDay: false })
  return {
    kcal: t.kcal,
    protein: t.protein,
    carbs: t.carbs,
    fat: t.fat,
  }
}

function emptyStore(): Store {
  const profile = mergeProfile(undefined)
  return {
    sessions: [],
    foods: [],
    foodMemory: [],
    customExercises: [],
    profile,
    goals: goalsFromProfile(profile),
    activeSession: null,
    health: [],
    manualBurnKcal: {},
    weightHistory: [],
  }
}

export function loadStore(): Store {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return emptyStore()
    const parsed = JSON.parse(raw) as Partial<Store> & { profile?: Partial<UserProfile> }
    const profile = mergeProfile(parsed.profile)
    const foods = Array.isArray(parsed.foods) ? parsed.foods : []
    const foodMemory = Array.isArray(parsed.foodMemory)
      ? (parsed.foodMemory as FoodMemoryItem[])
      : seedFoodMemoryFromFoods(foods)
    let weightHistory = Array.isArray(parsed.weightHistory)
      ? (parsed.weightHistory as WeightEntry[])
      : []
    if (!weightHistory.length && profile.weightKg > 0) {
      weightHistory = [
        {
          date: todayKey(),
          weightKg: profile.weightKg,
          loggedAt: new Date().toISOString(),
        },
      ]
    }
    return {
      sessions: Array.isArray(parsed.sessions) ? parsed.sessions : [],
      foods,
      foodMemory,
      customExercises: Array.isArray(parsed.customExercises)
        ? (parsed.customExercises as Exercise[])
        : [],
      profile,
      goals: goalsFromProfile(profile),
      activeSession: parsed.activeSession ?? null,
      health: Array.isArray(parsed.health) ? parsed.health : [],
      manualBurnKcal:
        parsed.manualBurnKcal && typeof parsed.manualBurnKcal === 'object'
          ? (parsed.manualBurnKcal as Record<string, number>)
          : {},
      weightHistory,
    }
  } catch {
    return emptyStore()
  }
}

/** Вес на дату: последнее взвешивание на эту дату или раньше */
export function weightKgForDate(
  history: WeightEntry[],
  profile: UserProfile,
  date: string,
): number {
  const fallback = mergeProfile(profile).weightKg
  if (!history.length) return fallback
  const sorted = [...history]
    .filter((e) => e.weightKg > 0)
    .sort((a, b) => a.date.localeCompare(b.date))
  let last = fallback
  for (const e of sorted) {
    if (e.date > date) break
    last = e.weightKg
  }
  return last
}

function upsertWeightEntry(existing: WeightEntry[], incoming: WeightEntry): WeightEntry[] {
  const map = new Map(existing.map((e) => [e.date, e]))
  map.set(incoming.date, incoming)
  return [...map.values()].sort((a, b) => b.date.localeCompare(a.date))
}

function latestWeightKg(history: WeightEntry[], fallback: number): number {
  if (!history.length) return fallback
  const sorted = [...history].sort((a, b) => b.date.localeCompare(a.date))
  return sorted[0]?.weightKg > 0 ? sorted[0].weightKg : fallback
}

/** Записать взвешивание и пересчитать текущий вес + цели */
export function logWeight(store: Store, date: string, weightKg: number): Store {
  if (!Number.isFinite(weightKg) || weightKg <= 0) return store
  const w = Math.round(weightKg * 10) / 10
  const entry: WeightEntry = {
    date,
    weightKg: w,
    loggedAt: new Date().toISOString(),
  }
  const weightHistory = upsertWeightEntry(store.weightHistory ?? [], entry)
  const current = latestWeightKg(weightHistory, mergeProfile(store.profile).weightKg)
  const profile = mergeProfile({ weightKg: current })
  return { ...store, weightHistory, profile, goals: goalsFromProfile(profile) }
}

/** @deprecated используй logWeight */
export function setWeightKg(store: Store, weightKg: number): Store {
  return logWeight(store, todayKey(), weightKg)
}

/** Добавить еду и запомнить блюдо/граммовку */
export function addFoodEntry(store: Store, entry: FoodEntry): Store {
  return {
    ...store,
    foods: [entry, ...store.foods],
    foodMemory: upsertFoodMemory(store.foodMemory ?? [], entry),
  }
}

/** Добавить своё упражнение или вернуть уже существующее с тем же именем */
export function addCustomExercise(
  store: Store,
  name: string,
  group: MuscleGroup,
): { store: Store; exercise: Exercise } {
  const trimmed = name.trim()
  const existing = (store.customExercises ?? []).find(
    (e) => e.name.toLowerCase() === trimmed.toLowerCase(),
  )
  if (existing) return { store, exercise: existing }
  const exercise = createCustomExercise(trimmed, group)
  return {
    store: {
      ...store,
      customExercises: [...(store.customExercises ?? []), exercise],
    },
    exercise,
  }
}

export function saveStore(store: Store): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store))
}

export function todayKey(d = new Date()): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function emptySet(timed: boolean): LoggedSet {
  return {
    weight: null,
    reps: timed ? null : null,
    durationSec: timed ? null : null,
    distanceM: null,
    done: false,
  }
}

export function createSession(): WorkoutSession {
  return {
    id: crypto.randomUUID(),
    startedAt: new Date().toISOString(),
    finishedAt: null,
    note: '',
    exercises: [],
  }
}

export function lastSetsForExercise(
  sessions: WorkoutSession[],
  exerciseId: string,
): LoggedSet[] | null {
  for (const s of [...sessions]
    .filter((x) => x.finishedAt)
    .sort((a, b) => (b.finishedAt ?? '').localeCompare(a.finishedAt ?? ''))) {
    const match = [...s.exercises].reverse().find((e) => e.exerciseId === exerciseId)
    if (match) {
      const done = match.sets.filter((set) => set.done)
      if (done.length) return done
    }
  }
  return null
}

export function setManualBurnKcal(store: Store, date: string, kcal: number): Store {
  const next = { ...(store.manualBurnKcal ?? {}) }
  if (kcal <= 0) delete next[date]
  else next[date] = Math.round(kcal)
  return { ...store, manualBurnKcal: next }
}

export function macrosForDay(foods: FoodEntry[], date: string) {
  return foods
    .filter((f) => f.date === date)
    .reduce(
      (acc, f) => ({
        kcal: acc.kcal + f.kcal,
        protein: acc.protein + f.protein,
        carbs: acc.carbs + f.carbs,
        fat: acc.fat + f.fat,
      }),
      { kcal: 0, protein: 0, carbs: 0, fat: 0 },
    )
}

/** Upsert по дате: новые поля перекрывают старые, если не null */
export function upsertHealthDays(existing: HealthDay[], incoming: HealthDay[]): HealthDay[] {
  const map = new Map(existing.map((d) => [d.date, d]))
  for (const row of incoming) {
    if (!row.date) continue
    const prev = map.get(row.date)
    map.set(row.date, {
      date: row.date,
      sleepMin: row.sleepMin ?? prev?.sleepMin ?? null,
      steps: row.steps ?? prev?.steps ?? null,
      activeKcal: row.activeKcal ?? prev?.activeKcal ?? null,
      restingHr: row.restingHr ?? prev?.restingHr ?? null,
      source: row.source || prev?.source || 'import',
      updatedAt: row.updatedAt || new Date().toISOString(),
    })
  }
  return [...map.values()].sort((a, b) => b.date.localeCompare(a.date))
}

export function healthForDate(health: HealthDay[], date: string): HealthDay | null {
  return health.find((h) => h.date === date) ?? null
}

export function formatSleep(min: number | null): string {
  if (min == null || min <= 0) return '—'
  const h = Math.floor(min / 60)
  const m = Math.round(min % 60)
  return `${h}ч ${m}м`
}
