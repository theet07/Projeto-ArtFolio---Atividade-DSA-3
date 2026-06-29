import { Home } from 'lucide-react'
import Button from '../components/Button.jsx'

function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-stone-50 px-4 py-16 text-center">
      <div className="max-w-xl">
        <p className="text-sm font-bold uppercase tracking-widest text-teal-800">Erro 404</p>
        <h1 className="mt-2 text-5xl font-black text-zinc-950">Pagina nao encontrada</h1>
        <p className="mt-4 text-base leading-7 text-zinc-600">
          A rota acessada nao existe no ArtFolio. Volte para a Home ou navegue pela galeria de artistas.
        </p>
        <div className="mt-8 flex justify-center">
          <Button to="/" icon={<Home className="h-4 w-4" />}>
            Voltar para Home
          </Button>
        </div>
      </div>
    </section>
  )
}

export default NotFound
