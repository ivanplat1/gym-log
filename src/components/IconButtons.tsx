import type { ButtonHTMLAttributes, SVGProps } from 'react'

export function IconTrash(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden {...props}>
      {/* ручка крышки */}
      <rect x="10" y="2.5" width="4" height="2" rx="0.6" />
      {/* крышка */}
      <rect x="4.5" y="5" width="15" height="2.2" rx="0.7" />
      {/* бак (трапеция) */}
      <path d="M7 8.2h10l-1.05 12.1A1.6 1.6 0 0 1 14.36 21.5H9.64a1.6 1.6 0 0 1-1.59-1.2L7 8.2Z" />
    </svg>
  )
}

export function IconClose(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden {...props}>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconPlus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden {...props}>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

export function IconEdit(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden {...props}>
      <path
        d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0 0-3L16.5 4.5a2.1 2.1 0 0 0-3 0L3 15v5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M13.5 6.5l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function CloseButton({
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={`icon-btn icon-btn-close ${className}`.trim()} aria-label="Закрыть" {...props}>
      <IconClose />
    </button>
  )
}

export function PlusButton({
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={`icon-btn icon-btn-plus ${className}`.trim()}
      aria-label="Добавить своё упражнение"
      {...props}
    >
      <IconPlus />
    </button>
  )
}

export function TrashButton({
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={`icon-btn icon-btn-danger ${className}`.trim()} aria-label="Удалить" {...props}>
      <IconTrash />
    </button>
  )
}

export function EditButton({
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={`icon-btn ${className}`.trim()} aria-label="Редактировать" {...props}>
      <IconEdit />
    </button>
  )
}
