import { MessageCircle } from 'lucide-react'
import { company } from '@/lib/site'

export function WhatsAppButton() {
  const text = encodeURIComponent('Hello Axis Logistics India, I need a truck. Please share a quote.')
  return (
    <a
      href={`https://wa.me/${company.whatsapp}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-semibold text-white shadow-xl transition-transform hover:scale-105"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp us</span>
      <span className="sr-only sm:hidden">Chat with us on WhatsApp</span>
    </a>
  )
}
