
import React from 'react';
import { Check, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCategory {
  name: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
}

const featureCategories: FeatureCategory[] = [
  {
    name: "Conectividade",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M4.5 19.5c-1.5-1.26-2.5-3.44-2.5-5.5 0-4.42 3.58-8 8-8 .3 0 .59.02.89.05"/><path d="M17 12a5 5 0 0 0-10 0"/><path d="M15 12a3 3 0 0 0-6 0"/><path d="M14 7.5a1.5 1.5 0 0 0-3 0v12a1.5 1.5 0 0 0 3 0z"/><path d="M16.5 19.5C15 20.76 13 22 9.5 22"/></svg>,
    description: "Conexões versáteis com múltiplas plataformas e dispositivos",
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
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2v8"/><path d="m16 12 4.5 7.5"/><path d="M3.5 19.5 8 12"/><path d="M2 2h20v20H2z"/><path d="m2 22 20-20"/></svg>,
    description: "Adapte o sistema para refletir sua marca e identidade",
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
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    description: "Gerencie conversas e automatize respostas com eficiência",
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
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><path d="M15 14c.2-1 1.6-1.5 3-1.5s4 1 3.5 3.5c-.4 2-3 2-4.5-.5M15 19c-.5 1-1.7 1.5-3 1.5-2.7 0-4-2.5-4-2.5 2.4-1.5 3 .5 4 1.5 1.8-1 3-1 4-1"/></svg>,
    description: "Monitore e optimize suas operações com ferramentas robustas",
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
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M19 14c1.49-1.46 2-3.21 2-5"/></svg>,
    description: "Recursos exclusivos que potencializam sua operação",
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
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2"/><path d="M18 15h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2z"/></svg>,
    description: "Assistência completa para manter seu sistema funcionando perfeitamente",
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
  return (
    <section id="funcionalidades" className="py-24 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 fade-in-section">
          <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 text-blue-700 font-medium mb-4">
            <Star className="w-4 h-4 mr-2" /> Funcionalidades Poderosas
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600">
            Tudo que você vai ter acesso
          </h2>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore todas as poderosas funcionalidades inclusas no Sistema Diamond para transformar seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {featureCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="border border-gray-100 rounded-xl overflow-hidden transition-all duration-300 bg-white shadow-md hover:shadow-xl"
            >
              <div className="px-6 py-6 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-100 to-indigo-100">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                    <p className="text-gray-600 mt-1">{category.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="px-6 pb-6 pt-4 bg-white">
                <div className="grid grid-cols-1 gap-y-3 border-t border-gray-100 pt-4">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full p-1 flex-shrink-0">
                        <Check className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedFeaturesList;
