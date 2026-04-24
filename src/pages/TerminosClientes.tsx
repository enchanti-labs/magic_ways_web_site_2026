import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import FooterSection from '@/components/sections/FooterSection';
import logoDark from '@/assets/logo-dark.png';

const TerminosClientes = () => {
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
          <div className="flex items-center space-x-3">
            <img 
              src={logoDark} 
              alt="Magic Ways"
              className="w-10 h-10"
            />
            <span className="font-heading font-bold text-xl text-foreground">Magic Ways</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-gray-900 mb-8">
          Términos y Condiciones - Clientes
        </h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Última actualización: Enero 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Al utilizar los servicios de Magic Ways como cliente, usted acepta estar vinculado por estos términos y condiciones. 
                Nuestro servicio está diseñado para conectar viajeros con experiencias auténticas en los Sitios Mágicos de México.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Debe tener al menos 18 años para utilizar nuestros servicios de forma independiente, o contar con 
                supervisión parental si es menor de edad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Servicios para Clientes</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Como cliente de Magic Ways, tendrá acceso a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Búsqueda y descubrimiento de Sitios Mágicos</li>
                <li>Información detallada sobre destinos y actividades</li>
                <li>Reservas y conexión con comercios locales</li>
                <li>Recomendaciones personalizadas basadas en sus preferencias</li>
                <li>Sistema de valoraciones y reseñas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Responsabilidades del Cliente</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Como cliente, se compromete a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Proporcionar información personal veraz y actualizada</li>
                <li>Respetar las normas y costumbres locales de los destinos</li>
                <li>Tratar con respeto a comerciantes y comunidades locales</li>
                <li>Cumplir con los horarios y compromisos acordados</li>
                <li>Dejar reseñas honestas y constructivas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Reservas y Pagos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Las reservas realizadas a través de Magic Ways están sujetas a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Confirmación por parte del comercio local</li>
                <li>Políticas de cancelación específicas de cada proveedor</li>
                <li>Disponibilidad en tiempo real</li>
                <li>Métodos de pago seguros y verificados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Política de Cancelaciones</h2>
              <p className="text-gray-700 leading-relaxed">
                Las cancelaciones están sujetas a las políticas individuales de cada comercio. 
                Magic Ways facilitará el proceso pero no se hace responsable de las políticas 
                de reembolso de terceros proveedores.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contacto</h2>
              <p className="text-gray-700 leading-relaxed">
                Para soporte como cliente, contáctanos en: 
                <a href="mailto:clientes@magic-ways.com" className="text-primary hover:underline ml-1">
                  clientes@magic-ways.com
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

export default TerminosClientes;