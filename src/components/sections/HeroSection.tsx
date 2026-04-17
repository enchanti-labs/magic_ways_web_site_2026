import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import heroImage from '@/assets/hero-pueblo-magico.jpg';
import logoWhiteWithText from '@/assets/logo-white-with-text.png';
import heroApp1 from '@/assets/hero-app-1.png';
import heroApp2 from '@/assets/hero-app-2.png';
import heroApp3 from '@/assets/hero-app-3.png';

// Custom SVG Icons for App Store and Google Play
const AppStoreIcon = () => (
  <svg viewBox="0 0 384 512" fill="currentColor" className="w-5 h-5 mr-2">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-22.2-84.6-21.8-44 1.1-85.1 23.9-107.4 60.7-45.1 74-11.6 183.8 31.1 245.8 21.1 30.6 46 64 78.4 62.7 31.1-1.3 43.1-20.3 80.8-20.3 37.8 0 48.4 20.3 80.8 19.7 33.6-.7 54.4-30.7 75.6-61.1 24.3-35.3 34.3-69.4 34.8-71.2-1.1-.2-67.1-25.9-67.3-100.9zM245.7 114.3c15.6-18.9 26.1-45.3 23.2-71.6-23-1-49.9 13.4-66.4 32.8-14.8 17.2-27.7 44.3-24.2 69.8 25.3 2 50.3-11.8 67.4-31z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5 mr-2">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.2 60.1 60.1L104.6 499z" />
  </svg>
);

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  // Mapping to local assets
  const appScreenLeft = heroApp1;
  const appScreenRight = heroApp2;
  const appScreenCenter = heroApp3;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${scrollY * 0.2}px)`
        }}
      >
        <div className="absolute inset-0 gradient-overlay opacity-90" />
      </div>

      {/* Main Content Grid */}
      <div className="container relative z-10 mx-auto px-4 flex-grow flex items-center pt-12 md:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left: App Screens */}
          <div className="relative flex justify-center lg:justify-start items-center h-[400px] md:h-[600px] order-2 lg:order-1">
            <div 
              className="absolute left-0 md:left-20 w-48 md:w-64 z-10 transition-transform duration-300"
              style={{ transform: `translateY(${scrollY * -0.05}px)` }}
            >
              <img
                src={appScreenCenter}
                alt="Magic Ways App"
                className="w-full h-auto rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] border-4 border-white/20"
              />
            </div>
            <div 
              className="absolute left-20 md:left-48 w-44 md:w-60 blur-[1px] opacity-80 z-0"
              style={{ transform: `translateY(${scrollY * 0.1}px) rotate(5deg)` }}
            >
              <img
                src={appScreenRight}
                alt="Map View"
                className="w-full h-auto rounded-[3rem] shadow-2xl border-4 border-white/10"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 animate-fade-in-up leading-tight">
              Conecta con la <br />
              <span className="italic">Magia de México</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-medium max-w-xl animate-fade-in-up-delay">
              Descubre Pueblos Mágicos, conecta con comercios locales y vive experiencias únicas
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up-delay">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-light text-white font-bold px-10 py-7 rounded-full transition-bounce shadow-mexican text-lg flex items-center w-full sm:w-auto">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <AppStoreIcon />
                  App Store
                </a>
              </Button>
              <Button asChild size="lg" className="bg-primary hover:bg-primary-light text-white font-bold px-10 py-7 rounded-full transition-bounce shadow-mexican text-lg flex items-center w-full sm:w-auto">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.magicways.customers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <GooglePlayIcon />
                  Google Play
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Separator - More Pronounced */}
      <div className="wave-separator">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" transform="translate(0 120) scale(1 -1)"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;