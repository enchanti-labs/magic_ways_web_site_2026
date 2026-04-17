import logoNata from '@/assets/logo-nata.png';
import logoFinca from '@/assets/logo-finca.png';

const TrustedBySection = () => {
  const logos = [
    { name: 'Nata y Canela', id: 1, imgUrl: logoNata },
    { name: 'Finca Ortiz', id: 2, imgUrl: logoFinca },

  ];

  // Duplicate logos for seamless scroll - using more for only 2 items
  const allLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className="pt-10 pb-4 bg-white overflow-hidden border-y border-zinc-100">
      <div className="container mx-auto px-4 mb-4">
        <div className="flex flex-col items-center">
          <h3 className="text-zinc-400 font-bold text-[10px] mb-0 uppercase tracking-[0.3em]">
            Nuestros aliados
          </h3>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee gap-6 md:gap-8 py-4 items-center">
          {allLogos.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center min-w-[140px] md:min-w-[180px] opacity-40 hover:opacity-100 transition-all grayscale hover:grayscale-0 duration-500 transform hover:scale-105">
              {logo.imgUrl ? (
                <img
                  src={logo.imgUrl}
                  alt={logo.name}
                  className="h-16 md:h-24 w-auto object-contain"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : null}
              <span className={`text-2xl md:text-3xl font-black text-zinc-300 hover:text-primary transition-colors cursor-default whitespace-nowrap ${logo.imgUrl ? 'hidden' : ''}`}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
