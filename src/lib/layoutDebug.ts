/**
 * Layout debug: цветные слои + HUD, чтобы найти что перекрывает док.
 * Включить: html.debug-layout (ставится из startViewportSettle).
 */
export function startLayoutDebug() {
  const root = document.documentElement
  root.classList.add('debug-layout')

  const hud = document.createElement('div')
  hud.className = 'debug-hud'
  hud.setAttribute('aria-hidden', 'true')

  const gap = document.createElement('div')
  gap.className = 'debug-gap'
  gap.setAttribute('aria-hidden', 'true')
  gap.textContent = 'GAP'

  const rootBox = document.createElement('div')
  rootBox.className = 'debug-root-box'
  rootBox.setAttribute('aria-hidden', 'true')

  const bodyBox = document.createElement('div')
  bodyBox.className = 'debug-body-box'
  bodyBox.setAttribute('aria-hidden', 'true')

  const dockProbe = document.createElement('div')
  dockProbe.className = 'debug-dock-probe'
  dockProbe.setAttribute('aria-hidden', 'true')
  dockProbe.textContent = 'DOCK-BOTTOM'

  document.body.append(gap, rootBox, bodyBox, dockProbe, hud)

  const sync = () => {
    const body = document.body
    const appRoot = document.getElementById('root')
    const dock = document.querySelector('.dock') as HTMLElement | null
    const atmo = document.querySelector('.app-atmosphere') as HTMLElement | null
    const vv = window.visualViewport

    const br = body.getBoundingClientRect()
    const rr = appRoot?.getBoundingClientRect()
    const dr = dock?.getBoundingClientRect()
    const ar = atmo?.getBoundingClientRect()

    const cs = getComputedStyle(root)
    const bottomGap = cs.getPropertyValue('--bottom-gap').trim()
    const safeT = cs.getPropertyValue('--safe-t').trim()
    const safeB = cs.getPropertyValue('--safe-b').trim()

    // линия низа #root — если док ниже неё, его режет overflow:hidden
    if (rr) {
      rootBox.style.top = `${Math.round(rr.bottom)}px`
      rootBox.style.bottom = 'auto'
      rootBox.style.height = '3px'
      rootBox.style.background = 'cyan'
      rootBox.style.boxShadow = '0 0 0 1px #003'
    }

    // зона от низа дока до низа body (что «под» панелью)
    if (dr) {
      dockProbe.style.top = `${Math.round(dr.bottom)}px`
      dockProbe.style.height = `${Math.max(2, Math.round(br.bottom - dr.bottom))}px`
      dockProbe.textContent = `below-dock ${Math.round(br.bottom - dr.bottom)}px`
    } else {
      dockProbe.style.top = ''
      dockProbe.style.height = ''
      dockProbe.textContent = 'no-dock'
    }

    const clipped =
      rr && dr ? (dr.bottom > rr.bottom + 0.5 ? `CLIP? dockBottom>${Math.round(rr.bottom)}` : 'dock inside #root') : '—'

    const lines = [
      `innerH=${window.innerHeight} screenH=${screen.height} vvH=${vv?.height ?? '—'}`,
      `docClientH=${root.clientHeight} bodyH=${Math.round(br.height)} rootH=${rr ? Math.round(rr.height) : '—'}`,
      `body y=${Math.round(br.top)}→${Math.round(br.bottom)} atmoH=${ar ? Math.round(ar.height) : '—'}`,
      `root y=${rr ? `${Math.round(rr.top)}→${Math.round(rr.bottom)}` : '—'}`,
      `dock y=${dr ? `${Math.round(dr.top)}→${Math.round(dr.bottom)} h=${Math.round(dr.height)}` : '—'}`,
      `safeT=${safeT} safeB=${safeB} bottomGap=${bottomGap}`,
      `body.of=${getComputedStyle(body).overflow} root.of=${appRoot ? getComputedStyle(appRoot).overflow : '—'}`,
      clipped,
    ]
    hud.textContent = lines.join('\n')
  }

  sync()
  window.addEventListener('resize', sync)
  window.visualViewport?.addEventListener('resize', sync)
  window.visualViewport?.addEventListener('scroll', sync)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') sync()
  })
  requestAnimationFrame(() => {
    sync()
    window.setTimeout(sync, 100)
    window.setTimeout(sync, 400)
    window.setTimeout(sync, 1000)
  })
}
