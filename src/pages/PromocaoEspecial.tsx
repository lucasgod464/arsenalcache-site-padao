import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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
  ChevronUp,
  Instagram,
  Facebook,
  Crown,
  Cpu,
  HardDrive,
  Activity
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
    // Data alvo: 30 de maio de 2025 às 23:59:59
    const targetDate = new Date('2025-05-30T23:59:59');
    
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
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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

  const vpsOptions = [
    {
      name: "VPS Básica",
      subtitle: "Ideal para pequenas empresas",
      specs: {
        ram: "8GB",
        cpu: "2 vCPU",
        storage: "120GB NVMe",
        connections: "26",
        users: "20",
        bandwidth: "Ilimitado",
        uptime: "99.9%"
      },
      price: "R$169,90",
      originalPrice: "R$299,90",
      recommended: false,
      features: [
        "Hospedagem no Brasil",
        "IP Dedicado",
        "SSL Grátis",
        "Backup Diário",
        "Suporte 24/7"
      ]
    },
    {
      name: "VPS Premium",
      subtitle: "Recomendada para médias empresas",
      specs: {
        ram: "16GB",
        cpu: "6 vCPU",
        storage: "200GB NVMe",
        connections: "34",
        users: "40",
        bandwidth: "Ilimitado",
        uptime: "99.9%"
      },
      price: "R$279,90",
      originalPrice: "R$499,90",
      recommended: true,
      features: [
        "Hospedagem no Brasil",
        "IP Dedicado",
        "SSL Grátis",
        "Backup Diário",
        "Suporte Prioritário 24/7",
        "Monitoramento Avançado"
      ]
    },
    {
      name: "VPS Enterprise",
      subtitle: "Para grandes operações",
      specs: {
        ram: "32GB",
        cpu: "6 vCPU",
        storage: "250GB NVMe",
        connections: "45",
        users: "60",
        bandwidth: "Ilimitado",
        uptime: "99.9%"
      },
      price: "R$429,90",
      originalPrice: "R$699,90",
      recommended: false,
      features: [
        "Hospedagem no Brasil",
        "IP Dedicado",
        "SSL Grátis",
        "Backup Diário",
        "Suporte Dedicado 24/7",
        "Monitoramento Avançado",
        "Otimização Personalizada"
      ]
    }
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
      question: "Quantos usuários e conexões posso ter?",
      answer: "Isso depende da VPS escolhida: VPS 8GB suporta até 20 usuários e 26 conexões WhatsApp, VPS 16GB até 40 usuários e 34 conexões, VPS 32GB até 60 usuários e 45 conexões."
    },
    {
      question: "Qual VPS é recomendada para minha empresa?",
      answer: "Para pequenas empresas: VPS 8GB. Para médias empresas: VPS 16GB (recomendada). Para grandes operações: VPS 32GB."
    },
    {
      question: "Posso fazer upgrade da VPS depois?",
      answer: "Sim, você pode fazer upgrade da sua VPS a qualquer momento sem perder dados ou configurações."
    }
  ];

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Olá! Tenho interesse na Promoção Especial: Plano Start + VPS Dedicada. Gostaria de tirar algumas dúvidas.");
    window.open(`https://wa.me/5512981156856?text=${message}`, '_blank');
  };

  const handleContractNow = () => {
    const message = encodeURIComponent("Olá! Quero contratar agora a Promoção Especial: Plano Start + VPS Dedicada por R$99,90!");
    window.open(`https://wa.me/5512981156856?text=${message}`, '_blank');
  };

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
            <h3 className="text-lg font-semibold text-gray-800 mb-4">⏰ Tempo restante:</h3>
            <div className="flex justify-center space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-sm text-gray-500">Dias</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-sm text-gray-500">Horas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-sm text-gray-500">Min</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{String(timeLeft.seconds).padStart(2, '0')}</div>
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
              onClick={handleContractNow}
            >
              🚀 Garanta Agora sua Promoção
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold text-lg px-8 py-6 h-auto"
              onClick={handleWhatsAppContact}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {planoStartFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="text-blue-600">{feature.icon}</div>
                <span className="text-gray-800 font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Opções de VPS Melhoradas */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Escolha sua VPS Dedicada
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Infraestrutura robusta hospedada no Brasil com diferentes capacidades
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {vpsOptions.map((vps, index) => (
                <Card key={index} className={`relative overflow-hidden ${vps.recommended 
                  ? 'border-2 border-blue-500 shadow-2xl scale-105 bg-gradient-to-br from-blue-50 to-indigo-50' 
                  : 'border border-gray-200 shadow-lg hover:shadow-xl transition-all'}`}>
                  
                  {vps.recommended && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-center py-2 text-sm font-bold">
                      <Crown className="w-4 h-4 inline mr-2" />
                      MAIS POPULAR
                    </div>
                  )}
                  
                  <CardHeader className={`text-center pb-4 ${vps.recommended ? 'pt-12' : 'pt-6'}`}>
                    <Badge className={`mb-3 self-center ${vps.recommended 
                      ? 'bg-blue-100 text-blue-800 border-blue-200' 
                      : 'bg-gray-100 text-gray-700 border-gray-200'}`}>
                      {vps.subtitle}
                    </Badge>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{vps.name}</CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-sm text-gray-500 line-through">{vps.originalPrice}</span>
                        <Badge variant="destructive" className="text-xs">-40%</Badge>
                      </div>
                      <div className="text-4xl font-bold text-blue-600">{vps.price}</div>
                      <p className="text-sm text-gray-500">por mês</p>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    {/* Especificações Técnicas */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Server className="w-4 h-4" />
                        Especificações
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-medium">RAM</span>
                          </div>
                          <span className="font-bold text-blue-600">{vps.specs.ram}</span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-green-500" />
                            <span className="text-sm font-medium">CPU</span>
                          </div>
                          <span className="font-bold text-green-600">{vps.specs.cpu}</span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <HardDrive className="w-4 h-4 text-purple-500" />
                            <span className="text-sm font-medium">Storage</span>
                          </div>
                          <span className="font-bold text-purple-600">{vps.specs.storage}</span>
                        </div>
                      </div>
                    </div>

                    {/* Capacidades */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Capacidades
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                          <div className="text-2xl font-bold text-green-600">{vps.specs.connections}</div>
                          <div className="text-xs text-green-700">Conexões WhatsApp</div>
                        </div>
                        <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <div className="text-2xl font-bold text-blue-600">{vps.specs.users}</div>
                          <div className="text-xs text-blue-700">Usuários simultâneos</div>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {vps.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Uptime garantido:</span>
                        <span className="font-bold text-green-600">{vps.specs.uptime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tabela Comparativa */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b">
                <h4 className="text-xl font-bold text-gray-800 text-center">Comparação Detalhada dos Planos VPS</h4>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-semibold text-gray-700">Especificação</TableHead>
                      <TableHead className="text-center font-semibold text-gray-700">VPS Básica</TableHead>
                      <TableHead className="text-center font-semibold text-blue-700 bg-blue-50">VPS Premium</TableHead>
                      <TableHead className="text-center font-semibold text-gray-700">VPS Enterprise</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Memória RAM</TableCell>
                      <TableCell className="text-center">8GB</TableCell>
                      <TableCell className="text-center bg-blue-50 font-semibold text-blue-700">16GB</TableCell>
                      <TableCell className="text-center">32GB</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Processador</TableCell>
                      <TableCell className="text-center">2 vCPU</TableCell>
                      <TableCell className="text-center bg-blue-50 font-semibold text-blue-700">6 vCPU</TableCell>
                      <TableCell className="text-center">6 vCPU</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Armazenamento</TableCell>
                      <TableCell className="text-center">120GB NVMe</TableCell>
                      <TableCell className="text-center bg-blue-50 font-semibold text-blue-700">200GB NVMe</TableCell>
                      <TableCell className="text-center">250GB NVMe</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Conexões WhatsApp</TableCell>
                      <TableCell className="text-center text-green-600 font-semibold">Até 26</TableCell>
                      <TableCell className="text-center bg-blue-50 font-bold text-blue-700">Até 34</TableCell>
                      <TableCell className="text-center text-green-600 font-semibold">Até 45</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Usuários Simultâneos</TableCell>
                      <TableCell className="text-center text-blue-600 font-semibold">Até 20</TableCell>
                      <TableCell className="text-center bg-blue-50 font-bold text-blue-700">Até 40</TableCell>
                      <TableCell className="text-center text-blue-600 font-semibold">Até 60</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Valor Mensal</TableCell>
                      <TableCell className="text-center">
                        <div>
                          <span className="text-lg font-bold text-blue-600">R$169,90</span>
                          <div className="text-xs text-gray-500 line-through">R$299,90</div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center bg-blue-50">
                        <div>
                          <span className="text-lg font-bold text-blue-700">R$279,90</span>
                          <div className="text-xs text-gray-500 line-through">R$499,90</div>
                          <Badge className="mt-1 bg-blue-600 text-white text-xs">RECOMENDADA</Badge>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div>
                          <span className="text-lg font-bold text-blue-600">R$429,90</span>
                          <div className="text-xs text-gray-500 line-through">R$699,90</div>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <span>Renovação Anual</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">R$300,00</div>
                  <div className="text-sm text-gray-600 mb-4">Após 12 meses</div>
                  <p className="text-sm text-gray-700">
                    Mantém suporte técnico, atualizações e todos os recursos inclusos
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 px-4 bg-gray-50">
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
              <div key={index} className="text-center p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
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

      {/* Conexões Opcionais */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conexões Opcionais no Sistema
            </h2>
            <p className="text-xl text-gray-600">
              Expanda ainda mais suas possibilidades de atendimento
            </p>
          </div>

          <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-2xl p-4 md:p-8 border-2 border-purple-200">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 w-full lg:w-auto">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-500 rounded-xl flex items-center justify-center">
                    <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Instagram</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Conexões ilimitadas</p>
                  </div>
                </div>
                
                <div className="text-xl sm:text-2xl font-bold text-gray-400 hidden sm:block">+</div>
                
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Facebook className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Facebook</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Conexões ilimitadas</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center bg-white rounded-xl p-4 sm:p-6 shadow-lg w-full sm:w-auto">
                <div className="text-sm text-gray-600 mb-2">Valor mensal para ambas:</div>
                <div className="text-3xl sm:text-4xl font-bold text-blue-600">R$260,00</div>
                <div className="text-sm text-orange-600 font-medium mt-2">Instagram + Facebook</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">
              * Conexões opcionais podem ser adicionadas ao seu plano a qualquer momento
            </p>
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
            Garanta já seu Plano Start + VPS Dedicada com desconto especial
          </p>
          
          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">R$99,90</div>
              <div className="text-blue-200 mb-4">Pagamento único + VPS a partir de R$169,90/mês</div>
              <div className="text-sm text-blue-200">
                Renovação anual: R$300,00 após 12 meses
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-lg px-8 py-6 h-auto"
              onClick={handleContractNow}
            >
              🚀 Contratar Agora
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold text-lg px-8 py-6 h-auto"
              onClick={handleWhatsAppContact}
            >
              💬 Tirar Dúvidas
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <p className="text-gray-400">WhatsApp: (12) 98115-6856</p>
              <p className="text-gray-400">Email: contato@arsenalcache.com.br</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Promoção</h3>
              <p className="text-gray-400">Válida de 26 a 30 de maio de 2025</p>
              <p className="text-gray-400">Sujeita a disponibilidade</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">ArsenalCache</h3>
              <p className="text-gray-400">Soluções em atendimento digital</p>
              <p className="text-gray-400">Tecnologia que transforma negócios</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <p className="text-gray-400">ArsenalCache Tecnologia LTDA</p>
              <p className="text-gray-400">CNPJ: 12.345.678/0001-90</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ArsenalCache. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PromocaoEspecial;
