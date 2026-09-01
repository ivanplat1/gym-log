import { useMemo, useState } from 'react'
import { useStore } from '../lib/store'
import type { WorkoutSession } from '../lib/storage'
import { formatLoggedSet, isBodyweightExercise } from '../lib/workoutFormat'

function SessionDetail({
  session,
  onBack,
}: {
  session: WorkoutSession
  onBack: () => void
}) {
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

  return (
    <>
      <header className="page-head">
        <button type="button" className="ghost" onClick={onBack}>
          ← Назад
        </button>
        <h1 style={{ marginTop: 12 }}>
          {new Date(session.finishedAt!).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
          })}
        </h1>
        <p className="tnum">
          {durationMin != null ? `${durationMin} мин · ` : ''}
          {sets} подх. · {Math.round(volume)} кг
        </p>
      </header>

      <div className="stack">
        {session.exercises.map((ex) => (
          <div key={ex.key} className="tile glass" style={{ padding: '14px 16px' }}>
            <strong style={{ display: 'block', fontSize: '1.02rem' }}>{ex.name}</strong>
            <div className="tnum" style={{ marginTop: 8, color: 'var(--muted)', fontSize: '0.9rem' }}>
              {ex.sets.length
                ? ex.sets
                    .map((s) =>
                      formatLoggedSet(s, {
                        timed: ex.timed,
                        bodyweight: ex.bodyweight ?? isBodyweightExercise(ex.exerciseId),
                      }),
                    )
                    .join('  ·  ')
                : 'нет подходов'}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export function HistoryScreen() {
  const { store } = useStore()
  const [opened, setOpened] = useState<WorkoutSession | null>(null)

  const list = useMemo(
    () =>
      [...store.sessions]
        .filter((s) => s.finishedAt)
        .sort((a, b) => (b.finishedAt ?? '').localeCompare(a.finishedAt ?? '')),
    [store.sessions],
  )

  if (opened) {
    return <SessionDetail session={opened} onBack={() => setOpened(null)} />
  }

  return (
    <>
      <header className="page-head">
        <div className="brand">
          <i>G</i> gym-log
        </div>
        <h1>Журнал</h1>
        <p>Завершённые тренировки</p>
      </header>

      {!list.length ? (
        <div className="empty">Пока пусто — заверши первую сессию</div>
      ) : (
        <div className="stack">
          {list.map((s) => {
            const sets = s.exercises.reduce((n, e) => n + e.sets.length, 0)
            const volume = s.exercises.reduce(
              (sum, e) =>
                sum + e.sets.reduce((acc, set) => acc + (set.weight ?? 0) * (set.reps ?? 0), 0),
              0,
            )
            return (
              <button
                key={s.id}
                type="button"
                className="tile glass tile-head"
                onClick={() => setOpened(s)}
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
