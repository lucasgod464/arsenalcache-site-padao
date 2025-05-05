import React from 'react';
import { Check, X, ArrowRight, MessageCircle, Star, Trophy, Server, Cpu, HardDrive, Database, Network } from 'lucide-react';
import { MessageSquare, SmartphoneIcon, Globe, Sparkles, BrainCircuit, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const PricingSection = () => {
  const mainFeatures = ["Instalação pela nossa equipe", "Atualizações pelo nossa equipe", "Suporte humano", "Usuários ilimitados", "Conexões ilimitadas de WhatsApp", "Sua logo no sistema", "Cores personalizadas", "Nome do sistema personalizado", "Revenda de assinaturas ilimitadas", "Suporte individual no WhatsApp"];
  
  const vpsOptions = [
    {
      name: "VPS 6GB",
      price: "119.90",
      specs: [{
        icon: <Server className="w-4 h-4 text-blue-500" />,
        text: "6GB RAM"
      }, {
        icon: <Cpu className="w-4 h-4 text-blue-500" />,
        text: "2 vCPU"
      }, {
        icon: <HardDrive className="w-4 h-4 text-blue-500" />,
        text: "100 GB NVMe"
      }, {
        icon: <Network className="w-4 h-4 text-blue-500" />,
        text: "1 IPV4"
      }, {
        icon: <Database className="w-4 h-4 text-blue-500" />,
        text: "Servidor no Brasil"
      }],
      clients: "Até 20 clientes",
      connections: "Até 500 conexões"
    }, {
      name: "VPS 8GB",
      price: "139.90",
      specs: [{
        icon: <Server className="w-4 h-4 text-blue-500" />,
        text: "8GB RAM"
      }, {
        icon: <Cpu className="w-4 h-4 text-blue-500" />,
        text: "2 vCPU"
      }, {
        icon: <HardDrive className="w-4 h-4 text-blue-500" />,
        text: "120 GB NVMe"
      }, {
        icon: <Network className="w-4 h-4 text-blue-500" />,
        text: "1 IPV4"
      }, {
        icon: <Database className="w-4 h-4 text-blue-500" />,
        text: "Servidor no Brasil"
      }],
      clients: "Até 40 clientes",
      connections: "Até 1000 conexões"
    }, {
      name: "VPS 16GB",
      price: "249.90",
      specs: [{
        icon: <Server className="w-4 h-4 text-blue-500" />,
        text: "16GB RAM"
      }, {
        icon: <Cpu className="w-4 h-4 text-blue-500" />,
        text: "6 vCPU"
      }, {
        icon: <HardDrive className="w-4 h-4 text-blue-500" />,
        text: "200 GB NVMe"
      }, {
        icon: <Network className="w-4 h-4 text-blue-500" />,
        text: "1 IPV4"
      }, {
        icon: <Database className="w-4 h-4 text-blue-500" />,
        text: "Servidor no Brasil"
      }],
      clients: "Até 100 clientes",
      connections: "Até 3000 conexões"
    }, {
      name: "VPS 32GB",
      price: "399.90",
      specs: [{
        icon: <Server className="w-4 h-4 text-blue-500" />,
        text: "32GB RAM"
      }, {
        icon: <Cpu className="w-4 h-4 text-blue-500" />,
        text: "6 vCPU"
      }, {
        icon: <HardDrive className="w-4 h-4 text-blue-500" />,
        text: "250 GB NVMe"
      }, {
        icon: <Network className="w-4 h-4 text-blue-500" />,
        text: "1 IPV4"
      }, {
        icon: <Database className="w-4 h-4 text-blue-500" />,
        text: "Servidor no Brasil"
      }],
      clients: "Até 250 clientes",
      connections: "Até 7500 conexões"
    }
  ];
  
  const dedicatedServers = [
    {
      name: "Pro 1",
      location: "São Paulo - Dedicado 1",
      price: "2.900.00",
      specs: [{
        title: "Processador",
        details: "2x Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz"
      }, {
        title: "Cores",
        details: "24 (Totais)"
      }, {
        title: "Threads",
        details: "48 (Totais)"
      }, {
        title: "Memória RAM",
        details: "64 GB DDR4"
      }, {
        title: "Discos",
        details: "1x 1TB NVMe"
      }, {
        title: "IPs",
        details: "5 IPV4 + 16 IPV6"
      }, {
        title: "Datacenter",
        details: "Ascenty SP4"
      }],
      extras: ["Link 1 GBPs ilimitado(FUP)", "Proteção DDOS Inclusa", "FTP Backup 200GB Incluso", "1 IPV4 Dedicado Incluso", "Uptime superior à 99,9%"],
      clients: "Até 500 clientes",
      connections: "Até 15000 conexões"
    }, {
      name: "Pro 2",
      location: "São Paulo - Dedicado 2",
      price: "3.900.00",
      specs: [{
        title: "Processador",
        details: "2x Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz"
      }, {
        title: "Cores",
        details: "24 (Totais)"
      }, {
        title: "Threads",
        details: "48 (Totais)"
      }, {
        title: "Memória RAM",
        details: "128 GB DDR4"
      }, {
        title: "Discos",
        details: "1x 1TB NVMe"
      }, {
        title: "IPs",
        details: "5 IPV4 + 16 IPV6"
      }, {
        title: "Datacenter",
        details: "Ascenty SP4"
      }],
      extras: ["Link 1 GBPs ilimitado(FUP)", "Proteção DDOS Inclusa", "FTP Backup 200GB Incluso", "1 IPV4 Dedicado Incluso", "Uptime superior à 99,9%"],
      clients: "Até 1000 clientes",
      connections: "Até 30000 conexões"
    }
  ];
  
  const premiumBenefits = ["Monitoramento 24/7 de todos os sistemas", "Relatórios semanais de desempenho", "Otimizações proativas de performance", "Escalonamento automático de recursos", "Migração e configuração especializada", "Suporte técnico prioritário", "Backup diário automatizado"];
  
  const aiComparisonData = {
    ourService: {
      name: "IA Conecta Ilimitado",
      price: "R$1.000,00/mês",
      features: [
        "Acesso ilimitado à API de IA avançada",
        "Integração nativa com WhatsTicket",
        "Sem limite de tokens ou mensagens",
        "Treinamento personalizado com seus dados",
        "Múltiplas integrações simultâneas",
        "Suporte técnico especializado",
        "Escalabilidade garantida",
        "Sem custo adicional por volume"
      ]
    },
    competitor: {
      name: "OpenAI GPT-4",
      price: "~R$5.000,00/mês*",
      features: [
        "Cobrança por token (aproximadamente R$0,03 por 1K tokens)",
        "Limite de uso baseado em crédito",
        "Integração manual necessária",
        "Sem personalização com seus dados",
        "Limites de requisições por minuto",
        "Suporte genérico",
        "Custos crescentes com o uso",
        "Preço variável baseado em consumo"
      ]
    }
  };

  return <section id="precos" className="py-10 px-4 bg-white border-t border-gray-100 shadow-inner mt-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="bg-blue-600 text-white border-blue-500 mb-4">
            Planos e Preços
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos <span className="text-blue-600">WhatTicket Profissional</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal para transformar o atendimento da sua empresa com o WhatTicket Profissional
          </p>
        </div>

        <div className="max-w-md mx-auto relative">
          <div className="absolute -top-4 -right-4 z-10 rotate-12">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-6 py-1 rounded-full shadow-lg flex items-center gap-1">
              <Star className="h-3 w-3 fill-white" /> RECOMENDADO <Star className="h-3 w-3 fill-white" />
            </div>
          </div>
          
          <Card className="h-full transition-all duration-300 overflow-hidden bg-white border-gray-200 hover:shadow-md ring-2 ring-blue-500 shadow-xl shadow-blue-200">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100/50 pb-6 border-b border-gray-100">
              <div className="space-y-1.5">
                <Badge className="bg-blue-100 text-blue-700 border-0 mb-2 font-medium">
                  White Label Premium
                </Badge>
                <CardTitle className="text-2xl font-bold flex items-center gap-2 text-gray-800">
                  Plano Start
                  <Star className="h-5 w-5 text-blue-500" />
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Solução completa para seu negócio
                </CardDescription>
              </div>
              <div className="mt-4 flex items-baseline justify-center">
                <div className="flex flex-col items-center">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold tracking-tight text-blue-700">R$56,00</span>
                    <span className="ml-2 text-lg text-gray-600">7x sem juros</span>
                  </div>
                  <span className="text-sm text-gray-500">ou R$392,00 a vista</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3 justify-center">
                <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                  Economize e comece a lucrar imediatamente
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="pt-6">
              <div className="space-y-5">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600 flex items-center">
                    <Trophy className="h-5 w-5 text-blue-500" />
                    Recursos principais:
                  </h4>
                  <ul className="space-y-2.5 border-l-2 border-blue-100 pl-3">
                    {mainFeatures.map((feature, index) => <li key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>)}
                  </ul>
                </div>
                
                <Separator className="bg-gray-100" />
                
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600">Conexões adicionais (opcionais):</h4>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-100">
                    <ul className="space-y-3 mb-4">
                      <li className="flex items-center gap-2.5">
                        <div className="bg-green-500 rounded-full p-1.5">
                          <MessageSquare className="w-4 h-4 text-white flex-shrink-0" />
                        </div>
                        <span className="text-sm text-gray-700">API oficial WhatsApp (ilimitada)</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <div className="bg-pink-500 rounded-full p-1.5">
                          <SmartphoneIcon className="w-4 h-4 text-white flex-shrink-0" />
                        </div>
                        <span className="text-sm text-gray-700">Instagram (conexões ilimitadas)</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <div className="bg-blue-600 rounded-full p-1.5">
                          <Globe className="w-4 h-4 text-white flex-shrink-0" />
                        </div>
                        <span className="text-sm text-gray-700">Facebook (conexões ilimitadas)</span>
                      </li>
                    </ul>
                    
                    <div className="bg-white p-3 rounded-lg border border-gray-200 text-center shadow-sm">
                      <p className="text-gray-700 font-medium mb-1">Valor mensal:</p>
                      <p className="text-2xl font-bold text-blue-600">R$260,00</p>
                      <p className="text-xs text-gray-500">Conexões ilimitadas</p>
                    </div>
                  </div>
                </div>
                
                <Separator className="bg-gray-100" />
                
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600">Renovação anual:</h4>
                  <ul className="space-y-2.5 border-l-2 border-blue-100 pl-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">R$300,00 para manutenção do sistema</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Inclui atualizações e suporte humano</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600 font-medium">Garantia de funcionamento contínuo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="pt-4 pb-8 flex justify-center">
              <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-6 rounded-full transition-all shadow-md hover:shadow-lg">
                <a href="https://www.asaas.com/c/8fmv6ge3llbfeanu" target="_blank" rel="noopener noreferrer">
                  Contratar plano start
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* VPS Cards Section */}
        <div className="max-w-5xl mx-auto mt-16 pt-6 border-t border-gray-200">
          <div className="text-center mb-8">
            <Badge variant="outline" className="bg-blue-600 text-white border-blue-500 mb-4">
              Servidores Otimizados
            </Badge>
            <h3 className="text-2xl font-bold mb-3">VPS <span className="text-blue-600">Dedicadas e Otimizadas</span></h3>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Servidores dedicados e otimizados para o máximo desempenho do seu sistema
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {vpsOptions.map((vps, index) => <Card key={index} className="border border-blue-100 hover:shadow-md transition-all bg-white">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100/30 pb-4 border-b border-blue-50">
                  <CardTitle className="text-xl font-bold text-blue-700">{vps.name}</CardTitle>
                  <div className="mt-2">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-gray-800">R${vps.price}</span>
                      <span className="ml-2 text-sm text-gray-500">BRL/mês</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {vps.specs.map((spec, i) => <li key={i} className="flex items-center gap-3">
                        {spec.icon}
                        <span className="text-sm text-gray-600">{spec.text}</span>
                      </li>)}
                  </ul>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded-md border border-green-100">
                      <p className="text-sm font-medium text-green-700 flex items-center">
                        <Database className="w-4 h-4 mr-2" />
                        Capacidade: {vps.clients}
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
                      <p className="text-sm font-medium text-blue-700 flex items-center">
                        <Network className="w-4 h-4 mr-2" />
                        Suporta: {vps.connections}
                      </p>
                    </div>
                    
                    <Button asChild className="w-full mt-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                      <a href="https://api.whatsapp.com/send?phone=5512981156856&text=Olá,%20tenho%20interesse%20na%20VPS%20{vps.name}" target="_blank" rel="noopener noreferrer">
                        Contratar {vps.name}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>
          
          {/* Personalização de Sistemas section */}
          <div className="text-center mt-8 bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-lg border border-blue-200 max-w-3xl mx-auto shadow-sm">
            <h4 className="text-xl font-semibold text-gray-800 mb-2 flex items-center justify-center gap-2">
              <Sparkles className="h-5 w-5 text-blue-600" /> 
              Personalização de Sistemas
            </h4>
            <p className="text-gray-600 mb-4">
              Nossa equipe de especialistas pode personalizar e implementar soluções específicas para o seu negócio, garantindo o máximo de eficiência e performance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                <h5 className="font-medium text-blue-700 mb-2">Implementações Sob Demanda</h5>
                <ul className="text-left space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Sistemas personalizados para seu fluxo de trabalho</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Integrações com ferramentas específicas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Desenvolvimento de funcionalidades exclusivas</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                <h5 className="font-medium text-blue-700 mb-2">Benefícios Exclusivos</h5>
                <ul className="text-left space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Consultoria técnica especializada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Suporte prioritário para implementações</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Manutenção e atualização personalizada</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="https://api.whatsapp.com/send?phone=5512981156856&text=Olá,%20gostaria%20de%20uma%20cotação%20para%20personalização%20de%20sistemas" target="_blank" rel="noopener noreferrer">
                Solicitar cotação para personalização
              </a>
            </Button>
          </div>
        </div>

        {/* Nova seção: Crescimento Profissional - Servidores Dedicados */}
        <div className="max-w-5xl mx-auto mt-16 pt-6 border-t border-gray-200">
          <div className="text-center mb-8">
            <Badge variant="outline" className="bg-blue-800 text-white border-blue-700 mb-4">
              Crescimento Profissional
            </Badge>
            <h3 className="text-2xl font-bold mb-3">Servidores <span className="text-blue-700">Dedicados Premium</span></h3>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Servidores de alta performance para empresas que precisam de máximo desempenho e escalabilidade
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {dedicatedServers.map((server, index) => <Card key={index} className="border border-blue-200 hover:shadow-xl transition-all bg-gradient-to-br from-white to-blue-50">
                <CardHeader className="bg-gradient-to-r from-blue-700 to-blue-600 pb-6 text-white">
                  <div className="space-y-1.5">
                    <Badge className="bg-blue-400 text-blue-900 border-0 mb-2 font-medium">
                      Servidor Dedicado
                    </Badge>
                    <CardTitle className="text-2xl font-bold flex items-center gap-2 text-white">
                      {server.name}
                      <Server className="h-5 w-5 text-blue-200" />
                    </CardTitle>
                    <CardDescription className="text-blue-100 font-medium">
                      {server.location}
                    </CardDescription>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-extrabold tracking-tight text-white">R${server.price}</span>
                      <span className="ml-2 text-sm font-medium text-blue-100">BRL/mês</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-700 text-lg">Especificações:</h4>
                      <ul className="space-y-3 border-l-2 border-blue-200 pl-4">
                        {server.specs.map((spec, i) => <li key={i} className="text-sm text-gray-700">
                            <span className="font-semibold">{spec.title}:</span> {spec.details}
                          </li>)}
                      </ul>
                      
                      <div className="mt-6 space-y-3">
                        <div className="bg-blue-100 p-4 rounded-md border border-blue-200">
                          <p className="text-sm font-semibold text-blue-800 flex items-center gap-2 mb-2">
                            <Database className="w-4 h-4" />
                            Capacidade de clientes:
                          </p>
                          <div className="bg-white rounded-md p-3 text-center border border-blue-200">
                            <p className="text-lg font-bold text-blue-700">{server.clients}</p>
                          </div>
                        </div>
                        
                        <div className="bg-blue-100 p-4 rounded-md border border-blue-200">
                          <p className="text-sm font-semibold text-blue-800 flex items-center gap-2 mb-2">
                            <Network className="w-4 h-4" />
                            Capacidade de conexões:
                          </p>
                          <div className="bg-white rounded-md p-3 text-center border border-blue-200">
                            <p className="text-lg font-bold text-blue-700">{server.connections}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-700 text-lg">Benefícios inclusos:</h4>
                      <ul className="space-y-2 mb-6">
                        {server.extras.map((extra, i) => <li key={i} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{extra}</span>
                          </li>)}
                      </ul>
                      
                      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-lg text-white mt-4">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Trophy className="h-5 w-5" />
                          Benefícios Premium:
                        </h4>
                        <ul className="space-y-2">
                          {premiumBenefits.slice(0, 5).map((benefit, i) => <li key={i} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-blue-200 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-blue-50">{benefit}</span>
                            </li>)}
                        </ul>
                      </div>
                      
                      <Button asChild className="w-full mt-6 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white py-6 rounded-md transition-all shadow-md hover:shadow-xl">
                        <a href={`https://api.whatsapp.com/send?phone=5512981156856&text=Olá,%20tenho%20interesse%20no%20servidor%20dedicado%20${server.name}`} target="_blank" rel="noopener noreferrer">
                          Solicitar proposta {server.name}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
          
          <div className="text-center mt-12 bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200 max-w-4xl mx-auto shadow-md">
            <h4 className="text-2xl font-bold text-blue-800 mb-4">Nosso Time de Especialistas Cuida de Tudo</h4>
            <p className="text-gray-700 mb-6">
              Oferecemos um serviço completo de gerenciamento e monitoramento para seus servidores dedicados, 
              garantindo performance máxima e tranquilidade para seu negócio.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border border-blue-200 shadow-sm">
                <h5 className="text-xl font-semibold text-blue-700 mb-3">Monitoramento Proativo</h5>
                <ul className="text-left space-y-3">
                  {premiumBenefits.slice(0, 3).map((benefit, index) => <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>)}
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-blue-200 shadow-sm">
                <h5 className="text-xl font-semibold text-blue-700 mb-3">Relatórios e Análises</h5>
                <ul className="text-left space-y-3">
                  {premiumBenefits.slice(3, 7).map((benefit, index) => <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>)}
                </ul>
              </div>
            </div>
            
            <Button asChild className="bg-blue-700 hover:bg-blue-800 text-white text-lg py-6 px-8 rounded-lg shadow-lg">
              <a href="https://api.whatsapp.com/send?phone=5512981156856&text=Olá,%20quero%20informações%20sobre%20os%20servidores%20dedicados%20premium" target="_blank" rel="noopener noreferrer">
                Falar com consultor especializado
              </a>
            </Button>
          </div>
        </div>

        {/* Nova seção: Cotação Personalizada */}
        <div className="max-w-5xl mx-auto mt-16 pt-6 border-t border-gray-200">
          <div className="text-center mb-8">
            <Badge variant="outline" className="bg-blue-600 text-white border-blue-500 mb-4">
              Solução Personalizada
            </Badge>
            <h3 className="text-2xl font-bold mb-3">Precisa de uma <span className="text-blue-600">configuração especial?</span></h3>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Entre em contato para uma cotação personalizada de acordo com suas necessidades específicas
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl shadow-xl max-w-3xl mx-auto text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Server className="h-6 w-6 text-blue-200" /> 
                  Servidores customizados
                </h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <span>Especificações sob medida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <span>Escalabilidade conforme demanda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <span>Configurações para alto tráfego</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <span>Grandes operações corporativas</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Network className="h-6 w-6 text-blue-200" /> 
                  Suporte especializado
                </h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <span>Consultoria técnica dedicada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <span>Migração e configuração personalizada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <span>Soluções de redundância avançada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <span>Monitoramento 24/7 especializado</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="mb-5 text-blue-100">
                Nossa equipe está pronta para desenvolver uma solução sob medida para seu negócio, 
                independentemente do tamanho ou complexidade do seu projeto.
              </p>
              <Button asChild className="bg-white hover:bg-blue-50 text-blue-700 font-medium py-6 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-blue-300">
                <a href="https://api.whatsapp.com/send?phone=5512981156856&text=Olá,%20preciso%20de%20uma%20cotação%20personalizada%20para%20servidores" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Solicitar cotação personalizada
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* IA Ilimitada Section - MOVIDA para depois da seção de Solução Personalizada */}
        <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-gray-200">
          <div className="text-center mb-8">
            <Badge variant="outline" className="bg-purple-600 text-white border-purple-500 mb-4">
              Inteligência Artificial Ilimitada
            </Badge>
            <h3 className="text-2xl font-bold mb-3">
              <span className="text-purple-600">IA Conecta</span> - Solução de IA Sem Limites
            </h3>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Acesso completo à tecnologia de IA avançada por um valor fixo mensal, sem surpresas na sua fatura
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            {/* Nossa solução de IA */}
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white pb-6">
                <div className="space-y-1.5">
                  <Badge className="bg-white text-purple-700 border-0 mb-2">
                    Nossa Solução
                  </Badge>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    {aiComparisonData.ourService.name}
                    <BrainCircuit className="h-5 w-5 text-purple-200" />
                  </CardTitle>
                  <div className="mt-4">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-extrabold tracking-tight">{aiComparisonData.ourService.price}</span>
                    </div>
                    <p className="text-sm text-purple-100 mt-2">Preço fixo sem surpresas</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-700 flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-purple-600" />
                      Vantagens exclusivas:
                    </h4>
                    <ul className="space-y-2.5">
                      {aiComparisonData.ourService.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm">
                    <h5 className="font-medium text-purple-700 mb-2 flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Economia real e previsibilidade
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Com nossa solução de valor fixo, você economiza até 80% em comparação com APIs de IA tradicionais,
                      além de ter previsibilidade total de custos independente do volume de uso.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2 pb-6 px-6">
                <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 rounded-lg transition-all shadow-md hover:shadow-xl">
                  <a href="https://api.whatsapp.com/send?phone=5512981156856&text=Olá,%20tenho%20interesse%20no%20serviço%20de%20IA%20Conecta%20Ilimitado" target="_blank" rel="noopener noreferrer">
                    Contratar IA Ilimitada
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Comparação com GPT-4 */}
            <Card className="bg-white border border-gray-200 shadow-md">
              <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-200 pb-6">
                <div className="space-y-1.5">
                  <Badge className="bg-gray-700 text-white border-0 mb-2">
                    Concorrente
                  </Badge>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2 text-gray-800">
                    {aiComparisonData.competitor.name}
                  </CardTitle>
                  <div className="mt-4">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-extrabold tracking-tight text-gray-800">{aiComparisonData.competitor.price}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">*Custo estimado para uso empresarial médio</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-700">
                      Limitações:
                    </h4>
                    <ul className="space-y-2.5">
                      {aiComparisonData.competitor.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          {index < 4 ? 
                            <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" /> : 
                            <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          }
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h5 className="font-medium text-gray-700 mb-2">
                      Custos imprevisíveis
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Com cobrança por token, os custos aumentam proporcionalmente ao uso, 
                      tornando difícil prever gastos mensais e podendo resultar em faturas 
                      surpreendentemente altas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-10 bg-gradient-to-br from-purple-100 to-blue-50 p-8 rounded-xl border border-purple-200 max-w-4xl mx-auto shadow-md">
            <h4 className="text-2xl font-bold text-purple-800 mb-4">Compare e economize com nossa solução de IA ilimitada</h4>
            <p className="text-gray-700 mb-6">
              Por apenas <span className="font-bold text-purple-700">R$1.000,00/mês</span>, tenha acesso ilimitado à tecnologia de IA avançada,
              sem preocupações com contadores de tokens ou custos crescentes. Uma solução completa que se integra perfeitamente
              ao seu WhatTicket, potencializando seu atendimento com inteligência artificial sem limites.
            </p>
            
            <div className="bg-white p-6 rounded-lg border border-purple-200 shadow-sm mb-8">
              <h5 className="text-xl font-semibold text-purple-700 mb-4">Simulação de economia</h5>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h6 className="font-medium text-gray-700 mb-2">Com GPT-4</h6>
                  <p className="text-sm text-gray-600 mb-2">1.000.000 tokens/mês</p>
                  <p className="text-2xl font-bold text-red-600">R$5.000,00</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h6 className="font-medium text-green-700 mb-2">Com IA Conecta</h6>
                  <p className="text-sm text-green-600 mb-2">Tokens ilimitados</p>
                  <p className="text-2xl font-bold text-green-600">R$1.000,00</p>
                </div>
              </div>
              
              <p className="text-green-600 font-bold text-lg">Sua economia: R$4.000,00/mês</p>
            </div>
            
            <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 px-10 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all">
              <a href="https://api.whatsapp.com/send?phone=5512981156856&text=Olá,%20quero%20saber%20mais%20sobre%20a%20solução%20de%20IA%20ilimitada" target="_blank" rel="noopener noreferrer">
                <BrainCircuit className="mr-2 h-5 w-5" />
                Falar com especialista em IA
              </a>
            </Button>
          </div>
        </div>

        <div className="text-center mt-12 max-w-3xl mx-auto">
          <Button asChild className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-full px-8 py-5 shadow-md hover:shadow-lg transition-all border border-green-400/30 flex items-center gap-2">
            <a href="https://api.whatsapp.com/send?phone=5512981156856" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar com um consultor no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>;
};

export default PricingSection;
