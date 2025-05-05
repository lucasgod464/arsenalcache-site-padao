
import React, { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 backdrop-blur-sm",
        scrolled ? "bg-white/80 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-display font-bold text-arsenal-dark">
              IA<span className="text-whatsapp-DEFAULT">Conecta</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sistema-golden')}
              className="text-gray-700 hover:text-arsenal-DEFAULT transition-colors"
            >
              Recursos
            </button>
            <button 
              onClick={() => scrollToSection('ia-conecta')}
              className="text-gray-700 hover:text-arsenal-DEFAULT transition-colors"
            >
              IA Conecta
            </button>
            <button 
              onClick={() => scrollToSection('precos')}
              className="text-gray-700 hover:text-arsenal-DEFAULT transition-colors"
            >
              Planos e Preços
            </button>
            <button 
              onClick={() => scrollToSection('funcionalidades')}
              className="text-gray-700 hover:text-arsenal-DEFAULT transition-colors"
            >
              Funcionalidades
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-arsenal-DEFAULT transition-colors"
            >
              FAQ
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="gap-2 text-arsenal-dark"
              onClick={() => scrollToSection('contato')}
            >
              <Phone size={16} />
              <span>Agendar demonstração</span>
            </Button>
          </div>

          {/* Mobile Navigation Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-arsenal-DEFAULT"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg animate-fade-in py-4">
            <div className="flex flex-col space-y-4 px-6">
              <button 
                onClick={() => scrollToSection('sistema-golden')}
                className="text-gray-700 hover:text-arsenal-DEFAULT py-2 transition-colors"
              >
                Recursos
              </button>
              <button 
                onClick={() => scrollToSection('ia-conecta')}
                className="text-gray-700 hover:text-arsenal-DEFAULT py-2 transition-colors"
              >
                IA Conecta
              </button>
              <button 
                onClick={() => scrollToSection('precos')}
                className="text-gray-700 hover:text-arsenal-DEFAULT py-2 transition-colors"
              >
                Planos e Preços
              </button>
              <button 
                onClick={() => scrollToSection('funcionalidades')}
                className="text-gray-700 hover:text-arsenal-DEFAULT py-2 transition-colors"
              >
                Funcionalidades
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-700 hover:text-arsenal-DEFAULT py-2 transition-colors"
              >
                FAQ
              </button>
              
              <Button 
                variant="default" 
                className="gap-2 bg-arsenal-DEFAULT hover:bg-arsenal-dark"
                onClick={() => scrollToSection('contato')}
              >
                <Phone size={16} />
                <span>Agendar demonstração</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
