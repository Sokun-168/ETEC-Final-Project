import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'artisan-roast-user'
const ADMIN_EMAIL = 'ggkun612@gmail.com'
const ADMIN_PASSWORD = 'Kun@168'

const AuthContext = createContext(null)

function nameFromEmail(email) {
  return email
    .split('@')[0]
    .replace(/[._-]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setUser(JSON.parse(raw))
    } catch {
      setUser(null)
    }
  }, [])

  async function login(email, password) {
    const isAdmin = email === ADMIN_EMAIL && password === ADMIN_PASSWORD
    const fakeUser = {
      name: isAdmin ? 'Admin' : nameFromEmail(email),
      email,
      role: isAdmin ? 'admin' : 'user',
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fakeUser))
    setUser(fakeUser)
    return fakeUser
  }

  async function register(name, email) {
    const fakeUser = { name, email, role: 'user' }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fakeUser))
    setUser(fakeUser)
    return fakeUser
  }

  async function logout() {
    localStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}