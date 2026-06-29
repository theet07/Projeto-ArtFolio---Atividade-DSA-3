import { ArrowRight, Brush, Images, Users } from 'lucide-react'
import ArtistGrid from '../components/ArtistGrid.jsx'
import Button from '../components/Button.jsx'
import Hero from '../components/Hero.jsx'
import { getAllArtworks, getFeaturedArtists } from '../utils/artists.js'

const stats = [
  { label: 'Artistas cadastrados', value: '8', icon: Users },
  { label: 'Obras publicadas', value: '24', icon: Images },
  { label: 'Especialidades', value: '10', icon: Brush },
]

function Home() {
  const featuredArtists = getFeaturedArtists(4)
  const featuredArtworks = getAllArtworks().slice(0, 6)

  return (
    <>
      <Hero />

      <section className="bg-white py-10">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="rounded-lg border border-zinc-200 bg-stone-50 p-5">
                <Icon className="h-6 w-6 text-teal-700" />
                <p className="mt-4 text-3xl font-black text-zinc-950">{stat.value}</p>
                <p className="text-sm font-semibold text-zinc-600">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-stone-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-teal-800">Destaques</p>
              <h2 className="mt-2 text-3xl font-black text-zinc-950 sm:text-4xl">Artistas em evidencia</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600">
                Conheca perfis selecionados para representar estilos diferentes dentro da arte digital.
              </p>
            </div>
            <Button to="/gallery" variant="outline" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
              Ver galeria completa
            </Button>
          </div>

          <div className="mt-8">
            <ArtistGrid artists={featuredArtists} />
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-teal-800">Curadoria visual</p>
              <h2 className="mt-2 text-3xl font-black text-zinc-950 sm:text-4xl">Uma vitrine direta para descobrir estilos.</h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                A Home apresenta destaques, categorias e chamadas claras para que visitantes encontrem artistas rapidamente.
              </p>
              <Button to="/about" className="mt-6" variant="secondary">
                Conhecer o projeto
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {featuredArtworks.map((artwork) => (
                <img
                  key={artwork.id}
                  src={artwork.image}
                  alt={`${artwork.title}, obra de ${artwork.artistName}`}
                  className="aspect-square rounded-lg border border-zinc-200 object-cover shadow-sm"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
