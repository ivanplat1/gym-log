const iconUrl = `${import.meta.env.BASE_URL}icon-192.png`

export function Brand({ title = 'GymLog' }: { title?: string }) {
  return (
    <div className="brand">
      <img src={iconUrl} alt="" className="brand-icon" width={22} height={22} />
      {title}
    </div>
  )
}
