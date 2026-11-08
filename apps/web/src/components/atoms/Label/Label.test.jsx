import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import Label from './Label'

describe('Label', () => {
  it('renders text associated to a form control', () => {
    render(<Label htmlFor="email">Email</Label>)

    expect(screen.getByText('Email')).toHaveAttribute('for', 'email')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Label htmlFor="email">Email</Label>)

    expect(await axe(container)).toHaveNoViolations()
  })
})
