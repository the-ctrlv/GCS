import './styles.scss'

type GCSButtonProps = {
  children: React.ReactNode
  isWhite?: boolean
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export default function GCSButton({ children, isWhite, className, onClick, type }: GCSButtonProps) {
  const additionalClasses = className ?? ''

  return (
    <button
      onClick={onClick}
      type={type ?? 'button'}
      className={`gcs-btn rounded-full border px-9 py-3 text-sm
      font-semibold uppercase tracking-[0.28px]
      ${isWhite ? 'border-white text-white' : 'border-dark text-dark'}
      ${additionalClasses}`}
    >
      <div className="text-wrapper">
        <span>{children}</span>
        <span>{children}</span>
      </div>
    </button>
  )
}
