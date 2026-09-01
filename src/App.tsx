import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Shell } from './components/Shell'
import { StoreProvider, useStore } from './lib/store'
import { FoodScreen } from './screens/FoodScreen'
import { HistoryScreen } from './screens/HistoryScreen'
import { ProgressScreen } from './screens/ProgressScreen'
import { WorkoutScreen } from './screens/WorkoutScreen'

const rawBase = import.meta.env.BASE_URL
const basename = rawBase === '/' ? undefined : rawBase.replace(/\/$/, '')

function AuthedApp() {
  const { authReady } = useStore()

  if (!authReady) {
    return (
      <div className="app-shell">
        <div className="app-main">
          <p style={{ color: 'var(--muted)', paddingTop: 40 }}>Загрузка…</p>
        </div>
      </div>
    )
  }

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<Shell />}>
          <Route index element={<WorkoutScreen />} />
          <Route path="food" element={<FoodScreen />} />
          <Route path="progress" element={<ProgressScreen />} />
          <Route path="history" element={<HistoryScreen />} />
          <Route path="health" element={<Navigate to="/progress" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default function App() {
  return (
    <StoreProvider>
      <AuthedApp />
    </StoreProvider>
  )
}
