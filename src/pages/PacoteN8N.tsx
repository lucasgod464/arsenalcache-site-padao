
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingCta from "@/components/FloatingCta";
import { Server, Database, Box, Cloud, Box as BoxIcon, Cpu } from "lucide-react";
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
            <Button size="lg" className="bg-arsenal-DEFAULT hover:bg-arsenal-dark transition-colors">
              Solicitar Demonstração
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

      {/* Comparação de Planos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-arsenal-dark">Planos Disponíveis</h2>
          
          <div className="overflow-x-auto">
            <Table className="w-full border-collapse">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/4">Recurso</TableHead>
                  <TableHead className="w-1/4 text-center">Básico</TableHead>
                  <TableHead className="w-1/4 text-center">Profissional</TableHead>
                  <TableHead className="w-1/4 text-center">Empresarial</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">N8N</TableCell>
                  <TableCell className="text-center">✓</TableCell>
                  <TableCell className="text-center">✓</TableCell>
                  <TableCell className="text-center">✓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Evolution API</TableCell>
                  <TableCell className="text-center">✓</TableCell>
                  <TableCell className="text-center">✓</TableCell>
                  <TableCell className="text-center">✓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Redis</TableCell>
                  <TableCell className="text-center">✓</TableCell>
                  <TableCell className="text-center">✓</TableCell>
                  <TableCell className="text-center">✓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">PostgreSQL</TableCell>
                  <TableCell className="text-center">✓</TableCell>
                  <TableCell className="text-center">✓</TableCell>
                  <TableCell className="text-center">✓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Supabase</TableCell>
                  <TableCell className="text-center">✓</TableCell>
                  <TableCell className="text-center">✓</TableCell>
                  <TableCell className="text-center">✓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">MinIO</TableCell>
                  <TableCell className="text-center">✓</TableCell>
                  <TableCell className="text-center">✓</TableCell>
                  <TableCell className="text-center">✓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Portainer</TableCell>
                  <TableCell className="text-center">✓</TableCell>
                  <TableCell className="text-center">✓</TableCell>
                  <TableCell className="text-center">✓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Armazenamento</TableCell>
                  <TableCell className="text-center">50GB</TableCell>
                  <TableCell className="text-center">250GB</TableCell>
                  <TableCell className="text-center">1TB</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Conexões simultâneas</TableCell>
                  <TableCell className="text-center">5</TableCell>
                  <TableCell className="text-center">20</TableCell>
                  <TableCell className="text-center">Ilimitadas</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Suporte técnico</TableCell>
                  <TableCell className="text-center">Email</TableCell>
                  <TableCell className="text-center">Email e Chat</TableCell>
                  <TableCell className="text-center">24/7 Prioritário</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Preço mensal</TableCell>
                  <TableCell className="text-center font-bold">R$ 119,90</TableCell>
                  <TableCell className="text-center font-bold">R$ 599</TableCell>
                  <TableCell className="text-center font-bold">Consulte</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell className="text-center py-4">
                    <Button className="bg-arsenal-DEFAULT hover:bg-arsenal-dark w-full">Contratar</Button>
                  </TableCell>
                  <TableCell className="text-center py-4">
                    <Button className="bg-arsenal-DEFAULT hover:bg-arsenal-dark w-full">Contratar</Button>
                  </TableCell>
                  <TableCell className="text-center py-4">
                    <Button variant="outline" className="w-full">Fale Conosco</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
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
            <Button size="lg" className="bg-white text-arsenal-dark hover:bg-gray-200">
              Solicitar Demonstração
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Ver Documentação
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
