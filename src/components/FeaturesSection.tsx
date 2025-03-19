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
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
            <Lightbulb className="w-6 h-6 text-blue-600 mr-2" />
            <span className="text-blue-800 font-medium">Recursos exclusivos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-blue-700 to-amber-500 text-slate-950">
            Transforme seu Atendimento
          </h2>
          <p className="text-lg text-gray-600">
            O Multiatendimento da Arsenal Cache oferece ferramentas poderosas para elevar o relacionamento com seus clientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((feature, index) => <div key={index} className="feature-card group fade-in-section">
              <div className="flex flex-col items-center text-center relative">
                {/* Floating animated icon wrapper */}
                <div className={`${feature.color} w-24 h-24 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-all duration-300 rotate-3 group-hover:rotate-0`}>
                  <div className="absolute inset-0 bg-white opacity-20 rounded-2xl"></div>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                
                {/* Animated underline on hover */}
                <div className="h-1 w-16 bg-amber-400 rounded-full mb-4 transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                
                <p className="text-gray-600 max-w-sm">
                  {feature.description}
                </p>
              </div>
            </div>)}
        </div>
        
        {/* Marketing stats section */}
        <div className="mt-24 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="flex flex-col items-center">
                <Zap className="w-10 h-10 text-amber-400 mb-3" />
                <h4 className="text-4xl font-bold mb-2">97%</h4>
                <p className="text-blue-100">Aumento em satisfação de clientes</p>
              </div>
            </div>
            
            <div className="text-center md:border-x border-blue-500/50 px-4">
              <div className="flex flex-col items-center">
                <MessageSquare className="w-10 h-10 text-amber-400 mb-3" />
                <h4 className="text-4xl font-bold mb-2">74%</h4>
                <p className="text-blue-100">Redução no tempo de resposta</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex flex-col items-center">
                <Users className="w-10 h-10 text-amber-400 mb-3" />
                <h4 className="text-4xl font-bold mb-2">86%</h4>
                <p className="text-blue-100">Melhoria na retenção de clientes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FeaturesSection;