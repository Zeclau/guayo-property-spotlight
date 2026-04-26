import { BedDouble, Bath, Waves, Users, Home, Shield } from "lucide-react";

const features = [
  { icon: BedDouble, label: "Habitaciones", value: "5", note: "+ 1 cuarto de servicio" },
  { icon: Bath, label: "Baños", value: "5 + 2", note: "Más 2 baños de servicio" },
  { icon: Waves, label: "Piscina", value: "Privada", note: "Con jardín tropical" },
  { icon: Shield, label: "Caseta de cuidador", value: "Sí", note: "Independiente con baño" },
  { icon: Users, label: "Ideal para", value: "Familias", note: "Espacio para grandes grupos" },
  { icon: Home, label: "Estilo", value: "Colonial", note: "Acabados premium" },
];

const QuickFeatures = () => {
  return (
    <section className="relative -mt-16 z-20 px-6">
      <div className="container mx-auto">
        <div className="rounded-sm bg-card shadow-luxe ring-1 ring-border">
          <div className="grid grid-cols-2 divide-y divide-border md:grid-cols-3 md:divide-y-0 lg:grid-cols-6">
            {features.map(({ icon: Icon, label, value, note }, i) => (
              <div
                key={label}
                className={`group flex flex-col items-start gap-2 p-6 transition-colors hover:bg-muted/40 ${
                  i % 2 === 0 ? "border-r border-border" : ""
                } md:border-r md:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(6n)]:border-r-0`}
              >
                <Icon className="h-6 w-6 text-brand-oxblood transition-transform group-hover:scale-110" strokeWidth={1.5} />
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
                <div className="font-serif text-2xl text-foreground">{value}</div>
                <div className="text-xs text-muted-foreground leading-snug">{note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickFeatures;