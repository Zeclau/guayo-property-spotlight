import Navbar from "@/components/spw/Navbar";
import Hero from "@/components/spw/Hero";
import QuickFeatures from "@/components/spw/QuickFeatures";
import Gallery from "@/components/spw/Gallery";
import Details from "@/components/spw/Details";
import LocationMap from "@/components/spw/LocationMap";
import Contact from "@/components/spw/Contact";
import Footer from "@/components/spw/Footer";
import WhatsAppFab from "@/components/spw/WhatsAppFab";

const propertyJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: "Lujosa Residencia en La Estancia de Santo Domingo",
  description:
    "Residencia de lujo en alquiler en La Estancia de Santo Domingo, Managua. 5 habitaciones, 5 baños + 2 medios baños, piscina privada y caseta de cuidador.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Managua",
    addressRegion: "Managua",
    addressCountry: "NI",
    streetAddress: "La Estancia de Santo Domingo",
  },
  geo: { "@type": "GeoCoordinates", latitude: 12.0782265, longitude: -86.2405203 },
  numberOfBedrooms: 5,
  numberOfBathroomsTotal: 7,
  offers: { "@type": "Offer", price: 4000, priceCurrency: "USD", availability: "https://schema.org/InStock" },
};

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(propertyJsonLd) }} />
      <Navbar />
      <Hero />
      <QuickFeatures />
      <Gallery />
      <Details />
      <LocationMap />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default Index;
