import { useCallback, useEffect, useMemo, useState } from 'react'
import { getExercise, type MuscleGroup } from '../data/exercises'
import { ExercisePicker } from '../components/ExercisePicker'
import { IconTrash } from '../components/IconButtons'
import { Stepper } from '../components/Stepper'
import { TimedDurationStepper } from '../components/TimedDurationStepper'
import { DistanceStepper } from '../components/DistanceStepper'
import { Brand } from '../components/Brand'
import {
  getDistanceStepperConfig,
  getTimedStepperConfig,
  isDistanceCardio,
} from '../lib/cardio'
import { useStore } from '../lib/store'
import { addCustomExercise, type LoggedSet, type SessionExercise, type WorkoutSession } from '../lib/storage'
import { formatLoggedSet, isBodyweightExercise } from '../lib/workoutFormat'

function exerciseBodyweight(ex: SessionExercise): boolean {
  return ex.bodyweight ?? isBodyweightExercise(ex.exerciseId)
}

function sessionStats(session: WorkoutSession) {
  const volume = session.exercises.reduce(
    (sum, e) => sum + e.sets.reduce((s, set) => s + (set.weight ?? 0) * (set.reps ?? 0), 0),
    0,
  )
  const sets = session.exercises.reduce((n, e) => n + e.sets.length, 0)
  const durationMin =
    session.finishedAt && session.startedAt
      ? Math.max(
          1,
          Math.round(
            (new Date(session.finishedAt).getTime() - new Date(session.startedAt).getTime()) /
              60000,
          ),
        )
      : null
  return { volume, sets, durationMin }
}

