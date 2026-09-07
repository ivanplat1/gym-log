/**
 * Нельзя ставить html/body.style.height = visualViewport.height:
 * на iOS VV часто НИЖЕ реального экрана (на safe-top), снизу остаётся
 * щель с фоном html — «приподнятый» UI.
 * Рамка = position:fixed; inset:0 + -webkit-fill-available.
 */
export function startViewportSettle() {
  const root = document.documentElement
  const body = document.body

  const sync = () => {
    // сбрасываем ошибочный пиксельный height, если уже успели выставить
    root.style.removeProperty('height')
    body.style.removeProperty('height')

    const vv = window.visualViewport
    const full = Math.max(
      window.innerHeight,
      root.clientHeight,
      Math.round((vv?.height ?? 0) + (vv?.offsetTop ?? 0)),
    )
    root.style.setProperty('--app-height', `${full}px`)
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
