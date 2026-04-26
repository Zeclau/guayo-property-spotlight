import { Phone, Mail, MessageCircle, Facebook } from "lucide-react";
import logo from "@/assets/guayo-logo.png";

const WHATSAPP = "50588827264";
const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Hola GUAYO, me interesa la residencia en La Estancia de Santo Domingo ($4,000/mes). Quisiera agendar una visita."
)}`;

const Contact = () => {
  return (
    <section id="contacto" className="relative overflow-hidden bg-brand-ink px-6 py-24 md:py-32 text-brand-cream">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-oxblood/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-brand-gold/15 blur-3xl" />

      <div className="container relative mx-auto grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="gold-rule mb-5" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold">Agenda tu visita</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-balance">
            Conoce esta residencia <span className="italic text-brand-gold">en persona</span>.
          </h2>
          <p className="mt-5 max-w-lg text-brand-cream/75">
            Atención personalizada para clientes y familias de alto perfil. Coordina una visita privada con uno de
            nuestros asesores GUAYO.
          </p>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-sm bg-[hsl(142_70%_40%)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-gold transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-5 w-5" />
            Agendar por WhatsApp
          </a>

          <div className="mt-10 flex items-center gap-4">
            <img src={logo} alt="GUAYO Bienes Raíces" className="h-12 w-auto" width={48} height={48} />
            <div>
              <div className="font-serif text-xl">GUAYO Bienes Raíces</div>
              <div className="text-xs uppercase tracking-[0.25em] text-brand-cream/60">Asesoría inmobiliaria premium</div>
            </div>
          </div>
        </div>

        <div className="rounded-sm bg-brand-cream/5 p-8 ring-1 ring-brand-cream/15 backdrop-blur md:p-10">
          <div className="grid gap-5">
            <a href="tel:+50588827264" className="group flex items-center gap-4 rounded-sm border border-brand-cream/10 p-5 transition-colors hover:border-brand-gold/60 hover:bg-brand-cream/5">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-oxblood/30 text-brand-gold ring-1 ring-brand-gold/40">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-brand-cream/60">Teléfono principal</div>
                <div className="font-serif text-2xl">(505) 8882-7264</div>
              </div>
            </a>
            <a href="tel:+50584285437" className="group flex items-center gap-4 rounded-sm border border-brand-cream/10 p-5 transition-colors hover:border-brand-gold/60 hover:bg-brand-cream/5">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-oxblood/30 text-brand-gold ring-1 ring-brand-gold/40">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-brand-cream/60">Teléfono alterno</div>
                <div className="font-serif text-2xl">(505) 8428-5437</div>
              </div>
            </a>
            <a href="mailto:guayomoradeshon@gmail.com" className="group flex items-center gap-4 rounded-sm border border-brand-cream/10 p-5 transition-colors hover:border-brand-gold/60 hover:bg-brand-cream/5">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-oxblood/30 text-brand-gold ring-1 ring-brand-gold/40">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-brand-cream/60">Correo</div>
                <div className="font-serif text-lg break-all">guayomoradeshon@gmail.com</div>
              </div>
            </a>
            <a href="https://facebook.com/guayobienesraices" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-sm border border-brand-cream/10 p-5 transition-colors hover:border-brand-gold/60 hover:bg-brand-cream/5">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-oxblood/30 text-brand-gold ring-1 ring-brand-gold/40">
                <Facebook className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-brand-cream/60">Facebook</div>
                <div className="font-serif text-lg">@guayobienesraices</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;