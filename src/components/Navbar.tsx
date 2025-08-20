
import React, { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
    // Verifica se está na página inicial
    if (window.location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    } else {
      // Se não estiver na página inicial, redireciona para a página inicial com âncora
      window.location.href = `/#${sectionId}`;
    }
  };

  const isActive = (path: string) => location.pathname === path;

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
            <Link to="/" className="text-2xl font-display font-bold text-arsenal-dark">
              Arsenal<span className="text-whatsapp-DEFAULT">Cache</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('precos')}
              className="text-gray-700 hover:text-arsenal-DEFAULT transition-colors"
            >
              Planos e Preços
            </button>
            <Link 
              to="/servidores" 
              className={cn(
                "transition-colors",
                isActive('/servidores') 
                  ? "text-arsenal-DEFAULT font-medium" 
                  : "text-gray-700 hover:text-arsenal-DEFAULT"
              )}
            >
              Servidores
            </Link>
            <Link 
              to="/ia-conecta" 
              className={cn(
                "transition-colors", 
                isActive('/ia-conecta') 
                  ? "text-arsenal-DEFAULT font-medium" 
                  : "text-gray-700 hover:text-arsenal-DEFAULT"
              )}
            >
              IA Conecta
            </Link>
            <Link 
              to="/pacote-n8n" 
              className={cn(
                "transition-colors", 
                isActive('/pacote-n8n') 
                  ? "text-arsenal-DEFAULT font-medium" 
                  : "text-gray-700 hover:text-arsenal-DEFAULT"
              )}
            >
              Pacote N8N
            </Link>
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
                onClick={() => scrollToSection('precos')}
                className="text-gray-700 hover:text-arsenal-DEFAULT py-2 transition-colors text-left"
              >
                Planos e Preços
              </button>
              <Link 
                to="/servidores"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "py-2 transition-colors",
                  isActive('/servidores') 
                    ? "text-arsenal-DEFAULT font-medium" 
                    : "text-gray-700 hover:text-arsenal-DEFAULT"
                )}
              >
                Servidores
              </Link>
              <Link 
                to="/ia-conecta"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "py-2 transition-colors", 
                  isActive('/ia-conecta') 
                    ? "text-arsenal-DEFAULT font-medium" 
                    : "text-gray-700 hover:text-arsenal-DEFAULT"
                )}
              >
                IA Conecta
              </Link>
              <Link 
                to="/pacote-n8n"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "py-2 transition-colors", 
                  isActive('/pacote-n8n') 
                    ? "text-arsenal-DEFAULT font-medium" 
                    : "text-gray-700 hover:text-arsenal-DEFAULT"
                )}
              >
                Pacote N8N
              </Link>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-700 hover:text-arsenal-DEFAULT py-2 transition-colors text-left"
              >
                FAQ
              </button>
              
              <Button 
                variant="default" 
                className="gap-2 bg-arsenal-DEFAULT hover:bg-arsenal-dark"
                onClick={() => {
                  scrollToSection('contato');
                  setIsOpen(false);
                }}
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
