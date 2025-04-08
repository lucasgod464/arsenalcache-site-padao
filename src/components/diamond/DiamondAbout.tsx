
import React, { useState, useEffect } from 'react';
import { Check, Database, Server, Zap, Shield, Cloud, Users, BarChart } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const DiamondAbout = () => {
  const [channelsCount, setChannelsCount] = useState(0);
  const [subscribersCount, setSubscribersCount] = useState(0);
  const [messagesCount, setMessagesCount] = useState(0);

  useEffect(() => {
    const animateNumber = (from, to, setter, duration = 1500) => {
      const startTime = Date.now();
      const updateNumber = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        if (elapsedTime < duration) {
          const progress = elapsedTime / duration;
          const currentValue = Math.floor(from + progress * (to - from));
          setter(currentValue);
          requestAnimationFrame(updateNumber);
        } else {
          setter(to);
        }
      };
      requestAnimationFrame(updateNumber);
    };

    // Start animations with a slight delay between each
    setTimeout(() => animateNumber(0, 28450, setChannelsCount), 300);
    setTimeout(() => animateNumber(0, 1320, setSubscribersCount), 500);
    setTimeout(() => animateNumber(0, 280, setMessagesCount), 700);
  }, []);

  return (
    <section id="sobre-diamond" className="py-24 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-900 -z-10"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-40 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 fade-in-section">
          <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-blue-50 font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" /> 
            Conheça nossa plataforma
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            O que é o <span className="relative inline-block">
              <span className="relative z-10 text-blue-200">Sistema Diamond</span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-blue-500/30 -rotate-1 rounded-lg"></span>
            </span>?
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            O Sistema Diamond é uma solução empresarial completa que transforma seu WhatsApp em uma poderosa 
            ferramenta de relacionamento, automação e vendas, com infraestrutura robusta e alta escalabilidade.
          </p>
        </div>

        {/* Stats cards with improved visuals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-800/50 to-blue-700/30 backdrop-blur-sm p-8 rounded-xl text-center border border-blue-600/30 shadow-lg transform transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 mx-auto bg-blue-500/30 rounded-full w-16 h-16 flex items-center justify-center">
              <Cloud className="h-8 w-8 text-blue-200" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-blue-200 mb-2">+ {channelsCount.toLocaleString()}</div>
            <div className="text-blue-100">Conexões gerenciadas</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-800/50 to-blue-700/30 backdrop-blur-sm p-8 rounded-xl text-center border border-blue-600/30 shadow-lg transform transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 mx-auto bg-blue-500/30 rounded-full w-16 h-16 flex items-center justify-center">
              <Users className="h-8 w-8 text-blue-200" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-blue-200 mb-2">+ {subscribersCount.toLocaleString()}</div>
            <div className="text-blue-100">Clientes atendidos</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-800/50 to-blue-700/30 backdrop-blur-sm p-8 rounded-xl text-center border border-blue-600/30 shadow-lg transform transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 mx-auto bg-blue-500/30 rounded-full w-16 h-16 flex items-center justify-center">
              <BarChart className="h-8 w-8 text-blue-200" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-blue-200 mb-2">+ {messagesCount} k</div>
            <div className="text-blue-100">Mensagens processadas por dia</div>
          </div>
        </div>

        {/* Feature grids with improved visuals */}
        <div className="bg-blue-800/30 backdrop-blur-sm rounded-xl p-8 mb-16 border border-blue-700/50 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-200 mb-2 flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-blue-300" />
                  Para Empresas
                </h3>
                <Separator className="bg-blue-600/50 my-3" />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-2 rounded-full shadow-md">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-100">Conexões Flexíveis</h3>
                    <p className="text-blue-200/80">Escolha o plano ideal com de 30 a 430 conexões disponíveis para seu negócio.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-2 rounded-full shadow-md">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-100">Automação Completa</h3>
                    <p className="text-blue-200/80">Automatize atendimentos, vendas e processos com ferramentas premium já inclusas no pacote.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-2 rounded-full shadow-md">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-100">Suporte Técnico</h3>
                    <p className="text-blue-200/80">Conte com suporte técnico especializado para resolver qualquer problema rapidamente.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-2 rounded-full shadow-md">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-100">Instalação Profissional</h3>
                    <p className="text-blue-200/80">Instalação completa e configuração personalizada em servidores premium.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-200 mb-2 flex items-center">
                  <Server className="h-6 w-6 mr-2 text-blue-300" />
                  Diferenciais Exclusivos
                </h3>
                <Separator className="bg-blue-600/50 my-3" />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-2 rounded-full shadow-md">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-100">Pacote Completo de Softwares</h3>
                    <p className="text-blue-200/80">Evolution API, n8n, Typebot, Redis e mais, tudo já configurado e pronto para uso.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-2 rounded-full shadow-md">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-100">Alta Disponibilidade</h3>
                    <p className="text-blue-200/80">Infraestrutura em nuvem de alto desempenho com monitoramento 24/7 e backup automático.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-2 rounded-full shadow-md">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-100">Implementação Rápida</h3>
                    <p className="text-blue-200/80">Seu sistema funcionando em até 24 horas, sem complicações técnicas para você.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-2 rounded-full shadow-md">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-100">Escalabilidade Garantida</h3>
                    <p className="text-blue-200/80">Comece com o plano básico e escale facilmente conforme seu negócio cresce.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom highlight section */}
        <div className="bg-gradient-to-r from-blue-800/30 to-blue-700/30 backdrop-blur-sm rounded-xl p-8 border border-blue-700/50 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-6 rounded-full shadow-lg">
              <Database className="h-12 w-12 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 text-blue-100">Sistema Poderoso e Completo</h3>
              <p className="text-xl text-blue-200">
                O Sistema Diamond unifica gerenciamento de conexões, automação de processos e chatbots inteligentes em uma única solução, 
                pronta para uso em <span className="text-white font-bold">24 horas</span>, sem necessidade de conhecimento técnico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiamondAbout;
