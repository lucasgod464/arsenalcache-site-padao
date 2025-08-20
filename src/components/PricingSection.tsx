import React from 'react';
import { Check, X, ArrowRight, MessageCircle, Star, Trophy, Server, Cpu, HardDrive, Database, Network } from 'lucide-react';
import { MessageSquare, SmartphoneIcon, Globe, Sparkles, BrainCircuit, Zap, Box, FileCode, GitBranch, Store, BookOpen, Warehouse } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const PricingSection = () => {
  const mainFeatures = ["Instalação pela nossa equipe", "Atualizações pelo nossa equipe", "Suporte humano", "Usuários ilimitados", "Conexões ilimitadas de WhatsApp", "Sua logo no sistema", "Cores personalizadas", "Nome do sistema personalizado", "Revenda de assinaturas ilimitadas", "Suporte individual no WhatsApp"];
  const vpsOptions = [{
    name: "VPS 6GB",
    price: "149.90",
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
    }, {
      icon: <Check className="w-4 h-4 text-green-500" />,
      text: "Uptime superior à 99,9%"
    }],
    clients: "Até 15 clientes",
    connections: "Até 18 conexões"
  }, {
    name: "VPS 8GB",
    price: "169.90",
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
    }, {
      icon: <Check className="w-4 h-4 text-green-500" />,
      text: "Uptime superior à 99,9%"
    }],
    clients: "Até 20 clientes",
    connections: "Até 26 conexões"
  }, {
    name: "VPS 16GB",
    price: "279.90",
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
    }, {
      icon: <Check className="w-4 h-4 text-green-500" />,
      text: "Uptime superior à 99,9%"
    }],
    clients: "Até 40 clientes",
    connections: "Até 34 conexões"
  }, {
    name: "VPS 32GB",
    price: "429.90",
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
    }, {
      icon: <Check className="w-4 h-4 text-green-500" />,
      text: "Uptime superior à 99,9%"
    }],
    clients: "Até 60 clientes",
    connections: "Até 45 conexões"
  }];
  const dedicatedServers = [{
    name: "Enterprise v1",
    location: "São Paulo - Dedicado 1",
    price: "2.200,00",
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
    clients: "Até 180 clientes",
    connections: "Até 100 conexões"
  }, {
    name: "Enterprise v2",
    location: "São Paulo - Dedicado 2",
    price: "2.500,00",
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
    clients: "Até 360 clientes",
    connections: "Até 230 conexões"
  }];
  const premiumBenefits = ["Monitoramento 24/7 de todos os sistemas", "Otimizações proativas de performance", "Escalonamento automático de recursos", "Suporte técnico prioritário", "Backup diário automatizado"];
  const aiComparisonData = {
    ourService: {
      name: "IA Conecta Ilimitado",
      price: "R$1.000,00/mês",
      features: ["Acesso ilimitado à API de IA avançada", "Integração nativa com Whaticket", "Sem limite de tokens ou mensagens", "Treinamento personalizado com seus dados", "Múltiplas integrações simultâneas", "Suporte técnico especializado", "Escalabilidade garantida", "Sem custo adicional por volume"]
    },
    competitor: {
      name: "OpenAI GPT-4",
      price: "~R$5.000,00/mês*",
      features: ["Cobrança por token (aproximadamente R$0,03 por 1K tokens)", "Limite de uso baseado em crédito", "Integração manual necessária", "Sem personalização com seus dados", "Limites de requisições por minuto", "Suporte genérico", "Custos crescentes com o uso", "Preço variável baseado em consumo"]
    }
  };
  return <section id="precos" className="py-10 px-4 bg-white border-t border-gray-100 shadow-inner mt-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="bg-blue-600 text-white border-blue-500 mb-4">
            Planos e Preços
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos <span className="text-blue-600">Whaticket Profissional</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal para transformar o atendimento da sua empresa com o Whaticket Profissional
          </p>
        </div>

        {/* Planos Start, Pro e Enterprise */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Plano Start */}
          <div className="relative">
            <Card className="h-full transition-all duration-300 overflow-hidden bg-white border-gray-200 hover:shadow-md ring-1 ring-blue-500/50 shadow-lg shadow-blue-200/30">
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
                      <span className="text-lg text-gray-600 mr-2">7x sem juros</span>
                      <span className="text-4xl font-extrabold tracking-tight text-blue-700">R$56,00</span>
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
          
          {/* Plano Pro - NOVO */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 z-10 rotate-12">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-6 py-1 rounded-full shadow-lg flex items-center gap-1">
                <Star className="h-3 w-3 fill-white" /> 
                RECOMENDADO 
                <Star className="h-3 w-3 fill-white" />
              </div>
            </div>
            
            <Card className="h-full transition-all duration-300 overflow-hidden bg-white border-gray-200 hover:shadow-md ring-2 ring-blue-500 shadow-xl shadow-blue-200">
              <CardHeader className="bg-gradient-to-r from-blue-100 to-blue-200/50 pb-6 border-b border-gray-100">
                <div className="space-y-1.5">
                  <Badge className="bg-blue-200 text-blue-700 border-0 mb-2 font-medium">
                    White Label Avançado
                  </Badge>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2 text-gray-800">
                    Plano Pro
                    <Sparkles className="h-5 w-5 text-blue-500" />
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Completo com automação e IA
                  </CardDescription>
                </div>
                <div className="mt-4 flex items-baseline justify-center">
                  <div className="flex flex-col items-center">
                    <div className="flex items-baseline">
                      <span className="text-lg text-gray-600 mr-2">9x sem juros</span>
                      <span className="text-4xl font-extrabold tracking-tight text-blue-700">R$55,00</span>
                    </div>
                    <span className="text-sm text-gray-500">ou R$495,00 a vista</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3 justify-center">
                  <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                    Economize com automações
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <div className="space-y-5">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600 flex items-center">
                      <Trophy className="h-5 w-5 text-blue-500" />
                      Tudo do plano Start, mais:
                    </h4>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2.5">
                          <div className="bg-blue-500 rounded-full p-1.5">
                            <FileCode className="w-4 h-4 text-white flex-shrink-0" />
                          </div>
                          <span className="text-sm text-gray-700">Página premium de Teste Grátis + Automação Workflow n8n</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <div className="bg-blue-500 rounded-full p-1.5">
                            <Database className="w-4 h-4 text-white flex-shrink-0" />
                          </div>
                          <span className="text-sm text-gray-700">Página Premium cadastro + Workflow n8n Cobrança no Asaas</span>
                        </li>
                      </ul>
                    </div>
                    
                    <h4 className="font-semibold mb-3 text-blue-600 flex items-center">
                      <FileCode className="h-5 w-5 text-blue-500 mr-2" />
                      Workflow N8N Inclusos:
                    </h4>
                    <ul className="space-y-2.5 border-l-2 border-blue-100 pl-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">Workflow N8N Agente IA com 5 Modelos Disponíveis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">Aviso de Fatura Vencida - ASAAS</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">Lembrete/Aviso Antecedência de Pagamento - ASAAS</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">Template de Backup dos Workflow N8N Automáticos</span>
                      </li>
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
                        <span className="text-sm text-gray-600">R$400,00 para manutenção do sistema</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">Inclui atualizações, workflow e suporte</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="pt-4 pb-8 flex justify-center">
                <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-6 rounded-full transition-all shadow-md hover:shadow-lg">
                  <a href="https://api.whatsapp.com/send?phone=5512981156856&text=Olá,%20tenho%20interesse%20no%20Plano%20Pro.%20Pode%20me%20enviar%20mais%20informações?" target="_blank" rel="noopener noreferrer">
                    Contratar plano pro
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Plano Enterprise - NOVO */}
          <div className="relative">
            <Card className="h-full transition-all duration-300 overflow-hidden bg-gradient-to-br from-blue-900 to-blue-800 border-blue-700 text-white hover:shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-800 to-blue-700 pb-6 border-b border-blue-700/50">
                <div className="space-y-1.5">
                  <Badge className="bg-blue-300 text-blue-900 border-0 mb-2 font-medium">
                    White Label Enterprise
                  </Badge>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2 text-white">
                    Plano Enterprise
                    <Server className="h-5 w-5 text-blue-300" />
                  </CardTitle>
                  <CardDescription className="text-blue-200">
                    Solução completa de infraestrutura
                  </CardDescription>
                </div>
                <div className="mt-4 flex items-baseline justify-center">
                  <div className="flex flex-col items-center">
                    <div className="flex items-baseline">
                      <span className="text-lg text-blue-200 mr-2">11x sem juros</span>
                      <span className="text-4xl font-extrabold tracking-tight text-white">R$54,00</span>
                    </div>
                    <span className="text-sm text-blue-300">ou R$594,00 a vista</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3 justify-center">
                  <Badge variant="outline" className="bg-blue-700/50 text-blue-100 border-blue-600">
                    Infraestrutura completa inclusa
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <div className="space-y-5">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-300 flex items-center">
                      <Trophy className="h-5 w-5 text-blue-300" />
                      Tudo do plano Pro, mais:
                    </h4>
                    
                    <div className="bg-blue-800/50 p-4 rounded-lg border border-blue-700 mb-4">
                      <h5 className="text-blue-200 font-medium mb-3 flex items-center">
                        <Server className="w-4 h-4 mr-2" />
                        Pacote n8n completo incluso:
                      </h5>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2.5">
                          <div className="bg-blue-600 rounded-full p-1.5">
                            <FileCode className="w-4 h-4 text-white flex-shrink-0" />
                          </div>
                          <span className="text-sm text-blue-100">N8N - Plataforma de automação</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <div className="bg-blue-600 rounded-full p-1.5">
                            <GitBranch className="w-4 h-4 text-white flex-shrink-0" />
                          </div>
                          <span className="text-sm text-blue-100">Evolution API</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <div className="bg-blue-600 rounded-full p-1.5">
                            <Store className="w-4 h-4 text-white flex-shrink-0" />
                          </div>
                          <span className="text-sm text-blue-100">Redis - Sistema de cache</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <div className="bg-blue-600 rounded-full p-1.5">
                            <Database className="w-4 h-4 text-white flex-shrink-0" />
                          </div>
                          <span className="text-sm text-blue-100">Postgres - Banco de dados</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <div className="bg-blue-600 rounded-full p-1.5">
                            <Warehouse className="w-4 h-4 text-white flex-shrink-0" />
                          </div>
                          <span className="text-sm text-blue-100">Minio - Armazenamento</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-800/50 p-4 rounded-lg border border-blue-700">
                      <h5 className="text-blue-200 font-medium mb-3">Benefícios Enterprise:</h5>
                      <ul className="space-y-2.5">
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-blue-100">Infraestrutura completa em servidores otimizados</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-blue-100">Implementação e configuração por especialistas</span>
                        </li>
                        
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-blue-100">Prioridade no suporte técnico</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <Separator className="bg-blue-700" />
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-300">Conexões adicionais (opcionais):</h4>
                    <div className="bg-blue-800/50 p-4 rounded-lg border border-blue-700">
                      <ul className="space-y-3 mb-4">
                        <li className="flex items-center gap-2.5">
                          <div className="bg-green-500 rounded-full p-1.5">
                            <MessageSquare className="w-4 h-4 text-white flex-shrink-0" />
                          </div>
                          <span className="text-sm text-blue-100">API oficial WhatsApp (ilimitada)</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <div className="bg-pink-500 rounded-full p-1.5">
                            <SmartphoneIcon className="w-4 h-4 text-white flex-shrink-0" />
                          </div>
                          <span className="text-sm text-blue-100">Instagram (conexões ilimitadas)</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <div className="bg-blue-600 rounded-full p-1.5">
                            <Globe className="w-4 h-4 text-white flex-shrink-0" />
                          </div>
                          <span className="text-sm text-blue-100">Facebook (conexões ilimitadas)</span>
                        </li>
                      </ul>
                      
                      <div className="bg-blue-700/50 p-3 rounded-lg border border-blue-600 text-center">
                        <p className="text-blue-200 font-medium mb-1">Valor mensal:</p>
                        <p className="text-2xl font-bold text-white">R$260,00</p>
                        <p className="text-xs text-blue-300">Conexões ilimitadas</p>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="bg-blue-700" />
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-300">Renovação anual:</h4>
                    <ul className="space-y-2.5 border-l-2 border-blue-700 pl-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-blue-100">R$400,00 para manutenção do sistema</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-blue-100">Inclui upgrades, workflow e suporte</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="pt-4 pb-8 flex justify-center">
                <Button asChild className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-blue-900 font-medium py-6 rounded-full transition-all shadow-md hover:shadow-lg">
                  <a href="https://api.whatsapp.com/send?phone=5512981156856&text=Olá,%20tenho%20interesse%20no%20servidor%20dedicado%20Enterprise" target="_blank" rel="noopener noreferrer">
                    Contratar plano enterprise
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
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
                        <Database className="w-4 h-4" />
                        Capacidade: {vps.clients}
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
                      <p className="text-sm font-medium text-blue-700 flex items-center">
                        <Network className="w-4 h-4" />
                        Suporta: {vps.connections}
                      </p>
                    </div>
                    
                    <Button asChild className="w-full mt-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                      <a href={`https://api.whatsapp.com/send?phone=5512981156856&text=Olá,%20tenho%20interesse%20na%20VPS%20${vps.name}`} target="_blank" rel="noopener noreferrer">
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
              
              
              
            </div>
            
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="https://api.whatsapp.com/send?phone=5512981156856&text=Olá,%20gostaria%20de%20uma%20cotação%20para%20personalização%20de%20sistemas" target="_blank" rel="noopener noreferrer">
                Solicitar cotação para personalização
              </a>
            </Button>
          </div>
        </div>

        {/* Nova seção: Crescimento Profissional - Chamada para Servidores Dedicados */}
        <div className="max-w-5xl mx-auto mt-16 pt-6 border-t border-gray-200">
          <div className="text-center mb-8">
            <Badge variant="outline" className="bg-blue-800 text-white border-blue-700 mb-4">
              Crescimento Profissional
            </Badge>
            <h3 className="text-2xl font-bold mb-3">Plano de <span className="text-blue-700">Crescimento Profissional</span></h3>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Servidores de alta performance para empresas que precisam de máximo desempenho e escalabilidade
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-purple-900 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white space-y-4 max-w-2xl">
                <Badge className="bg-purple-500 border-0 text-white mb-2">EXCLUSIVO ARSENAL CACHE</Badge>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">Servidores Dedicados Para Grandes Operações</h2>
                <p className="text-lg text-blue-100 mb-4">
                  Um serviço <span className="font-bold underline decoration-purple-400">exclusivo da Arsenal Cache</span> para clientes que buscam o mais alto nível de performance e segurança para suas operações.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-50">Suporte técnico exclusivo 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-50">Infraestrutura dedicada de alto desempenho</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-50">Capacidade para centenas de clientes</span>
                  </li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <Button asChild variant="purple" size="lg" className="py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-base">
                  <Link to="/servidores">
                    Conheça Nossos Servidores Dedicados
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
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
              <Button asChild className="bg-white hover:bg-blue-50 text-blue-700 font-medium py-6 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all border border-blue-300">
                <a href="https://api.whatsapp.com/send?phone=5512981156856&text=Olá,%20preciso%20de%20uma%20cotação%20personalizada%20para%20servidores" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Solicitar cotação personalizada
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default PricingSection;
