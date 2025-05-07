import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CircuitBoard, DatabaseZap, MicrochipIcon, Network, Plug, ServerCog, Check, X, MessagesSquare } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingCta from "@/components/FloatingCta";

const IAConecta = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-3 py-1 text-sm">
                Tecnologia Avançada
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                IA Conecta <span className="text-purple-600">Solução de IA</span> Sem Limites
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Acesso completo à tecnologia de IA avançada por um valor fixo mensal, sem surpresas na sua fatura.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="purple" className="text-white">
                  Começar agora
                </Button>
                <Button size="lg" variant="purpleOutline">
                  Agendar demonstração
                </Button>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3" 
                alt="IA Conecta" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* IA Ilimitada Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-3 py-1 text-sm mb-4">
              Inteligência Artificial Ilimitada
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Solução - IA Conecta Ilimitado
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* IA Conecta Card */}
            <Card className="border-2 border-purple-600 overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 bg-purple-600 text-white text-center py-1 text-xs font-medium">
                NOSSA SOLUÇÃO
              </div>
              <CardHeader className="bg-gray-50 pb-6 pt-8">
                <CardTitle className="text-xl">IA Conecta Ilimitado</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">R$1.000,00</span>
                  <span className="text-gray-500">/mês</span>
                </div>
                <CardDescription className="mt-2 text-sm">
                  Preço fixo sem surpresas
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="font-semibold mb-4">Vantagens exclusivas:</p>
                <ul className="space-y-3">
                  {[
                    "Acesso ilimitado à API de IA avançada",
                    "Integração nativa com Whaticket",
                    "Sem limite de tokens ou mensagens",
                    "Treinamento personalizado com seus dados",
                    "Múltiplas integrações simultâneas",
                    "Suporte técnico especializado",
                    "Escalabilidade garantida",
                    "Sem custo adicional por volume"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-1 bg-green-100 p-1 rounded-full">
                        <Check className="h-3 w-3 text-green-500" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="font-semibold mb-2">Economia real e previsibilidade</p>
                  <p className="text-sm text-gray-700">
                    Com nossa solução de valor fixo, você economiza até 80% em comparação com APIs de IA tradicionais, além de ter previsibilidade total de custos independente do volume de uso.
                  </p>
                </div>
                <Button className="w-full mt-6" variant="purple">
                  Contratar IA Ilimitada
                </Button>
              </CardContent>
            </Card>

            {/* Concorrente Card */}
            <Card className="border border-gray-200 overflow-hidden">
              <CardHeader className="bg-gray-50 pb-6">
                <CardTitle className="text-xl">Concorrente - OpenAI GPT-4</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">~R$5.000,00</span>
                  <span className="text-gray-500">/mês*</span>
                </div>
                <CardDescription className="mt-2 text-sm">
                  *Custo estimado para uso empresarial médio
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="font-semibold mb-4">Limitações:</p>
                <ul className="space-y-3">
                  {[
                    "Cobrança por token (aproximadamente R$0,03 por 1K tokens)",
                    "Limite de uso baseado em crédito",
                    "Integração manual necessária",
                    "Sem personalização com seus dados",
                    "Limites de requisições por minuto",
                    "Suporte genérico",
                    "Custos crescentes com o uso",
                    "Preço variável baseado em consumo"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-1 bg-red-100 p-1 rounded-full">
                        <X className="h-3 w-3 text-red-500" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <p className="font-semibold mb-2">Custos imprevisíveis</p>
                  <p className="text-sm text-gray-700">
                    Com cobrança por token, os custos aumentam proporcionalmente ao uso, tornando difícil prever gastos mensais e podendo resultar em faturas surpreendentemente altas.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Section - UPDATED to match the image */}
          <div className="mt-16 px-4 py-12 bg-purple-50 rounded-3xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-purple-800 mb-4">
                Compare e economize com nossa solução de IA ilimitada
              </h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">
                Por apenas <span className="font-bold text-purple-600">R$1.000,00/mês</span>, tenha acesso ilimitado à tecnologia de IA avançada, 
                sem preocupações com contadores de tokens ou custos crescentes. Uma solução completa que se integra perfeitamente ao seu
                Whaticket, potencializando seu atendimento com inteligência artificial sem limites.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-center text-purple-700 mb-8">Simulação de economia</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl border border-red-200 shadow-md">
                  <div className="text-center">
                    <p className="font-semibold text-lg mb-1">Com GPT-4</p>
                    <p className="text-sm text-gray-500 mb-4">1.000.000 tokens/mês</p>
                    <div className="h-px w-full bg-gray-100 my-4"></div>
                    <p className="text-3xl font-bold text-red-500">R$5.000,00</p>
                    <p className="text-sm text-gray-500 mt-1">custo variável por uso</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-green-400 shadow-md">
                  <div className="text-center">
                    <p className="font-semibold text-lg mb-1">Com IA Conecta</p>
                    <p className="text-sm text-gray-500 mb-4">Tokens ilimitados</p>
                    <div className="h-px w-full bg-gray-100 my-4"></div>
                    <p className="text-3xl font-bold text-green-500">R$1.000,00</p>
                    <p className="text-sm text-gray-500 mt-1">preço fixo mensal</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8 p-4 bg-green-50 rounded-lg">
                <p className="text-xl font-bold text-green-600">Sua economia: R$4.000,00/mês</p>
              </div>
              
              <div className="mt-10 text-center">
                <Button size="lg" variant="purple" className="px-10">
                  <MessagesSquare className="mr-2" />
                  Falar com especialista em IA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos da IA */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1 text-sm mb-4">
              Recursos Avançados
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Potencialize seus atendimentos com IA
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Nossa plataforma IA Conecta oferece recursos avançados de inteligência artificial que transformam
              completamente a experiência de atendimento ao cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-gray-200 hover:border-arsenal-light transition-all hover:shadow-md">
              <CardHeader>
                <MicrochipIcon className="h-10 w-10 text-arsenal-DEFAULT mb-2" />
                <CardTitle>Atendimento Automático</CardTitle>
                <CardDescription>
                  Automatize até 80% dos seus atendimentos com respostas inteligentes e personalizadas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span>Respostas rápidas e precisas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span>Disponibilidade 24/7</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span>Integração com múltiplos canais</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-arsenal-light transition-all hover:shadow-md">
              <CardHeader>
                <Network className="h-10 w-10 text-arsenal-DEFAULT mb-2" />
                <CardTitle>Análise de Sentimentos</CardTitle>
                <CardDescription>
                  Entenda as emoções dos seus clientes e personalize o atendimento em tempo real
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span>Detecção de frustração do cliente</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span>Encaminhamento inteligente</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span>Relatórios de satisfação</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-arsenal-light transition-all hover:shadow-md">
              <CardHeader>
                <DatabaseZap className="h-10 w-10 text-arsenal-DEFAULT mb-2" />
                <CardTitle>Conhecimento Integrado</CardTitle>
                <CardDescription>
                  Base de conhecimento que aprende e evolui com seus atendimentos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span>Aprendizado contínuo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span>Personalização por segmento</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span>Integração com sistemas existentes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-arsenal-light transition-all hover:shadow-md">
              <CardHeader>
                <Network className="h-10 w-10 text-arsenal-DEFAULT mb-2" />
                <CardTitle>Análise Preditiva</CardTitle>
                <CardDescription>
                  Antecipe as necessidades dos clientes com base em comportamentos anteriores
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span>Sugestões de produtos relacionados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span>Previsão de problemas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span>Otimização de recursos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-arsenal-light transition-all hover:shadow-md">
              <CardHeader>
                <ServerCog className="h-10 w-10 text-arsenal-DEFAULT mb-2" />
                <CardTitle>Personalização Avançada</CardTitle>
                <CardDescription>
                  Adapte a IA ao tom e linguagem específicos do seu negócio
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span>Identidade de marca consistente</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span>Adaptação à linguagem do setor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span>Configuração de idiomas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-arsenal-light transition-all hover:shadow-md">
              <CardHeader>
                <Plug className="h-10 w-10 text-arsenal-DEFAULT mb-2" />
                <CardTitle>Integrações Flexíveis</CardTitle>
                <CardDescription>
                  Conecte-se facilmente com suas plataformas e sistemas existentes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span>Compatível com ERPs populares</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span>APIs abertas e documentadas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span>Configuração sem código</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1 text-sm mb-4">
              Processo Simplificado
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como funciona o IA Conecta
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Uma jornada simplificada para transformar seu atendimento com inteligência artificial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-arsenal-light/20 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-arsenal-DEFAULT">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Integração</h3>
              <p className="text-gray-700">
                Conectamos a solução IA Conecta ao seu sistema atual de atendimento 
                sem interromper suas operações. Processo rápido e sem complicações.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-arsenal-light/20 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-arsenal-DEFAULT">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Treinamento</h3>
              <p className="text-gray-700">
                Nossa IA aprende com seus dados históricos e base de conhecimento existente 
                para personalizar o atendimento de acordo com o perfil do seu negócio.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-arsenal-light/20 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-arsenal-DEFAULT">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Resultados</h3>
              <p className="text-gray-700">
                Reduza custos, aumente a satisfação dos clientes e libere sua equipe 
                para focar em tarefas que realmente precisam do toque humano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planos e Preços - UPDATED */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-3 py-1 text-sm mb-4">
              Plano Único
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solução de IA ilimitada com preço fixo
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Acesso ilimitado à inteligência artificial avançada por um valor mensal fixo
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="border-2 border-purple-600 overflow-hidden relative max-w-lg w-full">
              <div className="absolute top-0 left-0 right-0 bg-purple-600 text-white text-center py-1 text-xs font-medium">
                PLANO COMPLETO
              </div>
              <CardHeader className="bg-gray-50 pb-8 pt-8">
                <CardTitle className="text-xl">IA Conecta Ilimitado</CardTitle>
                <CardDescription className="mt-2">Integração perfeita com Whaticket</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">R$1.000,00</span>
                  <span className="text-gray-500">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="pt-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-green-100 p-1 rounded-full">
                      <Check className="h-3 w-3 text-green-500" />
                    </div>
                    <span>Uso ilimitado (sem cobrança por token)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-green-100 p-1 rounded-full">
                      <Check className="h-3 w-3 text-green-500" />
                    </div>
                    <span>Integração nativa com Whaticket</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-green-100 p-1 rounded-full">
                      <Check className="h-3 w-3 text-green-500" />
                    </div>
                    <span>Treinamento com sua base de dados</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-green-100 p-1 rounded-full">
                      <Check className="h-3 w-3 text-green-500" />
                    </div>
                    <span>Suporte técnico especializado</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-green-100 p-1 rounded-full">
                      <Check className="h-3 w-3 text-green-500" />
                    </div>
                    <span>Atualizações e melhorias contínuas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-green-100 p-1 rounded-full">
                      <Check className="h-3 w-3 text-green-500" />
                    </div>
                    <span>Consultoria de implementação</span>
                  </li>
                </ul>
                <Button variant="purple" className="w-full mt-8">
                  Contratar agora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-purple-600">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transforme seu atendimento hoje mesmo
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Junte-se a centenas de empresas que já estão usando a IA Conecta para revolucionar 
              seus atendimentos e impulsionar seus resultados
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Começar gratuitamente
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Solicitar demonstração
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

export default IAConecta;
