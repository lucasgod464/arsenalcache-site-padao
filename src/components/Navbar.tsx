
import React, { useEffect, useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isIaConecta = location.pathname === '/ia-conecta';
  const isServidores = location.pathname === '/servidores';

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
    if (location.pathname === '/') {
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
            <NavigationMenu className="z-50">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "text-gray-700 hover:text-arsenal-DEFAULT transition-colors bg-transparent",
                      (isIaConecta || isServidores) && "text-arsenal-DEFAULT"
                    )}
                  >
                    Produtos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white p-2 rounded-md shadow-lg">
                    <div className="grid grid-cols-2 gap-3 p-4 w-[450px]">
                      <Button variant="ghost" className="justify-start" onClick={() => scrollToSection('sistema-golden')}>
                        <div className="text-left">
                          <div className="font-medium">Whaticket Profissional</div>
                          <div className="text-xs text-muted-foreground">Multiatendimento completo</div>
                        </div>
                      </Button>
                      <Button variant="ghost" className="justify-start" onClick={() => scrollToSection('funcionalidades')}>
                        <div className="text-left">
                          <div className="font-medium">Chatbot Inteligente</div>
                          <div className="text-xs text-muted-foreground">Automatize seu atendimento</div>
                        </div>
                      </Button>
                      <Link to="/ia-conecta" className="w-full">
                        <Button 
                          variant="ghost" 
                          className={cn(
                            "justify-start w-full",
                            isIaConecta && "bg-purple-50"
                          )}
                        >
                          <div className="text-left">
                            <div className="font-medium">IA Conecta</div>
                            <div className="text-xs text-muted-foreground">Solução de IA Sem Limites</div>
                          </div>
                        </Button>
                      </Link>
                      <Link to="/servidores" className="w-full">
                        <Button 
                          variant="ghost" 
                          className={cn(
                            "justify-start w-full",
                            isServidores && "bg-blue-50"
                          )}
                        >
                          <div className="text-left">
                            <div className="font-medium">Servidores</div>
                            <div className="text-xs text-muted-foreground">VPS e Dedicados</div>
                          </div>
                        </Button>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-arsenal-DEFAULT transition-colors bg-transparent">
                    Soluções
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white p-2 rounded-md shadow-lg">
                    <div className="grid gap-3 p-4 w-[350px]">
                      <Button variant="ghost" className="justify-start" onClick={() => scrollToSection('sistema-golden')}>
                        <div className="text-left">
                          <div className="font-medium">Para Empresas</div>
                          <div className="text-xs text-muted-foreground">Atendimento empresarial</div>
                        </div>
                      </Button>
                      <Button variant="ghost" className="justify-start">
                        <div className="text-left">
                          <div className="font-medium">Para Revendedores</div>
                          <div className="text-xs text-muted-foreground">Faça sua carteira de clientes</div>
                        </div>
                      </Button>
                      <Button variant="ghost" className="justify-start" onClick={() => scrollToSection('precos')}>
                        <div className="text-left">
                          <div className="font-medium">Planos Personalizados</div>
                          <div className="text-xs text-muted-foreground">Atendemos sua necessidade</div>
                        </div>
                      </Button>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
            <Link 
              to="/ia-conecta" 
              className={cn(
                "transition-colors",
                isIaConecta 
                  ? "text-arsenal-DEFAULT font-medium" 
                  : "text-gray-700 hover:text-arsenal-DEFAULT"
              )}
            >
              IA Conecta
            </Link>
            <Link 
              to="/servidores" 
              className={cn(
                "transition-colors",
                isServidores 
                  ? "text-arsenal-DEFAULT font-medium" 
                  : "text-gray-700 hover:text-arsenal-DEFAULT"
              )}
            >
              Servidores
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center justify-between w-full text-left py-2">
                    <span>Produtos</span>
                    <ChevronDown size={16} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuItem onClick={() => scrollToSection('sistema-golden')}>
                    Whaticket Profissional
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection('funcionalidades')}>
                    Chatbot Inteligente
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/ia-conecta" className="w-full block">
                      IA Conecta
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/servidores" className="w-full block">
                      Servidores
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center justify-between w-full text-left py-2">
                    <span>Soluções</span>
                    <ChevronDown size={16} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuItem onClick={() => scrollToSection('sistema-golden')}>
                    Para Empresas
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Para Revendedores
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection('precos')}>
                    Planos Personalizados
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <button 
                onClick={() => scrollToSection('precos')}
                className="text-gray-700 hover:text-arsenal-DEFAULT py-2 transition-colors text-left"
              >
                Planos e Preços
              </button>
              <button 
                onClick={() => scrollToSection('funcionalidades')}
                className="text-gray-700 hover:text-arsenal-DEFAULT py-2 transition-colors text-left"
              >
                Funcionalidades
              </button>
              <Link 
                to="/ia-conecta"
                className={cn(
                  "py-2 transition-colors text-left",
                  isIaConecta 
                    ? "text-arsenal-DEFAULT font-medium" 
                    : "text-gray-700 hover:text-arsenal-DEFAULT"
                )}
              >
                IA Conecta
              </Link>
              <Link 
                to="/servidores"
                className={cn(
                  "py-2 transition-colors text-left",
                  isServidores 
                    ? "text-arsenal-DEFAULT font-medium" 
                    : "text-gray-700 hover:text-arsenal-DEFAULT"
                )}
              >
                Servidores
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
