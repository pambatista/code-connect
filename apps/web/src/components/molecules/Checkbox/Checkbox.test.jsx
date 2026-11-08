import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import Checkbox from './Checkbox'

describe('Checkbox', () => {
  it('renders with its label', () => {
    render(<Checkbox id="remember" label="Lembrar-me" checked={false} onChange={() => {}} />)

    expect(screen.getByLabelText('Lembrar-me')).toBeInTheDocument()
  })

  it('calls onChange when toggled', async () => {
    const onChange = vi.fn()
    render(<Checkbox id="remember" label="Lembrar-me" checked={false} onChange={onChange} />)

    await userEvent.click(screen.getByLabelText('Lembrar-me'))

    expect(onChange).toHaveBeenCalledOnce()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Checkbox id="remember" label="Lembrar-me" checked={false} onChange={() => {}} />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
