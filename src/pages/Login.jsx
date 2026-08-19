import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [tab, setTab] = useState('login')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { login, register } = useAuth()
  const navigate = useNavigate()

  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  })

  function fakeSubmit(handler) {
    setLoading(true)
    setTimeout(() => {
      handler()
      setLoading(false)
    }, 800)
  }

  function handleLogin(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    setTimeout(async () => {
      const loggedUser = await login(loginForm.email, loginForm.password)
      navigate(loggedUser.role === 'admin' ? '/admin' : '/')
      setLoading(false)
    }, 800)
  }

  function handleRegister(e) {
    e.preventDefault()
    if (registerForm.password !== registerForm.confirm) {
      setError('Passwords do not match.')
      return
    }
    fakeSubmit(() => {
      register(registerForm.name, registerForm.email)
      navigate('/')
    })
  }

  return (
    <main className="flex flex-1 items-center justify-center px-6 py-16">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md">
        <div className="mb-6 flex rounded-lg bg-coffee-50 p-1">
          {['login', 'register'].map((t) => (
            <button
              key={t}
              onClick={() => {
                setTab(t)
                setError('')
              }}
              className={`flex-1 rounded-md py-2 text-sm font-semibold capitalize transition-colors ${
                tab === t ? 'bg-coffee-300 text-white' : 'text-coffee-700/60'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {error && (
          <p className="mb-4 rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-600">{error}</p>
        )}

        {tab === 'login' ? (
          <div>
            <h3 className="mb-6 text-center font-display text-2xl font-bold text-coffee-800">
              Welcome Back
            </h3>
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="mb-1 block text-sm font-semibold text-coffee-800">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full rounded-lg border border-coffee-100 px-4 py-2.5 outline-none focus:border-coffee-400"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-coffee-800">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  placeholder="Enter password"
                  className="w-full rounded-lg border border-coffee-100 px-4 py-2.5 outline-none focus:border-coffee-400"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-coffee-600 py-3 font-bold text-white transition-colors hover:bg-coffee-700 disabled:opacity-60"
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h3 className="mb-6 text-center font-display text-2xl font-bold text-coffee-800">
              Create Account
            </h3>
            <form className="space-y-4" onSubmit={handleRegister}>
              <div>
                <label className="mb-1 block text-sm font-semibold text-coffee-800">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={registerForm.name}
                  onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-coffee-100 px-4 py-2.5 outline-none focus:border-coffee-400"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-coffee-800">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={registerForm.email}
                  onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                  placeholder="Your email address"
                  className="w-full rounded-lg border border-coffee-100 px-4 py-2.5 outline-none focus:border-coffee-400"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-coffee-800">
                  Password
                </label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={registerForm.password}
                  onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                  placeholder="Create password (min. 6 characters)"
                  className="w-full rounded-lg border border-coffee-100 px-4 py-2.5 outline-none focus:border-coffee-400"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-coffee-800">
                  Confirm Password
                </label>
                <input
                  type="password"
                  required
                  value={registerForm.confirm}
                  onChange={(e) => setRegisterForm({ ...registerForm, confirm: e.target.value })}
                  placeholder="Repeat your password"
                  className="w-full rounded-lg border border-coffee-100 px-4 py-2.5 outline-none focus:border-coffee-400"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-coffee-600 py-3 font-bold text-white transition-colors hover:bg-coffee-700 disabled:opacity-60"
              >
                {loading ? 'Creating account...' : 'Register'}
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  )
}
