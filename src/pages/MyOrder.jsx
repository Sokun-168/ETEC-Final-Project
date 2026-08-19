import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PackageCheck, Trash2 } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const ORDERS_KEY = 'artisan-roast-orders'

export default function MyOrder() {
  const { user } = useAuth()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    if (!user) return
    try {
      const raw = localStorage.getItem(ORDERS_KEY)
      if (raw) setOrders(JSON.parse(raw))
    } catch {
      setOrders([])
    }
  }, [user])

  function removeOrder(id) {
    const updated = orders.filter((o) => o.id !== id)
    setOrders(updated)
    try {
      localStorage.setItem(ORDERS_KEY, JSON.stringify(updated))
    } catch {
      // ignore storage errors
    }
  }

  function clearOrders() {
    setOrders([])
    try {
      localStorage.removeItem(ORDERS_KEY)
    } catch {
      // ignore storage errors
    }
  }

  if (!user) {
    return (
      <main className="flex flex-1 items-center justify-center px-6 py-16 text-center">
        <div>
          <h1 className="font-display text-3xl font-bold text-coffee-800">My Orders</h1>
          <p className="mt-3 text-coffee-700/60">Please log in to view your orders.</p>
          <Link
            to="/login"
            className="mt-6 inline-block rounded-full bg-gold px-7 py-3 font-bold text-coffee-900 transition-colors hover:bg-gold/90"
          >
            Login
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-display text-4xl font-bold text-coffee-800">My Orders</h1>
        {orders.length > 0 && (
          <button
            onClick={clearOrders}
            className="flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition-colors hover:bg-red-100"
          >
            <Trash2 className="h-4 w-4" /> Clear All
          </button>
        )}
      </div>

      {orders.length === 0 ? (
        <div className="rounded-xl bg-white p-10 text-center shadow-md">
          <PackageCheck className="mx-auto mb-3 h-10 w-10 text-coffee-400" />
          <p className="text-coffee-700/60">You have no orders yet.</p>
          <Link
            to="/order"
            className="mt-5 inline-block rounded-full bg-coffee-600 px-7 py-3 font-bold text-white transition-colors hover:bg-coffee-700"
          >
            Order Now
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {orders.map((o) => {
            const shown = o.items.slice(0, 3)
            const more = o.items.length - shown.length
            return (
              <div key={o.id} className="flex flex-col rounded-xl bg-white p-6 shadow-md">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-display text-lg font-bold text-coffee-800">{o.name}</span>
                  <button
                    onClick={() => removeOrder(o.id)}
                    aria-label={`Remove order for ${o.name}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-coffee-700/40 transition-colors hover:bg-red-50 hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <p className="mt-1 text-sm text-coffee-700/60">{o.date}</p>
                <ul className="mt-3 flex-1 space-y-1.5 text-sm text-coffee-700/80">
                  {shown.map((i) => (
                    <li key={i.id} className="flex items-center justify-between gap-3">
                      <span>
                        {i.name} × {i.qty}
                      </span>
                      <span className="font-semibold text-coffee-800">{i.price}</span>
                    </li>
                  ))}
                  {more > 0 && (
                    <li className="italic text-coffee-700/50">
                      +{more} more item{more > 1 ? 's' : ''}
                    </li>
                  )}
                </ul>
                <p className="mt-2 text-sm text-coffee-700/60">Delivery to: {o.address}</p>
                <p className="mt-3 border-t border-coffee-50 pt-3 text-right font-bold text-coffee-800">
                  Total: ${o.total.toFixed(2)}
                </p>
              </div>
            )
          })}
        </div>
      )}
    </main>
  )
}