import { useState } from 'react'
import { Star, Search } from 'lucide-react'
import { menuCategories, beanOrigins, openingHours, menuStats } from '../data/siteData'
import { useMenu } from '../context/MenuContext'

export default function Menu() {
  const { menuItems } = useMenu()
  const [query, setQuery] = useState('')

  const categories = menuCategories.filter((cat) => cat.id !== 'all')

  function scrollToCategory(id) {
    const target =
      id === 'all' ? document.getElementById('menu-sections') : document.getElementById(`category-${id}`)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-coffee-50 py-16 text-center">
        <h1 className="font-display text-4xl font-bold text-coffee-800">Our Menu</h1>
        <p className="mx-auto mt-3 max-w-lg text-coffee-700/60">
          Freshly prepared drinks and snacks made with premium ingredients.
        </p>

        <div className="mx-auto mt-8 flex w-full max-w-md flex-wrap items-center justify-center gap-2 px-6">
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-coffee-700/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search menu..."
              className="w-full rounded-full border border-coffee-100 bg-white py-2.5 pl-12 pr-4 text-sm text-coffee-800 outline-none focus:border-coffee-400"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2 px-6">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-coffee-700 transition-colors hover:bg-coffee-100"
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Menu sections by category */}
      <section id="menu-sections" className="mx-auto max-w-6xl px-6 py-16">
        {categories.map((cat) => {
          const items = menuItems.filter(
            (item) =>
              item.categories.includes(cat.id) &&
              item.name.toLowerCase().includes(query.toLowerCase()),
          )
          if (items.length === 0) return null
          return (
            <div id={`category-${cat.id}`} key={cat.id} className="mb-16 scroll-mt-24 last:mb-0">
              <h2 className="mb-8 text-center font-display text-3xl font-bold text-coffee-800">
                {cat.label}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="font-display text-lg font-bold text-coffee-800 transition-colors group-hover:text-coffee-600">
                        {item.name}
                      </h4>
                      <p className="mt-1 text-sm text-coffee-700/60">{item.description}</p>
                      <p className="mt-3 font-bold text-coffee-600">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
        {query &&
          categories.every(
            (cat) =>
              !menuItems.some(
                (item) =>
                  item.categories.includes(cat.id) &&
                  item.name.toLowerCase().includes(query.toLowerCase()),
              ),
          ) && (
            <p className="py-10 text-center text-coffee-700/60">No menu items match your search.</p>
          )}

        {/* Spotlight */}
        <div className="mt-16 grid items-center gap-8 rounded-2xl bg-coffee-800 p-8 text-white md:grid-cols-2 md:p-12">
          <div>
            <h2 className="font-display text-3xl font-bold">Customer Favorite</h2>
            <p className="mt-4 text-lg text-white/80">
              Our signature Caramel Latte is crafted with premium espresso, steamed milk, and rich
              caramel syrup.
            </p>
            <p className="mt-3 text-white/70">
              Loved by hundreds of customers every week, it delivers the perfect balance of
              sweetness and coffee flavor.
            </p>
            <p className="mt-4 flex items-center gap-2 font-semibold text-gold">
              <Star className="h-5 w-5 fill-current" /> Most Ordered Drink
            </p>
          </div>
          <img
            src={`${import.meta.env.BASE_URL}images/coffee/popular-latte.png`}
            alt="Caramel Latte"
            className="rounded-xl object-cover shadow-lg"
          />
        </div>

        {/* Bean Origins */}
        <div className="mt-20">
          <h2 className="mb-10 text-center font-display text-3xl font-bold text-coffee-800">
            Coffee Bean Origins
          </h2>
          <div className="grid gap-8 text-center sm:grid-cols-3">
            {beanOrigins.map((origin) => (
              <div key={origin.country}>
                <img
                  src={origin.image}
                  alt={`${origin.country} coffee beans`}
                  className="mx-auto mb-4 h-36 w-36 rounded-full object-cover shadow-md"
                />
                <h4 className="font-display text-lg font-bold text-coffee-800">
                  {origin.flag} {origin.country}
                </h4>
                <p className="mt-1 text-sm text-coffee-700/60">{origin.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="mx-auto max-w-2xl px-6 pb-16">
        <div className="rounded-xl bg-white p-8 text-center shadow-md">
          <h3 className="font-display text-2xl font-bold text-coffee-800">Opening Hours</h3>
          <hr className="my-4 border-coffee-100" />
          <div className="space-y-1 text-coffee-700/70">
            {openingHours.map((h) => (
              <p key={h.day}>
                {h.day} : {h.hours}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-coffee-50 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
          {menuStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-bold text-coffee-800">{stat.value}</p>
              <p className="mt-1 text-sm text-coffee-700/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
