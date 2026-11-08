export default function Label({ htmlFor, children, className = '' }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`font-prompt text-lg leading-normal text-offwhite ${className}`}
    >
      {children}
    </label>
  )
}
