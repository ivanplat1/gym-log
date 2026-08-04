import { useEffect, useMemo, useState } from 'react'
import {
  EXERCISES,
  GROUP_LABELS,
  getExercise,
  searchExercises,
  type MuscleGroup,
} from './data/exercises'
import { FOOD_PRESETS, MEAL_LABELS, type MealSlot } from './data/foods'
import {
  createSession,
  emptySet,
  lastSetsForExercise,
  loadStore,
  macrosForDay,
  saveStore,
  todayKey,
  type FoodEntry,
  type LoggedSet,
  type SessionExercise,
  type Store,
  type WorkoutSession,
} from './lib/storage'

type Tab = 'train' | 'food' | 'history'

function Brand() {
  return (
    <div className="brand">
      <i>G</i>
      gym-log
    </div>
  )
}

function Dock({ tab, onChange }: { tab: Tab; onChange: (t: Tab) => void }) {
  return (
    <nav className="dock" aria-label="Навигация">
      <button type="button" className={tab === 'train' ? 'on' : ''} onClick={() => onChange('train')}>
        Тренировка
      </button>
      <button type="button" className={tab === 'food' ? 'on' : ''} onClick={() => onChange('food')}>
        Питание
      </button>
      <button
        type="button"
        className={tab === 'history' ? 'on' : ''}
        onClick={() => onChange('history')}
      >
        Журнал
      </button>
    </nav>
  )
}

function formatSet(s: LoggedSet, timed: boolean): string {
  if (timed) return s.durationSec != null ? `${s.durationSec}с` : '—'
  const w = s.weight != null ? `${s.weight}` : '—'
  const r = s.reps != null ? `${s.reps}` : '—'
  return `${w}×${r}`
}

function ExercisePicker({
  onPick,
  onClose,
}: {
  onPick: (id: string) => void
  onClose: () => void
}) {
  const [q, setQ] = useState('')
  const [group, setGroup] = useState<MuscleGroup | 'all'>('all')
  const list = useMemo(() => searchExercises(q, group), [q, group])

  return (
    <div className="sheet" role="dialog" aria-modal onClick={onClose}>
      <div
        className="sheet-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="topbar">
          <h2>Упражнения</h2>
          <button type="button" className="ghost" onClick={onClose}>
            Закрыть
          </button>
        </div>
        <input
          className="search"
          placeholder="Поиск…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          autoFocus
        />
        <div className="chips">
          <button
            type="button"
            className={`chip${group === 'all' ? ' on' : ''}`}
            onClick={() => setGroup('all')}
          >
            Все
          </button>
          {(Object.keys(GROUP_LABELS) as MuscleGroup[]).map((g) => (
            <button
              key={g}
              type="button"
              className={`chip${group === g ? ' on' : ''}`}
              onClick={() => setGroup(g)}
            >
              {GROUP_LABELS[g]}
            </button>
          ))}
        </div>
        <div className="list">
          {list.map((ex) => (
            <button
              key={ex.id}
              type="button"
              className="list-item"
              onClick={() => onPick(ex.id)}
            >
              <div>
                <strong>{ex.name}</strong>
                <div className="meta">{GROUP_LABELS[ex.group]}</div>
              </div>
              <span className="add">+</span>
            </button>
          ))}
          {!list.length && <div className="empty">Ничего не найдено</div>}
        </div>
      </div>
    </div>
  )
}

