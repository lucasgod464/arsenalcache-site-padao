
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ModelDetailsCard from "./ModelDetailsCard";
import { Brain, BookOpen, Sparkles, Bot, Cpu, Code } from "lucide-react";

interface ModelsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ModelsDialog = ({ open, onOpenChange }: ModelsDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Modelos de IA Disponíveis
          </DialogTitle>
          <DialogDescription className="text-center">
            Confira nossa lista completa de modelos de IA disponíveis na plataforma.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Llama 4 */}
          <ModelDetailsCard 
            title="Llama 4"
            description="O mais avançado modelo da Meta"
            badge={{ text: "Meta", className: "bg-blue-100 text-blue-700" }}
            icon={<Brain className="text-blue-600 h-6 w-6" />}
            headerColor="bg-gradient-to-r from-blue-500 to-blue-700"
            details={
              <div className="space-y-3">
                <p className="text-sm">O Llama 4 é o modelo de linguagem mais recente da Meta, com capacidades multimodais aprimoradas e desempenho excepcional em tarefas de processamento de linguagem natural.</p>
                <div className="space-y-1 text-sm">
                  <p className="font-medium">Especificações:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>8B a 405B parâmetros</li>
                    <li>Suporte multimodal completo (texto, imagem)</li>
                    <li>128K tokens de contexto</li>
                    <li>Performance de nível empresarial</li>
                    <li>Baixa latência e alta eficiência</li>
                  </ul>
                </div>
              </div>
            }
          />

          {/* Llama 3.3 */}
          <ModelDetailsCard 
            title="Llama 3.3"
            description="Geração anterior do modelo da Meta"
            badge={{ text: "Meta", className: "bg-blue-100 text-blue-700" }}
            icon={<Brain className="text-blue-600 h-6 w-6" />}
            headerColor="bg-gradient-to-r from-blue-400 to-blue-600"
            details={
              <div className="space-y-3">
                <p className="text-sm">O Llama 3.3 oferece um excelente equilíbrio entre desempenho e eficiência, sendo ideal para implementações onde o custo computacional é um fator importante.</p>
                <div className="space-y-1 text-sm">
                  <p className="font-medium">Especificações:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>8B a 70B parâmetros</li>
                    <li>Processamento de texto avançado</li>
                    <li>32K tokens de contexto</li>
                    <li>Eficiência energética melhorada</li>
                    <li>Modelo de código aberto</li>
                  </ul>
                </div>
              </div>
            }
          />

          {/* Gemma 3 */}
          <ModelDetailsCard 
            title="Gemma 3"
            description="Modelo avançado do Google"
            badge={{ text: "Google", className: "bg-red-100 text-red-700" }}
            icon={<Bot className="text-red-600 h-6 w-6" />}
            headerColor="bg-gradient-to-r from-red-500 to-red-700"
            details={
              <div className="space-y-3">
                <p className="text-sm">O Gemma 3 representa a mais recente inovação do Google em modelos de IA compactos e eficientes, com excelente desempenho em diversas tarefas.</p>
                <div className="space-y-1 text-sm">
                  <p className="font-medium">Especificações:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>9B a 36B parâmetros</li>
                    <li>Processamento de texto e imagem</li>
                    <li>128K tokens de contexto</li>
                    <li>Alta eficiência computacional</li>
                    <li>Baixa latência em dispositivos</li>
                  </ul>
                </div>
              </div>
            }
          />

          {/* Gemma 2 */}
          <ModelDetailsCard 
            title="Gemma 2"
            description="Modelo compacto e eficiente do Google"
            badge={{ text: "Google", className: "bg-red-100 text-red-700" }}
            icon={<Bot className="text-red-600 h-6 w-6" />}
            headerColor="bg-gradient-to-r from-red-400 to-red-600"
            details={
              <div className="space-y-3">
                <p className="text-sm">O Gemma 2 é um modelo leve do Google, projetado para execução eficiente em diversos dispositivos, incluindo computadores pessoais e dispositivos móveis.</p>
                <div className="space-y-1 text-sm">
                  <p className="font-medium">Especificações:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>2B a 7B parâmetros</li>
                    <li>Otimizado para processamento de texto</li>
                    <li>8K tokens de contexto</li>
                    <li>Excelente para dispositivos com recursos limitados</li>
                    <li>Modelo de código aberto</li>
                  </ul>
                </div>
              </div>
            }
          />

          {/* Qwen 3 */}
          <ModelDetailsCard 
            title="Qwen 3"
            description="Modelo avançado da Alibaba"
            badge={{ text: "Alibaba", className: "bg-green-100 text-green-700" }}
            icon={<Cpu className="text-green-600 h-6 w-6" />}
            headerColor="bg-gradient-to-r from-green-500 to-green-700"
            details={
              <div className="space-y-3">
                <p className="text-sm">O Qwen 3 é um modelo multimodal de última geração da Alibaba, com excelente desempenho em tarefas multilíngues e processamento de dados.</p>
                <div className="space-y-1 text-sm">
                  <p className="font-medium">Especificações:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>7B a 72B parâmetros</li>
                    <li>Capacidades multimodais avançadas</li>
                    <li>Até 128K tokens de contexto</li>
                    <li>Forte em análise de dados</li>
                    <li>Suporte avançado para chinês e inglês</li>
                  </ul>
                </div>
              </div>
            }
          />

          {/* Qwen 2.5 */}
          <ModelDetailsCard 
            title="Qwen 2.5"
            description="Modelo equilibrado da Alibaba"
            badge={{ text: "Alibaba", className: "bg-green-100 text-green-700" }}
            icon={<Cpu className="text-green-600 h-6 w-6" />}
            headerColor="bg-gradient-to-r from-green-400 to-green-600"
            details={
              <div className="space-y-3">
                <p className="text-sm">O Qwen 2.5 oferece um equilíbrio entre eficiência e desempenho, ideal para aplicativos empresariais que precisam de processamento de linguagem robusto.</p>
                <div className="space-y-1 text-sm">
                  <p className="font-medium">Especificações:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>7B a 14B parâmetros</li>
                    <li>Processamento eficiente de texto</li>
                    <li>32K tokens de contexto</li>
                    <li>Otimizado para eficiência energética</li>
                    <li>Bom suporte multilíngue</li>
                  </ul>
                </div>
              </div>
            }
          />

          {/* DeepSeek-RI */}
          <ModelDetailsCard 
            title="DeepSeek-RI"
            description="Especialista em recuperação de informações"
            badge={{ text: "DeepSeek", className: "bg-purple-100 text-purple-700" }}
            icon={<BookOpen className="text-purple-600 h-6 w-6" />}
            headerColor="bg-gradient-to-r from-purple-500 to-purple-700"
            details={
              <div className="space-y-3">
                <p className="text-sm">O DeepSeek-RI é especializado em recuperação de informações, ideal para sistemas RAG (Retrieval-Augmented Generation) e pesquisa avançada.</p>
                <div className="space-y-1 text-sm">
                  <p className="font-medium">Especificações:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Especializado em embedding e recuperação</li>
                    <li>Alta precisão em consultas complexas</li>
                    <li>Capacidade semântica avançada</li>
                    <li>Otimizado para bases de conhecimento extensas</li>
                    <li>Excelente para aplicações empresariais</li>
                  </ul>
                </div>
              </div>
            }
          />

          {/* DeepSeek-V3 */}
          <ModelDetailsCard 
            title="DeepSeek-V3"
            description="Modelo avançado para pesquisa"
            badge={{ text: "DeepSeek", className: "bg-purple-100 text-purple-700" }}
            icon={<BookOpen className="text-purple-600 h-6 w-6" />}
            headerColor="bg-gradient-to-r from-purple-400 to-purple-600"
            details={
              <div className="space-y-3">
                <p className="text-sm">O DeepSeek-V3 é um modelo avançado para pesquisa e raciocínio, com capacidades excepcionais em matemática, programação e conhecimento científico.</p>
                <div className="space-y-1 text-sm">
                  <p className="font-medium">Especificações:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>236B parâmetros (MoE)</li>
                    <li>Até 128K tokens de contexto</li>
                    <li>Especialista em pesquisa científica</li>
                    <li>Excelente em programação e matemática</li>
                    <li>Capacidade avançada de raciocínio</li>
                  </ul>
                </div>
              </div>
            }
          />

          {/* Phi-4 */}
          <ModelDetailsCard 
            title="Phi-4"
            description="Modelo compacto e eficiente da Microsoft"
            badge={{ text: "Microsoft", className: "bg-blue-100 text-blue-700" }}
            icon={<Code className="text-blue-600 h-6 w-6" />}
            headerColor="bg-gradient-to-r from-blue-500 to-blue-700"
            details={
              <div className="space-y-3">
                <p className="text-sm">O Phi-4 é um modelo pequeno da Microsoft que oferece desempenho impressionante para seu tamanho, ideal para aplicações que exigem baixa latência.</p>
                <div className="space-y-1 text-sm">
                  <p className="font-medium">Especificações:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>4B a 28B parâmetros</li>
                    <li>Alta eficiência computacional</li>
                    <li>Processamento de texto rápido</li>
                    <li>Excelente geração de código</li>
                    <li>Treinado com dados de alta qualidade</li>
                  </ul>
                </div>
              </div>
            }
          />

          {/* Phi-3 */}
          <ModelDetailsCard 
            title="Phi-3"
            description="Modelo compacto com grande capacidade"
            badge={{ text: "Microsoft", className: "bg-blue-100 text-blue-700" }}
            icon={<Code className="text-blue-600 h-6 w-6" />}
            headerColor="bg-gradient-to-r from-blue-400 to-blue-600"
            details={
              <div className="space-y-3">
                <p className="text-sm">O Phi-3 representa o equilíbrio entre tamanho e capacidade, oferecendo excelente desempenho em hardware comum e dispositivos móveis.</p>
                <div className="space-y-1 text-sm">
                  <p className="font-medium">Especificações:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>3.8B a 14B parâmetros</li>
                    <li>Baixo consumo de recursos</li>
                    <li>Processamento eficiente de texto</li>
                    <li>Bom desempenho em programação</li>
                    <li>Modelo de código aberto</li>
                  </ul>
                </div>
              </div>
            }
          />

          {/* Mistral */}
          <ModelDetailsCard 
            title="Mistral"
            description="Modelo europeu de alto desempenho"
            badge={{ text: "Mistral AI", className: "bg-indigo-100 text-indigo-700" }}
            icon={<Sparkles className="text-indigo-600 h-6 w-6" />}
            headerColor="bg-gradient-to-r from-indigo-500 to-indigo-700"
            details={
              <div className="space-y-3">
                <p className="text-sm">O Mistral é um modelo europeu avançado que oferece desempenho excepcional em tarefas de compreensão e geração de linguagem, com forte suporte para línguas europeias.</p>
                <div className="space-y-1 text-sm">
                  <p className="font-medium">Especificações:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>8B a 22B parâmetros</li>
                    <li>Domínio em várias línguas europeias</li>
                    <li>128K tokens de contexto</li>
                    <li>Excelente raciocínio lógico</li>
                    <li>Alta velocidade de inferência</li>
                  </ul>
                </div>
              </div>
            }
          />

          {/* Mistral-Small */}
          <ModelDetailsCard 
            title="Mistral-Small"
            description="Modelo compacto com alto desempenho"
            badge={{ text: "Mistral AI", className: "bg-indigo-100 text-indigo-700" }}
            icon={<Sparkles className="text-indigo-600 h-6 w-6" />}
            headerColor="bg-gradient-to-r from-indigo-400 to-indigo-600"
            details={
              <div className="space-y-3">
                <p className="text-sm">O Mistral-Small oferece um equilíbrio ideal entre tamanho, velocidade e qualidade, adequado para implantações que exigem resposta rápida com qualidade.</p>
                <div className="space-y-1 text-sm">
                  <p className="font-medium">Especificações:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>7B parâmetros</li>
                    <li>Contexto de até 32K tokens</li>
                    <li>Excelente para dispositivos com recursos limitados</li>
                    <li>Bom desempenho multilíngue</li>
                    <li>Baixa latência de resposta</li>
                  </ul>
                </div>
              </div>
            }
          />

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModelsDialog;
