import { ArrowLeft, AtSign, Camera, ExternalLink, Mail, MapPin } from 'lucide-react'
import { useParams } from 'react-router-dom'
import Badge from '../components/Badge.jsx'
import Button from '../components/Button.jsx'
import { getArtistById } from '../utils/artists.js'

function ArtistProfile() {
  const { id } = useParams()
  const artist = getArtistById(id)

  if (!artist) {
    return (
      <section className="min-h-[70vh] bg-stone-50 px-4 py-16 text-center">
        <h1 className="text-4xl font-black text-zinc-950">Artista nao encontrado</h1>
        <p className="mx-auto mt-4 max-w-xl text-zinc-600">O perfil solicitado nao existe ou foi removido da galeria.</p>
        <Button to="/gallery" className="mt-6" icon={<ArrowLeft className="h-4 w-4" />}>
          Voltar para galeria
        </Button>
      </section>
    )
  }

  return (
    <article className="bg-stone-50">
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <Button to="/gallery" variant="ghost" icon={<ArrowLeft className="h-4 w-4" />} className="mb-6 px-0 hover:bg-transparent">
            Voltar para galeria
          </Button>

          <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-center">
            <img
              src={artist.avatar}
              alt={`Avatar de ${artist.name}`}
              className="art-shadow aspect-square w-full max-w-xs rounded-lg border border-zinc-200 object-cover"
            />
            <div>
              <div className="flex flex-wrap gap-2">
                {artist.specialties.map((specialty) => (
                  <Badge key={specialty}>{specialty}</Badge>
                ))}
              </div>
              <h1 className="mt-5 text-4xl font-black text-zinc-950 sm:text-6xl">{artist.name}</h1>
              <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-zinc-500">
                <MapPin className="h-4 w-4" />
                {artist.location}
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-600">{artist.bio}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to={`/contact?artist=${encodeURIComponent(artist.name)}`} icon={<Mail className="h-4 w-4" />}>
                  Entrar em contato
                </Button>
                <Button href={`mailto:${artist.email}`} variant="outline">
                  {artist.email}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-teal-800">Obras</p>
              <h2 className="mt-2 text-3xl font-black text-zinc-950">Galeria de {artist.name}</h2>
            </div>
            <div className="flex gap-2">
              <a className="focus-ring grid h-11 w-11 place-items-center rounded-md border border-zinc-300 bg-white text-zinc-700 transition hover:text-teal-800" href={artist.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Camera className="h-5 w-5" />
              </a>
              <a className="focus-ring grid h-11 w-11 place-items-center rounded-md border border-zinc-300 bg-white text-zinc-700 transition hover:text-teal-800" href={artist.social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
                <AtSign className="h-5 w-5" />
              </a>
              <a className="focus-ring grid h-11 w-11 place-items-center rounded-md border border-zinc-300 bg-white text-zinc-700 transition hover:text-teal-800" href={artist.social.artstation} target="_blank" rel="noreferrer" aria-label="ArtStation">
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {artist.gallery.map((artwork) => (
              <figure key={artwork.id} className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
                <img src={artwork.image} alt={artwork.title} className="aspect-[4/3] w-full object-cover" />
                <figcaption className="p-5">
                  <Badge>{artwork.category}</Badge>
                  <h3 className="mt-3 text-xl font-black text-zinc-950">{artwork.title}</h3>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-teal-100 bg-teal-50 p-6 md:flex md:items-center md:justify-between md:gap-6">
            <div>
              <h2 className="text-2xl font-black text-zinc-950">Gostou do estilo de {artist.name}?</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">Use o formulario de contato para simular uma proposta de projeto.</p>
            </div>
            <Button to={`/contact?artist=${encodeURIComponent(artist.name)}`} className="mt-5 md:mt-0">
              Solicitar contato
            </Button>
          </div>
        </div>
      </section>
    </article>
  )
}

export default ArtistProfile

