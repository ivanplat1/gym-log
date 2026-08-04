import { useMemo, useState } from 'react'
import { FOOD_PRESETS, MEAL_LABELS, type MealSlot } from '../data/foods'
import { useStore } from '../lib/store'
import {
  formatAmountLabel,
  resolveScaleMode,
  scaleMacros,
  type MacroSet,
  type ScaleMode,
} from '../lib/foodPortion'
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

const GRAM_QUICK = [50, 100, 150, 200, 250]

export function FoodScreen() {
  const { store, setStore } = useStore()
  const date = todayKey()
  const totals = macrosForDay(store.foods, date)
  const today = store.foods.filter((f) => f.date === date)

  const [open, setOpen] = useState(false)
  const [meal, setMeal] = useState<MealSlot>('lunch')
  const [name, setName] = useState('')
  const [q, setQ] = useState('')

  // база пресета (макросы на baseAmount)
  const [baseMacros, setBaseMacros] = useState<MacroSet | null>(null)
  const [baseAmount, setBaseAmount] = useState(100)
  const [scaleMode, setScaleMode] = useState<ScaleMode>('grams')
  /** Только цифры в поле — без «г» */
  const [amountText, setAmountText] = useState('100')

  // ручной ввод макросов (если нет базы / правка)
  const [manualMacros, setManualMacros] = useState(false)
  const [kcal, setKcal] = useState('')
  const [protein, setProtein] = useState('')
  const [carbs, setCarbs] = useState('')
  const [fat, setFat] = useState('')

  const amount = Number(amountText.replace(',', '.')) || 0

  const presets = useMemo(() => {
    const query = q.trim().toLowerCase()
    const list = query
      ? FOOD_PRESETS.filter((p) => p.name.toLowerCase().includes(query))
      : FOOD_PRESETS
    return list.slice(0, query ? 80 : 40)
  }, [q])

  const displayMacros: MacroSet = useMemo(() => {
    if (baseMacros && !manualMacros && amount > 0) {
      return scaleMacros(baseMacros, baseAmount, amount)
    }
    return {
      kcal: Number(kcal) || 0,
      protein: Number(protein) || 0,
      carbs: Number(carbs) || 0,
      fat: Number(fat) || 0,
    }
  }, [baseMacros, baseAmount, amount, manualMacros, kcal, protein, carbs, fat])

  const resetForm = () => {
    setName('')
    setBaseMacros(null)
    setBaseAmount(100)
    setScaleMode('grams')
    setAmountText('100')
    setManualMacros(false)
    setKcal('')
    setProtein('')
    setCarbs('')
    setFat('')
    setQ('')
  }

  const apply = (id: string) => {
    const p = FOOD_PRESETS.find((x) => x.id === id)
    if (!p) return
    const { mode, baseAmount: base } = resolveScaleMode(p.portion)
    const macros: MacroSet = {
      kcal: p.kcal,
      protein: p.protein,
      carbs: p.carbs,
      fat: p.fat,
    }
    // Стартовое значение в поле — удобный шаг 10 г, база для формулы остаётся как в пресете
    let start = base
    if (mode === 'grams') {
      start = Math.max(10, Math.round(base / 10) * 10)
    }
    setName(p.name)
    setBaseMacros(macros)
    setBaseAmount(base)
    setScaleMode(mode)
    setAmountText(String(start))
    setManualMacros(false)
    const m = scaleMacros(macros, base, start)
    setKcal(String(m.kcal))
    setProtein(String(m.protein))
    setCarbs(String(m.carbs))
    setFat(String(m.fat))
  }

  const applyScaled = (n: number) => {
    if (!baseMacros || manualMacros || n < 0 || !Number.isFinite(n)) return
    const m = scaleMacros(baseMacros, baseAmount, n)
    setKcal(String(m.kcal))
    setProtein(String(m.protein))
    setCarbs(String(m.carbs))
    setFat(String(m.fat))
  }

  const setAmountValue = (next: number) => {
    const safe = Math.max(0, next)
    setAmountText(String(safe))
    applyScaled(safe)
  }

  /** Ввод с клавиатуры: только цифры, КБЖУ сразу */
  const onAmountTextChange = (raw: string) => {
    const cleaned = raw.replace(/[^\d]/g, '')
    setAmountText(cleaned)
    if (!cleaned) return
    applyScaled(Number(cleaned))
  }

  const bump = (delta: number) => {
    const next = Math.max(0, amount + delta)
    setAmountText(String(next))
    applyScaled(next)
  }

  const enableManual = () => {
    setManualMacros(true)
    setKcal(String(displayMacros.kcal))
    setProtein(String(displayMacros.protein))
    setCarbs(String(displayMacros.carbs))
    setFat(String(displayMacros.fat))
  }

  const add = () => {
    if (!name.trim()) return
    const portion =
      scaleMode === 'grams'
        ? formatAmountLabel('grams', amount)
        : formatAmountLabel('servings', amount)
    const entry: FoodEntry = {
      id: crypto.randomUUID(),
      date,
      meal,
      name: name.trim(),
      portion,
      kcal: displayMacros.kcal,
      protein: displayMacros.protein,
      carbs: displayMacros.carbs,
      fat: displayMacros.fat,
      createdAt: new Date().toISOString(),
    }
    setStore((s) => ({ ...s, foods: [entry, ...s.foods] }))
    resetForm()
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
        <p>Дневник на сегодня — пресет + граммовка, ккал пересчитаются.</p>
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
              placeholder={`Поиск среди ${FOOD_PRESETS.length} продуктов…`}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              autoFocus
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
            {!q.trim() && (
              <p style={{ marginTop: 8, color: 'var(--muted)', fontSize: '0.82rem' }}>
                Показаны первые 40 — начни вводить название
              </p>
            )}
            {q.trim() && !presets.length && (
              <p className="empty" style={{ padding: 12 }}>
                Ничего не найдено
              </p>
            )}

            <div className="form-grid" style={{ marginTop: 14 }}>
              <div className="field span2">
                <label>Название</label>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Блюдо" />
              </div>

              <div className="field span2">
                <label>{scaleMode === 'grams' ? 'Граммы' : 'Штуки'}</label>
                <div className="stepper-controls" style={{ width: '100%', justifyContent: 'space-between' }}>
                  <button
                    type="button"
                    className="glass-btn"
                    aria-label={scaleMode === 'grams' ? 'Минус 10 г' : 'Минус 1'}
                    style={{ width: 48, height: 48, borderRadius: 999, fontSize: '1.35rem' }}
                    onClick={() => bump(scaleMode === 'grams' ? -10 : -1)}
                  >
                    −
                  </button>
                  <input
                    className="tnum"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    enterKeyHint="done"
                    autoComplete="off"
                    placeholder={scaleMode === 'grams' ? '100' : '1'}
                    value={amountText}
                    onChange={(e) => onAmountTextChange(e.target.value)}
                    onBlur={() => {
                      if (!amountText) setAmountText('0')
                    }}
                    style={{
                      flex: 1,
                      minHeight: 48,
                      margin: '0 10px',
                      textAlign: 'center',
                      fontSize: '1.45rem',
                      fontWeight: 750,
                      borderRadius: 12,
                      border: '1px solid var(--hairline)',
                      background: 'var(--surface)',
                    }}
                  />
                  <button
                    type="button"
                    className="glass-btn"
                    aria-label={scaleMode === 'grams' ? 'Плюс 10 г' : 'Плюс 1'}
                    style={{ width: 48, height: 48, borderRadius: 999, fontSize: '1.35rem' }}
                    onClick={() => bump(scaleMode === 'grams' ? 10 : 1)}
                  >
                    +
                  </button>
                </div>
                {scaleMode === 'grams' && (
                  <div className="chips" style={{ marginTop: 8 }}>
                    {GRAM_QUICK.map((g) => (
                      <button
                        key={g}
                        type="button"
                        className={`chip${amount === g ? ' on' : ''}`}
                        onClick={() => setAmountValue(g)}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                )}
                {baseMacros && !manualMacros && (
                  <p style={{ margin: '8px 0 0', color: 'var(--muted)', fontSize: '0.78rem' }}>
                    КБЖУ пересчитывается от {formatAmountLabel(scaleMode, baseAmount)}
                  </p>
                )}
              </div>

              <div
                className="span2 glass"
                style={{
                  gridColumn: '1 / -1',
                  padding: '12px 14px',
                  borderRadius: 14,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: 8,
                  textAlign: 'center',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>ККАЛ</div>
                  <strong className="tnum">{displayMacros.kcal}</strong>
                </div>
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>Б</div>
                  <strong className="tnum">{displayMacros.protein}</strong>
                </div>
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>У</div>
                  <strong className="tnum">{displayMacros.carbs}</strong>
                </div>
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>Ж</div>
                  <strong className="tnum">{displayMacros.fat}</strong>
                </div>
              </div>

              {!manualMacros ? (
                <button
                  type="button"
                  className="secondary span2"
                  style={{ gridColumn: '1 / -1' }}
                  onClick={enableManual}
                >
                  Править ккал / БЖУ вручную
                </button>
              ) : (
                <>
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
                </>
              )}
            </div>

            <div className="btn-row">
              <button type="button" className="primary" style={{ width: '100%' }} onClick={add}>
                Сохранить · {formatAmountLabel(scaleMode, amount)} · {displayMacros.kcal} ккал
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
