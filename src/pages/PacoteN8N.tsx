
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingCta from "@/components/FloatingCta";
import { Server, Database, Box, Cloud, Box as BoxIcon, Cpu, Check, WalletCards, HardDrive, MemoryStick } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const PacoteN8N = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Tabs de navegação */}
      <div className="container mx-auto mt-4 mb-8 px-4">
        <Tabs 
          defaultValue="n8n" 
          value={location.pathname === '/' ? 'home' : location.pathname === '/servidores' ? 'servers' : location.pathname === '/ia-conecta' ? 'ia' : location.pathname === '/pacote-n8n' ? 'n8n' : 'n8n'} 
          className="w-full flex justify-center"
        >
          <TabsList className="bg-gray-100 p-1 rounded-xl">
            <TabsTrigger value="home" asChild className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg transition-all">
              <Link to="/" className="px-4 py-2">Início</Link>
            </TabsTrigger>
            <TabsTrigger value="servers" asChild className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg transition-all">
              <Link to="/servidores" className="px-4 py-2">Servidores</Link>
            </TabsTrigger>
            <TabsTrigger value="ia" asChild className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg transition-all">
              <Link to="/ia-conecta" className="px-4 py-2">IA Conecta</Link>
            </TabsTrigger>
            <TabsTrigger value="n8n" asChild className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg transition-all">
              <Link to="/pacote-n8n" className="px-4 py-2">Pacote N8N</Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      {/* Hero Section com animação */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM3ZDg3ZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block animate-float mb-6">
              <Badge className="mb-2 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-colors py-1.5 px-4 text-sm font-medium">Solução Completa</Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent leading-tight">
              Pacote N8N: Automação e Integração
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Uma solução completa e poderosa com todas as ferramentas necessárias para automação, 
              integração e gerenciamento de fluxos de trabalho em uma única plataforma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 text-lg font-medium py-6">
                Solicitar Demonstração
              </Button>
              <Button size="lg" variant="outline" className="border-indigo-300 text-indigo-700 hover:bg-indigo-50 transition-all duration-300 text-lg font-medium py-6">
                Ver Documentação
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Componentes do Pacote */}
      <section className="py-24 bg-gradient-to-br from-white to-indigo-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-3 bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors py-1 px-3">Integrado</Badge>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent mb-4">Componentes do Pacote</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Uma suite completa de tecnologias integradas para criar automações poderosas e escaláveis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* N8N */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 rounded-xl overflow-hidden group hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 w-full"></div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge className="bg-blue-100 text-blue-800">Automação</Badge>
                  <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                    <Server className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <CardTitle className="text-xl mt-3">n8n</CardTitle>
                <CardDescription className="text-gray-600">
                  Plataforma de automação de fluxo de trabalho poderosa e extensível
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="p-0.5 rounded-full bg-green-100 text-green-600 mr-2 mt-1"><Check className="h-3.5 w-3.5" /></span>
                    <span className="text-gray-700">Automação de fluxos de trabalho com interface visual</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-0.5 rounded-full bg-green-100 text-green-600 mr-2 mt-1"><Check className="h-3.5 w-3.5" /></span>
                    <span className="text-gray-700">Mais de 200 integrações prontas para uso</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-0.5 rounded-full bg-green-100 text-green-600 mr-2 mt-1"><Check className="h-3.5 w-3.5" /></span>
                    <span className="text-gray-700">Execução com base em eventos ou agendamentos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Evolution API */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 rounded-xl overflow-hidden group hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-green-500 to-teal-500 w-full"></div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge className="bg-green-100 text-green-800">Comunicação</Badge>
                  <div className="p-2 rounded-full bg-green-50 group-hover:bg-green-100 transition-colors">
                    <Cloud className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <CardTitle className="text-xl mt-3">Evolution API</CardTitle>
                <CardDescription className="text-gray-600">
                  API robusta para integração com WhatsApp e outros canais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="p-0.5 rounded-full bg-green-100 text-green-600 mr-2 mt-1"><Check className="h-3.5 w-3.5" /></span>
                    <span className="text-gray-700">Integração com WhatsApp sem complicações</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-0.5 rounded-full bg-green-100 text-green-600 mr-2 mt-1"><Check className="h-3.5 w-3.5" /></span>
                    <span className="text-gray-700">Suporte a múltiplas conexões simultâneas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-0.5 rounded-full bg-green-100 text-green-600 mr-2 mt-1"><Check className="h-3.5 w-3.5" /></span>
                    <span className="text-gray-700">Envio e recebimento de mensagens programaticamente</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Redis */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 rounded-xl overflow-hidden group hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-red-500 to-orange-500 w-full"></div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge className="bg-red-100 text-red-800">Cache</Badge>
                  <div className="p-2 rounded-full bg-red-50 group-hover:bg-red-100 transition-colors">
                    <Database className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <CardTitle className="text-xl mt-3">Redis</CardTitle>
                <CardDescription className="text-gray-600">
                  Armazenamento de estrutura de dados em memória de alto desempenho
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="p-0.5 rounded-full bg-green-100 text-green-600 mr-2 mt-1"><Check className="h-3.5 w-3.5" /></span>
                    <span className="text-gray-700">Cache em memória ultrarrápido</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-0.5 rounded-full bg-green-100 text-green-600 mr-2 mt-1"><Check className="h-3.5 w-3.5" /></span>
                    <span className="text-gray-700">Suporte a estruturas de dados complexas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-0.5 rounded-full bg-green-100 text-green-600 mr-2 mt-1"><Check className="h-3.5 w-3.5" /></span>
                    <span className="text-gray-700">Persistência opcional para dados críticos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* PostgreSQL */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 rounded-xl overflow-hidden group hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600 w-full"></div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge className="bg-blue-100 text-blue-800">Banco de Dados</Badge>
                  <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                    <Database className="h-6 w-6 text-blue-700" />
                  </div>
                </div>
                <CardTitle className="text-xl mt-3">PostgreSQL</CardTitle>
                <CardDescription className="text-gray-600">
                  Sistema de banco de dados relacional robusto e confiável
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="p-0.5 rounded-full bg-green-100 text-green-600 mr-2 mt-1"><Check className="h-3.5 w-3.5" /></span>
                    <span className="text-gray-700">Banco de dados SQL completo e avançado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-0.5 rounded-full bg-green-100 text-green-600 mr-2 mt-1"><Check className="h-3.5 w-3.5" /></span>
                    <span className="text-gray-700">Suporte a transações ACID</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-0.5 rounded-full bg-green-100 text-green-600 mr-2 mt-1"><Check className="h-3.5 w-3.5" /></span>
                    <span className="text-gray-700">Extensível com tipos de dados personalizados</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Supabase */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 rounded-xl overflow-hidden group hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-emerald-500 to-green-500 w-full"></div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge className="bg-emerald-100 text-emerald-800">Backend</Badge>
                  <div className="p-2 rounded-full bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
                    <Cpu className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
                <CardTitle className="text-xl mt-3">Supabase</CardTitle>
                <CardDescription className="text-gray-600">
                  Alternativa de código aberto ao Firebase com recursos avançados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="p-0.5 rounded-full bg-green-100 text-green-600 mr-2 mt-1"><Check className="h-3.5 w-3.5" /></span>
                    <span className="text-gray-700">Autenticação, banco de dados e armazenamento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-0.5 rounded-full bg-green-100 text-green-600 mr-2 mt-1"><Check className="h-3.5 w-3.5" /></span>
                    <span className="text-gray-700">APIs RESTful e tempo real</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-0.5 rounded-full bg-green-100 text-green-600 mr-2 mt-1"><Check className="h-3.5 w-3.5" /></span>
                    <span className="text-gray-700">Edge Functions para lógica de servidor sem servidor</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* MinIO */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 rounded-xl overflow-hidden group hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-yellow-500 to-amber-500 w-full"></div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge className="bg-yellow-100 text-yellow-800">Armazenamento</Badge>
                  <div className="p-2 rounded-full bg-yellow-50 group-hover:bg-yellow-100 transition-colors">
                    <BoxIcon className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <CardTitle className="text-xl mt-3">MinIO</CardTitle>
                <CardDescription className="text-gray-600">
                  Servidor de armazenamento de objetos de alta performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="p-0.5 rounded-full bg-green-100 text-green-600 mr-2 mt-1"><Check className="h-3.5 w-3.5" /></span>
                    <span className="text-gray-700">Compatível com API Amazon S3</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-0.5 rounded-full bg-green-100 text-green-600 mr-2 mt-1"><Check className="h-3.5 w-3.5" /></span>
                    <span className="text-gray-700">Armazenamento escalável e distribuído</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-0.5 rounded-full bg-green-100 text-green-600 mr-2 mt-1"><Check className="h-3.5 w-3.5" /></span>
                    <span className="text-gray-700">Proteção de dados com criptografia</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Portainer */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 rounded-xl overflow-hidden group hover:-translate-y-1 col-span-1 md:col-span-2 lg:col-span-1">
              <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500 w-full"></div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge className="bg-cyan-100 text-cyan-800">Gerenciamento</Badge>
                  <div className="p-2 rounded-full bg-cyan-50 group-hover:bg-cyan-100 transition-colors">
                    <Box className="h-6 w-6 text-cyan-600" />
                  </div>
                </div>
                <CardTitle className="text-xl mt-3">Portainer</CardTitle>
                <CardDescription className="text-gray-600">
                  Interface gráfica para gerenciamento de contêineres Docker
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="p-0.5 rounded-full bg-green-100 text-green-600 mr-2 mt-1"><Check className="h-3.5 w-3.5" /></span>
                    <span className="text-gray-700">Gerenciamento visual de contêineres</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-0.5 rounded-full bg-green-100 text-green-600 mr-2 mt-1"><Check className="h-3.5 w-3.5" /></span>
                    <span className="text-gray-700">Monitoramento de recursos e logs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-0.5 rounded-full bg-green-100 text-green-600 mr-2 mt-1"><Check className="h-3.5 w-3.5" /></span>
                    <span className="text-gray-700">Controle de acesso baseado em funções</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de Preço Destaque - Melhorada visualmente */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-indigo-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2NzRlZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-70"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="mb-3 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-colors py-1 px-3">Valor Único</Badge>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent mb-4">Plano Único Exclusivo</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Uma solução completa por um preço acessível, pague apenas uma vez e use para sempre
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-white border-2 border-purple-300 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              {/* Destaque no canto */}
              <div className="absolute -right-12 -top-12 rotate-45 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-12 text-sm font-medium shadow-lg z-10">
                Pagamento único
              </div>
              
              {/* Faixa superior estilizada */}
              <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 py-8 px-8 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L100,5 C60,20 40,20 0,5 Z" fill="white"></path>
                  </svg>
                </div>
                <div className="flex justify-between items-center relative z-10">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold">Pacote Completo N8N</h3>
                    <p className="text-indigo-100 mt-2 text-lg">Para instalação em sua VPS</p>
                  </div>
                  <div className="hidden md:block">
                    <WalletCards className="h-16 w-16 text-indigo-200" />
                  </div>
                </div>
              </div>
              
              {/* Preço destacado */}
              <div className="flex justify-center -mt-7 relative z-20">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1 rounded-xl shadow-xl">
                  <div className="bg-white rounded-lg px-8 py-3 shadow-inner">
                    <div className="flex items-baseline">
                      <span className="text-lg font-medium text-purple-800">R$</span>
                      <span className="text-5xl font-bold text-indigo-700 tracking-tight">119</span>
                      <span className="text-3xl font-bold text-indigo-700">,90</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Conteúdo do cartão */}
              <div className="p-8 pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-indigo-50 rounded-2xl p-6 shadow-inner border border-indigo-100">
                    <h4 className="text-lg font-semibold text-indigo-800 flex items-center gap-2 mb-4">
                      <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 shadow-inner">
                        <Check className="h-5 w-5" />
                      </span>
                      Todas as Ferramentas Incluídas
                    </h4>
                    <ul className="space-y-3 pl-10">
                      <li className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 shadow"></span>
                        <span>N8N para automações</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 shadow"></span>
                        <span>Evolution API para WhatsApp</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 shadow"></span>
                        <span>Redis para cache rápido</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 shadow"></span>
                        <span>PostgreSQL para dados</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 shadow"></span>
                        <span>Supabase e MinIO integrados</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 shadow"></span>
                        <span>Portainer para gerenciamento</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 rounded-2xl p-6 shadow-inner border border-purple-100">
                    <h4 className="text-lg font-semibold text-purple-800 flex items-center gap-2 mb-4">
                      <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 shadow-inner">
                        <Check className="h-5 w-5" />
                      </span>
                      Vantagens Exclusivas
                    </h4>
                    <ul className="space-y-3 pl-10">
                      <li className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-purple-500 shadow"></span>
                        <span>Pagamento único (sem mensalidades)</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-purple-500 shadow"></span>
                        <span>Instalação remota na sua VPS</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-purple-500 shadow"></span>
                        <span>Suporte técnico na instalação</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-purple-500 shadow"></span>
                        <span>Documentação completa</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-purple-500 shadow"></span>
                        <span>Acesso a atualizações</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-purple-500 shadow"></span>
                        <span>Configuração personalizada</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 mt-8 border border-indigo-100 shadow-inner">
                  <h4 className="font-semibold text-indigo-800 mb-3 flex items-center gap-2">
                    <Server className="h-5 w-5 text-indigo-700" /> 
                    Requisitos para instalação:
                  </h4>
                  <p className="text-gray-700">
                    Você precisa ter uma VPS (Servidor Privado Virtual) com pelo menos 2GB de RAM, 
                    2 vCPUs e 40GB de espaço em disco. Recomendamos provedores como Digital Ocean, 
                    Vultr, Linode ou AWS.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-7 flex-grow text-lg font-medium shadow-lg hover:shadow-indigo-500/30 transition-all">
                    Adquirir Agora
                  </Button>
                  <Button variant="outline" className="border-indigo-300 text-indigo-700 hover:bg-indigo-50 py-7 flex-grow text-lg font-medium transition-all">
                    Ver demonstração
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VPS Recomendadas - Estilo melhorado */}
      <section className="py-24 bg-gradient-to-br from-white to-indigo-50/60 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-60"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="mb-3 bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors py-1 px-3">Hospedagem</Badge>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent mb-4">VPS Recomendadas</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Para um desempenho ideal do Pacote N8N, recomendamos as seguintes configurações de VPS com recursos balanceados para suas necessidades
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* VPS 4GB */}
            <Card className="border-2 border-indigo-200 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden group">
              <div className="h-3 bg-gradient-to-r from-blue-500 to-indigo-500 w-full"></div>
              <CardHeader className="text-center pb-4 pt-6">
                <Badge className="bg-indigo-100 text-indigo-800 mb-3 mx-auto py-1 px-4">Iniciante</Badge>
                <CardTitle className="text-2xl font-bold">VPS 4GB</CardTitle>
                <div className="mt-3 group-hover:scale-110 transition-all duration-300">
                  <div className="flex items-baseline justify-center">
                    <span className="text-lg font-medium text-gray-500">R$</span>
                    <span className="text-5xl font-bold text-indigo-600">89</span>
                    <span className="text-2xl font-semibold text-indigo-600">,90</span>
                    <span className="text-gray-500 text-sm ml-1">/mês</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-indigo-50/50 border border-indigo-100">
                    <div className="p-2 rounded-full bg-indigo-100 shadow-inner">
                      <MemoryStick className="h-5 w-5 text-indigo-600" />
                    </div>
                    <span className="font-medium text-gray-800">4 GB RAM</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-indigo-50/50 border border-indigo-100">
                    <div className="p-2 rounded-full bg-indigo-100 shadow-inner">
                      <Cpu className="h-5 w-5 text-indigo-600" />
                    </div>
                    <span className="font-medium text-gray-800">2 vCPU</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-indigo-50/50 border border-indigo-100">
                    <div className="p-2 rounded-full bg-indigo-100 shadow-inner">
                      <HardDrive className="h-5 w-5 text-indigo-600" />
                    </div>
                    <span className="font-medium text-gray-800">30 GB NVMe</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-indigo-50/50 border border-indigo-100">
                    <div className="p-2 rounded-full bg-indigo-100 shadow-inner">
                      <Server className="h-5 w-5 text-indigo-600" />
                    </div>
                    <span className="font-medium text-gray-800">1 IPV4</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-indigo-50/50 border border-indigo-100">
                    <div className="p-2 rounded-full bg-indigo-100 shadow-inner">
                      <BoxIcon className="h-5 w-5 text-indigo-600" />
                    </div>
                    <span className="font-medium text-gray-800">Servidor no Brasil</span>
                  </div>
                </div>
                
                <div className="mt-8 bg-gradient-to-r from-indigo-100/50 to-blue-100/50 rounded-xl p-5 border border-indigo-200 shadow-inner">
                  <h4 className="font-medium text-indigo-800 mb-3">Ideal para:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-indigo-600" />
                      <span>Automações de baixa/média complexidade</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-indigo-600" />
                      <span>Até 5 fluxos de trabalho simultâneos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-indigo-600" />
                      <span>Volume moderado de mensagens</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center pb-8 px-8">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white w-full py-6 text-lg font-medium shadow-lg hover:shadow-blue-500/30 transition-all">
                  Solicitar Orçamento
                </Button>
              </CardFooter>
            </Card>
            
            {/* VPS 6GB - Atualizado para 169,90 e 80GB */}
            <Card className="border-2 border-purple-300 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden relative group">
              {/* Badge de destaque */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-1 px-4 rounded-full text-xs font-semibold shadow-lg z-10">
                Mais Popular
              </div>
              
              <div className="h-3 bg-gradient-to-r from-purple-500 to-indigo-500 w-full"></div>
              <CardHeader className="text-center pb-4 pt-6">
                <Badge className="bg-purple-100 text-purple-800 mb-3 mx-auto py-1 px-4">Recomendado</Badge>
                <CardTitle className="text-2xl font-bold">VPS 6GB</CardTitle>
                <div className="mt-3 group-hover:scale-110 transition-all duration-300">
                  <div className="flex items-baseline justify-center">
                    <span className="text-lg font-medium text-gray-500">R$</span>
                    <span className="text-5xl font-bold text-purple-600">169</span>
                    <span className="text-2xl font-semibold text-purple-600">,90</span>
                    <span className="text-gray-500 text-sm ml-1">/mês</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50/50 border border-purple-100">
                    <div className="p-2 rounded-full bg-purple-100 shadow-inner">
                      <MemoryStick className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="font-medium text-gray-800">6 GB RAM</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50/50 border border-purple-100">
                    <div className="p-2 rounded-full bg-purple-100 shadow-inner">
                      <Cpu className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="font-medium text-gray-800">3 vCPU</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50/50 border border-purple-100">
                    <div className="p-2 rounded-full bg-purple-100 shadow-inner">
                      <HardDrive className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="font-medium text-gray-800">80 GB NVMe</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50/50 border border-purple-100">
                    <div className="p-2 rounded-full bg-purple-100 shadow-inner">
                      <Server className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="font-medium text-gray-800">1 IPV4</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50/50 border border-purple-100">
                    <div className="p-2 rounded-full bg-purple-100 shadow-inner">
                      <BoxIcon className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="font-medium text-gray-800">Servidor no Brasil</span>
                  </div>
                </div>
                
                <div className="mt-8 bg-gradient-to-r from-purple-100/50 to-indigo-100/50 rounded-xl p-5 border border-purple-200 shadow-inner">
                  <h4 className="font-medium text-purple-800 mb-3">Ideal para:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-600" />
                      <span>Automações complexas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-600" />
                      <span>Até 15 fluxos de trabalho simultâneos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-600" />
                      <span>Volume alto de mensagens</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-600" />
                      <span>Processamento rápido de solicitações</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center pb-8 px-8">
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white w-full py-6 text-lg font-medium shadow-lg hover:shadow-purple-500/30 transition-all">
                  Solicitar Orçamento
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6 text-lg">
              Não encontrou o plano ideal para o seu projeto? Entre em contato para soluções personalizadas.
            </p>
            <Button variant="outline" className="border-indigo-300 text-indigo-700 hover:bg-indigo-50 transition-all px-8 py-6 text-lg">
              Solicitar configuração personalizada
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section - Mais chamativa */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-indigo-900/20 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-white/10 text-white hover:bg-white/20 mb-6">Transforme seu negócio</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Pronto para automatizar seus processos?</h2>
            <p className="text-xl mb-10 text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              Combine o poder do n8n, Evolution API e outras ferramentas poderosas para criar fluxos de trabalho eficientes e escaláveis que economizam tempo e recursos.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-100 transition-all duration-300 shadow-lg hover:shadow-white/20 text-lg font-medium py-7 px-8">
                Solicitar Demonstração
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 transition-all duration-300 text-lg font-medium py-7 px-8">
                Ver Documentação
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <FloatingCta />
    </div>
  );
};

export default PacoteN8N;
