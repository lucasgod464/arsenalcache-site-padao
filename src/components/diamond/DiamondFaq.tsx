
import React, { useState } from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string;
};

const DiamondFaq = () => {
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
    },
    {
      question: "Qual é o tempo médio de instalação dos serviços?",
      answer: "A instalação completa dos serviços é realizada em até 24 horas após a confirmação do pagamento. Em casos de alta demanda, o prazo máximo é de até 48 horas."
    },
    {
      question: "Os servidores são monitorados?",
      answer: "Sim, todos os servidores são monitorados 24/7 por nossa equipe técnica. Utilizamos ferramentas avançadas de monitoramento para garantir a estabilidade e o desempenho ideal dos serviços."
    },
    {
      question: "É possível migrar de outro serviço para o de vocês?",
      answer: "Sim, oferecemos serviço de migração para clientes que já utilizam outras soluções. Nossa equipe técnica realiza todo o processo, garantindo que seus dados sejam transferidos de forma segura e sem interrupção nos atendimentos."
    },
    {
      question: "Oferecem backup dos dados?",
      answer: "Sim, todos os planos incluem backup automático diário dos dados. Mantemos backups seguros por 7 dias, garantindo que seus dados estejam protegidos contra perdas acidentais."
    }
  ];

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
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-blue-100 rounded-xl overflow-hidden transition-all duration-300 bg-white shadow-sm hover:shadow-md mb-4"
              >
                <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default DiamondFaq;
