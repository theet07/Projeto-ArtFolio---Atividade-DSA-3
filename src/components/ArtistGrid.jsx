import ArtistCard from './ArtistCard.jsx'
import { LoadingCards } from './Loading.jsx'

function ArtistGrid({ artists, emptyMessage = 'Nenhum artista encontrado.', loading = false }) {
  if (loading) {
    return <LoadingCards />
  }

  if (!artists.length) {
    return (
      <div className="rounded-lg border border-dashed border-zinc-300 bg-white p-8 text-center">
        <h2 className="text-xl font-black text-zinc-950">Sem resultados</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-600">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {artists.map((artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </div>
  )
}

export default ArtistGrid
