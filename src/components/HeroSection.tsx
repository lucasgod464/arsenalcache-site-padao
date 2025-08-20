
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
        <div className="text-center max-w-4xl mx-auto fade-in-section">
          <span className="status-badge-primary mb-6">
            Solução completa para WhatsApp
          </span>
          <h1 className="hero-title">
            A Plataforma Definitiva de <span className="gradient-text">WhatsApp Business</span> para Sua Empresa
          </h1>
          <p className="section-subtitle text-neutral-700">
            Sistema completo com <strong>usuários ilimitados</strong>, <strong>conexões sem limite</strong> e personalização total. Transforme seu atendimento em uma máquina de vendas 24/7.
          </p>
          
          {/* Estatísticas em destaque */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-8 mb-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-1">∞</div>
              <div className="text-neutral-600 text-sm">Usuários</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-secondary mb-1">∞</div>
              <div className="text-neutral-600 text-sm">Conexões</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-accent mb-1">24/7</div>
              <div className="text-neutral-600 text-sm">Automação</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-brand-secondary/10 flex items-center justify-center mb-2 hover-scale">
                <MessageCircle className="w-6 h-6 text-brand-secondary" />
              </div>
              <span className="text-sm text-neutral-600">Conexões Ilimitadas</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center mb-2 hover-scale">
                <Users className="w-6 h-6 text-brand-primary" />
              </div>
              <span className="text-sm text-neutral-600">Usuários Ilimitados</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-brand-secondary/10 flex items-center justify-center mb-2 hover-scale">
                <Tag className="w-6 h-6 text-brand-secondary" />
              </div>
              <span className="text-sm text-neutral-600">Sistema Whitelabel</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center mb-2 hover-scale">
                <Rocket className="w-6 h-6 text-brand-primary" />
              </div>
              <span className="text-sm text-neutral-600">Revenda Ilimitada</span>
            </div>
          </div>
        </div>
        
        {/* Vídeo centralizado */}
        <div className="relative fade-in-section max-w-4xl mx-auto">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute top-20 -left-10 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl"></div>
          
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
          
          <div className="absolute -bottom-4 right-8 info-card rounded-xl shadow-lg max-w-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-medium">Atendimento profissional</h3>
                <p className="text-xs text-neutral-500">Via WhatsApp</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-secondary"></div>
              <span className="text-xs text-neutral-600">Personalizado para sua marca</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/80 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
