export type DayId = 'A' | 'B' | 'C'

export type ExerciseKind = 'strength' | 'timed' | 'bodyweight'

export interface Exercise {
  id: string
  name: string
  sets: number
  setsMax?: number
  repsMin: number
  repsMax: number
  unit: 'reps' | 'sec'
  perSide?: boolean
  notes?: string
  restMinSec: number
  restMaxSec: number
  kind: ExerciseKind
  /** Home circuit: fixed dumbbells, progress via reps */
  homeVolume?: boolean
}

export interface ProgramDay {
  id: DayId
  label: string
  place: string
  focus: string
  short: string
  mode: 'straight' | 'circuit'
  circuitRounds?: { min: number; max: number }
  circuitRestExercises?: string
  circuitRestRounds?: string
  exercises: Exercise[]
}

export const PROGRAM_META = {
  title: 'СТАРТ',
  subtitle: 'масса / форма',
  updated: '2026-08-04',
  split: 'Зал A (верх) · Зал B (низ + задняя цепь) · Дом C (объём)',
  gymProgression:
    'Если все рабочие подходы в верхней половине диапазона повторов с запасом ≥1 — на следующей сессии +2,5 кг (или +1 повтор, если шаг веса крупный).',
  homeProgression:
    'Гантели 10 кг фикс → прогресс через повторы, темп (3 сек вниз), паузы, сложность отжиманий.',
}

export const SHOULDER_RULES = [
  'Подтягивания: 1–2 лёгких подхода на проверку ИЛИ сразу вертикальная тяга / горизонтальная тяга.',
  'Боль / покалывание / «щелчок с дискомфортом» → стоп упражнение, только тяги к поясу и лёгкий face pull / разведения назад.',
  'Не гнаться за весом в жимах над головой первые 2–3 недели.',
]

export const SUBSTITUTIONS = [
  'Нет жима лёжа → жим в Смите / гантели / отжимания с весом.',
  'Нет румынской → гиперэкстензия + лёгкая тяга на прямых.',
  'Подтягивания болят → только блок сверху широким/нейтральным + тяга к поясу.',
  'Дома нет турника — ок, тяга гантелей закрывает спину на этом этапе.',
]

export const AVOID = [
  'Подтягивания до отказа / киппинг.',
  'Тяжёлый жим из-за головы.',
  'Резкий рост веса на жимах стоя при сомнительном плече.',
]

