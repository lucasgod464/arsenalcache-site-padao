import React, { useState, useEffect } from 'react';
import { Check, Clock, Server } from 'lucide-react';
import SystemCarousel from './SystemCarousel';
const ZproSection = () => {
  return <section id="sistema-golden" className="bg-gradient-to-br from-blue-950 via-blue-900 to-purple-900 py-24 px-4 text-white relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-400/10 blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 fade-in-section">
          <span className="inline-block py-2 px-4 rounded-full bg-gradient-to-r from-amber-400/20 to-amber-300/20 border border-amber-400/30 text-amber-300 text-sm font-medium mb-6">
            🚀 Plataforma Profissional Definitiva
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Conheça o <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400">Whaticket Pro</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            A única plataforma de WhatsApp Business com <strong className="text-amber-300">usuários ilimitados</strong>, 
            <strong className="text-amber-300"> conexões sem limite</strong> e recursos profissionais que 
            transformam seu atendimento em uma máquina de vendas 24/7.
          </p>
          
          {/* Badges de destaque */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="text-amber-300 font-semibold">✅ Usuários Ilimitados</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="text-amber-300 font-semibold">✅ Conexões Infinitas</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="text-amber-300 font-semibold">✅ Sistema Whitelabel</span>
            </div>
          </div>
        </div>

        <SystemCarousel />

        {/* Seção de Recursos Técnicos */}
        <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-20 border border-white/20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 px-4 py-2 rounded-full border border-emerald-400/30 mb-4">
              <Server className="h-6 w-6 text-emerald-300" />
              <span className="text-emerald-300 font-semibold">Infraestrutura Premium</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white">Performance de Nível Enterprise</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Arquitetura otimizada para <strong className="text-emerald-300">alta disponibilidade</strong> e 
              <strong className="text-emerald-300"> performance máxima</strong>, garantindo que seu Whaticket Pro opere sem falhas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-900/40 to-green-900/40 p-8 rounded-xl border border-emerald-500/30">
              <div className="text-4xl font-bold text-emerald-300 mb-2">6GB+</div>
              <h4 className="text-xl font-semibold text-white mb-3">Memória RAM</h4>
              <p className="text-emerald-100">Processamento rápido para milhares de conversas simultâneas</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 p-8 rounded-xl border border-blue-500/30">
              <div className="text-4xl font-bold text-blue-300 mb-2">2+ vCPUs</div>
              <h4 className="text-xl font-semibold text-white mb-3">Processamento</h4>
              <p className="text-blue-100">Poder computacional para automações complexas e IA</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-8 rounded-xl border border-purple-500/30">
              <div className="text-4xl font-bold text-purple-300 mb-2">&lt;50ms</div>
              <h4 className="text-xl font-semibold text-white mb-3">Latência</h4>
              <p className="text-purple-100">Respostas instantâneas que impressionam seus clientes</p>
            </div>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-amber-400/30">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 px-4 py-2 rounded-full border border-amber-400/40 mb-6">
              <Clock className="h-6 w-6 text-amber-300" />
              <span className="text-amber-300 font-semibold">Implementação Express</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Seu Whaticket Pro Funcionando em <span className="text-amber-300">24 Horas</span>
            </h3>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-8">
              Instalação completa, configuração personalizada, treinamento da equipe e suporte premium. 
              Tudo incluso para você começar a <strong>vender mais</strong> amanhã mesmo.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-amber-200">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-amber-300" />
                <span>Instalação Gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-amber-300" />
                <span>Configuração Personalizada</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-amber-300" />
                <span>Treinamento Incluso</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-amber-300" />
                <span>Suporte Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ZproSection;