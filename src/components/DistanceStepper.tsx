import { getDistanceStepperConfig, formatDistance } from '../lib/cardio'
import { Stepper } from './Stepper'

export function DistanceStepper({
  meters,
  compact = false,
  onChangeMeters,
}: {
  meters: number
  compact?: boolean
  onChangeMeters: (m: number) => void
}) {
  const cfg = getDistanceStepperConfig()
  return (
    <div style={{ flex: 1 }}>
      <Stepper
        label={cfg.label}
        value={meters}
        step={cfg.step}
        min={cfg.min}
        compact={compact}
        editable={cfg.editable}
        onChange={onChangeMeters}
      />
      {meters >= 1000 && (
        <p className="meta tnum" style={{ margin: '4px 0 0', textAlign: 'center', fontSize: '0.75rem' }}>
          {formatDistance(meters)}
        </p>
      )}
    </div>
  )
}
