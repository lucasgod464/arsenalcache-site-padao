import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  X, 
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
  BookOpen,
  Trophy,
  BrainCircuit,
  MessageCircle,
  MessageSquare
} from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingCta from "@/components/FloatingCta";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Dados para a comparação de serviços de IA
const aiComparisonData = {
  ourService: {
    name: "IA Conecta Ilimitada",
    price: "R$1.000/mês",
    features: [
      "Uso completamente ilimitado",
      "Acesso a modelos avançados (Llama, Mistral, etc)",
      "Previsibilidade total de custos",
      "Suporte técnico especializado",
      "Integração com Whaticket e outras plataformas",
      "Sem contagem de tokens ou limites de uso"
    ]
  },
  competitor: {
    name: "OpenAI GPT-4",
    price: "R$5.000+/mês*",
    features: [
      "Cobrança por token (uso limitado)",
      "Custos imprevisíveis",
      "Sujeito a limites de uso e rate limiting",
      "Sem suporte técnico dedicado",
      "Acesso ao modelo mais recente",
      "Disponível globalmente"
    ]
  }
};

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

      {/* IA Ilimitada Section - Nova seção */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-gray-200">
            <div className="text-center mb-8">
              <Badge variant="outline" className="bg-purple-600 text-white border-purple-500 mb-4">
                Inteligência Artificial Ilimitada
              </Badge>
              <h3 className="text-2xl font-bold mb-3">
                <span className="text-purple-600">IA Conecta</span> - Solução de IA Sem Limites
              </h3>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                Acesso completo à tecnologia de IA avançada por um valor fixo mensal, sem surpresas na sua fatura
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
              {/* Nossa solução de IA */}
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 shadow-lg hover:shadow-xl transition-all">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white pb-6">
                  <div className="space-y-1.5">
                    <Badge className="bg-white text-purple-700 border-0 mb-2">
                      Nossa Solução
                    </Badge>
                    <CardTitle className="text-2xl font-bold flex items-center gap-2">
                      {aiComparisonData.ourService.name}
                      <BrainCircuit className="h-5 w-5 text-purple-200" />
                    </CardTitle>
                    <div className="mt-4">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-extrabold tracking-tight">{aiComparisonData.ourService.price}</span>
                      </div>
                      <p className="text-sm text-purple-100 mt-2">Preço fixo sem surpresas</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-purple-700 flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-purple-600" />
                        Vantagens exclusivas:
                      </h4>
                      <ul className="space-y-2.5">
                        {aiComparisonData.ourService.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm">
                      <h5 className="font-medium text-purple-700 mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4" />
                        Economia real e previsibilidade
                      </h5>
                      <p className="text-gray-600 text-sm">
                        Com nossa solução de valor fixo, você economiza até 80% em comparação com APIs de IA tradicionais,
                        além de ter previsibilidade total de custos independente do volume de uso.
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2 pb-6 px-6">
                  <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 rounded-lg transition-all shadow-md hover:shadow-xl">
                    <a href="https://api.whatsapp.com/send?phone=5512981156856&text=Olá,%20tenho%20interesse%20no%20serviço%20de%20IA%20Conecta%20Ilimitada" target="_blank" rel="noopener noreferrer">
                      Contratar IA Ilimitada
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Comparação com GPT-4 */}
              <Card className="bg-white border border-gray-200 shadow-md">
                <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-200 pb-6">
                  <div className="space-y-1.5">
                    <Badge className="bg-gray-700 text-white border-0 mb-2">
                      Concorrente
                    </Badge>
                    <CardTitle className="text-2xl font-bold flex items-center gap-2 text-gray-800">
                      {aiComparisonData.competitor.name}
                    </CardTitle>
                    <div className="mt-4">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-extrabold tracking-tight text-gray-800">{aiComparisonData.competitor.price}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">*Custo estimado para uso empresarial médio</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-700">
                        Limitações:
                      </h4>
                      <ul className="space-y-2.5">
                        {aiComparisonData.competitor.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            {index < 4 ? <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" /> : <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />}
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h5 className="font-medium text-gray-700 mb-2">
                        Custos imprevisíveis
                      </h5>
                      <p className="text-gray-600 text-sm">
                        Com cobrança por token, os custos aumentam proporcionalmente ao uso, 
                        tornando difícil prever gastos mensais e podendo resultar em faturas 
                        surpreendentemente altas.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-10 bg-gradient-to-br from-purple-100 to-blue-50 p-8 rounded-xl border border-purple-200 max-w-4xl mx-auto shadow-md">
              <h4 className="text-2xl font-bold text-purple-800 mb-4">Compare e economize com nossa solução de IA ilimitada</h4>
              <p className="text-gray-700 mb-6">
                Por apenas <span className="font-bold text-purple-700">R$1.000,00/mês</span>, tenha acesso ilimitado à tecnologia de IA avançada,
                sem preocupações com contadores de tokens ou custos crescentes. Uma solução completa que se integra perfeitamente
                ao seu Whaticket, potencializando seu atendimento com inteligência artificial sem limites.
              </p>
              
              <div className="bg-white p-6 rounded-lg border border-purple-200 shadow-sm mb-8">
                <h5 className="text-xl font-semibold text-purple-700 mb-4">Simulação de economia</h5>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h6 className="font-medium text-gray-700 mb-2">Com GPT-4</h6>
                    <p className="text-sm text-gray-600 mb-2">1.000.000 tokens/mês</p>
                    <p className="text-2xl font-bold text-red-600">R$5.000,00</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h6 className="font-medium text-green-700 mb-2">Com IA Conecta</h6>
                    <p className="text-sm text-green-600 mb-2">Tokens ilimitados</p>
                    <p className="text-2xl font-bold text-green-600">R$1.000,00</p>
                  </div>
                </div>
                
                <p className="text-green-600 font-bold text-lg">Sua economia: R$4.000,00/mês</p>
              </div>
              
              <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 px-10 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all">
                <a href="https://api.whatsapp.com/send?phone=5512981156856&text=Olá,%20quero%20saber%20mais%20sobre%20a%20solução%20de%20IA%20ilimitada" target="_blank" rel="noopener noreferrer">
                  <BrainCircuit className="mr-2 h-5 w-5" />
                  Falar com especialista em IA
                </a>
              </Button>
            </div>
          </div>

          <div className="text-center mt-12 max-w-3xl mx-auto">
            <Button asChild className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-full px-8 py-5 shadow-md hover:shadow-lg transition-all border border-green-400/30 flex items-center gap-2">
              <a href="https://api.whatsapp.com/send?phone=5512981156856" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar com um consultor no WhatsApp
              </a>
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
                  <CardHeader className="
