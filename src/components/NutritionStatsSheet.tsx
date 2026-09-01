import { useMemo, useState } from 'react'
import { CloseButton } from './IconButtons'
import { effectiveGoals } from '../lib/nutritionGoals'
import { macrosForDay, todayKey, type Store } from '../lib/storage'

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
  const kcalDelta = deltaLabel(totals.kcal, goals.kcal, ' ккал')

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
            {goals.trainingDay ? 'День тренировки' : 'День отдыха'} · цель по BMR
          </p>
        </div>

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
