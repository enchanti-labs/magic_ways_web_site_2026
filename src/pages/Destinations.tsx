import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, ArrowLeft, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import townsData from '@/assets/jsons/index_towns.json';
import heroBg from '@/assets/hero-pueblo-magico.jpg';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTowns, setFilteredTowns] = useState(townsData);

  // Scroll reveal animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');
    elementsToReveal.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredTowns]); // Re-run when list changes

  useEffect(() => {
    const filtered = townsData.filter(town => 
      town.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      town.id.split('_')[0].toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTowns(filtered);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <header className="bg-primary pt-32 pb-12 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center" 
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="container relative z-10 mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-8 -ml-4">
              <ArrowLeft className="mr-2" size={20} />
              Regresar al inicio
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Todos los Destinos
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Explora los {townsData.length} Pueblos Mágicos de México y descubre la magia en cada rincón del país.
          </p>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-card shadow-lg rounded-2xl p-6 border border-border">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              type="text"
              placeholder="Buscar por nombre de pueblo o estado..."
              className="pl-10 h-12 text-lg rounded-xl border-2 border-primary/20 focus:border-primary transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {searchTerm && (
            <p className="text-center mt-4 text-muted-foreground">
              Se encontraron {filteredTowns.length} resultados para "{searchTerm}"
            </p>
          )}
        </div>
      </div>

      {/* Destinations Grid */}
      <main className="container mx-auto px-4 py-16">
        {filteredTowns.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredTowns.map((town, index) => (
              <Card key={town.id} className="overflow-hidden hover-lift shadow-card reveal-on-scroll">
                <div className="relative h-48">
                  <img 
                    src={town.thumbnail || "/placeholder.svg"} 
                    alt={town.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center mb-1">
                      <MapPin size={14} className="mr-1" />
                      <span className="text-xs font-medium uppercase tracking-wider">
                        {town.id.split('_')[0]}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg leading-tight">{town.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-sm line-clamp-2 min-h-[2.5rem] mb-4">
                    {town.slogan}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Explorar destino
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-accent/20 rounded-3xl border-2 border-dashed border-border">
            <Search className="mx-auto mb-4 text-muted-foreground opacity-20" size={64} />
            <h3 className="text-2xl font-heading font-bold mb-2">No se encontraron resultados</h3>
            <p className="text-muted-foreground">
              Prueba con otro término de búsqueda o revisa la ortografía.
            </p>
            <Button variant="outline" className="mt-8" onClick={() => setSearchTerm('')}>
              Limpiar búsqueda
            </Button>
          </div>
        )}
      </main>

      {/* Social / WhatsApp */}
      <WhatsAppFloat />

      <FooterSection />
    </div>
  );
};

export default Destinations;
