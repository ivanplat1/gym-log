/**
 * Сбрасывает ошибочные inline-height и не трогает safe-top bleed
 * (bleed + transform уводили док слишком низко).
 */
export function startViewportSettle() {
  const root = document.documentElement
  const body = document.body

  const sync = () => {
    root.style.removeProperty('height')
    root.style.removeProperty('min-height')
    body.style.removeProperty('height')
    root.style.removeProperty('--frame-bleed-b')
    root.style.removeProperty('--app-height')
  }

  sync()

  window.addEventListener('pageshow', sync)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') sync()
  })
}
