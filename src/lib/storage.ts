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

export interface TrainingBoost {
  /** В дни с тренировкой добавлять бонус к базовым целям */
  enabled: boolean
  kcal: number
  protein: number
  carbs: number
  fat: number
}

export interface NutritionGoals {
  /** База (день отдыха) */
  kcal: number
  protein: number
  carbs: number
  fat: number
  trainingBoost: TrainingBoost
}

export interface Store {
  sessions: WorkoutSession[]
  foods: FoodEntry[]
  goals: NutritionGoals
  /** Незавершённая сессия — живёт при смене вкладок */
  activeSession: WorkoutSession | null
  health: HealthDay[]
}

const STORAGE_KEY = 'gym-log:v2'

const DEFAULT_TRAINING_BOOST: TrainingBoost = {
  enabled: true,
  kcal: 400,
  protein: 20,
  carbs: 50,
  fat: 0,
}

const DEFAULT_GOALS: NutritionGoals = {
  kcal: 2500,
  protein: 160,
  carbs: 280,
  fat: 70,
  trainingBoost: { ...DEFAULT_TRAINING_BOOST },
}

function mergeGoals(raw: Partial<NutritionGoals> | undefined): NutritionGoals {
  return {
    kcal: raw?.kcal ?? DEFAULT_GOALS.kcal,
    protein: raw?.protein ?? DEFAULT_GOALS.protein,
    carbs: raw?.carbs ?? DEFAULT_GOALS.carbs,
    fat: raw?.fat ?? DEFAULT_GOALS.fat,
    trainingBoost: {
      ...DEFAULT_TRAINING_BOOST,
      ...(raw?.trainingBoost ?? {}),
    },
  }
}

function emptyStore(): Store {
  return {
    sessions: [],
    foods: [],
    goals: mergeGoals(undefined),
    activeSession: null,
    health: [],
  }
}

export function loadStore(): Store {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return emptyStore()
    const parsed = JSON.parse(raw) as Partial<Store>
    return {
      sessions: Array.isArray(parsed.sessions) ? parsed.sessions : [],
      foods: Array.isArray(parsed.foods) ? parsed.foods : [],
      goals: mergeGoals(parsed.goals),
      activeSession: parsed.activeSession ?? null,
      health: Array.isArray(parsed.health) ? parsed.health : [],
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
