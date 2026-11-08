import Input from '../../atoms/Input/Input'
import Label from '../../atoms/Label/Label'

export default function FormField({ className = '', error, id, label, ...inputProps }) {
  return (
    <div className={`flex w-full flex-col gap-2 ${className}`}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} aria-invalid={error ? true : undefined} {...inputProps} />
      {error && (
        <p role="alert" className="font-prompt text-sm leading-normal text-verde-destaque">
          {error}
        </p>
      )}
    </div>
  )
}
