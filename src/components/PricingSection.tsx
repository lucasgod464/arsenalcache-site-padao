
import React from 'react';
import { Check, ArrowRight, MessageCircle, Star, Trophy, Server, Cpu, HardDrive, Database, Network } from 'lucide-react';
import { MessageSquare, SmartphoneIcon, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const PricingSection = () => {
  const mainFeatures = ["Instalação pela nossa equipe", "Atualizações pelo nossa equipe", "Suporte humano", "Usuários ilimitados", "Conexões ilimitadas de WhatsApp", "Sua logo no sistema", "Cores personalizadas", "Nome do sistema personalizado", "Revenda de assinaturas ilimitadas", "Suporte individual no WhatsApp"];
  const vpsSystems = ["n8n", "redis", "evolution API", "dify", "typebot", "supabase", "postgres"];
  
  const vpsOptions = [
    {
      name: "VPS 6GB",
      price: "119.90",
      specs: [
        { icon: <Server className="w-4 h-4 text-blue-500" />, text: "6GB RAM" },
        { icon: <Cpu className="w-4 h-4 text-blue-500" />, text: "2 vCPU" },
        { icon: <HardDrive className="w-4 h-4 text-blue-500" />, text: "100 GB NVMe" },
        { icon: <Network className="w-4 h-4 text-blue-500" />, text: "1 IPV4" },
        { icon: <Database className="w-4 h-4 text-blue-500" />, text: "Servidor no Brasil" }
      ],
      clients: "Até 20 clientes",
      connections: "Até 500 conexões"
    },
    {
      name: "VPS 8GB",
      price: "139.90",
      specs: [
        { icon: <Server className="w-4 h-4 text-blue-500" />, text: "8GB RAM" },
        { icon: <Cpu className="w-4 h-4 text-blue-500" />, text: "2 vCPU" },
        { icon: <HardDrive className="w-4 h-4 text-blue-500" />, text: "120 GB NVMe" },
        { icon: <Network className="w-4 h-4 text-blue-500" />, text: "1 IPV4" },
        { icon: <Database className="w-4 h-4 text-blue-500" />, text: "Servidor no Brasil" }
      ],
      clients: "Até 40 clientes",
      connections: "Até 1000 conexões"
    },
    {
      name: "VPS 16GB",
      price: "249.90",
      specs: [
        { icon: <Server className="w-4 h-4 text-blue-500" />, text: "16GB RAM" },
        { icon: <Cpu className="w-4 h-4 text-blue-500" />, text: "6 vCPU" },
        { icon: <HardDrive className="w-4 h-4 text-blue-500" />, text: "200 GB NVMe" },
        { icon: <Network className="w-4 h-4 text-blue-500" />, text: "1 IPV4" },
        { icon: <Database className="w-4 h-4 text-blue-500" />, text: "Servidor no Brasil" }
      ],
      clients: "Até 100 clientes",
      connections: "Até 3000 conexões"
    },
    {
      name: "VPS 32GB",
      price: "399.90",
      specs: [
        { icon: <Server className="w-4 h-4 text-blue-500" />, text: "32GB RAM" },
        { icon: <Cpu className="w-4 h-4 text-blue-500" />, text: "6 vCPU" },
        { icon: <HardDrive className="w-4 h-4 text-blue-500" />, text: "250 GB NVMe" },
        { icon: <Network className="w-4 h-4 text-blue-500" />, text: "1 IPV4" },
        { icon: <Database className="w-4 h-4 text-blue-500" />, text: "Servidor no Brasil" }
      ],
      clients: "Até 250 clientes",
      connections: "Até 7500 conexões"
    }
  ];
  
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
                    <Trophy className="h-5 w-5 text-blue-500 mr-2" />
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
            {vpsOptions.map((vps, index) => (
              <Card key={index} className="border border-blue-100 hover:shadow-md transition-all bg-white">
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
                    {vps.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-3">
                        {spec.icon}
                        <span className="text-sm text-gray-600">{spec.text}</span>
                      </li>
                    ))}
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
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100 max-w-3xl mx-auto">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">VPS Totalmente Otimizada</h4>
            <p className="text-gray-600 mb-4">
              Nossas VPS são especialmente configuradas para o WhatTicket, garantindo o máximo de desempenho e estabilidade para o seu negócio.
            </p>
            
            <ul className="text-left space-y-2 mb-6 max-w-md mx-auto">
              {vpsSystems.map((system, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Sistema {system} pré-instalado e configurado</span>
                </li>
              ))}
            </ul>
            
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="https://api.whatsapp.com/send?phone=5512981156856&text=Olá,%20quero%20mais%20informações%20sobre%20as%20VPS%20otimizadas" target="_blank" rel="noopener noreferrer">
                Falar com especialista em servidores
              </a>
            </Button>
          </div>
        </div>

        <div className="text-center mt-8 max-w-3xl mx-auto">
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
