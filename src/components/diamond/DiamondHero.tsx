import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, MessageSquare, Zap, BarChart3, ShieldCheck, Rocket, Server } from 'lucide-react';

const DiamondHero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 lg:py-32 px-4 relative overflow-hidden bg-gradient-to-b from-blue-100 via-blue-50 to-white">
      {/* Enhanced background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -top-20 left-1/4 w-72 h-72 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-200 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Stats band at the top */}
        <div className="mb-16 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-blue-100 fade-in-section">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">430+</div>
              <div className="text-gray-600 text-sm">Conexões Disponíveis</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
              <div className="text-gray-600 text-sm">Monitoramento</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">5+</div>
              <div className="text-gray-600 text-sm">Softwares Inclusos</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
              <div className="text-gray-600 text-sm">Suporte Técnico</div>
            </div>
          </div>
        </div>
      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-section">
            <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 text-blue-700 font-medium mb-6 animate-pulse">
              <Zap className="w-4 h-4 mr-2" /> Sistema Diamond
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600">
              Transforme seu <br/>
              Atendimento com<br/>
              <span className="relative inline-block">
                <span className="text-black font-bold">WhatsApp</span>
              </span><br/>
              Profissional
            </h1>
            
            <p className="text-gray-700 text-lg mt-8 mb-10 max-w-lg">
              Uma plataforma <span className="font-semibold">whitelabel</span> com usuários e conexões 
              ilimitadas. Personalize com sua marca, automatize atendimentos 
              e revenda sem limitações.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={() => {}}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 rounded-full h-auto flex items-center gap-2 shadow-lg shadow-blue-300/30 transition-all duration-300 hover:-translate-y-1"
              >
                <MessageSquare className="w-5 h-5" />
                Agendar demonstração grátis
              </Button>
              <Button 
                onClick={() => scrollToSection('planos')}
                variant="outline"
                className="border-blue-400 text-blue-700 hover:bg-blue-50 font-semibold px-8 py-6 rounded-full h-auto flex items-center gap-2 hover:border-blue-500 transition-all duration-300"
              >
                <BarChart3 className="w-5 h-5" />
                Ver planos e preços
              </Button>
            </div>
            
            {/* Feature badges instead of trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
              <div className="flex items-center gap-2 bg-blue-50 p-2 rounded-lg border border-blue-100">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-blue-700">Alta Segurança</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 p-2 rounded-lg border border-blue-100">
                <Server className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-blue-700">Cloud Hosting</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 p-2 rounded-lg border border-blue-100">
                <Rocket className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-blue-700">Suporte Premium</span>
              </div>
            </div>
          </div>
          
          <div className="relative fade-in-section float-animation">
            {/* Video with decorative elements */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full z-0 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-100 rounded-full z-0 animate-pulse"></div>
              
              <div className="rounded-xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <iframe 
                    src="https://www.youtube.com/embed/videoseries?list=PL3DgEot3ENf467vxCFk8EcJw7qL9Hr1Mg" 
                    title="Sistema Diamond - Atendimento com WhatsApp" 
                    className="w-full h-80 lg:h-[400px]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            
            {/* Feature quick list */}
            <div className="bg-white/80 backdrop-blur-sm mt-8 p-4 rounded-xl border border-blue-100 shadow-md">
              <div className="text-center mb-3 font-semibold text-blue-800">Principais recursos:</div>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">Evolution API</span>
                </div>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">Redis</span>
                </div>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">Typebot</span>
                </div>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">n8n</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiamondHero;
