
import React, { useState, useEffect } from 'react';
import { Check, Clock, Server } from 'lucide-react';

const ZproSection = () => {
  return (
    <section id="ia-conecta-solucao" className="bg-blue-950 py-20 px-4 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-800 text-blue-200 text-sm font-medium mb-4">
            Plataforma completa
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">IA Conecta - <span className="text-amber-400">Solução de IA Sem Limites</span></h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            O Whaticket Profissional é uma plataforma avançada de multiatendimento para WhatsApp com recursos de automação, CRM integrado e gestão completa para empresas e revendedores que desejam escalar seus negócios.
          </p>
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
                    <p className="text-blue-200">Gerencie múltiplos atendimentos simultaneamente com eficiência e organize fluxos de trabalho inteligentes.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-800 p-2 rounded-full">
                    <Check className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Automação de mensagens</h3>
                    <p className="text-blue-200">Configure respostas automáticas personalizadas e fluxos de conversação para atendimento 24/7.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-800 p-2 rounded-full">
                    <Check className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Chatbot inteligente</h3>
                    <p className="text-blue-200">Automatize o atendimento inicial com IA e direcione os clientes para os departamentos corretos automaticamente.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-800 p-2 rounded-full">
                    <Check className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">CRM integrado</h3>
                    <p className="text-blue-200">Gerencie clientes, histórico de conversas e pedidos em uma interface unificada e intuitiva.</p>
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
                    <p className="text-blue-200">Personalize o sistema com sua marca, logo e identidade visual para oferecer como seu próprio produto.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-800 p-2 rounded-full">
                    <Check className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Gestão de clientes</h3>
                    <p className="text-blue-200">Administre todos os seus clientes em um painel de controle centralizado com relatórios detalhados.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-800 p-2 rounded-full">
                    <Check className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Suporte humano</h3>
                    <p className="text-blue-200">Ofereça suporte exclusivo e personalizado para seus clientes com sua própria equipe treinada.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-800 p-2 rounded-full">
                    <Check className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Múltiplos planos</h3>
                    <p className="text-blue-200">Crie e gerencie diferentes planos de assinatura com recursos personalizados para cada perfil de cliente.</p>
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
                Para garantir o melhor desempenho do Whaticket Profissional, recomendamos os seguintes requisitos técnicos:
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <div className="bg-blue-900/50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-amber-400 mb-3">Memória (RAM)</h4>
              <p className="text-blue-100 text-lg">8GB ou mais para operação ideal</p>
            </div>
            
            <div className="bg-blue-900/50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-amber-400 mb-3">Processamento</h4>
              <p className="text-blue-100 text-lg">4 vCPUs ou mais para melhor desempenho</p>
            </div>
            
            <div className="bg-blue-900/50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-amber-400 mb-3">Latência</h4>
              <p className="text-blue-100 text-lg">50ms ou menos para resposta instantânea</p>
            </div>
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
                Instalação completa do Whaticket Profissional em apenas <span className="text-amber-400 font-bold">24 horas</span>, 
                com configuração e treinamento inclusos para você começar a operar imediatamente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZproSection;
