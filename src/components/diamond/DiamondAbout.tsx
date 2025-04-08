
import React, { useState, useEffect } from 'react';
import { Check, Database, Server, Zap } from 'lucide-react';

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
    <section id="sobre-diamond" className="bg-gradient-to-b from-blue-600 to-blue-900 py-20 px-4 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500 text-blue-50 text-sm font-medium mb-4">
            Infraestrutura premium
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">O que é o <span className="text-blue-200">Sistema Diamond</span>?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            O Sistema Diamond é uma plataforma de conexões para WhatsApp com infraestrutura robusta, softwares premium inclusos e suporte técnico dedicado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-blue-800/50 p-8 rounded-xl text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-200 mb-2">+ {channelsCount.toLocaleString()}</div>
            <div className="text-blue-100">Conexões gerenciadas</div>
          </div>
          
          <div className="bg-blue-800/50 p-8 rounded-xl text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-200 mb-2">+ {subscribersCount.toLocaleString()}</div>
            <div className="text-blue-100">Clientes atendidos</div>
          </div>
          
          <div className="bg-blue-800/50 p-8 rounded-xl text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-200 mb-2">+ {messagesCount} k</div>
            <div className="text-blue-100">Mensagens processadas por dia</div>
          </div>
        </div>

        <div className="bg-blue-800/30 rounded-xl p-6 md:p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-200 mb-4">Para Empresas</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-700 p-2 rounded-full">
                    <Check className="h-5 w-5 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Conexões Flexíveis</h3>
                    <p className="text-blue-100">Escolha o plano ideal com de 30 a 430 conexões disponíveis para seu negócio.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-700 p-2 rounded-full">
                    <Check className="h-5 w-5 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Softwares Premium</h3>
                    <p className="text-blue-100">Tenha acesso a ferramentas como n8n, Redis, Evolution API, Dify e Typebot.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-700 p-2 rounded-full">
                    <Check className="h-5 w-5 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Suporte Técnico</h3>
                    <p className="text-blue-100">Conte com suporte técnico especializado para resolver qualquer problema rapidamente.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-700 p-2 rounded-full">
                    <Check className="h-5 w-5 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Instalação Profissional</h3>
                    <p className="text-blue-100">Instalação completa e configuração personalizada em servidores premium.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-200 mb-4">Para Empreendedores</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-700 p-2 rounded-full">
                    <Check className="h-5 w-5 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Crescimento escalável</h3>
                    <p className="text-blue-100">Comece com um plano básico e faça upgrade conforme seu negócio cresce.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-700 p-2 rounded-full">
                    <Check className="h-5 w-5 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Monitoramento constante</h3>
                    <p className="text-blue-100">Sistemas de monitoramento em tempo real para garantir estabilidade e desempenho.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-700 p-2 rounded-full">
                    <Check className="h-5 w-5 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Segurança avançada</h3>
                    <p className="text-blue-100">Configurações robustas de segurança para proteger suas conexões e dados.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-700 p-2 rounded-full">
                    <Check className="h-5 w-5 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Atualizações recorrentes</h3>
                    <p className="text-blue-100">Mantenha-se sempre atualizado com as últimas versões e melhorias dos softwares.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-800/30 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-blue-700 p-4 rounded-full">
              <Database className="h-10 w-10 text-blue-200" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Implantação Rápida e Segura</h3>
              <p className="text-xl text-blue-100">
                Instalação completa do Sistema Diamond em apenas <span className="text-blue-200 font-bold">24 horas</span>, 
                com configuração e instruções inclusas para um início imediato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiamondAbout;
