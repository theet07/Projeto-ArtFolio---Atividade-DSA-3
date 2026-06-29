import artists from '../data/artists.json'

export const allArtists = artists

export const categories = Array.from(
  new Set(artists.flatMap((artist) => artist.specialties)),
).sort((first, second) => first.localeCompare(second))

export function getArtistById(id) {
  return artists.find((artist) => String(artist.id) === String(id))
}

export function getFeaturedArtists(limit = 4) {
  return artists.filter((artist) => artist.featured).slice(0, limit)
}

export function getAllArtworks() {
  return artists.flatMap((artist) =>
    artist.gallery.map((artwork) => ({
      ...artwork,
      artistId: artist.id,
      artistName: artist.name,
    })),
  )
}
