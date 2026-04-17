import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import logoDark from '@/assets/logo-dark.png';
import logoWhite from '@/assets/logo-white.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Blog', href: '/blog' }
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    
    if (href.startsWith('/')) {
      navigate(href);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/' + href);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-smooth ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-elegant' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={isScrolled ? logoDark : logoWhite} 
              alt="Magic Ways"
              className="w-10 h-10 transition-smooth"
            />
            <span className={`font-heading font-bold text-xl transition-smooth ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>Magic Ways</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`transition-smooth font-medium ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-white hover:text-white/80'
                }`}
              >
                {item.name}
              </button>
            ))}
            <Link to="/registrar-negocio">
              <Button 
                variant={isScrolled ? "default" : "outline"}
                className={isScrolled 
                  ? "" 
                  : "bg-transparent text-white border-white hover:bg-white hover:!text-primary-dark transition-colors duration-300"
                }
              >
                Registrar Negocio
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`md:hidden ${isScrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent/50 transition-smooth"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 py-4">
                <Link to="/registrar-negocio" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Registrar Negocio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;