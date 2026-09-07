/**
 * Подгоняет высоту fixed-frame (html/body) под visualViewport.
 * На iOS 100dvh на старте врёт — пиксельная высота из VV стабильнее.
 */
export function startViewportSettle() {
  const root = document.documentElement
  const body = document.body

  const sync = () => {
    const h = Math.round(window.visualViewport?.height ?? window.innerHeight)
    const px = `${h}px`
    root.style.height = px
    body.style.height = px
    root.style.setProperty('--app-height', px)
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
