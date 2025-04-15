
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string;
};

const DiamondFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems: FaqItem[] = [
    {
      question: "Quais são os softwares inclusos em todos os planos?",
      answer: "Todos os planos incluem a instalação e configuração dos seguintes softwares em sua VPS: n8n para automação de fluxos, Redis para cache e desempenho, Evolution API para gerenciamento avançado de WhatsApp, Dify para processamento de linguagem natural, e Typebot para criação de chatbots conversacionais."
    },
    {
      question: "Como funciona a instalação dos planos?",
      answer: "Após a contratação, nossa equipe técnica realizará a instalação completa em servidores premium de alta performance. Todo o processo é feito por nossos especialistas, garantindo a configuração correta de todos os softwares e ajustes de segurança necessários."
    },
    {
      question: "Preciso ter conhecimento técnico para utilizar o sistema?",
      answer: "Não é necessário conhecimento técnico avançado. Nossa equipe oferece treinamento inicial e documentação completa para uso das ferramentas. Além disso, você tem acesso ao suporte técnico para resolver quaisquer dúvidas ou problemas."
    },
    {
      question: "O que acontece se eu precisar de mais conexões no futuro?",
      answer: "É possível fazer upgrade do seu plano a qualquer momento, aumentando o número de conexões disponíveis. Entre em contato com nosso suporte para avaliar as opções e receber um orçamento personalizado para a migração."
    },
    {
      question: "Como funciona o suporte técnico?",
      answer: "Oferecemos suporte técnico dedicado por meio de um canal prioritário no WhatsApp. Nossa equipe está disponível em horário comercial para resolver problemas técnicos, responder dúvidas e auxiliar na otimização do sistema."
    },
    {
      question: "Posso personalizar os softwares inclusos?",
      answer: "Sim, todos os softwares podem ser customizados de acordo com as necessidades do seu negócio. Nossa equipe pode ajudar com configurações específicas, integrações adicionais e ajustes para otimizar o uso das ferramentas."
    }
  ];

  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
            <HelpCircle className="w-6 h-6 text-blue-600 mr-2" />
            <span className="text-blue-800 font-medium">Perguntas frequentes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tire suas <span className="text-blue-600">dúvidas</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre o WhatTicket Profissional e nossos planos de conexões.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="border border-blue-100 rounded-xl overflow-hidden transition-all duration-300 bg-white shadow-sm hover:shadow-md"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 animate-accordion-down">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiamondFaq;
