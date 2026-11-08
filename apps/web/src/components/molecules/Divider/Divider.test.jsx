import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import Divider from './Divider'

describe('Divider', () => {
  it('renders its text between two lines', () => {
    render(<Divider>ou entre com outras contas</Divider>)

    expect(screen.getByText('ou entre com outras contas')).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Divider>ou entre com outras contas</Divider>)

    expect(await axe(container)).toHaveNoViolations()
  })
})
