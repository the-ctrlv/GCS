import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

type GCSInputProps = {
  label: string
  className?: string
  noBorderTop?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
} & React.InputHTMLAttributes<HTMLInputElement>

export default function GCSInput({ label, error, noBorderTop, className, onChange, ...props }: GCSInputProps) {
  const additionalClasses = className ?? ''
  return (
    <label
      className={`flex items-center border-b px-4 ${error ? 'border-danger' : 'border-bGray'}
      ${noBorderTop ? '' : 'before:bg-bGray'}
      relative cursor-pointer before:absolute before:left-0 before:top-0 before:h-[1px]
      before:w-full
    `}
    >
      <span className="block min-w-[100px] py-5 text-xs uppercase">{label}</span>
      <span className="me-6 ms-3 h-[68px] w-[1px] bg-bGray" />
      <input
        onChange={onChange}
        {...props}
        className={`flex-grow appearance-none bg-transparent text-base focus:outline-none
        ${additionalClasses}`}
        type="text"
      />
      {error && <span className="text-error">{error.toString()}</span>}
    </label>
  )
}
