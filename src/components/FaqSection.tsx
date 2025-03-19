
import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqItems = [
  {
    question: "O que é o sistema de multiatendimento da Arsenal Cache?",
    answer: "É uma plataforma whitelabel que permite gerenciar múltiplos atendimentos via WhatsApp de forma profissional, com possibilidade de personalização completa, usuários e conexões ilimitadas e funcionalidades avançadas de automação."
  },
  {
    question: "Como funciona o modelo de pagamento único?",
    answer: "Você faz um único pagamento pela instalação do sistema (que pode ser parcelado em até 12x sem juros). Depois disso, há apenas uma renovação anual com valor reduzido para manter o suporte e as atualizações."
  },
  {
    question: "Posso revender o sistema para meus clientes?",
    answer: "Sim, você pode revender para quantos clientes quiser, sem limites ou taxas adicionais. O sistema permite personalização completa com sua marca, funcionando como seu próprio produto."
  },
  {
    question: "Quais as diferenças entre os planos oferecidos?",
    answer: "O plano básico inclui todas as funcionalidades essenciais do sistema. O plano premium adiciona softwares complementares premium e a possibilidade de integração com Instagram e Facebook (mediante assinatura mensal opcional)."
  },
  {
    question: "Como é feita a instalação do sistema?",
    answer: "Todo o processo de instalação é realizado pela nossa equipe técnica em um servidor de sua escolha. Você não precisa se preocupar com aspectos técnicos da implementação."
  },
  {
    question: "Há limites de mensagens ou atendimentos simultâneos?",
    answer: "Não há limites impostos pelo nosso sistema. As únicas limitações são as do próprio WhatsApp ou da capacidade do servidor onde o sistema estiver instalado."
  },
  {
    question: "O que acontece após o período de um ano?",
    answer: "Após um ano, você pode optar por renovar o suporte e atualizações por um valor reduzido. O sistema continuará funcionando mesmo sem a renovação, mas você não receberá novas atualizações ou suporte técnico."
  }
];

const FaqSection = () => {
  const [expandedFaq, setExpandedFaq] = useState(0);

  const toggleFaq = (index: number) => {
    setExpandedFaq(index === expandedFaq ? -1 : index);
  };

  return (
    <section id="faq" className="hero-gradient py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <span className="inline-block py-1 px-3 rounded-full bg-arsenal-light/20 text-arsenal-dark text-sm font-medium mb-4">
            Perguntas frequentes
          </span>
          <h2 className="section-title">Dúvidas comuns sobre o <span className="text-gradient">MultiAtendimento</span></h2>
          <p className="section-subtitle">
            Encontre respostas para as perguntas mais frequentes sobre nosso sistema.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((faq, index) => (
            <div 
              key={index}
              className={cn(
                "border border-gray-100 rounded-xl mb-4 overflow-hidden transition-all duration-300 bg-white",
                expandedFaq === index ? "shadow-md" : ""
              )}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                {expandedFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {expandedFaq === index && (
                <div className="px-6 pb-6 animate-accordion-down">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
