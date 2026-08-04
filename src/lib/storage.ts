import type { DayId, Exercise } from '../data/program'

export interface LoggedSet {
  weight: number | null
  reps: number | null
  durationSec: number | null
  done: boolean
  /** Запас повторов (RIR). ≥1 нужен для прогрессии в зале */
  rir: number | null
}

export interface SessionExerciseLog {
  exerciseId: string
  name: string
  sets: LoggedSet[]
}

export interface Session {
  id: string
  dayId: DayId
  startedAt: string
  finishedAt: string | null
  exercises: SessionExerciseLog[]
  /** Число кругов для дня C */
  rounds?: number
}

const STORAGE_KEY = 'gym-log:v1'

export interface Store {
  sessions: Session[]
}

function emptyStore(): Store {
  return { sessions: [] }
}

export function loadStore(): Store {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return emptyStore()
    const parsed = JSON.parse(raw) as Store
    if (!Array.isArray(parsed.sessions)) return emptyStore()
    return parsed
  } catch {
    return emptyStore()
  }
}

export function saveStore(store: Store): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store))
}

export function createEmptySet(unit: Exercise['unit']): LoggedSet {
  return {
    weight: null,
    reps: unit === 'sec' ? null : null,
    durationSec: unit === 'sec' ? null : null,
    done: false,
    rir: null,
  }
}

export function createSession(
  dayId: DayId,
  exercises: Exercise[],
  rounds = 1,
): Session {
  const isCircuit = dayId === 'C'
  const sessionExercises: SessionExerciseLog[] = []

  if (isCircuit) {
    for (let r = 0; r < rounds; r++) {
      for (const ex of exercises) {
        sessionExercises.push({
          exerciseId: `${ex.id}-r${r + 1}`,
          name: rounds > 1 ? `${ex.name} · круг ${r + 1}` : ex.name,
          sets: [createEmptySet(ex.unit)],
        })
      }
    }
  } else {
    for (const ex of exercises) {
      const count = ex.setsMax ?? ex.sets
      sessionExercises.push({
        exerciseId: ex.id,
        name: ex.name,
        sets: Array.from({ length: count }, () => createEmptySet(ex.unit)),
      })
    }
  }

  return {
    id: crypto.randomUUID(),
    dayId,
    startedAt: new Date().toISOString(),
    finishedAt: null,
    exercises: sessionExercises,
    rounds: isCircuit ? rounds : undefined,
  }
}

export function lastSessionForDay(sessions: Session[], dayId: DayId): Session | null {
  const list = sessions
    .filter((s) => s.dayId === dayId && s.finishedAt)
    .sort((a, b) => (b.finishedAt ?? '').localeCompare(a.finishedAt ?? ''))
  return list[0] ?? null
}

export function lastWorkingSets(
  sessions: Session[],
  exerciseBaseId: string,
): LoggedSet[] | null {
  for (const session of [...sessions]
    .filter((s) => s.finishedAt)
    .sort((a, b) => (b.finishedAt ?? '').localeCompare(a.finishedAt ?? ''))) {
    const match = session.exercises.find(
      (e) => e.exerciseId === exerciseBaseId || e.exerciseId.startsWith(`${exerciseBaseId}-`),
    )
    if (match) {
      const done = match.sets.filter((s) => s.done)
      if (done.length) return done
    }
  }
  return null
}
