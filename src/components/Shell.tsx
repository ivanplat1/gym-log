import { NavLink, Outlet } from 'react-router-dom'
import type { SVGProps } from 'react'

function IconTrain(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6.5 8.5h11M6.5 15.5h11M4 12h2.5M17.5 12H20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect x="8" y="9.5" width="8" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function IconFood(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M8 4v7a2 2 0 0 0 2 2v7M8 4H6.5M8 4h1.5M16 4v16M16 4c2.2 0 3.5 1.8 3.5 4S18.2 12 16 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconHistory(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 8v4.5L15 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function Shell() {
  return (
    <div className="app-shell">
      <div className="app-main">
        <Outlet />
      </div>
      <nav className="dock glass" aria-label="Навигация">
        <NavLink to="/" end>
          <IconTrain />
          Тренировка
        </NavLink>
        <NavLink to="/food">
          <IconFood />
          Питание
        </NavLink>
        <NavLink to="/history">
          <IconHistory />
          Журнал
        </NavLink>
      </nav>
    </div>
  )
}
