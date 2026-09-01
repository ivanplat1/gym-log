import { useEffect, useState } from 'react'

interface StepperProps {
  label: string
  value: number
  step: number
  min?: number
  decimals?: number
  compact?: boolean
  /** Позволяет ввести точное значение с клавиатуры */
  editable?: boolean
  onChange: (value: number) => void
}

function formatShown(value: number, decimals: number): string {
  if (decimals > 0) return value.toFixed(decimals).replace(/\.0$/, '')
  return String(value)
}

export function Stepper({
  label,
  value,
  step,
  min = 0,
  decimals = 0,
  compact = false,
  editable = false,
  onChange,
}: StepperProps) {
  const shown = formatShown(value, decimals)
  const [text, setText] = useState(shown)

  useEffect(() => {
    setText(shown)
  }, [shown])

  const applyText = (raw: string) => {
    const normalized = raw.trim().replace(',', '.')
    if (!normalized) {
      onChange(min)
      setText(formatShown(min, decimals))
      return
    }
    const n = decimals > 0 ? parseFloat(normalized) : parseInt(normalized, 10)
    if (!Number.isFinite(n)) {
      setText(shown)
      return
    }
    const clamped = Math.max(min, +n.toFixed(decimals > 0 ? 2 : 0))
    onChange(clamped)
    setText(formatShown(clamped, decimals))
  }

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
        {editable ? (
          <input
            className="stepper-input tnum"
            type="text"
            inputMode={decimals > 0 ? 'decimal' : 'numeric'}
            enterKeyHint="done"
            autoComplete="off"
            aria-label={label}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={() => applyText(text)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.currentTarget.blur()
              }
            }}
          />
        ) : (
          <span className="val tnum">{shown}</span>
        )}
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
