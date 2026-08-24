import { useEffect, useMemo, useState } from 'react'
import { EXERCISES, getExercise } from '../data/exercises'
import { ExercisePicker } from '../components/ExercisePicker'
import { RestTimer } from '../components/RestTimer'
import { Stepper } from '../components/Stepper'
import { useStore } from '../lib/store'
import {
  createSession,
  lastSetsForExercise,
  type LoggedSet,
  type SessionExercise,
} from '../lib/storage'

const REST_KEY = 'gym-log:rest-sec'

function formatSet(s: LoggedSet, timed: boolean) {
  if (timed) return `${s.durationSec ?? 0}с`
  return `${s.weight ?? 0}×${s.reps ?? 0}`
}

function suggestFromLast(last: LoggedSet[] | null, timed: boolean) {
  if (!last?.length) {
    return timed ? { weight: 0, reps: 30 } : { weight: 20, reps: 10 }
  }
  const latest = last[last.length - 1]
  if (timed) return { weight: 0, reps: latest.durationSec ?? 30 }
  return { weight: latest.weight ?? 20, reps: latest.reps ?? 10 }
}

export function WorkoutScreen() {
  const { store, setStore } = useStore()
  const session = store.activeSession
  const [activeKey, setActiveKey] = useState<string | null>(null)
  const [picker, setPicker] = useState(false)
  const [weight, setWeight] = useState(20)
  const [reps, setReps] = useState(10)
  const [restSec, setRestSec] = useState(() => {
    const v = Number(localStorage.getItem(REST_KEY))
    return Number.isFinite(v) && v >= 15 ? v : 90
  })
  const [timerRun, setTimerRun] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  const [elapsed, setElapsed] = useState(0)

  const setSession = (
    next:
      | typeof session
      | null
      | ((prev: typeof session) => typeof session | null),
  ) => {
    setStore((s) => {
      const value = typeof next === 'function' ? next(s.activeSession) : next
      return { ...s, activeSession: value }
    })
  }

  useEffect(() => {
    if (!session || session.finishedAt) return
    const started = new Date(session.startedAt).getTime()
    const tick = () => setElapsed(Math.floor((Date.now() - started) / 1000))
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [session])

  const active = session?.exercises.find((e) => e.key === activeKey) ?? null

  useEffect(() => {
    if (!active) return
    const last = lastSetsForExercise(store.sessions, active.exerciseId)
    const s = suggestFromLast(last, active.timed)
    setWeight(s.weight)
    setReps(s.reps)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeKey])

  const mm = String(Math.floor(elapsed / 60)).padStart(2, '0')
  const ss = String(elapsed % 60).padStart(2, '0')

  const start = () => {
    setSession(createSession())
    setActiveKey(null)
    setElapsed(0)
    setTimerOn(false)
  }

  const addExercise = (id: string) => {
    const ex = getExercise(id)
    if (!ex || !session) return
    const existing = session.exercises.find((e) => e.exerciseId === id)
    if (existing) {
      setActiveKey(existing.key)
      setPicker(false)
      return
    }
    const item: SessionExercise = {
      key: crypto.randomUUID(),
      exerciseId: ex.id,
      name: ex.name,
      timed: !!ex.timed,
      sets: [],
    }
    setSession({ ...session, exercises: [...session.exercises, item] })
    setActiveKey(item.key)
    setPicker(false)
  }

  const logSet = () => {
    if (!session || !active) return
    const set: LoggedSet = active.timed
      ? { weight: null, reps: null, durationSec: reps, done: true }
      : { weight, reps, durationSec: null, done: true }
    setSession({
      ...session,
      exercises: session.exercises.map((e) =>
        e.key === active.key ? { ...e, sets: [...e.sets, set] } : e,
      ),
    })
    setTimerRun((n) => n + 1)
    setTimerOn(true)
  }

  const removeExercise = (key: string) => {
    if (!session) return
    const exercises = session.exercises.filter((e) => e.key !== key)
    setSession({ ...session, exercises })
    if (activeKey === key) setActiveKey(exercises[0]?.key ?? null)
  }

  const finish = () => {
    if (!session) return
    if (!session.exercises.some((e) => e.sets.length)) {
      if (!window.confirm('Нет подходов. Всё равно завершить?')) return
    }
    const finished = { ...session, finishedAt: new Date().toISOString() }
    setStore((prev) => ({
      ...prev,
      sessions: [finished, ...prev.sessions],
      activeSession: null,
    }))
    setTimerOn(false)
  }

  const cancel = () => {
    if (!window.confirm('Отменить тренировку?')) return
    setSession(null)
    setTimerOn(false)
  }

  const volume = useMemo(() => {
    if (!session) return 0
    return session.exercises.reduce(
      (sum, e) =>
        sum + e.sets.reduce((s, set) => s + (set.weight ?? 0) * (set.reps ?? 0), 0),
      0,
    )
  }, [session])

  if (!session) {
    const weekAgo = Date.now() - 7 * 86400000
    const week = store.sessions.filter(
      (s) => s.finishedAt && new Date(s.finishedAt).getTime() >= weekAgo,
    ).length
    const total = store.sessions.filter((s) => s.finishedAt).length

    return (
      <>
        <header className="page-head">
          <div className="brand">
            <i>G</i> gym-log
          </div>
          <h1>Тренировка</h1>
          <p>Добавь упражнения, крути вес и повторы степперами, пиши подход — пойдёт отдых.</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
          {[
            [week, 'неделя'],
            [total, 'всего'],
            [EXERCISES.length, 'упр.'],
          ].map(([n, label]) => (
            <div
              key={String(label)}
              className="glass"
              style={{ padding: '14px 10px', textAlign: 'center', borderRadius: 16 }}
            >
              <div className="tnum" style={{ fontSize: '1.4rem', fontWeight: 800 }}>
                {n}
              </div>
              <div
                style={{
                  fontSize: '0.68rem',
                  color: 'var(--muted)',
                  marginTop: 4,
                  textTransform: 'uppercase',
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="btn-row">
          <button type="button" className="primary" style={{ width: '100%' }} onClick={start}>
            Начать тренировку
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      <header className="page-head">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="brand">
            <i>G</i> сессия
          </div>
          <button type="button" className="ghost" onClick={cancel}>
            Отмена
          </button>
        </div>
        <h1>В зале</h1>
        <p className="tnum">
          {mm}:{ss} · {session.exercises.reduce((n, e) => n + e.sets.length, 0)} подх. ·{' '}
          {Math.round(volume)} кг
        </p>
      </header>

      <div className="stack">
        {session.exercises.map((ex) => {
          const open = ex.key === activeKey
          const last = lastSetsForExercise(store.sessions, ex.exerciseId)
          const lastSummary = last?.length
            ? `Прошлый: ${last.map((s) => formatSet(s, ex.timed)).join('  ')}`
            : 'Первый раз'
          return (
            <div key={ex.key} className="tile glass">
              <div className="tile-head">
                <button
                  type="button"
                  className="tile-head-main"
                  onClick={() => setActiveKey(open ? null : ex.key)}
                >
                  <div>
                    <strong>{ex.name}</strong>
                    <div className="meta">{lastSummary}</div>
                  </div>
                  <div className={`badge${ex.sets.length >= 3 ? ' done' : ''}`}>
                    {ex.sets.length ? `${ex.sets.length}` : '—'}
                  </div>
                </button>
                <button
                  type="button"
                  className="tile-remove"
                  aria-label="Убрать упражнение"
                  onClick={() => removeExercise(ex.key)}
                >
                  ×
                </button>
              </div>

              {ex.sets.length > 0 && (
                <div className="logged-sets tnum">
                  {ex.sets.map((s, i) => (
                    <span key={i} className="logged-set">
                      <i>{i + 1}</i>
                      {formatSet(s, ex.timed)}
                    </span>
                  ))}
                </div>
              )}

              {open && (
                <div className="tile-body">
                  <div className="stepper-row compact">
                    {!ex.timed && (
                      <Stepper
                        label="кг"
                        value={weight}
                        step={2.5}
                        decimals={1}
                        compact
                        onChange={setWeight}
                      />
                    )}
                    <Stepper
                      label={ex.timed ? 'сек' : 'повт'}
                      value={reps}
                      step={ex.timed ? 5 : 1}
                      min={1}
                      compact
                      onChange={setReps}
                    />
                  </div>
                  <button type="button" className="big-log" onClick={logSet}>
                    Записать подход
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {!session.exercises.length && <div className="empty">Добавь упражнение из списка</div>}

      <div className="btn-row">
        <button type="button" className="secondary" onClick={() => setPicker(true)}>
          + Упражнение
        </button>
        <button type="button" className="primary" onClick={finish}>
          Завершить
        </button>
      </div>

      {picker && (
        <ExercisePicker
          onPick={addExercise}
          onClose={() => setPicker(false)}
          excludeIds={session.exercises.map((e) => e.exerciseId)}
        />
      )}

      {timerOn && (
        <RestTimer
          runId={timerRun}
          duration={restSec}
          onAdjust={(s) => {
            setRestSec(s)
            localStorage.setItem(REST_KEY, String(s))
          }}
          onDismiss={() => setTimerOn(false)}
        />
      )}
    </>
  )
}
