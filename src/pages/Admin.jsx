import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Trash2, LayoutDashboard, Receipt, Plus, Coffee, Pencil } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useMenu } from '../context/MenuContext'
import { menuCategories } from '../data/siteData'

const ORDERS_KEY = 'artisan-roast-orders'

const availableImages = [
  '/images/coffee/latte.png',
  '/images/coffee/espresso.png',
  '/images/coffee/cappuccino.png',
  '/images/coffee/mocha.png',
  '/images/coffee/americano.png',
  '/images/coffee/coldbrew.png',
  '/images/coffee/signature-latte.png',
  '/images/tea/green-tea.png',
  '/images/tea/tea.png',
  '/images/tea/matcha.png',
  '/images/tea/taromilktea.png',
  '/images/bakery/croissant.png',
  '/images/bakery/signature-croissant.png',
  '/images/desserts/burger.png',
  '/images/desserts/strawberrydessert.png',
  '/images/desserts/chocolate_mousse.png',
  '/images/drinks/orangejuice.png',
  '/images/drinks/mango_smoothie.png',
  '/images/drinks/kiwi_smoothie.png',
  '/images/drinks/strawberry_smoothie.png',
  '/images/drinks/freshcoconut.png',
  '/images/coffee/coconutcoffee.png',
  '/images/coffee/chocolatefrappe.png',
  '/images/bakery/couplebread.png',
]

const emptyForm = { name: '', price: '', description: '', category: 'coffee', image: '/images/coffee/latte.png' }

