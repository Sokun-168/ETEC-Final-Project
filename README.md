# Artisan Roast — React + Tailwind CSS

This is a React (Vite) + Tailwind CSS v4 rebuild of the original static Bootstrap/HTML
"Artisan Roast" coffee shop site.

## What changed
- **Framework:** plain HTML pages -> React components with client-side routing (react-router-dom)
- **Styling:** Bootstrap 5 -> Tailwind CSS v4 utility classes, with a custom coffee color
  palette and Fraunces/Poppins fonts defined in src/index.css
- **Icons:** Font Awesome CDN -> lucide-react (UI icons) + react-icons/fa (brand icons)
- **Interactivity:** Bootstrap JS tabs/collapse -> React state (menu filters, gallery filters,
  mobile nav, login/register tabs, forms)
- **Content:** all copy, pricing, and images were carried over from the original site;
  order.html (a raw script fragment in the original) is now a proper /order page with a
  working cart built on React state

## Project structure
```
src/
  components/   Navbar, Footer, Layout, StarRating
  data/         siteData.js - all menu items, reviews, gallery entries, contact info
  pages/        Home, Menu, Gallery, Reviews, Reservation, Contact, Login, About, Order
public/images/  all original images, unchanged
```

## Getting started
```bash
npm install
npm run dev       # start the dev server
npm run build      # production build to dist/
npm run preview    # preview the production build
```

## Firebase Auth (Login page)
The `/login` page is wired up to Firebase Authentication (email/password) via
`src/firebase.js` and `src/context/AuthContext.jsx`.

`src/firebase.js` currently has **placeholder values** — swap them for your real project's
config:
1. In the [Firebase Console](https://console.firebase.google.com), create a project (or use an
   existing one).
2. Project Settings -> General -> "Your apps" -> add a Web app -> copy the `firebaseConfig`
   object into `src/firebase.js`.
3. Go to Authentication -> Sign-in method -> enable the **Email/Password** provider.
4. Restart the dev server. Register a new account on `/login`, then log in — the navbar will
   show the signed-in user's name/email with a logout button.

If you see "Firebase is not configured yet" as an error on the login page, it means the
placeholder API key is still in place.

## Notes
- Forms (contact, reservation, review, login/register) are client-side only - wire them up to
  a real backend or API when ready.
- Contact details, social links, and business info live in src/data/siteData.js - edit that
  file to update them everywhere at once.
