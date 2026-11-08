import checkIcon from '../../../assets/auth/check.svg'

export default function Checkbox({ checked, className = '', id, label, ...props }) {
  return (
    <label htmlFor={id} className={`flex cursor-pointer items-center gap-2 ${className}`}>
      <input id={id} type="checkbox" checked={checked} className="sr-only" {...props} />
      <span className="flex items-center justify-center rounded border-2 border-cinza-medio p-1">
        <img src={checkIcon} alt="" className={`h-4 w-4 ${checked ? '' : 'invisible'}`} />
      </span>
      <span className="font-prompt text-base leading-normal text-cinza-medio">{label}</span>
    </label>
  )
}
