function Loading({ label = 'Carregando conteudo' }) {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-zinc-300 bg-white p-8 text-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-zinc-200 border-t-teal-700" />
      <p className="text-sm font-semibold text-zinc-600">{label}</p>
    </div>
  )
}

export function LoadingCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="animate-pulse rounded-lg border border-zinc-200 bg-white p-4">
          <div className="aspect-[4/3] rounded-md bg-zinc-200" />
          <div className="mt-5 h-5 w-2/3 rounded bg-zinc-200" />
          <div className="mt-3 h-4 w-full rounded bg-zinc-100" />
          <div className="mt-2 h-4 w-4/5 rounded bg-zinc-100" />
        </div>
      ))}
    </div>
  )
}

export default Loading
