import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Trash2, Search, Plus, Minus } from 'lucide-react'
import { menuCategories } from '../data/siteData'
import { useAuth } from '../context/AuthContext'
import { useMenu } from '../context/MenuContext'

const ORDERS_KEY = 'artisan-roast-orders'

export default function Order() {
  const { user } = useAuth()
  const { menuItems } = useMenu()
  const [cart, setCart] = useState([])
  const [query, setQuery] = useState('')
  const [active, setActive] = useState('all')
  const [checkoutForm, setCheckoutForm] = useState({ name: '', phone: '', address: '' })
  const [placing, setPlacing] = useState(false)
  const [lastOrder, setLastOrder] = useState(null)

  function addToCart(item) {
    setLastOrder(null)
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id)
      if (existing) {
        return prev.map((c) => (c.id === item.id ? { ...c, qty: c.qty + 1 } : c))
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, qty: 1 }]
    })
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((c) => c.id !== id))
  }

  function increaseQty(id) {
    setCart((prev) => prev.map((c) => (c.id === id ? { ...c, qty: c.qty + 1 } : c)))
  }

  function decreaseQty(id) {
    setCart((prev) => prev.map((c) => (c.id === id ? { ...c, qty: c.qty - 1 } : c)).filter((c) => c.qty > 0))
  }

  const total = cart.reduce((sum, c) => sum + parseFloat(c.price.replace('$', '')) * c.qty, 0)

  function handlePlaceOrder(e) {
    e.preventDefault()
    if (cart.length === 0) return
    if (!user) return
    setPlacing(true)
    setTimeout(() => {
      const order = {
        id: Date.now(),
        name: checkoutForm.name,
        phone: checkoutForm.phone,
        address: checkoutForm.address,
        items: cart,
        total,
        date: new Date().toLocaleString(),
      }
      const updated = [order]
      try {
        const existing = JSON.parse(localStorage.getItem(ORDERS_KEY) || '[]')
        const merged = [...updated, ...existing]
        localStorage.setItem(ORDERS_KEY, JSON.stringify(merged))
      } catch {
        // ignore storage errors
      }
      setLastOrder({ name: checkoutForm.name, total })
      setCart([])
      setCheckoutForm({ name: '', phone: '', address: '' })
      setPlacing(false)
    }, 1200)
  }

  const visibleItems = menuItems.filter((item) => {
    const matchesCategory = active === 'all' || item.categories.includes(active)
    const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase())
    return matchesCategory && matchesQuery
  })

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-6 font-display text-4xl font-bold text-coffee-800">Order Online</h1>

      {lastOrder && (
        <div className="mb-8 rounded-xl bg-coffee-50 p-6 text-center text-coffee-800 shadow-sm">
          <p className="font-display text-xl font-bold">
            Thank you, {lastOrder.name}! Your order of ${lastOrder.total.toFixed(2)} has been placed.
          </p>
          <p className="mt-1 text-sm text-coffee-700/60">
            Our team will confirm your order shortly. (Demo only — no real order was placed)
          </p>
        </div>
      )}

      <div className="relative mb-10 max-w-md">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-coffee-700/40" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search items to order..."
          className="w-full rounded-full border border-coffee-100 bg-white py-2.5 pl-12 pr-4 text-sm text-coffee-800 outline-none focus:border-coffee-400"
        />
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <aside className="w-full shrink-0 lg:w-44">
          <h2 className="mb-3 font-display text-lg font-bold text-coffee-800">Categories</h2>
          <div className="flex flex-wrap gap-2 lg:flex-col">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors lg:rounded-lg lg:text-left ${
                  active === cat.id
                    ? 'bg-coffee-800 text-white'
                    : 'bg-white text-coffee-700 hover:bg-coffee-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </aside>

        <div className="flex-1">
          {visibleItems.length === 0 ? (
            <p className="py-10 text-center text-coffee-700/60">No items match your search.</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {visibleItems.map((item) => (
                <div key={item.id} className="rounded-xl bg-white p-4 shadow-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="mb-3 h-32 w-full rounded-lg object-cover"
                  />
                  <h2 className="font-display font-bold text-coffee-800">{item.name}</h2>
                  <p className="text-coffee-700/60">{item.price}</p>
                  <button
                    onClick={() => addToCart(item)}
                    className="mt-3 w-full rounded-lg bg-coffee-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-coffee-700"
                  >
                    Add To Cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-full shrink-0 lg:w-72 ">
          <h2 className="mb-4 font-display text-xl font-bold text-coffee-800">Shopping Cart</h2>
          {cart.length === 0 ? (
            <p className="text-sm text-coffee-700/50">Your cart is empty.</p>
          ) : (
            <ul className="space-y-2">
              {cart.map((c) => (
                <li
                  key={c.id}
                  className="flex items-center justify-between gap-3 border-b border-coffee-50 pb-2 text-sm"
                >
                  <div>
                    <p className="font-semibold text-coffee-800">{c.name}</p>
                    <p className="text-coffee-700/60">{c.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQty(c.id)}
                      aria-label={`Decrease ${c.name}`}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-coffee-100 text-coffee-700 transition-colors hover:bg-coffee-50"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-6 text-center font-semibold text-coffee-800">{c.qty}</span>
                    <button
                      onClick={() => increaseQty(c.id)}
                      aria-label={`Increase ${c.name}`}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-coffee-100 text-coffee-700 transition-colors hover:bg-coffee-50"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => removeFromCart(c.id)}
                      aria-label={`Remove ${c.name}`}
                      className="text-coffee-700/40 hover:text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <h3 className="mt-4 text-right font-bold text-coffee-800">Total: ${total.toFixed(2)}</h3>
          {cart.length > 0 && !user && (
            <div className="mt-6 space-y-3 border-t border-coffee-50 pt-4 text-center">
              <p className="text-sm text-coffee-700/70">Please log in to place your order.</p>
              <Link
                to="/login"
                className="block w-full rounded-full bg-gold px-5 py-3 font-bold text-coffee-900 transition-colors hover:bg-gold/90"
              >
                Login to Order
              </Link>
            </div>
          )}
          {cart.length > 0 && user && (
            <form onSubmit={handlePlaceOrder} className="mt-6 space-y-3 border-t border-coffee-50 pt-4">
              <input
                type="text"
                required
                value={checkoutForm.name}
                onChange={(e) => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                placeholder="Your name"
                className="w-full rounded-lg border border-coffee-100 px-4 py-2.5 text-sm outline-none focus:border-coffee-400"
              />
              <input
                type="tel"
                required
                value={checkoutForm.phone}
                onChange={(e) => setCheckoutForm({ ...checkoutForm, phone: e.target.value })}
                placeholder="Phone number"
                className="w-full rounded-lg border border-coffee-100 px-4 py-2.5 text-sm outline-none focus:border-coffee-400"
              />
              <input
                type="text"
                required
                value={checkoutForm.address}
                onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })}
                placeholder="Delivery address"
                className="w-full rounded-lg border border-coffee-100 px-4 py-2.5 text-sm outline-none focus:border-coffee-400"
              />
              <button
                type="submit"
                disabled={placing}
                className="w-full rounded-full bg-coffee-600 py-3 font-bold text-white transition-colors hover:bg-coffee-700 disabled:opacity-60"
              >
                {placing ? 'Placing order...' : 'Place Order'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
