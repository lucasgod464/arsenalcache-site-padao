
import React from 'react';
import { 
  Server, Shield, Zap, Wrench, Clock, Users, 
  RefreshCw, BarChart, Laptop, Database
} from 'lucide-react';

const DiamondFeatures = () => {
  const features = [
    {
      icon: <Server className="w-12 h-12 text-white" />,
      title: "Conexões Poderosas",
      description: "De 30 a 430 conexões disponíveis para atender desde pequenas empresas até grandes operações.",
      color: "bg-blue-600"
    },
    {
      icon: <Shield className="w-12 h-12 text-white" />,
      title: "Segurança Avançada",
      description: "Configurações de segurança robustas para proteger suas conexões e dados de clientes.",
      color: "bg-indigo-600"
    },
    {
      icon: <Zap className="w-12 h-12 text-white" />,
      title: "Softwares Premium",
      description: "n8n, Redis, Evolution API, Dify e Typebot inclusos em todos os planos para potencializar seu atendimento.",
      color: "bg-blue-600"
    },
    {
      icon: <Wrench className="w-12 h-12 text-white" />,
      title: "Suporte Técnico",
      description: "Suporte dedicado e técnico para resolver qualquer problema e garantir funcionamento perfeito.",
      color: "bg-indigo-600"
    },
    {
      icon: <Clock className="w-12 h-12 text-white" />,
      title: "Instalação Rápida",
      description: "Instalação profissional em servidores premium com configuração completa e personalizada.",
      color: "bg-blue-600"
    },
    {
      icon: <BarChart className="w-12 h-12 text-white" />,
      title: "Monitoramento Constante",
      description: "Sistemas de monitoramento em tempo real para garantir estabilidade e desempenho.",
      color: "bg-indigo-600"
    }
  ];

  return (
    <section id="recursos" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
            <Database className="w-6 h-6 text-blue-600 mr-2" />
            <span className="text-blue-800 font-medium">Recursos exclusivos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 text-transparent">
            Potencialize suas Conexões
          </h2>
          <p className="text-lg text-gray-600">
            O Sistema Diamond oferece uma infraestrutura robusta e ferramentas avançadas para maximizar o desempenho do seu atendimento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group fade-in-section">
              <div className="flex flex-col items-center text-center relative">
                <div className={`${feature.color} w-24 h-24 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-all duration-300 rotate-3 group-hover:rotate-0`}>
                  <div className="absolute inset-0 bg-white opacity-20 rounded-2xl"></div>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                
                <div className="h-1 w-16 bg-indigo-400 rounded-full mb-4 transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                
                <p className="text-gray-600 max-w-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiamondFeatures;
