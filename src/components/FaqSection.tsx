
import React, { useState } from 'react';
import { ChevronUp, ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
  return (
    <section id="faq" className="hero-gradient py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 fade-in-section">
          <div className="flex justify-center mb-4">
            <div className="bg-amber-100 p-3 rounded-full">
              <HelpCircle className="h-8 w-8 text-amber-600" />
            </div>
          </div>
          <h2 className="section-title mb-4">Perguntas Frequentes</h2>
          <p className="section-subtitle mb-6">
            Encontre respostas para as perguntas mais comuns sobre o Sistema Golden
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg mb-10">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
          <p className="mb-6 text-lg">
            Ainda tem dúvidas? Acesse nossa página completa de perguntas frequentes ou entre em contato conosco.
          </p>
          <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-6">
            Ver todas as perguntas frequentes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
