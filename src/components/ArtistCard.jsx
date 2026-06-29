import { ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Badge from './Badge.jsx'

function ArtistCard({ artist }) {
  const preview = artist.gallery.slice(0, 3)

  return (
    <article className="group overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/artists/${artist.id}`} className="block">
        <div className="grid grid-cols-3 gap-1 bg-zinc-100 p-1">
          {preview.map((artwork) => (
            <img
              key={artwork.id}
              src={artwork.image}
              alt={artwork.title}
              className="aspect-square w-full rounded object-cover"
            />
          ))}
        </div>

        <div className="p-5">
          <div className="flex items-start gap-4">
            <img
              src={artist.avatar}
              alt={`Avatar de ${artist.name}`}
              className="h-16 w-16 rounded-lg border border-zinc-200 object-cover"
            />
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-black text-zinc-950">{artist.name}</h2>
              <p className="mt-1 flex items-center gap-1 text-sm text-zinc-500">
                <MapPin className="h-4 w-4 shrink-0" />
                <span className="truncate">{artist.location}</span>
              </p>
            </div>
          </div>

          <p className="line-clamp-3 mt-4 min-h-18 text-sm leading-6 text-zinc-600">{artist.bio}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {artist.specialties.slice(0, 2).map((specialty) => (
              <Badge key={specialty}>{specialty}</Badge>
            ))}
          </div>

          <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-800 transition group-hover:gap-3">
            Ver perfil
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </article>
  )
}

export default ArtistCard
