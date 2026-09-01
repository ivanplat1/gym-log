import { useEffect, type RefObject } from 'react'

/** Подгоняет fixed-оверлей под видимую область, когда открыта клавиатура на телефоне. */
export function useVisualViewportSheet(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    const vv = window.visualViewport
    if (!el || !vv) return

    const sync = () => {
      el.style.top = `${vv.offsetTop}px`
      el.style.left = `${vv.offsetLeft}px`
      el.style.width = `${vv.width}px`
      el.style.height = `${vv.height}px`
      el.style.bottom = 'auto'
      el.style.right = 'auto'
    }

    sync()
    vv.addEventListener('resize', sync)
    vv.addEventListener('scroll', sync)
    return () => {
      vv.removeEventListener('resize', sync)
      vv.removeEventListener('scroll', sync)
      el.style.removeProperty('top')
      el.style.removeProperty('left')
      el.style.removeProperty('width')
      el.style.removeProperty('height')
      el.style.removeProperty('bottom')
      el.style.removeProperty('right')
    }
  }, [ref])
}
