
import React from 'react';
import { Check, MessageCircle, Sparkles, Star, Trophy, ArrowRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const planFeatures = {
    main: [
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
    ],
    premium: [
      "Softwares premium inclusos", 
      "Advanced filter (Gerador & Filtro de Números)", 
      "WaHammer (Aquecedor de WhatsApp)", 
      "WaDefender (Verificador de Força de Conta)", 
      "BotMaster ID (Disparador Massivo)", 
      "Uma licença para cada software"
    ],
    additional: [
      "API oficial WhatsApp (ilimitada)",
      "Instagram (conexões ilimitadas)",
      "Facebook (conexões ilimitadas)"
    ]
  };

  return (
    <section id="precos" className="py-16 px-4 bg-gradient-to-b from-white via-blue-50 to-white border-t border-gray-100 shadow-inner mt-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="bg-blue-600 text-white border-blue-500 mb-4 py-1.5 px-4 text-sm">
            Investimento único
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transforme seu negócio com nossa <span className="text-blue-600">solução premium</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Investimento único com renovação anual acessível. Sem mensalidades absurdas.
          </p>
        </div>

        {/* Single Professional Plan */}
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-blue-200 shadow-xl transition-all duration-300 hover:shadow-2xl bg-white">
            {/* Popular ribbon */}
            <div className="absolute -top-3 -right-12 z-10 rotate-45">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-12 py-1 shadow-lg">
                PREMIUM
              </div>
            </div>
            
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 pb-6 border-b border-blue-100">
              <div className="space-y-1.5">
                <Badge className="bg-blue-600 text-white border-0 mb-2 font-medium">
                  White Label Premium
                </Badge>
                <CardTitle className="text-3xl font-bold flex items-center gap-2 text-gray-800">
                  Plano Profissional
                  <Sparkles className="h-6 w-6 text-blue-500" />
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  Solução completa com ferramentas premium
                </CardDescription>
              </div>
              <div className="mt-6 flex items-baseline">
                <span className="text-4xl font-extrabold tracking-tight text-gray-900">R$1.476,00</span>
                <span className="ml-2 text-sm font-medium text-gray-500">ou 12x de R$123,00</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                Renovação anual: <span className="font-semibold text-blue-600">R$400,00</span>
              </div>
            </CardHeader>

            <CardContent className="pt-8 grid md:grid-cols-2 gap-8">
              {/* Left column */}
              <div>
                <h4 className="font-semibold mb-4 text-blue-600 flex items-center">
                  <Star className="h-5 w-5 text-blue-500 mr-2" />
                  Recursos principais:
                </h4>
                <ul className="space-y-3 mb-6">
                  {planFeatures.main.map((feature, index) => (
                    <li key={`main-${index}`} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right column */}
              <div>
                <h4 className="font-semibold mb-4 text-blue-600 flex items-center">
                  <Trophy className="h-5 w-5 text-blue-500 mr-2" />
                  Softwares premium inclusos:
                </h4>
                <ul className="space-y-3 mb-6">
                  {planFeatures.premium.map((feature, index) => (
                    <li key={`premium-${index}`} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional connections - Full width */}
              <div className="md:col-span-2 pt-4 border-t border-gray-100">
                <h4 className="font-semibold mb-4 text-blue-600 flex items-center">
                  <Sparkles className="h-5 w-5 text-blue-500 mr-2" />
                  Conexões adicionais (opcional):
                </h4>
                <ul className="space-y-3">
                  {planFeatures.additional.map((feature, index) => (
                    <li key={`additional-${index}`} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                  <li className="mt-4">
                    <Badge variant="outline" className="w-full justify-center py-2 bg-blue-50 text-blue-700 border-blue-200">
                      R$260,00/mês - Pagando mensalidade, não há taxa de renovação anual
                    </Badge>
                  </li>
                </ul>
              </div>
            </CardContent>

            <CardFooter className="pt-6 pb-8 flex justify-center">
              <Button 
                asChild
                className="w-full md:w-2/3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-6 rounded-full transition-all shadow-md hover:shadow-lg"
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

        <div className="text-center mt-12 max-w-3xl mx-auto">
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
