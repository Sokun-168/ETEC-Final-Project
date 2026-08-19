import { FaFacebook, FaTelegram, FaYoutube } from 'react-icons/fa'

export default function About() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-10 text-center font-display text-3xl font-bold text-coffee-800">
          About Us &amp; Our Heritage
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-bold text-coffee-800">
              Our Humble Beginnings
            </h3>
            <p className="mt-3 text-coffee-700/70">
              Founded in 2019, Bean &amp; Roast started as a micro-roastery with a single clear
              mission: to reveal the true biological taste profiles of globally sourced
              single-origin coffee beans without over-roasting. We believe coffee is a complex
              chemical science and an artistic endeavor simultaneously.
            </p>
            <h3 className="mt-6 font-display text-xl font-bold text-coffee-800">
              Our Ethical Commitment
            </h3>
            <p className="mt-3 text-coffee-700/70">
              Every single coffee cherry is handpicked by multi-generational farmers who are paid
              35% above fair-trade organic baselines. We ensure that our sustainable
              environmental metrics translate directly to unparalleled cup quality for you every
              single morning.
            </p>
          </div>
          <img
            src={`${import.meta.env.BASE_URL}images/site/coffee-make.png`}
            alt="Our premium coffee roaster"
            className="h-full w-full rounded-2xl object-cover shadow-lg"
          />
        </div>

        {/* Awards */}
        <div className="mt-16">
          <h2 className="mb-8 text-center font-display text-2xl font-bold text-coffee-800">
            Awards &amp; Certifications
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <img
              src={`${import.meta.env.BASE_URL}images/site/certificate1.png`}
              alt="Certificate 1"
              className="rounded-xl object-cover shadow-md"
            />
            <img
              src={`${import.meta.env.BASE_URL}images/site/certificate2.png`}
              alt="Certificate 2"
              className="rounded-xl object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      <hr className="mx-auto max-w-6xl border-coffee-100" />

      {/* Founder */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-gold">
            The Visionary
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-coffee-800">
            Meet Our Founder
          </h2>
        </div>

        <div className="mx-auto max-w-3xl rounded-2xl bg-coffee-50 p-8 shadow-md md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-3">
            <div className="text-center">
              <img
                src={`${import.meta.env.BASE_URL}images/site/CEO.JPG`}
                alt="Heang Sokun"
                className="mx-auto h-44 w-44 rounded-full object-cover shadow-sm"
              />
            </div>
            <div className="text-center md:col-span-2 md:text-left">
              <span className="inline-block rounded-full bg-coffee-800 px-3 py-1 text-xs font-bold text-white">
                Founder
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-coffee-800">
                Heang Sokun
              </h3>
              <h6 className="mt-1 text-sm font-semibold text-coffee-700/60">CEO of KunTech</h6>
              <p className="mt-3 text-coffee-700/70">
                Guided by an entrepreneurial spirit and an intense dedication to engineering
                exceptional experiences, Heang Sokun established Artisan Roast. By blending
                technical precision with custom hospitality, he brought the vision of a premium
                local hub to life.
              </p>
              <div className="mt-4 flex justify-center gap-4 md:justify-start">
                <a href="https://www.facebook.com/share/18wjtXSMhh/" target="_blank" rel="noreferrer">
                  <FaFacebook className="h-5 w-5 text-coffee-700 transition-colors hover:text-coffee-400" />
                </a>
                <a href="https://t.me/mrkun629" target="_blank" rel="noreferrer">
                  <FaTelegram className="h-5 w-5 text-coffee-700 transition-colors hover:text-coffee-400" />
                </a>
                <a
                  href="https://youtu.be/dQw4w9WgXcQ?si=-G-43Wu8DSF9zJwE"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube className="h-5 w-5 text-coffee-700 transition-colors hover:text-coffee-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
