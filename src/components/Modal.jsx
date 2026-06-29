import { useEffect } from 'react'
import { X } from 'lucide-react'
import Button from './Button.jsx'

function Modal({ children, onClose, open, title }) {
  useEffect(() => {
    if (!open) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose, open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/55 p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <h2 id="modal-title" className="text-xl font-bold text-zinc-950">
            {title}
          </h2>
          <Button variant="ghost" size="sm" onClick={onClose} aria-label="Fechar modal" className="px-2">
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="mt-4 text-sm leading-6 text-zinc-600">{children}</div>
      </div>
    </div>
  )
}

export default Modal
