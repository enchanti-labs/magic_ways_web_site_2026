import { MapPin, Users, Store, Globe } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      number: '32',
      label: 'Estados',
      icon: Globe,
    },
    {
      number: '177',
      label: 'Sitios Mágicos',
      icon: MapPin,
    },
    {
      number: '10K+',
      label: 'Users',
      icon: Users,
    },
    {
      number: '499+',
      label: 'Comercios',
      icon: Store,
    }
  ];

  return (
    <section className="py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="flex flex-col items-center">
                <div className="mb-4">
                  <Icon size={32} className="text-primary opacity-80" />
                </div>
                <div className="text-3xl md:text-4xl font-black mb-1">
                  {stat.number}
                </div>
                <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest text-center">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;