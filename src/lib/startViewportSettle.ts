/**
 * iOS: fixed ICB часто короче экрана на safe-area-inset-top —
 * под body торчит html (тёмно-фиолетовый в debug).
 * Пишем --frame-bleed-b и растягиваем body вниз.
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
    body.style.removeProperty('height')

    const safeT = readSafeTop()
    // Зазор на скрине был ≈ safeT (62px при innerH=812).
    const bleed = Math.max(safeT, 0)
    root.style.setProperty('--frame-bleed-b', `${bleed}px`)
    root.style.setProperty('--safe-t-px', `${safeT}px`)

    const vv = window.visualViewport
    root.style.setProperty(
      '--app-height',
      `${Math.round(Math.max(window.innerHeight, vv?.height ?? 0) + bleed)}px`,
    )
  }

  sync()

  window.addEventListener('resize', sync)
  window.visualViewport?.addEventListener('resize', sync)
  window.visualViewport?.addEventListener('scroll', sync)
  window.addEventListener('pageshow', sync)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') sync()
  })

  requestAnimationFrame(() => {
    sync()
    window.setTimeout(sync, 50)
    window.setTimeout(sync, 300)
    window.setTimeout(sync, 1000)
  })
}
