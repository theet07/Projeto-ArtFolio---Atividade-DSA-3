import { Menu, Palette, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Button from './Button.jsx'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Galeria', to: '/gallery' },
  { label: 'Sobre', to: '/about' },
  { label: 'Contato', to: '/contact' },
]

function linkClass({ isActive }) {
  return `rounded-md px-3 py-2 text-sm font-semibold transition ${
    isActive ? 'bg-teal-50 text-teal-800' : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950'
  }`
}

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/92 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="focus-ring inline-flex items-center gap-2 rounded-md text-lg font-black text-zinc-950" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-md bg-teal-700 text-white">
            <Palette className="h-5 w-5" />
          </span>
          ArtFolio
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegacao principal">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/gallery" size="sm">
            Ver artistas
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-zinc-300 text-zinc-800 md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <nav id="mobile-menu" className="border-t border-zinc-200 bg-white px-4 py-4 md:hidden" aria-label="Menu mobile">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}

export default Navbar
