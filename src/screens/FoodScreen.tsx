import { useMemo, useRef, useState } from 'react'
import { CloseButton, TrashButton } from '../components/IconButtons'
import { NutritionStatsSheet } from '../components/NutritionStatsSheet'
import { FOOD_PRESETS, MEAL_LABELS, mealByTime, type MealSlot } from '../data/foods'
import { useStore } from '../lib/store'
import {
  formatAmountLabel,
  resolveScaleMode,
  scaleMacros,
  type MacroSet,
  type ScaleMode,
} from '../lib/foodPortion'
import { effectiveGoals } from '../lib/nutritionGoals'
import { suggestFoodMemory, type FoodMemoryItem } from '../lib/foodMemory'
import { searchFoodPresets } from '../lib/foodSearch'
import { useVisualViewportSheet } from '../lib/useVisualViewportSheet'
import { addFoodEntry, macrosForDay, setWeightKg, todayKey, type FoodEntry } from '../lib/storage'

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
  const goalsToday = effectiveGoals(store, date)

  const [goalsOpen, setGoalsOpen] = useState(false)
  const [statsOpen, setStatsOpen] = useState(false)
  const [mealOpen, setMealOpen] = useState<Partial<Record<MealSlot, boolean>>>({})
  const [open, setOpen] = useState(false)
  const [detailOpen, setDetailOpen] = useState(false)
  const [meal, setMeal] = useState<MealSlot>(() => mealByTime())
  const [name, setName] = useState('')
  const [q, setQ] = useState('')
  const foodSheetBgRef = useRef<HTMLDivElement>(null)
  useVisualViewportSheet(foodSheetBgRef)

  const openSheet = (slot?: MealSlot) => {
    setMeal(slot ?? mealByTime())
    setOpen(true)
  }

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
    const query = q.trim()
    return searchFoodPresets(FOOD_PRESETS, query, query ? 80 : 40)
  }, [q])

  const myFoods = useMemo(
    () => suggestFoodMemory(store.foodMemory ?? [], q, q.trim() ? 8 : 12),
    [store.foodMemory, q],
  )

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

  const closeAll = () => {
    setDetailOpen(false)
    setOpen(false)
    resetForm()
  }

  const openCustom = () => {
    resetForm()
    setOpen(true)
    setDetailOpen(true)
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
      // если уже ел это блюдо — подставить запомненные граммы
      const remembered = (store.foodMemory ?? []).find(
        (m) => m.name.toLowerCase() === p.name.toLowerCase() && m.scaleMode === 'grams',
      )
      start = remembered?.amount
        ? remembered.amount
        : Math.max(10, Math.round(base / 10) * 10)
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
    setDetailOpen(true)
  }

  const applyMemory = (item: FoodMemoryItem) => {
    setName(item.name)
    setBaseMacros(item.macros)
    setBaseAmount(item.amount)
    setScaleMode(item.scaleMode)
    setAmountText(String(item.amount))
    setManualMacros(false)
    setKcal(String(item.macros.kcal))
    setProtein(String(item.macros.protein))
    setCarbs(String(item.macros.carbs))
    setFat(String(item.macros.fat))
    setQ('')
    setDetailOpen(true)
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
    setStore((s) => addFoodEntry(s, entry))
    closeAll()
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
            <Ring value={totals.kcal} max={goalsToday.kcal} color="#f0b429" cx={44} cy={44} r={36} stroke={7} />
            <circle cx="44" cy="44" r="26" fill="none" stroke="#2a2a2a" strokeWidth="6" />
            <Ring value={totals.protein} max={goalsToday.protein} color="#3dd68c" cx={44} cy={44} r={26} stroke={6} />
          </svg>
          <div className="center">
            <b className="tnum">{Math.round(totals.kcal)}</b>
            <span className="tnum" style={{ fontSize: '0.65rem', opacity: 0.75 }}>
              / {goalsToday.kcal}
            </span>
          </div>
        </div>
        <div className="macro-side">
          <div className="macro-line">
            <span>
              <i className="dot" style={{ background: '#f0b429' }} />
              Ккал
            </span>
            <strong className="tnum">
              {Math.round(totals.kcal)} / {goalsToday.kcal}
            </strong>
          </div>
          <div className="macro-line">
            <span>
              <i className="dot" style={{ background: '#3dd68c' }} />
              Белок
            </span>
            <strong className="tnum">
              {Math.round(totals.protein)} / {goalsToday.protein}г
            </strong>
          </div>
          <div className="macro-line">
            <span>
              <i className="dot" style={{ background: '#6ea8fe' }} />
              Углев.
            </span>
            <strong className="tnum">
              {Math.round(totals.carbs)} / {goalsToday.carbs}г
            </strong>
          </div>
          <div className="macro-line">
            <span>
              <i className="dot" style={{ background: '#ff6b5a' }} />
              Жиры
            </span>
            <strong className="tnum">
              {Math.round(totals.fat)} / {goalsToday.fat}г
            </strong>
          </div>
          <p style={{ margin: '6px 0 0', color: 'var(--muted)', fontSize: '0.75rem' }}>
            {goalsToday.trainingDay
              ? `Тренировка · цель ${goalsToday.kcal} ккал`
              : `Отдых · цель ${goalsToday.kcal} ккал`}
          </p>
        </div>
      </div>

      <button type="button" className="primary" style={{ width: '100%', marginTop: 10 }} onClick={() => openSheet()}>
        + Добавить еду
      </button>

      {!!(store.foodMemory ?? []).length && (
        <div style={{ marginTop: 10 }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: 6 }}>Мои блюда</div>
          <div className="chips">
            {suggestFoodMemory(store.foodMemory ?? [], '', 6).map((m) => (
              <button
                key={m.name}
                type="button"
                className="chip"
                onClick={() => {
                  openSheet()
                  queueMicrotask(() => applyMemory(m))
                }}
              >
                {m.name}
                <span className="tnum" style={{ opacity: 0.7, marginLeft: 4 }}>
                  {m.scaleMode === 'grams' ? `${m.amount}г` : `${m.amount}шт`}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {(Object.keys(MEAL_LABELS) as MealSlot[]).map((slot) => {
        const items = today.filter((f) => f.meal === slot)
        const mealKcal = items.reduce((n, f) => n + f.kcal, 0)
        const expanded = mealOpen[slot] ?? items.length > 0
        return (
          <div key={slot} className="meal glass" style={{ marginTop: 12 }}>
            <button
              type="button"
              className="meal-title"
              onClick={() => setMealOpen((prev) => ({ ...prev, [slot]: !expanded }))}
            >
              <span className="meal-label">
                <span className="meal-chevron" aria-hidden>
                  {expanded ? '▾' : '▸'}
                </span>{' '}
                {MEAL_LABELS[slot]}
                {!expanded && items.length > 0 && (
                  <span className="meta tnum" style={{ marginLeft: 8, fontSize: '0.78rem', fontWeight: 600 }}>
                    {items.length} · {Math.round(mealKcal)} ккал
                  </span>
                )}
              </span>
              <span className="meal-title-right">
                {expanded && items.length > 0 && (
                  <span className="tnum meal-kcal">{Math.round(mealKcal)} ккал</span>
                )}
                <span
                  role="button"
                  tabIndex={0}
                  className="meal-add"
                  aria-label={`Добавить в ${MEAL_LABELS[slot]}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    openSheet(slot)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      e.stopPropagation()
                      openSheet(slot)
                    }
                  }}
                >
                  +
                </span>
              </span>
            </button>
            {expanded &&
              items.map((f) => (
                <div key={f.id} className="food-row">
                  <div>
                    <strong>{f.name}</strong>
                    <div className="meta">
                      <span className="portion-chip">{f.portion || 'порция'}</span>
                      <span className="macro-tags">
                        <span className="macro-tag macro-tag-kcal">
                          <span className="tnum">{Math.round(f.kcal)}</span> ккал
                        </span>
                        <span className="macro-tag macro-tag-p">
                          Б <span className="tnum">{f.protein}</span>
                        </span>
                        <span className="macro-tag macro-tag-c">
                          У <span className="tnum">{f.carbs}</span>
                        </span>
                        <span className="macro-tag macro-tag-f">
                          Ж <span className="tnum">{f.fat}</span>
                        </span>
                      </span>
                    </div>
                  </div>
                  <TrashButton onClick={() => remove(f.id)} />
                </div>
              ))}
          </div>
        )
      })}

      <section className="goals">
        <button
          type="button"
          className="glass"
          onClick={() => setGoalsOpen((v) => !v)}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            padding: '14px 16px',
            borderRadius: 18,
            textAlign: 'left',
          }}
        >
          <span>
            <strong style={{ display: 'block', fontSize: '0.95rem' }}>Вес и цели</strong>
            <span style={{ color: 'var(--muted)', fontSize: '0.78rem' }}>
              {store.profile.weightKg} кг · сегодня {goalsToday.kcal} ккал
              {goalsToday.trainingDay ? ' · тренировка' : ' · отдых'}
            </span>
          </span>
          <span style={{ color: 'var(--muted)', fontSize: '1.1rem' }} aria-hidden>
            {goalsOpen ? '▾' : '▸'}
          </span>
        </button>

        {goalsOpen && (
          <div className="form-grid glass" style={{ padding: 14, borderRadius: 18, marginTop: 10 }}>
            <p className="span2" style={{ margin: 0, color: 'var(--muted)', fontSize: '0.82rem' }}>
              КБЖУ считается сам: BMR × {goalsToday.trainingDay ? '1.55' : '1.4'}
              {goalsToday.trainingDay ? ' (тренировка)' : ' (отдых)'}. Меняется только вес.
            </p>
            <div className="field span2">
              <label>Вес, кг</label>
              <input
                type="number"
                min={30}
                max={250}
                step={0.1}
                value={store.profile.weightKg}
                onChange={(e) => {
                  const w = Number(e.target.value)
                  if (!Number.isFinite(w)) return
                  setStore((s) => setWeightKg(s, w))
                }}
              />
            </div>
            <div className="span2" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
              {(
                [
                  ['Ккал', goalsToday.kcal],
                  ['Б', goalsToday.protein],
                  ['У', goalsToday.carbs],
                  ['Ж', goalsToday.fat],
                ] as const
              ).map(([label, value]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--muted)', fontSize: '0.72rem' }}>{label}</div>
                  <strong className="tnum">{value}</strong>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <button
        type="button"
        className="secondary"
        style={{ width: '100%', marginTop: 14, marginBottom: 8 }}
        onClick={() => setStatsOpen(true)}
      >
        Статистика по дням
      </button>

      {statsOpen && <NutritionStatsSheet store={store} onClose={() => setStatsOpen(false)} />}

      {open && (
        <div
          ref={foodSheetBgRef}
          className="sheet-bg"
          role="dialog"
          aria-modal
          onClick={() => (detailOpen ? setDetailOpen(false) : closeAll())}
        >
          <div className="sheet sheet--picker" onClick={(e) => e.stopPropagation()}>
            <div className="sheet-picker-head">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>Еда</h2>
                <CloseButton onClick={closeAll} />
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
            </div>

            <div className="sheet-picker-list">
              {myFoods.length > 0 && (
                <div style={{ marginBottom: 12 }}>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--muted)',
                      marginBottom: 6,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {q.trim() ? 'Мои совпадения' : 'Мои блюда'}
                  </div>
                  <div className="preset-grid" style={{ marginTop: 0 }}>
                    {myFoods.map((m) => (
                      <button
                        key={m.name}
                        type="button"
                        className="preset"
                        onClick={() => applyMemory(m)}
                        style={{ borderColor: 'rgb(61 214 140 / 0.35)' }}
                      >
                        <strong>{m.name}</strong>
                        <span>
                          <span className="portion-chip" style={{ marginRight: 6 }}>
                            {m.portion}
                            {m.count > 1 ? ` · ×${m.count}` : ''}
                          </span>
                          <span className="macro-tag macro-tag-kcal">
                            <span className="tnum">{Math.round(m.macros.kcal)}</span> ккал
                          </span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="preset-grid" style={{ marginTop: 0 }}>
                {presets.map((p) => (
                  <button key={p.id} type="button" className="preset" onClick={() => apply(p.id)}>
                    <strong>{p.name}</strong>
                    <span>
                      <span className="portion-chip" style={{ marginRight: 6 }}>
                        {p.portion}
                      </span>
                      <span className="macro-tag macro-tag-kcal">
                        <span className="tnum">{p.kcal}</span> ккал
                      </span>
                    </span>
                  </button>
                ))}
              </div>
              {!q.trim() && (
                <p style={{ marginTop: 8, color: 'var(--muted)', fontSize: '0.82rem' }}>
                  Выбери блюдо — откроется окно с граммовкой
                </p>
              )}
              {q.trim() && !presets.length && !myFoods.length && (
                <p className="empty" style={{ padding: 12 }}>
                  Ничего не найдено
                </p>
              )}
            </div>

            <div className="sheet-picker-foot">
              <button type="button" className="secondary" style={{ width: '100%' }} onClick={openCustom}>
                Своё блюдо
              </button>
            </div>
          </div>
        </div>
      )}

      {detailOpen && (
        <div
          className="sheet-bg sheet-bg-stack"
          role="dialog"
          aria-modal
          onClick={() => setDetailOpen(false)}
        >
          <div className="sheet" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button type="button" className="ghost" onClick={() => setDetailOpen(false)}>
                ← Назад
              </button>
              <h2 style={{ margin: 0, fontSize: '1.15rem' }}>{name.trim() || 'Порция'}</h2>
              <CloseButton onClick={closeAll} />
            </div>

            <div className="chips" style={{ marginTop: 8 }}>
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

            <div className="form-grid" style={{ marginTop: 10 }}>
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
                  <div className="macro-preview-label-kcal" style={{ fontSize: '0.68rem' }}>
                    ККАЛ
                  </div>
                  <strong className="tnum" style={{ color: '#f0b429' }}>
                    {displayMacros.kcal}
                  </strong>
                </div>
                <div>
                  <div className="macro-preview-label-p" style={{ fontSize: '0.68rem' }}>
                    Б
                  </div>
                  <strong className="tnum" style={{ color: '#3dd68c' }}>
                    {displayMacros.protein}
                  </strong>
                </div>
                <div>
                  <div className="macro-preview-label-c" style={{ fontSize: '0.68rem' }}>
                    У
                  </div>
                  <strong className="tnum" style={{ color: '#6ea8fe' }}>
                    {displayMacros.carbs}
                  </strong>
                </div>
                <div>
                  <div className="macro-preview-label-f" style={{ fontSize: '0.68rem' }}>
                    Ж
                  </div>
                  <strong className="tnum" style={{ color: '#ff6b5a' }}>
                    {displayMacros.fat}
                  </strong>
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
