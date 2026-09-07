/**
 * iOS PWA/Safari: после холодного старта fixed-слой (док, атмосфера)
 * часто «приподнят», пока не будет жеста/скролла.
 * Нуджим scroll и пишем visualViewport в CSS — пересчёт без участия пользователя.
 */
export function startViewportSettle() {
  const root = document.documentElement

  const sync = () => {
    const vv = window.visualViewport
    const layoutH = window.innerHeight
    const height = vv?.height ?? layoutH
    const offsetTop = vv?.offsetTop ?? 0
    const bottomGap = Math.max(0, layoutH - (offsetTop + height))

    root.style.setProperty('--vv-height', `${height}px`)
    root.style.setProperty('--vv-offset-top', `${offsetTop}px`)
    root.style.setProperty('--vv-bottom-gap', `${bottomGap}px`)
  }

  /** WebKit пересчитывает position:fixed только после scroll. */
  const nudge = () => {
    const y = window.scrollY
    window.scrollTo(0, y ? y : 1)
    window.scrollTo(0, y)
    sync()
  }

  sync()
  nudge()

  window.addEventListener('resize', sync)
  window.visualViewport?.addEventListener('resize', sync)
  window.visualViewport?.addEventListener('scroll', sync)

  window.addEventListener('pageshow', () => {
    nudge()
    requestAnimationFrame(nudge)
  })

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState !== 'visible') return
    nudge()
    window.setTimeout(nudge, 50)
    window.setTimeout(nudge, 300)
  })

  requestAnimationFrame(() => {
    nudge()
    window.setTimeout(nudge, 50)
    window.setTimeout(nudge, 200)
    window.setTimeout(nudge, 500)
    window.setTimeout(nudge, 1000)
  })
}
