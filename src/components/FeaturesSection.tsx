
import React from 'react';
import { MessageSquare, Users, RefreshCw, Shield, LayoutGrid, Check, Zap, Lightbulb } from 'lucide-react';

const FeaturesSection = () => {
  const features = [{
    icon: <MessageSquare className="w-12 h-12 text-white" />,
    title: "Atendimento Automatizado",
    description: "Automatize respostas para perguntas comuns e direcione clientes para o setor certo, economizando tempo precioso.",
    color: "bg-blue-600"
  }, {
    icon: <Users className="w-12 h-12 text-white" />,
    title: "Usuários Ilimitados",
    description: "Adicione quantos atendentes precisar sem custos adicionais, permitindo escalabilidade total para seu negócio.",
    color: "bg-amber-500"
  }, {
    icon: <RefreshCw className="w-12 h-12 text-white" />,
    title: "Conexões Ilimitadas",
    description: "Conecte quantos números de WhatsApp desejar, gerenciando diferentes departamentos ou clientes de maneira eficiente.",
    color: "bg-blue-600"
  }, {
    icon: <LayoutGrid className="w-12 h-12 text-white" />,
    title: "Personalização Completa",
    description: "Utilize sua logo, cores e nome no sistema, oferecendo uma experiência whitelabel para seus clientes.",
    color: "bg-amber-500"
  }, {
    icon: <Shield className="w-12 h-12 text-white" />,
    title: "Suporte Especializado",
    description: "Nossa equipe cuida de tudo: instalação, atualizações e suporte técnico, para que você foque no que importa.",
    color: "bg-blue-600"
  }, {
    icon: <Check className="w-12 h-12 text-white" />,
    title: "Revenda Sem Limites",
    description: "Crie contas para seus clientes e gere uma nova fonte de receita recorrente sem custos adicionais.",
    color: "bg-amber-500"
  }];
  
  return (
    <section className="py-16 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Recursos do Whaticket Profissional</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos todas as ferramentas necessárias para transformar seu atendimento ao cliente em uma experiência excepcional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="rounded-lg p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 ${feature.color}`}>
                {feature.icon}
              </div>
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
