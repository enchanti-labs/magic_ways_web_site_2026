import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import FooterSection from '@/components/sections/FooterSection';
import logoDark from '@/assets/logo-dark.png';

const TerminosRepartidores = () => {
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
          Términos y Condiciones - Repartidores
        </h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Última actualización: Enero 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Registro como Repartidor</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Al registrarse como repartidor en Magic Ways, acepta estos términos específicos para 
                prestadores de servicios de entrega y logística en Sitios Mágicos de México.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Debe ser mayor de edad, contar con documentación vigente y vehículo propio 
                o acceso a medios de transporte confiables.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Servicios para Repartidores</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Como repartidor, tendrá acceso a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>App móvil para gestión de entregas</li>
                <li>Sistema de asignación de pedidos</li>
                <li>Seguimiento de rutas y entregas</li>
                <li>Historial de ganancias y pagos</li>
                <li>Soporte técnico y operativo</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Responsabilidades del Repartidor</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Como repartidor, se compromete a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Completar entregas de manera oportuna y segura</li>
                <li>Mantener comunicación con clientes y negocios</li>
                <li>Cuidar la integridad de los productos transportados</li>
                <li>Seguir las rutas optimizadas sugeridas por la app</li>
                <li>Mantener una actitud profesional y cortés</li>
                <li>Cumplir con horarios y disponibilidad declarada</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Pagos y Compensaciones</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El sistema de pagos incluye:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Tarifa base por entrega completada</li>
                <li>Bonificaciones por distancia y complejidad</li>
                <li>Incentivos por puntualidad y calificaciones altas</li>
                <li>Pagos semanales automáticos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Requisitos Técnicos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para operar como repartidor necesita:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Smartphone con GPS y conexión a internet</li>
                <li>Vehículo en buen estado (bicicleta, motocicleta o auto)</li>
                <li>Equipo de seguridad apropiado</li>
                <li>Documentación vigente (licencia, seguro, etc.)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contacto para Repartidores</h2>
              <p className="text-gray-700 leading-relaxed">
                Para soporte operativo, contáctanos en: 
                <a href="mailto:repartidores@magic-ways.com" className="text-primary hover:underline ml-1">
                  repartidores@magic-ways.com
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

export default TerminosRepartidores;