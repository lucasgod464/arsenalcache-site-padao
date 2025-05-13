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
  return <section id="features" className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-blue-100 opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-amber-100 opacity-40 blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((feature, index) => {})}
        </div>
        
        {/* Marketing stats section */}
        
      </div>
    </section>;
};
export default FeaturesSection;