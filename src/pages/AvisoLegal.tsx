import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import FooterSection from '@/components/sections/FooterSection';
import logoDark from '@/assets/logo-dark.png';

const AvisoLegal = () => {
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
          Aviso Legal
        </h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Última actualización: Enero 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Información de la Empresa</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Razón Social:</strong> Magic Ways México S.A. de C.V.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Domicilio:</strong> Ciudad de México, México
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Email:</strong> legal@magicways.mx
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Teléfono:</strong> +52 55 1234 5678
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Sitio web:</strong> www.magicways.mx
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Objeto Social</h2>
              <p className="text-gray-700 leading-relaxed">
                Magic Ways es una plataforma digital dedicada a conectar viajeros con experiencias auténticas 
                en los Sitios Mágicos de México. Facilitamos el descubrimiento de comercios locales, 
                experiencias culturales y servicios turísticos de calidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Condiciones de Uso del Sitio Web</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El acceso y uso de este sitio web implica la aceptación plena de las siguientes condiciones:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>El uso del sitio es gratuito, salvo en lo relativo al coste de la conexión a internet</li>
                <li>El usuario se compromete a hacer un uso adecuado de los contenidos y servicios</li>
                <li>Está prohibido utilizar el sitio para actividades contrarias a la ley o que puedan dañar los derechos de terceros</li>
                <li>Magic Ways se reserva el derecho de modificar el contenido del sitio sin previo aviso</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Propiedad Intelectual</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Todos los contenidos de este sitio web, incluyendo textos, fotografías, gráficos, imágenes, 
                iconos, tecnología, software, links y demás contenidos audiovisuales o sonoros, así como 
                su diseño gráfico y códigos fuente, son propiedad intelectual de Magic Ways.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Queda prohibida la reproducción, distribución, comunicación pública, transformación o 
                cualquier otra actividad que se pueda realizar con los contenidos de este sitio web 
                sin la autorización expresa y por escrito de Magic Ways.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitación de Responsabilidad</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Magic Ways no se hace responsable de:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Los daños y perjuicios causados por fallos o desconexiones en las redes de telecomunicaciones</li>
                <li>La calidad de los servicios prestados por terceros proveedores</li>
                <li>Los contenidos y servicios ofrecidos en sitios web enlazados</li>
                <li>La veracidad y licitud de las informaciones aportadas por los usuarios</li>
                <li>El uso indebido o ilícito que los usuarios puedan hacer de este sitio web</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Enlaces a Terceros</h2>
              <p className="text-gray-700 leading-relaxed">
                Este sitio web puede contener enlaces a sitios web de terceros. Magic Ways no controla 
                estos sitios externos y no se hace responsable de sus contenidos, políticas de privacidad 
                o prácticas. Le recomendamos revisar los términos y condiciones de cualquier sitio de 
                terceros que visite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modificaciones</h2>
              <p className="text-gray-700 leading-relaxed">
                Magic Ways se reserva el derecho de realizar modificaciones en este aviso legal sin 
                previo aviso. Las modificaciones entrarán en vigor desde el momento de su publicación 
                en el sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Jurisdicción y Ley Aplicable</h2>
              <p className="text-gray-700 leading-relaxed">
                Este aviso legal se rige por la legislación mexicana. Para cualquier controversia que 
                pudiera derivarse del acceso o uso de este sitio web, Magic Ways y el usuario se 
                someten a la jurisdicción de los tribunales de la Ciudad de México, México.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contacto</h2>
              <p className="text-gray-700 leading-relaxed">
                Para cualquier consulta relacionada con este aviso legal, puede contactarnos a través de:
              </p>
              <div className="mt-3 text-gray-700">
                <p>Email: <a href="mailto:legal@magic-ways.com" className="text-primary hover:underline">legal@magic-ways.com</a></p>
                <p>Teléfono: +52 55 1234 5678</p>
              </div>
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

export default AvisoLegal;