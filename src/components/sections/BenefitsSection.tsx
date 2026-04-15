import { Card, CardContent } from '@/components/ui/card';
import { Store, Compass, Package, Heart, Smartphone, Users, MapPin, Star } from 'lucide-react';
import appScreens from '@/assets/app-screens-multiple.png';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Store,
      title: 'Conecta con comercios locales',
      description: 'Encuentra restaurantes, tiendas de artesanías, hoteles boutique y servicios únicos en cada destino',
      color: 'text-primary'
    },
    {
      icon: Compass,
      title: 'Explora actividades únicas',
      description: 'Descubre experiencias auténticas, tours culturales, talleres artesanales y eventos tradicionales',
      color: 'text-gold'
    },
    {
      icon: Package,
      title: 'Productos a domicilio',
      description: 'Ordena artesanías, productos locales y especialidades gastronómicas directamente a tu hospedaje',
      color: 'text-emerald'
    },
    {
      icon: Heart,
      title: 'Apoya la economía local',
      description: 'Tu consumo contribuye directamente al desarrollo y bienestar de las comunidades locales',
      color: 'text-primary'
    }
  ];

  const features = [
    {
      icon: Smartphone,
      title: 'Interfaz intuitiva',
      description: 'Diseño pensado para turistas, fácil navegación y acceso rápido a lo que necesitas'
    },
    {
      icon: MapPin,
      title: 'Geolocalización',
      description: 'Encuentra comercios y actividades cercanas a tu ubicación actual'
    },
    {
      icon: Users,
      title: 'Comunidad activa',
      description: 'Conecta con otros viajeros y obtén recomendaciones de locales'
    },
    {
      icon: Star,
      title: 'Experiencias verificadas',
      description: 'Todas las actividades y comercios están verificados por nuestro equipo'
    }
  ];

  return (
    <section id="beneficios" className="py-16 md:py-24 bg-white rounded-b-[60px] md:rounded-b-[100px] relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Benefits */}
          <div className="reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 text-zinc-900 leading-tight">
              Lleva la magia <br />
              <span className="text-primary italic">en tus manos</span>
            </h2>
            <p className="text-lg text-zinc-600 mb-10 max-w-xl leading-relaxed">
              Una experiencia completa que transforma la forma de viajar por México, 
              conectando turistas con la esencia auténtica de cada pueblo.
            </p>

            <div className="space-y-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-5 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                      <Icon size={24} className={`${benefit.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-zinc-900">{benefit.title}</h3>
                      <p className="text-zinc-500 leading-relaxed text-base">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - App Preview */}
          <div className="reveal-on-scroll">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative z-10 animate-float">
                <img 
                  src={appScreens} 
                  alt="Magic Ways App Benefits" 
                  className="w-full h-auto drop-shadow-3xl transform transition-smooth group-hover:scale-[1.02]"
                />
              </div>
              
              {/* Floating Feature Cards */}
              <div className="absolute -left-2 top-1/4 hidden lg:block z-20 animate-float" style={{ animationDelay: '1s' }}>
                <Card className="w-64 border-0 rounded-[1.5rem] shadow-2xl bg-white/90 backdrop-blur-md">
                  <CardContent className="p-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Store size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-base text-zinc-900">500+ Comercios</div>
                        <div className="text-xs text-zinc-500 font-medium">Conectados hoy</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="absolute -right-2 bottom-1/4 hidden lg:block z-20 animate-float" style={{ animationDelay: '1.5s' }}>
                <Card className="w-64 border-0 rounded-[1.5rem] shadow-2xl bg-white/90 backdrop-blur-md">
                  <CardContent className="p-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                        <Heart size={20} className="text-emerald-500" />
                      </div>
                      <div>
                        <div className="font-bold text-base text-zinc-900">Impacto Directo</div>
                        <div className="text-xs text-zinc-500 font-medium">Turismo sustentable</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-20 md:mt-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 rounded-[2.5rem] shadow-elegant hover:translate-y-[-8px] transition-smooth group bg-zinc-50/50 hover:bg-white reveal-on-scroll">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-zinc-900 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-zinc-500 text-base leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;