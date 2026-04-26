import { MessageCircle } from "lucide-react";

const WHATSAPP = "50588827264";
const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Hola GUAYO, me interesa la residencia en La Estancia de Santo Domingo ($4,000/mes). Quisiera agendar una visita."
)}`;

const WhatsAppFab = () => {
  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar visita por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[hsl(142_70%_40%)] px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-luxe animate-pulse-ring transition-transform hover:-translate-y-0.5 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Agendar visita</span>
    </a>
  );
};

export default WhatsAppFab;