function SessionDetail({
  session,
  onBack,
}: {
  session: WorkoutSession
  onBack: () => void
}) {
  const { store, setStore } = useStore()
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState<WorkoutSession>(() => structuredClone(session))
  const [editBaseline, setEditBaseline] = useState<WorkoutSession | null>(null)
  const [picker, setPicker] = useState(false)
  const [activeKey, setActiveKey] = useState<string | null>(null)
  const [addKey, setAddKey] = useState<string | null>(null)
  const [weight, setWeight] = useState(20)
  const [reps, setReps] = useState(10)
  const [distanceM, setDistanceM] = useState(0)

  const persist = useCallback(
    (next: WorkoutSession) => {
      setStore((s) => ({
        ...s,
        sessions: s.sessions.map((x) => (x.id === next.id ? next : x)),
      }))
    },
    [setStore],
  )

  useEffect(() => {
    setDraft(structuredClone(session))
    setEditing(false)
    setEditBaseline(null)
    setAddKey(null)
    setActiveKey(null)
  }, [session.id])

  useEffect(() => {
    if (!editing) setDraft(structuredClone(session))
  }, [session, editing])

  useEffect(() => {
    if (!editing) return
    persist(draft)
  }, [draft, editing, persist])

  const view = editing ? draft : session
  const { volume, sets, durationMin } = sessionStats(view)

  const startEdit = () => {
    const copy = structuredClone(session)
    setEditBaseline(copy)
    setDraft(copy)
    setEditing(true)
    setActiveKey(null)
  }

  const cancelEdit = () => {
    if (editBaseline) persist(editBaseline)
    setDraft(structuredClone(session))
    setEditing(false)
    setEditBaseline(null)
    setAddKey(null)
    setActiveKey(null)
  }

  const finishEdit = () => {
    setEditing(false)
    setEditBaseline(null)
    setAddKey(null)
    setActiveKey(null)
  }

  const deleteSession = () => {
    if (!window.confirm('Удалить эту тренировку из журнала?')) return
    setStore((s) => ({
      ...s,
      sessions: s.sessions.filter((x) => x.id !== session.id),
    }))
    onBack()
  }

  const updateExercise = (exKey: string, updater: (ex: SessionExercise) => SessionExercise) => {
    setDraft((prev) => ({
      ...prev,
      exercises: prev.exercises.map((e) => (e.key === exKey ? updater(e) : e)),
    }))
  }

  const updateSet = (exKey: string, setIdx: number, patch: Partial<LoggedSet>) => {
    updateExercise(exKey, (ex) => ({
      ...ex,
      sets: ex.sets.map((set, i) => (i === setIdx ? { ...set, ...patch } : set)),
    }))
  }

  const removeSet = (exKey: string, setIdx: number) => {
    updateExercise(exKey, (ex) => ({
      ...ex,
      sets: ex.sets.filter((_, i) => i !== setIdx),
    }))
  }

  const removeExercise = (exKey: string) => {
    setDraft((prev) => ({
      ...prev,
      exercises: prev.exercises.filter((e) => e.key !== exKey),
    }))
    if (addKey === exKey) setAddKey(null)
  }

  const openAddSet = (ex: SessionExercise) => {
    const bw = exerciseBodyweight(ex)
    const last = ex.sets[ex.sets.length - 1]
    const timedCfg = getTimedStepperConfig(ex.exerciseId, store.customExercises ?? [])
    const distCfg = getDistanceStepperConfig()
    if (ex.timed) {
      setWeight(0)
      setReps(last?.durationSec ?? timedCfg.defaultSeconds)
      setDistanceM(
        isDistanceCardio(ex.exerciseId, store.customExercises ?? [])
          ? (last?.distanceM ?? distCfg.defaultMeters)
          : 0,
      )
    } else if (bw) {
      setWeight(0)
      setReps(last?.reps ?? 10)
    } else {
      setWeight(last?.weight ?? 20)
      setReps(last?.reps ?? 10)
    }
    setAddKey(ex.key)
  }

  const appendSet = (ex: SessionExercise) => {
    const bw = exerciseBodyweight(ex)
    const custom = store.customExercises ?? []
    const set: LoggedSet = ex.timed
      ? {
          weight: null,
          reps: null,
          durationSec: reps,
          distanceM:
            isDistanceCardio(ex.exerciseId, custom) && distanceM > 0 ? distanceM : null,
          done: true,
        }
      : bw
        ? { weight: null, reps, durationSec: null, distanceM: null, done: true }
        : { weight, reps, durationSec: null, distanceM: null, done: true }
    updateExercise(ex.key, (e) => ({ ...e, sets: [...e.sets, set] }))
    setAddKey(null)
  }

  const addExercise = (id: string, custom = store.customExercises ?? []) => {
    const ex = getExercise(id, custom)
    if (!ex) return
    if (draft.exercises.some((e) => e.exerciseId === id)) {
      setPicker(false)
      return
    }
    const item: SessionExercise = {
      key: crypto.randomUUID(),
      exerciseId: ex.id,
      name: ex.name,
      timed: !!ex.timed,
      bodyweight: !!ex.bodyweight,
      sets: [],
    }
    setDraft((prev) => ({ ...prev, exercises: [...prev.exercises, item] }))
    setPicker(false)
    setActiveKey(item.key)
    setAddKey(item.key)
    openAddSet(item)
  }

  const addCustom = (name: string, group: MuscleGroup) => {
    const { store: next, exercise } = addCustomExercise(store, name, group)
    setStore(next)
    addExercise(exercise.id, next.customExercises ?? [])
  }

  return (
    <>
      <header className="page-head">
        <div className="page-head-top">
          <button type="button" className="ghost page-head-action" onClick={editing ? cancelEdit : onBack}>
            {editing ? 'Отмена' : '← Назад'}
          </button>
          {!editing ? (
            <button type="button" className="ghost page-head-action" onClick={startEdit}>
              Изменить
            </button>
          ) : (
            <button type="button" className="ghost page-head-action" onClick={finishEdit}>
              Готово
            </button>
          )}
        </div>
        <h1>
          {new Date(session.finishedAt!).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
          })}
        </h1>
        <p className="tnum">
          {durationMin != null ? `${durationMin} мин · ` : ''}
          {sets} подх. · {Math.round(volume)} кг
          {editing ? ' · редактирование' : ''}
        </p>
      </header>

      <div className="stack">
        {view.exercises.map((ex) => {
          const bw = exerciseBodyweight(ex)
          const open = editing && ex.key === activeKey
          const summary = ex.sets.length
            ? ex.sets.map((s) => formatLoggedSet(s, { timed: ex.timed, bodyweight: bw, exerciseId: ex.exerciseId })).join('  ·  ')
            : 'нет подходов'
          return (
            <div key={ex.key} className="tile glass">
              <div className="tile-head">
                <button
                  type="button"
                  className="tile-head-main"
                  style={{ cursor: editing ? 'pointer' : 'default' }}
                  onClick={() => {
                    if (!editing) return
                    setActiveKey(open ? null : ex.key)
                    if (open) setAddKey(null)
                  }}
                >
                  <div>
                    <strong>{ex.name}</strong>
                    {(!editing || !open) && (
                      <div className="meta tnum" style={{ marginTop: 6 }}>
                        {summary}
                      </div>
                    )}
                  </div>
                  <div className={`badge${ex.sets.length >= 3 ? ' done' : ''}`}>
                    {ex.sets.length || '—'}
                  </div>
                </button>
                {editing && (
                  <button
                    type="button"
                    className="tile-remove"
                    aria-label="Убрать упражнение"
                    onClick={() => removeExercise(ex.key)}
                  >
                    <IconTrash width={16} height={16} />
                  </button>
                )}
              </div>

              {editing && open && (
                <div className="tile-body session-edit">
                  {ex.sets.map((set, i) => (
                    <div key={i} className="set-edit-row">
                      <span className="set-edit-num tnum">{i + 1}</span>
                      {!ex.timed && !bw && (
                        <Stepper
                          label="кг"
                          value={set.weight ?? 0}
                          step={2.5}
                          decimals={1}
                          compact
                          editable
                          onChange={(v) => updateSet(ex.key, i, { weight: v })}
                        />
                      )}
                      {ex.timed ? (
                        <>
                          <TimedDurationStepper
                            exerciseId={ex.exerciseId}
                            durationSec={set.durationSec ?? 0}
                            customExercises={store.customExercises ?? []}
                            compact
                            onChangeSec={(v) => updateSet(ex.key, i, { durationSec: v })}
                          />
                          {isDistanceCardio(ex.exerciseId, store.customExercises ?? []) && (
                            <DistanceStepper
                              meters={set.distanceM ?? 0}
                              compact
                              onChangeMeters={(v) => updateSet(ex.key, i, { distanceM: v })}
                            />
                          )}
                        </>
                      ) : (
                        <Stepper
                          label="повт"
                          value={set.reps ?? 0}
                          step={1}
                          min={1}
                          compact
                          editable={bw}
                          onChange={(v) => updateSet(ex.key, i, { reps: v })}
                        />
                      )}
                      <button
                        type="button"
                        className="tile-remove"
                        aria-label="Удалить подход"
                        onClick={() => removeSet(ex.key, i)}
                      >
                        <IconTrash width={14} height={14} />
                      </button>
                    </div>
                  ))}

                  {addKey === ex.key ? (
                    <div className="set-edit-add">
                      <div
                        className={`stepper-row compact${!ex.timed && !bw ? '' : ' single'}`}
                      >
                        {!ex.timed && !bw && (
                          <Stepper
                            label="кг"
                            value={weight}
                            step={2.5}
                            decimals={1}
                            compact
                            editable
                            onChange={setWeight}
                          />
                        )}
                        {ex.timed ? (
                          <>
                            <TimedDurationStepper
                              exerciseId={ex.exerciseId}
                              durationSec={reps}
                              customExercises={store.customExercises ?? []}
                              compact
                              onChangeSec={setReps}
                            />
                            {isDistanceCardio(ex.exerciseId, store.customExercises ?? []) && (
                              <DistanceStepper
                                meters={distanceM}
                                compact
                                onChangeMeters={setDistanceM}
                              />
                            )}
                          </>
                        ) : (
                          <Stepper
                            label="повт"
                            value={reps}
                            step={1}
                            min={1}
                            compact
                            editable={bw}
                            onChange={setReps}
                          />
                        )}
                      </div>
                      <div className="btn-row btn-row--split" style={{ marginTop: 8 }}>
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => setAddKey(null)}
                        >
                          Отмена
                        </button>
                        <button type="button" className="primary" onClick={() => appendSet(ex)}>
                          Добавить
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="ghost"
                      style={{ width: '100%', marginTop: ex.sets.length ? 8 : 0 }}
                      onClick={() => {
                        setActiveKey(ex.key)
                        openAddSet(ex)
                      }}
                    >
                      + Подход
                    </button>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {editing && (
        <>
          <div className="btn-row btn-row--split">
            <button type="button" className="secondary" onClick={() => setPicker(true)}>
              + Упражнение
            </button>
          </div>
          <div className="btn-row">
            <button type="button" className="ghost" style={{ color: '#ff6b5a' }} onClick={deleteSession}>
              Удалить тренировку
            </button>
          </div>
          {picker && (
            <ExercisePicker
              onPick={addExercise}
              onAddCustom={addCustom}
              onClose={() => setPicker(false)}
              customExercises={store.customExercises ?? []}
              excludeIds={draft.exercises.map((e) => e.exerciseId)}
            />
          )}
        </>
      )}
    </>
  )
}

export function HistoryScreen() {
  const { store } = useStore()
  const [openedId, setOpenedId] = useState<string | null>(null)

  const opened = useMemo(
    () => store.sessions.find((s) => s.id === openedId) ?? null,
    [store.sessions, openedId],
  )

  const list = useMemo(
    () =>
      [...store.sessions]
        .filter((s) => s.finishedAt)
        .sort((a, b) => (b.finishedAt ?? '').localeCompare(a.finishedAt ?? '')),
    [store.sessions],
  )

  if (opened) {
    return <SessionDetail session={opened} onBack={() => setOpenedId(null)} />
  }

  return (
    <>
      <header className="page-head">
        <Brand />
        <h1>Журнал</h1>
        <p>Завершённые тренировки</p>
      </header>

      {!list.length ? (
        <div className="empty">Пока пусто — заверши первую сессию</div>
      ) : (
        <div className="stack">
          {list.map((s) => {
            const { sets, volume } = sessionStats(s)
            return (
              <button
                key={s.id}
                type="button"
                className="tile glass tile-head"
                onClick={() => setOpenedId(s.id)}
              >
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
                    {s.exercises
                      .map((e) => e.name)
                      .slice(0, 3)
                      .join(' · ')}
                    {s.exercises.length > 3 ? '…' : ''}
                  </div>
                </div>
                <div className="badge tnum">
                  {sets} · {Math.round(volume)}кг
                </div>
              </button>
            )
          })}
        </div>
      )}
    </>
  )
}
