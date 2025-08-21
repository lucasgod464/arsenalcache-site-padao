import React, { useState, useEffect } from 'react';
import { Check, Clock, Server } from 'lucide-react';
import SystemCarousel from './SystemCarousel';

const ZproSection = () => {
  return <section id="sistema-golden" className="dark-gradient py-24 px-4 text-white relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-brand-primary/10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-accent/10 blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 fade-in-section">
          <span className="status-badge-warning mb-6 text-brand-accent-dark border-brand-accent/30">
            🚀 Plataforma Profissional Definitiva
          </span>
          <h2 className="section-title text-white mb-8">
            Conheça o <span className="gradient-text-accent">Whaticket Pro</span>
          </h2>
          <p className="section-subtitle text-neutral-300">
            A única plataforma de WhatsApp Business com <strong className="text-brand-accent">usuários ilimitados</strong>, 
            <strong className="text-brand-accent"> conexões sem limite</strong> e recursos profissionais que 
            transformam seu atendimento em uma máquina de vendas 24/7.
          </p>
          
          {/* Badges de destaque */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="glass-dark px-4 py-2 rounded-full border border-white/20">
              <span className="text-brand-accent font-semibold">✅ Usuários Ilimitados</span>
            </div>
            <div className="glass-dark px-4 py-2 rounded-full border border-white/20">
              <span className="text-brand-accent font-semibold">✅ Conexões Infinitas</span>
            </div>
            <div className="glass-dark px-4 py-2 rounded-full border border-white/20">
              <span className="text-brand-accent font-semibold">✅ Sistema Whitelabel</span>
            </div>
          </div>
        </div>

        <SystemCarousel />

        {/* Call to Action Final */}
        <div className="bg-gradient-to-r from-brand-accent/10 via-brand-accent/5 to-brand-accent/10 glass-dark rounded-2xl p-8 md:p-12 border border-brand-accent/30">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-brand-accent/20 px-4 py-2 rounded-full border border-brand-accent/40 mb-6">
              <Clock className="h-6 w-6 text-brand-accent" />
              <span className="text-brand-accent font-semibold">Implementação Express</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Seu Whaticket Pro Funcionando em <span className="text-brand-accent">24 Horas</span>
            </h3>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
              Instalação completa, configuração personalizada, treinamento da equipe e suporte premium. 
              Tudo incluso para você começar a <strong className="text-brand-accent">vender mais</strong> amanhã mesmo.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-neutral-300">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-brand-accent" />
                <span>Instalação Gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-brand-accent" />
                <span>Configuração Personalizada</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-brand-accent" />
                <span>Treinamento Incluso</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-brand-accent" />
                <span>Suporte Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ZproSection;