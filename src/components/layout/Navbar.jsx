import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '../ui/ThemeToggle'
import { useActiveSection } from '../../hooks/useActiveSection'
import { social } from '../../data/social'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.id))

  const handleNavClick = (id) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 z-40 w-full border-b border-border bg-base/80 backdrop-blur-md">
      <nav className="flex items-center justify-between px-6 py-4 sm:px-10 lg:px-20">
        <button
          onClick={() => handleNavClick('home')}
          data-cursor="hover"
          className="font-display text-sm font-semibold text-text-primary"
        >
          {social.initials}
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              data-cursor="hover"
              className={`relative px-3 py-2 text-sm transition-colors ${
                activeId === item.id ? 'text-text-primary' : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {item.label}
              {activeId === item.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute bottom-0 left-3 right-3 h-px bg-accent"
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            data-cursor="hover"
            className="text-text-primary lg:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`py-2 text-left text-sm ${
                    activeId === item.id ? 'text-accent' : 'text-text-muted'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}