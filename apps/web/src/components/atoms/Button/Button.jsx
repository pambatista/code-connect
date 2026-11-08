import Icon from '../Icon/Icon'

export default function Button({ children, className = '', icon, type = 'button', ...props }) {
  return (
    <button
      type={type}
      className={`flex items-center justify-center gap-2 rounded-lg bg-verde-destaque px-4 py-3 font-prompt text-lg font-semibold leading-normal text-verde-petroleo transition hover:brightness-95 ${className}`}
      {...props}
    >
      {children}
      {icon && <Icon name={icon} className="text-lg" />}
    </button>
  )
}
