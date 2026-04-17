import { Button } from '@/components/ui/button';
import { Download, Play, ArrowRight } from 'lucide-react';
import ctaBackground from '@/assets/cta-background.jpg';
import phoneInHand from '@/assets/app-screens-multiple.png';
const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-[#fff0f6] rounded-[3.5rem] md:rounded-[5rem] p-8 md:p-16 relative overflow-hidden border border-primary/10 shadow-2xl reveal-on-scroll">
          {/* Decorative Bubbles */}
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-primary/20 blur-[80px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-gold/20 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Content */}
            <div className="text-zinc-900">
              <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 leading-tight tracking-tight">
                ¡Tu aventura <br />
                <span className="text-primary italic">comienza aquí!</span>
              </h2>
              <p className="text-lg md:text-xl mb-10 text-zinc-600 leading-relaxed font-medium max-w-xl">
                Únete a miles de viajeros que ya han descubierto lo más auténtico de México con nuestra app.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full shadow-mexican px-8 py-6 text-base hover-lift w-full sm:w-auto">
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.magicways.customers" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Download className="w-5 h-5 mr-3" />
                    Descargar App
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full bg-white border-zinc-200 px-8 py-6 text-base hover-lift hover:bg-zinc-50 font-bold text-zinc-900 w-full sm:w-auto">
                  <a href="#">
                    <ArrowRight className="w-5 h-5 mr-3 text-primary" />
                    Saber más
                  </a>
                </Button>
              </div>
            </div>

            {/* Phone Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity" />
                <img
                  src={phoneInHand}
                  alt="Magic Ways App en smartphone"
                  className="max-w-sm w-full h-auto drop-shadow-[0_45px_45px_rgba(0,0,0,0.25)] relative z-10 animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTASection;