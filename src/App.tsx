import { useEffect, useMemo, useState } from 'react'
import {
  AVOID,
  DAYS,
  PROGRAM_META,
  SHOULDER_RULES,
  SUBSTITUTIONS,
  formatReps,
  formatSets,
  getDay,
  type DayId,
  type Exercise,
} from './data/program'
import {
  exerciseCompletion,
  progressionHints,
  suggestNextWeight,
  summarizeSession,
} from './lib/progression'
import {
  createSession,
  lastSessionForDay,
  lastWorkingSets,
  loadStore,
  saveStore,
  type LoggedSet,
  type Session,
  type Store,
} from './lib/storage'

type View = 'home' | 'day' | 'workout' | 'history' | 'rules' | 'session'

function Brand() {
  return (
    <div className="brand-mark">
      <span>П</span>
      PROGRAM · log
    </div>
  )
}

function Nav({
  view,
  onChange,
  workoutActive,
}: {
  view: View
  onChange: (v: View) => void
  workoutActive: boolean
}) {
  const programActive = view === 'home' || view === 'day'
  const logActive = view === 'workout' || view === 'history' || view === 'session'
  return (
    <nav className="nav-dock" aria-label="Навигация">
      <button
        type="button"
        className={programActive ? 'active' : ''}
        onClick={() => onChange('home')}
      >
        Программа
      </button>
      <button
        type="button"
        className={logActive ? 'active' : ''}
        onClick={() => onChange(workoutActive ? 'workout' : 'history')}
      >
        {workoutActive ? 'Сессия' : 'Журнал'}
      </button>
      <button
        type="button"
        className={view === 'rules' ? 'active' : ''}
        onClick={() => onChange('rules')}
      >
        Правила
      </button>
    </nav>
  )
}

