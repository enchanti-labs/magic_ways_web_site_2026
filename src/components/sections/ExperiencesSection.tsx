import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Calendar, Star } from 'lucide-react';
import festivitiesData from '@/assets/jsons/festivities.json';

const ExperiencesSection = () => {
  // Use the first 4 festivities for the highlights section
  const experiences = festivitiesData.slice(0, 4).map(festivity => ({
    title: festivity.name,
    location: festivity.townName,
    image: festivity.imageUrl || "/placeholder.svg",
    date: `${festivity.day} de ${festivity.month}`,
    rating: 4.9,
    description: festivity.description,
    highlights: ['Cultura local', 'Tradición', 'Evento único']
  }));

  return (
    <section id="experiencias" className="py-16 md:py-24 bg-[#ffeef5] rounded-b-[60px] md:rounded-b-[100px] relative z-30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 reveal-on-scroll">
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 text-zinc-900 leading-tight">
            Momentos <br />
            <span className="text-primary italic">Inolvidables</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            Vive momentos únicos e inolvidables en cada Pueblo Mágico. 
            Experiencias auténticas que conectan con la cultura de México.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="overflow-hidden border-0 rounded-[2.5rem] shadow-2xl hover:translate-y-[-8px] transition-smooth reveal-on-scroll group bg-white">
              <div className="grid md:grid-cols-5 h-full">
                {/* Image */}
                <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center space-x-2 shadow-lg">
                    <Star size={14} className="text-primary fill-primary" />
                    <span className="text-xs font-black text-zinc-900">{experience.rating}</span>
                  </div>

                  {/* Location */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2 bg-black/20 backdrop-blur-md px-3 py-1 rounded-full w-fit">
                      <MapPin size={14} className="text-primary" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{experience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3">
                  <CardContent className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col mb-3">
                        <div className="flex items-center text-primary text-xs font-bold mb-1">
                          <Calendar size={14} className="mr-2" />
                          {experience.date}
                        </div>
                        <h3 className="text-xl font-black text-zinc-900 leading-tight">
                          {experience.title}
                        </h3>
                      </div>

                      <p className="text-zinc-500 leading-relaxed mb-6 text-base line-clamp-3">
                        {experience.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {experience.highlights.map((highlight, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-zinc-50 text-zinc-600 text-[10px] rounded-full font-bold uppercase tracking-wider group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button variant="outline" className="w-full rounded-full border-zinc-200 py-5 text-sm font-bold group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                      Ver experiencia completa
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 reveal-on-scroll">
          <div className="bg-white/50 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 border border-white/50 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-black mb-4 text-zinc-900 tracking-tight">
              ¿Listo para vivir estas experiencias?
            </h3>
            <p className="text-lg text-zinc-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Descarga Magic Ways y comienza a explorar México de una forma completamente nueva. 
              Cada pueblo tiene historias únicas esperándote.
            </p>
            <Button size="lg" className="rounded-full shadow-mexican px-8 py-6 text-base hover-lift">
              Explorar más experiencias
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;