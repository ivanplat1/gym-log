import { useMemo, useState } from 'react'
import { CloseButton } from './IconButtons'
import { effectiveGoals } from '../lib/nutritionGoals'
import { weightDelta, weightSeries } from '../lib/weightStats'
import { macrosForDay, todayKey, weightKgForDate, type Store } from '../lib/storage'

function shiftDate(date: string, delta: number): string {
  const d = new Date(`${date}T12:00:00`)
  d.setDate(d.getDate() + delta)
  return todayKey(d)
}

function formatDayLabel(date: string): string {
  const d = new Date(`${date}T12:00:00`)
  const today = todayKey()
  const yesterday = shiftDate(today, -1)
  if (date === today) return 'Сегодня'
  if (date === yesterday) return 'Вчера'
  return d.toLocaleDateString('ru-RU', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  })
}

function deltaLabel(eaten: number, goal: number, unit = ''): { text: string; tone: 'ok' | 'over' | 'under' | 'empty' } {
  if (goal <= 0) return { text: '—', tone: 'empty' }
  if (eaten <= 0) return { text: 'нет записей', tone: 'empty' }
  const diff = Math.round(eaten - goal)
  if (Math.abs(diff) <= Math.max(20, goal * 0.03)) {
    return { text: 'в цель', tone: 'ok' }
  }
  if (diff > 0) {
    return { text: `+${diff}${unit} добрал`, tone: 'over' }
  }
  return { text: `${diff}${unit} недобрал`, tone: 'under' }
}

function StatRow({
  label,
  color,
  eaten,
  goal,
  unit,
}: {
  label: string
  color: string
  eaten: number
  goal: number
  unit: string
}) {
  const pct = Math.min(1.2, eaten / Math.max(goal, 1))
  const d = deltaLabel(eaten, goal, unit)
  return (
    <div className="nutrition-stat-row">
      <div className="nutrition-stat-head">
        <span>
          <i className="dot" style={{ background: color }} />
          {label}
        </span>
        <strong className="tnum">
          {Math.round(eaten)} / {goal}
          {unit}
        </strong>
      </div>
      <div className="nutrition-stat-bar">
        <div
          className="nutrition-stat-fill"
          style={{
            width: `${Math.min(100, pct * 100)}%`,
            background: color,
            opacity: d.tone === 'empty' ? 0.25 : 0.9,
          }}
        />
        {pct > 1 && <div className="nutrition-stat-over" style={{ background: color }} />}
      </div>
      <div className={`nutrition-stat-delta nutrition-stat-delta-${d.tone}`}>{d.text}</div>
    </div>
  )
}

function WeightLineChart({
  labels,
  values,
}: {
  labels: string[]
  values: number[]
}) {
  const max = Math.max(...values, 1)
  const min = Math.min(...values, max)
  const span = Math.max(max - min, 0.5)
  const w = 320
  const h = 100
  const padL = 10
  const padR = 10
  const padT = 14
  const padB = 22
  const innerW = w - padL - padR
  const innerH = h - padT - padB

  if (values.length < 1) {
    return <p className="empty" style={{ padding: 12, fontSize: '0.82rem' }}>Нет взвешиваний</p>
  }

  const pts = values.map((v, i) => {
    const x = padL + (values.length === 1 ? innerW / 2 : (i / (values.length - 1)) * innerW)
    const y = padT + innerH - ((v - min) / span) * innerH
    return { x, y, v, label: labels[i] }
  })

  const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ')

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="progress-chart" role="img" aria-label="График веса">
      <path d={d} fill="none" stroke="#c9a227" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
      {pts.map((p, i) => (
        <g key={`${p.label}-${i}`}>
          <circle cx={p.x} cy={p.y} r="3" fill="#c9a227" />
          {(pts.length <= 8 || i === 0 || i === pts.length - 1) && (
            <text x={p.x} y={h - 6} textAnchor="middle" fill="currentColor" opacity={0.45} fontSize="8">
              {p.label}
            </text>
          )}
        </g>
      ))}
    </svg>
  )
}

