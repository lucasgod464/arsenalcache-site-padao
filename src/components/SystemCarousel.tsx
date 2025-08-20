import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SystemCarousel = () => {
  // Placeholder screenshots - você pode substituir pelas imagens reais
  const screenshots = [
    {
      id: 1,
      title: "Dashboard Principal",
      description: "Visão geral completa do seu atendimento",
      image: "/lovable-uploads/placeholder-dashboard.jpg"
    },
    {
      id: 2,
      title: "Conversas em Tempo Real",
      description: "Gerencie múltiplas conversas simultaneamente",
      image: "/lovable-uploads/placeholder-chat.jpg"
    },
    {
      id: 3,
      title: "Automação Inteligente",
      description: "Configure fluxos automatizados avançados",
      image: "/lovable-uploads/placeholder-automation.jpg"
    },
    {
      id: 4,
      title: "Relatórios e Analytics",
      description: "Acompanhe métricas e performance",
      image: "/lovable-uploads/placeholder-analytics.jpg"
    },
    {
      id: 5,
      title: "Painel de Controle",
      description: "Configurações e gerenciamento completo",
      image: "/lovable-uploads/placeholder-settings.jpg"
    }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-20 border border-white/10">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 rounded-full border border-blue-400/30 mb-4">
          <span className="text-2xl">📸</span>
          <span className="text-blue-300 font-semibold">Screenshots do Sistema</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Veja o <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400">Whaticket Pro</span> em Ação
        </h3>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Interface moderna e intuitiva projetada para <strong className="text-amber-300">máxima produtividade</strong> 
          e <strong className="text-amber-300">facilidade de uso</strong>.
        </p>
      </div>

      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {screenshots.map((screenshot) => (
            <CarouselItem key={screenshot.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                  {/* Placeholder para a imagem - substitua pela imagem real */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🖼️</div>
                      <div className="text-sm">Screenshot aqui</div>
                    </div>
                  </div>
                  
                  {/* Overlay de hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <span className="text-white text-sm font-medium">Ver Detalhes</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{screenshot.title}</h4>
                  <p className="text-blue-100">{screenshot.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white/20 -left-4" />
        <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white/20 -right-4" />
      </Carousel>

      {/* Indicadores de funcionalidades */}
      <div className="flex flex-wrap justify-center gap-4 mt-12">
        <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
          <span className="text-emerald-300 font-semibold">✅ Interface Responsiva</span>
        </div>
        <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
          <span className="text-emerald-300 font-semibold">✅ Design Moderno</span>
        </div>
        <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
          <span className="text-emerald-300 font-semibold">✅ Fácil de Usar</span>
        </div>
        <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
          <span className="text-emerald-300 font-semibold">✅ 100% Personalizável</span>
        </div>
      </div>
    </div>
  );
};

export default SystemCarousel;