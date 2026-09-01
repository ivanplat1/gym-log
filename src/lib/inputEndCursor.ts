import { useLayoutEffect, useRef, useState, type ChangeEvent, type FocusEvent } from 'react'

export function placeInputCursorAtEnd(el: HTMLInputElement | HTMLTextAreaElement | null) {
  if (!el) return
  const len = el.value.length
  try {
    el.setSelectionRange(len, len)
  } catch {
    // type=number и др. могут не поддерживать selection
  }
}

/** Держит курсор в конце при ручном вводе в контролируемое поле */
export function useInputEndCursor(value: string) {
  const ref = useRef<HTMLInputElement>(null)
  const [focused, setFocused] = useState(false)

  useLayoutEffect(() => {
    if (focused) placeInputCursorAtEnd(ref.current)
  }, [value, focused])

  return {
    ref,
    onFocus: (e: FocusEvent<HTMLInputElement>) => {
      setFocused(true)
      placeInputCursorAtEnd(e.currentTarget)
    },
    onBlur: () => setFocused(false),
    wrapChange:
      (onValue: (next: string) => void) =>
      (e: ChangeEvent<HTMLInputElement>) => {
        onValue(e.target.value)
      },
  }
}
