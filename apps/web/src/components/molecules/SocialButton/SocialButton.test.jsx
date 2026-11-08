import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import SocialButton from './SocialButton'

describe('SocialButton', () => {
  it('renders icon and label', () => {
    render(<SocialButton src="github.svg" label="Github" />)

    expect(screen.getByRole('button', { name: 'Github' })).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn()
    render(<SocialButton src="github.svg" label="Github" onClick={onClick} />)

    await userEvent.click(screen.getByRole('button', { name: 'Github' }))

    expect(onClick).toHaveBeenCalledOnce()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<SocialButton src="github.svg" label="Github" />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
