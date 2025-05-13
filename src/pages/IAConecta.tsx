
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
  Grid3x3
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
            {/* Llama 4 Card */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-700 w-full"></div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <Badge className="bg-purple-100 text-purple-700">Em destaque</Badge>
                  <Brain className="text-purple-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold">Llama 4</CardTitle>
                <CardDescription>
                  Modelo multimodal com arquitetura MoE
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Até 400 bilhões de parâmetros</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Processamento de texto e imagens</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Suporte para 12+ idiomas</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Janela de contexto extensa</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Mistral Card */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-700 w-full"></div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <Badge className="bg-blue-100 text-blue-700">Avançado</Badge>
                  <Code className="text-blue-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold">Mistral</CardTitle>
                <CardDescription>
                  Modelo versátil de alta eficiência
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">3B a 124B de parâmetros</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Até 128K tokens de contexto</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Geração avançada de código</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Processamento multilíngue</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Phi-3/4 Card */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-green-500 to-green-700 w-full"></div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <Badge className="bg-green-100 text-green-700">Eficiente</Badge>
                  <Database className="text-green-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold">Phi-3/4</CardTitle>
                <CardDescription>
                  Modelo otimizado para dispositivos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">3.8B a 42B parâmetros</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Arquitetura MoE eficiente</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Até 128K tokens (Phi-3)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Compreensão de imagem</span>
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
          
          <Tabs defaultValue="llama">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
              <TabsTrigger value="llama">Llama</TabsTrigger>
              <TabsTrigger value="mistral">Mistral</TabsTrigger>
              <TabsTrigger value="phi">Phi</TabsTrigger>
              <TabsTrigger value="falcon">Falcon</TabsTrigger>
              <TabsTrigger value="other">Outros</TabsTrigger>
            </TabsList>
            
            <TabsContent value="llama" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-700 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-purple-100 text-purple-700">Novo</Badge>
                      <Brain className="text-purple-600 h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Llama 4</CardTitle>
                    <CardDescription>
                      Modelo multimodal com arquitetura MoE
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        Capacidades multimodais nativas processando texto e imagens como entrada. 
                        Suporta mais de 12 idiomas, incluindo Português, com pré-treinamento em cerca de 200 idiomas.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-purple-50 p-2 rounded">
                          <span className="text-xs font-medium text-purple-700">Scout:</span> 
                          <p className="text-xs">109B parâmetros (17B ativos)</p>
                        </div>
                        <div className="bg-purple-50 p-2 rounded">
                          <span className="text-xs font-medium text-purple-700">Maverick:</span>
                          <p className="text-xs">400B parâmetros (17B ativos)</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-purple-100 text-purple-700">Avançado</Badge>
                      <Brain className="text-purple-600 h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Llama 3</CardTitle>
                    <CardDescription>
                      Base sólida para diversas aplicações
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        Impressionante gama de tamanhos, com capacidade multilíngue, geração de código e conteúdo longo.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-purple-50 p-2 rounded">
                          <span className="text-xs font-medium text-purple-700">Parâmetros:</span> 
                          <p className="text-xs">1B a 405B</p>
                        </div>
                        <div className="bg-purple-50 p-2 rounded">
                          <span className="text-xs font-medium text-purple-700">Contexto:</span>
                          <p className="text-xs">Até 128K tokens</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="mistral" className="mt-6">
              <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-700 w-full"></div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <Badge className="bg-blue-100 text-blue-700">Versátil</Badge>
                    <Code className="text-blue-600 h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold">Mistral</CardTitle>
                  <CardDescription>
                    Eficiência e complexidade
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-700">
                      Reconhecido pela capacidade em tarefas complexas, processamento multilíngue, 
                      geração avançada de código e compreensão de imagem em algumas variantes.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-3 rounded">
                        <span className="text-xs font-medium text-blue-700">Parâmetros:</span> 
                        <p className="text-xs">3B a 124B</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded">
                        <span className="text-xs font-medium text-blue-700">Contexto:</span>
                        <p className="text-xs">32K a 128K tokens</p>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <span className="text-xs font-medium text-blue-700">Diferenciais:</span>
                      <ul className="text-xs list-disc pl-4 mt-1 space-y-1">
                        <li>Chamadas de função</li>
                        <li>Processamento em larga escala</li>
                        <li>Performance em dispositivos limitados</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="phi" className="mt-6">
              <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-green-500 to-green-700 w-full"></div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <Badge className="bg-green-100 text-green-700">Eficiente</Badge>
                    <Database className="text-green-600 h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold">Phi-3.x/4</CardTitle>
                  <CardDescription>
                    A eficiência da Microsoft
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-700">
                      Eficiente com diversas variantes, desde o mini até versões com 
                      Mixture of Experts (MoE), otimizado para dispositivos com recursos limitados.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 p-3 rounded">
                        <span className="text-xs font-medium text-green-700">Variantes:</span> 
                        <ul className="text-xs list-disc pl-4 mt-1 space-y-1">
                          <li>Phi-3 mini: 3.8B</li>
                          <li>Phi-3 small: 7B</li>
                          <li>Phi-3 medium: 14B</li>
                          <li>Phi-3 MoE: 42B</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-3 rounded">
                        <span className="text-xs font-medium text-green-700">Aplicações:</span>
                        <ul className="text-xs list-disc pl-4 mt-1 space-y-1">
                          <li>Visão computacional</li>
                          <li>Programação assistida</li>
                          <li>Raciocínio matemático</li>
                          <li>Compreensão de imagem</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="falcon" className="mt-6">
              <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-orange-500 to-orange-700 w-full"></div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <Badge className="bg-orange-100 text-orange-700">Versátil</Badge>
                    <Server className="text-orange-600 h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold">Falcon 3</CardTitle>
                  <CardDescription>
                    Versatilidade do TII
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-700">
                      Bom desempenho em geração de texto, código, matemática e aplicações multilíngues,
                      com excelente suporte para conhecimento científico.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-orange-50 p-3 rounded">
                        <span className="text-xs font-medium text-orange-700">Parâmetros:</span> 
                        <p className="text-xs">1B a 10B</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded">
                        <span className="text-xs font-medium text-orange-700">Contexto:</span>
                        <p className="text-xs">8K a 32K tokens</p>
                      </div>
                    </div>
                    <div className="bg-orange-50 p-3 rounded">
                      <span className="text-xs font-medium text-orange-700">Aplicações notáveis:</span>
                      <ul className="text-xs list-disc pl-4 mt-1 space-y-1">
                        <li>Sistemas de conhecimento científico</li>
                        <li>Resolução de problemas matemáticos</li>
                        <li>Geração de texto multilíngue</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="other" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-yellow-500 to-yellow-700 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-yellow-100 text-yellow-700">Google</Badge>
                      <Zap className="text-yellow-600 h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Gemma 2</CardTitle>
                    <CardDescription>
                      A oferta do Google
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        Focado em geração de texto, sistemas Q&A, sumarização e geração de código.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-yellow-50 p-2 rounded">
                          <span className="text-xs font-medium text-yellow-700">Parâmetros:</span> 
                          <p className="text-xs">2B, 9B e 27B</p>
                        </div>
                        <div className="bg-yellow-50 p-2 rounded">
                          <span className="text-xs font-medium text-yellow-700">Contexto:</span>
                          <p className="text-xs">8K tokens</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-indigo-500 to-indigo-700 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-indigo-100 text-indigo-700">Cohere</Badge>
                      <MessagesSquare className="text-indigo-600 h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Command R</CardTitle>
                    <CardDescription>
                      Especialista em Conversação
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        Forte em aplicações de IA conversacional, RAG e uso de ferramentas externas.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-indigo-50 p-2 rounded">
                          <span className="text-xs font-medium text-indigo-700">Parâmetros:</span> 
                          <p className="text-xs">7B, 35B e 104B</p>
                        </div>
                        <div className="bg-indigo-50 p-2 rounded">
                          <span className="text-xs font-medium text-indigo-700">Contexto:</span>
                          <p className="text-xs">128K tokens</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-cyan-500 to-cyan-700 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-cyan-100 text-cyan-700">BigCode</Badge>
                      <Code className="text-cyan-600 h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold">StarCoder2</CardTitle>
                    <CardDescription>
                      Especializado em Código
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        Focado em completude e compreensão de código em múltiplas linguagens de programação.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-cyan-50 p-2 rounded">
                          <span className="text-xs font-medium text-cyan-700">Parâmetros:</span> 
                          <p className="text-xs">3B, 7B e 15B</p>
                        </div>
                        <div className="bg-cyan-50 p-2 rounded">
                          <span className="text-xs font-medium text-cyan-700">Contexto:</span>
                          <p className="text-xs">16K tokens</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-emerald-500 to-emerald-700 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-emerald-100 text-emerald-700">01.AI</Badge>
                      <Database className="text-emerald-600 h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Yi</CardTitle>
                    <CardDescription>
                      Eficaz em múltiplas tarefas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        Particularmente eficaz em texto bilíngue, código e raciocínio matemático.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-emerald-50 p-2 rounded">
                          <span className="text-xs font-medium text-emerald-700">Parâmetros:</span> 
                          <p className="text-xs">6B, 9B e 34B</p>
                        </div>
                        <div className="bg-emerald-50 p-2 rounded">
                          <span className="text-xs font-medium text-emerald-700">Contexto:</span>
                          <p className="text-xs">4K a 200K tokens</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      {/* Casos de Uso - Nova seção */}
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
