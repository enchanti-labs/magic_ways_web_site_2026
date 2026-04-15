import { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      number: 32,
      label: 'Estados',
      description: 'Cubrimos todo México',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      number: 120,
      label: 'Pueblos Mágicos',
      description: 'Destinos auténticos',
      color: 'text-gold',
      bgColor: 'bg-gold/10'
    },
    {
      number: 10000,
      label: 'Usuarios Activos',
      description: 'Viajeros conectados',
      color: 'text-emerald',
      bgColor: 'bg-emerald/10'
    },
    {
      number: 500,
      label: 'Comercios Locales',
      description: 'Negocios conectados',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    }
  ];

  // Animated counter hook
  const useAnimatedCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutExpo = 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(end * easeOutExpo));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [end, duration, isVisible]);

    return count;
  };

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const formatNumber = (num: number, originalNum: number) => {
    if (originalNum >= 10000) {
      return `${(num / 1000).toFixed(0)}K+`;
    } else if (originalNum >= 100) {
      return `${num}+`;
    }
    return num.toString();
  };

  return (
    <section id="estadisticas" ref={sectionRef} className="py-16 md:py-24 bg-zinc-950 rounded-b-[60px] md:rounded-b-[100px] relative z-40 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/10 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 text-white leading-tight">
            Nuestro <br />
            <span className="text-primary italic">Impacto</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Números que reflejan el crecimiento de Magic Ways y nuestro impacto positivo 
            en las comunidades locales de México.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const animatedCount = useAnimatedCounter(stat.number, 2500 + index * 200);
            
            return (
              <Card key={index} className="border-0 rounded-[2.5rem] shadow-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:translate-y-[-8px] transition-smooth group reveal-on-scroll overflow-hidden">
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 ${stat.color.replace('text-', 'bg-')}`} />
                  
                  <div className="mb-4 relative">
                    <span className={`text-5xl md:text-6xl font-black block tracking-tighter ${stat.color} group-hover:scale-110 transition-transform duration-500`}>
                      {formatNumber(animatedCount, stat.number)}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-1 text-white uppercase tracking-widest">
                    {stat.label}
                  </h3>
                  
                  <p className="text-zinc-500 text-sm font-medium">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Impact Info */}
        <div className="mt-16 text-center reveal-on-scroll">
          <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50" />
            
            <h3 className="text-2xl md:text-3xl font-heading font-black mb-6 text-white tracking-tight relative z-10">
              Construyendo puentes entre viajeros y comunidades
            </h3>
            <p className="text-lg md:text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed relative z-10 font-medium">
              Cada interacción en <span className="text-white font-black">Magic Ways</span> contribuye al crecimiento económico sostenible 
              de los Pueblos Mágicos, preservando tradiciones culturales y generando oportunidades 
              reales para las comunidades locales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;