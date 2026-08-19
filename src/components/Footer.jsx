import { Link } from 'react-router-dom'
import { Coffee, MapPin, Mail, Phone } from 'lucide-react'
import { FaFacebook, FaTelegram } from 'react-icons/fa'
import { contactInfo } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="mt-auto w-full bg-coffee-800 pb-6 pt-12 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-3">
        <div>
          <h4 className="flex items-center gap-2 font-display text-lg font-bold">
            <Coffee className="h-5 w-5 text-coffee-300" />
            Artisan Roast
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Premium artisan coffee crafted with passion. Enjoy a relaxing atmosphere, fresh
            coffee, and exceptional service every day.
          </p>
        </div>

        <div>
          <h5 className="font-semibold text-white">Quick Links</h5>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ['Home', '/'],
              ['Menu', '/menu'],
              // ['Gallery', '/gallery'],
              // ['Reservation', '/reservation'],
              ['Order','/order' ],
              [ 'About Us','/about' ],
              
            ].map(([label, to]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-white/70 transition-all hover:translate-x-1 hover:text-coffee-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-white">Contact Us</h5>
          <div className="mt-3 space-y-2 text-sm text-white/70">
            <a
              href={contactInfo.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-coffee-300"
            >
              <MapPin className="h-4 w-4 shrink-0" /> {contactInfo.address}
            </a>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" /> {contactInfo.email}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" /> {contactInfo.phone}
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <a href={contactInfo.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebook className="h-5 w-5 text-white/80 transition-colors hover:text-coffee-300" />
            </a>
            <a href={contactInfo.telegram} target="_blank" rel="noreferrer" aria-label="Telegram">
              <FaTelegram className="h-5 w-5 text-white/80 transition-colors hover:text-coffee-300" />
            </a>
          </div>
        </div>
      </div>

      <hr className="mx-auto mt-8 max-w-6xl border-white/10" />
      <p className="mt-4 text-center text-sm text-white/60">
        © 2026 Artisan Roast Coffee Shop. All Rights Reserved.
      </p>
    </footer>
  )
}
