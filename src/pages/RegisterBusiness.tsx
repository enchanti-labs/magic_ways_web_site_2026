import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, QrCode, MessageSquare, ShoppingBag, Globe, ArrowRight, Zap, TrendingUp, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const RegisterBusiness = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const reveals = document.querySelectorAll('.reveal-on-scroll');
      reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add('revealed');
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: QrCode,
      title: 'Menú Digital & QR',
      description: 'Genera un código QR único para que tus clientes accedan a tu menú o catálogo digital al instante. Olvida los costos de impresión y actualiza tus precios en tiempo real.',
      bg: 'bg-[#fffbf0]',
      accent: 'text-orange-600',
      image: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=800'
    },
    {
      icon: MessageSquare,
      title: 'Chat Directo con Clientes',
      description: 'Conéctate directamente con turistas y locales. Resuelve dudas, reserva mesas o personaliza pedidos a través de un chat integrado fácil de usar.',
      bg: 'bg-[#ffeef5]',
      accent: 'text-pink-600',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800'
    },
    {
      icon: ShoppingBag,
      title: 'Gestión de Pedidos Inteligente',
      description: 'Recibe y gestiona pedidos de comida, artesanías o servicios de forma organizada. Notificaciones en tiempo real para que nunca pierdas una venta.',
      bg: 'bg-[#eafcff]',
      accent: 'text-cyan-600',
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800'
    },
    {
      icon: Globe,
      title: 'Visibilidad Turística Global',
      description: 'Tu negocio aparecerá destacado en el mapa de Magic Ways ante miles de turistas de todo el mundo que están explorando los Pueblos Mágicos.',
      bg: 'bg-[#f2f3ff]',
      accent: 'text-indigo-600',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800'
    }
  ];

  const plans = [
    {
      name: 'Plan Trimestral',
      price: '450',
      period: 'por 3 meses',
      description: 'Ideal para probar el impacto de Magic Ways en tu negocio.',
      features: ['Menú digital ilimitado', 'QR de negocio para compartir', 'Chat con clientes', 'Gestión de pedidos', 'Presencia en el mapa'],
      cta: 'Comenzar ahora',
      highlight: false
    },
    {
      name: 'Plan Anual',
      price: '1,499',
      originalPrice: '1,788',
      period: 'por año',
      description: 'La mejor opción para negocios establecidos que buscan ahorro máximo.',
      features: ['Todo lo del Plan Trimestral', 'Descuento especial por pago anual'],
      cta: 'Obtener Plan Anual',
      highlight: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Deep Dark Style */}
      <header className="relative min-h-[80vh] flex items-center pt-24 overflow-hidden bg-[#0d0d0d]">
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 px-5 py-1.5 text-xs font-semibold rounded-full uppercase tracking-wider">
                Transformación Digital para Negocios
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black mb-6 leading-[1.1] text-white animate-fade-in-up">
                Escala tu <br />
                <span className="text-primary italic">Negocio Local</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0 mb-10 animate-fade-in-up-delay">
                Magic Ways es el aliado digital de los comerciantes en México.
                Gestiona pedidos, menú y visibilidad global en una sola plataforma.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in-up-delay">
                <a href="#planes">
                  <Button size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-mexican rounded-full w-full sm:w-auto px-8">
                    Ver Planes
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white/20 hover:bg-white/10 rounded-full w-full sm:w-auto px-8">
                  Agendar Demo
                </Button>
              </div>
            </div>

            {/* Mockup Floating Area */}
            <div className="relative hidden lg:block animate-float">
              <div className="relative z-10 bg-white/5 backdrop-blur-2xl rounded-[3rem] p-4 border border-white/10 shadow-2xl overflow-hidden max-w-sm mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800"
                  alt="Magic Ways App Mockup"
                  className="rounded-[2.5rem] w-full"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/30 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/30 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </header>

      {/* Stats Quick Ribbon */}
      <section className="bg-white py-12 border-b border-zinc-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center justify-center text-center">
              <Zap className="text-primary mb-3" size={20} />
              <span className="text-2xl font-black text-zinc-900">+5,000</span>
              <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Negocios</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <Users className="text-primary mb-3" size={20} />
              <span className="text-2xl font-black text-zinc-900">+100k</span>
              <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Usuarios</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <TrendingUp className="text-primary mb-3" size={20} />
              <span className="text-2xl font-black text-zinc-900">35%</span>
              <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Crecimiento Ventas</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <Globe className="text-primary mb-3" size={20} />
              <span className="text-2xl font-black text-zinc-900">32</span>
              <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Estados</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bubble Sections */}
      {features.map((feature, index) => (
        <section
          key={index}
          className={`${feature.bg} py-16 md:py-24 overflow-hidden transition-all duration-700 relative reveal-on-scroll ${index !== features.length - 1 ? 'rounded-b-[50px] md:rounded-b-[80px] -mb-12' : ''}`}
          style={{ zIndex: features.length - index }}
        >
          <div className="container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 !== 0 ? 'lg:order-last' : ''}>
                <div className={`${feature.accent} bg-white w-10 h-10 rounded-xl flex items-center justify-center mb-6 shadow-sm`}>
                  <feature.icon size={20} />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-black mb-4 text-zinc-900 leading-tight">
                  {feature.title}
                </h2>
                <p className="text-base md:text-lg text-zinc-600 mb-6 leading-relaxed max-w-xl">
                  {feature.description}
                </p>
                <Button variant="outline" className="border-zinc-200 text-zinc-900 rounded-full hover:bg-zinc-900 hover:text-white px-6 py-2 h-12">
                  Saber más
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
              <div className="relative">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-[2.5rem] shadow-2xl w-full max-w-xl mx-auto transform hover:scale-105 transition-smooth"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Section */}
      <section id="planes" className="py-24 md:py-32 bg-zinc-50 reveal-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-4 text-zinc-900">
              Planes que crecen <br /><span className="text-primary">contigo</span>
            </h2>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tu etapa actual.
              Sin comisiones ocultas, solo resultados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`p-6 md:p-10 rounded-[2.5rem] border-0 shadow-xl transition-smooth hover:translate-y-[-8px] ${plan.highlight ? 'bg-zinc-900 text-white' : 'bg-white'}`}>
                <CardHeader className="p-0 mb-6">
                  <h3 className="text-xl font-black mb-1">{plan.name}</h3>
                  <div className="flex flex-col mb-1">
                    {plan.originalPrice && (
                      <span className="text-zinc-400 line-through text-sm font-medium opacity-70">
                        $ {plan.originalPrice} MXN
                      </span>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black">$ {plan.price}</span>
                      <span className="text-zinc-400 font-medium text-sm">MXN</span>
                    </div>
                  </div>
                  <p className={`text-sm ${plan.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>{plan.period}</p>
                </CardHeader>
                <CardContent className="p-0 mb-6">
                  <p className={`mb-6 text-sm ${plan.highlight ? 'text-zinc-300' : 'text-zinc-600'}`}>{plan.description}</p>
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="bg-primary/20 p-1 rounded-full shrink-0">
                          <Check size={14} className="text-primary" />
                        </div>
                        <span className="font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-0">
                  <Button size="lg" className={`w-full rounded-[1.5rem] font-bold ${plan.highlight ? 'bg-primary text-white hover:bg-primary/90' : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 border-0'}`}>
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-heading font-black text-white mb-6">
            ¿Listo para llevar tu <br />negocio al siguiente nivel?
          </h2>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full shadow-2xl px-10 h-14">
            Comenzar hoy mismo
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default RegisterBusiness;
