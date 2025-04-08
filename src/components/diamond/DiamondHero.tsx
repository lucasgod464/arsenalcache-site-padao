
import React from 'react';
import { MessageCircle, Server, Wrench, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";

const DiamondHero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-blue-100 to-blue-50">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-200 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-4">
          <span className="inline-block py-1 px-4 rounded-full bg-blue-600 text-white text-sm font-medium mb-2">
            SISTEMA DIAMOND
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-blue-900">
            A Solução Premium para <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">WhatsApp Business</span>
          </h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="fade-in-section">
            <div className="rounded-xl overflow-hidden shadow-2xl mb-6">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe 
                  src="https://www.youtube.com/embed/videoseries?list=PL3DgEot3ENf467vxCFk8EcJw7qL9Hr1Mg" 
                  title="Sistema Diamond - Planos de Conexões" 
                  className="w-full h-80"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          
            <p className="text-gray-700 text-lg mb-8">
              Planos personalizados para atender às suas necessidades, com suporte dedicado, instalação profissional e benefícios exclusivos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('planos')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 rounded-full h-auto"
              >
                Ver planos disponíveis
              </Button>
              <Button 
                onClick={() => scrollToSection('contato')}
                variant="outline"
                className="border-blue-400 text-blue-700 hover:bg-blue-50 font-semibold px-8 py-6 rounded-full h-auto"
              >
                Falar com um consultor
              </Button>
            </div>
          </div>
          
          <div className="relative fade-in-section">            
            <div className="glass-card rounded-2xl p-8 shadow-2xl relative z-10 bg-white/80 backdrop-blur">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Sistema Diamond</h3>
              <p className="text-gray-700 mb-6">
                Solução completa para gerenciamento de conexões WhatsApp com softwares premium inclusos:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white p-2 rounded-full">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Evolution API</h4>
                    <p className="text-sm text-gray-600">Gerenciamento avançado de API</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
                  <div className="bg-indigo-600 text-white p-2 rounded-full">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">n8n</h4>
                    <p className="text-sm text-gray-600">Automação de processos e fluxos</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white p-2 rounded-full">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Typebot</h4>
                    <p className="text-sm text-gray-600">Chatbots conversacionais</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm text-gray-600">30 a 430 Conexões</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-2">
                  <Server className="w-6 h-6 text-indigo-600" />
                </div>
                <span className="text-sm text-gray-600">Servidores Premium</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <Wrench className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm text-gray-600">Softwares Inclusos</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6 text-indigo-600" />
                </div>
                <span className="text-sm text-gray-600">Suporte Dedicado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiamondHero;
