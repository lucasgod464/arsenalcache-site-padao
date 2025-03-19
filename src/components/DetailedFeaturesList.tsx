
import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const featureCategories = [
  {
    name: "Conectividade",
    icon: "🔌",
    features: [
      "Usuários ilimitados",
      "Conexões ilimitadas com WhatsApp",
      "Conexão com API oficial do WhatsApp (opcional)",
      "Conexão com Instagram (opcional)",
      "Conexão com Facebook (opcional)",
      "Multi-dispositivo e multi-plataforma"
    ]
  },
  {
    name: "Personalização",
    icon: "🎨",
    features: [
      "Sistema totalmente whitelabel",
      "Sua logo no sistema",
      "Cores personalizadas de acordo com sua marca",
      "Nome do sistema personalizado",
      "Interface personalizada",
      "Domínio próprio (opcional)"
    ]
  },
  {
    name: "Atendimento",
    icon: "💬",
    features: [
      "Automações online",
      "Robô de atendimento",
      "Chatbot inteligente",
      "Respostas prontas e atalhos",
      "Filas de atendimento",
      "Transferência de atendimento entre atendentes",
      "Histórico completo de conversas"
    ]
  },
  {
    name: "Gerenciamento",
    icon: "📊",
    features: [
      "Painel administrativo completo",
      "Relatórios de desempenho",
      "Métricas de atendimento",
      "Gestão de atendentes",
      "Monitoramento em tempo real",
      "Exportação de dados e relatórios"
    ]
  },
  {
    name: "Ferramentas Premium",
    icon: "🛠️",
    features: [
      "Advanced filter (Gerador & Filtro de Números)",
      "WaHammer (Aquecedor de WhatsApp)",
      "WaDefender (Verificador de Força de Conta)",
      "BotMaster ID (Disparador Massivo)",
      "Integrações com sistemas externos",
      "API para desenvolvedores"
    ]
  },
  {
    name: "Suporte e Manutenção",
    icon: "🔧",
    features: [
      "Instalação completa pela nossa equipe",
      "Atualizações automáticas",
      "Suporte técnico especializado",
      "Backup regular dos dados",
      "Documentação completa",
      "Treinamento para uso do sistema"
    ]
  }
];

const DetailedFeaturesList = () => {
  const [expandedCategory, setExpandedCategory] = useState(0);

  const toggleCategory = (index: number) => {
    setExpandedCategory(index === expandedCategory ? -1 : index);
  };

  return (
    <section id="funcionalidades" className="features-gradient py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <span className="inline-block py-1 px-3 rounded-full bg-arsenal-light/20 text-arsenal-dark text-sm font-medium mb-4">
            Funcionalidades completas
          </span>
          <h2 className="section-title">Tudo que você vai <span className="text-gradient">ter acesso</span></h2>
          <p className="section-subtitle">
            Explore todas as poderosas funcionalidades inclusas no MultiAtendimento da Arsenal Cache.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {featureCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={cn(
                "border border-gray-100 rounded-xl mb-4 overflow-hidden transition-all duration-300 bg-white",
                expandedCategory === categoryIndex ? "shadow-md" : ""
              )}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => toggleCategory(categoryIndex)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                {expandedCategory === categoryIndex ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {expandedCategory === categoryIndex && (
                <div className="px-6 pb-6 pt-2 animate-accordion-down">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedFeaturesList;
