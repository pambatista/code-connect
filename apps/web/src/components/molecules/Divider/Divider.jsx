import line from '../../../assets/auth/divider.svg'

export default function Divider({ children, className = '' }) {
  return (
    <div className={`flex w-full items-center gap-4 ${className}`}>
      <img src={line} alt="" aria-hidden="true" className="h-px flex-1" />
      <span className="whitespace-nowrap font-prompt text-base leading-normal text-offwhite">
        {children}
      </span>
      <img src={line} alt="" aria-hidden="true" className="h-px flex-1" />
    </div>
  )
}
