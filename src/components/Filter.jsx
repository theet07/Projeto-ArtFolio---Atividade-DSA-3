import { SlidersHorizontal } from 'lucide-react'

function Filter({ categories, onChange, value }) {
  return (
    <label className="relative block w-full sm:max-w-72">
      <span className="sr-only">Filtrar por categoria</span>
      <SlidersHorizontal className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="focus-ring min-h-12 w-full appearance-none rounded-md border border-zinc-300 bg-white pl-12 pr-10 text-sm font-semibold text-zinc-800 shadow-sm transition focus:border-teal-700"
      >
        <option value="Todos">Todas as categorias</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </label>
  )
}

export default Filter
