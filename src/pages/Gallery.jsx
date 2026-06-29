import { useEffect, useState } from 'react'
import ArtistGrid from '../components/ArtistGrid.jsx'
import Filter from '../components/Filter.jsx'
import SearchBar from '../components/SearchBar.jsx'
import { useFilteredArtists } from '../hooks/useFilteredArtists.js'
import { categories } from '../utils/artists.js'

function Gallery() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [loading, setLoading] = useState(true)
  const filteredArtists = useFilteredArtists(searchTerm, selectedCategory)

  useEffect(() => {
    setLoading(true)
    const timer = window.setTimeout(() => setLoading(false), 250)
    return () => window.clearTimeout(timer)
  }, [searchTerm, selectedCategory])

  return (
    <section className="min-h-[70vh] bg-stone-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-teal-800">Galeria</p>
          <h1 className="mt-2 text-4xl font-black text-zinc-950 sm:text-5xl">Explore artistas digitais</h1>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            Busque por nome, especialidade ou obra. Combine filtros para encontrar exatamente o estilo visual desejado.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm sm:flex-row">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <Filter categories={categories} value={selectedCategory} onChange={setSelectedCategory} />
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 text-sm text-zinc-600">
          <p>
            {filteredArtists.length} resultado{filteredArtists.length === 1 ? '' : 's'} encontrado{filteredArtists.length === 1 ? '' : 's'}
          </p>
          <button
            type="button"
            className="focus-ring rounded-md px-3 py-2 font-semibold text-teal-800 transition hover:bg-teal-50"
            onClick={() => {
              setSearchTerm('')
              setSelectedCategory('Todos')
            }}
          >
            Limpar filtros
          </button>
        </div>

        <div className="mt-8">
          <ArtistGrid
            artists={filteredArtists}
            loading={loading}
            emptyMessage="Tente limpar os filtros ou buscar por outra especialidade."
          />
        </div>
      </div>
    </section>
  )
}

export default Gallery
