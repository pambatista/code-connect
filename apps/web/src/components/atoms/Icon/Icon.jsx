export default function Icon({ name, className = '' }) {
  return (
    <span aria-hidden="true" className={`material-icon ${className}`}>
      {name}
    </span>
  )
}
