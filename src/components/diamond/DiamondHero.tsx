
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, MessageSquare, Zap, BarChart3, ShieldCheck, Rocket, Server, Laptop, Users, Clock } from 'lucide-react';

const DiamondHero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 lg:pt-32 pb-24 lg:pb-32 px-4 relative overflow-hidden bg-gradient-to-b from-blue-100 via-blue-50 to-white">
      {/* Enhanced background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -top-20 left-1/4 w-72 h-72 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-200 rounded-full opacity-30 blur-3xl"></div>
      
      {/* Stats Section - Made thinner */}
      <div className="container mx-auto max-w-6xl relative z-10 mb-8">
        <div className="bg-blue-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="stat-item border-r border-b md:border-b-0 border-blue-500 p-4 text-center">
              <div className="flex flex-col items-center">
                <Server className="w-6 h-6 text-white mb-1" />
                <div className="text-3xl font-bold text-white mb-0.5">430+</div>
                <div className="text-blue-100 text-sm">Conexões disponíveis</div>
              </div>
            </div>
            <div className="stat-item border-b md:border-b-0 md:border-r border-blue-500 p-4 text-center">
              <div className="flex flex-col items-center">
                <Users className="w-6 h-6 text-white mb-1" />
                <div className="text-3xl font-bold text-white mb-0.5">5+</div>
                <div className="text-blue-100 text-sm">Softwares inclusos</div>
              </div>
            </div>
            <div className="stat-item border-r md:border-r border-blue-500 p-4 text-center">
              <div className="flex flex-col items-center">
                <Clock className="w-6 h-6 text-white mb-1" />
                <div className="text-3xl font-bold text-white mb-0.5">24/7</div>
                <div className="text-blue-100 text-sm">Monitoramento constante</div>
              </div>
            </div>
            <div className="stat-item p-4 text-center">
              <div className="flex flex-col items-center">
                <Laptop className="w-6 h-6 text-white mb-1" />
                <div className="text-3xl font-bold text-white mb-0.5">100%</div>
                <div className="text-blue-100 text-sm">Suporte especializado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-section">
            <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 text-blue-700 font-medium mb-6 animate-pulse">
              <Zap className="w-4 h-4 mr-2" /> Sistema Diamond
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600">
              Transforme seu <br/>
              Atendimento com<br/>
              <span className="text-black">WhatsApp</span><br/>
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
            
            {/* Bônus exclusivos */}
            <div className="bg-white mt-8 p-6 rounded-xl border border-blue-100 shadow-lg">
              <div className="text-center mb-4 font-bold text-blue-800 text-lg">Bônus exclusivos:</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-100 transition-all duration-300 hover:bg-blue-100">
                  <ChevronRight className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="font-medium">Evolution API</span>
                </div>
                <div className="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-100 transition-all duration-300 hover:bg-blue-100">
                  <ChevronRight className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="font-medium">Redis</span>
                </div>
                <div className="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-100 transition-all duration-300 hover:bg-blue-100">
                  <ChevronRight className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="font-medium">Typebot</span>
                </div>
                <div className="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-100 transition-all duration-300 hover:bg-blue-100">
                  <ChevronRight className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="font-medium">n8n</span>
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
