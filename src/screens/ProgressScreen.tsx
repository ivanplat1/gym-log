import { useEffect, useMemo, useState } from 'react'
import { useStore } from '../lib/store'
import type { ExerciseTrackKind } from '../lib/workoutFormat'
import {
  exerciseSeries,
  primaryMetricValue,
  trackedExercises,
  volumeSeries,
  weeklyVolume,
  type ExercisePoint,
  type TrackedExercise,
} from '../lib/progressStats'

type Metric = 'primary' | 'e1rm' | 'volume'

function BarChart({
  labels,
  values,
  color = '#f0b429',
  unit = '',
}: {
  labels: string[]
  values: number[]
  color?: string
  unit?: string
}) {
  const max = Math.max(...values, 1)
  const w = 320
  const h = 140
  const padL = 8
  const padR = 8
  const padT = 16
  const padB = 28
  const innerW = w - padL - padR
  const innerH = h - padT - padB
  const gap = values.length > 10 ? 2 : 4
  const barW = Math.max(4, (innerW - gap * (values.length - 1)) / Math.max(values.length, 1))

  if (!values.length) {
    return <p className="empty" style={{ padding: 20 }}>Пока нет данных</p>
  }

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="progress-chart" role="img">
      {values.map((v, i) => {
        const bh = (v / max) * innerH
        const x = padL + i * (barW + gap)
        const y = padT + innerH - bh
        const showLabel = values.length <= 10 || i % 2 === 0 || i === values.length - 1
        return (
          <g key={`${labels[i]}-${i}`}>
            <rect x={x} y={y} width={barW} height={Math.max(bh, 1)} rx={3} fill={color} opacity={0.9} />
            {showLabel && (
              <text
                x={x + barW / 2}
                y={h - 8}
                textAnchor="middle"
                fill="currentColor"
                opacity={0.45}
                fontSize="9"
              >
                {labels[i]}
              </text>
            )}
            {v > 0 && values.length <= 12 && (
              <text
                x={x + barW / 2}
                y={y - 4}
                textAnchor="middle"
                fill="currentColor"
                opacity={0.7}
                fontSize="8"
                className="tnum"
              >
                {v}
                {unit}
              </text>
            )}
          </g>
        )
      })}
    </svg>
  )
}

function LineChart({
  labels,
  values,
  color = '#3dd68c',
  unit = '',
}: {
  labels: string[]
  values: number[]
  color?: string
  unit?: string
}) {
  const max = Math.max(...values, 1)
  const min = Math.min(...values, 0)
  const span = Math.max(max - min, 1)
  const w = 320
  const h = 140
  const padL = 10
  const padR = 10
  const padT = 18
  const padB = 28
  const innerW = w - padL - padR
  const innerH = h - padT - padB

  if (values.length < 1) {
    return <p className="empty" style={{ padding: 20 }}>Пока нет данных</p>
  }

  const pts = values.map((v, i) => {
    const x = padL + (values.length === 1 ? innerW / 2 : (i / (values.length - 1)) * innerW)
    const y = padT + innerH - ((v - min) / span) * innerH
    return { x, y, v, label: labels[i] }
  })

  const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ')

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="progress-chart" role="img">
      <path d={d} fill="none" stroke={color} strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
      {pts.map((p, i) => (
        <g key={`${p.label}-${i}`}>
          <circle cx={p.x} cy={p.y} r="3.5" fill={color} />
          {(pts.length <= 10 || i === 0 || i === pts.length - 1 || i % 2 === 0) && (
            <text
              x={p.x}
              y={h - 8}
              textAnchor="middle"
              fill="currentColor"
              opacity={0.45}
              fontSize="9"
            >
              {p.label}
            </text>
          )}
          {pts.length <= 12 && (
            <text
              x={p.x}
              y={p.y - 8}
              textAnchor="middle"
              fill="currentColor"
              opacity={0.75}
              fontSize="8"
              className="tnum"
            >
              {p.v}
              {unit}
            </text>
          )}
        </g>
      ))}
    </svg>
  )
}

function metricValue(point: ExercisePoint, metric: Metric): number {
  if (metric === 'volume') return point.volume
  if (metric === 'e1rm') return point.e1rm
  return primaryMetricValue(point)
}

function metricUnit(kind: ExerciseTrackKind, metric: Metric): string {
  if (metric === 'volume') return kind === 'reps' ? ' повт' : kind === 'timed' ? ' с' : ''
  if (metric === 'e1rm') return ''
  if (kind === 'timed') return 'с'
  if (kind === 'reps') return ''
  return ''
}

