import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useStore } from '../lib/store'
import {
  formatSleep,
  healthForDate,
  todayKey,
  upsertHealthDays,
  type HealthDay,
} from '../lib/storage'
import {
  parseHealthCsv,
  parseHealthJson,
  parseHealthSearchParams,
  SHORTCUT_BASE_URL,
} from '../lib/healthImport'

function SleepBar({ min }: { min: number | null }) {
  const pct = Math.min(100, ((min ?? 0) / (8 * 60)) * 100)
  return (
    <div
      style={{
        height: 6,
        borderRadius: 99,
        background: '#2a2a2a',
        overflow: 'hidden',
        marginTop: 8,
      }}
    >
      <i
        style={{
          display: 'block',
          height: '100%',
          width: `${pct}%`,
          background: 'linear-gradient(90deg, #6ea8fe, #3dd68c)',
          borderRadius: 99,
        }}
      />
    </div>
  )
}

export function HealthScreen() {
  const { store, setStore } = useStore()
  const location = useLocation()
  const navigate = useNavigate()
  const [toast, setToast] = useState<string | null>(null)
  const [setupOpen, setSetupOpen] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const [date, setDate] = useState(todayKey())
  const [sleepH, setSleepH] = useState('')
  const [sleepM, setSleepM] = useState('')
  const [steps, setSteps] = useState('')
  const [activeKcal, setActiveKcal] = useState('')
  const [restingHr, setRestingHr] = useState('')

  const today = healthForDate(store.health, todayKey())
  const recent = useMemo(() => store.health.slice(0, 14), [store.health])

  const applyDays = (days: HealthDay[], label: string) => {
    if (!days.length) {
      setToast('Нет данных для импорта')
      return
    }
    setStore((s) => ({ ...s, health: upsertHealthDays(s.health, days) }))
    setToast(`Импортировано: ${days.length} · ${label}`)
  }

  // Автоимпорт из URL Ярлыка: /health?steps=…&sleepMin=…
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if (location.hash.includes('?')) {
      const hq = location.hash.split('?')[1]
      new URLSearchParams(hq).forEach((v, k) => {
        if (!params.has(k)) params.set(k, v)
      })
    }
    const days = parseHealthSearchParams(params)
    if (!days.length) return
    applyDays(days, 'Ярлык / ссылка')
    navigate('/health', { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search, location.hash])

  useEffect(() => {
    if (!toast) return
    const t = window.setTimeout(() => setToast(null), 3200)
    return () => window.clearTimeout(t)
  }, [toast])

  const saveManual = () => {
    const h = Number(sleepH) || 0
    const m = Number(sleepM) || 0
    const sleepMin = h * 60 + m || null
    const row: HealthDay = {
      date,
      sleepMin: sleepMin && sleepMin > 0 ? sleepMin : null,
      steps: steps === '' ? null : Number(steps),
      activeKcal: activeKcal === '' ? null : Number(activeKcal),
      restingHr: restingHr === '' ? null : Number(restingHr),
      source: 'manual',
      updatedAt: new Date().toISOString(),
    }
    applyDays([row], 'вручную')
  }

  const onFile = async (file: File) => {
    const text = await file.text()
    try {
      if (file.name.endsWith('.csv') || text.includes('sleepMin') && text.includes(',')) {
        const asJson = text.trim().startsWith('{') || text.trim().startsWith('[')
        applyDays(asJson ? parseHealthJson(text) : parseHealthCsv(text), file.name)
      } else {
        applyDays(parseHealthJson(text), file.name)
      }
    } catch {
      setToast('Не удалось прочитать файл')
    }
  }

  const exampleUrl = `${SHORTCUT_BASE_URL}?date=${todayKey()}&sleepMin=420&steps=8000&activeKcal=350&source=shortcut`

  return (
    <>
      <header className="page-head">
        <div className="brand">
          <i>G</i> gym-log
        </div>
        <h1>Здоровье</h1>
        <p>Сон с Mi Band и активность с iPhone — через Apple Health и Ярлыки.</p>
      </header>

      {toast && (
        <div
          className="glass"
          style={{
            padding: '12px 14px',
            borderRadius: 14,
            marginBottom: 12,
            color: 'var(--green)',
            fontWeight: 650,
            fontSize: '0.9rem',
          }}
        >
          {toast}
        </div>
      )}

      <div className="macro-card glass">
        <div>
          <div style={{ fontSize: '0.72rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 750 }}>
            Сегодня
          </div>
          <div className="tnum" style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.04em', marginTop: 4 }}>
            {formatSleep(today?.sleepMin ?? null)}
          </div>
          <div style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>сон</div>
          <SleepBar min={today?.sleepMin ?? null} />
        </div>
        <div className="macro-side">
          <div className="macro-line">
            <span>Шаги</span>
            <strong className="tnum">{today?.steps?.toLocaleString('ru-RU') ?? '—'}</strong>
          </div>
          <div className="macro-line">
            <span>Активные ккал</span>
            <strong className="tnum">{today?.activeKcal ?? '—'}</strong>
          </div>
          <div className="macro-line">
            <span>Пульс покоя</span>
            <strong className="tnum">{today?.restingHr ? `${today.restingHr}` : '—'}</strong>
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>
            {today?.source ? `источник: ${today.source}` : 'нет данных за сегодня'}
          </div>
        </div>
      </div>

      <div className="btn-row" style={{ marginTop: 0 }}>
        <button type="button" className="primary" style={{ flex: 1 }} onClick={() => setSetupOpen(true)}>
          Настроить автоимпорт
        </button>
        <button type="button" className="secondary" onClick={() => fileRef.current?.click()}>
          Файл
        </button>
        <input
          ref={fileRef}
          type="file"
          accept=".json,.csv,application/json,text/csv"
          hidden
          onChange={(e) => {
            const f = e.target.files?.[0]
            if (f) void onFile(f)
            e.target.value = ''
          }}
        />
      </div>

      <section className="section" style={{ marginTop: 22 }}>
        <div className="section-head">
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '1.25rem' }}>
            Последние дни
          </h2>
        </div>
        {!recent.length ? (
          <div className="empty">Пока пусто — настрой Ярлык или внеси сон вручную</div>
        ) : (
          <div className="stack">
            {recent.map((d) => (
              <div key={d.date} className="tile glass" style={{ padding: '12px 14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                  <strong>
                    {new Date(d.date + 'T12:00:00').toLocaleDateString('ru-RU', {
                      weekday: 'short',
                      day: 'numeric',
                      month: 'short',
                    })}
                  </strong>
                  <span className="tnum" style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
                    {d.source}
                  </span>
                </div>
                <div
                  className="tnum"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: 8,
                    marginTop: 10,
                    fontSize: '0.9rem',
                  }}
                >
                  <div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.7rem' }}>СОН</div>
                    {formatSleep(d.sleepMin)}
                  </div>
                  <div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.7rem' }}>ШАГИ</div>
                    {d.steps?.toLocaleString('ru-RU') ?? '—'}
                  </div>
                  <div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.7rem' }}>ККАЛ</div>
                    {d.activeKcal ?? '—'}
                  </div>
                </div>
                <SleepBar min={d.sleepMin} />
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="goals" style={{ marginTop: 22 }}>
        <h2>Вручную</h2>
        <div className="form-grid glass" style={{ padding: 14, borderRadius: 18 }}>
          <div className="field span2">
            <label>Дата</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="field">
            <label>Сон, ч</label>
            <input type="number" min={0} max={24} value={sleepH} onChange={(e) => setSleepH(e.target.value)} />
          </div>
          <div className="field">
            <label>Сон, мин</label>
            <input type="number" min={0} max={59} value={sleepM} onChange={(e) => setSleepM(e.target.value)} />
          </div>
          <div className="field">
            <label>Шаги</label>
            <input type="number" min={0} value={steps} onChange={(e) => setSteps(e.target.value)} />
          </div>
          <div className="field">
            <label>Активные ккал</label>
            <input type="number" min={0} value={activeKcal} onChange={(e) => setActiveKcal(e.target.value)} />
          </div>
          <div className="field span2">
            <label>Пульс покоя</label>
            <input type="number" min={0} value={restingHr} onChange={(e) => setRestingHr(e.target.value)} />
          </div>
        </div>
        <div className="btn-row">
          <button type="button" className="primary" style={{ width: '100%' }} onClick={saveManual}>
            Сохранить день
          </button>
        </div>
      </section>

      {setupOpen && (
        <div className="sheet-bg" role="dialog" aria-modal onClick={() => setSetupOpen(false)}>
          <div className="sheet" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2>Автоимпорт</h2>
              <button type="button" className="ghost" onClick={() => setSetupOpen(false)}>
                Закрыть
              </button>
            </div>

            <div className="stack" style={{ marginTop: 14, gap: 14 }}>
              <div className="glass" style={{ padding: 14, borderRadius: 16 }}>
                <strong>1. Mi Band → Apple Health</strong>
                <p style={{ margin: '8px 0 0', color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.45 }}>
                  Mi Fitness → Профиль → Сторонние данные → Health → включи сон, шаги, пульс.
                  В приложении Здоровье разреши доступ для Mi Fitness.
                </p>
              </div>

              <div className="glass" style={{ padding: 14, borderRadius: 16 }}>
                <strong>2. Ярлык на iPhone (каждый день)</strong>
                <p style={{ margin: '8px 0 0', color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.45 }}>
                  Создай Ярлык: «Получить показатели Здоровья» (сон за прошлую ночь, шаги,
                  активная энергия) → «Открыть URL» вида:
                </p>
                <code
                  style={{
                    display: 'block',
                    marginTop: 10,
                    padding: 10,
                    borderRadius: 10,
                    background: '#0a0a0a',
                    fontSize: '0.72rem',
                    wordBreak: 'break-all',
                    color: 'var(--accent)',
                  }}
                >
                  {SHORTCUT_BASE_URL}?date=ДАТА&amp;sleepMin=МИНУТЫ&amp;steps=ШАГИ&amp;activeKcal=ККАЛ&amp;source=shortcut
                </code>
                <p style={{ margin: '10px 0 0', color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.45 }}>
                  Автоматизация: «Время суток» утром → запуск Ярлыка. Safari откроет gym-log и
                  данные запишутся в журнал.
                </p>
                <button
                  type="button"
                  className="secondary"
                  style={{ marginTop: 12, width: '100%' }}
                  onClick={() => {
                    void navigator.clipboard.writeText(exampleUrl)
                    setToast('Пример ссылки скопирован')
                  }}
                >
                  Скопировать пример ссылки
                </button>
              </div>

              <div className="glass" style={{ padding: 14, borderRadius: 16 }}>
                <strong>Почему не «сам по себе» из браузера</strong>
                <p style={{ margin: '8px 0 0', color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.45 }}>
                  Сайт не может читать HealthKit и BLE браслета — так устроен iOS. Полный фон без
                  Ярлыков = нативное приложение (Capacitor) или платный агрегатор (Terra и т.п.).
                  Схема Mi Band → Health → Ярлык → gym-log — самый простой автомат без бэкенда.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
