
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<1 | 2>(1);
  
  const planFeatures = {
    common: ["Instalação pela nossa equipe", "Atualizações pelo nossa equipe", "Suporte humano", "Usuários ilimitados", "Conexões ilimitadas", "Sua logo no sistema", "Cores personalizadas", "Nome do sistema personalizado", "Revenda de assinaturas ilimitadas", "Suporte individual no WhatsApp"],
    plan1Additional: [],
    plan2Additional: ["Softwares premium inclusos", "Advanced filter (Gerador & Filtro de Números)", "WaHammer (Aquecedor de WhatsApp)", "WaDefender (Verificador de Força de Conta)", "BotMaster ID (Disparador Massivo)", "Uma licença para cada software"]
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
    <section id="precos" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            Planos e preços
          </span>
          <h2 className="section-title">Escolha o plano <span className="text-gradient">ideal para você</span></h2>
          <p className="section-subtitle">
            Investimento único com renovação anual acessível. Sem mensalidades absurdas.
          </p>
        </div>

        {/* Pricing cards - mobile view */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto lg:hidden">
          {/* Plan 1 */}
          <div 
            className={`pricing-card fade-in-section ${selectedPlan === 1 ? 'ring-2 ring-blue-500' : ''}`} 
            onClick={() => setSelectedPlan(1)}
          >
            <div className="mb-6">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-2">
                White Label Básico
              </span>
              <h3 className="text-2xl font-bold mb-2">Plano Essencial</h3>
              <p className="text-gray-600 mb-4">Ideal para quem está começando com WhatsApp Business</p>
              
              <div className="flex items-end gap-2 mb-6">
                <span className="text-4xl font-bold">R$598,80</span>
                <span className="text-gray-600 pb-1">ou 12x sem juros</span>
              </div>
              
              <div className="text-sm text-gray-600 mb-2">
                Renovação anual: <span className="font-semibold">R$400,00</span>
              </div>
              
              <button onClick={() => scrollToSection('contato')} className="w-full bg-blue-500 text-white rounded-full px-6 py-3 font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98] my-6">
                Escolher este plano
              </button>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-blue-800">O que está incluído:</h4>
              <ul className="space-y-3">
                {planFeatures.common.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Plan 2 */}
          <div 
            className={`pricing-card fade-in-section ${selectedPlan === 2 ? 'ring-2 ring-green-500' : ''}`} 
            onClick={() => setSelectedPlan(2)}
          >
            <div className="mb-6">
              <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-2">
                White Label Premium
              </span>
              <h3 className="text-2xl font-bold mb-2">Plano Profissional</h3>
              <p className="text-gray-600 mb-4">Solução completa com ferramentas premium</p>
              
              <div className="flex items-end gap-2 mb-6">
                <span className="text-4xl font-bold">R$698,80</span>
                <span className="text-gray-600 pb-1">ou 12x sem juros</span>
              </div>
              
              <button onClick={() => scrollToSection('contato')} className="w-full bg-green-500 text-white rounded-full px-6 py-3 font-medium transition-all hover:shadow-lg hover:shadow-green-500/20 active:scale-[0.98] my-6">
                Escolher este plano
              </button>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-blue-800">Tudo do plano básico mais:</h4>
              <ul className="space-y-3">
                {planFeatures.plan2Additional.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
                <li className="pt-4 border-t border-gray-100">
                  <h4 className="font-semibold mb-4 text-blue-800">Conexões adicionais:</h4>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>API oficial WhatsApp (ilimitada)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Instagram (conexões ilimitadas)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Facebook (conexões ilimitadas)</span>
                </li>
                <li className="flex items-center gap-2 mt-2">
                  <span className="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded-full">
                    R$260,00/mês - Sem taxa de renovação anual mantendo a assinatura mensal
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Comparison table - desktop view */}
        <div className="hidden lg:block fade-in-section mb-8 max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="w-1/3 p-4">Recurso</TableHead>
                  <TableHead className="w-1/3 p-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-0.5 rounded-full mb-1">White Label Básico</span>
                      <span className="text-lg font-bold">Plano Essencial</span>
                      <span className="text-2xl font-bold mt-1">R$598,80</span>
                      <span className="text-sm text-gray-500">ou 12x sem juros</span>
                      <button 
                        onClick={() => scrollToSection('contato')} 
                        className="mt-2 bg-blue-500 text-white rounded-full px-4 py-2 text-sm font-medium transition-all hover:bg-blue-600 active:scale-[0.98]"
                      >
                        Escolher este plano
                      </button>
                    </div>
                  </TableHead>
                  <TableHead className="w-1/3 p-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full mb-1">White Label Premium</span>
                      <span className="text-lg font-bold">Plano Profissional</span>
                      <span className="text-2xl font-bold mt-1">R$698,80</span>
                      <span className="text-sm text-gray-500">ou 12x sem juros</span>
                      <button 
                        onClick={() => scrollToSection('contato')} 
                        className="mt-2 bg-green-500 text-white rounded-full px-4 py-2 text-sm font-medium transition-all hover:bg-green-600 active:scale-[0.98]"
                      >
                        Escolher este plano
                      </button>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {planFeatures.common.map((feature, index) => (
                  <TableRow key={index} className="border-b border-gray-100">
                    <TableCell className="p-4 font-medium">{feature}</TableCell>
                    <TableCell className="p-4 text-center">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    </TableCell>
                    <TableCell className="p-4 text-center">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    </TableCell>
                  </TableRow>
                ))}

                {planFeatures.plan2Additional.map((feature, index) => (
                  <TableRow key={`p2-${index}`} className="border-b border-gray-100">
                    <TableCell className="p-4 font-medium">{feature}</TableCell>
                    <TableCell className="p-4 text-center">
                      <X className="w-5 h-5 text-red-400 mx-auto" />
                    </TableCell>
                    <TableCell className="p-4 text-center">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    </TableCell>
                  </TableRow>
                ))}

                <TableRow>
                  <TableCell className="p-4 font-medium">
                    <div className="font-bold text-blue-800">Conexões adicionais</div>
                    <div className="text-sm text-gray-600 mt-1">API oficial WhatsApp + Instagram + Facebook</div>
                  </TableCell>
                  <TableCell className="p-4 text-center">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Não disponível
                    </span>
                  </TableCell>
                  <TableCell className="p-4 text-center">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      R$260,00/mês
                    </span>
                    <div className="text-xs text-gray-500 mt-1">Sem taxa de renovação anual</div>
                  </TableCell>
                </TableRow>

                <TableRow className="bg-gray-50">
                  <TableCell className="p-4 font-medium">Renovação anual</TableCell>
                  <TableCell className="p-4 text-center font-semibold">R$400,00</TableCell>
                  <TableCell className="p-4 text-center font-semibold">Incluído no plano mensal</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="text-center mt-10 max-w-3xl mx-auto">
          <p className="text-gray-600">
            Todos os planos incluem instalação, treinamento e suporte técnico. Entre em contato conosco para saber mais ou para uma demonstração personalizada.
          </p>
          <button 
            onClick={() => scrollToSection('contato')} 
            className="mt-6 inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-full px-8 py-3 hover:shadow-lg hover:shadow-blue-500/20 transition-all active:scale-[0.98]"
          >
            Fale com um especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
