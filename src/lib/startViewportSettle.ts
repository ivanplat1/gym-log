/**
 * iOS: fixed ICB часто короче экрана на safe-area-inset-top —
 * под body торчит фон html. Растягиваем html/body на innerH+safeT.
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

    const vv = window.visualViewport
    const safeT = readSafeTop()
    const bleed = Math.max(safeT, 0)
    const frame = Math.round(Math.max(window.innerHeight, vv?.height ?? 0) + bleed)

    root.style.setProperty('--frame-bleed-b', `${bleed}px`)
    root.style.setProperty('--app-height', `${frame}px`)
    // html должен быть не короче body, иначе overflow:hidden клипает низ
    root.style.height = `${frame}px`
    root.style.minHeight = `${frame}px`
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
