import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import FooterSection from '@/components/sections/FooterSection';
import logoDark from '@/assets/logo-dark.png';

const TerminosNegocios = () => {
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
          Términos y Condiciones - Negocios
        </h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Última actualización: Enero 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Registro como Negocio Afiliado</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Al registrarse como negocio en Magic Ways, acepta estos términos específicos para comercios y 
                proveedores de servicios en Sitios Mágicos de México. Su participación ayuda a conectar 
                viajeros con experiencias auténticas locales.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Debe ser un negocio legalmente establecido y con los permisos necesarios para operar 
                en su localidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Servicios para Negocios</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Como negocio afiliado, tendrá acceso a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Panel de administración para gestionar su perfil</li>
                <li>Sistema de reservas y gestión de disponibilidad</li>
                <li>Herramientas de promoción y marketing</li>
                <li>Análisis de rendimiento y estadísticas</li>
                <li>Soporte especializado para comercios</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Obligaciones del Negocio</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Como negocio afiliado, se compromete a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Mantener información actualizada y veraz sobre sus servicios</li>
                <li>Honrar todas las reservas confirmadas</li>
                <li>Proporcionar servicios de calidad conforme a lo ofrecido</li>
                <li>Mantener precios competitivos y transparentes</li>
                <li>Responder a consultas de clientes de manera oportuna</li>
                <li>Cumplir con todas las regulaciones locales aplicables</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Comisiones y Pagos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El modelo de comisiones incluye:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Comisión por reserva exitosa según el plan contratado</li>
                <li>Pagos procesados de forma segura y transparente</li>
                <li>Reportes detallados de transacciones</li>
                <li>Opciones de pago flexibles</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Políticas de Calidad</h2>
              <p className="text-gray-700 leading-relaxed">
                Los negocios deben mantener estándares de calidad altos. Magic Ways se reserva 
                el derecho de suspender cuentas que no cumplan con los estándares esperados 
                o reciban quejas recurrentes de clientes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contacto para Negocios</h2>
              <p className="text-gray-700 leading-relaxed">
                Para soporte comercial, contáctanos en: 
                <a href="mailto:negocios@magic-ways.com" className="text-primary hover:underline ml-1">
                  negocios@magic-ways.com
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

export default TerminosNegocios;