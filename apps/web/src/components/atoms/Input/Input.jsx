export default function Input({ className = '', type = 'text', ...props }) {
  return (
    <input
      type={type}
      className={`w-full rounded bg-cinza-medio px-4 py-2 font-prompt text-base leading-normal text-cinza-escuro outline-none ${className}`}
      {...props}
    />
  )
}
