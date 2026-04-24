import { ShoppingBag, Calendar } from 'lucide-react';
import marketplaceMockup from '@/assets/feature-marketplace.png';
import bookingMockup from '@/assets/feature-booking.png';

const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 items-center">

          {/* Left: Marketplace Mockup */}
          <div className="relative flex justify-center reveal-on-scroll">
            <div className="w-48 md:w-56 overflow-hidden rounded-[2rem] shadow-xl border-4 border-zinc-900 group-hover:scale-105 transition-transform duration-500">
              <img
                src={marketplaceMockup}
                alt="Marketplace View"
                className="w-full h-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800";
                }}
              />
            </div>
          </div>

          {/* Center: Features Text */}
          <div className="flex flex-col gap-10 reveal-on-scroll text-center lg:text-left">
            <div className="transition-smooth group">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4 mx-auto lg:mx-0">
                <ShoppingBag size={24} className="text-gold" />
              </div>
              <h3 className="text-2xl font-black mb-2 text-zinc-900 italic">Marketplace Local</h3>
              <p className="text-zinc-500 text-lg leading-relaxed">
                Conecta con comercios locales en los 177 sitios mágicos, en diferentes categorías.
              </p>
            </div>

            <div className="transition-smooth group">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto lg:mx-0">
                <Calendar size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-black mb-2 text-zinc-900 italic">Paquetes Directos</h3>
              <p className="text-zinc-500 text-lg leading-relaxed">
                Reserva excursiones y experiencias de forma fácil y segura directo con los proveedores.
              </p>
            </div>
          </div>

          {/* Right: Booking Mockup */}
          <div className="relative flex justify-center reveal-on-scroll">
            <div className="w-48 md:w-56 overflow-hidden rounded-[2rem] shadow-xl border-4 border-zinc-900 group-hover:scale-105 transition-transform duration-500">
              <img
                src={bookingMockup}
                alt="Booking View"
                className="w-full h-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800";
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
