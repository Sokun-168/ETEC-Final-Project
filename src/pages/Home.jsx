import { Link } from 'react-router-dom'
import { Star, Flame, Crown, Sprout, Coffee, Users, Wifi, Music2, Sofa } from 'lucide-react'
import StarRating from '../components/StarRating'
import {
  signatureItems,
  whyChooseUs,
  homeReviews,
  stats,
} from '../data/siteData'

const badgeIcons = { star: Star, flame: Flame, crown: Crown }
const whyIcons = { sprout: Sprout, coffee: Coffee, users: Users }

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-coffee-100 bg-coffee-50 py-24 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="flex items-center justify-center gap-3 font-display text-5xl font-bold text-coffee-800 md:text-6xl">
            <Coffee className="h-10 w-10 text-coffee-400" />
            Artisan Roast
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-coffee-700/70">
            Experience the absolute peak of artisanal coffee roasting, ethically sourced beans,
            and masterfully poured espresso — right in your neighborhood.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/menu"
              className="rounded-full bg-coffee-600 px-7 py-3 font-semibold text-white shadow-lg shadow-coffee-600/20 transition-colors hover:bg-coffee-700"
            >
              View Menu
            </Link>
            <Link
              to="/about"
              className="rounded-full border border-coffee-300 px-7 py-3 font-semibold text-coffee-700 transition-colors hover:bg-coffee-100"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Signature Menu */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-gold">
            Chef&rsquo;s Selection
          </span>
          <h2 className="mt-2 font-display text-4xl font-bold text-coffee-800">
            Our Signature Menu Options
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-coffee-700/60">
            Handcrafted masterpieces roasted and prepared daily by our expert baristas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {signatureItems.map((item) => {
            const BadgeIcon = badgeIcons[item.badgeIcon]
            return (
              <div
                key={item.title}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className={`absolute right-3 top-3 flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${
                      item.dark ? 'bg-coffee-800 text-white' : 'bg-gold text-coffee-900'
                    }`}
                  >
                    <BadgeIcon className="h-3.5 w-3.5" /> {item.badge}
                  </span>
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-display text-xl font-bold text-coffee-800">{item.title}</h4>
                  <p className="mt-2 text-sm text-coffee-700/60">{item.description}</p>
                  <p className="mt-4 text-2xl font-bold text-gold">{item.price}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* About */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <img
          src="/images/site/about.png"
          alt="Coffee shop interior"
          className="rounded-2xl object-cover shadow-lg"
        />
        <div>
          <h2 className="font-display text-3xl font-bold text-coffee-800">About Artisan Roast</h2>
          <p className="mt-4 text-coffee-700/70">
            Artisan Roast is dedicated to serving premium coffee made from carefully selected
            beans. Our mission is to create memorable coffee experiences for every customer.
          </p>
          <p className="mt-4 text-coffee-700/70">
            Whether you&rsquo;re meeting friends, studying, or relaxing, Artisan Roast provides
            the perfect atmosphere.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-12 text-center font-display text-3xl font-bold text-coffee-800">
          Why Choose Us?
        </h2>
        <div className="grid gap-10 text-center md:grid-cols-3">
          {whyChooseUs.map((item) => {
            const Icon = whyIcons[item.icon]
            return (
              <div key={item.title}>
                <Icon className="mx-auto mb-4 h-10 w-10 text-coffee-400" />
                <h4 className="font-display text-lg font-bold text-coffee-800">{item.title}</h4>
                <p className="mt-1 text-sm text-coffee-700/60">{item.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Environment */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold text-coffee-800">A Relaxing Environment</h2>
          <p className="mt-4 text-coffee-700/70">
            Artisan Roast offers a warm and welcoming atmosphere where customers can enjoy premium
            coffee while studying, working, or spending time with friends.
          </p>
          <p className="mt-4 text-coffee-700/70">
            Comfortable seating, free Wi-Fi, and calming music create the perfect coffee
            experience.
          </p>
          <ul className="mt-6 space-y-2">
            {[
              [Coffee, 'Premium Coffee'],
              [Wifi, 'Free Wi-Fi'],
              [Music2, 'Relaxing Music'],
              [Sofa, 'Comfortable Seating'],
            ].map(([Icon, label]) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-lg border border-coffee-100 bg-white px-4 py-3 text-coffee-700"
              >
                <Icon className="h-4 w-4 text-coffee-400" /> {label}
              </li>
            ))}
          </ul>
        </div>
        <img
          src="/images/site/environment.png"
          alt="Coffee shop environment"
          className="rounded-2xl object-cover shadow-lg"
        />
      </section>

      {/* Slogan Banner */}
      <section className="bg-coffee-100 py-16 text-center">
        <h2 className="font-display text-3xl font-bold text-coffee-800">
          &ldquo;Life Begins After Coffee&rdquo;
        </h2>
        <p className="mt-2 text-lg text-coffee-700/70">Freshly brewed happiness in every cup.</p>
      </section>

      {/* Reviews */}
      <section className="bg-coffee-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center font-display text-3xl font-bold text-coffee-800">
            Customer Reviews
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {homeReviews.map((review) => (
              <div key={review.name} className="rounded-xl bg-white p-6 shadow-md">
                <StarRating value={review.stars} className="mb-3" />
                <p className="text-coffee-700/80">{review.text}</p>
                <p className="mt-3 font-semibold text-coffee-800">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-coffee-800 py-16 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-bold">{stat.value}</p>
              <p className="mt-1 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
