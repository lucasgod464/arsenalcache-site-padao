
import React from "react";
import { BrainCircuit, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ComparisonCard from "./ComparisonCard";

// Dados para a comparação de serviços de IA
const aiComparisonData = {
  ourService: {
    name: "IA Conecta Ilimitada",
    price: "R$1.000/mês",
    features: [
      "Uso completamente ilimitado",
      "Acesso a modelos avançados (Llama, Mistral, etc)",
      "Previsibilidade total de custos",
      "Suporte técnico especializado",
      "Integração com Whaticket e outras plataformas",
      "Sem contagem de tokens ou limites de uso"
    ]
  },
  competitor: {
    name: "OpenAI GPT-4",
    price: "R$5.000+/mês*",
    features: [
      "Cobrança por token (uso limitado)",
      "Custos imprevisíveis",
      "Sujeito a limites de uso e rate limiting",
      "Sem suporte técnico dedicado",
      "Acesso ao modelo mais recente",
      "Disponível globalmente"
    ]
  }
};

const IaIlimitadaSection = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-gray-200">
          <div className="text-center mb-8">
            <Badge variant="outline" className="bg-purple-600 text-white border-purple-500 mb-4">
              Inteligência Artificial Ilimitada
            </Badge>
            <h3 className="text-2xl font-bold mb-3">
              <span className="text-purple-600">IA Conecta</span> - Solução de IA Sem Limites
            </h3>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Acesso completo à tecnologia de IA avançada por um valor fixo mensal, sem surpresas na sua fatura
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            {/* Nossa solução de IA */}
            <ComparisonCard
              title={aiComparisonData.ourService.name}
              badge="Nossa Solução"
              badgeClassName="bg-white text-purple-700"
              price={aiComparisonData.ourService.price}
              priceNote="Preço fixo sem surpresas"
              features={aiComparisonData.ourService.features}
              isOurService={true}
              icon={<BrainCircuit className="h-5 w-5 text-purple-200" />}
              ctaText="Contratar IA Ilimitada"
              ctaLink="https://api.whatsapp.com/send?phone=5512981156856&text=Olá,%20tenho%20interesse%20no%20serviço%20de%20IA%20Conecta%20Ilimitada"
            />
            
            {/* Comparação com GPT-4 */}
            <ComparisonCard
              title={aiComparisonData.competitor.name}
              badge="Concorrente"
              badgeClassName="bg-gray-700 text-white"
              price={aiComparisonData.competitor.price}
              priceNote="*Custo estimado para uso empresarial médio"
              features={aiComparisonData.competitor.features}
            />
          </div>
          
          <div className="text-center mt-10 bg-gradient-to-br from-purple-100 to-blue-50 p-8 rounded-xl border border-purple-200 max-w-4xl mx-auto shadow-md">
            <h4 className="text-2xl font-bold text-purple-800 mb-4">Compare e economize com nossa solução de IA ilimitada</h4>
            <p className="text-gray-700 mb-6">
              Por apenas <span className="font-bold text-purple-700">R$1.000,00/mês</span>, tenha acesso ilimitado à tecnologia de IA avançada,
              sem preocupações com contadores de tokens ou custos crescentes. Uma solução completa que se integra perfeitamente
              ao seu Whaticket, potencializando seu atendimento com inteligência artificial sem limites.
            </p>
            
            <div className="bg-white p-6 rounded-lg border border-purple-200 shadow-sm mb-8">
              <h5 className="text-xl font-semibold text-purple-700 mb-4">Simulação de economia</h5>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h6 className="font-medium text-gray-700 mb-2">Com GPT-4</h6>
                  <p className="text-sm text-gray-600 mb-2">1.000.000 tokens/mês</p>
                  <p className="text-2xl font-bold text-red-600">R$5.000,00</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h6 className="font-medium text-green-700 mb-2">Com IA Conecta</h6>
                  <p className="text-sm text-green-600 mb-2">Tokens ilimitados</p>
                  <p className="text-2xl font-bold text-green-600">R$1.000,00</p>
                </div>
              </div>
              
              <p className="text-green-600 font-bold text-lg">Sua economia: R$4.000,00/mês</p>
            </div>
            
            <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 px-10 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all">
              <a href="https://api.whatsapp.com/send?phone=5512981156856&text=Olá,%20quero%20saber%20mais%20sobre%20a%20solução%20de%20IA%20ilimitada" target="_blank" rel="noopener noreferrer">
                <BrainCircuit className="mr-2 h-5 w-5" />
                Falar com especialista em IA
              </a>
            </Button>
          </div>
        </div>

        <div className="text-center mt-12 max-w-3xl mx-auto">
          <Button asChild className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-full px-8 py-5 shadow-md hover:shadow-lg transition-all border border-green-400/30 flex items-center gap-2">
            <a href="https://api.whatsapp.com/send?phone=5512981156856" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar com um consultor no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IaIlimitadaSection;
