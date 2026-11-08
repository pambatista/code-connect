import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import AuthLayout from './components/templates/AuthLayout/AuthLayout'
import LoginPage from './components/pages/LoginPage/LoginPage'

const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/login" replace /> },
  {
    element: <AuthLayout image="/login-side.webp" imageAlt="Pessoa programando" />,
    children: [{ path: '/login', element: <LoginPage /> }],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
