import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import LoginPage from './LoginPage'

describe('LoginPage', () => {
  it('renders the login form', () => {
    render(<LoginPage />)

    expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email ou usuário')).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<LoginPage />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
