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
    <section id="destinos" className="py-16 md:py-24 bg-[#eafcff] rounded-b-[60px] md:rounded-b-[100px] relative z-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 reveal-on-scroll">
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 text-zinc-900 leading-tight">
            Explora México <br />
            <span className="text-primary italic">pueblo por pueblo</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Descubre la riqueza cultural de México a través de sus Pueblos Mágicos. 
            Cada destino cuenta una historia única llena de tradiciones y sabores.
          </p>
          <Link to="/destinos">
            <Button size="lg" className="rounded-full shadow-mexican px-10 py-6 text-base hover-lift">
              Ver todos los destinos
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>

        {/* Featured Destinations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden border-0 rounded-[2.5rem] shadow-2xl hover:translate-y-[-8px] transition-smooth reveal-on-scroll group bg-white h-full flex flex-col">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center mb-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full w-fit">
                    <MapPin size={12} className="mr-1 text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">{destination.state}</span>
                  </div>
                  <h3 className="font-black text-xl tracking-tight">{destination.name}</h3>
                </div>
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <p className="text-zinc-500 text-base mb-6 line-clamp-2 leading-relaxed flex-grow">{destination.description}</p>
                <Link to={`/destinos/${destination.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button variant="outline" className="w-full rounded-full border-zinc-200 py-5 text-sm font-bold group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                    Explorar destino
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;