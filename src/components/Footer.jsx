import { AtSign, Camera, ExternalLink, Palette } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Galeria', to: '/gallery' },
  { label: 'Sobre', to: '/about' },
  { label: 'Contato', to: '/contact' },
]

function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <Link to="/" className="inline-flex items-center gap-2 text-lg font-black">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-teal-500 text-zinc-950">
              <Palette className="h-5 w-5" />
            </span>
            ArtFolio
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-zinc-300">
            Plataforma ficticia de portfolio para artistas digitais, criada com React, Vite e Tailwind CSS.
          </p>
        </div>

        <nav aria-label="Links do rodape">
          <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Navegacao</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-zinc-300 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Redes</h2>
          <div className="mt-4 flex gap-3">
            <a className="focus-ring grid h-10 w-10 place-items-center rounded-md bg-white/10 text-zinc-200 transition hover:bg-white/20" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Camera className="h-5 w-5" />
            </a>
            <a className="focus-ring grid h-10 w-10 place-items-center rounded-md bg-white/10 text-zinc-200 transition hover:bg-white/20" href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <AtSign className="h-5 w-5" />
            </a>
            <a className="focus-ring grid h-10 w-10 place-items-center rounded-md bg-white/10 text-zinc-200 transition hover:bg-white/20" href="https://artstation.com" target="_blank" rel="noreferrer" aria-label="ArtStation">
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-zinc-400">
        ArtFolio - Projeto academico Front-end. Creditos ficticios.
      </div>
    </footer>
  )
}

export default Footer