export function NutritionStatsSheet({
  store,
  onClose,
}: {
  store: Store
  onClose: () => void
}) {
  const [date, setDate] = useState(() => todayKey())
  const today = todayKey()
  const totals = useMemo(() => macrosForDay(store.foods, date), [store.foods, date])
  const goals = useMemo(() => effectiveGoals(store, date), [store, date])
  const weight = useMemo(
    () => weightKgForDate(store.weightHistory ?? [], store.profile, date),
    [store.weightHistory, store.profile, date],
  )
  const kcalDelta = deltaLabel(totals.kcal, goals.kcal, ' ккал')
  const weightPoints = useMemo(() => weightSeries(store.weightHistory ?? [], 14), [store.weightHistory])
  const totalWeightDelta = useMemo(() => weightDelta(store.weightHistory ?? []), [store.weightHistory])

  const week = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => {
      const d = shiftDate(today, -6 + i)
      const t = macrosForDay(store.foods, d)
      const g = effectiveGoals(store, d)
      return { date: d, eaten: t.kcal, goal: g.kcal, delta: Math.round(t.kcal - g.kcal) }
    })
  }, [store, today])

  return (
    <div className="sheet-bg" role="dialog" aria-modal onClick={onClose}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>Статистика</h2>
          <CloseButton onClick={onClose} />
        </div>

        <div className="nutrition-day-nav">
          <button type="button" className="ghost" onClick={() => setDate((d) => shiftDate(d, -1))}>
            ‹
          </button>
          <div className="nutrition-day-label">
            <strong>{formatDayLabel(date)}</strong>
            <span className="tnum">{date}</span>
          </div>
          <button
            type="button"
            className="ghost"
            disabled={date >= today}
            onClick={() => setDate((d) => shiftDate(d, 1))}
          >
            ›
          </button>
        </div>

        <div className="nutrition-kcal-card glass">
          <div className="tnum" style={{ fontSize: '1.8rem', fontWeight: 800 }}>
            {Math.round(totals.kcal)}
            <span style={{ fontSize: '0.9rem', color: 'var(--muted)', fontWeight: 600 }}>
              {' '}
              / {goals.kcal} ккал
            </span>
          </div>
          <div className={`nutrition-stat-delta nutrition-stat-delta-${kcalDelta.tone}`} style={{ marginTop: 4 }}>
            {kcalDelta.text}
          </div>
          <p style={{ margin: '8px 0 0', color: 'var(--muted)', fontSize: '0.78rem' }}>
            {goals.trainingDay ? 'День тренировки' : 'День отдыха'} · BMR{' '}
            <span className="tnum">{goals.bmr}</span> · вес <span className="tnum">{weight}</span> кг
          </p>
        </div>

        {weightPoints.length > 0 && (
          <div style={{ marginTop: 14 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: 8,
              }}
            >
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 700 }}>Вес</div>
              {totalWeightDelta != null && (
                <span
                  className="tnum"
                  style={{
                    fontSize: '0.75rem',
                    color: totalWeightDelta <= 0 ? 'var(--green)' : 'var(--muted)',
                  }}
                >
                  {totalWeightDelta > 0 ? '+' : ''}
                  {totalWeightDelta} кг
                </span>
              )}
            </div>
            <WeightLineChart
              labels={weightPoints.map((p) => p.label)}
              values={weightPoints.map((p) => p.weightKg)}
            />
          </div>
        )}

        <div style={{ marginTop: 14, display: 'grid', gap: 12 }}>
          <StatRow label="Ккал" color="#f0b429" eaten={totals.kcal} goal={goals.kcal} unit="" />
          <StatRow label="Белок" color="#3dd68c" eaten={totals.protein} goal={goals.protein} unit="г" />
          <StatRow label="Углеводы" color="#6ea8fe" eaten={totals.carbs} goal={goals.carbs} unit="г" />
          <StatRow label="Жиры" color="#ff6b5a" eaten={totals.fat} goal={goals.fat} unit="г" />
        </div>

        <div style={{ marginTop: 18 }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: 8, fontWeight: 700 }}>
            Последние 7 дней
          </div>
          <div className="nutrition-week">
            {week.map((d) => {
              const tone =
                d.eaten <= 0 ? 'empty' : Math.abs(d.delta) <= Math.max(20, d.goal * 0.03) ? 'ok' : d.delta > 0 ? 'over' : 'under'
              return (
                <button
                  key={d.date}
                  type="button"
                  className={`nutrition-week-day${d.date === date ? ' on' : ''}`}
                  onClick={() => setDate(d.date)}
                >
                  <span>{formatDayLabel(d.date).slice(0, 2)}</span>
                  <strong className="tnum">{d.eaten ? Math.round(d.eaten) : '—'}</strong>
                  <em className={`nutrition-stat-delta-${tone}`}>
                    {d.eaten <= 0 ? '·' : d.delta > 0 ? `+${d.delta}` : `${d.delta}`}
                  </em>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
