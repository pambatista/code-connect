export default function SocialButton({ className = '', label, src, ...props }) {
  return (
    <button type="button" className={`flex flex-col items-center gap-1 ${className}`} {...props}>
      <img src={src} alt="" className="block" />
      <span className="font-prompt text-xs leading-normal text-offwhite">{label}</span>
    </button>
  )
}
