import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { axe } from 'jest-axe'
import AuthLayout from './AuthLayout'

function renderWithRoute() {
  return render(
    <MemoryRouter initialEntries={['/login']}>
      <Routes>
        <Route element={<AuthLayout image="side.png" imageAlt="Pessoa programando" />}>
          <Route path="/login" element={<p>conteúdo da rota</p>} />
        </Route>
      </Routes>
    </MemoryRouter>,
  )
}

describe('AuthLayout', () => {
  it('renders the child route through the outlet', () => {
    renderWithRoute()

    expect(screen.getByText('conteúdo da rota')).toBeInTheDocument()
  })

  it('renders side image and CodeConnect logo', () => {
    renderWithRoute()

    expect(screen.getByAltText('Pessoa programando')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'CodeConnect' })).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = renderWithRoute()

    expect(await axe(container)).toHaveNoViolations()
  })
})
