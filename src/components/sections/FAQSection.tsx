import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const faqs = [
    {
      question: '¿En qué pueblos está disponible la app?',
      answer: 'Magic Ways está presente en los 177 Pueblos Mágicos oficiales de México. Nuestra cobertura abarca los 32 estados, conectando a viajeros con el alma cultural de cada región.'
    },
    {
      question: '¿Soy comerciante, cómo puedo registrar mi negocio?',
      answer: '¡Es muy sencillo! Puedes hacer clic en el botón "Registrar Negocio" en nuestro menú superior o contactarnos directamente. Ofrecemos herramientas digitales para que gestiones tu inventario, reservas y visibilidad sin complicaciones.'
    },
    {
      question: '¿La app tiene algún costo para el viajero?',
      answer: (
        <span>
          Magic Ways es 100% gratuita para <a href="https://play.google.com/store/apps/details?id=com.magicways.customers" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">descargar y explorar</a>. No cobramos comisiones adicionales a los usuarios. Los pagos que realices van directamente a los prestadores de servicios locales.
        </span>
      )
    },
    {
      question: '¿Qué tipo de servicios puedo encontrar?',
      answer: 'Desde hoteles boutique y hostales acogedores hasta experiencias de turismo de aventura, artesanías únicas y la mejor gastronomía local certificada en cada destino.'
    },
    {
      question: '¿Cómo garantizan la autenticidad de los negocios?',
      answer: 'Trabajamos de la mano con las autoridades locales y realizamos un proceso de verificación para asegurar que cada comercio listado mantenga los estándares de calidad y autenticidad que definen a un Pueblo Mágico.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) ? prev.filter(item => item !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-zinc-900 mb-4 uppercase tracking-tighter">
              Preguntas <span className="text-primary italic">Frecuentes</span>
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl">
              Todo lo que necesitas saber para empezar tu aventura.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                className={`border-zinc-100 shadow-sm transition-all duration-300 rounded-[2rem] overflow-hidden ${openItems.includes(index) ? 'ring-2 ring-primary/10 border-primary/20 bg-white' : 'bg-zinc-50/50 hover:bg-white hover:shadow-md'}`}
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between group"
                  >
                    <span className="text-lg md:text-xl font-black text-zinc-900 leading-tight pr-8">
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${openItems.includes(index) ? 'bg-primary text-white rotate-0' : 'bg-zinc-200 text-zinc-500 -rotate-180'}`}>
                      {openItems.includes(index) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </button>
                  
                  <div 
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-8 text-zinc-500 text-lg md:text-xl leading-relaxed font-medium border-t border-zinc-50 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-bold text-sm cursor-pointer hover:bg-primary transition-colors">
              <MessageCircle size={18} />
              ¿Tienes más dudas? Escríbenos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;