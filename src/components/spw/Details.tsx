import { Sparkles, TreePalm, KeyRound } from "lucide-react";

const Details = () => {
  return (
    <section id="detalles" className="bg-muted/40 px-6 py-24 md:py-32">
      <div className="container mx-auto grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="gold-rule mb-5" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-oxblood">La residencia</span>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl text-balance">
            Vivir en <span className="italic text-brand-oxblood">Santo Domingo</span> es vivir distinto.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            La Estancia de Santo Domingo es uno de los enclaves residenciales más exclusivos de Managua: seguridad
            privada, calles arboladas y vecinos de alto perfil. Esta residencia, de líneas coloniales y dimensiones
            generosas, fue concebida para familias que valoran el espacio, la privacidad y el detalle artesanal.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Cinco habitaciones amplias, áreas sociales de doble altura, cocina equipada y una piscina privada rodeada
            de jardín tropical. El cuarto de servicio independiente y la caseta de cuidador con baño privado
            garantizan la operación discreta del hogar.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { icon: Sparkles, title: "Acabados de lujo", body: "Pisos de mármol, columnas, arcos coloniales y carpintería en madera fina." },
            { icon: TreePalm, title: "Jardín & piscina", body: "Áreas exteriores con vegetación madura y piscina para uso privado." },
            { icon: KeyRound, title: "Servicio incluido", body: "Cuarto de servicio + caseta de cuidador independiente con baño." },
            { icon: Sparkles, title: "Ubicación premium", body: "Acceso controlado en una de las zonas más cotizadas de Managua." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="group rounded-sm border border-border bg-card p-6 shadow-card-luxe transition-all hover:-translate-y-1 hover:shadow-luxe">
              <Icon className="h-6 w-6 text-brand-gold" strokeWidth={1.5} />
              <div className="mt-4 font-serif text-xl text-foreground">{title}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Details;