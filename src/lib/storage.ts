export interface LoggedSet {
  weight: number | null
  reps: number | null
  durationSec: number | null
  done: boolean
}

export interface SessionExercise {
  key: string
  exerciseId: string
  name: string
  timed: boolean
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

export interface NutritionGoals {
  kcal: number
  protein: number
  carbs: number
  fat: number
}

export interface Store {
  sessions: WorkoutSession[]
  foods: FoodEntry[]
  goals: NutritionGoals
  /** Незавершённая сессия — живёт при смене вкладок */
  activeSession: WorkoutSession | null
}

const STORAGE_KEY = 'gym-log:v2'

const DEFAULT_GOALS: NutritionGoals = {
  kcal: 2500,
  protein: 160,
  carbs: 280,
  fat: 70,
}

function emptyStore(): Store {
  return { sessions: [], foods: [], goals: { ...DEFAULT_GOALS }, activeSession: null }
}

export function loadStore(): Store {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return emptyStore()
    const parsed = JSON.parse(raw) as Partial<Store>
    return {
      sessions: Array.isArray(parsed.sessions) ? parsed.sessions : [],
      foods: Array.isArray(parsed.foods) ? parsed.foods : [],
      goals: { ...DEFAULT_GOALS, ...(parsed.goals ?? {}) },
      activeSession: parsed.activeSession ?? null,
    }
  } catch {
    return emptyStore()
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
