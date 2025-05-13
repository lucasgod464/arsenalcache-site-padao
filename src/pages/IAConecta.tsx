
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

      {/* Modal de Todos os Modelos */}
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
              <div className="space-y-6">
                <Collapsible>
                  <CollapsibleTrigger 
                    className="w-full flex justify-between items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200"
                    onClick={() => toggleTab('llama4')}
                  >
                    <div className="flex items-center">
                      <Brain className="text-purple-600 h-5 w-5 mr-3" />
                      <span className="font-semibold">Llama 4: A Nova Fronteira Multimodal da Meta</span>
                    </div>
                    <div className={`transform transition-transform ${openTabId === 'llama4' ? 'rotate-180' : ''}`}>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 border-l-2 border-purple-300 ml-4 mt-2">
                    <div className="space-y-4">
                      <p>
                        Recentemente disponibilizado e com destaque na Ollama Library, o Llama 4 representa um avanço significativo, 
                        introduzindo capacidades multimodais nativas. Esta coleção de modelos, que utiliza uma sofisticada arquitetura 
                        de Mistura de Especialistas (MoE), é projetada para processar tanto texto quanto imagens como entrada, 
                        gerando texto multilíngue e código como saída.
                      </p>
                      <p>
                        Segundo a documentação oficial na Ollama Library, atualizada recentemente, o Llama 4 suporta uma vasta gama de idiomas, 
                        incluindo Árabe, Inglês, Francês, Alemão, Hindi, Indonésio, Italiano, Português, Espanhol, Tagalo, Tailandês e Vietnamita, 
                        com um pré-treinamento que abrange cerca de 200 idiomas, abrindo portas para fine-tuning em outras línguas.
                      </p>
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2">Dois modelos principais compõem esta família:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <span className="font-medium">Llama 4 Scout:</span> Um modelo MoE com 109 bilhões de parâmetros totais, 
                            dos quais 17 bilhões são ativos durante a inferência.
                          </li>
                          <li>
                            <span className="font-medium">Llama 4 Maverick:</span> Uma versão ainda mais robusta, com 400 bilhões de parâmetros 
                            totais e também 17 bilhões de parâmetros ativos.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                
                <Collapsible>
                  <CollapsibleTrigger 
                    className="w-full flex justify-between items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200"
                    onClick={() => toggleTab('llama3')}
                  >
                    <div className="flex items-center">
                      <Brain className="text-purple-600 h-5 w-5 mr-3" />
                      <span className="font-semibold">Llama 3: A Base Sólida da Meta</span>
                    </div>
                    <div className={`transform transition-transform ${openTabId === 'llama3' ? 'rotate-180' : ''}`}>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 border-l-2 border-purple-300 ml-4 mt-2">
                    <div className="space-y-4">
                      <p>
                        O Llama 3, também da Meta, permanece uma escolha proeminente, com sua impressionante gama de tamanhos 
                        (de 1B a 405B parâmetros) e janelas de contexto de até 128k tokens. Sua versatilidade em geração de texto, 
                        tarefas multilíngues, código e conteúdo longo o mantém relevante.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Capacidades Principais:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Geração de texto de propósito geral</li>
                            <li>Aplicações multilíngues</li>
                            <li>Desenvolvimento e compreensão de código</li>
                            <li>Criação de conteúdo extenso</li>
                            <li>Fine-tuning para domínios específicos</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Especificações:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>1B a 405B parâmetros</li>
                            <li>Janela de contexto: até 128k tokens</li>
                            <li>Suporte para múltiplos idiomas</li>
                            <li>Arquitetura baseada em transformers</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </TabsContent>
            
            <TabsContent value="mistral" className="mt-6">
              <div className="space-y-6">
                <Collapsible>
                  <CollapsibleTrigger 
                    className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200"
                    onClick={() => toggleTab('mistral')}
                  >
                    <div className="flex items-center">
                      <Code className="text-blue-600 h-5 w-5 mr-3" />
                      <span className="font-semibold">Mistral: Eficiência e Complexidade</span>
                    </div>
                    <div className={`transform transition-transform ${openTabId === 'mistral' ? 'rotate-180' : ''}`}>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 border-l-2 border-blue-300 ml-4 mt-2">
                    <div className="space-y-4">
                      <p>
                        O Mistral, da Mistral AI (3B-124B parâmetros, contexto de 32k-128k), é reconhecido pela sua capacidade em 
                        tarefas complexas, processamento multilíngue, geração de código e até compreensão de imagem em algumas variantes.
                      </p>
                      <p>
                        Com modelos que variam de 3 bilhões a 124 bilhões de parâmetros e janelas de contexto que também alcançam 128 mil tokens, 
                        a família Mistral é reconhecida por sua capacidade de lidar com tarefas de alta complexidade. Suas aplicações incluem 
                        processamento multilíngue sofisticado, geração avançada de código, compreensão de imagens (em variantes específicas), 
                        e são particularmente eficientes para computação de borda e execução em dispositivos com recursos limitados.
                      </p>
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2">Diferenciais:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Capacidade de realizar chamadas de função</li>
                          <li>Processamento eficiente em larga escala</li>
                          <li>Ótima performance em dispositivos com recursos limitados</li>
                          <li>Compreensão sofisticada de contexto</li>
                        </ul>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </TabsContent>
            
            <TabsContent value="phi" className="mt-6">
              <div className="space-y-6">
                <Collapsible>
                  <CollapsibleTrigger 
                    className="w-full flex justify-between items-center p-4 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200"
                    onClick={() => toggleTab('phi')}
                  >
                    <div className="flex items-center">
                      <Database className="text-green-600 h-5 w-5 mr-3" />
                      <span className="font-semibold">Phi-3.x/4: A Eficiência da Microsoft</span>
                    </div>
                    <div className={`transform transition-transform ${openTabId === 'phi' ? 'rotate-180' : ''}`}>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 border-l-2 border-green-300 ml-4 mt-2">
                    <div className="space-y-4">
                      <p>
                        Da Microsoft, a família Phi-3.x / 4 destaca-se pela sua eficiência, com variantes como o Phi-3 mini (3.8 bilhões de parâmetros), 
                        small (7 bilhões), medium (14 bilhões) e uma versão Mixture of Experts (MoE) com 42 bilhões de parâmetros.
                      </p>
                      <p>
                        As janelas de contexto variam, chegando a 128 mil tokens (e 16 mil para o Phi-4). Estes modelos são adequados 
                        para geração de texto, tarefas multilíngues, compreensão de código, raciocínio matemático e, notavelmente, 
                        compreensão de imagem em suas variantes de visão, além de serem otimizados para inferência em dispositivos.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Modelos Disponíveis:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Phi-3 mini: 3.8B parâmetros</li>
                            <li>Phi-3 small: 7B parâmetros</li>
                            <li>Phi-3 medium: 14B parâmetros</li>
                            <li>Phi-3 MoE: 42B parâmetros</li>
                            <li>Phi-4: diversos tamanhos</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Casos de Uso:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Inferência em dispositivos com recursos limitados</li>
                            <li>Aplicações de visão computacional</li>
                            <li>Programação assistida por IA</li>
                            <li>Assistentes virtuais eficientes</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </TabsContent>
            
            <TabsContent value="falcon" className="mt-6">
              <div className="space-y-6">
                <Collapsible>
                  <CollapsibleTrigger 
                    className="w-full flex justify-between items-center p-4 bg-orange-50 hover:bg-orange-100 rounded-lg border border-orange-200"
                    onClick={() => toggleTab('falcon')}
                  >
                    <div className="flex items-center">
                      <Server className="text-orange-600 h-5 w-5 mr-3" />
                      <span className="font-semibold">Falcon 3: Versatilidade do TII</span>
                    </div>
                    <div className={`transform transition-transform ${openTabId === 'falcon' ? 'rotate-180' : ''}`}>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 border-l-2 border-orange-300 ml-4 mt-2">
                    <div className="space-y-4">
                      <p>
                        O Falcon 3, proveniente do Technology Innovation Institute (TII), oferece modelos com 1 bilhão a 10 bilhões 
                        de parâmetros e janelas de contexto de até 32 mil tokens. Estes modelos são versáteis, demonstrando bom desempenho 
                        em geração de texto geral, criação de código, resolução de problemas matemáticos, acesso a conhecimento científico 
                        e aplicações multilíngues.
                      </p>
                      <p>
                        Assim como outros modelos de ponta, o Falcon 3 também se presta bem a processos de fine-tuning para 
                        especialização em nichos particulares.
                      </p>
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2">Aplicações Notáveis:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Sistemas de conhecimento científico</li>
                          <li>Resolução de problemas matemáticos</li>
                          <li>Geração de texto multilíngue</li>
                          <li>Suporte para domínios especializados via fine-tuning</li>
                        </ul>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </TabsContent>
            
            <TabsContent value="other" className="mt-6">
              <div className="space-y-6">
                <Collapsible>
                  <CollapsibleTrigger 
                    className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200"
                    onClick={() => toggleTab('gemma')}
                  >
                    <div className="flex items-center">
                      <Zap className="text-yellow-600 h-5 w-5 mr-3" />
                      <span className="font-semibold">Gemma 2: A Oferta do Google</span>
                    </div>
                    <div className={`transform transition-transform ${openTabId === 'gemma' ? 'rotate-180' : ''}`}>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 border-l-2 border-yellow-300 ml-4 mt-2">
                    <p>
                      Desenvolvido pelo Google, o Gemma 2 apresenta modelos com 2 bilhões, 9 bilhões e 27 bilhões de parâmetros, 
                      operando com uma janela de contexto de 8 mil tokens. Suas principais aplicações residem na geração de texto, 
                      sistemas de perguntas e respostas, sumarização de informações, geração de código e, claro, a capacidade de 
                      ser ajustado para tarefas específicas através de fine-tuning.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
                
                <Collapsible>
                  <CollapsibleTrigger 
                    className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200"
                    onClick={() => toggleTab('command')}
                  >
                    <div className="flex items-center">
                      <MessagesSquare className="text-indigo-600 h-5 w-5 mr-3" />
                      <span className="font-semibold">Command R: Especialista em Conversação</span>
                    </div>
                    <div className={`transform transition-transform ${openTabId === 'command' ? 'rotate-180' : ''}`}>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 border-l-2 border-indigo-300 ml-4 mt-2">
                    <p>
                      O Command R, da Cohere, com modelos de 7 bilhões, 35 bilhões e 104 bilhões de parâmetros e uma generosa 
                      janela de contexto de 128 mil tokens, é especialmente forte em aplicações de IA conversacional. 
                      Ele também se destaca em tarefas de Retrieval Augmented Generation (RAG), uso de ferramentas externas, 
                      processamento multilíngue e geração de conteúdo de formato longo.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
                
                <Collapsible>
                  <CollapsibleTrigger 
                    className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200"
                    onClick={() => toggleTab('others')}
                  >
                    <div className="flex items-center">
                      <Grid3x3 className="text-purple-600 h-5 w-5 mr-3" />
                      <span className="font-semibold">Outros Modelos Disponíveis</span>
                    </div>
                    <div className={`transform transition-transform ${openTabId === 'others' ? 'rotate-180' : ''}`}>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 border-l-2 border-purple-300 ml-4 mt-2">
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">StableLM 2 (Stability AI)</h4>
                        <p className="text-sm">
                          Modelos com 1.6B, 3B e 12B parâmetros, contexto de até 16K tokens. Ideal para texto multilíngue e código.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">StarCoder2 (BigCode)</h4>
                        <p className="text-sm">
                          Modelos com 3B, 7B e 15B parâmetros, contexto de 16K tokens. Especializado em código e programação.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Yi (01.AI)</h4>
                        <p className="text-sm">
                          Modelos de 6B a 34B parâmetros, contexto até 200K tokens. Eficaz em texto bilíngue e raciocínio.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Qwen2.5 (Alibaba)</h4>
                        <p className="text-sm">
                          Modelos de 0.5B a 72B parâmetros, contexto de 128K tokens. Versátil em múltiplas tarefas.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">DeepSeek-V2.x/V3 (DeepSeek AI)</h4>
                        <p className="text-sm">
                          Modelos de grande escala até 671B parâmetros. Projetado para raciocínio avançado.
                        </p>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
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
            
            {/* Modificação: Seção de Desenvolvimento de Software com n8n */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Workflow className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Desenvolvimento de Software</h3>
              <p className="text-gray-700 mb-4">
                Acelere o desenvolvimento com assistentes de código e integração com n8n para automação de fluxos de trabalho sem código.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Automação com n8n</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Integrações sem código</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Fluxos de trabalho personalizados</span>
                </li>
              </ul>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-center">
                      <img 
                        src="https://n8n.io/favicon.ico" 
                        alt="n8n icon" 
                        className="w-6 h-6 mr-2" 
                      />
                      <span className="text-sm font-medium text-blue-700">Powered by n8n</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">Plataforma líder em automação de workflows</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Análise de Dados</h3>
              <p className="text-gray-700 mb-4">
                Transforme dados brutos em insights acionáveis com modelos de IA capazes de processar grandes volumes de informação.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Reconhecimento de padrões</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Processamento de linguagem natural</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Visualização inteligente</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IA Ilimitada Section - UI refinada */}
      <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-3 py-1 text-sm mb-4">
              Inteligência Artificial Ilimitada
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Solução - IA Conecta Ilimitado
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Acesso ilimitado aos modelos de IA mais avançados com preço fixo e previsível
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* IA Conecta Card - Melhorado com gradiente e sombras */}
            <Card className="border-2 border-purple-600 overflow-hidden relative shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-purple-700 text-white text-center py-1.5 text-sm font-medium">
                NOSSA SOLUÇÃO
              </div>
              <CardHeader className="bg-gradient-to-br from-gray-50 to-gray-100 pb-6 pt-10">
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
                <p className="font-semibold mb-4 text-lg">Acesso a todos estes modelos:</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-green-100 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <span className="text-gray-700">Llama 4 - modelo multimodal avançado</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-green-100 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <span className="text-gray-700">Mistral - processamento de tarefas complexas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-green-100 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <span className="text-gray-700">Phi-3/4 - modelos eficientes da Microsoft</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-green-100 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <span className="text-gray-700">Gemma 2 - modelos versáteis do Google</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-green-100 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <span className="text-gray-700">Command R - especialista em RAG e conversação</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-green-100 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <span className="text-gray-700">Suporte técnico especializado</span>
                  </li>
                </ul>
                <div className="mt-8 p-5 bg-green-50 rounded-lg border border-green-100 shadow-inner">
                  <p className="font-semibold mb-2 text-green-700">Economia real e previsibilidade</p>
                  <p className="text-gray-700">
                    Com nossa solução de valor fixo, você economiza até 80% em comparação com APIs de IA tradicionais, além de ter previsibilidade total de custos independente do volume de uso.
                  </p>
                </div>
                <Button className="w-full mt-8 shadow-md py-6 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900">
                  Contratar IA Ilimitada
                </Button>
              </CardContent>
            </Card>

            {/* Concorrente Card - Melhorado com design e consistência */}
            <Card className="border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-br from-gray-50 to-gray-100 pb-6 pt-8">
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
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-red-100 p-1.5 rounded-full">
                      <X className="h-4 w-4 text-red-500" />
                    </div>
                    <span className="text-gray-700">Cobrança por token (aproximadamente R$0,03 por 1K tokens)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-red-100 p-1.5 rounded-full">
                      <X className="h-4 w-4 text-red-500" />
                    </div>
                    <span className="text-gray-700">Limite de uso baseado em crédito</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-red-100 p-1.5 rounded-full">
                      <X className="h-4 w-4 text-red-500" />
                    </div>
                    <span className="text-gray-700">Integração manual necessária</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-red-100 p-1.5 rounded-full">
                      <X className="h-4 w-4 text-red-500" />
                    </div>
                    <span className="text-gray-700">Sem personalização com seus dados</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-red-100 p-1.5 rounded-full">
                      <X className="h-4 w-4 text-red-500" />
                    </div>
                    <span className="text-gray-700">Limites de requisições por minuto</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-red-100 p-1.5 rounded-full">
                      <X className="h-4 w-4 text-red-500" />
                    </div>
                    <span className="text-gray-700">Custos crescentes com o uso</span>
                  </li>
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
          <div className="mt-20 px-6 py-16 bg-gradient-to-br from-white to-purple-100 rounded-3xl shadow-lg">
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
            </div>
          </div>
        </div>
      </section>

      {/* Planos e Preços - Design aperfeiçoado */}
      <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-3 py-1 text-sm mb-4">
              Plano Único
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Solução de IA ilimitada com preço fixo
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Acesso ilimitado à inteligência artificial avançada por um valor mensal fixo
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="border-2 border-purple-600 overflow-hidden relative max-w-lg w-full shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-purple-700 text-white text-center py-1.5 text-sm font-medium">
                PLANO COMPLETO
              </div>
              <CardHeader className="bg-gradient-to-br from-purple-50 to-gray-50 pb-8 pt-10">
                <CardTitle className="text-2xl text-purple-700">IA Conecta Ilimitado</CardTitle>
                <CardDescription className="mt-2">Acesso a modelos de IA avançados</CardDescription>
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
                    <span className="text-gray-700">Acesso a modelos como Llama 4 e Mistral</span>
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
                <Button variant="default" className="w-full mt-10 py-6 shadow-lg font-medium text-base bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900">
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
              Transforme seu negócio com IA avançada hoje mesmo
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Agende uma demonstração gratuita e descubra como nossa solução de IA ilimitada 
              pode revolucionar seus processos e impulsionar seus resultados
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg py-6 px-8 text-lg">
                Agendar demonstração
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 shadow-lg py-6 px-8 text-lg">
                Falar com especialista
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
