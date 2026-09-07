/**
 * iOS Safari/PWA: на первом кадре высота viewport часто занижена —
 * внизу чёрная полоса, пока не будет resize (например смена вкладки).
 * Пишем --app-frame и ещё раз синкаем после settle.
 */
export function syncViewportFrame() {
  const root = document.documentElement

  const sync = () => {
    const vv = window.visualViewport?.height ?? 0
    const frame = Math.max(window.innerHeight, root.clientHeight, vv)
    root.style.setProperty('--app-frame', `${frame}px`)
  }

  sync()
  window.addEventListener('resize', sync)
  window.visualViewport?.addEventListener('resize', sync)
  window.visualViewport?.addEventListener('scroll', sync)
  requestAnimationFrame(() => {
    sync()
    window.setTimeout(sync, 50)
    window.setTimeout(sync, 300)
    window.setTimeout(sync, 1000)
  })
}
