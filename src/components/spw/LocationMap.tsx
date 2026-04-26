import { MapPin, Navigation, ShieldCheck } from "lucide-react";

const LAT = 12.0782265;
const LNG = -86.2405203;
// 1km radius bounding box (~0.009 deg lat, lng adjusted by cos(lat))
const dLat = 0.009;
const dLng = 0.009 / Math.cos((LAT * Math.PI) / 180);
const bbox = `${LNG - dLng},${LAT - dLat},${LNG + dLng},${LAT + dLat}`;
const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${LAT},${LNG}`;
const directions = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`;

const LocationMap = () => {
  return (
    <section id="ubicacion" className="px-6 py-24 md:py-32">
      <div className="container mx-auto">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="gold-rule mb-5" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-oxblood">Ubicación</span>
            <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl text-balance">
              En el corazón de <span className="italic text-brand-oxblood">Santo Domingo</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Zona residencial con acceso controlado, a minutos de centros comerciales, colegios internacionales y embajadas.
            </p>
          </div>
          <a
            href={directions}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-sm border border-foreground/20 px-5 py-3 text-xs uppercase tracking-[0.2em] text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            <Navigation className="h-4 w-4" />
            Cómo llegar
          </a>
        </div>

        <div className="overflow-hidden rounded-sm shadow-luxe ring-1 ring-border">
          <div className="relative aspect-[16/9] w-full bg-muted">
            <iframe
              title="Mapa — La Estancia de Santo Domingo, Managua"
              src={mapSrc}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-brand-ink/85 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-brand-cream backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              Radio de 1 km · Vista aproximada
            </div>
          </div>

          <div className="grid gap-px bg-border sm:grid-cols-3">
            <div className="flex items-start gap-3 bg-card p-5">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-oxblood" strokeWidth={1.5} />
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Dirección</div>
                <div className="font-serif text-lg text-foreground">La Estancia de Santo Domingo</div>
                <div className="text-xs text-muted-foreground">Managua, Nicaragua</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-card p-5">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-oxblood" strokeWidth={1.5} />
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Privacidad</div>
                <div className="font-serif text-lg text-foreground">Acceso controlado 24/7</div>
                <div className="text-xs text-muted-foreground">Coordenadas precisas al agendar visita</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-card p-5">
              <Navigation className="mt-0.5 h-5 w-5 shrink-0 text-brand-oxblood" strokeWidth={1.5} />
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Conectividad</div>
                <div className="font-serif text-lg text-foreground">15 min a Galerías Santo Domingo</div>
                <div className="text-xs text-muted-foreground">Cerca de colegios internacionales</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;