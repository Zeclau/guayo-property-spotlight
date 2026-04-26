import living from "@/assets/living-room.jpg";
import staircase from "@/assets/staircase.jpg";
import pool from "@/assets/pool.jpg";
import kitchen from "@/assets/kitchen.jpg";
import bedroom from "@/assets/bedroom.jpg";

const Gallery = () => {
  return (
    <section id="galeria" className="px-6 py-24 md:py-32">
      <div className="container mx-auto">
        <div className="mb-14 max-w-2xl">
          <div className="gold-rule mb-5" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-oxblood">Galería</span>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            Cada espacio, una <span className="italic text-brand-oxblood">obra de arte</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Arquitectura colonial contemporánea con detalles artesanales. Recorre cada ambiente diseñado para vivir con elegancia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-4 md:grid-rows-2 md:h-[640px]">
          <figure className="group relative overflow-hidden rounded-sm shadow-card-luxe md:col-span-2 md:row-span-2">
            <img src={living} alt="Sala principal con doble altura y arcos coloniales" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" width={1024} height={1024} />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-ink/80 to-transparent p-6">
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-gold">Sala principal</div>
              <div className="font-serif text-2xl text-brand-cream">Doble altura con arcos</div>
            </figcaption>
          </figure>

          <figure className="group relative overflow-hidden rounded-sm shadow-card-luxe md:row-span-2 h-72 md:h-auto">
            <img src={staircase} alt="Escalera de caracol con barandas de hierro forjado" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" width={1024} height={1024} />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-ink/80 to-transparent p-5">
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-gold">Foyer</div>
              <div className="font-serif text-xl text-brand-cream">Escalera de caracol</div>
            </figcaption>
          </figure>

          <figure className="group relative overflow-hidden rounded-sm shadow-card-luxe h-56 md:h-auto">
            <img src={pool} alt="Piscina privada y jardín tropical" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" width={1024} height={1024} />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-ink/80 to-transparent p-4">
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-gold">Exterior</div>
              <div className="font-serif text-lg text-brand-cream">Piscina y jardín</div>
            </figcaption>
          </figure>

          <figure className="group relative overflow-hidden rounded-sm shadow-card-luxe h-56 md:h-auto">
            <img src={kitchen} alt="Cocina amplia con muebles de madera y granito" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" width={1024} height={1024} />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-ink/80 to-transparent p-4">
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-gold">Cocina</div>
              <div className="font-serif text-lg text-brand-cream">Madera & granito</div>
            </figcaption>
          </figure>
        </div>

        <figure className="mt-3 group relative overflow-hidden rounded-sm shadow-card-luxe">
          <img src={bedroom} alt="Habitación principal con balcón privado" loading="lazy" className="h-72 md:h-96 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" width={1024} height={1024} />
          <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-ink/80 to-transparent p-6">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-gold">Habitación principal</div>
            <div className="font-serif text-2xl text-brand-cream">Suite con balcón al jardín</div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Gallery;