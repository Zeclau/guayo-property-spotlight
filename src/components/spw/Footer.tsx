const Footer = () => {
  return (
    <footer className="bg-brand-ink border-t border-brand-cream/10 px-6 py-8 text-brand-cream/60">
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] sm:flex-row">
        <div>© {new Date().getFullYear()} GUAYO Bienes Raíces · Todos los derechos reservados</div>
        <div>Managua, Nicaragua</div>
      </div>
    </footer>
  );
};

export default Footer;