export const DAYS: ProgramDay[] = [
  {
    id: 'A',
    label: 'День A',
    place: 'Зал',
    focus: 'Верх · толкай + тяни',
    short: 'Жимы и тяги, плечо под контролем',
    mode: 'straight',
    exercises: [
      {
        id: 'a1',
        name: 'Жим гантелей / штанги лёжа',
        sets: 3,
        repsMin: 6,
        repsMax: 10,
        unit: 'reps',
        restMinSec: 90,
        restMaxSec: 150,
        kind: 'strength',
      },
      {
        id: 'a2',
        name: 'Тяга горизонтальная',
        sets: 3,
        repsMin: 8,
        repsMax: 12,
        unit: 'reps',
        notes: 'Блок / гантель / штанга в наклоне',
        restMinSec: 90,
        restMaxSec: 150,
        kind: 'strength',
      },
      {
        id: 'a3',
        name: 'Жим гантелей сидя / в тренажёре',
        sets: 2,
        setsMax: 3,
        repsMin: 8,
        repsMax: 12,
        unit: 'reps',
        notes:
          'Если плечо ок. Сомневается → брусья с помощью / отжимания от пола, руки чуть уже плеч, без провала в плечо',
        restMinSec: 90,
        restMaxSec: 150,
        kind: 'strength',
      },
      {
        id: 'a4',
        name: 'Тяга вертикальная (блок сверху)',
        sets: 3,
        repsMin: 8,
        repsMax: 12,
        unit: 'reps',
        notes:
          'Хват комфортный. Подтягивания только как тест: 1–2× до лёгкого дискомфорта, не до отказа',
        restMinSec: 90,
        restMaxSec: 150,
        kind: 'strength',
      },
      {
        id: 'a5',
        name: 'Разведение гантелей / peck-deck',
        sets: 2,
        repsMin: 12,
        repsMax: 15,
        unit: 'reps',
        restMinSec: 60,
        restMaxSec: 90,
        kind: 'strength',
      },
      {
        id: 'a6',
        name: 'Face pull / разведение назад',
        sets: 2,
        repsMin: 12,
        repsMax: 15,
        unit: 'reps',
        notes: 'Лёгкий вес, контроль',
        restMinSec: 60,
        restMaxSec: 90,
        kind: 'strength',
      },
    ],
  },
  {
    id: 'B',
    label: 'День B',
    place: 'Зал',
    focus: 'Низ + задняя цепь',
    short: 'Присед, румынская, объём ног',
    mode: 'straight',
    exercises: [
      {
        id: 'b1',
        name: 'Присед',
        sets: 3,
        repsMin: 6,
        repsMax: 10,
        unit: 'reps',
        notes: 'Штанга / гакк / тренажёр',
        restMinSec: 90,
        restMaxSec: 150,
        kind: 'strength',
      },
      {
        id: 'b2',
        name: 'Румынская тяга / good morning',
        sets: 3,
        repsMin: 8,
        repsMax: 12,
        unit: 'reps',
        notes: 'В тренажёре ок',
        restMinSec: 90,
        restMaxSec: 150,
        kind: 'strength',
      },
      {
        id: 'b3',
        name: 'Выпады / болгарские / жим ногами',
        sets: 2,
        setsMax: 3,
        repsMin: 8,
        repsMax: 12,
        unit: 'reps',
        perSide: true,
        restMinSec: 90,
        restMaxSec: 150,
        kind: 'strength',
      },
      {
        id: 'b4',
        name: 'Сгибание ног лёжа / сидя',
        sets: 2,
        repsMin: 10,
        repsMax: 15,
        unit: 'reps',
        restMinSec: 60,
        restMaxSec: 90,
        kind: 'strength',
      },
      {
        id: 'b5',
        name: 'Икры',
        sets: 3,
        repsMin: 10,
        repsMax: 15,
        unit: 'reps',
        restMinSec: 60,
        restMaxSec: 90,
        kind: 'strength',
      },
      {
        id: 'b6',
        name: 'Планка или dead bug',
        sets: 2,
        repsMin: 30,
        repsMax: 45,
        unit: 'sec',
        notes: 'Кор без нагрузки на плечо',
        restMinSec: 60,
        restMaxSec: 90,
        kind: 'timed',
      },
    ],
  },
  {
    id: 'C',
    label: 'День C',
    place: 'Дом',
    focus: 'Объём · гантели ≤10 кг',
    short: 'Круг 3–4 раза, прогресс повторами',
    mode: 'circuit',
    circuitRounds: { min: 3, max: 4 },
    circuitRestExercises: '45–60 сек',
    circuitRestRounds: '2 мин',
    exercises: [
      {
        id: 'c1',
        name: 'Отжимания',
        sets: 1,
        repsMin: 8,
        repsMax: 20,
        unit: 'reps',
        notes: 'Колени / обычные / ноги на возвышении — по запасу',
        restMinSec: 45,
        restMaxSec: 60,
        kind: 'bodyweight',
        homeVolume: true,
      },
      {
        id: 'c2',
        name: 'Выпады с гантелями',
        sets: 1,
        repsMin: 10,
        repsMax: 14,
        unit: 'reps',
        perSide: true,
        notes: 'Темп 3 сек вниз',
        restMinSec: 45,
        restMaxSec: 60,
        kind: 'strength',
        homeVolume: true,
      },
      {
        id: 'c3',
        name: 'Тяга гантелей в наклоне',
        sets: 1,
        repsMin: 12,
        repsMax: 20,
        unit: 'reps',
        notes: 'Поочерёдно или двумя',
        restMinSec: 45,
        restMaxSec: 60,
        kind: 'strength',
        homeVolume: true,
      },
      {
        id: 'c4',
        name: 'Румынская тяга с гантелями',
        sets: 1,
        repsMin: 12,
        repsMax: 20,
        unit: 'reps',
        restMinSec: 45,
        restMaxSec: 60,
        kind: 'strength',
        homeVolume: true,
      },
      {
        id: 'c5',
        name: 'Отжимания узким хватом / алмазные',
        sets: 1,
        repsMin: 6,
        repsMax: 15,
        unit: 'reps',
        notes: 'Лёгкие',
        restMinSec: 45,
        restMaxSec: 60,
        kind: 'bodyweight',
        homeVolume: true,
      },
      {
        id: 'c6',
        name: 'Планка',
        sets: 1,
        repsMin: 30,
        repsMax: 45,
        unit: 'sec',
        restMinSec: 45,
        restMaxSec: 60,
        kind: 'timed',
        homeVolume: true,
      },
    ],
  },
]

export function getDay(id: DayId): ProgramDay {
  const day = DAYS.find((d) => d.id === id)
  if (!day) throw new Error(`Unknown day: ${id}`)
  return day
}

export function formatSets(ex: Exercise): string {
  if (ex.setsMax && ex.setsMax !== ex.sets) return `${ex.sets}–${ex.setsMax}`
  return String(ex.sets)
}

export function formatReps(ex: Exercise): string {
  const range = `${ex.repsMin}–${ex.repsMax}`
  if (ex.unit === 'sec') return `${range} сек`
  if (ex.perSide) return `${range}/нога`
  return range
}
