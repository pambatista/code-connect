import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import Logo from './Logo'

describe('Logo', () => {
  it('renders the CodeConnect brand mark', () => {
    render(<Logo />)

    expect(screen.getByRole('img', { name: 'CodeConnect' })).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Logo />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
