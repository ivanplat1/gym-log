/**
 * Live metrics for layout debug overlays (temporary).
 */
export function startLayoutDebugMetrics() {
  const el = document.getElementById('layout-debug-metrics')
  if (!el) return

  const line = (name: string, node: Element | null) => {
    if (!node) return `${name}: —`
    const r = node.getBoundingClientRect()
    return `${name}: y=${Math.round(r.top)} h=${Math.round(r.height)} b=${Math.round(r.bottom)}`
  }

  const sync = () => {
    const vv = window.visualViewport
    const cs = getComputedStyle(document.documentElement)
    const safeT = cs.getPropertyValue('--safe-t').trim() || envFallback('safe-area-inset-top')
    const safeB = cs.getPropertyValue('--safe-b').trim() || envFallback('safe-area-inset-bottom')

    el.textContent = [
      `innerH=${window.innerHeight} screenH=${window.screen?.height ?? '—'}`,
      `vvH=${Math.round(vv?.height ?? 0)} off=${Math.round(vv?.offsetTop ?? 0)}`,
      `safeT=${safeT} safeB=${safeB}`,
      `bleedB=${cs.getPropertyValue('--frame-bleed-b').trim() || '—'}`,
      `bodyH=${getComputedStyle(document.body).height}`,
      `bodyStyleH=${document.body.style.height || '(css)'}`,
      line('atm', document.querySelector('.app-atmosphere')),
      line('root', document.getElementById('root')),
      line('shell', document.querySelector('.app-shell')),
      line('dock', document.querySelector('.dock')),
    ].join('\n')
  }

  const envFallback = (name: string) => {
    const probe = document.createElement('div')
    probe.style.cssText = `position:fixed;visibility:hidden;height:env(${name}, 0px)`
    document.body.appendChild(probe)
    const h = getComputedStyle(probe).height
    probe.remove()
    return h
  }

  sync()
  window.addEventListener('resize', sync)
  window.visualViewport?.addEventListener('resize', sync)
  window.visualViewport?.addEventListener('scroll', sync)
  window.setInterval(sync, 500)
  requestAnimationFrame(sync)
}
