
import React from 'react';
import { MessageCircle, Users, Tag, Rocket, Settings, Refresh, Clock, DollarSign } from 'lucide-react';

const features = [
  {
    icon: <MessageCircle className="w-8 h-8 text-whatsapp-DEFAULT" />,
    title: "Conexões Ilimitadas",
    description: "Conecte quantos números de WhatsApp precisar sem limitações ou custos adicionais."
  },
  {
    icon: <Users className="w-8 h-8 text-arsenal-DEFAULT" />,
    title: "Usuários Ilimitados",
    description: "Adicione todos os atendentes que precisar sem pagar mais por isso."
  },
  {
    icon: <Tag className="w-8 h-8 text-whatsapp-DEFAULT" />,
    title: "Sistema Whitelabel",
    description: "Sua própria marca, suas cores e seu nome no sistema de atendimento."
  },
  {
    icon: <Rocket className="w-8 h-8 text-arsenal-DEFAULT" />,
    title: "Revenda Sem Limites",
    description: "Revenda assinaturas para quantos clientes quiser e aumente sua receita."
  },
  {
    icon: <Settings className="w-8 h-8 text-whatsapp-DEFAULT" />,
    title: "Instalação Completa",
    description: "Nossa equipe cuida de toda a instalação no servidor sem complicações."
  },
  {
    icon: <Refresh className="w-8 h-8 text-arsenal-DEFAULT" />,
    title: "Atualizações Automáticas",
    description: "Mantenha seu sistema sempre atualizado com as últimas novidades e melhorias."
  },
  {
    icon: <Clock className="w-8 h-8 text-whatsapp-DEFAULT" />,
    title: "Suporte Regular",
    description: "Conte com nosso suporte especializado para resolver qualquer questão."
  },
  {
    icon: <DollarSign className="w-8 h-8 text-arsenal-DEFAULT" />,
    title: "Pagamento Único",
    description: "Sem mensalidades absurdas, apenas uma taxa única com renovação anual acessível."
  }
];

const FeaturesSection = () => {
  return (
    <section id="recursos" className="features-gradient py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <span className="inline-block py-1 px-3 rounded-full bg-arsenal-light/20 text-arsenal-dark text-sm font-medium mb-4">
            Recursos exclusivos
          </span>
          <h2 className="section-title">Tudo que você precisa em uma <span className="text-gradient">única solução</span></h2>
          <p className="section-subtitle">
            O Arsenal Cache MultiAtendimento oferece todas as ferramentas necessárias para transformar o relacionamento com seus clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="feature-card fade-in-section" style={{transitionDelay: `${index * 100}ms`}}>
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
