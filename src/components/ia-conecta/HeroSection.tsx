
import React, { useState, useEffect } from "react";
import { ArrowRight, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

const HeroSection = () => {
  const { toast } = useToast();
  const [webhookConfig, setWebhookConfig] = useState({
    url: '',
    enabled: false
  });

  // Carregar configurações de webhook
  useEffect(() => {
    const savedConfig = localStorage.getItem('webhookConfig');
    if (savedConfig) {
      try {
        const parsedConfig = JSON.parse(savedConfig);
        setWebhookConfig({
          url: parsedConfig.iaConectaWebhookUrl || '',
          enabled: parsedConfig.iaConectaWebhookEnabled || false
        });
      } catch (e) {
        console.error("Erro ao carregar configurações de webhook:", e);
      }
    }
  }, []);

  // Adicionando a função para rolar até a seção de planos
  const scrollToPlansSection = () => {
    const plansSection = document.getElementById('plans-section');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Função para enviar dados via webhook quando o usuário clicar para agendar demonstração
  const handleDemoRequest = async () => {
    const webhookUrl = webhookConfig.enabled && webhookConfig.url
      ? webhookConfig.url
      : "https://construtor.yuccie.pro/webhook-test/0eec6c59-6fea-4e97-adfd-aa57e8745b4f";
    
    try {
      // Enviar dados para o webhook
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          action: "hero_demo_request",
          timestamp: new Date().toISOString(),
          source: "ia-conecta-hero-section"
        }),
      });
      
      console.log("Solicitação de demonstração da seção hero enviada com sucesso!");
      
      toast({
        title: "Redirecionando para WhatsApp",
        description: "Você será redirecionado para iniciar uma conversa no WhatsApp.",
        variant: "default",
      });
    } catch (error) {
      console.error("Erro ao enviar solicitação:", error);
    }
  };

  return (
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
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-lg py-6"
                onClick={() => {
                  handleDemoRequest();
                  window.open("https://wa.me/5512981156856?text=Olá,%20tenho%20interesse%20no%20IA%20Conecta%20e%20gostaria%20de%20agendar%20uma%20demonstração", "_blank");
                }}
              >
                Agendar demonstração <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-400 text-purple-700 hover:bg-purple-50 py-6"
                onClick={scrollToPlansSection}
              >
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
  );
};

export default HeroSection;
