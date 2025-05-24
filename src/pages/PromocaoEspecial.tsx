
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  Clock, 
  Users, 
  MessageSquare, 
  Shield, 
  Zap, 
  Server, 
  Headphones,
  Star,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PromocaoEspecial = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2023-05-30T23:59:59');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const planoStartFeatures = [
    { icon: <Users className="w-5 h-5" />, text: "Usuários ilimitados" },
    { icon: <MessageSquare className="w-5 h-5" />, text: "Conexões ilimitadas de WhatsApp" },
    { icon: <Star className="w-5 h-5" />, text: "Personalização com sua logo" },
    { icon: <Shield className="w-5 h-5" />, text: "Cores personalizadas conforme sua marca" },
    { icon: <Zap className="w-5 h-5" />, text: "Nome do sistema personalizado" },
    { icon: <Headphones className="w-5 h-5" />, text: "Suporte humano personalizado" }
  ];

  const vpsFeatures = [
    { label: "RAM", value: "8GB" },
    { label: "vCPU", value: "2 cores" },
    { label: "Armazenamento", value: "120 GB NVMe" },
    { label: "IP", value: "1 IPv4" },
    { label: "Localização", value: "Brasil" },
    { label: "Uptime", value: "+99,9%" }
  ];

  const diferenciais = [
    {
      icon: <Headphones className="w-8 h-8 text-blue-600" />,
      title: "Suporte Especializado",
      description: "Equipe técnica dedicada para instalação, configuração e suporte contínuo"
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      title: "Sistema Otimizado",
      description: "Plataforma de atendimento completa e personalizada para sua marca"
    },
    {
      icon: <Server className="w-8 h-8 text-green-600" />,
      title: "VPS de Primeira Linha",
      description: "Infraestrutura robusta e confiável para garantir desempenho superior"
    }
  ];

  const faqItems = [
    {
      question: "O que está incluído no valor de R$99,90?",
      answer: "O valor inclui o Plano Start completo com instalação pela nossa equipe, personalização com sua marca e todos os recursos listados. Este é um pagamento único promocional."
    },
    {
      question: "A VPS é obrigatória?",
      answer: "Sim, a VPS Dedicada é parte obrigatória do pacote promocional para garantir o melhor desempenho e estabilidade do sistema."
    },
    {
      question: "Quanto custa a renovação?",
      answer: "Após 12 meses, a renovação anual é de R$300,00, mantendo todos os recursos e suporte."
    },
    {
      question: "Posso personalizar o sistema com minha marca?",
      answer: "Sim! O sistema é completamente White Label Premium, incluindo sua logo, cores da marca e nome personalizado."
    },
    {
      question: "Quantos usuários posso ter?",
      answer: "Usuários ilimitados! Você pode adicionar quantos atendentes precisar sem custo adicional."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">ArsenalCache</span>
            </div>
            <Badge variant="destructive" className="text-sm px-3 py-1">
              Promoção Limitada: 26-30 Maio
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-300">
            🎉 Oferta Especial por Tempo Limitado
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Plano Start + VPS Dedicada
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transforme seu atendimento com a solução completa White Label Premium do Whaticket Profissional
          </p>

          {/* Contador Regressivo */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Tempo restante:</h3>
            <div className="flex justify-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{timeLeft.days}</div>
                <div className="text-sm text-gray-500">Dias</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{timeLeft.hours}</div>
                <div className="text-sm text-gray-500">Horas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{timeLeft.minutes}</div>
                <div className="text-sm text-gray-500">Min</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{timeLeft.seconds}</div>
                <div className="text-sm text-gray-500">Seg</div>
              </div>
            </div>
          </div>

          {/* Oferta Principal */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-2">Oferta Promocional</h2>
                <p className="text-blue-100">Pacote completo com desconto especial</p>
              </div>
              <div className="text-center">
                <div className="text-sm text-blue-200 line-through mb-1">De R$599,90</div>
                <div className="text-5xl font-bold mb-2">R$99,90</div>
                <div className="text-blue-200">+ VPS a partir de R$169,90/mês</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-lg px-8 py-6 h-auto"
            >
              🚀 Garanta Agora sua Promoção
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold text-lg px-8 py-6 h-auto"
            >
              💬 Fale com um Consultor
            </Button>
          </div>
        </div>
      </section>

      {/* Detalhes do Plano Start */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Plano Start Completo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solução White Label Premium com instalação, suporte e personalização completa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {planoStartFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="text-blue-600">{feature.icon}</div>
                <span className="text-gray-800 font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Incluído na Promoção</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Instalação completa pela nossa equipe</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Atualizações pela equipe especializada</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Revenda de assinaturas ilimitadas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Suporte individual no WhatsApp</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Garantia de funcionamento contínuo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-amber-500" />
                  <span>Conexões Adicionais (Opcionais)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Instagram</span>
                    <Badge variant="outline">Conexões ilimitadas</Badge>
                  </li>
                  <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Facebook</span>
                    <Badge variant="outline">Conexões ilimitadas</Badge>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Especificações da VPS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              VPS Dedicada Premium
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Infraestrutura robusta e confiável hospedada no Brasil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Server className="w-5 h-5 text-blue-600" />
                  <span>Configuração Técnica</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {vpsFeatures.map((spec, index) => (
                    <div key={index} className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{spec.value}</div>
                      <div className="text-sm text-gray-600">{spec.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span>Benefícios da VPS</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Desempenho superior e estável</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Segurança reforçada para seus dados</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Servidor exclusivo para sua operação</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Hospedagem no Brasil para menor latência</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Garantia de disponibilidade contínua</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que Escolher a ArsenalCache?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Três pilares fundamentais que garantem o sucesso da sua operação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diferenciais.map((diferencial, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {diferencial.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{diferencial.title}</h3>
                <p className="text-gray-600">{diferencial.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Esclareça suas dúvidas sobre a promoção
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Não Perca Esta Oportunidade Única!
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Garante já seu Plano Start + VPS Dedicada com desconto especial
          </p>
          
          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">R$99,90</div>
              <div className="text-blue-200 mb-4">Pagamento único + VPS R$169,90/mês</div>
              <div className="text-sm text-blue-200">
                Renovação anual: R$300,00 após 12 meses
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-lg px-8 py-6 h-auto"
            >
              🚀 Contratar Agora
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold text-lg px-8 py-6 h-auto"
            >
              💬 Tirar Dúvidas
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <p className="text-gray-400">WhatsApp: (11) 99999-9999</p>
              <p className="text-gray-400">Email: contato@arsenalcache.com.br</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Promoção</h3>
              <p className="text-gray-400">Válida de 26 a 30 de maio de 2023</p>
              <p className="text-gray-400">Sujeita a disponibilidade</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">ArsenalCache</h3>
              <p className="text-gray-400">Soluções em atendimento digital</p>
              <p className="text-gray-400">Tecnologia que transforma negócios</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2023 ArsenalCache. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PromocaoEspecial;
