import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Shell } from './components/Shell'
import { StoreProvider } from './lib/store'
import { FoodScreen } from './screens/FoodScreen'
import { HealthScreen } from './screens/HealthScreen'
import { HistoryScreen } from './screens/HistoryScreen'
import { WorkoutScreen } from './screens/WorkoutScreen'

export default function App() {
  return (
    <StoreProvider>
      <BrowserRouter basename="/gym-log">
        <Routes>
          <Route element={<Shell />}>
            <Route index element={<WorkoutScreen />} />
            <Route path="food" element={<FoodScreen />} />
            <Route path="health" element={<HealthScreen />} />
            <Route path="history" element={<HistoryScreen />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  )
}
