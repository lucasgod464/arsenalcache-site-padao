import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check, ArrowRight, Server, Cpu, HardDrive, Network, Database, Trophy, ShieldCheck, Headset } from 'lucide-react';

const Servidores = () => {
  const location = useLocation();
  
  const vpsOptions = [
    {
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
    }
  ];
  
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
  }, {
    name: "Enterprise v3",
    location: "São Paulo - Dedicado 3",
    price: "2.800,00",
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
      details: "1x 2TB NVMe"
    }, {
      title: "IPs",
      details: "5 IPV4 + 16 IPV6"
    }, {
      title: "Datacenter",
      details: "Ascenty SP4"
    }],
    extras: ["Link 1 GBPs ilimitado(FUP)", "Proteção DDOS Inclusa", "FTP Backup 200GB Incluso", "1 IPV4 Dedicado Incluso", "Uptime superior à 99,9%"],
    clients: "Até 500 clientes",
    connections: "Até 350 conexões"
  }, {
    name: "Enterprise v4",
    location: "São Paulo - Dedicado 4",
    price: "3.200,00",
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
      details: "256 GB DDR4"
    }, {
      title: "Discos",
      details: "1x 2TB NVMe"
    }, {
      title: "IPs",
      details: "5 IPV4 + 16 IPV6"
    }, {
      title: "Datacenter",
      details: "Ascenty SP4"
    }],
    extras: ["Link 1 GBPs ilimitado(FUP)", "Proteção DDOS Inclusa", "FTP Backup 200GB Incluso", "1 IPV4 Dedicado Incluso", "Uptime superior à 99,9%"],
    clients: "Até 800 clientes",
    connections: "Até 500 conexões"
  }];
  
  const premiumBenefits = ["Monitoramento 24/7 de todos os sistemas", "Otimizações proativas de performance", "Escalonamento automático de recursos", "Suporte técnico prioritário", "Backup diário automatizado"];

  const exclusiveSupport = [
    "Suporte técnico exclusivo 24/7",
    "Equipe dedicada para seu servidor",
    "Monitoramento em tempo real",
    "Manutenção preventiva",
    "Resposta prioritária para incidentes"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Tabs de navegação */}
      <div className="container mx-auto mt-4 mb-8 px-4">
        <Tabs 
          defaultValue="servers" 
          value={location.pathname === '/' ? 'home' : location.pathname === '/servidores' ? 'servers' : location.pathname === '/ia-conecta' ? 'ia' : 'servers'} 
          className="w-full flex justify-center"
        >
          <TabsList>
            <TabsTrigger value="home" asChild>
              <Link to="/" className="px-4 py-2">Início</Link>
            </TabsTrigger>
            <TabsTrigger value="servers" asChild>
              <Link to="/servidores" className="px-4 py-2">Servidores</Link>
            </TabsTrigger>
            <TabsTrigger value="ia" asChild>
              <Link to="/ia-conecta" className="px-4 py-2">IA Conecta</Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <main className="container mx-auto py-16 px-4">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="bg-blue-600 text-white border-blue-500 mb-4">
            Infraestrutura
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Servidores <span className="text-blue-600">Otimizados</span>
          </h1>
          <p className="text-xl text-gray-600">
            Infraestrutura de alta performance para seu sistema Whaticket com o melhor custo-benefício do mercado
          </p>
        </div>
        
        {/* VPS Section */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">VPS <span className="text-blue-600">Dedicadas</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Servidores VPS otimizados para performance e estabilidade do seu sistema Whaticket
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                      <a href={`https://api.whatsapp.com/send?phone=5512981156856&text=Olá,%20tenho%20interesse%20na%20VPS%20${vps.name}`} target="_blank" rel="noopener noreferrer">
                        Contratar {vps.name}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Servidores Dedicados - Banner Exclusivo */}
        <section className="mb-16" id="enterprise-dedicated">
          <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-purple-900 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white space-y-4 max-w-2xl">
                <Badge className="bg-purple-500 border-0 text-white mb-2">EXCLUSIVO</Badge>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">Plano Enterprise com Servidores Dedicados</h2>
                <p className="text-lg text-blue-100 mb-4">
                  Um serviço <span className="font-bold underline decoration-purple-400">exclusivo da Arsenal Cache</span> para clientes que buscam o mais alto nível de performance e segurança para suas operações.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <ShieldCheck className="w-5 h-5 text-purple-300" />
                    <span className="text-sm font-medium">Suporte dedicado</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Server className="w-5 h-5 text-purple-300" />
                    <span className="text-sm font-medium">Infraestrutura exclusiva</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Headset className="w-5 h-5 text-purple-300" />
                    <span className="text-sm font-medium">Atendimento prioritário</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 min-w-[300px]">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-8 h-8 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Suporte Premium</h3>
                </div>
                <ul className="space-y-2">
                  {exclusiveSupport.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-blue-100">
                      <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Dedicated Servers Section */}
        <section className="pt-8 border-t border-gray-200" id="dedicated-servers">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Plano de <span className="text-blue-700">Crescimento Profissional</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Servidores dedicados e exclusivos da Arsenal Cache para empresas que precisam de máximo desempenho e escalabilidade
            </p>
            <Badge className="mt-3 bg-purple-600 text-white border-0">
              Exclusivo Arsenal Cache
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dedicatedServers.map((server, index) => (
              <Card key={index} className="border border-blue-200 hover:shadow-xl transition-all bg-gradient-to-br from-white to-blue-50">
                <CardHeader className="bg-gradient-to-r from-blue-700 to-blue-600 pb-6 text-white">
                  <div className="space-y-1.5">
                    <Badge className="bg-purple-500 text-white border-0 mb-2 font-medium">
                      Exclusivo Arsenal Cache
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
                        {server.specs.map((spec, i) => (
                          <li key={i} className="text-sm text-gray-700">
                            <span className="font-semibold">{spec.title}:</span> {spec.details}
                          </li>
                        ))}
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
                        {server.extras.map((extra, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{extra}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 rounded-lg text-white mt-4">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Headset className="h-5 w-5" />
                          Suporte Exclusivo Arsenal:
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-purple-200 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-purple-50">Equipe técnica dedicada 24/7</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-purple-200 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-purple-50">Monitoramento em tempo real</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-purple-200 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-purple-50">Resolução prioritária de problemas</span>
                          </li>
                        </ul>
                      </div>
                      
                      <Button asChild className="w-full mt-6 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white py-6 rounded-md transition-all shadow-md hover:shadow-xl">
                        <a href="https://api.whatsapp.com/send?phone=5512981156856&text=Olá,%20tenho%20interesse%20no%20servidor%20dedicado%20Enterprise" target="_blank" rel="noopener noreferrer">
                          Solicitar proposta
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="mt-20 bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl shadow-xl max-w-3xl mx-auto text-white">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-3">Precisa de uma solução personalizada?</h3>
            <p className="text-blue-100">
              Nossa equipe está pronta para desenvolver uma solução sob medida para seu negócio,
              independentemente do tamanho ou complexidade do seu projeto.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Button asChild className="bg-white hover:bg-blue-50 text-blue-700 font-medium py-6 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all border border-blue-300">
              <a href="https://api.whatsapp.com/send?phone=5512981156856&text=Olá,%20preciso%20de%20uma%20cotação%20personalizada%20para%20servidores" target="_blank" rel="noopener noreferrer">
                Solicitar cotação personalizada
              </a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Servidores;
