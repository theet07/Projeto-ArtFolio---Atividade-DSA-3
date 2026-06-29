import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from './Button.jsx'

const previewImages = [
  '/images/artworks/artwork-01.svg',
  '/images/artworks/artwork-04.svg',
  '/images/artworks/artwork-07.svg',
  '/images/artworks/artwork-16.svg',
]

function Hero() {
  return (
    <section className="surface-grid overflow-hidden border-b border-zinc-200 bg-stone-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-3 py-1 text-sm font-semibold text-teal-800 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Portfolio digital para artistas independentes
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-normal text-zinc-950 sm:text-5xl lg:text-6xl">
            ArtFolio conecta artistas digitais a novas oportunidades criativas.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
            Explore perfis, obras, especialidades e contatos em uma experiencia rapida, responsiva e criada para valorizar arte digital.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/gallery" size="lg" icon={<ArrowRight className="h-5 w-5" />} iconPosition="right">
              Explorar galeria
            </Button>
            <Button to="/contact" size="lg" variant="outline">
              Falar com a curadoria
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:gap-5" aria-label="Previa de obras digitais">
          {previewImages.map((image, index) => (
            <Link
              key={image}
              to="/gallery"
              className={`group block overflow-hidden rounded-lg border border-white bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl ${
                index % 2 === 0 ? 'translate-y-6' : ''
              }`}
            >
              <img
                src={image}
                alt="Obra digital em destaque"
                className="aspect-[4/3] h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
