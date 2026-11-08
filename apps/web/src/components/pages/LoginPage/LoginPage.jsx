import LoginForm from '../../organisms/LoginForm/LoginForm'

export default function LoginPage() {
  const handleLogin = (credentials) => {
    // TODO(auth): POST /v1/auth/login quando o endpoint existir na API
    void credentials
  }

  return <LoginForm onLogin={handleLogin} />
}
