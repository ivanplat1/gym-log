export type MuscleGroup =
  | 'chest'
  | 'back'
  | 'legs'
  | 'shoulders'
  | 'arms'
  | 'core'
  | 'cardio'

export interface Exercise {
  id: string
  name: string
  group: MuscleGroup
  /** секунды вместо повторов (планка и т.п.) */
  timed?: boolean
  /** без внешнего веса — только повторы */
  bodyweight?: boolean
}

export const GROUP_LABELS: Record<MuscleGroup, string> = {
  chest: 'Грудь',
  back: 'Спина',
  legs: 'Ноги',
  shoulders: 'Плечи',
  arms: 'Руки',
  core: 'Кор',
  cardio: 'Кардио',
}

export const EXERCISES: Exercise[] = [
  // Грудь
  { id: 'bench-bar', name: 'Жим штанги лёжа', group: 'chest' },
  { id: 'bench-db', name: 'Жим гантелей лёжа', group: 'chest' },
  { id: 'incline-db', name: 'Жим гантелей на наклонной', group: 'chest' },
  { id: 'fly-db', name: 'Разведение гантелей', group: 'chest' },
  { id: 'peck-deck', name: 'Peck-deck / бабочка', group: 'chest' },
  { id: 'pushup', name: 'Отжимания', group: 'chest', bodyweight: true },
  { id: 'dips', name: 'Отжимания на брусьях', group: 'chest', bodyweight: true },
  // Спина
  { id: 'pullup', name: 'Подтягивания', group: 'back', bodyweight: true },
  { id: 'lat-pulldown', name: 'Тяга верхнего блока', group: 'back' },
  { id: 'row-bar', name: 'Тяга штанги в наклоне', group: 'back' },
  { id: 'row-db', name: 'Тяга гантели в наклоне', group: 'back' },
  { id: 'row-cable', name: 'Горизонтальная тяга блока', group: 'back' },
  { id: 'rdl', name: 'Румынская тяга', group: 'back' },
  { id: 'hyperext', name: 'Гиперэкстензия', group: 'back', bodyweight: true },
  { id: 'face-pull', name: 'Face pull', group: 'back' },
  // Ноги
  { id: 'squat', name: 'Присед со штангой', group: 'legs' },
  { id: 'hack-squat', name: 'Гакк-присед', group: 'legs' },
  { id: 'leg-press', name: 'Жим ногами', group: 'legs' },
  { id: 'lunge', name: 'Выпады', group: 'legs' },
  { id: 'bulgarian', name: 'Болгарские выпады', group: 'legs' },
  { id: 'leg-curl', name: 'Сгибание ног', group: 'legs' },
  { id: 'leg-ext', name: 'Разгибание ног', group: 'legs' },
  { id: 'calf', name: 'Подъёмы на носки', group: 'legs' },
  { id: 'hip-thrust', name: 'Ягодичный мост / hip thrust', group: 'legs' },
  // Плечи
  { id: 'ohp-db', name: 'Жим гантелей сидя', group: 'shoulders' },
  { id: 'ohp-machine', name: 'Жим в тренажёре', group: 'shoulders' },
  { id: 'lateral-raise', name: 'Разведение в стороны', group: 'shoulders' },
  { id: 'rear-delt', name: 'Разведение назад', group: 'shoulders' },
  { id: 'front-raise', name: 'Подъёмы вперёд', group: 'shoulders' },
  // Руки
  { id: 'curl-bar', name: 'Подъём штанги на бицепс', group: 'arms' },
  { id: 'curl-db', name: 'Подъём гантелей на бицепс', group: 'arms' },
  { id: 'hammer-curl', name: 'Молотковые сгибания', group: 'arms' },
  { id: 'triceps-pushdown', name: 'Разгибание на блоке', group: 'arms' },
  { id: 'skullcrushers', name: 'Французский жим', group: 'arms' },
  { id: 'close-grip', name: 'Жим узким хватом', group: 'arms' },
  // Кор
  { id: 'plank', name: 'Планка', group: 'core', timed: true },
  { id: 'dead-bug', name: 'Dead bug', group: 'core', bodyweight: true },
  { id: 'crunch', name: 'Скручивания', group: 'core', bodyweight: true },
  { id: 'hanging-leg', name: 'Подъём ног в висе', group: 'core', bodyweight: true },
  { id: 'ab-wheel', name: 'Ролик для пресса', group: 'core', bodyweight: true },
  // Кардио
  { id: 'run', name: 'Бег', group: 'cardio', timed: true },
  { id: 'bike', name: 'Велотренажёр', group: 'cardio', timed: true },
  { id: 'row-ergo', name: 'Гребной тренажёр', group: 'cardio', timed: true },
  { id: 'walk', name: 'Ходьба', group: 'cardio', timed: true },
]

export function getExercise(id: string, custom: Exercise[] = []): Exercise | undefined {
  return custom.find((e) => e.id === id) ?? EXERCISES.find((e) => e.id === id)
}

export function createCustomExercise(name: string, group: MuscleGroup): Exercise {
  return {
    id: `custom-${crypto.randomUUID()}`,
    name: name.trim(),
    group,
  }
}

export function searchExercises(
  query: string,
  group?: MuscleGroup | 'all',
  custom: Exercise[] = [],
): Exercise[] {
  const q = query.trim().toLowerCase()
  const all = [...custom, ...EXERCISES]
  return all.filter((e) => {
    if (group && group !== 'all' && e.group !== group) return false
    if (!q) return true
    return e.name.toLowerCase().includes(q)
  })
}
