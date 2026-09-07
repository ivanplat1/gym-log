/**
 * --bottom-gap ≈ screenH − innerH ≈ safe-top.
 * Удлиняет только html (фон в щель под ICB). Body/док остаются в ICB.
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
    body.style.removeProperty('height')
    body.style.removeProperty('transform')
    const safeT = readSafeTop()
    const gap = Math.max(
      safeT,
      Math.round((screen.height || 0) - (window.innerHeight || 0)),
      0,
    )
    root.style.setProperty('--bottom-gap', `${gap}px`)
    // явная высота html = ICB + gap (screen), фон закрывает полоску
    const h = Math.round(window.innerHeight + gap)
    root.style.setProperty('min-height', `${h}px`)
    root.style.setProperty('height', `${h}px`)
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
