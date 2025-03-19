import React, { useState } from 'react';
import { Check, X, Sparkles } from 'lucide-react';
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
  return <section id="precos" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
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
          <div className={`pricing-card rounded-xl p-6 bg-white border shadow-lg transition-all duration-300 hover:shadow-xl relative ${selectedPlan === 1 ? 'ring-2 ring-blue-500' : ''}`} onClick={() => setSelectedPlan(1)}>
            <div className="mb-6">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-2">
                White Label Básico
              </span>
              <h3 className="text-2xl font-bold mb-2">Plano Essencial</h3>
              <p className="text-gray-600 mb-4">Ideal para quem está começando com WhatsApp Business</p>
              
              <div className="flex items-end gap-2 mb-3">
                <span className="text-4xl font-bold text-blue-700">R$598,80</span>
                <span className="text-gray-600 pb-1">ou 12x sem juros</span>
              </div>
              
              <div className="text-sm text-gray-600 mb-4 p-2 bg-blue-50 rounded-lg inline-block">
                Renovação anual: <span className="font-semibold text-blue-700">R$400,00</span>
              </div>
              
              <button onClick={e => {
              e.stopPropagation();
              scrollToSection('contato');
            }} className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full px-6 py-3 font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98] my-4">
                Escolher este plano
              </button>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-blue-800 flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-500" />
                O que está incluído:
              </h4>
              <ul className="space-y-3">
                {planFeatures.common.map((feature, index) => <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>)}
              </ul>
            </div>
          </div>
          
          {/* Plan 2 */}
          <div className={`pricing-card rounded-xl p-6 bg-white border shadow-lg transition-all duration-300 hover:shadow-xl relative overflow-hidden ${selectedPlan === 2 ? 'ring-2 ring-green-500' : ''}`} onClick={() => setSelectedPlan(2)}>
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-amber-400 to-amber-600 rotate-45 opacity-50 blur-xl"></div>
            <div className="absolute -right-5 -top-5 w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rotate-45"></div>
            <div className="absolute -right-3 -top-3 transform rotate-45">
              <div className="bg-amber-500 text-white text-xs font-bold py-1 px-8 shadow-md">
                POPULAR
              </div>
            </div>
            
            <div className="mb-6 relative">
              <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-2 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> White Label Premium
              </span>
              <h3 className="text-2xl font-bold mb-2">Plano Profissional</h3>
              <p className="text-gray-600 mb-4">Solução completa com ferramentas premium</p>
              
              <div className="flex items-end gap-2 mb-3">
                <span className="text-4xl font-bold text-green-600">R$698,80</span>
                <span className="text-gray-600 pb-1">ou 12x sem juros</span>
              </div>
              
              <div className="text-sm text-gray-600 mb-4 p-2 bg-green-50 rounded-lg inline-block">
                Renovação anual: <span className="font-semibold text-green-700">Incluída no plano mensal</span>
              </div>
              
              <button onClick={e => {
              e.stopPropagation();
              scrollToSection('contato');
            }} className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full px-6 py-3 font-medium transition-all hover:shadow-lg hover:shadow-green-500/20 active:scale-[0.98] my-4">
                Escolher este plano
              </button>
            </div>
            
            <div className="relative">
              <h4 className="font-semibold mb-4 text-green-800 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                Tudo do plano básico mais:
              </h4>
              <ul className="space-y-3">
                {planFeatures.plan2Additional.map((feature, index) => <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{feature}</span>
                  </li>)}
                <li className="pt-4 border-t border-gray-100">
                  <h4 className="font-semibold mb-4 text-green-800 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    Conexões adicionais:
                  </h4>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>API oficial WhatsApp (ilimitada)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Instagram (conexões ilimitadas)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Facebook (conexões ilimitadas)</span>
                </li>
                <li className="mt-4">
                  <span className="text-sm font-medium text-white bg-gradient-to-r from-green-600 to-green-800 px-4 py-2 rounded-full inline-block">
                    R$260,00/mês - Sem taxa de renovação anual
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Comparison table - desktop view */}
        <div className="hidden lg:block fade-in-section mb-12 max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg bg-white">
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-blue-50 to-green-50">
                  <TableHead className="w-1/3 p-6">Recurso</TableHead>
                  <TableHead className="w-1/3 p-6 text-center">
                    <div className="flex flex-col items-center">
                      <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-2">White Label Básico</span>
                      <span className="text-xl font-bold text-blue-700">Plano Essencial</span>
                      <span className="text-3xl font-bold mt-2 text-blue-800">R$598,80</span>
                      <span className="text-sm text-gray-500">ou 12x sem juros</span>
                      <button onClick={() => scrollToSection('contato')} className="mt-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full px-6 py-3 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98]">
                        Escolher este plano
                      </button>
                    </div>
                  </TableHead>
                  <TableHead className="w-1/3 p-6 text-center relative">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-amber-400 to-amber-600 rotate-45 opacity-30 blur-xl"></div>
                    <div className="absolute -right-8 -top-8 transform rotate-45">
                      
                    </div>
                    <div className="flex flex-col items-center relative">
                      <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full mb-2 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> White Label Premium
                      </span>
                      <span className="text-xl font-bold text-green-700">Plano Profissional</span>
                      <span className="text-3xl font-bold mt-2 text-green-800">R$698,80</span>
                      <span className="text-sm text-gray-500">ou 12x sem juros</span>
                      <button onClick={() => scrollToSection('contato')} className="mt-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full px-6 py-3 text-sm font-medium transition-all hover:shadow-lg hover:shadow-green-500/20 active:scale-[0.98]">
                        Escolher este plano
                      </button>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {planFeatures.common.map((feature, index) => <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <TableCell className="p-4 font-medium">{feature}</TableCell>
                    <TableCell className="p-4 text-center">
                      <Check className="w-5 h-5 text-blue-500 mx-auto" />
                    </TableCell>
                    <TableCell className="p-4 text-center">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    </TableCell>
                  </TableRow>)}

                {planFeatures.plan2Additional.map((feature, index) => <TableRow key={`p2-${index}`} className={planFeatures.common.length + index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <TableCell className="p-4 font-medium">{feature}</TableCell>
                    <TableCell className="p-4 text-center">
                      <X className="w-5 h-5 text-red-400 mx-auto" />
                    </TableCell>
                    <TableCell className="p-4 text-center">
                      <div className="flex items-center justify-center">
                        <Check className="w-5 h-5 text-green-500" />
                        <Sparkles className="w-4 h-4 text-amber-500 ml-1" />
                      </div>
                    </TableCell>
                  </TableRow>)}

                <TableRow className="bg-gradient-to-r from-blue-50 to-green-50">
                  <TableCell className="p-5 font-bold text-lg">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-amber-500" />
                      <span>Conexões adicionais</span>
                    </div>
                    <div className="text-sm font-normal text-gray-600 mt-1">API oficial WhatsApp + Instagram + Facebook</div>
                  </TableCell>
                  <TableCell className="p-5 text-center">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                      Não disponível
                    </span>
                  </TableCell>
                  <TableCell className="p-5 text-center">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-green-600 to-green-700 text-white">
                      R$260,00/mês
                    </span>
                    <div className="text-sm text-gray-500 mt-2">Sem taxa de renovação anual</div>
                  </TableCell>
                </TableRow>

                <TableRow className="bg-gradient-to-r from-blue-100 to-green-100">
                  <TableCell className="p-5 font-bold text-lg">Renovação anual</TableCell>
                  <TableCell className="p-5 text-center font-semibold text-blue-800 text-lg">R$400,00</TableCell>
                  <TableCell className="p-5 text-center font-semibold text-green-800 text-lg">Incluído no plano mensal</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="text-center mt-16 max-w-3xl mx-auto fade-in-section">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Ainda com dúvidas sobre qual plano escolher?</h3>
            <p className="text-gray-700 mb-6">
              Todos os planos incluem instalação, treinamento e suporte técnico. Entre em contato conosco para saber mais sobre nossos planos ou para uma demonstração personalizada.
            </p>
            <button onClick={() => scrollToSection('contato')} className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-full px-8 py-3 hover:shadow-lg hover:shadow-blue-500/20 transition-all active:scale-[0.98]">
              Fale com um especialista
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default PricingSection;