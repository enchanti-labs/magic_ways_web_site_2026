import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import townsData from '@/assets/jsons/index_towns.json';

const DestinationsSection = () => {
  // Use the first 6 towns for the featured section
  const destinations = townsData.slice(0, 6).map(town => ({
    name: town.name,
    state: town.id.split('_')[0].toUpperCase(), // Extracting state code from ID as a fallback
    description: town.slogan,
    image: town.thumbnail || "/placeholder.svg"
  }));
  return (
    <section id="destinos" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 text-zinc-900 leading-tight">
            Explora México <br />
            <span className="text-primary italic">pueblo por pueblo</span>
          </h2>
        </div>

        {/* Featured Destinations - Horizontal Scroll style in grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.slice(0, 4).map((destination, index) => (
            <Card key={index} className="overflow-hidden border-0 rounded-[2.5rem] shadow-elegant hover:translate-y-[-10px] transition-smooth reveal-on-scroll group bg-white">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-black text-2xl drop-shadow-md italic">{destination.name}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-zinc-500 text-sm mb-6 line-clamp-2 leading-relaxed">{destination.description}</p>
                <Link to={`/destinos/${destination.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button className="w-full rounded-2xl bg-primary hover:bg-primary-light py-6 text-sm font-bold shadow-mexican">
                    Explorar destino &gt;
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center reveal-on-scroll">
          <Link to="/destinos">
            <Button size="lg" className="rounded-full bg-zinc-900 text-white hover:bg-black px-12 py-7 text-lg font-bold shadow-2xl transition-bounce hover-lift">
              Ver todos los Pueblos Mágicos
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>

        {/* Floating Bubble Accents */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  );
};

export default DestinationsSection;