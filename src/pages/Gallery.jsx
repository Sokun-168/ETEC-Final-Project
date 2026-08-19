import { useState } from 'react'
import { Coffee, Sofa, Heart, Wheat, Droplet, Users } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'
import { galleryItems, galleryFilters, contactInfo } from '../data/siteData'

const icons = { coffee: Coffee, sofa: Sofa, heart: Heart, wheat: Wheat, droplet: Droplet, users: Users }

export default function Gallery() {
  const [active, setActive] = useState('all')

  const filtered =
    active === 'all' ? galleryItems : galleryItems.filter((item) => item.tags.includes(active))

  return (
    <div>
      {/* Header */}
      <section className="bg-coffee-50 py-16 text-center">
        <h1 className="font-display text-4xl font-bold text-coffee-800">Our Visual Story</h1>
        <p className="mx-auto mt-3 max-w-lg text-coffee-700/60">
          Take a look inside our cozy shop—from our ethically sourced premium beans to the fresh
          pastries baked at sunrise.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2 px-6">
          {galleryFilters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                active === f.id
                  ? 'bg-coffee-800 text-white'
                  : 'bg-white text-coffee-700 hover:bg-coffee-100'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => {
            const Icon = icons[item.icon]
            return (
              <div
                key={item.title}
                className="group relative h-72 overflow-hidden rounded-xl shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-coffee-900/85 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div>
                    <Icon className="mx-auto mb-2 h-8 w-8 text-gold" />
                    <h5 className="font-display text-lg font-bold">{item.title}</h5>
                    <p className="mt-1 text-sm text-white/70">{item.caption}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Social Banner */}
      <section className="bg-coffee-800 py-16 text-center text-white">
        <h3 className="font-display text-2xl font-bold">Share Your #ArtisanRoast Moments</h3>
        <p className="mx-auto mt-2 max-w-md text-white/60">
          Snap a picture during your visit and tag us to be featured on our board!
        </p>
        <a
          href={contactInfo.instagram}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-coffee-900 transition-transform hover:scale-105"
        >
          <FaInstagram className="h-5 w-5" /> Follow Our Instagram
        </a>
      </section>
    </div>
  )
}
