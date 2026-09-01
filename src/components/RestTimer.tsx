import { useEffect, useRef, useState } from 'react'
import { CloseButton } from './IconButtons'

const SIZE = 42
const R = 18
const C = 2 * Math.PI * R

interface RestTimerProps {
  runId: number
  duration: number
  onAdjust: (seconds: number) => void
  onDismiss: () => void
}

export function RestTimer({ runId, duration, onAdjust, onDismiss }: RestTimerProps) {
  const [remaining, setRemaining] = useState(duration)
  const [total, setTotal] = useState(duration)
  const endRef = useRef(Date.now() + duration * 1000)

  useEffect(() => {
    endRef.current = Date.now() + duration * 1000
    setRemaining(duration)
    setTotal(duration)
    // restart only on new set
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runId])

  useEffect(() => {
    const id = window.setInterval(() => {
      setRemaining(Math.max(0, Math.round((endRef.current - Date.now()) / 1000)))
    }, 200)
    return () => window.clearInterval(id)
  }, [runId])

  const adjust = (delta: number) => {
    endRef.current = Math.max(Date.now(), endRef.current + delta * 1000)
    const next = Math.max(15, duration + delta)
    setTotal((t) => Math.max(15, t + delta))
    setRemaining(Math.max(0, Math.round((endRef.current - Date.now()) / 1000)))
    onAdjust(next)
  }

  const done = remaining === 0
  const progress = total > 0 ? remaining / total : 0
  const mm = Math.floor(remaining / 60)
  const ss = String(remaining % 60).padStart(2, '0')

  return (
    <div className="rest-timer glass" role="timer">
      <svg className="ring" viewBox={`0 0 ${SIZE} ${SIZE}`} aria-hidden>
        <circle cx={SIZE / 2} cy={SIZE / 2} r={R} fill="none" stroke="#2a2a2a" strokeWidth="2.5" />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={R}
          fill="none"
          stroke={done ? '#3dd68c' : '#f0b429'}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={C * (1 - progress)}
        />
      </svg>
      <div>
        <div className={`time tnum${done ? ' done-txt' : ''}`}>
          {done ? 'Готово' : `${mm}:${ss}`}
        </div>
        <div className="label">Отдых</div>
      </div>
      <button type="button" className="ghost" onClick={() => adjust(-15)}>
        −15
      </button>
      <button type="button" className="ghost" onClick={() => adjust(15)}>
        +15
      </button>
      <CloseButton onClick={onDismiss} />
    </div>
  )
}
