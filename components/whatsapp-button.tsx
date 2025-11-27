import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919848746446"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-lg border-4 border-foreground hover:scale-110 transition-transform"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  )
}
