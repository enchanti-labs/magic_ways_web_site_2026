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
    <section id="inicio" className="relative min-h-[120vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${scrollY * 0.3}px)`
        }} 
      />

      {/* Overlay */}
      <div className="absolute inset-0 gradient-overlay opacity-70" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-20 md:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left mb-20 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 animate-fade-in-up">
              Conecta con la Magia de México
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in-up-delay">
              Descubre Pueblos Mágicos, conecta con comercios locales y vive experiencias únicas
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button size="lg" className="gradient-hero text-white font-semibold px-8 py-4 rounded-xl hover:scale-105 transition-bounce shadow-mexican">
                <AppStoreIcon />
                App Store
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white hover:bg-white font-semibold px-8 py-4 rounded-xl hover:scale-105 transition-bounce text-white hover:!text-primary-dark duration-300">
                <GooglePlayIcon />
                Google Play
              </Button>
            </div>

            {/* Statistics Bar */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-scale-in">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white bg-transparent">32</div>
                  <div className="text-white/80 text-sm">Estados</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">177+</div>
                  <div className="text-white/80 text-sm">Pueblos Mágicos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">1K+</div>
                  <div className="text-white/80 text-sm">Comercios Activos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - App Screens Layout */}
          <div className="relative flex justify-center lg:justify-end items-center h-[500px] md:h-[600px] mt-8 lg:mt-0">
            {/* Left Back Screen */}
            <div 
              className="absolute left-0 md:left-auto md:right-[40%] w-40 md:w-56 h-auto transition-transform duration-200 ease-out z-0"
              style={{ transform: `translateY(${scrollY * 0.15}px) rotate(-8deg) translateX(-10%)` }}
            >
              <img
                src={appScreenLeft}
                alt="Merchant Detail"
                className="w-full h-auto rounded-[2.5rem] shadow-2xl border-4 border-white/20 backdrop-blur-sm"
              />
            </div>

            {/* Right Back Screen */}
            <div 
              className="absolute right-0 md:right-0 w-40 md:w-56 h-auto transition-transform duration-200 ease-out z-0"
              style={{ transform: `translateY(${scrollY * 0.25}px) rotate(8deg) translateX(10%)` }}
            >
              <img
                src={appScreenRight}
                alt="Destination Detail"
                className="w-full h-auto rounded-[2.5rem] shadow-2xl border-4 border-white/20 backdrop-blur-sm"
              />
            </div>

            {/* Center Front Screen */}
            <div 
              className="relative w-48 md:w-64 h-auto transition-transform duration-100 ease-out z-10"
              style={{ transform: `translateY(${scrollY * -0.05}px)` }}
            >
              <img
                src={appScreenCenter}
                alt="Explore Mexico App"
                className="w-full h-auto rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Logo at the bottom center */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center z-10">
        <img
          src={logoWhiteWithText}
          alt="Magic Ways"
          className="h-16 md:h-20 w-auto animate-fade-in-up"
        />
      </div>
    </section>
  );
};

export default HeroSection;