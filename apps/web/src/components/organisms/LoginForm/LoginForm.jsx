import { useState } from 'react'
import Button from '../../atoms/Button/Button'
import Icon from '../../atoms/Icon/Icon'
import Checkbox from '../../molecules/Checkbox/Checkbox'
import Divider from '../../molecules/Divider/Divider'
import FormField from '../../molecules/FormField/FormField'
import SocialButton from '../../molecules/SocialButton/SocialButton'
import githubIcon from '../../../assets/auth/github.svg'
import gmailIcon from '../../../assets/auth/gmail.svg'

export default function LoginForm({ onLogin }) {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    onLogin?.({ identifier, password, remember })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-center gap-6 px-8"
    >
      <div className="flex w-full flex-col items-center gap-8">
        <div className="flex w-80 max-w-full flex-col gap-10">
          <div className="flex flex-col gap-6 leading-normal text-offwhite">
            <h1 className="font-prompt text-3xl font-semibold">Login</h1>
            <p className="font-prompt text-xl">Boas-vindas! Faça seu login.</p>
          </div>
          <div className="flex flex-col gap-4">
            <FormField
              id="identifier"
              label="Email ou usuário"
              name="identifier"
              autoComplete="username"
              required
              value={identifier}
              onChange={(event) => setIdentifier(event.target.value)}
            />
            <div className="flex flex-col gap-2">
              <FormField
                id="password"
                label="Senha"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <div className="flex items-center justify-between">
                <Checkbox
                  id="remember"
                  label="Lembrar-me"
                  checked={remember}
                  onChange={(event) => setRemember(event.target.checked)}
                />
                <a
                  href="#"
                  className="font-prompt text-base leading-normal text-offwhite underline"
                >
                  Esqueci a senha
                </a>
              </div>
            </div>
          </div>
        </div>
        <Button type="submit" icon="arrow_forward" className="w-80 max-w-full">
          Login
        </Button>
        <div className="flex w-full flex-col gap-2">
          <Divider>ou entre com outras contas</Divider>
          <div className="flex justify-center gap-6">
            <SocialButton src={githubIcon} label="Github" />
            <SocialButton src={gmailIcon} label="Gmail" />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2">
        <p className="text-center font-prompt text-base leading-normal text-offwhite">
          Ainda não tem conta?
        </p>
        <a
          href="#"
          className="flex items-center justify-center gap-3 font-prompt text-lg leading-normal text-verde-destaque"
        >
          Crie seu cadastro!
          <Icon name="assignment" />
        </a>
      </div>
    </form>
  )
}
