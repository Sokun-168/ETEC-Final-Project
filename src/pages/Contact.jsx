import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="mx-auto max-w-xl px-6 py-16">
      <h2 className="mb-8 text-center font-display text-3xl font-bold text-coffee-800">
        Get In Touch With Us
      </h2>

      <div className="rounded-2xl bg-white p-8 shadow-md">
        {submitted ? (
          <p className="rounded-lg bg-coffee-50 p-4 text-center text-coffee-700">
            Thank you! Our master baristas will contact you shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-1 block text-sm font-semibold text-coffee-800">
                Your Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="E.g., John Doe"
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
                placeholder="name@example.com"
                className="w-full rounded-lg border border-coffee-100 px-4 py-2.5 outline-none focus:border-coffee-400"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-coffee-800">
                Your Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your catering needs or feedback..."
                className="w-full rounded-lg border border-coffee-100 px-4 py-2.5 outline-none focus:border-coffee-400"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-coffee-600 py-3 font-bold text-white transition-colors hover:bg-coffee-700"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </main>
  )
}