function SetEditor({
  sets,
  timed,
  suggestedWeight,
  onChange,
}: {
  sets: LoggedSet[]
  timed: boolean
  suggestedWeight: number | null
  onChange: (sets: LoggedSet[]) => void
}) {
  const update = (idx: number, patch: Partial<LoggedSet>) => {
    onChange(sets.map((s, i) => (i === idx ? { ...s, ...patch } : s)))
  }

  return (
    <div className="sets">
      {sets.map((set, idx) => (
        <div key={idx} className={`set${timed ? ' timed' : ''}`}>
          <div className="idx">{idx + 1}</div>
          {!timed && (
            <div className="field">
              {idx === 0 ? <label>кг</label> : <label>&nbsp;</label>}
              <input
                type="number"
                inputMode="decimal"
                step="0.5"
                min="0"
                placeholder={suggestedWeight != null ? String(suggestedWeight) : '0'}
                value={set.weight ?? ''}
                onChange={(e) =>
                  update(idx, {
                    weight: e.target.value === '' ? null : Number(e.target.value),
                  })
                }
              />
            </div>
          )}
          <div className="field">
            {idx === 0 ? <label>{timed ? 'сек' : 'повт'}</label> : <label>&nbsp;</label>}
            <input
              type="number"
              inputMode="numeric"
              min="0"
              placeholder={timed ? '30' : '10'}
              value={timed ? (set.durationSec ?? '') : (set.reps ?? '')}
              onChange={(e) => {
                const v = e.target.value === '' ? null : Number(e.target.value)
                update(idx, timed ? { durationSec: v } : { reps: v })
              }}
            />
          </div>
          <button
            type="button"
            className={`check${set.done ? ' on' : ''}`}
            aria-label="Отметить"
            onClick={() => update(idx, { done: !set.done })}
          >
            {set.done ? '✓' : ''}
          </button>
        </div>
      ))}
    </div>
  )
}

function WorkoutView({
  session,
  store,
  onUpdate,
  onFinish,
  onAbort,
}: {
  session: WorkoutSession
  store: Store
  onUpdate: (s: WorkoutSession) => void
  onFinish: () => void
  onAbort: () => void
}) {
  const [picker, setPicker] = useState(false)
  const [focus, setFocus] = useState(0)

  const addExercise = (exerciseId: string) => {
    const ex = getExercise(exerciseId)
    if (!ex) return
    const item: SessionExercise = {
      key: crypto.randomUUID(),
      exerciseId: ex.id,
      name: ex.name,
      timed: !!ex.timed,
      sets: [emptySet(!!ex.timed), emptySet(!!ex.timed), emptySet(!!ex.timed)],
    }
    const next = { ...session, exercises: [...session.exercises, item] }
    onUpdate(next)
    setFocus(next.exercises.length - 1)
    setPicker(false)
  }

  const patchExercise = (key: string, patch: Partial<SessionExercise>) => {
    onUpdate({
      ...session,
      exercises: session.exercises.map((e) => (e.key === key ? { ...e, ...patch } : e)),
    })
  }

  const removeExercise = (key: string) => {
    const exercises = session.exercises.filter((e) => e.key !== key)
    onUpdate({ ...session, exercises })
    setFocus((i) => Math.min(i, Math.max(0, exercises.length - 1)))
  }

  const current = session.exercises[focus]
  const doneSets = session.exercises.reduce((n, e) => n + e.sets.filter((s) => s.done).length, 0)
  const totalSets = session.exercises.reduce((n, e) => n + e.sets.length, 0)
  const progress = totalSets ? doneSets / totalSets : 0

  return (
    <>
      <div className="topbar">
        <button type="button" className="ghost" onClick={onAbort}>
          Выйти
        </button>
        <Brand />
      </div>
      <h1 className="h1">Сессия</h1>
      <p className="sub">
        {session.exercises.length
          ? `${session.exercises.length} упр. · ${doneSets}/${totalSets || 0} подходов`
          : 'Добавь упражнения из списка'}
      </p>
      <div className="progress" aria-hidden>
        <i style={{ width: `${Math.round(progress * 100)}%` }} />
      </div>

      {session.exercises.length > 0 && (
        <div className="chips">
          {session.exercises.map((e, i) => (
            <button
              key={e.key}
              type="button"
              className={`chip${i === focus ? ' on' : ''}`}
              onClick={() => setFocus(i)}
            >
              {i + 1}. {e.name}
            </button>
          ))}
        </div>
      )}

      {current ? (
        <div className="ex-card">
          <h3>{current.name}</h3>
          {(() => {
            const last = lastSetsForExercise(store.sessions, current.exerciseId)
            if (!last?.length) return null
            const w = last.map((s) => s.weight).filter((x): x is number => x != null)
            const tip = w.length ? Math.max(...w) : null
            return (
              <p className="hint ok">
                Прошлый раз:{' '}
                {last.map((s) => formatSet(s, current.timed)).join(' · ')}
                {tip != null ? ` → ориентир ${tip} кг` : ''}
              </p>
            )
          })()}
          <SetEditor
            sets={current.sets}
            timed={current.timed}
            suggestedWeight={(() => {
              const last = lastSetsForExercise(store.sessions, current.exerciseId)
              if (!last) return null
              const w = last.map((s) => s.weight).filter((x): x is number => x != null)
              return w.length ? Math.max(...w) : null
            })()}
            onChange={(sets) => patchExercise(current.key, { sets })}
          />
          <div className="btn-row">
            <button
              type="button"
              className="secondary"
              onClick={() =>
                patchExercise(current.key, {
                  sets: [...current.sets, emptySet(current.timed)],
                })
              }
            >
              + подход
            </button>
            <button type="button" className="danger" onClick={() => removeExercise(current.key)}>
              Убрать
            </button>
          </div>
        </div>
      ) : (
        <div className="empty">Пока пусто — выбери упражнения</div>
      )}

      <div className="btn-row">
        <button type="button" className="secondary" onClick={() => setPicker(true)}>
          + упражнение
        </button>
        <button
          type="button"
          className="primary"
          disabled={!session.exercises.length}
          onClick={onFinish}
        >
          Завершить
        </button>
      </div>

      {picker && <ExercisePicker onPick={addExercise} onClose={() => setPicker(false)} />}
    </>
  )
}

