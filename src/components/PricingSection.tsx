
import React, { useState } from 'react';
import { Check, X, Sparkles, Star, Trophy, ArrowRight } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<1 | 2>(2); // Default to premium plan
  
  const planFeatures = {
    common: [
      "Instalação pela nossa equipe", 
      "Atualizações pelo nossa equipe", 
      "Suporte humano", 
      "Usuários ilimitados", 
      "Conexões ilimitadas", 
      "Sua logo no sistema", 
      "Cores personalizadas", 
      "Nome do sistema personalizado", 
      "Revenda de assinaturas ilimitadas", 
      "Suporte individual no WhatsApp"
    ],
    plan1Additional: [],
    plan2Additional: [
      "Softwares premium inclusos", 
      "Advanced filter (Gerador & Filtro de Números)", 
      "WaHammer (Aquecedor de WhatsApp)", 
      "WaDefender (Verificador de Força de Conta)", 
      "BotMaster ID (Disparador Massivo)", 
      "Uma licença para cada software"
    ]
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="precos" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
            Planos e preços
          </Badge>
          <h2 className="section-title">Escolha o plano <span className="text-gradient">ideal para você</span></h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Investimento único com renovação anual acessível. Sem mensalidades absurdas.
          </p>
        </div>

        {/* Pricing cards - mobile & desktop view */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Plan 1 */}
          <div className="relative fade-in-section">
            <Card className={`h-full transition-all duration-300 overflow-hidden ${selectedPlan === 1 ? 'ring-2 ring-blue-500 shadow-lg shadow-blue-100' : 'hover:shadow-md'}`} 
                onClick={() => setSelectedPlan(1)}>
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 pb-6">
                <div className="space-y-1.5">
                  <Badge className="bg-blue-100 text-blue-700 border-0 mb-2">
                    White Label Básico
                  </Badge>
                  <CardTitle className="text-2xl font-bold">Plano Essencial</CardTitle>
                  <CardDescription className="text-gray-600">
                    Ideal para quem está começando com WhatsApp Business
                  </CardDescription>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight text-gray-900">R$598,80</span>
                  <span className="ml-2 text-sm font-medium text-gray-500">ou 12x sem juros</span>
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  Renovação anual: <span className="font-semibold">R$400,00</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {planFeatures.common.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4 pb-8 flex justify-center">
                <Button 
                  asChild
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-6 rounded-full transition-all"
                >
                  <a 
                    href="https://www.asaas.com/c/isetiztbovefmj0v" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    Contratar plano essencial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Plan 2 */}
          <div className="relative fade-in-section">
            {/* Popular ribbon */}
            <div className="absolute -top-4 -right-4 z-10 rotate-12">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-6 py-1 rounded-full shadow-lg flex items-center gap-1">
                <Star className="h-3 w-3 fill-white" /> POPULAR <Star className="h-3 w-3 fill-white" />
              </div>
            </div>
            
            <Card 
              className={`h-full transition-all duration-300 overflow-hidden ${selectedPlan === 2 ? 'ring-2 ring-green-500 shadow-xl shadow-green-100' : 'hover:shadow-md'}`}
              onClick={() => setSelectedPlan(2)}
            >
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 pb-6">
                <div className="space-y-1.5">
                  <Badge className="bg-green-100 text-green-700 border-0 mb-2">
                    White Label Premium
                  </Badge>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    Plano Profissional
                    <Sparkles className="h-5 w-5 text-amber-500" />
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Solução completa com ferramentas premium
                  </CardDescription>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight text-gray-900">R$698,80</span>
                  <span className="ml-2 text-sm font-medium text-gray-500">ou 12x sem juros</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-4 text-blue-800 flex items-center">
                  <Trophy className="h-5 w-5 text-amber-500 mr-2" />
                  Tudo do plano básico mais:
                </h4>
                <ul className="space-y-3 mb-6">
                  {planFeatures.plan2Additional.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="font-semibold mb-4 text-blue-800">Conexões adicionais:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">API oficial WhatsApp (ilimitada)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Instagram (conexões ilimitadas)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Facebook (conexões ilimitadas)</span>
                    </li>
                    <li className="mt-3">
                      <Badge variant="outline" className="w-full justify-center py-2 bg-gray-50 text-gray-700 border-gray-200">
                        R$260,00/mês - Sem taxa de renovação anual
                      </Badge>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="pt-4 pb-8 flex justify-center">
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium py-6 rounded-full transition-all shadow-md hover:shadow-lg"
                >
                  <a 
                    href="https://www.asaas.com/c/8fmv6ge3llbfeanu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    Contratar plano profissional
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-gray-600">
            Todos os planos incluem instalação, treinamento e suporte técnico. Entre em contato conosco para saber mais ou para uma demonstração personalizada.
          </p>
          <Button 
            onClick={() => scrollToSection('contato')} 
            className="mt-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all"
          >
            Fale com um especialista
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
