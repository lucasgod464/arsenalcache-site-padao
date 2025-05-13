
import React from "react";
import { Brain, BookOpen, Sparkles, Grid3x3, Bot, Bar, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ModelCard from "./ModelCard";

interface ModelsSectionProps {
  onShowAllModels: () => void;
}

const ModelsSection = ({ onShowAllModels }: ModelsSectionProps) => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-white to-purple-50">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Llama 4 Card */}
          <ModelCard
            title="Llama 4"
            description="O mais avançado modelo de IA da Meta"
            badge="Meta"
            badgeColor="from-blue-500 to-blue-700"
            icon={<Brain className="text-blue-600 h-6 w-6" />}
            features={[
              "8B a 405B parâmetros (versões variadas)",
              "Suporte multimodal completo",
              "128K tokens de contexto",
              "Performance de nível empresarial"
            ]}
          />

          {/* Gemma 3 Card */}
          <ModelCard
            title="Gemma 3"
            description="Modelo de última geração do Google"
            badge="Google"
            badgeColor="from-red-500 to-red-700"
            icon={<Bot className="text-red-600 h-6 w-6" />}
            features={[
              "9B a 36B parâmetros",
              "Processamento de texto e imagem",
              "Até 128K tokens de contexto",
              "Excelente em raciocínio e compreensão"
            ]}
          />

          {/* Gemma 2 Card */}
          <ModelCard
            title="Gemma 2"
            description="Eficiente e acessível da família Google"
            badge="Google"
            badgeColor="from-red-600 to-orange-500"
            icon={<TrendingUp className="text-orange-600 h-6 w-6" />}
            features={[
              "2B a 27B parâmetros",
              "Processamento de texto eficiente",
              "32K tokens de contexto",
              "Ótima relação custo-desempenho"
            ]}
          />

          {/* Deepseek Card */}
          <ModelCard
            title="DeepSeek-V2"
            description="Modelo avançado para pesquisa e raciocínio"
            badge="Versátil"
            badgeColor="from-indigo-500 to-indigo-700"
            icon={<BookOpen className="text-indigo-600 h-6 w-6" />}
            features={[
              "236B parâmetros (MoE)",
              "Até 128K tokens de contexto",
              "Especialista em pesquisa científica",
              "Excelente em programação e matemática"
            ]}
          />
        </div>

        <div className="mt-16 text-center">
          <Button 
            className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white py-6 px-10 rounded-lg shadow-lg transform transition hover:scale-105"
            onClick={onShowAllModels}
          >
            Explorar todos os modelos <Grid3x3 className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
