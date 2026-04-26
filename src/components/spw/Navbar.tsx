import logo from "@/assets/guayo-logo.png";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="container mx-auto flex items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="GUAYO Bienes Raíces" className="h-10 w-auto md:h-12" width={48} height={48} />
          <div className="hidden sm:block leading-tight">
            <div className="font-serif text-lg text-brand-cream tracking-wide">GUAYO</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-cream/80">Bienes Raíces</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.15em] text-brand-cream/90">
          <a href="#galeria" className="hover:text-brand-gold transition-colors">Galería</a>
          <a href="#detalles" className="hover:text-brand-gold transition-colors">Detalles</a>
          <a href="#ubicacion" className="hover:text-brand-gold transition-colors">Ubicación</a>
          <a href="#contacto" className="hover:text-brand-gold transition-colors">Contacto</a>
        </nav>
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center rounded-sm border border-brand-cream/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-brand-cream hover:bg-brand-cream hover:text-brand-ink transition-all"
        >
          Agendar visita
        </a>
      </div>
    </header>
  );
};

export default Navbar;