
import React, { useState, useEffect } from 'react';
import { Check, Clock, Server } from 'lucide-react';

const ZproSection = () => {
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
    setTimeout(() => animateNumber(0, 31250, setChannelsCount), 300);
    setTimeout(() => animateNumber(0, 1536, setSubscribersCount), 500);
    setTimeout(() => animateNumber(0, 350, setMessagesCount), 700);
  }, []);

  return (
    <section id="sistema-golden" className="bg-blue-950 py-20 px-4 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-800 text-blue-200 text-sm font-medium mb-4">
            Plataforma completa
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">O que é o <span className="text-amber-400">WhatTicket Profissional</span>?</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            O WhatTicket Profissional é uma plataforma de multiatendimento para WhatsApp com recursos avançados de automação e gestão para empresas e revendedores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-blue-900/50 p-8 rounded-xl text-center">
            <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">+ {channelsCount.toLocaleString()}</div>
            <div className="text-blue-200">Canais conectados</div>
          </div>
          
          <div className="bg-blue-900/50 p-8 rounded-xl text-center">
            <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">+ {subscribersCount.toLocaleString()}</div>
            <div className="text-blue-200">Assinantes</div>
          </div>
          
          <div className="bg-blue-900/50 p-8 rounded-xl text-center">
            <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">+ {messagesCount} k</div>
            <div className="text-blue-200">Mensagens processadas por dia</div>
          </div>
        </div>

        <div className="bg-blue-900/30 rounded-xl p-6 md:p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Para Empresas</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-800 p-2 rounded-full">
                    <Check className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Multiatendimento</h3>
                    <p className="text-blue-200">Gerencie múltiplos atendimentos simultaneamente com eficiência e organização.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-800 p-2 rounded-full">
                    <Check className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Automação de mensagens</h3>
                    <p className="text-blue-200">Configure respostas automáticas e fluxos de conversação para otimizar o atendimento.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-800 p-2 rounded-full">
                    <Check className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Chatbot inteligente</h3>
                    <p className="text-blue-200">Automatize o atendimento inicial e direcione os clientes para os setores corretos.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-800 p-2 rounded-full">
                    <Check className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">CRM integrado</h3>
                    <p className="text-blue-200">Gerencie seus clientes e histórico de conversas em um único lugar.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Para Revendedores</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-800 p-2 rounded-full">
                    <Check className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Whitelabel completo</h3>
                    <p className="text-blue-200">Personalize o sistema com sua marca e identidade visual.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-800 p-2 rounded-full">
                    <Check className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Gestão de clientes</h3>
                    <p className="text-blue-200">Administre todos os seus clientes em um único painel de controle.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-800 p-2 rounded-full">
                    <Check className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Suporte humano</h3>
                    <p className="text-blue-200">Ofereça suporte exclusivo para seus clientes com sua própria equipe.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-800 p-2 rounded-full">
                    <Check className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Múltiplos planos</h3>
                    <p className="text-blue-200">Crie diferentes planos de assinatura para seus clientes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-900/30 rounded-xl p-6 md:p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
            <div className="bg-blue-800 p-4 rounded-full">
              <Server className="h-10 w-10 text-amber-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Requisitos Mínimos do Sistema</h3>
              <p className="text-xl text-blue-200">
                Para garantir o melhor desempenho do WhatTicket Profissional, recomendamos os seguintes requisitos:
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <div className="bg-blue-900/50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-amber-400 mb-3">Memória (RAM)</h4>
              <p className="text-blue-100 text-lg">8GB ou mais</p>
            </div>
            
            <div className="bg-blue-900/50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-amber-400 mb-3">Processamento</h4>
              <p className="text-blue-100 text-lg">4 vCPUs ou mais</p>
            </div>
            
            <div className="bg-blue-900/50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-amber-400 mb-3">Latência</h4>
              <p className="text-blue-100 text-lg">50ms ou menos</p>
            </div>
          </div>
          
          <div className="mt-6 text-blue-200 text-center p-4 bg-blue-900/30 rounded-lg">
            <p className="text-lg">A contratação e gestão da VPS é de responsabilidade do cliente.</p>
          </div>
        </div>

        <div className="bg-blue-900/30 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-blue-800 p-4 rounded-full">
              <Clock className="h-10 w-10 text-amber-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Implementação Rápida</h3>
              <p className="text-xl text-blue-200">
                Instalação completa do WhatTicket Profissional em apenas <span className="text-amber-400 font-bold">24 horas</span>, 
                com configuração e treinamento inclusos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZproSection;
