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
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 text-sm mb-6">
            🚀 Transformação Digital Comprovada
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-400">
            Transforme seu Atendimento em uma Máquina de Resultados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Mais de <span className="font-bold text-blue-600">5.000 empresas</span> já revolucionaram seus resultados com nossa plataforma inteligente de atendimento
          </p>
          
          {/* Estatísticas em Destaque */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600 text-sm">Redução no Tempo de Resposta</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">3x</div>
              <div className="text-gray-600 text-sm">Aumento nas Conversões</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Atendimento Automatizado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">∞</div>
              <div className="text-gray-600 text-sm">Usuários e Conexões</div>
            </div>
          </div>
        </div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} color={feature.color} />)}
        </div>
        
        {/* Call to Action Melhorado */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-3xl shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Revolucionar seu Atendimento?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 5.000 empresas que já transformaram seus resultados
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Quero Transformar Meu Negócio Agora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <div className="mt-6 text-blue-100 text-sm">
            ⚡ Instalação em 24h • 🔒 Garantia de 30 dias • 🎯 Suporte especializado
          </div>
        </div>
      </div>
    </section>;
};
export default TransformeSection;