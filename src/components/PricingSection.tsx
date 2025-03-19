
import React, { useState } from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<1 | 2>(1);

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
      section.scrollIntoView({ behavior: 'smooth' });
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
              
              <button 
                onClick={() => scrollToSection('contato')}
                className="w-full bg-blue-500 text-white rounded-full px-6 py-3 font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98] my-6"
              >
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
              
              <button 
                onClick={() => scrollToSection('contato')}
                className="w-full bg-green-500 text-white rounded-full px-6 py-3 font-medium transition-all hover:shadow-lg hover:shadow-green-500/20 active:scale-[0.98] my-6"
              >
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
                  <h4 className="font-semibold mb-4 text-blue-800">Conexões adicionais (opcional):</h4>
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
      </div>
    </section>
  );
};

export default PricingSection;
