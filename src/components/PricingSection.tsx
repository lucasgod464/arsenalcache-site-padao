
import React from 'react';
import { Check, ArrowRight, MessageCircle, Star, Trophy } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const mainFeatures = [
    "Instalação pela nossa equipe", 
    "Atualizações pelo nossa equipe", 
    "Suporte humano", 
    "Usuários ilimitados", 
    "Conexões ilimitadas de WhatsApp", 
    "Sua logo no sistema", 
    "Cores personalizadas", 
    "Nome do sistema personalizado", 
    "Revenda de assinaturas ilimitadas", 
    "Suporte individual no WhatsApp"
  ];
  
  const premiumSoftware = [
    "Advanced filter (Gerador & Filtro de Números)", 
    "WaHammer (Aquecedor de WhatsApp)", 
    "WaDefender (Verificador de Força de Conta)", 
    "BotMaster ID (Disparador Massivo)", 
    "Uma licença para cada software"
  ];
  
  return (
    <section id="precos" className="py-10 px-4 bg-white border-t border-gray-100 shadow-inner mt-8">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <Badge variant="outline" className="bg-blue-600 text-white border-blue-500 mb-4">
            Planos e preços
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A solução <span className="text-blue-600">completa para você</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Investimento único com renovação anual acessível. Sem mensalidades absurdas.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute -top-4 -right-4 z-10 rotate-12">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-6 py-1 rounded-full shadow-lg flex items-center gap-1">
              <Star className="h-3 w-3 fill-white" /> RECOMENDADO <Star className="h-3 w-3 fill-white" />
            </div>
          </div>
          
          <Card className="h-full transition-all duration-300 overflow-hidden bg-white border-gray-200 hover:shadow-md ring-2 ring-blue-500 shadow-xl shadow-blue-200">
            <CardHeader className="bg-gray-50 pb-6 border-b border-gray-100">
              <div className="space-y-1.5">
                <Badge className="bg-blue-100 text-blue-700 border-0 mb-2 font-medium">
                  White Label Premium
                </Badge>
                <CardTitle className="text-2xl font-bold flex items-center gap-2 text-gray-800">
                  Plano Profissional
                  <Star className="h-5 w-5 text-blue-500" />
                </CardTitle>
                <CardDescription className="text-gray-500">
                  Solução completa com ferramentas premium
                </CardDescription>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold tracking-tight text-gray-900">R$698,80</span>
                <span className="ml-2 text-sm font-medium text-gray-500">ou 12x R$58,23 sem juros</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                  Sem taxa de renovação anual pagando a mensalidade
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600 flex items-center">
                    <Trophy className="h-5 w-5 text-blue-500 mr-2" />
                    Recursos principais:
                  </h4>
                  <ul className="space-y-2">
                    {mainFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600">Softwares premium inclusos:</h4>
                  <ul className="space-y-2">
                    {premiumSoftware.map((software, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{software}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600">Conexões adicionais (opcionais):</h4>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">API oficial WhatsApp (ilimitada)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">Instagram (conexões ilimitadas)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">Facebook (conexões ilimitadas)</span>
                      </li>
                    </ul>
                    
                    <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                      <p className="text-gray-700 font-semibold mb-1">Valor mensal:</p>
                      <p className="text-xl font-bold text-blue-600">R$260,00</p>
                      <p className="text-xs text-gray-500">Conexões ilimitadas</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600">Renovação anual:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">R$400,00 (apenas se não pagar a mensalidade)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Inclui atualizações e suporte humano</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600 font-medium">Isenção da taxa ao pagar a mensalidade</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="pt-4 pb-8 flex justify-center">
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-6 rounded-full transition-all shadow-md hover:shadow-lg"
              >
                <a 
                  href="https://www.asaas.com/c/8fmv6ge3llbfeanu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Contratar plano profissional
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="text-center mt-8 max-w-3xl mx-auto">
          <Button 
            asChild
            className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-full px-8 py-5 shadow-md hover:shadow-lg transition-all border border-green-400/30 flex items-center gap-2"
          >
            <a 
              href="https://api.whatsapp.com/send?phone=5512981156856" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar com um consultor no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
