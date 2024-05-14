import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

type GCSTextareaProps = {
  label: string
  className?: string
  noBorderTop?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

export default function GCSTextarea({ label, error, noBorderTop, className, onChange, ...props }: GCSTextareaProps) {
  const additionalClasses = className ?? ''
  return (
    <label
      className={`flex items-center border-b px-4 ${error ? 'border-danger' : 'border-bGray'}
      ${noBorderTop ? '' : 'before:bg-bGray'}
      relative cursor-pointer before:absolute before:left-0 before:top-0 before:h-[1px]
      before:w-full
    `}
    >
      <div className="flex h-full items-end pb-3">
        <span className="block min-w-[100px] text-xs uppercase">{label}</span>
      </div>
      <span className="me-6 ms-3 h-[68px] w-[1px] bg-bGray" />
      <textarea
        onChange={onChange}
        {...props}
        rows={2}
        className={`flex-grow resize-none appearance-none bg-transparent text-base focus:outline-none
        ${additionalClasses}`}
      />
      {error && <span className="text-error -bottom-5">{error.toString()}</span>}
    </label>
  )
}
