
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
            Transforme seu WhatsApp
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">O que é o <span className="text-blue-200">Sistema Diamond</span>?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            O Sistema Diamond é uma solução empresarial completa que transforma seu WhatsApp em uma poderosa ferramenta de relacionamento, automação e vendas, com infraestrutura robusta e alta escalabilidade.
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
                    <h3 className="text-xl font-semibold mb-2">Automação Completa</h3>
                    <p className="text-blue-100">Automatize atendimentos, vendas e processos com ferramentas premium já inclusas no pacote.</p>
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
              <h3 className="text-2xl font-bold text-blue-200 mb-4">Diferenciais Exclusivos</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-700 p-2 rounded-full">
                    <Check className="h-5 w-5 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Pacote Completo de Softwares</h3>
                    <p className="text-blue-100">Evolution API, n8n, Typebot, Redis e mais, tudo já configurado e pronto para uso.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-700 p-2 rounded-full">
                    <Check className="h-5 w-5 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Alta Disponibilidade</h3>
                    <p className="text-blue-100">Infraestrutura em nuvem de alto desempenho com monitoramento 24/7 e backup automático.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-700 p-2 rounded-full">
                    <Check className="h-5 w-5 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Implementação Rápida</h3>
                    <p className="text-blue-100">Seu sistema funcionando em até 24 horas, sem complicações técnicas para você.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-700 p-2 rounded-full">
                    <Check className="h-5 w-5 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Escalabilidade Garantida</h3>
                    <p className="text-blue-100">Comece com o plano básico e escale facilmente conforme seu negócio cresce.</p>
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
              <h3 className="text-2xl font-bold mb-2">Sistema Poderoso e Completo</h3>
              <p className="text-xl text-blue-100">
                O Sistema Diamond unifica gerenciamento de conexões, automação de processos e chatbots inteligentes em uma única solução, 
                pronta para uso em <span className="text-blue-200 font-bold">24 horas</span>, sem necessidade de conhecimento técnico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiamondAbout;