function TrainHome({
  recentCount,
  weekCount,
  onStart,
}: {
  recentCount: number
  weekCount: number
  onStart: () => void
}) {
  return (
    <>
      <header className="hero">
        <Brand />
        <h1>Тренировка</h1>
        <p>Выбери упражнения из списка и забей подходы. Без готовой программы.</p>
        <div className="stat-row">
          <div className="stat">
            <b>{EXERCISES.length}</b>
            <span>в списке</span>
          </div>
          <div className="stat">
            <b>{weekCount}</b>
            <span>за неделю</span>
          </div>
          <div className="stat">
            <b>{recentCount}</b>
            <span>всего</span>
          </div>
        </div>
      </header>

      <div className="btn-row" style={{ marginTop: 24 }}>
        <button type="button" className="primary" onClick={onStart} style={{ width: '100%' }}>
          Начать тренировку
        </button>
      </div>

      <section className="section">
        <div className="section-head">
          <h2>База упражнений</h2>
        </div>
        <div className="chips">
          {(Object.keys(GROUP_LABELS) as MuscleGroup[]).map((g) => (
            <span key={g} className="chip">
              {GROUP_LABELS[g]} · {EXERCISES.filter((e) => e.group === g).length}
            </span>
          ))}
        </div>
        <div className="list">
          {EXERCISES.slice(0, 6).map((ex) => (
            <div key={ex.id} className="list-item" style={{ cursor: 'default' }}>
              <div>
                <strong>{ex.name}</strong>
                <div className="meta">{GROUP_LABELS[ex.group]}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="hint" style={{ marginTop: 12 }}>
          Полный список — при старте тренировки, с поиском и фильтрами.
        </p>
      </section>
    </>
  )
}

function FoodView({
  store,
  onChange,
}: {
  store: Store
  onChange: (s: Store) => void
}) {
  const date = todayKey()
  const totals = macrosForDay(store.foods, date)
  const todayFoods = store.foods.filter((f) => f.date === date)
  const [open, setOpen] = useState(false)
  const [meal, setMeal] = useState<MealSlot>('lunch')
  const [name, setName] = useState('')
  const [portion, setPortion] = useState('')
  const [kcal, setKcal] = useState('')
  const [protein, setProtein] = useState('')
  const [carbs, setCarbs] = useState('')
  const [fat, setFat] = useState('')
  const [presetQ, setPresetQ] = useState('')

  const applyPreset = (id: string) => {
    const p = FOOD_PRESETS.find((x) => x.id === id)
    if (!p) return
    setName(p.name)
    setPortion(p.portion)
    setKcal(String(p.kcal))
    setProtein(String(p.protein))
    setCarbs(String(p.carbs))
    setFat(String(p.fat))
  }

  const addFood = () => {
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
    onChange({ ...store, foods: [entry, ...store.foods] })
    setName('')
    setPortion('')
    setKcal('')
    setProtein('')
    setCarbs('')
    setFat('')
    setOpen(false)
  }

  const removeFood = (id: string) => {
    onChange({ ...store, foods: store.foods.filter((f) => f.id !== id) })
  }

  const pct = (v: number, goal: number) => Math.min(100, Math.round((v / Math.max(goal, 1)) * 100))

  const presets = FOOD_PRESETS.filter((p) =>
    p.name.toLowerCase().includes(presetQ.trim().toLowerCase()),
  )

  return (
    <>
      <header className="hero">
        <Brand />
        <h1>Питание</h1>
        <p>Сегодня · быстрый ввод из пресетов или своё блюдо.</p>
      </header>

      <div className="macro-grid" style={{ marginTop: 18 }}>
        <div className="macro main">
          <b>{Math.round(totals.kcal)}</b>
          <span>ккал / {store.goals.kcal}</span>
          <div className="bar">
            <i style={{ width: `${pct(totals.kcal, store.goals.kcal)}%` }} />
          </div>
        </div>
        <div className="macro">
          <b>{Math.round(totals.protein)}</b>
          <span>белок</span>
          <div className="bar">
            <i style={{ width: `${pct(totals.protein, store.goals.protein)}%` }} />
          </div>
        </div>
        <div className="macro">
          <b>{Math.round(totals.carbs)}</b>
          <span>углев.</span>
          <div className="bar">
            <i style={{ width: `${pct(totals.carbs, store.goals.carbs)}%` }} />
          </div>
        </div>
        <div className="macro">
          <b>{Math.round(totals.fat)}</b>
          <span>жиры</span>
          <div className="bar">
            <i style={{ width: `${pct(totals.fat, store.goals.fat)}%` }} />
          </div>
        </div>
      </div>

      <div className="btn-row">
        <button type="button" className="primary" style={{ width: '100%' }} onClick={() => setOpen(true)}>
          + добавить еду
        </button>
      </div>

      {(Object.keys(MEAL_LABELS) as MealSlot[]).map((slot) => {
        const items = todayFoods.filter((f) => f.meal === slot)
        if (!items.length) return null
        return (
          <div key={slot} className="meal-block panel" style={{ marginTop: 14 }}>
            <h3>{MEAL_LABELS[slot]}</h3>
            {items.map((f) => (
              <div key={f.id} className="food-row">
                <div>
                  <strong>{f.name}</strong>
                  <div className="meta">
                    {f.portion || 'порция'} · Б {f.protein} · У {f.carbs} · Ж {f.fat}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="kcal">{Math.round(f.kcal)}</div>
                  <button type="button" className="ghost" style={{ marginTop: 4 }} onClick={() => removeFood(f.id)}>
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        )
      })}

      {!todayFoods.length && <div className="empty">Пока пусто — добавь первый приём пищи</div>}

      <section className="section">
        <div className="section-head">
          <h2>Цели дня</h2>
        </div>
        <div className="form-grid panel">
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
                min="0"
                value={store.goals[key]}
                onChange={(e) =>
                  onChange({
                    ...store,
                    goals: { ...store.goals, [key]: Number(e.target.value) || 0 },
                  })
                }
              />
            </div>
          ))}
        </div>
      </section>

      {open && (
        <div className="sheet" role="dialog" aria-modal onClick={() => setOpen(false)}>
          <div className="sheet-panel" onClick={(e) => e.stopPropagation()}>
            <div className="topbar">
              <h2>Добавить еду</h2>
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
              placeholder="Пресет: курица, овсянка…"
              value={presetQ}
              onChange={(e) => setPresetQ(e.target.value)}
            />
            <div className="preset-grid">
              {presets.map((p) => (
                <button key={p.id} type="button" className="preset" onClick={() => applyPreset(p.id)}>
                  <strong>{p.name}</strong>
                  <span>
                    {p.portion} · {p.kcal} ккал
                  </span>
                </button>
              ))}
            </div>

            <div className="form-grid" style={{ marginTop: 14 }}>
              <div className="field span2">
                <label>Название</label>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Блюдо" />
              </div>
              <div className="field span2">
                <label>Порция</label>
                <input value={portion} onChange={(e) => setPortion(e.target.value)} placeholder="100 г" />
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
              <button type="button" className="primary" style={{ width: '100%' }} onClick={addFood}>
                Сохранить
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function HistoryView({ sessions }: { sessions: WorkoutSession[] }) {
  const list = useMemo(
    () =>
      [...sessions]
        .filter((s) => s.finishedAt)
        .sort((a, b) => (b.finishedAt ?? '').localeCompare(a.finishedAt ?? '')),
    [sessions],
  )

  if (!list.length) {
    return (
      <>
        <h1 className="h1">Журнал</h1>
        <p className="empty">Пока нет завершённых тренировок</p>
      </>
    )
  }

  return (
    <>
      <h1 className="h1">Журнал</h1>
      <p className="sub">Прошлые сессии</p>
      <div className="list" style={{ marginTop: 16 }}>
        {list.map((s) => {
          const sets = s.exercises.reduce((n, e) => n + e.sets.filter((x) => x.done).length, 0)
          return (
            <div key={s.id} className="list-item" style={{ cursor: 'default' }}>
              <div>
                <strong>
                  {new Date(s.finishedAt!).toLocaleString('ru-RU', {
                    day: 'numeric',
                    month: 'short',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </strong>
                <div className="meta">
                  {s.exercises.map((e) => e.name).join(' · ') || 'без упражнений'}
                </div>
              </div>
              <div className="meta">{sets} подх.</div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default function App() {
  const [store, setStore] = useState<Store>(() => loadStore())
  const [tab, setTab] = useState<Tab>('train')
  const [active, setActive] = useState<WorkoutSession | null>(null)

  useEffect(() => {
    saveStore(store)
  }, [store])

  const weekCount = useMemo(() => {
    const weekAgo = Date.now() - 7 * 24 * 3600 * 1000
    return store.sessions.filter(
      (s) => s.finishedAt && new Date(s.finishedAt).getTime() >= weekAgo,
    ).length
  }, [store.sessions])

  const start = () => {
    setActive(createSession())
  }

  const finish = () => {
    if (!active) return
    const finished: WorkoutSession = {
      ...active,
      finishedAt: new Date().toISOString(),
    }
    setStore((prev) => ({
      ...prev,
      sessions: [finished, ...prev.sessions.filter((s) => s.id !== finished.id)],
    }))
    setActive(null)
    setTab('history')
  }

  const abort = () => {
    if (!window.confirm('Выйти без сохранения?')) return
    setActive(null)
  }

  return (
    <div className="app">
      {active ? (
        <WorkoutView
          session={active}
          store={store}
          onUpdate={setActive}
          onFinish={finish}
          onAbort={abort}
        />
      ) : tab === 'train' ? (
        <TrainHome
          recentCount={store.sessions.filter((s) => s.finishedAt).length}
          weekCount={weekCount}
          onStart={start}
        />
      ) : tab === 'food' ? (
        <FoodView store={store} onChange={setStore} />
      ) : (
        <HistoryView sessions={store.sessions} />
      )}

      {!active && <Dock tab={tab} onChange={setTab} />}
    </div>
  )
}
