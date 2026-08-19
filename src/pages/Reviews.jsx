import { useState } from 'react'
import StarRating from '../components/StarRating'
import { fullReviews } from '../data/siteData'

export default function Reviews() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', rating: '', text: '' })

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', rating: '', text: '' })
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-coffee-50 py-16 text-center">
        <h1 className="font-display text-4xl font-bold text-coffee-800">Customer Reviews</h1>
        <p className="mx-auto mt-3 max-w-lg text-coffee-700/60">
          Read what our wonderful guests have to say, or share your own experience with us!
        </p>
      </section>

      {/* Reviews grid */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-10 text-center font-display text-3xl font-bold text-coffee-800">
          What People Say
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fullReviews.map((review) => (
            <div key={review.name} className="rounded-xl bg-coffee-50 p-6 shadow-sm">
              <StarRating value={review.stars} className="mb-3" />
              <p className="italic text-coffee-700/80">&ldquo;{review.text}&rdquo;</p>
              <p className="mt-4 text-right font-bold text-coffee-800">- {review.name}.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Write a review */}
      <section className="bg-coffee-800 py-16 text-white">
        <div className="mx-auto max-w-2xl px-6">
          <div className="rounded-2xl bg-white/5 p-8 shadow-lg md:p-10">
            <h2 className="text-center font-display text-2xl font-bold">Write Your Review Here</h2>
            <p className="mt-2 text-center text-sm text-white/70">
              Your feedback helps us brew better experiences! Let us know how your visit went.
            </p>

            {submitted ? (
              <p className="mt-6 rounded-lg bg-white/10 p-4 text-center text-gold">
                Thank you for your review! We appreciate your feedback.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g., John Doe"
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium">Rating</label>
                    <select
                      required
                      value={form.rating}
                      onChange={(e) => setForm({ ...form, rating: e.target.value })}
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white outline-none focus:border-gold [&>option]:text-coffee-900"
                    >
                      <option value="" disabled>
                        Choose stars...
                      </option>
                      <option value="5">5 - Excellent</option>
                      <option value="4">4 - Very Good</option>
                      <option value="3">3 - Average</option>
                      <option value="2">2 - Poor</option>
                      <option value="1">1 - Terrible</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Your Review</label>
                  <textarea
                    required
                    rows={4}
                    value={form.text}
                    onChange={(e) => setForm({ ...form, text: e.target.value })}
                    placeholder="Tell us about your favorite drink, the service, or the ambiance..."
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-gold"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="rounded-full bg-gold px-8 py-3 font-bold text-coffee-900 transition-transform hover:scale-105"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
