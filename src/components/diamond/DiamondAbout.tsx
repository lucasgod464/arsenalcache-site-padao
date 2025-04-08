
import React, { useState, useEffect } from 'react';
import { Check, Database, Server, Zap, Shield, Cloud, Users, BarChart, ArrowRight } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

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
      {/* Enhanced background with deeper gradients and patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-blue-800 to-blue-900 -z-10"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-15 -z-10"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-40 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 fade-in-section">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600/40 to-blue-400/40 backdrop-blur-sm rounded-full px-4 py-2 text-blue-50 font-medium mb-4 shadow-lg shadow-blue-900/20 border border-blue-400/20">
            <Zap className="w-4 h-4 mr-2 text-blue-200" /> 
            Conheça nossa plataforma
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white drop-shadow-md">
            O que é o <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent font-extrabold">Sistema Diamond</span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-blue-500/60 to-indigo-500/60 -rotate-1 rounded-lg"></span>
            </span>?
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            O Sistema Diamond é uma solução empresarial completa que transforma seu WhatsApp em uma 
            <span className="font-semibold text-white px-1">poderosa ferramenta</span> de relacionamento, 
            automação e vendas, com infraestrutura robusta e alta escalabilidade.
          </p>
        </div>

        {/* Stats cards with improved visuals and 3D effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-700 to-indigo-800 p-8 rounded-xl text-center border border-blue-400/20 shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="mb-4 mx-auto bg-gradient-to-br from-blue-500/40 to-blue-400/40 rounded-full w-16 h-16 flex items-center justify-center">
              <Cloud className="h-8 w-8 text-blue-100" />
            </div>
            <div className="text-3xl md:text-5xl font-bold text-white mb-2">+ {channelsCount.toLocaleString()}</div>
            <div className="text-blue-200 font-medium">Conexões gerenciadas</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-700 to-indigo-800 p-8 rounded-xl text-center border border-blue-400/20 shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="mb-4 mx-auto bg-gradient-to-br from-blue-500/40 to-blue-400/40 rounded-full w-16 h-16 flex items-center justify-center">
              <Users className="h-8 w-8 text-blue-100" />
            </div>
            <div className="text-3xl md:text-5xl font-bold text-white mb-2">+ {subscribersCount.toLocaleString()}</div>
            <div className="text-blue-200 font-medium">Clientes atendidos</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-700 to-indigo-800 p-8 rounded-xl text-center border border-blue-400/20 shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="mb-4 mx-auto bg-gradient-to-br from-blue-500/40 to-blue-400/40 rounded-full w-16 h-16 flex items-center justify-center">
              <BarChart className="h-8 w-8 text-blue-100" />
            </div>
            <div className="text-3xl md:text-5xl font-bold text-white mb-2">+ {messagesCount} k</div>
            <div className="text-blue-200 font-medium">Mensagens processadas por dia</div>
          </div>
        </div>

        {/* Feature grids with enhanced visuals */}
        <div className="bg-gradient-to-r from-blue-900/80 to-indigo-900/80 backdrop-blur-xl rounded-2xl p-8 mb-16 border border-blue-400/20 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-blue-300" />
                  Para Empresas
                </h3>
                <Separator className="bg-blue-400/30 my-3" />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-2 rounded-full shadow-md shadow-blue-900/20">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Conexões Flexíveis</h3>
                    <p className="text-blue-100">Escolha o plano ideal com de 30 a 430 conexões disponíveis para seu negócio.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-2 rounded-full shadow-md shadow-blue-900/20">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Automação Completa</h3>
                    <p className="text-blue-100">Automatize atendimentos, vendas e processos com ferramentas premium já inclusas no pacote.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-2 rounded-full shadow-md shadow-blue-900/20">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Suporte Técnico</h3>
                    <p className="text-blue-100">Conte com suporte técnico especializado para resolver qualquer problema rapidamente.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-2 rounded-full shadow-md shadow-blue-900/20">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Instalação Profissional</h3>
                    <p className="text-blue-100">Instalação completa e configuração personalizada em servidores premium.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                  <Server className="h-6 w-6 mr-2 text-blue-300" />
                  Diferenciais Exclusivos
                </h3>
                <Separator className="bg-blue-400/30 my-3" />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-2 rounded-full shadow-md shadow-blue-900/20">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Pacote Completo de Softwares</h3>
                    <p className="text-blue-100">Evolution API, n8n, Typebot, Redis e mais, tudo já configurado e pronto para uso.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-2 rounded-full shadow-md shadow-blue-900/20">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Alta Disponibilidade</h3>
                    <p className="text-blue-100">Infraestrutura em nuvem de alto desempenho com monitoramento 24/7 e backup automático.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-2 rounded-full shadow-md shadow-blue-900/20">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Implementação Rápida</h3>
                    <p className="text-blue-100">Seu sistema funcionando em até 24 horas, sem complicações técnicas para você.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-2 rounded-full shadow-md shadow-blue-900/20">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Escalabilidade Garantida</h3>
                    <p className="text-blue-100">Comece com o plano básico e escale facilmente conforme seu negócio cresce.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom highlight section with enhanced call-to-action */}
        <div className="bg-gradient-to-r from-blue-700/80 to-indigo-700/80 backdrop-blur-xl rounded-2xl p-8 border border-blue-400/20 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-full shadow-lg">
              <Database className="h-12 w-12 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">Sistema Poderoso e Completo</h3>
              <p className="text-xl text-blue-100 mb-6">
                O Sistema Diamond unifica gerenciamento de conexões, automação de processos e chatbots inteligentes em uma única solução, 
                pronta para uso em <span className="text-white font-bold">24 horas</span>, sem necessidade de conhecimento técnico.
              </p>
              <Button 
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6 py-6 h-auto rounded-full shadow-lg shadow-blue-900/30 transition-all duration-300 hover:-translate-y-1 group"
                onClick={() => {
                  const plansSection = document.getElementById('planos');
                  if (plansSection) {
                    plansSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Conheça nossos planos
                <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiamondAbout;
