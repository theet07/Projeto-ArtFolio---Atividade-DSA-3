import { useMemo } from 'react'
import artists from '../data/artists.json'

function normalize(value) {
  return value.toLowerCase().trim()
}

export function useFilteredArtists(searchTerm, selectedCategory) {
  return useMemo(() => {
    const query = normalize(searchTerm)

    return artists.filter((artist) => {
      const matchesCategory =
        selectedCategory === 'Todos' || artist.specialties.includes(selectedCategory)

      const searchableText = [
        artist.name,
        artist.bio,
        artist.location,
        ...artist.specialties,
        ...artist.gallery.map((artwork) => artwork.title),
      ]
        .join(' ')
        .toLowerCase()

      return matchesCategory && (!query || searchableText.includes(query))
    })
  }, [searchTerm, selectedCategory])
}
