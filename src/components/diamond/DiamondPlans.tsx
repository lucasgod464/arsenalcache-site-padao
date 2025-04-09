
import React, { useState } from 'react';
import { Check, MessageCircle, Server, Zap, BadgeCheck, Star, AlertTriangle, DollarSign } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DiamondPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>("30-connections");
  
  const commonBenefits = [
    "Suporte dedicado e técnico",
    "Instalação em servidores premium",
    "Atualizações recorrentes",
    "Monitoramento do sistema",
    "Configurações de segurança avançadas"
  ];
  
  const includedSoftware = [
    "n8n",
    "Redis",
    "Evolution API",
    "Dify",
    "Typebot"
  ];
  
  const plans = [
    {
      id: "30-connections",
      name: "30 Conexões",
      installationPrice: "R$ 1.998,80",
      monthlyInstallment: "R$ 166,56",
      monthlyPrice: "Grátis no 1º ano",
      regularPrice: "R$ 570,00 após 1 ano",
      highlight: "Mensalidade grátis no primeiro ano",
      description: "Perfeito para quem busca economia e eficiência.",
      buttonText: "Contratar plano de 30 conexões",
      popular: true,
      whatsappMessage: "Olá! Estou interessado no plano de 30 conexões do Sistema Diamond com 1 ano grátis. Pode me dar mais informações?"
    },
    {
      id: "70-connections",
      name: "70 Conexões",
      installationPrice: "R$ 1.998,80",
      monthlyPrice: "R$ 445,00 no 1º mês",
      regularPrice: "R$ 900,00 após",
      highlight: "Ideal para empresas em crescimento",
      description: "Perfeito para quem precisa de mais conexões e quer um serviço robusto.",
      buttonText: "Contratar plano de 70 conexões",
      whatsappMessage: "Olá! Estou interessado no plano de 70 conexões do Sistema Diamond. Pode me dar mais informações?"
    },
    {
      id: "130-connections",
      name: "130 Conexões",
      installationPrice: "R$ 1.998,80",
      monthlyPrice: "R$ 700,00 no 1º mês",
      regularPrice: "R$ 1.400,00 após",
      highlight: "Alta capacidade para grandes operações",
      description: "Plano completo perfeito para quem precisa de alta capacidade.",
      buttonText: "Contratar plano de 130 conexões",
      whatsappMessage: "Olá! Estou interessado no plano de 130 conexões do Sistema Diamond. Pode me dar mais informações?"
    },
    {
      id: "430-connections",
      name: "430 Conexões",
      installationPrice: "R$ 1.998,80",
      monthlyPrice: "R$ 2.200,00 no 1º mês",
      regularPrice: "R$ 4.200,00 após",
      highlight: "Máxima capacidade para operações robustas",
      description: "Nosso plano mais robusto, ideal para grandes operações.",
      buttonText: "Contratar plano de 430 conexões",
      whatsappMessage: "Olá! Estou interessado no plano de 430 conexões do Sistema Diamond. Pode me dar mais informações?"
    }
  ];

  return (
    <section id="planos" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
            Planos e preços
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Escolha o plano <span className="text-blue-600">ideal para você</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Planos personalizados com instalação profissional e benefícios exclusivos para seu negócio.
          </p>
        </div>
        
        {/* Featured 30 Connections Plan */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-1 shadow-xl">
            <div className="bg-white rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-bold py-1 px-12 -mr-10 mt-5 transform rotate-45 shadow-md">
                  DESTAQUE
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="flex items-center mb-3">
                    <Badge className="bg-blue-100 text-blue-800 border-0 mr-2">ECONOMIA</Badge>
                    <Badge className="bg-green-100 text-green-800 border-0">1º ANO GRÁTIS</Badge>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                    Plano de 30 Conexões
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-4">
                    <span className="font-bold text-blue-700 text-2xl">R$ 166,56</span>
                    <span className="text-sm ml-2">em 12x sem juros</span>
                    <span className="block text-sm mt-1">Investimento único de <span className="font-medium">R$ 1.998,80</span> com primeiro ano <span className="font-bold text-green-600">sem mensalidades!</span></span>
                  </p>
                  
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Feche apenas 2 revendas de R$ 90/mês e pague a sua mensalidade futura!</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Softwares premium inclusos (n8n, Redis, Evolution API, Dify, Typebot)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Suporte técnico exclusivo e monitoramento constante</span>
                    </div>
                  </div>
                  
                  <Button 
                    asChild
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-5 px-8 rounded-full"
                  >
                    <a 
                      href="https://api.whatsapp.com/send?phone=5512981156856&text=Olá! Estou interessado no plano de 30 conexões do Sistema Diamond com 1 ano grátis. Pode me dar mais informações?"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Quero o plano com 1º ano grátis!
                    </a>
                  </Button>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                  <h4 className="text-lg font-semibold mb-3 text-blue-800">Por que escolher este plano?</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Mensalidade grátis durante o primeiro ano</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Perfeito para iniciar seu negócio com baixo investimento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Após 1 ano, apenas R$ 570,00/mês</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Revenda para seus clientes por valores mais altos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Implantação em apenas 24 horas</span>
                    </li>
                  </ul>
                  
                  <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-amber-800 text-sm">
                      <span className="font-semibold">Observação:</span> Normalmente, nossos clientes migram para o plano de 70 conexões após 3 a 4 meses de uso, conforme o crescimento do negócio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.slice(1).map((plan) => (
            <div key={plan.id} className="relative">
              <Card 
                className={`h-full overflow-hidden border border-blue-100 hover:border-blue-300 transition-all duration-300 ${
                  selectedPlan === plan.id ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <CardHeader className="pb-6 bg-gradient-to-r from-blue-50 to-blue-100/50 border-b border-blue-100">
                  <CardTitle className="text-xl font-bold text-blue-800">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-blue-600">
                    {plan.highlight}
                  </CardDescription>
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-gray-900">
                      {plan.installationPrice}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      Instalação (até 12x sem juros)
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                        <DollarSign className="w-3.5 h-3.5 mr-1" />
                        Mensalidade
                      </Badge>
                    </div>
                    <div className="text-xl font-bold text-blue-800">
                      {plan.monthlyPrice}
                    </div>
                    {plan.regularPrice && (
                      <div className="text-sm text-blue-600 mt-1 font-medium">
                        {plan.regularPrice}
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4 text-gray-700">{plan.description}</p>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3 text-blue-800 flex items-center">
                      <Server className="h-4 w-4 text-blue-500 mr-2" />
                      Softwares inclusos:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {includedSoftware.map((software, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{software}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-semibold mb-3 text-blue-800 flex items-center">
                      <Zap className="h-4 w-4 text-blue-500 mr-2" />
                      Benefícios exclusivos:
                    </h4>
                    <ul className="space-y-2">
                      {commonBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="pt-4 pb-8">
                  <Button 
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-5 rounded-full"
                  >
                    <a 
                      href={`https://api.whatsapp.com/send?phone=5512981156856&text=${encodeURIComponent(plan.whatsappMessage)}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {plan.buttonText}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-full px-8 py-5 shadow-md hover:shadow-lg flex items-center gap-2"
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

export default DiamondPlans;
