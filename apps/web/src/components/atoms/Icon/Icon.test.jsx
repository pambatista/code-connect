import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import Icon from './Icon'

describe('Icon', () => {
  it('renders a decorative material icon glyph', () => {
    const { container } = render(<Icon name="arrow_forward" />)

    const icon = container.querySelector('.material-icon')
    expect(icon).toHaveTextContent('arrow_forward')
    expect(icon).toHaveAttribute('aria-hidden', 'true')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Icon name="arrow_forward" />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
