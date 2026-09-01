import { getTimedStepperConfig } from '../lib/cardio'
import type { Exercise } from '../data/exercises'
import { Stepper } from './Stepper'

export function TimedDurationStepper({
  exerciseId,
  durationSec,
  customExercises = [],
  compact = false,
  onChangeSec,
}: {
  exerciseId: string
  durationSec: number
  customExercises?: Exercise[]
  compact?: boolean
  onChangeSec: (sec: number) => void
}) {
  const cfg = getTimedStepperConfig(exerciseId, customExercises)
  return (
    <Stepper
      label={cfg.label}
      value={cfg.fromSeconds(durationSec)}
      step={cfg.step}
      min={cfg.min}
      compact={compact}
      editable={cfg.editable}
      onChange={(v) => onChangeSec(cfg.toSeconds(v))}
    />
  )
}
