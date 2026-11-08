import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import Input from './Input'

describe('Input', () => {
  it('renders and accepts user typing', async () => {
    render(<Input aria-label="Email" />)

    const input = screen.getByRole('textbox', { name: 'Email' })
    await userEvent.type(input, 'usuario123')

    expect(input).toHaveValue('usuario123')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Input aria-label="Email" />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
