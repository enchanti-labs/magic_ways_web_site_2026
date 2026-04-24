import { Card, CardContent } from '@/components/ui/card';
import { Download, Search, Heart } from 'lucide-react';
import appMockup from '@/assets/app-mockup-hero.png';
const HowItWorksSection = () => {
  const steps = [{
    step: 1,
    icon: Download,
    title: 'Descarga la app',
    description: (
      <span>
        Obtén Magic Ways gratis desde <a href="#" className="underline font-bold hover:text-primary transition-colors">App Store</a> o <a href="https://play.google.com/store/apps/details?id=com.magicways.customers" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-primary transition-colors">Google Play</a>. La instalación es rápida y sencilla.
      </span>
    ),
    color: 'bg-primary',
    textColor: 'text-primary-foreground'
  }, {
    step: 2,
    icon: Search,
    title: 'Explora destinos y servicios',
    description: 'Busca Sitios Mágicos, descubre comercios locales, actividades auténticas y servicios únicos.',
    color: 'bg-gold',
    textColor: 'text-foreground'
  }, {
    step: 3,
    icon: Heart,
    title: 'Disfruta experiencias únicas',
    description: 'Vive momentos inolvidables mientras apoyas directamente a comercios y comunidades locales.',
    color: 'bg-pink-500',
    textColor: 'text-white'
  }];
  return <section id="como-funciona" className="py-16 md:py-24 bg-[#f2f3ff] rounded-b-[60px] md:rounded-b-[100px] relative z-40 overflow-hidden">
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-12 reveal-on-scroll">
        <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 text-zinc-900 leading-tight">
          ¿Cómo <br />
          <span className="text-primary italic">funciona?</span>
        </h2>
        <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Comenzar tu aventura por los Sitios Mágicos de México es muy fácil.
          Solo sigue estos tres simples pasos.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content - Steps */}
        <div className="space-y-6 reveal-on-scroll">
          {steps.map((stepItem, index) => {
            const Icon = stepItem.icon;
            return <Card key={index} className="border-0 rounded-[2.5rem] shadow-2xl hover:translate-y-[-5px] transition-smooth group bg-white overflow-hidden">
              <CardContent className="p-1.5">
                <div className="flex flex-col md:flex-row items-center">
                  {/* Step Number and Icon */}
                  <div className={`${stepItem.color} w-24 h-24 md:w-32 md:h-32 rounded-[2rem] p-6 flex flex-col items-center justify-center m-1.5 group-hover:scale-105 transition-transform duration-500`}>
                    <div className="text-3xl font-black mb-1 opacity-90">
                      <span className={stepItem.textColor}>0{stepItem.step}</span>
                    </div>
                    <Icon size={24} className={stepItem.textColor} />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex-1">
                    <h3 className="text-xl font-black mb-2 text-zinc-900 leading-tight group-hover:text-primary transition-colors">
                      {stepItem.title}
                    </h3>
                    <p className="text-zinc-500 leading-relaxed text-base">
                      {stepItem.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>;
          })}
        </div>

        {/* Right Content - Phone Mockup */}
        <div className="flex justify-center lg:justify-end reveal-on-scroll">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full opacity-50 group-hover:opacity-70 transition-opacity animate-pulse" />

            {/* Main Phone */}
            <div className="relative z-10 animate-float">
              <img
                src={appMockup}
                alt="Magic Ways App Process"
                className="w-80 md:w-96 h-auto max-w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)] transform transition-smooth group-hover:scale-105"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-white shadow-2xl rounded-3xl flex items-center justify-center animate-float z-20" style={{ animationDelay: '0.5s' }}>
              <Download size={28} className="text-primary" />
            </div>

            <div className="absolute top-1/2 -right-8 w-20 h-20 bg-white shadow-2xl rounded-3xl flex items-center justify-center animate-float z-20" style={{ animationDelay: '1s' }}>
              <Search size={28} className="text-orange-500" />
            </div>

            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white shadow-2xl rounded-3xl flex items-center justify-center animate-float z-20" style={{ animationDelay: '1.5s' }}>
              <Heart size={28} className="text-pink-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default HowItWorksSection;