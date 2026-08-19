import { createContext, useContext, useEffect, useState } from 'react'
import { menuItems as defaultMenuItems } from '../data/siteData'

const MENU_KEY = 'artisan-roast-menu-v3'

const MenuContext = createContext(null)

function normalizeImage(path) {
  if (typeof path !== 'string' || !path) return path
  const base = import.meta.env.BASE_URL
  if (path.startsWith(base)) return path
  return base + path.replace(/^\//, '')
}

function normalizeMenu(items) {
  return Array.isArray(items)
    ? items.map((item) => ({ ...item, image: normalizeImage(item.image) }))
    : items
}

function readSaved() {
  try {
    const raw = localStorage.getItem(MENU_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      return Array.isArray(parsed) && parsed.length ? parsed : null
    }
  } catch {
    // ignore storage errors
  }
  return null
}

function seedMenu(items) {
  try {
    localStorage.setItem(MENU_KEY, JSON.stringify(items))
  } catch {
    // ignore storage errors
  }
}

export function MenuProvider({ children }) {
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}data/menu.json`)
        if (!res.ok) throw new Error('menu fetch failed')
        const json = await res.json()
        const base = normalizeMenu(Array.isArray(json) && json.length ? json : defaultMenuItems)

        const saved = normalizeMenu(readSaved())
        if (cancelled) return
        if (saved) {
          setMenuItems(saved)
        } else {
          seedMenu(base)
          setMenuItems(base)
        }
      } catch {
        const saved = normalizeMenu(readSaved())
        if (cancelled) return
        if (saved) {
          setMenuItems(saved)
        } else {
          seedMenu(normalizeMenu(defaultMenuItems))
          setMenuItems(normalizeMenu(defaultMenuItems))
        }
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  function addMenuItem(item) {
    const updated = [item, ...menuItems]
    setMenuItems(updated)
    try {
      localStorage.setItem(MENU_KEY, JSON.stringify(updated))
    } catch {
      // ignore storage errors
    }
  }

  function deleteMenuItem(id) {
    const updated = menuItems.filter((m) => m.id !== id)
    setMenuItems(updated)
    try {
      localStorage.setItem(MENU_KEY, JSON.stringify(updated))
    } catch {
      // ignore storage errors
    }
  }

  function updateMenuItem(id, updates) {
    const updated = menuItems.map((m) => (m.id === id ? { ...m, ...updates } : m))
    setMenuItems(updated)
    try {
      localStorage.setItem(MENU_KEY, JSON.stringify(updated))
    } catch {
      // ignore storage errors
    }
  }

  return (
    <MenuContext.Provider value={{ menuItems, addMenuItem, deleteMenuItem, updateMenuItem }}>
      {children}
    </MenuContext.Provider>
  )
}

export function useMenu() {
  const ctx = useContext(MenuContext)
  if (!ctx) throw new Error('useMenu must be used within a MenuProvider')
  return ctx
}