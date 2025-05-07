
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, MessagesSquare, ArrowRight } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingCta from "@/components/FloatingCta";

const IAConecta = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Melhorado com gradiente e animação */}
      <section className="pt-32 pb-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-purple-100 via-white to-purple-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-3 py-1 text-sm">
                Tecnologia Avançada
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                IA Conecta <span className="text-purple-600">Solução de IA</span> Sem Limites
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Acesso completo à tecnologia de IA avançada da Ollama por um valor fixo mensal, sem surpresas na sua fatura.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" variant="purple" className="text-white shadow-lg">
                  Começar agora <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
                <Button size="lg" variant="purpleOutline">
                  Agendar demonstração
                </Button>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3" 
                alt="IA Conecta" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* IA Ilimitada Section - UI refinada */}
      <section className="py-24 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-3 py-1 text-sm mb-4">
              Inteligência Artificial Ilimitada
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Solução - IA Conecta Ilimitado
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* IA Conecta Card - Melhorado com gradiente e sombras */}
            <Card className="border-2 border-purple-600 overflow-hidden relative shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-purple-700 text-white text-center py-1.5 text-sm font-medium">
                NOSSA SOLUÇÃO
              </div>
              <CardHeader className="bg-gray-50 pb-6 pt-10">
                <CardTitle className="text-2xl text-purple-700">IA Conecta Ilimitado</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">R$1.000,00</span>
                  <span className="text-gray-500">/mês</span>
                </div>
                <CardDescription className="mt-2 text-sm">
                  Preço fixo sem surpresas
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 pb-8">
                <p className="font-semibold mb-4 text-lg">Vantagens exclusivas:</p>
                <ul className="space-y-4">
                  {[
                    "Acesso ilimitado à API Ollama avançada",
                    "Sem limite de tokens ou mensagens",
                    "Treinamento personalizado com seus dados",
                    "Múltiplas integrações simultâneas",
                    "Suporte técnico especializado",
                    "Escalabilidade garantida",
                    "Sem custo adicional por volume"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-1 bg-green-100 p-1.5 rounded-full">
                        <Check className="h-4 w-4 text-green-500" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-5 bg-green-50 rounded-lg border border-green-100 shadow-inner">
                  <p className="font-semibold mb-2 text-green-700">Economia real e previsibilidade</p>
                  <p className="text-gray-700">
                    Com nossa solução de valor fixo, você economiza até 80% em comparação com APIs de IA tradicionais, além de ter previsibilidade total de custos independente do volume de uso.
                  </p>
                </div>
                <Button className="w-full mt-8 shadow-md py-6" variant="purple">
                  Contratar IA Ilimitada
                </Button>
              </CardContent>
            </Card>

            {/* Concorrente Card - Melhorado com design e consistência */}
            <Card className="border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gray-50 pb-6 pt-8">
                <CardTitle className="text-2xl text-gray-800">Concorrente - OpenAI GPT-4</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">~R$5.000,00</span>
                  <span className="text-gray-500">/mês*</span>
                </div>
                <CardDescription className="mt-2 text-sm">
                  *Custo estimado para uso empresarial médio
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 pb-8">
                <p className="font-semibold mb-4 text-lg">Limitações:</p>
                <ul className="space-y-4">
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
                      <div className="mr-3 mt-1 bg-red-100 p-1.5 rounded-full">
                        <X className="h-4 w-4 text-red-500" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-5 bg-red-50 rounded-lg border border-red-100 shadow-inner">
                  <p className="font-semibold mb-2 text-red-700">Custos imprevisíveis</p>
                  <p className="text-gray-700">
                    Com cobrança por token, os custos aumentam proporcionalmente ao uso, tornando difícil prever gastos mensais e podendo resultar em faturas surpreendentemente altas.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Section - Visual melhorado */}
          <div className="mt-20 px-6 py-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl shadow-lg">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-purple-800 mb-6">
                Compare e economize com nossa solução de IA ilimitada
              </h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-10">
                Por apenas <span className="font-bold text-purple-600">R$1.000,00/mês</span>, tenha acesso ilimitado à tecnologia de IA avançada da Ollama, 
                sem preocupações com contadores de tokens ou custos crescentes. Uma solução completa que potencializa seu
                atendimento com inteligência artificial sem limites.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-10 shadow-xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-center text-purple-700 mb-10">Simulação de economia</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl border border-red-200 shadow-md">
                  <div className="text-center">
                    <p className="font-semibold text-lg mb-1">Com GPT-4</p>
                    <p className="text-sm text-gray-500 mb-4">1.000.000 tokens/mês</p>
                    <div className="h-px w-full bg-gray-100 my-4"></div>
                    <p className="text-4xl font-bold text-red-500">R$5.000,00</p>
                    <p className="text-sm text-gray-500 mt-2">custo variável por uso</p>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-xl border-2 border-green-400 shadow-md transform scale-105">
                  <div className="text-center">
                    <p className="font-semibold text-lg mb-1">Com IA Conecta</p>
                    <p className="text-sm text-gray-500 mb-4">Tokens ilimitados</p>
                    <div className="h-px w-full bg-gray-100 my-4"></div>
                    <p className="text-4xl font-bold text-green-500">R$1.000,00</p>
                    <p className="text-sm text-gray-500 mt-2">preço fixo mensal</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-10 p-6 bg-green-50 rounded-lg border border-green-100">
                <p className="text-2xl font-bold text-green-600">Sua economia: R$4.000,00/mês</p>
              </div>
              
              <div className="mt-10 text-center">
                <Button size="lg" variant="purple" className="px-10 py-6 shadow-lg">
                  <MessagesSquare className="mr-2" />
                  Falar com especialista em IA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planos e Preços - Design aperfeiçoado */}
      <section className="py-24 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-3 py-1 text-sm mb-4">
              Plano Único
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Solução de IA ilimitada com preço fixo
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Acesso ilimitado à inteligência artificial avançada da Ollama por um valor mensal fixo
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="border-2 border-purple-600 overflow-hidden relative max-w-lg w-full shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-purple-700 text-white text-center py-1.5 text-sm font-medium">
                PLANO COMPLETO
              </div>
              <CardHeader className="bg-gray-50 pb-8 pt-10">
                <CardTitle className="text-2xl text-purple-700">IA Conecta Ilimitado</CardTitle>
                <CardDescription className="mt-2">Acesso à API avançada da Ollama</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">R$1.000,00</span>
                  <span className="text-gray-500">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="pt-8 pb-10">
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-green-100 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <span className="text-gray-700">Uso ilimitado (sem cobrança por token)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-green-100 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <span className="text-gray-700">API mais avançada da Ollama</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-green-100 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <span className="text-gray-700">Treinamento com sua base de dados</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-green-100 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <span className="text-gray-700">Suporte técnico especializado</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-green-100 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <span className="text-gray-700">Atualizações e melhorias contínuas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-green-100 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <span className="text-gray-700">Consultoria de implementação</span>
                  </li>
                </ul>
                <Button variant="purple" className="w-full mt-10 py-6 shadow-lg font-medium text-base">
                  Contratar agora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA - Melhorado com gradiente e sombra */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-purple-700 to-purple-500 shadow-inner">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-md">
              Transforme seu atendimento hoje mesmo
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Junte-se a centenas de empresas que já estão usando a IA Conecta para revolucionar 
              seus atendimentos e impulsionar seus resultados
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg py-6 px-8 text-lg">
                Começar gratuitamente
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 shadow-lg py-6 px-8 text-lg">
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
