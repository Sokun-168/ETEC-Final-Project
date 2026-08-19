import { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { Coffee, Menu, X, LogOut, UserRound } from 'lucide-react'
import { navLinks } from '../data/siteData'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    await logout()
    setOpen(false)
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-50 bg-coffee-800 text-white shadow-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 font-display text-xl font-bold tracking-tight"
        >
          <Coffee className="h-6 w-6 text-coffee-300" strokeWidth={2.2} />
          Artisan Roast
        </Link>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-1 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `block rounded-full px-4 py-2 transition-colors hover:text-coffee-300 ${
                      isActive ? 'text-coffee-300' : 'text-white/90'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            {user && (
              <li>
                <NavLink
                  to="/my-orders"
                  className={({ isActive }) =>
                    `block rounded-full px-4 py-2 transition-colors hover:text-coffee-300 ${
                      isActive ? 'text-coffee-300' : 'text-white/90'
                    }`
                  }
                >
                  My Orders
                </NavLink>
              </li>
            )}
            {user?.role === 'admin' && (
              <li>
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    `block rounded-full px-4 py-2 transition-colors hover:text-coffee-300 ${
                      isActive ? 'text-coffee-300' : 'text-white/90'
                    }`
                  }
                >
                  Admin
                </NavLink>
              </li>
            )}
          </ul>

          {user ? (
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-white/80">
                <UserRound className="h-4 w-4" />
                {user.name}
              </span>
              <button
                onClick={handleLogout}
                aria-label="Log out"
                className="rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-coffee-300"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gold px-5 py-2 text-sm font-bold text-coffee-900 transition-colors hover:bg-gold/90"
            >
              Login
            </Link>
          )}
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-white/10 bg-coffee-800 px-6 pb-4 text-sm font-medium md:hidden">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded px-2 py-2 transition-colors hover:text-coffee-300 ${
                    isActive ? 'text-coffee-300' : 'text-white/90'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          {user && (
            <li>
              <NavLink
                to="/my-orders"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded px-2 py-2 transition-colors hover:text-coffee-300 ${
                    isActive ? 'text-coffee-300' : 'text-white/90'
                  }`
                }
              >
                My Orders
              </NavLink>
            </li>
          )}
          {user?.role === 'admin' && (
            <li>
              <NavLink
                to="/admin"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded px-2 py-2 transition-colors hover:text-coffee-300 ${
                    isActive ? 'text-coffee-300' : 'text-white/90'
                  }`
                }
              >
                Admin
              </NavLink>
            </li>
          )}
          <li className="mt-2 border-t border-white/10 pt-2">
            {user ? (
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-2 rounded px-2 py-2 text-white/90 hover:text-coffee-300"
              >
                <LogOut className="h-4 w-4" /> Log Out ({user.name})
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-coffee-900 transition-colors hover:bg-gold/90"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      )}
    </header>
  )
}