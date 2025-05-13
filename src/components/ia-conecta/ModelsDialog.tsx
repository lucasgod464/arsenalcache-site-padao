
import React from "react";
import { Brain, Bot, Zap, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ModelDetailsCard from "./ModelDetailsCard";

interface ModelsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ModelsDialog = ({ open, onOpenChange }: ModelsDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-purple-700">Todos os Modelos de IA Disponíveis</DialogTitle>
          <DialogDescription>
            Acesso completo a todos esses modelos de IA avançados com um único plano mensal
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="meta">
          <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-2">
            <TabsTrigger value="meta">Meta</TabsTrigger>
            <TabsTrigger value="microsoft">Microsoft</TabsTrigger>
            <TabsTrigger value="mistral">Mistral</TabsTrigger>
            <TabsTrigger value="qwen">Qwen</TabsTrigger>
            <TabsTrigger value="gemma">Gemma</TabsTrigger>
            <TabsTrigger value="deepseek">DeepSeek</TabsTrigger>
          </TabsList>
          
          {/* Meta (Llama) Models Tab */}
          <TabsContent value="meta" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ModelDetailsCard
                title="Llama 4"
                description="O mais avançado modelo da Meta"
                badge={{ 
                  text: "Nova Geração", 
                  className: "bg-blue-100 text-blue-700" 
                }}
                icon={<Brain className="text-blue-600 h-6 w-6" />}
                headerColor="bg-gradient-to-r from-blue-500 to-blue-700"
                details={
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
                }
              />

              <ModelDetailsCard
                title="Llama 3.3"
                description="Evolução da consagrada família Llama"
                badge={{ 
                  text: "Estabelecido", 
                  className: "bg-blue-100 text-blue-700" 
                }}
                icon={<Bot className="text-blue-600 h-6 w-6" />}
                headerColor="bg-gradient-to-r from-blue-400 to-blue-600"
                details={
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
                }
              />
            </div>
          </TabsContent>
          
          <TabsContent value="microsoft" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ModelDetailsCard
                title="Phi-4"
                description="Nova geração de modelo eficiente da Microsoft"
                badge={{ 
                  text: "Novo", 
                  className: "bg-green-100 text-green-700" 
                }}
                icon={<Sparkles className="text-green-600 h-6 w-6" />}
                headerColor="bg-gradient-to-r from-green-500 to-green-700"
                details={
                  <div className="space-y-4">
                    <p className="text-sm text-gray-700">
                      Um dos modelos mais eficientes com excelente relação tamanho/performance.
                      Ideal para aplicações que exigem respostas rápidas e precisas.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-green-50 p-2 rounded">
                        <span className="text-xs font-medium text-green-700">Variantes:</span> 
                        <ul className="text-xs list-disc pl-4 mt-1 space-y-1">
                          <li>Phi-4 mini: 4B</li>
                          <li>Phi-4 small: 14B</li>
                          <li>Phi-4 medium: 42B</li>
                          <li>Phi-4 large: 104B</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-2 rounded">
                        <span className="text-xs font-medium text-green-700">Contexto:</span>
                        <p className="text-xs">Até 128K tokens</p>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </TabsContent>

          <TabsContent value="mistral" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ModelDetailsCard
                title="Mistral Large"
                description="Modelo avançado da Mistral AI"
                badge={{ 
                  text: "Premium", 
                  className: "bg-purple-100 text-purple-700" 
                }}
                icon={<Zap className="text-purple-600 h-6 w-6" />}
                headerColor="bg-gradient-to-r from-purple-500 to-purple-700"
                details={
                  <div className="space-y-4">
                    <p className="text-sm text-gray-700">
                      Modelo de alto desempenho para tarefas complexas de processamento de linguagem natural,
                      com excelente desempenho em raciocínio, codificação e análise de dados.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-purple-50 p-2 rounded">
                        <span className="text-xs font-medium text-purple-700">Performance:</span>
                        <p className="text-xs">Competitivo com GPT-4</p>
                      </div>
                      <div className="bg-purple-50 p-2 rounded">
                        <span className="text-xs font-medium text-purple-700">Contexto:</span>
                        <p className="text-xs">32K tokens</p>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </TabsContent>

          <TabsContent value="qwen" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ModelDetailsCard
                title="Qwen2"
                description="Modelo multilingue avançado da Alibaba Cloud"
                badge={{ 
                  text: "Multilingue", 
                  className: "bg-yellow-100 text-yellow-700" 
                }}
                icon={<Sparkles className="text-yellow-600 h-6 w-6" />}
                headerColor="bg-gradient-to-r from-yellow-500 to-yellow-700"
                details={
                  <div className="space-y-4">
                    <p className="text-sm text-gray-700">
                      Modelo com excelente suporte para idiomas asiáticos e ocidentais, 
                      incluindo chinês simplificado e tradicional, coreano, japonês e línguas latinas.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-yellow-50 p-2 rounded">
                        <span className="text-xs font-medium text-yellow-700">Variantes:</span>
                        <ul className="text-xs list-disc pl-4 mt-1 space-y-1">
                          <li>Qwen2 7B</li>
                          <li>Qwen2 72B</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-50 p-2 rounded">
                        <span className="text-xs font-medium text-yellow-700">Contexto:</span>
                        <p className="text-xs">Até 128K tokens</p>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </TabsContent>

          {/* Nova aba Gemma */}
          <TabsContent value="gemma" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ModelDetailsCard
                title="Gemma 3"
                description="Modelo de última geração do Google"
                badge={{ 
                  text: "Google", 
                  className: "bg-red-100 text-red-700" 
                }}
                icon={<Brain className="text-red-600 h-6 w-6" />}
                headerColor="bg-gradient-to-r from-red-500 to-red-700"
                details={
                  <div className="space-y-4">
                    <p className="text-sm text-gray-700">
                      Modelo de linguagem de última geração do Google, com desempenho excepcional 
                      em raciocínio, compreensão de contexto e tarefas multimodais.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-red-50 p-2 rounded">
                        <span className="text-xs font-medium text-red-700">Variantes:</span>
                        <ul className="text-xs list-disc pl-4 mt-1 space-y-1">
                          <li>Gemma 3 9B</li>
                          <li>Gemma 3 27B</li>
                          <li>Gemma 3 Ultra 36B</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 p-2 rounded">
                        <span className="text-xs font-medium text-red-700">Contexto:</span>
                        <p className="text-xs">Até 128K tokens</p>
                      </div>
                    </div>
                  </div>
                }
              />

              <ModelDetailsCard
                title="Gemma 2"
                description="Modelo versátil e eficiente do Google"
                badge={{ 
                  text: "Eficiente", 
                  className: "bg-orange-100 text-orange-700" 
                }}
                icon={<Bot className="text-orange-600 h-6 w-6" />}
                headerColor="bg-gradient-to-r from-orange-500 to-orange-700"
                details={
                  <div className="space-y-4">
                    <p className="text-sm text-gray-700">
                      Versão leve e versátil do modelo Gemma, projetada para eficiência e facilidade
                      de implantação em diversos ambientes computacionais.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-orange-50 p-2 rounded">
                        <span className="text-xs font-medium text-orange-700">Variantes:</span>
                        <ul className="text-xs list-disc pl-4 mt-1 space-y-1">
                          <li>Gemma 2 2B</li>
                          <li>Gemma 2 7B</li>
                          <li>Gemma 2 270M</li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 p-2 rounded">
                        <span className="text-xs font-medium text-orange-700">Contexto:</span>
                        <p className="text-xs">Até 8K tokens</p>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </TabsContent>

          <TabsContent value="deepseek" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ModelDetailsCard
                title="DeepSeek-V2"
                description="Modelo avançado para pesquisa e raciocínio"
                badge={{ 
                  text: "Alto desempenho", 
                  className: "bg-indigo-100 text-indigo-700" 
                }}
                icon={<Sparkles className="text-indigo-600 h-6 w-6" />}
                headerColor="bg-gradient-to-r from-indigo-500 to-indigo-700"
                details={
                  <div className="space-y-4">
                    <p className="text-sm text-gray-700">
                      Modelo de última geração com arquitetura MoE (Mistura de Especialistas) 
                      focado em pesquisa científica, programação e raciocínio matemático avançado.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-indigo-50 p-2 rounded">
                        <span className="text-xs font-medium text-indigo-700">Parâmetros:</span>
                        <p className="text-xs">236B (MoE)</p>
                      </div>
                      <div className="bg-indigo-50 p-2 rounded">
                        <span className="text-xs font-medium text-indigo-700">Contexto:</span>
                        <p className="text-xs">128K tokens</p>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default ModelsDialog;
