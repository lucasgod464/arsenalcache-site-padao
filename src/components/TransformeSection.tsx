import React from 'react';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Users, RefreshCw, Shield, LayoutGrid, Check, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  color
}) => {
  return <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="flex flex-col items-center text-center relative">
        <div className={`${color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transform hover:scale-110 transition-all duration-300`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">
          {title}
        </h3>
        <div className="h-1 w-12 bg-blue-400 rounded-full mb-4"></div>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>;
};
const TransformeSection = () => {
  const features = [{
    icon: <MessageSquare className="w-8 h-8 text-white" />,
    title: "Atendimento Automatizado",
    description: "Automatize respostas para perguntas comuns e direcione clientes para o setor certo, economizando tempo precioso.",
    color: "bg-blue-500"
  }, {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Usuários Ilimitados",
    description: "Adicione quantos atendentes precisar sem custos adicionais, permitindo escalabilidade total para seu negócio.",
    color: "bg-amber-500"
  }, {
    icon: <RefreshCw className="w-8 h-8 text-white" />,
    title: "Conexões Ilimitadas",
    description: "Conecte quantos números de WhatsApp desejar, gerenciando diferentes departamentos ou clientes de maneira eficiente.",
    color: "bg-blue-500"
  }, {
    icon: <LayoutGrid className="w-8 h-8 text-white" />,
    title: "Personalização Completa",
    description: "Utilize sua logo, cores e nome no sistema, oferecendo uma experiência whitelabel para seus clientes.",
    color: "bg-amber-500"
  }, {
    icon: <Shield className="w-8 h-8 text-white" />,
    title: "Suporte Especializado",
    description: "Nossa equipe cuida de tudo: instalação, atualizações e suporte técnico, para que você foque no que importa.",
    color: "bg-blue-500"
  }, {
    icon: <Check className="w-8 h-8 text-white" />,
    title: "Revenda Sem Limites",
    description: "Crie contas para seus clientes e gere uma nova fonte de receita recorrente sem custos adicionais.",
    color: "bg-amber-500"
  }];
  return <section id="features" className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-100 opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-amber-100 opacity-40 blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1 text-sm mb-4">
            Transformação Digital
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            Transforme seu Atendimento
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções inteligentes para otimizar a comunicação com seus clientes e impulsionar os resultados do seu negócio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} color={feature.color} />)}
        </div>
        
        
      </div>
    </section>;
};
export default TransformeSection;