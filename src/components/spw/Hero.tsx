import heroImg from "@/assets/hero-mansion.jpg";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Fachada de lujo de residencia en La Estancia de Santo Domingo, Managua"
        className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-20 pt-32 md:pb-28">
        <div className="container mx-auto">
          <div className="max-w-3xl animate-fade-up">
            <div className="mb-4 font-serif text-xs italic tracking-[0.3em] text-brand-gold sm:text-sm">
              Sacuanjoche Demo
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-cream/10 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.3em] text-brand-cream backdrop-blur-md ring-1 ring-brand-cream/30">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse" />
              Propiedad Disponible para Renta
            </span>

            <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-brand-cream text-balance sm:text-5xl md:text-6xl lg:text-7xl">
              Lujosa Residencia en <span className="italic text-brand-gold">La Estancia</span> de Santo Domingo
            </h1>

            <p className="mt-5 text-base text-brand-cream/85 md:text-lg">
              Managua, Nicaragua · Una residencia exclusiva diseñada para familias de alto perfil.
            </p>

            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:gap-10">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-brand-cream/70">Renta mensual</div>
                <div className="mt-1 font-serif text-5xl text-brand-cream md:text-6xl">
                  $4,000<span className="text-2xl text-brand-gold md:text-3xl"> USD</span>
                </div>
                <div className="mt-1 text-xs text-brand-cream/70">Casa sin muebles · Disponible 15 de Abril</div>
              </div>
              <a
                href="#contacto"
                className="group inline-flex items-center gap-3 rounded-sm bg-gradient-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-ink shadow-gold transition-transform hover:-translate-y-0.5"
              >
                Agendar visita privada
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-brand-cream/60 text-[10px] uppercase tracking-[0.4em] animate-fade-in">
        Desliza para descubrir
      </div>
    </section>
  );
};

export default Hero;