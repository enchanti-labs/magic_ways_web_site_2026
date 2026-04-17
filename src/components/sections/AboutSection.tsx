import { Smartphone, Users, MapPin, Heart, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import appScreens from '@/assets/app-screens-multiple.png';

const AboutSection = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Explora Destinos',
      description: 'Descubre más de 120 Pueblos Mágicos auténticos con guías locales detalladas.',
      bg: 'bg-orange-50',
      color: 'text-orange-500'
    },
    {
      icon: Users,
      title: 'Conecta Localmente',
      description: 'Encuentra comercios y servicios locales únicos que no verás en otras apps.',
      bg: 'bg-pink-50',
      color: 'text-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Experiencias Móviles',
      description: 'Reserva, chatea y paga todo desde la palma de tu mano, de forma segura.',
      bg: 'bg-cyan-50',
      color: 'text-cyan-500'
    },
    {
      icon: Heart,
      title: 'Apoya la Economía',
      description: 'Cada paso que das en Magic Ways contribuye al crecimiento de comunidades locales.',
      bg: 'bg-indigo-50',
      color: 'text-indigo-500'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-[#fffbf0] rounded-b-[60px] md:rounded-b-[100px] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="reveal-on-scroll">
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 text-zinc-900 leading-[1.1]">
              ¿Qué es <br />
              <span className="text-primary italic">Magic Ways?</span>
            </h2>
            <p className="text-base md:text-lg text-zinc-600 mb-10 leading-relaxed max-w-2xl">
              Una app móvil innovadora que conecta turistas con la esencia real de México. 
              Explora, chatea y apoya a comercios locales en más de 120 Pueblos Mágicos.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-0 rounded-[2.5rem] shadow-xl hover:translate-y-[-5px] transition-smooth group bg-white overflow-hidden">
                    <CardContent className="p-6">
                      <div className={`${feature.bg} ${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon size={24} />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-zinc-900">{feature.title}</h3>
                      <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            <div className="mt-10">
              <Button size="lg" className="rounded-full shadow-mexican px-8 py-6 text-base hover-lift">
                Descargar App
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Content - App Screenshots */}
          <div className="reveal-on-scroll relative group">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-50 group-hover:opacity-70 transition-opacity animate-pulse" />
            <div className="relative z-10 animate-float">
              <img 
                src={appScreens} 
                alt="Magic Ways App Screenshots" 
                className="max-w-full h-auto drop-shadow-2xl transform transition-smooth hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;