function Home({
  onPickDay,
  lastByDay,
}: {
  onPickDay: (id: DayId) => void
  lastByDay: Record<DayId, Session | null>
}) {
  return (
    <>
      <header className="hero">
        <Brand />
        <h1>
          {PROGRAM_META.title}
          <br />
          <em>{PROGRAM_META.subtitle}</em>
        </h1>
        <p>Сплит A / B / C — зал и дом. Логируй подходы, следи за плечом, расти вес по правилу.</p>
        <div className="meta-line">Обновлено {PROGRAM_META.updated}</div>
      </header>

      <section className="section" aria-label="Выбор дня">
        <h2>Сегодня</h2>
        <div className="day-grid">
          {DAYS.map((day) => {
            const last = lastByDay[day.id]
            return (
              <button
                key={day.id}
                type="button"
                className="day-btn"
                data-day={day.id}
                onClick={() => onPickDay(day.id)}
              >
                <div className="day-letter">{day.id}</div>
                <div className="day-copy">
                  <strong>
                    {day.label} · {day.place}
                  </strong>
                  <span>
                    {day.focus}
                    {last?.finishedAt
                      ? ` · прошлый раз ${new Date(last.finishedAt).toLocaleDateString('ru-RU')}`
                      : ''}
                  </span>
                  <div className="day-place">{day.short}</div>
                </div>
              </button>
            )
          })}
        </div>
      </section>

      <section className="section">
        <h2>Правило плеча</h2>
        <div className="rule-stack">
          {SHOULDER_RULES.map((rule) => (
            <div key={rule} className="rule-item">
              {rule}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function DayPreview({
  dayId,
  rounds,
  onRounds,
  onBack,
  onStart,
}: {
  dayId: DayId
  rounds: number
  onRounds: (n: number) => void
  onBack: () => void
  onStart: () => void
}) {
  const day = getDay(dayId)
  return (
    <>
      <div className="topbar">
        <button type="button" className="ghost-btn" onClick={onBack}>
          ← Назад
        </button>
        <Brand />
      </div>
      <h1 className="page-title">
        {day.label} · {day.place}
      </h1>
      <p className="page-sub">{day.focus}</p>

      {day.mode === 'circuit' && (
        <>
          <p className="hint" style={{ marginTop: 14 }}>
            Круг {day.circuitRounds?.min}–{day.circuitRounds?.max} раза · отдых между
            упражнениями {day.circuitRestExercises} · между кругами {day.circuitRestRounds}
          </p>
          <div className="rounds-picker" role="group" aria-label="Число кругов">
            {[3, 4].map((n) => (
              <button
                key={n}
                type="button"
                className={rounds === n ? 'active' : ''}
                onClick={() => onRounds(n)}
              >
                {n} круга
              </button>
            ))}
          </div>
        </>
      )}

      <div className="ex-list">
        {day.exercises.map((ex, i) => (
          <div key={ex.id} className="ex-row">
            <div className="ex-num">{i + 1}</div>
            <div>
              <strong>{ex.name}</strong>
              {ex.notes ? <div className="muted">{ex.notes}</div> : null}
            </div>
            <div className="ex-target">
              {day.mode === 'circuit'
                ? formatReps(ex)
                : `${formatSets(ex)}×${formatReps(ex)}`}
            </div>
          </div>
        ))}
      </div>

      <div className="btn-row">
        <button type="button" className="primary-btn" onClick={onStart}>
          Начать тренировку
        </button>
      </div>
    </>
  )
}

function SetInputs({
  sets,
  exercise,
  onChange,
  suggestedWeight,
}: {
  sets: LoggedSet[]
  exercise: Exercise
  onChange: (sets: LoggedSet[]) => void
  suggestedWeight: number | null
}) {
  const timed = exercise.unit === 'sec'
  const update = (idx: number, patch: Partial<LoggedSet>) => {
    onChange(sets.map((s, i) => (i === idx ? { ...s, ...patch } : s)))
  }

  return (
    <div className="set-table">
      {sets.map((set, idx) => (
        <div key={idx} className={`set-row${timed ? ' timed' : ''}`}>
          <div className="set-idx">{idx + 1}</div>
          {!timed && (
            <div>
              {idx === 0 ? <label>кг</label> : null}
              <input
                type="number"
                inputMode="decimal"
                step="0.5"
                min="0"
                placeholder={suggestedWeight != null ? String(suggestedWeight) : 'кг'}
                value={set.weight ?? ''}
                onChange={(e) =>
                  update(idx, {
                    weight: e.target.value === '' ? null : Number(e.target.value),
                  })
                }
              />
            </div>
          )}
          <div>
            {idx === 0 ? <label>{timed ? 'сек' : 'повт'}</label> : null}
            <input
              type="number"
              inputMode="numeric"
              min="0"
              placeholder={timed ? `${exercise.repsMin}` : `${exercise.repsMin}`}
              value={timed ? (set.durationSec ?? '') : (set.reps ?? '')}
              onChange={(e) => {
                const v = e.target.value === '' ? null : Number(e.target.value)
                update(idx, timed ? { durationSec: v } : { reps: v })
              }}
            />
          </div>
          {!timed && (
            <div className="rir-col">
              {idx === 0 ? <label>запас</label> : null}
              <input
                type="number"
                inputMode="numeric"
                min="0"
                max="5"
                placeholder="RIR"
                value={set.rir ?? ''}
                onChange={(e) =>
                  update(idx, {
                    rir: e.target.value === '' ? null : Number(e.target.value),
                  })
                }
              />
            </div>
          )}
          <button
            type="button"
            className={`check-btn${set.done ? ' on' : ''}`}
            aria-label={set.done ? 'Снять отметку' : 'Отметить подход'}
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
  session: Session
  store: Store
  onUpdate: (s: Session) => void
  onFinish: () => void
  onAbort: () => void
}) {
  const day = getDay(session.dayId)
  const [exIndex, setExIndex] = useState(0)
  const log = session.exercises[exIndex]
  const baseId = log.exerciseId.replace(/-r\d+$/, '')
  const exercise = day.exercises.find((e) => e.id === baseId)!
  const last = lastWorkingSets(store.sessions, baseId)
  const suggested = suggestNextWeight(last, session.dayId, baseId)

  const progress =
    session.exercises.reduce((n, e) => n + exerciseCompletion(e), 0) /
    session.exercises.length

  const patchSets = (sets: LoggedSet[]) => {
    const exercises = session.exercises.map((e, i) =>
      i === exIndex ? { ...e, sets } : e,
    )
    onUpdate({ ...session, exercises })
  }

  return (
    <>
      <div className="topbar">
        <button type="button" className="ghost-btn" onClick={onAbort}>
          Выйти
        </button>
        <div className="brand-mark">
          День {session.dayId}
          {session.rounds ? ` · ${session.rounds}кр` : ''}
        </div>
      </div>

      <div className="workout-progress" aria-hidden>
        <i style={{ width: `${Math.round(progress * 100)}%` }} />
      </div>

      <div className="exercise-card">
        <div className="meta-line">
          Упр. {exIndex + 1} / {session.exercises.length}
        </div>
        <h3>{log.name}</h3>
        <p className="hint">
          Цель:{' '}
          {day.mode === 'circuit'
            ? formatReps(exercise)
            : `${formatSets(exercise)}×${formatReps(exercise)}`}
          {exercise.notes ? ` · ${exercise.notes}` : ''}
        </p>
        {suggested != null && exercise.unit !== 'sec' && (
          <p className="hint ready">Подсказка по весу: {suggested} кг</p>
        )}

        <SetInputs
          sets={log.sets}
          exercise={exercise}
          onChange={patchSets}
          suggestedWeight={suggested}
        />

        <div className="btn-row">
          <button
            type="button"
            className="secondary-btn"
            disabled={exIndex === 0}
            onClick={() => setExIndex((i) => Math.max(0, i - 1))}
          >
            Назад
          </button>
          {exIndex < session.exercises.length - 1 ? (
            <button
              type="button"
              className="primary-btn"
              onClick={() => setExIndex((i) => i + 1)}
            >
              Далее
            </button>
          ) : (
            <button type="button" className="primary-btn" onClick={onFinish}>
              Завершить
            </button>
          )}
        </div>
      </div>
    </>
  )
}

function HistoryView({
  sessions,
  onOpen,
}: {
  sessions: Session[]
  onOpen: (s: Session) => void
}) {
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
        <h1 className="page-title">Журнал</h1>
        <p className="empty">Пока пусто — заверши первую тренировку.</p>
      </>
    )
  }

  return (
    <>
      <h1 className="page-title">Журнал</h1>
      <p className="page-sub">Завершённые сессии и подсказки по прогрессии</p>
      <div className="history-list">
        {list.map((s) => {
          const day = getDay(s.dayId)
          return (
            <button
              key={s.id}
              type="button"
              className="history-item"
              onClick={() => onOpen(s)}
            >
              <strong>
                {day.label} · {day.place}
              </strong>
              <span className="hint" style={{ display: 'block', marginTop: 4 }}>
                {new Date(s.finishedAt!).toLocaleString('ru-RU', {
                  day: 'numeric',
                  month: 'short',
                  hour: '2-digit',
                  minute: '2-digit',
                })}{' '}
                · {summarizeSession(s)}
              </span>
              <span className="pill">День {s.dayId}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}

function SessionDetail({
  session,
  onBack,
}: {
  session: Session
  onBack: () => void
}) {
  const day = getDay(session.dayId)
  const hints = progressionHints(session)

  return (
    <>
      <div className="topbar">
        <button type="button" className="ghost-btn" onClick={onBack}>
          ← Журнал
        </button>
        <Brand />
      </div>
      <h1 className="page-title">
        {day.label} · {day.place}
      </h1>
      <p className="page-sub">
        {session.finishedAt
          ? new Date(session.finishedAt).toLocaleString('ru-RU')
          : 'В процессе'}
      </p>

      <div className="ex-list">
        {session.exercises.map((ex) => (
          <div key={ex.exerciseId} className="ex-row">
            <div className="ex-num">·</div>
            <div>
              <strong>{ex.name}</strong>
              <div className="muted">
                {ex.sets
                  .filter((s) => s.done)
                  .map((s) =>
                    s.durationSec != null
                      ? `${s.durationSec}с`
                      : `${s.weight ?? '—'}×${s.reps ?? '—'}`,
                  )
                  .join(' · ') || 'нет отмеченных подходов'}
              </div>
            </div>
            <div className="ex-target">
              {ex.sets.filter((s) => s.done).length}/{ex.sets.length}
            </div>
          </div>
        ))}
      </div>

      <div className="detail-block">
        <h4>Прогрессия</h4>
        <ul>
          {hints.map((h) => (
            <li key={h.exerciseId}>
              <strong>{h.name}:</strong> {h.message}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

function RulesView() {
  return (
    <>
      <h1 className="page-title">Правила</h1>
      <p className="page-sub">{PROGRAM_META.split}</p>

      <section className="section">
        <h2>Прогрессия · зал</h2>
        <div className="rule-item">{PROGRAM_META.gymProgression}</div>
      </section>

      <section className="section">
        <h2>Прогрессия · дом</h2>
        <div className="rule-item">{PROGRAM_META.homeProgression}</div>
      </section>

      <section className="section">
        <h2>Плечо</h2>
        <div className="rule-stack">
          {SHOULDER_RULES.map((r) => (
            <div key={r} className="rule-item">
              {r}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Замены</h2>
        <div className="rule-stack">
          {SUBSTITUTIONS.map((r) => (
            <div key={r} className="rule-item">
              {r}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Не делать пока</h2>
        <div className="rule-stack">
          {AVOID.map((r) => (
            <div key={r} className="rule-item">
              {r}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default function App() {
  const [store, setStore] = useState<Store>(() => loadStore())
  const [view, setView] = useState<View>('home')
  const [selectedDay, setSelectedDay] = useState<DayId | null>(null)
  const [rounds, setRounds] = useState(3)
  const [active, setActive] = useState<Session | null>(null)
  const [opened, setOpened] = useState<Session | null>(null)

  useEffect(() => {
    saveStore(store)
  }, [store])

  const lastByDay = useMemo(
    () => ({
      A: lastSessionForDay(store.sessions, 'A'),
      B: lastSessionForDay(store.sessions, 'B'),
      C: lastSessionForDay(store.sessions, 'C'),
    }),
    [store.sessions],
  )

  const startWorkout = () => {
    if (!selectedDay) return
    const day = getDay(selectedDay)
    const session = createSession(selectedDay, day.exercises, rounds)
    setActive(session)
    setView('workout')
  }

  const finishWorkout = () => {
    if (!active) return
    const finished: Session = {
      ...active,
      finishedAt: new Date().toISOString(),
    }
    setStore((prev) => ({
      sessions: [finished, ...prev.sessions.filter((s) => s.id !== finished.id)],
    }))
    setActive(null)
    setOpened(finished)
    setView('session')
  }

  const abortWorkout = () => {
    if (!window.confirm('Выйти из тренировки? Несохранённые подходы пропадут.')) return
    setActive(null)
    setView('home')
  }

  const handleNav = (v: View) => {
    if (v === 'workout' && !active) {
      setView('history')
      return
    }
    if (v === 'home') {
      setSelectedDay(null)
      setView('home')
      return
    }
    setView(v)
  }

  return (
    <div className="app-shell">
      {view === 'home' && (
        <Home
          lastByDay={lastByDay}
          onPickDay={(id) => {
            setSelectedDay(id)
            setRounds(3)
            setView('day')
          }}
        />
      )}

      {view === 'day' && selectedDay && (
        <DayPreview
          dayId={selectedDay}
          rounds={rounds}
          onRounds={setRounds}
          onBack={() => setView('home')}
          onStart={startWorkout}
        />
      )}

      {view === 'workout' && active && (
        <WorkoutView
          session={active}
          store={store}
          onUpdate={setActive}
          onFinish={finishWorkout}
          onAbort={abortWorkout}
        />
      )}

      {view === 'history' && (
        <HistoryView
          sessions={store.sessions}
          onOpen={(s) => {
            setOpened(s)
            setView('session')
          }}
        />
      )}

      {view === 'session' && opened && (
        <SessionDetail
          session={opened}
          onBack={() => {
            setOpened(null)
            setView('history')
          }}
        />
      )}

      {view === 'rules' && <RulesView />}

      <Nav view={view} onChange={handleNav} workoutActive={!!active} />
    </div>
  )
}
