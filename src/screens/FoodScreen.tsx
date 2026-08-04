import { useMemo, useState } from 'react'
import { FOOD_PRESETS, MEAL_LABELS, type MealSlot } from '../data/foods'
import { useStore } from '../lib/store'
import { macrosForDay, todayKey, type FoodEntry } from '../lib/storage'

function Ring({
  value,
  max,
  color,
  cx,
  cy,
  r,
  stroke,
}: {
  value: number
  max: number
  color: string
  cx: number
  cy: number
  r: number
  stroke: number
}) {
  const c = 2 * Math.PI * r
  const p = Math.min(1, value / Math.max(max, 1))
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill="none"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeDasharray={c}
      strokeDashoffset={c * (1 - p)}
    />
  )
}

export function FoodScreen() {
  const { store, setStore } = useStore()
  const date = todayKey()
  const totals = macrosForDay(store.foods, date)
  const today = store.foods.filter((f) => f.date === date)

  const [open, setOpen] = useState(false)
  const [meal, setMeal] = useState<MealSlot>('lunch')
  const [name, setName] = useState('')
  const [portion, setPortion] = useState('')
  const [kcal, setKcal] = useState('')
  const [protein, setProtein] = useState('')
  const [carbs, setCarbs] = useState('')
  const [fat, setFat] = useState('')
  const [q, setQ] = useState('')

  const presets = useMemo(
    () => FOOD_PRESETS.filter((p) => p.name.toLowerCase().includes(q.trim().toLowerCase())),
    [q],
  )

  const apply = (id: string) => {
    const p = FOOD_PRESETS.find((x) => x.id === id)
    if (!p) return
    setName(p.name)
    setPortion(p.portion)
    setKcal(String(p.kcal))
    setProtein(String(p.protein))
    setCarbs(String(p.carbs))
    setFat(String(p.fat))
  }

  const add = () => {
    if (!name.trim()) return
    const entry: FoodEntry = {
      id: crypto.randomUUID(),
      date,
      meal,
      name: name.trim(),
      portion: portion.trim(),
      kcal: Number(kcal) || 0,
      protein: Number(protein) || 0,
      carbs: Number(carbs) || 0,
      fat: Number(fat) || 0,
      createdAt: new Date().toISOString(),
    }
    setStore((s) => ({ ...s, foods: [entry, ...s.foods] }))
    setName('')
    setPortion('')
    setKcal('')
    setProtein('')
    setCarbs('')
    setFat('')
    setOpen(false)
  }

  const remove = (id: string) => {
    setStore((s) => ({ ...s, foods: s.foods.filter((f) => f.id !== id) }))
  }

  return (
    <>
      <header className="page-head">
        <div className="brand">
          <i>G</i> gym-log
        </div>
        <h1>Питание</h1>
        <p>Дневник на сегодня — пресеты или своё блюдо.</p>
      </header>

      <div className="macro-card glass">
        <div className="rings">
          <svg viewBox="0 0 88 88" aria-hidden>
            <circle cx="44" cy="44" r="36" fill="none" stroke="#2a2a2a" strokeWidth="7" />
            <Ring value={totals.kcal} max={store.goals.kcal} color="#f0b429" cx={44} cy={44} r={36} stroke={7} />
            <circle cx="44" cy="44" r="26" fill="none" stroke="#2a2a2a" strokeWidth="6" />
            <Ring value={totals.protein} max={store.goals.protein} color="#3dd68c" cx={44} cy={44} r={26} stroke={6} />
          </svg>
          <div className="center">
            <b className="tnum">{Math.round(totals.kcal)}</b>
            <span>ккал</span>
          </div>
        </div>
        <div className="macro-side">
          <div className="macro-line">
            <span>
              <i className="dot" style={{ background: '#3dd68c' }} />
              Белок
            </span>
            <strong className="tnum">
              {Math.round(totals.protein)} / {store.goals.protein}г
            </strong>
          </div>
          <div className="macro-line">
            <span>
              <i className="dot" style={{ background: '#6ea8fe' }} />
              Углев.
            </span>
            <strong className="tnum">
              {Math.round(totals.carbs)} / {store.goals.carbs}г
            </strong>
          </div>
          <div className="macro-line">
            <span>
              <i className="dot" style={{ background: '#ff6b5a' }} />
              Жиры
            </span>
            <strong className="tnum">
              {Math.round(totals.fat)} / {store.goals.fat}г
            </strong>
          </div>
        </div>
      </div>

      <button type="button" className="primary" style={{ width: '100%' }} onClick={() => setOpen(true)}>
        + Добавить еду
      </button>

      {(Object.keys(MEAL_LABELS) as MealSlot[]).map((slot) => {
        const items = today.filter((f) => f.meal === slot)
        const mealKcal = items.reduce((n, f) => n + f.kcal, 0)
        return (
          <div key={slot} className="meal glass" style={{ marginTop: 12 }}>
            <div className="meal-title">
              <span>{MEAL_LABELS[slot]}</span>
              <span className="tnum">{items.length ? `${Math.round(mealKcal)} ккал` : 'пусто'}</span>
            </div>
            {items.map((f) => (
              <div key={f.id} className="food-row">
                <div>
                  <strong>{f.name}</strong>
                  <div className="meta">
                    {f.portion || 'порция'} · Б{f.protein} У{f.carbs} Ж{f.fat}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="tnum" style={{ fontWeight: 750 }}>
                    {Math.round(f.kcal)}
                  </div>
                  <button type="button" className="ghost" style={{ marginTop: 4 }} onClick={() => remove(f.id)}>
                    ✕
                  </button>
                </div>
              </div>
            ))}
            {!items.length && (
              <div style={{ padding: '8px 0 4px', color: 'var(--muted)', fontSize: '0.85rem' }}>
                Ничего не записано
              </div>
            )}
          </div>
        )
      })}

      <section className="goals">
        <h2>Цели дня</h2>
        <div className="form-grid glass" style={{ padding: 14, borderRadius: 18 }}>
          {(
            [
              ['kcal', 'Ккал'],
              ['protein', 'Белок'],
              ['carbs', 'Углеводы'],
              ['fat', 'Жиры'],
            ] as const
          ).map(([key, label]) => (
            <div key={key} className="field">
              <label>{label}</label>
              <input
                type="number"
                min={0}
                value={store.goals[key]}
                onChange={(e) =>
                  setStore((s) => ({
                    ...s,
                    goals: { ...s.goals, [key]: Number(e.target.value) || 0 },
                  }))
                }
              />
            </div>
          ))}
        </div>
      </section>

      {open && (
        <div className="sheet-bg" role="dialog" aria-modal onClick={() => setOpen(false)}>
          <div className="sheet" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2>Еда</h2>
              <button type="button" className="ghost" onClick={() => setOpen(false)}>
                Закрыть
              </button>
            </div>

            <div className="chips">
              {(Object.keys(MEAL_LABELS) as MealSlot[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  className={`chip${meal === m ? ' on' : ''}`}
                  onClick={() => setMeal(m)}
                >
                  {MEAL_LABELS[m]}
                </button>
              ))}
            </div>

            <input
              className="search"
              placeholder="Пресет: курица, творог…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <div className="preset-grid">
              {presets.map((p) => (
                <button key={p.id} type="button" className="preset" onClick={() => apply(p.id)}>
                  <strong>{p.name}</strong>
                  <span>
                    {p.portion} · {p.kcal} ккал
                  </span>
                </button>
              ))}
            </div>

            <div className="form-grid">
              <div className="field span2">
                <label>Название</label>
                <input value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="field span2">
                <label>Порция</label>
                <input value={portion} onChange={(e) => setPortion(e.target.value)} />
              </div>
              <div className="field">
                <label>Ккал</label>
                <input type="number" value={kcal} onChange={(e) => setKcal(e.target.value)} />
              </div>
              <div className="field">
                <label>Белок</label>
                <input type="number" value={protein} onChange={(e) => setProtein(e.target.value)} />
              </div>
              <div className="field">
                <label>Углеводы</label>
                <input type="number" value={carbs} onChange={(e) => setCarbs(e.target.value)} />
              </div>
              <div className="field">
                <label>Жиры</label>
                <input type="number" value={fat} onChange={(e) => setFat(e.target.value)} />
              </div>
            </div>

            <div className="btn-row">
              <button type="button" className="primary" style={{ width: '100%' }} onClick={add}>
                Сохранить
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
