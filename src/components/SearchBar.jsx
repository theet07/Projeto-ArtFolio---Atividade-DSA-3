import { Search } from 'lucide-react'

function SearchBar({ onChange, value }) {
  return (
    <label className="relative block w-full">
      <span className="sr-only">Buscar artistas</span>
      <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Buscar por artista, obra ou especialidade"
        className="focus-ring min-h-12 w-full rounded-md border border-zinc-300 bg-white pl-12 pr-4 text-sm text-zinc-900 shadow-sm transition placeholder:text-zinc-400 focus:border-teal-700"
      />
    </label>
  )
}

export default SearchBar
