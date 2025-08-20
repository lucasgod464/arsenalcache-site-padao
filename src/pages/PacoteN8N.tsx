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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const PacoteN8N = () => {
  const location = useLocation();
  return <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Tabs de navegação */}
      <div className="container mx-auto mt-4 mb-8 px-4">
        <Tabs defaultValue="n8n" value={location.pathname === '/' ? 'home' : location.pathname === '/servidores' ? 'servers' : location.pathname === '/ia-conecta' ? 'ia' : location.pathname === '/pacote-n8n' ? 'n8n' : 'n8n'} className="w-full flex justify-center">
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
            <TabsTrigger value="n8n" asChild>
              <Link to="/pacote-n8n" className="px-4 py-2">Pacote N8N</Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">Solução Completa</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-arsenal-dark">Pacote N8N: Automação e Integração</h1>
            <p className="text-xl text-gray-700 mb-8">Uma solução completa com todas as ferramentas necessárias para automação, integração e gerenciamento de fluxos de trabalho.</p>
            <Button size="lg" className="bg-arsenal-DEFAULT hover:bg-arsenal-dark transition-colors" asChild>
              <a href="https://wa.me/5512981156856?text=Olá,%20gostaria%20de%20solicitar%20uma%20demonstração%20do%20pacote%20N8N." target="_blank" rel="noopener noreferrer">
                Solicitar Demonstração
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Componentes do Pacote - SEÇÃO MELHORADA */}
      <section className="py-16 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors">Tecnologias</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-arsenal-dark">Componentes do Pacote</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Uma infraestrutura completa para automatizar seus processos e impulsionar sua produtividade
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* N8N */}
            <Card className="group relative overflow-hidden border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-blue-50">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 w-full"></div>
              
              <div className="absolute top-4 right-4">
                <div className="p-2 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Server className="h-6 w-6" />
                </div>
              </div>
              
              <CardHeader>
                <Badge className="w-fit bg-blue-100 text-blue-800 group-hover:bg-blue-200 transition-all">Automação</Badge>
                <CardTitle className="text-2xl mt-4 text-blue-900">n8n</CardTitle>
                <CardDescription className="text-blue-700">
                  Plataforma de automação de fluxo de trabalho poderosa e extensível
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b-0">
                    <AccordionTrigger className="py-2 font-medium text-blue-800 hover:text-blue-600 hover:no-underline">
                      Recursos principais
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 mt-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-green-600" />
                          </div>
                          <span className="text-gray-700">Automação de fluxos de trabalho com interface visual intuitiva</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-green-600" />
                          </div>
                          <span className="text-gray-700">Mais de 200 integrações prontas para uso com sistemas populares</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-green-600" />
                          </div>
                          <span className="text-gray-700">Execução com base em eventos, webhooks ou agendamentos personalizados</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Evolution API */}
            <Card className="group relative overflow-hidden border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-green-50">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="h-2 bg-gradient-to-r from-green-500 to-teal-500 w-full"></div>
              
              <div className="absolute top-4 right-4">
                <div className="p-2 rounded-full bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  <Cloud className="h-6 w-6" />
                </div>
              </div>
              
              <CardHeader>
                <Badge className="w-fit bg-green-100 text-green-800 group-hover:bg-green-200 transition-all">Comunicação</Badge>
                <CardTitle className="text-2xl mt-4 text-green-900">Evolution API</CardTitle>
                <CardDescription className="text-green-700">
                  API robusta para integração com WhatsApp e outros canais
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b-0">
                    <AccordionTrigger className="py-2 font-medium text-green-800 hover:text-green-600 hover:no-underline">
                      Recursos principais
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 mt-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-green-600" />
                          </div>
                          <span className="text-gray-700">Integração com WhatsApp sem complicações e sem banimentos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-green-600" />
                          </div>
                          <span className="text-gray-700">Suporte a múltiplas conexões simultâneas com diferentes números</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-green-600" />
                          </div>
                          <span className="text-gray-700">Envio e recebimento de mensagens, mídia e arquivos programaticamente</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Redis */}
            <Card className="group relative overflow-hidden border border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-red-50">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="h-2 bg-gradient-to-r from-red-500 to-orange-500 w-full"></div>
              
              <div className="absolute top-4 right-4">
                <div className="p-2 rounded-full bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <Database className="h-6 w-6" />
                </div>
              </div>
              
              <CardHeader>
                <Badge className="w-fit bg-red-100 text-red-800 group-hover:bg-red-200 transition-all">Cache</Badge>
                <CardTitle className="text-2xl mt-4 text-red-900">Redis</CardTitle>
                <CardDescription className="text-red-700">
                  Armazenamento de estrutura de dados em memória de alto desempenho
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b-0">
                    <AccordionTrigger className="py-2 font-medium text-red-800 hover:text-red-600 hover:no-underline">
                      Recursos principais
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 mt-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-green-600" />
                          </div>
                          <span className="text-gray-700">Cache em memória ultrarrápido para melhorar o desempenho</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-green-600" />
                          </div>
                          <span className="text-gray-700">Suporte a estruturas de dados complexas como listas e hashes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-green-600" />
                          </div>
                          <span className="text-gray-700">Persistência opcional para dados críticos com recuperação rápida</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* PostgreSQL */}
            <Card className="group relative overflow-hidden border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-indigo-50">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600 w-full"></div>
              
              <div className="absolute top-4 right-4">
                <div className="p-2 rounded-full bg-blue-100 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                  <Database className="h-6 w-6" />
                </div>
              </div>
              
              <CardHeader>
                <Badge className="w-fit bg-blue-100 text-blue-800 group-hover:bg-blue-200 transition-all">Banco de Dados</Badge>
                <CardTitle className="text-2xl mt-4 text-blue-900">PostgreSQL</CardTitle>
                <CardDescription className="text-blue-700">
                  Sistema de banco de dados relacional robusto e confiável
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b-0">
                    <AccordionTrigger className="py-2 font-medium text-blue-800 hover:text-blue-600 hover:no-underline">
                      Recursos principais
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 mt-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-green-600" />
                          </div>
                          <span className="text-gray-700">Banco de dados SQL completo e avançado com suporte a JSON</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-green-600" />
                          </div>
                          <span className="text-gray-700">Suporte a transações ACID para integridade dos dados</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-green-600" />
                          </div>
                          <span className="text-gray-700">Extensível com tipos de dados personalizados e funções</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>


            {/* MinIO */}
            <Card className="group relative overflow-hidden border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-amber-50">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/5 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="h-2 bg-gradient-to-r from-yellow-500 to-amber-500 w-full"></div>
              
              <div className="absolute top-4 right-4">
                <div className="p-2 rounded-full bg-amber-100 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                  <BoxIcon className="h-6 w-6" />
                </div>
              </div>
              
              <CardHeader>
                <Badge className="w-fit bg-amber-100 text-amber-800 group-hover:bg-amber-200 transition-all">Armazenamento</Badge>
                <CardTitle className="text-2xl mt-4 text-amber-900">MinIO</CardTitle>
                <CardDescription className="text-amber-700">
                  Servidor de armazenamento de objetos de alta performance
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b-0">
                    <AccordionTrigger className="py-2 font-medium text-amber-800 hover:text-amber-600 hover:no-underline">
                      Recursos principais
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 mt-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-green-600" />
                          </div>
                          <span className="text-gray-700">Compatível com API Amazon S3 para fácil integração</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-green-600" />
                          </div>
                          <span className="text-gray-700">Armazenamento escalável e distribuído para grandes volumes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-green-600" />
                          </div>
                          <span className="text-gray-700">Proteção de dados com criptografia e políticas de acesso</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Portainer */}
            <Card className="group relative overflow-hidden border border-cyan-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-cyan-50 col-span-1 md:col-span-2 lg:col-span-3">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500 w-full"></div>
              
              <div className="absolute top-4 right-4">
                <div className="p-2 rounded-full bg-cyan-100 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
                  <Box className="h-6 w-6" />
                </div>
              </div>
              
              <CardHeader>
                <Badge className="w-fit bg-cyan-100 text-cyan-800 group-hover:bg-cyan-200 transition-all">Gerenciamento</Badge>
                <CardTitle className="text-2xl mt-4 text-cyan-900">Portainer</CardTitle>
                <CardDescription className="text-cyan-700">
                  Interface gráfica para gerenciamento de contêineres Docker
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-medium text-cyan-800">Gerenciamento Visual</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-3.5 w-3.5 text-green-600" />
                        </div>
                        <span className="text-gray-700">Interface amigável para gerenciar contêineres Docker sem linha de comando</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-cyan-800">Monitoramento</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-3.5 w-3.5 text-green-600" />
                        </div>
                        <span className="text-gray-700">Monitoramento em tempo real de recursos, logs e eventos do sistema</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-cyan-800">Segurança</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-3.5 w-3.5 text-green-600" />
                        </div>
                        <span className="text-gray-700">Controle de acesso baseado em funções para equipes maiores</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de Preço Destaque - Modificada */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-arsenal-dark">Plano Único Exclusivo</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-white border-2 border-purple-300 shadow-2xl hover:shadow-3xl transition-all duration-300">
              {/* Faixa superior estilizada */}
              <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 py-6 px-8 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <Badge className="bg-white text-purple-700 mb-2">Pagamento Único</Badge>
                    <h3 className="text-2xl md:text-3xl font-bold">Pacote Completo N8N</h3>
                    <p className="text-purple-100 mt-1">Para instalação em sua VPS</p>
                  </div>
                  <WalletCards className="h-12 w-12 text-purple-200" />
                </div>
              </div>
              
              {/* Preço destacado */}
              <div className="flex justify-center -mt-5">
                <div className="bg-white rounded-full px-8 py-2 shadow-lg border-2 border-purple-200">
                  <div className="flex items-baseline">
                    <span className="text-lg font-medium text-purple-800">R$</span>
                    <span className="text-5xl font-bold text-purple-700 tracking-tight">119</span>
                    <span className="text-2xl font-bold text-purple-700">,90</span>
                  </div>
                </div>
              </div>
              
              {/* Conteúdo do cartão */}
              <div className="p-8 pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-purple-800 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-700">
                        <Check className="h-4 w-4" />
                      </span>
                      Todas as Ferramentas Incluídas
                    </h4>
                    <ul className="space-y-2 pl-8">
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        N8N para automações
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        Evolution API para WhatsApp
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        Redis para cache rápido
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        PostgreSQL para dados
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-purple-800 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-700">
                        <Check className="h-4 w-4" />
                      </span>
                      Vantagens Exclusivas
                    </h4>
                    <ul className="space-y-2 pl-8">
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        Pagamento único (sem mensalidades)
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        Instalação remota na sua VPS
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        Suporte técnico na instalação
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        Documentação completa
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white py-6 flex-grow text-lg" asChild>
                    <a href="https://wa.me/5512981156856?text=Olá,%20gostaria%20de%20adquirir%20o%20Pacote%20N8N%20por%20R$119,90." target="_blank" rel="noopener noreferrer">
                      Adquirir Agora
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VPS Recomendadas - Versão com tabela aprimorada */}
      <section className="py-16 bg-gradient-to-br from-white to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-arsenal-dark">VPS Recomendadas</h2>
          <p className="text-center text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
            Para um desempenho ideal do Pacote N8N, recomendamos as seguintes configurações de VPS:
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-indigo-100 transform transition-all duration-300 hover:shadow-2xl">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Comparativo de Planos</h3>
              </div>
              
              <div className="overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-indigo-50/70">
                      <TableHead className="font-semibold text-indigo-800">Especificações</TableHead>
                      <TableHead className="font-semibold text-indigo-800">
                        <div className="flex flex-col">
                          <span className="text-base">VPS 4GB</span>
                          <span className="text-xs text-indigo-600">Iniciante</span>
                        </div>
                      </TableHead>
                      <TableHead className="font-semibold text-purple-800">
                        <div className="flex flex-col">
                          <span className="text-base">VPS 6GB</span>
                          <Badge className="w-fit mt-1 bg-purple-100 text-purple-700 border-purple-200">Recomendado</Badge>
                        </div>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="hover:bg-indigo-50/50 transition-colors">
                      <TableCell className="font-medium flex items-center gap-2">
                        <MemoryStick className="h-5 w-5 text-indigo-500" />
                        Memória RAM
                      </TableCell>
                      <TableCell>4 GB</TableCell>
                      <TableCell className="font-medium text-purple-800">6 GB</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-indigo-50/50 transition-colors">
                      <TableCell className="font-medium flex items-center gap-2">
                        <Cpu className="h-5 w-5 text-indigo-500" />
                        Processadores
                      </TableCell>
                      <TableCell>2 vCPU</TableCell>
                      <TableCell className="font-medium text-purple-800">3 vCPU</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-indigo-50/50 transition-colors">
                      <TableCell className="font-medium flex items-center gap-2">
                        <HardDrive className="h-5 w-5 text-indigo-500" />
                        Armazenamento
                      </TableCell>
                      <TableCell>30 GB NVMe</TableCell>
                      <TableCell className="font-medium text-purple-800">80 GB NVMe</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-indigo-50/50 transition-colors">
                      <TableCell className="font-medium flex items-center gap-2">
                        <Server className="h-5 w-5 text-indigo-500" />
                        IP Dedicado
                      </TableCell>
                      <TableCell>1 IPV4</TableCell>
                      <TableCell className="font-medium text-purple-800">1 IPV4</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-indigo-50/50 transition-colors">
                      <TableCell className="font-medium flex items-center gap-2">
                        <BoxIcon className="h-5 w-5 text-indigo-500" />
                        Localização
                      </TableCell>
                      <TableCell>Brasil</TableCell>
                      <TableCell className="font-medium text-purple-800">Brasil</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-indigo-50/50 transition-colors">
                      <TableCell className="font-medium flex items-center gap-2">
                        <Cloud className="h-5 w-5 text-indigo-500" />
                        Fluxos de trabalho
                      </TableCell>
                      <TableCell>Até 5 simultâneos</TableCell>
                      <TableCell className="font-medium text-purple-800">Até 15 simultâneos</TableCell>
                    </TableRow>
                    <TableRow className="border-t-2 border-indigo-100">
                      <TableCell className="font-semibold text-indigo-800">Preço mensal</TableCell>
                      <TableCell>
                        <div className="flex items-baseline">
                          <span className="text-sm font-medium text-gray-500">R$</span>
                          <span className="text-2xl font-bold text-indigo-600">89</span>
                          <span className="text-lg font-semibold text-indigo-600">,90</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-baseline">
                          <span className="text-sm font-medium text-gray-500">R$</span>
                          <span className="text-2xl font-bold text-purple-600">149</span>
                          <span className="text-lg font-semibold text-purple-600">,90</span>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell className="p-4">
                        <Button className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white" asChild>
                          <a href="https://wa.me/5512981156856?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20a%20VPS%204GB%20por%20R$89,90/mês" target="_blank" rel="noopener noreferrer">
                            Solicitar Orçamento
                          </a>
                        </Button>
                      </TableCell>
                      <TableCell className="p-4">
                        <Button className="w-full py-5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg shadow-purple-200 transition-all hover:shadow-purple-300" asChild>
                          <a href="https://wa.me/5512981156856?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20a%20VPS%206GB%20por%20R$169,90/mês%20(Recomendada)" target="_blank" rel="noopener noreferrer">
                            Solicitar Orçamento
                          </a>
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-gray-700 mb-4">
                Não encontrou o plano ideal para o seu projeto? Entre em contato para soluções personalizadas.
              </p>
              <Button variant="outline" className="border-arsenal-DEFAULT text-arsenal-dark hover:bg-arsenal-light" asChild>
                <a href="https://wa.me/5512981156856?text=Olá,%20gostaria%20de%20solicitar%20uma%20configuração%20personalizada%20de%20VPS%20para%20o%20pacote%20N8N." target="_blank" rel="noopener noreferrer">
                  Solicitar configuração personalizada
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-arsenal-dark to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para automatizar seus processos?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Combine o poder do n8n, Evolution API e outras ferramentas para criar fluxos de trabalho eficientes e escaláveis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-arsenal-dark hover:bg-gray-200" asChild>
              <a href="https://wa.me/5512981156856?text=Olá,%20gostaria%20de%20solicitar%20uma%20demonstração%20do%20pacote%20N8N." target="_blank" rel="noopener noreferrer">
                Solicitar Demonstração
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="https://wa.me/5512981156856?text=Olá,%20gostaria%20de%20obter%20a%20documentação%20do%20pacote%20N8N." target="_blank" rel="noopener noreferrer">
                Ver Documentação
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <FloatingCta />
    </div>;
};
export default PacoteN8N;