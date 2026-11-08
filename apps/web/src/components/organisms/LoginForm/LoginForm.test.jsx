import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import LoginForm from './LoginForm'

describe('LoginForm', () => {
  it('renders heading, fields, social buttons and links', () => {
    render(<LoginForm />)

    expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email ou usuário')).toBeInTheDocument()
    expect(screen.getByLabelText('Senha')).toBeInTheDocument()
    expect(screen.getByLabelText('Lembrar-me')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Github' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Gmail' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Esqueci a senha' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /crie seu cadastro/i })).toBeInTheDocument()
  })

  it('submits the entered credentials', async () => {
    const onLogin = vi.fn()
    render(<LoginForm onLogin={onLogin} />)

    await userEvent.type(screen.getByLabelText('Email ou usuário'), 'usuario123')
    await userEvent.type(screen.getByLabelText('Senha'), 'secret')
    await userEvent.click(screen.getByLabelText('Lembrar-me'))
    await userEvent.click(screen.getByRole('button', { name: /login/i }))

    expect(onLogin).toHaveBeenCalledWith({
      identifier: 'usuario123',
      password: 'secret',
      remember: true,
    })
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<LoginForm />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
