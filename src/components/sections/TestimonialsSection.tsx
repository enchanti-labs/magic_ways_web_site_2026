import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Gustavo',
      rating: 5,
      text: 'Descubrí pueblos que no tenía ni idea que existían. La app es súper fácil de usar y el chat con IA es brutal.',
      avatar: 'https://i.pravatar.cc/150?u=gustavo'
    },
    {
      name: 'Andrea',
      rating: 5,
      text: 'Me encantó poder ver restaurantes y pedir directamente desde la app. Todo en un solo lugar.',
      avatar: 'https://i.pravatar.cc/150?u=fer'
    },
    {
      name: 'Camila',
      rating: 5,
      text: 'Planeé todo mi viaje en minutos. Las recomendaciones de la IA fueron demasiado acertadas.',
      avatar: 'https://i.pravatar.cc/150?u=liz'
    }
  ];

  return (
    <section className="py-12 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-heading font-black text-zinc-900 mb-2">
            Testimonios
          </h2>
        </div>

        <div className="relative">
          {/* Decorative Arrows (Mockup only) */}
          <div className="hidden md:flex absolute top-1/2 -left-12 -translate-y-1/2 z-10">
            <button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center bg-white shadow-sm hover:bg-zinc-50">
              <ChevronLeft className="text-zinc-600" />
            </button>
          </div>
          <div className="hidden md:flex absolute top-1/2 -right-12 -translate-y-1/2 z-10">
            <button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center bg-white shadow-sm hover:bg-zinc-50">
              <ChevronRight className="text-zinc-600" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="border-0 shadow-elegant rounded-[2.5rem] bg-white hover:translate-y-[-5px] transition-smooth overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-12 h-12 border-2 border-primary/20">
                      <AvatarImage src={t.avatar} />
                      <AvatarFallback>{t.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-black text-lg text-zinc-900">{t.name}</h4>
                      <div className="flex text-gold">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-zinc-600 text-base italic leading-relaxed font-medium">
                    "{t.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
