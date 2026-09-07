/**
 * --bottom-gap ≈ safe-top: насколько опустить низ body под короткий ICB.
 * Фон (.app-atmosphere) тянется на всю высоту body; #root остаётся ICB.
 */
export function startViewportSettle() {
  const root = document.documentElement
  const body = document.body

  const readSafeTop = () => {
    const probe = document.createElement('div')
    probe.style.cssText =
      'position:absolute;visibility:hidden;pointer-events:none;height:env(safe-area-inset-top,0px)'
    body.appendChild(probe)
    const px = parseFloat(getComputedStyle(probe).height) || 0
    probe.remove()
    return px
  }

  const sync = () => {
    root.style.removeProperty('height')
    root.style.removeProperty('min-height')
    body.style.removeProperty('height')
    const safeT = readSafeTop()
    root.style.setProperty('--bottom-gap', `${Math.max(safeT, 0)}px`)
  }

  sync()
  window.addEventListener('resize', sync)
  window.visualViewport?.addEventListener('resize', sync)
  window.addEventListener('pageshow', sync)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') sync()
  })
  requestAnimationFrame(() => {
    sync()
    window.setTimeout(sync, 300)
  })
}
