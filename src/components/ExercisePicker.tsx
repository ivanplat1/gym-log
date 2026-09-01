import { useMemo, useRef, useState } from 'react'
import {
  GROUP_LABELS,
  searchExercises,
  type MuscleGroup,
} from '../data/exercises'
import { useVisualViewportSheet } from '../lib/useVisualViewportSheet'

export function ExercisePicker({
  onPick,
  onClose,
  excludeIds = [],
}: {
  onPick: (id: string) => void
  onClose: () => void
  excludeIds?: string[]
}) {
  const [q, setQ] = useState('')
  const [group, setGroup] = useState<MuscleGroup | 'all'>('all')
  const sheetBgRef = useRef<HTMLDivElement>(null)
  useVisualViewportSheet(sheetBgRef)

  const list = useMemo(
    () => searchExercises(q, group).filter((e) => !excludeIds.includes(e.id)),
    [q, group, excludeIds],
  )

  return (
    <div
      ref={sheetBgRef}
      className="sheet-bg"
      role="dialog"
      aria-modal
      onClick={onClose}
    >
      <div className="sheet sheet--picker" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-picker-head">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>Упражнение</h2>
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
        </div>
        <div className="sheet-picker-list">
          {list.map((ex) => (
            <button
              key={ex.id}
              type="button"
              className="pick-item"
              onClick={() => onPick(ex.id)}
            >
              <div>
                <strong>{ex.name}</strong>
                <div className="meta">{GROUP_LABELS[ex.group]}</div>
              </div>
              <span className="plus">+</span>
            </button>
          ))}
          {!list.length && <div className="empty">Ничего не найдено</div>}
        </div>
      </div>
    </div>
  )
}
