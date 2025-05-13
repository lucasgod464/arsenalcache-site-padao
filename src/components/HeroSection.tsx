
import React, { useEffect } from 'react';
import { Phone, MessageCircle, Users, Tag, Rocket } from 'lucide-react';

const HeroSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-section');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        // Check if the element is in the viewport
        if(position.top < window.innerHeight - 100) {
          element.classList.add('is-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-gradient pt-32 pb-16 md:pt-36 md:pb-24 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl fade-in-section">
            <span className="inline-block py-1 px-3 rounded-full bg-arsenal-light/20 text-arsenal-dark text-sm font-medium mb-6">
              Solução completa para WhatsApp
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Revolucione seu <span className="text-gradient">Atendimento</span> com <span className="text-gradient">Whaticket Profissional</span>
            </h1>
            <p className="text-gray-700 text-lg mb-8">
              Uma plataforma whitelabel com usuários e conexões ilimitadas. Personalize com sua marca, automatize atendimentos e revenda sem limitações.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contato')}
                className="btn-primary"
              >
                Agendar demonstração grátis
              </button>
              <button 
                onClick={() => scrollToSection('precos')}
                className="btn-outline"
              >
                Ver planos e preços
              </button>
            </div>
            
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-whatsapp-light/10 flex items-center justify-center mb-2">
                  <MessageCircle className="w-6 h-6 text-whatsapp-DEFAULT" />
                </div>
                <span className="text-sm text-gray-600">Conexões Ilimitadas</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-arsenal-light/10 flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-arsenal-DEFAULT" />
                </div>
                <span className="text-sm text-gray-600">Usuários Ilimitados</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-whatsapp-light/10 flex items-center justify-center mb-2">
                  <Tag className="w-6 h-6 text-whatsapp-DEFAULT" />
                </div>
                <span className="text-sm text-gray-600">Sistema Whitelabel</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-arsenal-light/10 flex items-center justify-center mb-2">
                  <Rocket className="w-6 h-6 text-arsenal-DEFAULT" />
                </div>
                <span className="text-sm text-gray-600">Revenda Ilimitada</span>
              </div>
            </div>
          </div>
          
          <div className="relative fade-in-section">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-arsenal-light/20 rounded-full blur-3xl"></div>
            <div className="absolute top-20 -left-10 w-64 h-64 bg-whatsapp-light/20 rounded-full blur-3xl"></div>
            
            <div className="glass-card rounded-2xl p-1 shadow-2xl relative z-10 animate-float overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe 
                  src="https://www.youtube.com/embed/ED3y3CfQYSU" 
                  title="Arsenal Cache MultiAtendimento" 
                  className="w-full h-full rounded-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <div className="absolute -bottom-4 right-8 glass-card rounded-xl p-4 shadow-lg max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-whatsapp-DEFAULT flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-medium">Atendimento profissional</h3>
                  <p className="text-xs text-gray-500">Via WhatsApp</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-xs text-gray-600">Personalizado para sua marca</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/80 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
