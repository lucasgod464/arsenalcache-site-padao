
import React from 'react';
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-section">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Transforme seu <br/>
              <span className="text-blue-600">Atendimento</span> com<br/>
              WhatsApp<br/>
              Profissional
            </h1>
            
            <p className="text-gray-700 text-lg mt-6 mb-8 max-w-lg">
              Uma plataforma whitelabel com usuários e conexões ilimitadas. 
              Personalize com sua marca, automatize atendimentos e revenda 
              sem limitações.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => {}}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 rounded-full h-auto"
              >
                Agendar demonstração grátis
              </Button>
              <Button 
                onClick={() => scrollToSection('planos')}
                variant="outline"
                className="border-blue-400 text-blue-700 hover:bg-blue-50 font-semibold px-8 py-6 rounded-full h-auto"
              >
                Ver planos e preços
              </Button>
            </div>
          </div>
          
          <div className="relative fade-in-section">
            <div className="rounded-xl overflow-hidden shadow-2xl">
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
        </div>
      </div>
    </section>
  );
};

export default DiamondHero;
