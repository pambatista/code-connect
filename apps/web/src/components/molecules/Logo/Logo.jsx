import mark from '../../../assets/auth/logo-mark.svg'
import mid from '../../../assets/auth/logo-mid.svg'
import word from '../../../assets/auth/logo-word.svg'

export default function Logo({ className = '' }) {
  return (
    <div role="img" aria-label="CodeConnect" className={className}>
      <div className="relative h-10 w-32">
        <img src={mark} alt="" className="absolute left-0 top-3.5" />
        <img src={mid} alt="" className="absolute left-3 top-1.5" />
        <img src={word} alt="" className="absolute right-0 top-0" />
      </div>
    </div>
  )
}
