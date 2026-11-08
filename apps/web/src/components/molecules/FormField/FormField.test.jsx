import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import FormField from './FormField'

describe('FormField', () => {
  it('associates the label to the input', () => {
    render(<FormField id="email" label="Email ou usuário" />)

    expect(screen.getByLabelText('Email ou usuário')).toBeInTheDocument()
  })

  it('shows the error message when provided', () => {
    render(<FormField id="email" label="Email" error="Campo obrigatório" />)

    expect(screen.getByRole('alert')).toHaveTextContent('Campo obrigatório')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <FormField id="email" label="Email" error="Campo obrigatório" />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
