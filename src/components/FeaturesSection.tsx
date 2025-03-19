
import React from 'react';
import { Check, MessageSquare, Users, RefreshCw, Shield, LayoutGrid } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <MessageSquare className="w-10 h-10 text-blue-500" />,
      title: "Atendimento Automatizado",
      description: "Automatize respostas para perguntas comuns e direcione clientes para o setor certo, economizando tempo precioso."
    },
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      title: "Usuários Ilimitados",
      description: "Adicione quantos atendentes precisar sem custos adicionais, permitindo escalabilidade total para seu negócio."
    },
    {
      icon: <RefreshCw className="w-10 h-10 text-blue-500" />,
      title: "Conexões Ilimitadas",
      description: "Conecte quantos números de WhatsApp desejar, gerenciando diferentes departamentos ou clientes de maneira eficiente."
    },
    {
      icon: <LayoutGrid className="w-10 h-10 text-green-500" />,
      title: "Personalização Completa",
      description: "Utilice sua logo, cores e nome no sistema, oferecendo uma experiência whitelabel para seus clientes."
    },
    {
      icon: <Shield className="w-10 h-10 text-green-500" />,
      title: "Suporte Especializado",
      description: "Nossa equipe cuida de tudo: instalação, atualizações e suporte técnico, para que você foque no que importa."
    },
    {
      icon: <Check className="w-10 h-10 text-green-500" />,
      title: "Revenda Sem Limites",
      description: "Crie contas para seus clientes e gere uma nova fonte de receita recorrente sem custos adicionais."
    }
  ];

  return (
    <section id="features" className="py-20 features-gradient">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Transforme seu Atendimento</h2>
        <p className="section-subtitle">
          O Multiatendimento da Arsenal Cache oferece ferramentas poderosas para elevar o relacionamento com seus clientes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="feature-card fade-in-section">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
