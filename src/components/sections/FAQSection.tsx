import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';
const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const faqs = [{
    question: '¿En qué pueblos está disponible la app?',
    answer: 'Magic Ways está disponible en más de 120 Pueblos Mágicos oficiales de México, cubriendo los 32 estados del país. Constantemente agregamos nuevos destinos y comercios locales para expandir nuestra cobertura.'
  }, {
    question: '¿Puedo pedir productos a domicilio en cualquier ciudad?',
    answer: 'El servicio de entrega a domicilio está disponible en la mayoría de nuestros Pueblos Mágicos participantes. La disponibilidad puede variar según el destino y el tipo de producto. Consulta en la app para ver las opciones disponibles en tu ubicación actual.'
  }, {
    question: '¿La app es gratuita?',
    answer: 'Sí, Magic Ways es completamente gratuita para descargar y usar. No cobramos comisiones a los usuarios por explorar destinos, conectar con comercios o acceder a información turística. Los pagos solo aplican cuando realizas compras o reservas servicios.'
  }, {
    question: '¿Cómo se conecta con comercios locales?',
    answer: 'Trabajamos directamente con comercios locales verificados en cada Pueblo Mágico. Nuestro equipo visita y certifica cada negocio para asegurar la calidad y autenticidad de los servicios ofrecidos. Los comercios pueden ser restaurantes, hoteles boutique, tiendas de artesanías, guías turísticos y más.'
  }, {
    question: '¿Qué tipo de experiencias puedo encontrar?',
    answer: 'Magic Ways ofrece experiencias auténticas como talleres de artesanías tradicionales, tours gastronómicos, recorridos históricos, actividades culturales y encuentros con artesanos locales. Cada experiencia está diseñada para sumergirte en la cultura local.'
  }, {
    question: '¿Cómo apoyo a la economía local usando la app?',
    answer: 'Cada compra, reserva o servicio que contratas a través de Magic Ways va directamente a los comercios locales. Eliminamos intermediarios innecesarios, asegurando que el 100% de tu gasto turístico beneficie a las comunidades locales y preserve las tradiciones culturales.'
  }, {
    question: '¿Necesito internet para usar la app?',
    answer: 'Aunque Magic Ways funciona mejor con conexión a internet, muchas funciones están disponibles offline. Puedes descargar mapas y información de destinos para consultarlos sin conexión. Las funciones de pago y comunicación con comercios requieren internet.'
  }, {
    question: '¿Cómo puedo dejar reseñas y calificaciones?',
    answer: 'Después de cada experiencia o compra, te invitamos a calificar y dejar una reseña. Esto ayuda a otros viajeros a tomar decisiones informadas y permite a los comercios locales mejorar continuamente sus servicios.'
  }];
  const toggleItem = (index: number) => {
    setOpenItems(prev => prev.includes(index) ? prev.filter(item => item !== index) : [...prev, index]);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#fffbf0] rounded-b-[60px] md:rounded-b-[100px] relative z-50 overflow-hidden reveal-on-scroll">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-zinc-900 mb-6 leading-tight">
            Preguntas <br />
            <span className="text-primary italic">Frecuentes</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Resolvemos las dudas más comunes sobre Magic Ways y cómo aprovechar al máximo tu experiencia.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-0 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 bg-white overflow-hidden">
              <CardContent className="p-1">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-5 md:p-6 text-left flex items-center justify-between hover:bg-zinc-50/50 transition-smooth group"
                  aria-expanded={openItems.includes(index)}
                  aria-controls={`faq-content-${index}`}
                >
                  <span className="text-lg md:text-xl font-bold text-zinc-900 group-hover:text-primary transition-colors leading-tight pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openItems.includes(index) ? 'bg-primary text-white rotate-0' : 'bg-zinc-100 text-zinc-400 -rotate-180'}`}>
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </div>
                </button>
                
                <div 
                  id={`faq-content-${index}`}
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openItems.includes(index) 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 md:px-8 pb-8 text-zinc-500 text-base md:text-lg leading-relaxed font-medium">
                    {faq.answer}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQSection;