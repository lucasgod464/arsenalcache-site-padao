
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  X, 
  MessagesSquare, 
  ArrowRight, 
  Brain, 
  Code, 
  Database, 
  Server, 
  Zap,
  Workflow,
  Grid3x3,
  Bot,
  Sparkles,
  BookOpen
} from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingCta from "@/components/FloatingCta";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const IAConecta = () => {
  const [showAllModels, setShowAllModels] = useState(false);
  const [openTabId, setOpenTabId] = useState<string | null>(null);

  const toggleTab = (id: string) => {
    setOpenTabId(openTabId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Redesenhado para maior impacto */}
      <section className="pt-32 pb-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-purple-200 via-purple-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-3 py-1 text-sm">
                Tecnologia Avançada
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                IA <span className="bg-gradient-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">Conecta</span> sem limites
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Acesso completo à tecnologia de IA avançada da Ollama por um valor fixo mensal, 
                com suporte para os modelos mais avançados como Llama 4, Mistral e mais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-lg py-6">
                  Agendar demonstração <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-purple-400 text-purple-700 hover:bg-purple-50 py-6">
                  Conhecer planos
                </Button>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3" 
                alt="IA Conecta" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção "Inteligência Artificial Ilimitada" - Movida da página Index */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-3 py-1 text-sm mb-4">
              O Futuro da IA
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Inteligência Artificial <span className="text-purple-600">Ilimitada</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Tenha acesso aos modelos mais avançados de IA, reunidos em uma única plataforma, 
              por um valor fixo mensal sem surpresas na fatura
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-700 w-full"></div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 text-purple-500 mr-2" />
                  Infraestrutura Gerenciada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Esqueça os custos e a complexidade de configurar e manter servidores GPU. 
                  Nossa plataforma cuida de tudo para você focar no que importa.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-700 w-full"></div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="h-5 w-5 text-blue-500 mr-2" />
                  API Unificada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Uma única API para acessar dezenas de modelos de IA diferentes. 
                  Implemente uma vez e experimente com diferentes modelos sem reescrever código.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-2 bg-gradient-to-r from-green-500 to-green-700 w-full"></div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Server className="h-5 w-5 text-green-500 mr-2" />
                  Previsibilidade de Custos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Chega de surpresas na fatura no fim do mês. Com nosso modelo de assinatura, 
                  você sabe exatamente quanto vai gastar, independente do volume de uso.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modelos disponíveis - Nova seção */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-3 py-1 text-sm mb-4">
              Tecnologia de Ponta
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modelos de IA <span className="text-purple-600">Avançados</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Nossa plataforma oferece acesso ilimitado aos modelos mais avançados do mercado, 
              com capacidade de processar texto, imagens e código
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Llama 4 Card (substituindo Gemma 3) */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-700 w-full"></div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <Badge className="bg-blue-100 text-blue-700">Meta</Badge>
                  <Brain className="text-blue-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold">Llama 4</CardTitle>
                <CardDescription>
                  O mais avançado modelo de IA da Meta
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">8B a 405B parâmetros (versões variadas)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Suporte multimodal completo</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">128K tokens de contexto</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Performance de nível empresarial</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Deepseek Card */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-indigo-500 to-indigo-700 w-full"></div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <Badge className="bg-indigo-100 text-indigo-700">Versátil</Badge>
                  <BookOpen className="text-indigo-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold">DeepSeek-V2</CardTitle>
                <CardDescription>
                  Modelo avançado para pesquisa e raciocínio
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">236B parâmetros (MoE)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Até 128K tokens de contexto</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Especialista em pesquisa científica</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Excelente em programação e matemática</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Phi-4 Card */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-green-500 to-green-700 w-full"></div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <Badge className="bg-green-100 text-green-700">Microsoft</Badge>
                  <Sparkles className="text-green-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold">Phi-4</CardTitle>
                <CardDescription>
                  Nova geração de modelo eficiente da Microsoft
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">4B a 104B parâmetros</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Processamento de texto e imagem</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Até 128K tokens (versão avançada)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Eficiência sem precedentes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Button 
              className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white py-6 px-10 rounded-lg shadow-lg"
              onClick={() => setShowAllModels(true)}
            >
              Explorar todos os modelos <Grid3x3 className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Modal de Todos os Modelos - Reformulado com cards */}
      <Dialog open={showAllModels} onOpenChange={setShowAllModels}>
        <DialogContent className="max-w-6xl h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-purple-700">Todos os Modelos de IA Disponíveis</DialogTitle>
            <DialogDescription>
              Acesso completo a todos esses modelos de IA avançados com um único plano mensal
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="meta">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
              <TabsTrigger value="meta">Meta</TabsTrigger>
              <TabsTrigger value="microsoft">Microsoft</TabsTrigger>
              <TabsTrigger value="mistral">Mistral</TabsTrigger>
              <TabsTrigger value="qwen">Qwen</TabsTrigger>
              <TabsTrigger value="deepseek">DeepSeek</TabsTrigger>
            </TabsList>
            
            {/* Meta (Llama) Models Tab */}
            <TabsContent value="meta" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-700 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-blue-100 text-blue-700">Nova Geração</Badge>
                      <Brain className="text-blue-600 h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Llama 4</CardTitle>
                    <CardDescription>
                      O mais avançado modelo da Meta
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        Última geração do modelo Llama com capacidades multimodais ampliadas e desempenho 
                        competitivo com os melhores modelos disponíveis no mercado.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-blue-50 p-2 rounded">
                          <span className="text-xs font-medium text-blue-700">Variantes:</span> 
                          <ul className="text-xs list-disc pl-4 mt-1 space-y-1">
                            <li>Llama 4 8B</li>
                            <li>Llama 4 90B</li>
                            <li>Llama 4 405B (MoE)</li>
                          </ul>
                        </div>
                        <div className="bg-blue-50 p-2 rounded">
                          <span className="text-xs font-medium text-blue-700">Contexto:</span>
                          <p className="text-xs">Até 128K tokens</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-blue-100 text-blue-700">Estabelecido</Badge>
                      <Bot className="text-blue-600 h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Llama 3.3</CardTitle>
                    <CardDescription>
                      Evolução da consagrada família Llama
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        Versão aprimorada do Llama 3 com melhorias significativas em desempenho e 
                        capacidade multilíngue. Excelente para uma ampla gama de tarefas de NLP.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-blue-50 p-2 rounded">
                          <span className="text-xs font-medium text-blue-700">Variantes:</span> 
                          <ul className="text-xs list-disc pl-4 mt-1 space-y-1">
                            <li>Llama 3.3 8B</li>
                            <li>Llama 3.3 70B</li>
                          </ul>
                        </div>
                        <div className="bg-blue-50 p-2 rounded">
                          <span className="text-xs font-medium text-blue-700">Contexto:</span>
                          <p className="text-xs">Até 128K tokens</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="google" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-yellow-500 to-yellow-700 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-yellow-100 text-yellow-700">Novo</Badge>
                      <Zap className="text-yellow-600 h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Gemma 3</CardTitle>
                    <CardDescription>
                      A evolução do modelo compacto do Google
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        Nova geração do modelo Gemma com capacidades multimodais ampliadas, melhor performance
                        em raciocínio e suporte para código em múltiplas linguagens.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-yellow-50 p-2 rounded">
                          <span className="text-xs font-medium text-yellow-700">Variantes:</span> 
                          <ul className="text-xs list-disc pl-4 mt-1 space-y-1">
                            <li>Gemma 3 nano: 1.8B</li>
                            <li>Gemma 3 small: 7B</li>
                            <li>Gemma 3 large: 27B</li>
                          </ul>
                        </div>
                        <div className="bg-yellow-50 p-2 rounded">
                          <span className="text-xs font-medium text-yellow-700">Contexto:</span>
                          <p className="text-xs">Até 128K tokens</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-yellow-100 text-yellow-700">Estabelecido</Badge>
                      <Zap className="text-yellow-600 h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Gemma 2</CardTitle>
                    <CardDescription>
                      Modelo compacto e eficiente do Google
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        Foco em eficiência e versatilidade, otimizado para implantações em ambientes com recursos limitados.
                        Excelente para aplicações embarcadas e dispositivos móveis.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-yellow-50 p-2 rounded">
                          <span className="text-xs font-medium text-yellow-700">Parâmetros:</span> 
                          <p className="text-xs">2B e 9B</p>
                        </div>
                        <div className="bg-yellow-50 p-2 rounded">
                          <span className="text-xs font-medium text-yellow-700">Contexto:</span>
                          <p className="text-xs">8K tokens</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="microsoft" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-green-500 to-green-700 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-green-100 text-green-700">Novo</Badge>
                      <Sparkles className="text-green-600 h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Phi-4</CardTitle>
                    <CardDescription>
                      Nova geração de modelo eficiente da Microsoft
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        Versão mais avançada da série Phi com arquitetura MoE (Mixture of Experts)
                        e capacidade multimodal nativa. Ideal para aplicações de produção.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-green-50 p-2 rounded">
                          <span className="text-xs font-medium text-green-700">Variantes:</span> 
                          <ul className="text-xs list-disc pl-4 mt-1 space-y-1">
                            <li>Phi-4 mini: 4B</li>
                            <li>Phi-4 small: 13B</li>
                            <li>Phi-4 medium: 28B</li>
                            <li>Phi-4 large: 104B (MoE)</li>
                          </ul>
                        </div>
                        <div className="bg-green-50 p-2 rounded">
                          <span className="text-xs font-medium text-green-700">Capacidades:</span>
                          <ul className="text-xs list-disc pl-4 mt-1 space-y-1">
                            <li>Visão computacional</li>
                            <li>Código avançado</li>
                            <li>Matemática e raciocínio</li>
                            <li>Contexto até 128K tokens</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-green-400 to-green-600 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-green-100 text-green-700">Eficiente</Badge>
                      <Database className="text-green-600 h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Phi-3</CardTitle>
                    <CardDescription>
                      Modelo compacto com performance excepcional
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        Conhecido pela eficiência surpreendente em tarefas de raciocínio e geração de código,
                        apesar de seu tamanho compacto. Ideal para dispositivos de baixa potência.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-green-50 p-2 rounded">
                          <span className="text-xs font-medium text-green-700">Variantes:</span> 
                          <ul className="text-xs list-disc pl-4 mt-1 space-y-1">
                            <li>Phi-3 mini: 3.8B</li>
                            <li>Phi-3 small: 7B</li>
                            <li>Phi-3 medium: 14B</li>
                            <li>Phi-3 MoE: 42B</li>
                          </ul>
                        </div>
                        <div className="bg-green-50 p-2 rounded">
                          <span className="text-xs font-medium text-green-700">Contexto:</span>
                          <p className="text-xs">Até 128K tokens</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="mistral" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-700 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-blue-100 text-blue-700">Avançado</Badge>
                      <Code className="text-blue-600 h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Mistral</CardTitle>
                    <CardDescription>
                      Eficiência e versatilidade
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        O principal modelo da Mistral AI oferece excelente equilíbrio entre 
                        desempenho e eficiência, com forte capacidade em raciocínio e compreensão.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-blue-50 p-2 rounded">
                          <span className="text-xs font-medium text-blue-700">Variantes:</span> 
                          <ul className="text-xs list-disc pl-4 mt-1 space-y-1">
                            <li>Mistral 7B</li>
                            <li>Mistral 8x7B</li>
                            <li>Mistral Large</li>
                          </ul>
                        </div>
                        <div className="bg-blue-50 p-2 rounded">
                          <span className="text-xs font-medium text-blue-700">Capacidades:</span>
                          <ul className="text-xs list-disc pl-4 mt-1 space-y-1">
                            <li>Texto multilíngue</li>
                            <li>Código de alta qualidade</li>
                            <li>Suporte para ferramentas</li>
                            <li>Contexto até 128K tokens</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-blue-100 text-blue-700">Compacto</Badge>
                      <Bot className="text-blue-600 h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Mistral Small</CardTitle>
                    <CardDescription>
                      Versão otimizada para eficiência
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        Versão compacta e eficiente do modelo Mistral, ideal para
                        implantações em dispositivos com recursos limitados ou em ambientes de borda.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-blue-50 p-2 rounded">
                          <span className="text-xs font-medium text-blue-700">Parâmetros:</span> 
                          <p className="text-xs">7B parâmetros</p>
                        </div>
                        <div className="bg-blue-50 p-2 rounded">
                          <span className="text-xs font-medium text-blue-700">Contexto:</span>
                          <p className="text-xs">32K tokens</p>
                        </div>
                      </div>
                      <div className="bg-blue-50 p-2 rounded">
                        <span className="text-xs font-medium text-blue-700">Aplicações:</span>
                        <ul className="text-xs list-disc pl-4 mt-1 space-y-1">
                          <li>Assistentes virtuais leves</li>
                          <li>Aplicações móveis</li>
                          <li>Processamento em dispositivos locais</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="qwen" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-cyan-500 to-cyan-700 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-cyan-100 text-cyan-700">Novo</Badge>
                      <Sparkles className="text-cyan-600 h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Qwen 3</CardTitle>
                    <CardDescription>
                      Nova geração do modelo da Alibaba
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        Última geração do modelo multimodal da Alibaba, com melhorias significativas
                        em compreensão e geração de texto, código e imagens.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-cyan-50 p-2 rounded">
                          <span className="text-xs font-medium text-cyan-700">Variantes:</span> 
                          <ul className="text-xs list-disc pl-4 mt-1 space-y-1">
                            <li>Qwen 3 0.5B</li>
                            <li>Qwen 3 1.5B</li>
                            <li>Qwen 3 7B</li>
                            <li>Qwen 3 72B</li>
                          </ul>
                        </div>
                        <div className="bg-cyan-50 p-2 rounded">
                          <span className="text-xs font-medium text-cyan-700">Capacidades:</span>
                          <ul className="text-xs list-disc pl-4 mt-1 space-y-1">
                            <li>Processamento de imagem</li>
                            <li>Programação multilíngue</li>
                            <li>Raciocínio matemático</li>
                            <li>Contexto até 128K tokens</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-cyan-400 to-cyan-600 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-cyan-100 text-cyan-700">Estabelecido</Badge>
                      <Database className="text-cyan-600 h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Qwen 2.5</CardTitle>
                    <CardDescription>
                      Modelo robusto e versátil
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        Modelo estável e comprovado com forte desempenho em tarefas de linguagem
                        natural, geração de código e processamento multimodal.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-cyan-50 p-2 rounded">
                          <span className="text-xs font-medium text-cyan-700">Variantes:</span> 
                          <ul className="text-xs list-disc pl-4 mt-1 space-y-1">
                            <li>Qwen 2.5 0.5B</li>
                            <li>Qwen 2.5 1.8B</li>
                            <li>Qwen 2.5 7B</li>
                            <li>Qwen 2.5 14B</li>
                            <li>Qwen 2.5 72B</li>
                          </ul>
                        </div>
                        <div className="bg-cyan-50 p-2 rounded">
                          <span className="text-xs font-medium text-cyan-700">Contexto:</span>
                          <p className="text-xs">32K a 128K tokens</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="deepseek" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-indigo-500 to-indigo-700 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-indigo-100 text-indigo-700">Novo</Badge>
                      <BookOpen className="text-indigo-600 h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold">DeepSeek-V3</CardTitle>
                    <CardDescription>
                      Última geração do modelo de pesquisa
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        Modelo avançado com foco em pesquisa científica e raciocínio complexo,
                        capaz de processar dados técnicos e produzir respostas detalhadas.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-indigo-50 p-2 rounded">
                          <span className="text-xs font-medium text-indigo-700">Parâmetros:</span> 
                          <p className="text-xs">236B parâmetros (MoE)</p>
                        </div>
                        <div className="bg-indigo-50 p-2 rounded">
                          <span className="text-xs font-medium text-indigo-700">Contexto:</span>
                          <p className="text-xs">128K tokens</p>
                        </div>
                      </div>
                      <div className="bg-indigo-50 p-2 rounded">
                        <span className="text-xs font-medium text-indigo-700">Especialidades:</span>
                        <ul className="text-xs list-disc pl-4 mt-1 space-y-1">
                          <li>Pesquisa científica avançada</li>
                          <li>Codificação de alto nível</li>
                          <li>Matemática e raciocínio</li>
                          <li>Processamento de dados técnicos</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-indigo-400 to-purple-500 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-purple-100 text-purple-700">Especializado</Badge>
                      <Brain className="text-purple-600 h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold">DeepSeek-RI</CardTitle>
                    <CardDescription>
                      Especializado em pesquisa científica
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        Modelo projetado especificamente para pesquisa científica e acadêmica,
                        com vasto conhecimento em diferentes campos e domínios de conhecimento.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-purple-50 p-2 rounded">
                          <span className="text-xs font-medium text-purple-700">Parâmetros:</span> 
                          <p className="text-xs">143B parâmetros</p>
                        </div>
                        <div className="bg-purple-50 p-2 rounded">
                          <span className="text-xs font-medium text-purple-700">Contexto:</span>
                          <p className="text-xs">32K tokens</p>
                        </div>
                      </div>
                      <div className="bg-purple-50 p-2 rounded">
                        <span className="text-xs font-medium text-purple-700">Aplicações:</span>
                        <ul className="text-xs list-disc pl-4 mt-1 space-y-1">
                          <li>Assistente de pesquisa acadêmica</li>
                          <li>Análise de documentos científicos</li>
                          <li>Raciocínio em campos específicos</li>
                          <li>Síntese de literatura técnica</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      {/* Casos de Uso - Seção mantida conforme solicitado */}
      <section className="py-24 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-3 py-1 text-sm mb-4">
              Aplicações Práticas
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Casos de Uso para <span className="text-purple-600">Sua Empresa</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Conheça as diversas formas como nossos modelos de IA podem transformar seus processos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <MessagesSquare className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Atendimento ao Cliente</h3>
              <p className="text-gray-700 mb-4">
                Automatize o atendimento com assistentes virtuais avançados capazes de compreender contexto e resolver problemas complexos.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Disponibilidade 24/7</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Multilíngue</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Integração com sistemas existentes</span>
                </li>
              </ul>
            </div>
            
            {/* Desenvolvimento de Software com n8n */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Workflow className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Desenvolvimento com n8n</h3>
              <p className="text-gray-700 mb-4">
                Integre IA em seus fluxos de trabalho com n8n, automatizando tarefas e acelerando o desenvolvimento de aplicações.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Automação sem código</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Integração com APIs de IA</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Processamento de dados em tempo real</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Análise de Dados</h3>
              <p className="text-gray-700 mb-4">
                Transforme grandes volumes de dados em insights acionáveis com modelos de IA especializados em análise e visualização.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Processamento de dados não estruturados</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Relatórios automatizados</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Previsões e tendências</span>
                </li>
              </ul>
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

