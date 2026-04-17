import { useEffect } from 'react';
import Navbar from './Navbar';
import WhatsAppFloat from './WhatsAppFloat';
import HeroSection from './sections/HeroSection';
import TrustedBySection from './sections/TrustedBySection';
import FeaturesSection from './sections/FeaturesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import DestinationsSection from './sections/DestinationsSection';
import FAQSection from './sections/FAQSection';
import CTASection from './sections/CTASection';
import StatsSection from './sections/StatsSection';
import FooterSection from './sections/FooterSection';

const MagicWaysLanding = () => {
  // Scroll reveal animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all elements with reveal-on-scroll class
    const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');
    elementsToReveal.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Global Background Blobs */}
      <div className="bg-blob blob-primary w-[600px] h-[600px] -top-20 -right-20" />
      <div className="bg-blob blob-gold w-[500px] h-[500px] top-[20%] -left-20" />
      <div className="bg-blob blob-cyan w-[700px] h-[700px] top-[40%] -right-40" />
      <div className="bg-blob blob-magenta w-[600px] h-[600px] top-[60%] -left-40 opacity-10" />
      <div className="bg-blob blob-primary w-[800px] h-[800px] bottom-0 -right-20" />

      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <TrustedBySection />
        <FeaturesSection />
        <TestimonialsSection />
        <DestinationsSection />
        <StatsSection />
        <FAQSection />
        <CTASection />
      </main>

      {/* Footer */}
      <FooterSection />

      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default MagicWaysLanding;