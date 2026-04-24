import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import FooterSection from '@/components/sections/FooterSection';

const TerminosCondiciones = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">MW</span>
            </div>
            <span className="font-heading font-bold text-xl text-foreground">Magic Ways</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-gray-900 mb-8">
          Términos y Condiciones
        </h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Última actualización: Enero 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Uso del Servicio</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Al acceder y utilizar los servicios de Magic Ways, usted acepta cumplir con estos términos y condiciones. 
                Nuestro servicio está diseñado para conectar viajeros con experiencias auténticas en los Sitios Mágicos de México.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Debe tener al menos 18 años para utilizar nuestros servicios de forma independiente, o contar con 
                supervisión parental si es menor de edad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Responsabilidades del Usuario</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Como usuario de Magic Ways, usted se compromete a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Proporcionar información veraz y actualizada</li>
                <li>Respetar las normas locales y culturales de los destinos visitados</li>
                <li>Tratar con respeto a los comerciantes y comunidades locales</li>
                <li>No utilizar el servicio para actividades ilegales o fraudulentas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Servicios Ofrecidos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Magic Ways ofrece una plataforma digital que facilita:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Información sobre Sitios Mágicos de México</li>
                <li>Conexión con comercios y servicios locales</li>
                <li>Recomendaciones personalizadas de experiencias</li>
                <li>Herramientas de planificación de viajes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Limitación de Responsabilidad</h2>
              <p className="text-gray-700 leading-relaxed">
                Magic Ways actúa como intermediario entre usuarios y proveedores de servicios locales. 
                No nos hacemos responsables por la calidad de los servicios proporcionados por terceros, 
                cambios en las condiciones de viaje, o eventos fuera de nuestro control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Propiedad Intelectual</h2>
              <p className="text-gray-700 leading-relaxed">
                Todo el contenido, diseño, logos y materiales de Magic Ways están protegidos por derechos de autor 
                y otras leyes de propiedad intelectual. Está prohibida su reproducción sin autorización expresa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Modificaciones</h2>
              <p className="text-gray-700 leading-relaxed">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contacto</h2>
              <p className="text-gray-700 leading-relaxed">
                Para cualquier consulta sobre estos términos, puede contactarnos en: 
                <a href="mailto:legal@magic-ways.com" className="text-primary hover:underline ml-1">
                  legal@magic-ways.com
                </a>
              </p>
            </section>
          </div>
        </div>

        {/* Back to top button */}
        <div className="mt-12 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al Inicio
          </Link>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default TerminosCondiciones;