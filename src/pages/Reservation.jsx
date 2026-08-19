import { useState } from 'react'

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '', guests: '' })

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="mx-auto max-w-md px-6 py-16">
      <div className="rounded-2xl bg-white p-8 shadow-md">
        <div className="mb-6 text-center">
          <h2 className="font-display text-2xl font-bold text-coffee-800">Book A Table</h2>
          <p className="mt-1 text-sm text-coffee-700/60">Secure your spot at Artisan Roast</p>
        </div>

        {submitted ? (
          <p className="rounded-lg bg-coffee-50 p-4 text-center text-coffee-700">
            Thank you! Your reservation request has been received — we&rsquo;ll confirm shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-semibold text-coffee-800">Full Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Full Name"
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
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email"
                className="w-full rounded-lg border border-coffee-100 px-4 py-2.5 outline-none focus:border-coffee-400"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-semibold text-coffee-800">Date</label>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full rounded-lg border border-coffee-100 px-4 py-2.5 outline-none focus:border-coffee-400"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-coffee-800">Time</label>
                <input
                  type="time"
                  required
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="w-full rounded-lg border border-coffee-100 px-4 py-2.5 outline-none focus:border-coffee-400"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-coffee-800">
                Number of Guests
              </label>
              <input
                type="number"
                min="1"
                required
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                placeholder="Number of Guests"
                className="w-full rounded-lg border border-coffee-100 px-4 py-2.5 outline-none focus:border-coffee-400"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gold py-3 font-bold text-coffee-900 transition-transform hover:scale-[1.02]"
            >
              Reserve Table
            </button>
          </form>
        )}
      </div>
    </main>
  )
}
