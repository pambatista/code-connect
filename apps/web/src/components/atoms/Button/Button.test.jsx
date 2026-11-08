import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import Button from './Button'

describe('Button', () => {
  it('renders label and optional icon', () => {
    render(<Button icon="arrow_forward">Login</Button>)

    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Enviar</Button>)

    await userEvent.click(screen.getByRole('button', { name: 'Enviar' }))

    expect(onClick).toHaveBeenCalledOnce()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Button icon="arrow_forward">Login</Button>)

    expect(await axe(container)).toHaveNoViolations()
  })
})
