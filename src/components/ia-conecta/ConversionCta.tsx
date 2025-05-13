
import React from 'react';
import { Check, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ConversionCta = () => {
  // Função para rolar até a seção de planos
  const scrollToPlansSection = () => {
    const plansSection = document.getElementById('plans-section');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="plans-section" className="py-16 px-4 bg-gradient-to-tr from-purple-500/90 to-purple-400/90 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Conheça nossos <span className="text-purple-100">planos de IA</span>
          </h2>
          
          <p className="text-lg text-purple-100 mt-4 max-w-3xl mx-auto">
            Tenha acesso aos modelos de IA mais avançados do mercado com previsibilidade de custos e sem surpresas na sua fatura
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Plano Fixo */}
          <Card className="bg-white/10 backdrop-blur-lg border-purple-300/20 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-purple-100">Plano Empresarial</h3>
                <Badge variant="default" className="bg-purple-500 hover:bg-purple-600">Mais popular</Badge>
              </div>
              
              <div className="border-t border-purple-500/50 my-2"></div>
              
              <div className="flex items-baseline">
                <span className="text-4xl font-extrabold tracking-tight text-white">R$1.000</span>
                <span className="ml-2 text-sm font-medium text-purple-200">/mês</span>
              </div>
              
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-600/50 rounded-full p-1">
                    <Check className="w-5 h-5 text-purple-300" />
                  </div>
                  <span className="text-purple-100">Uso completamente ilimitado</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-purple-600/50 rounded-full p-1">
                    <Check className="w-5 h-5 text-purple-300" />
                  </div>
                  <span className="text-purple-100">Acesso a modelos avançados</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-purple-600/50 rounded-full p-1">
                    <Check className="w-5 h-5 text-purple-300" />
                  </div>
                  <span className="text-purple-100">Previsibilidade total de custos</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-purple-600/50 rounded-full p-1">
                    <Check className="w-5 h-5 text-purple-300" />
                  </div>
                  <span className="text-purple-100">Suporte técnico especializado</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-purple-600/50 rounded-full p-1">
                    <Check className="w-5 h-5 text-purple-300" />
                  </div>
                  <span className="text-purple-100">Sem contagem de tokens</span>
                </div>
              </div>
              
              <Button 
                variant="purple" 
                size="lg" 
                className="w-full"
                asChild
              >
                <a href="https://wa.me/5512981156856?text=Olá,%20tenho%20interesse%20no%20plano%20empresarial%20de%20R$1.000/mês" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar demonstração
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </Card>
          
          {/* Plano Personalizado */}
          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 border border-purple-400/30 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">Plano Personalizado</h3>
                <div className="bg-purple-500/70 p-1 rounded-full">
                  <Sparkles className="h-5 w-5 text-amber-300" />
                </div>
              </div>
              
              <div className="border-t border-purple-400/50 my-2"></div>
              
              <div className="flex items-baseline">
                <span className="text-4xl font-extrabold tracking-tight text-white">Sob consulta</span>
              </div>
              
              <p className="text-purple-200 mt-2">
                Plano personalizado de acordo com as necessidades específicas do seu negócio
              </p>
              
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-500/50 rounded-full p-1">
                    <Check className="w-5 h-5 text-purple-200" />
                  </div>
                  <span className="text-purple-100">Modelos de IA personalizados</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-purple-500/50 rounded-full p-1">
                    <Check className="w-5 h-5 text-purple-200" />
                  </div>
                  <span className="text-purple-100">Integrações sob medida</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-purple-500/50 rounded-full p-1">
                    <Check className="w-5 h-5 text-purple-200" />
                  </div>
                  <span className="text-purple-100">Treinamento especializado</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-purple-500/50 rounded-full p-1">
                    <Check className="w-5 h-5 text-purple-200" />
                  </div>
                  <span className="text-purple-100">Acesso prioritário ao suporte</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-purple-500/50 rounded-full p-1">
                    <Check className="w-5 h-5 text-purple-200" />
                  </div>
                  <span className="text-purple-100">Soluções enterprise</span>
                </div>
              </div>
              
              <div className="flex gap-4 mt-4">
                <Button 
                  variant="purpleOutline" 
                  size="lg" 
                  className="w-full text-white border-white/50 hover:bg-purple-600/60"
                  asChild
                >
                  <a href="https://wa.me/5512981156856?text=Olá,%20gostaria%20de%20agendar%20uma%20demonstração%20do%20sistema" 
                     target="_blank" 
                     rel="noopener noreferrer">
                    Agendar demonstração
                  </a>
                </Button>
                
                <Button 
                  variant="purple" 
                  size="lg" 
                  className="w-full"
                  onClick={scrollToPlansSection}
                >
                  Conhecer planos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ConversionCta;