export default function Admin() {
  const { user } = useAuth()
  const { menuItems, addMenuItem, deleteMenuItem, updateMenuItem } = useMenu()
  const [orders, setOrders] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)

  useEffect(() => {
    if (!user) return
    try {
      const raw = localStorage.getItem(ORDERS_KEY)
      if (raw) setOrders(JSON.parse(raw))
    } catch {
      setOrders([])
    }
  }, [user])

  if (!user || user.role !== 'admin') {
    return (
      <main className="flex flex-1 items-center justify-center px-6 py-16 text-center">
        <div>
          <h1 className="font-display text-3xl font-bold text-coffee-800">Admin Dashboard</h1>
          <p className="mt-3 text-coffee-700/60">
            Access restricted to admins only. Please log in with an admin account.
          </p>
          <Link
            to="/login"
            className="mt-6 inline-block rounded-full bg-gold px-7 py-3 font-bold text-coffee-900 transition-colors hover:bg-gold/90"
          >
            Login as Admin
          </Link>
        </div>
      </main>
    )
  }

  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0)
  const totalItems = orders.reduce((sum, o) => sum + o.items.reduce((s, i) => s + i.qty, 0), 0)

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

  function handleAddProduct(e) {
    e.preventDefault()
    const priceNum = parseFloat(form.price)
    if (!form.name.trim() || isNaN(priceNum)) return
    const payload = {
      name: form.name.trim(),
      description: form.description.trim(),
      price: `$${priceNum.toFixed(2)}`,
      image: form.image,
      categories: [form.category],
    }
    if (editingId) {
      updateMenuItem(editingId, payload)
    } else {
      const slug = form.name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-')
      addMenuItem({ id: `${slug}-${Date.now()}`, ...payload })
    }
    setForm(emptyForm)
    setEditingId(null)
  }

  function startEdit(item) {
    setEditingId(item.id)
    setForm({
      name: item.name,
      price: item.price.replace('$', ''),
      description: item.description,
      category: item.categories[0],
      image: item.image,
    })
  }

  function cancelEdit() {
    setEditingId(null)
    setForm(emptyForm)
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="flex items-center gap-2 font-display text-4xl font-bold text-coffee-800">
            <LayoutDashboard className="h-8 w-8 text-coffee-500" /> Admin Dashboard
          </h1>
          <p className="mt-2 text-coffee-700/60">Welcome, {user.name}. Manage all customer orders here.</p>
        </div>
        {orders.length > 0 && (
          <button
            onClick={clearOrders}
            className="flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition-colors hover:bg-red-100"
          >
            <Trash2 className="h-4 w-4" /> Clear All
          </button>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-white p-6 text-center shadow-md">
          <p className="font-display text-3xl font-bold text-coffee-800">{orders.length}</p>
          <p className="mt-1 text-sm text-coffee-700/60">Total Orders</p>
        </div>
        <div className="rounded-xl bg-white p-6 text-center shadow-md">
          <p className="font-display text-3xl font-bold text-coffee-800">${totalRevenue.toFixed(2)}</p>
          <p className="mt-1 text-sm text-coffee-700/60">Total Revenue</p>
        </div>
        <div className="rounded-xl bg-white p-6 text-center shadow-md">
          <p className="font-display text-3xl font-bold text-coffee-800">{totalItems}</p>
          <p className="mt-1 text-sm text-coffee-700/60">Items Sold</p>
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="mt-10 rounded-xl bg-white p-10 text-center shadow-md">
          <Receipt className="mx-auto mb-3 h-10 w-10 text-coffee-400" />
          <p className="text-coffee-700/60">No orders have been placed yet.</p>
        </div>
      ) : (
        <div className="mt-10 overflow-x-auto rounded-xl bg-white p-6 shadow-md">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-coffee-50 text-coffee-700/60">
                <th className="py-3 pr-4 font-semibold">Customer</th>
                <th className="py-3 pr-4 font-semibold">Items</th>
                <th className="py-3 pr-4 font-semibold">Address</th>
                <th className="py-3 pr-4 font-semibold">Date</th>
                <th className="py-3 pr-4 font-semibold">Total</th>
                <th className="py-3 font-semibold"></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-b border-coffee-50 last:border-0">
                  <td className="py-3 pr-4 font-semibold text-coffee-800">{o.name}</td>
                  <td className="py-3 pr-4 text-coffee-700/80">
                    {o.items.map((i) => `${i.name} ×${i.qty}`).join(', ')}
                  </td>
                  <td className="py-3 pr-4 text-coffee-700/80">{o.address}</td>
                  <td className="py-3 pr-4 text-coffee-700/60">{o.date}</td>
                  <td className="py-3 pr-4 font-bold text-coffee-800">${o.total.toFixed(2)}</td>
                  <td className="py-3">
                    <button
                      onClick={() => removeOrder(o.id)}
                      aria-label={`Remove order ${o.id}`}
                      className="text-coffee-700/40 transition-colors hover:text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Product management */}
      <div className="mt-14">
        <h2 className="flex items-center gap-2 font-display text-3xl font-bold text-coffee-800">
          <Coffee className="h-7 w-7 text-coffee-500" /> Manage Menu
        </h2>

        <div className="mt-6">
          <h3 className="mb-4 flex items-center gap-2 font-display text-xl font-bold text-coffee-800">
            {editingId ? (
              <>
                <Pencil className="h-5 w-5 text-coffee-500" /> Edit Product
              </>
            ) : (
              <>
                <Plus className="h-5 w-5 text-coffee-500" /> Add New Product
              </>
            )}
          </h3>
          <form onSubmit={handleAddProduct} className="grid gap-4 rounded-xl bg-white p-6 shadow-md sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-semibold text-coffee-800">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g., Iced Caramel Latte"
                className="w-full rounded-lg border border-coffee-100 px-4 py-2.5 text-sm outline-none focus:border-coffee-400"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-coffee-800">Price ($)</label>
              <input
                type="number"
                required
                min="0"
                step="0.01"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                placeholder="e.g., 5.50"
                className="w-full rounded-lg border border-coffee-100 px-4 py-2.5 text-sm outline-none focus:border-coffee-400"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-coffee-800">Category</label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full rounded-lg border border-coffee-100 px-4 py-2.5 text-sm outline-none focus:border-coffee-400"
              >
                {menuCategories
                  .filter((c) => c.id !== 'all')
                  .map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-coffee-800">Image</label>
              <input
                type="text"
                list="image-options"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
                placeholder="/images/coffee/my-new-drink.png"
                className="w-full rounded-lg border border-coffee-100 px-4 py-2.5 text-sm outline-none focus:border-coffee-400"
              />
              <datalist id="image-options">
                {availableImages.map((img) => (
                  <option key={img} value={img} />
                ))}
              </datalist>
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-semibold text-coffee-800">Description</label>
              <textarea
                rows={2}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Short description..."
                className="w-full rounded-lg border border-coffee-100 px-4 py-2.5 text-sm outline-none focus:border-coffee-400"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full rounded-full bg-coffee-600 py-3 font-bold text-white transition-colors hover:bg-coffee-700"
              >
                {editingId ? 'Update Product' : 'Add Product'}
              </button>
            </div>
            {editingId && (
              <div className="sm:col-span-2 -mt-2">
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="w-full rounded-full border border-coffee-200 py-3 font-bold text-coffee-700 transition-colors hover:bg-coffee-50"
                >
                  Cancel
                </button>
              </div>
            )}
          </form>
        </div>

        <div className="mt-8 overflow-x-auto rounded-xl bg-white p-6 shadow-md">
          <h3 className="mb-4 font-display text-xl font-bold text-coffee-800">
            Products ({menuItems.length})
          </h3>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-coffee-50 text-coffee-700/60">
                <th className="py-3 pr-4 font-semibold">Image</th>
                <th className="py-3 pr-4 font-semibold">Name</th>
                <th className="py-3 pr-4 font-semibold">Category</th>
                <th className="py-3 pr-4 font-semibold">Price</th>
                <th className="py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {menuItems.map((m) => (
                <tr key={m.id} className="border-b border-coffee-50 last:border-0">
                  <td className="py-3 pr-4">
                    <img src={m.image} alt={m.name} className="h-12 w-12 rounded-lg object-cover" />
                  </td>
                  <td className="py-3 pr-4 font-semibold text-coffee-800">{m.name}</td>
                  <td className="py-3 pr-4 capitalize text-coffee-700/80">{m.categories[0]}</td>
                  <td className="py-3 pr-4 font-bold text-coffee-800">{m.price}</td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => startEdit(m)}
                        aria-label={`Edit ${m.name}`}
                        className="text-coffee-700/40 transition-colors hover:text-coffee-600"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => deleteMenuItem(m.id)}
                        aria-label={`Delete ${m.name}`}
                        className="text-coffee-700/40 transition-colors hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}