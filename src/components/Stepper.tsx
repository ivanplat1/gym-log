interface StepperProps {
  label: string
  value: number
  step: number
  min?: number
  decimals?: number
  compact?: boolean
  onChange: (value: number) => void
}

export function Stepper({
  label,
  value,
  step,
  min = 0,
  decimals = 0,
  compact = false,
  onChange,
}: StepperProps) {
  const shown =
    decimals > 0 ? value.toFixed(decimals).replace(/\.0$/, '') : String(value)

  return (
    <div className={`stepper${compact ? ' compact' : ''}`}>
      <label>{label}</label>
      <div className="stepper-controls">
        <button
          type="button"
          className="glass-btn"
          aria-label={`Минус ${label}`}
          onClick={() => onChange(Math.max(min, +(value - step).toFixed(2)))}
        >
          −
        </button>
        <span className="val tnum">{shown}</span>
        <button
          type="button"
          className="glass-btn"
          aria-label={`Плюс ${label}`}
          onClick={() => onChange(+(value + step).toFixed(2))}
        >
          +
        </button>
      </div>
    </div>
  )
}
