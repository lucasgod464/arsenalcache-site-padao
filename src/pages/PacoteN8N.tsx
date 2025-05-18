
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
            <Button 
              size="lg" 
              className="bg-arsenal-DEFAULT hover:bg-arsenal-dark transition-colors"
              asChild
            >
              <a 
                href="https://wa.me/5512981156856?text=Olá,%20gostaria%20de%20solicitar%20uma%20demonstração%20do%20pacote%20N8N." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Solicitar Demonstração
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Componentes do Pacote */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-arsenal-dark">Componentes do Pacote</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* N8N */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 w-full"></div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge className="bg-blue-100 text-blue-800">Automação</Badge>
                  <Server className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl mt-3">n8n</CardTitle>
                <CardDescription>
                  Plataforma de automação de fluxo de trabalho poderosa e extensível
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Automação de fluxos de trabalho com interface visual</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Mais de 200 integrações prontas para uso</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Execução com base em eventos ou agendamentos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Evolution API */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-green-500 to-teal-500 w-full"></div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge className="bg-green-100 text-green-800">Comunicação</Badge>
                  <Cloud className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl mt-3">Evolution API</CardTitle>
                <CardDescription>
                  API robusta para integração com WhatsApp e outros canais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Integração com WhatsApp sem complicações</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Suporte a múltiplas conexões simultâneas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Envio e recebimento de mensagens programaticamente</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Redis */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-red-500 to-orange-500 w-full"></div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge className="bg-red-100 text-red-800">Cache</Badge>
                  <Database className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl mt-3">Redis</CardTitle>
                <CardDescription>
                  Armazenamento de estrutura de dados em memória de alto desempenho
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Cache em memória ultrarrápido</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Suporte a estruturas de dados complexas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Persistência opcional para dados críticos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* PostgreSQL */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600 w-full"></div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge className="bg-blue-100 text-blue-800">Banco de Dados</Badge>
                  <Database className="h-6 w-6 text-blue-700" />
                </div>
                <CardTitle className="text-xl mt-3">PostgreSQL</CardTitle>
                <CardDescription>
                  Sistema de banco de dados relacional robusto e confiável
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Banco de dados SQL completo e avançado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Suporte a transações ACID</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Extensível com tipos de dados personalizados</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Supabase */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-emerald-500 to-green-500 w-full"></div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge className="bg-emerald-100 text-emerald-800">Backend</Badge>
                  <Cpu className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl mt-3">Supabase</CardTitle>
                <CardDescription>
                  Alternativa de código aberto ao Firebase com recursos avançados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Autenticação, banco de dados e armazenamento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>APIs RESTful e tempo real</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Edge Functions para lógica de servidor sem servidor</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* MinIO */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-yellow-500 to-amber-500 w-full"></div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge className="bg-yellow-100 text-yellow-800">Armazenamento</Badge>
                  <BoxIcon className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle className="text-xl mt-3">MinIO</CardTitle>
                <CardDescription>
                  Servidor de armazenamento de objetos de alta performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Compatível com API Amazon S3</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Armazenamento escalável e distribuído</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Proteção de dados com criptografia</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Portainer */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 col-span-1 md:col-span-2 lg:col-span-1">
              <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500 w-full"></div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge className="bg-cyan-100 text-cyan-800">Gerenciamento</Badge>
                  <Box className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle className="text-xl mt-3">Portainer</CardTitle>
                <CardDescription>
                  Interface gráfica para gerenciamento de contêineres Docker
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Gerenciamento visual de contêineres</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Monitoramento de recursos e logs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Controle de acesso baseado em funções</span>
                  </li>
                </ul>
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
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700 text-white py-6 flex-grow text-lg"
                    asChild
                  >
                    <a 
                      href="https://wa.me/5512981156856?text=Olá,%20gostaria%20de%20adquirir%20o%20Pacote%20N8N%20por%20R$119,90." 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
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
                          <span className="text-2xl font-bold text-purple-600">169</span>
                          <span className="text-lg font-semibold text-purple-600">,90</span>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell className="p-4">
                        <Button 
                          className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white"
                          asChild
                        >
                          <a 
                            href="https://wa.me/5512981156856?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20a%20VPS%204GB%20por%20R$89,90/mês" 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            Solicitar Orçamento
                          </a>
                        </Button>
                      </TableCell>
                      <TableCell className="p-4">
                        <Button 
                          className="w-full py-5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg shadow-purple-200 transition-all hover:shadow-purple-300"
                          asChild
                        >
                          <a 
                            href="https://wa.me/5512981156856?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20a%20VPS%206GB%20por%20R$169,90/mês%20(Recomendada)" 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
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
              <Button 
                variant="outline" 
                className="border-arsenal-DEFAULT text-arsenal-dark hover:bg-arsenal-light"
                asChild
              >
                <a 
                  href="https://wa.me/5512981156856?text=Olá,%20gostaria%20de%20solicitar%20uma%20configuração%20personalizada%20de%20VPS%20para%20o%20pacote%20N8N." 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
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
            <Button 
              size="lg" 
              className="bg-white text-arsenal-dark hover:bg-gray-200"
              asChild
            >
              <a 
                href="https://wa.me/5512981156856?text=Olá,%20gostaria%20de%20solicitar%20uma%20demonstração%20do%20pacote%20N8N." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Solicitar Demonstração
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <a 
                href="https://wa.me/5512981156856?text=Olá,%20gostaria%20de%20obter%20a%20documentação%20do%20pacote%20N8N." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ver Documentação
              </a>
            </Button>
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
