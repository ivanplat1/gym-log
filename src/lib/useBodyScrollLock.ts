import { useEffect } from 'react'

/**
 * Блокирует скролл .app-shell (документ не скроллится — body fixed).
 * Fallback на window, если shell ещё нет.
 */
export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return

    const scroller =
      (document.querySelector('.app-shell') as HTMLElement | null) ?? null

    if (scroller) {
      const prevOverflow = scroller.style.overflow
      const prevTouch = scroller.style.touchAction
      scroller.style.overflow = 'hidden'
      scroller.style.touchAction = 'none'
      return () => {
        scroller.style.overflow = prevOverflow
        scroller.style.touchAction = prevTouch
      }
    }

    const html = document.documentElement
    const body = document.body
    const scrollY = window.scrollY
    const prev = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyLeft: body.style.left,
      bodyRight: body.style.right,
      bodyWidth: body.style.width,
    }

    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'

    return () => {
      html.style.overflow = prev.htmlOverflow
      body.style.overflow = prev.bodyOverflow
      body.style.position = prev.bodyPosition
      body.style.top = prev.bodyTop
      body.style.left = prev.bodyLeft
      body.style.right = prev.bodyRight
      body.style.width = prev.bodyWidth
      window.scrollTo(0, scrollY)
    }
  }, [locked])
}
