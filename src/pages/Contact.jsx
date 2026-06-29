import { useEffect, useMemo, useState } from 'react'
import { Send } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import Button from '../components/Button.jsx'
import Input from '../components/Input.jsx'
import Modal from '../components/Modal.jsx'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function Contact() {
  const [searchParams] = useSearchParams()
  const artistName = searchParams.get('artist')
  const defaultSubject = useMemo(() => (artistName ? `Contato para ${artistName}` : ''), [artistName])
  const [form, setForm] = useState({ ...initialForm, subject: defaultSubject })
  const [errors, setErrors] = useState({})
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    setForm((current) => ({ ...current, subject: current.subject || defaultSubject }))
  }, [defaultSubject])

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  function validateForm() {
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Informe seu nome.'
    if (!form.email.trim()) nextErrors.email = 'Informe seu e-mail.'
    else if (!validateEmail(form.email)) nextErrors.email = 'Informe um e-mail valido.'
    if (!form.subject.trim()) nextErrors.subject = 'Informe o assunto.'
    if (!form.message.trim()) nextErrors.message = 'Escreva uma mensagem.'
    else if (form.message.trim().length < 20) nextErrors.message = 'A mensagem deve ter pelo menos 20 caracteres.'

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!validateForm()) return

    setModalOpen(true)
    setForm({ ...initialForm, subject: defaultSubject })
  }

  return (
    <section className="bg-stone-50 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-teal-800">Contato</p>
          <h1 className="mt-2 text-4xl font-black text-zinc-950 sm:text-5xl">Envie uma proposta ou mensagem para a curadoria.</h1>
          <p className="mt-5 text-base leading-8 text-zinc-600">
            Este formulario simula o fluxo de contato do ArtFolio. Ele valida os campos localmente e apresenta feedback visual sem depender de backend.
          </p>

          <div className="mt-8 rounded-lg border border-teal-100 bg-teal-50 p-5">
            <h2 className="text-lg font-black text-zinc-950">Checklist do formulario</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
              <li>Nome, e-mail, assunto e mensagem obrigatorios.</li>
              <li>E-mail validado antes do envio.</li>
              <li>Feedback visual apos envio valido.</li>
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm sm:p-6" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <Input
              label="Nome"
              name="name"
              value={form.name}
              onChange={(event) => updateField('name', event.target.value)}
              placeholder="Seu nome"
              error={errors.name}
            />
            <Input
              label="E-mail"
              name="email"
              type="email"
              value={form.email}
              onChange={(event) => updateField('email', event.target.value)}
              placeholder="voce@email.com"
              error={errors.email}
            />
          </div>

          <div className="mt-5">
            <Input
              label="Assunto"
              name="subject"
              value={form.subject}
              onChange={(event) => updateField('subject', event.target.value)}
              placeholder="Ex: Proposta de comissao"
              error={errors.subject}
            />
          </div>

          <div className="mt-5 space-y-2">
            <label htmlFor="message" className="block text-sm font-semibold text-zinc-800">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows="7"
              value={form.message}
              onChange={(event) => updateField('message', event.target.value)}
              placeholder="Descreva seu projeto, prazo e estilo desejado."
              className="focus-ring w-full resize-y rounded-md border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm transition placeholder:text-zinc-400 focus:border-teal-700"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message ? <p id="message-error" className="text-sm font-medium text-rose-700">{errors.message}</p> : null}
          </div>

          <Button type="submit" className="mt-6 w-full sm:w-auto" icon={<Send className="h-4 w-4" />} iconPosition="right">
            Enviar mensagem
          </Button>
        </form>
      </div>

      <Modal open={modalOpen} title="Mensagem enviada" onClose={() => setModalOpen(false)}>
        <p>
          Sua mensagem foi validada e registrada localmente. Em uma versao com backend, este envio seria encaminhado para a equipe ou artista selecionado.
        </p>
      </Modal>
    </section>
  )
}

export default Contact
