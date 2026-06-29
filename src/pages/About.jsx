import { Code2, Compass, Layers, Rocket } from 'lucide-react'

const values = [
  {
    title: 'Vitrine clara',
    description: 'Perfis organizados para apresentar especialidades, obras, contatos e redes sociais sem ruído visual.',
    icon: Compass,
  },
  {
    title: 'Arquitetura simples',
    description: 'Dados separados da interface, componentes reutilizaveis e rotas previsiveis para facilitar manutencao.',
    icon: Layers,
  },
  {
    title: 'Pronto para evoluir',
    description: 'A base simula um produto real sem backend, mantendo espaco para futuras integracoes e melhorias.',
    icon: Rocket,
  },
]

const technologies = ['ReactJS', 'Vite', 'JavaScript ES6+', 'Tailwind CSS', 'React Router DOM', 'Lucide React']

function About() {
  return (
    <section className="bg-stone-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-teal-800">Sobre</p>
            <h1 className="mt-2 text-4xl font-black text-zinc-950 sm:text-5xl">Uma plataforma ficticia para portfolios de arte digital.</h1>
            <p className="mt-5 text-base leading-8 text-zinc-600">
              O ArtFolio nasceu como projeto academico para demonstrar desenvolvimento front-end moderno com React. A proposta simula uma vitrine profissional onde visitantes descobrem artistas por estilo, perfil e obras.
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-600">
              Todo o conteudo vem de JSON local, sem backend, banco de dados ou autenticacao. Isso permite focar em arquitetura de componentes, responsividade, UX e organizacao do codigo.
            </p>
          </div>

          <div className="grid gap-4">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <article key={value.title} className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
                  <Icon className="h-6 w-6 text-teal-700" />
                  <h2 className="mt-4 text-xl font-black text-zinc-950">{value.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{value.description}</p>
                </article>
              )
            })}
          </div>
        </div>

        <div className="mt-12 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-md bg-teal-50 text-teal-800">
              <Code2 className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-teal-800">Stack</p>
              <h2 className="text-2xl font-black text-zinc-950">Tecnologias utilizadas</h2>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span key={technology} className="rounded-md border border-zinc-200 bg-stone-50 px-4 py-2 text-sm font-semibold text-zinc-700">
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