function metricLabels(kind: ExerciseTrackKind): { key: Metric; label: string }[] {
  if (kind === 'reps') {
    return [
      { key: 'primary', label: 'Макс. повторы' },
      { key: 'volume', label: 'Сумма повт.' },
    ]
  }
  if (kind === 'timed') {
    return [
      { key: 'primary', label: 'Макс. время' },
    ]
  }
  return [
    { key: 'primary', label: 'Макс. вес' },
    { key: 'e1rm', label: 'Оценка 1ПМ' },
    { key: 'volume', label: 'Объём' },
  ]
}

function bestLabel(ex: TrackedExercise): string {
  if (ex.kind === 'reps') return `лучший ${ex.bestBest} повт.`
  if (ex.kind === 'timed') return `лучший ${ex.bestBest} с`
  return `лучший ${ex.bestBest} кг`
}

export function ProgressScreen() {
  const { store } = useStore()
  const exercises = useMemo(() => trackedExercises(store.sessions), [store.sessions])
  const [exerciseId, setExerciseId] = useState<string>('')
  const [metric, setMetric] = useState<Metric>('primary')

  const activeId = exerciseId || exercises[0]?.exerciseId || ''
  const active = exercises.find((e) => e.exerciseId === activeId)
  const activeKind = active?.kind ?? 'weight'

  const sessions = useMemo(() => volumeSeries(store.sessions), [store.sessions])
  const weeks = useMemo(() => weeklyVolume(store.sessions, 8), [store.sessions])
  const exPoints = useMemo(
    () => (activeId ? exerciseSeries(store.sessions, activeId) : []),
    [store.sessions, activeId],
  )

  useEffect(() => {
    setMetric('primary')
  }, [activeId])

  const exValues = exPoints.map((p) => metricValue(p, metric))
  const delta =
    exValues.length >= 2 ? Math.round((exValues[exValues.length - 1] - exValues[0]) * 10) / 10 : null
  const unit = metricUnit(activeKind, metric)
  const chips = metricLabels(activeKind)

  return (
    <>
      <header className="page-head">
        <div className="brand">
          <i>G</i> gym-log
        </div>
        <h1>Прогресс</h1>
        <p>Сила и повторы по каждому упражнению</p>
      </header>

      {!sessions.length ? (
        <div className="empty">Заверши несколько тренировок — здесь появятся графики</div>
      ) : (
        <div className="stack">
          <section className="glass progress-card">
            <div className="progress-card-head">
              <h2>Упражнение</h2>
              {active && (
                <span className="tnum muted">
                  {bestLabel(active)}
                  {delta != null ? ` · Δ ${delta > 0 ? '+' : ''}${delta}${unit}` : ''}
                </span>
              )}
            </div>

            {!exercises.length ? (
              <p className="empty" style={{ padding: 12 }}>
                Нет данных по упражнениям
              </p>
            ) : (
              <>
                <select
                  className="progress-select"
                  value={activeId}
                  onChange={(e) => setExerciseId(e.target.value)}
                >
                  {exercises.map((ex) => (
                    <option key={ex.exerciseId} value={ex.exerciseId}>
                      {ex.name} · {ex.sessions} сес.
                    </option>
                  ))}
                </select>

                <div className="chips" style={{ marginTop: 10, marginBottom: 8 }}>
                  {chips.map(({ key, label }) => (
                    <button
                      key={key}
                      type="button"
                      className={`chip${metric === key ? ' on' : ''}`}
                      onClick={() => setMetric(key)}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <LineChart
                  labels={exPoints.map((p) => p.label)}
                  values={exValues}
                  color="#3dd68c"
                  unit={unit}
                />
              </>
            )}
          </section>

          <section className="glass progress-card">
            <div className="progress-card-head">
              <h2>Общий объём</h2>
              <span className="tnum muted">кг · все упражнения</span>
            </div>
            <BarChart
              labels={sessions.map((s) => s.label)}
              values={sessions.map((s) => s.volume)}
              color="#f0b429"
            />
          </section>

          <section className="glass progress-card">
            <div className="progress-card-head">
              <h2>По неделям</h2>
              <span className="tnum muted">сумма кг</span>
            </div>
            <BarChart
              labels={weeks.map((w) => w.label)}
              values={weeks.map((w) => w.volume)}
              color="#6ea8fe"
            />
            <div className="progress-week-meta">
              {weeks.map((w) => (
                <span key={w.label} className="tnum">
                  {w.count ? `${w.count}тр` : '—'}
                </span>
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  )
}
