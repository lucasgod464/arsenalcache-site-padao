
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Zap,
  Star,
  MessageCircle,
  Shield,
  Clock
} from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const LeadsPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
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
          url: parsedConfig.leadsWebhookUrl || '',
          enabled: parsedConfig.leadsWebhookEnabled || false
        });
      } catch (e) {
        console.error("Erro ao carregar configurações de webhook:", e);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      timestamp: new Date().toISOString(),
      source: "golden-leads-page",
      system: "golden-leads"
    };

    try {
      const webhookUrl = webhookConfig.enabled && webhookConfig.url
        ? webhookConfig.url
        : "https://construtor.yuccie.pro/webhook-test/0eec6c59-6fea-4e97-adfd-aa57e8745b4f";

      // Enviar dados para o webhook
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(data),
      });

      console.log("Dados enviados com sucesso para o webhook:", data);
      
      toast({
        title: "Solicitação enviada!",
        description: "Entraremos em contato com você em até 24 horas.",
        variant: "default",
      });

      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      toast({
        title: "Erro ao enviar solicitação",
        description: "Tente novamente em alguns minutos.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 text-sm mb-6">
              🚀 Sistema Exclusivo Golden Leads
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Golden Leads
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              O sistema mais avançado de geração e qualificação de leads do mercado. 
              Transforme visitantes em clientes de forma automatizada e inteligente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-lg shadow-lg"
                onClick={() => {
                  const formSection = document.getElementById('demo-form');
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Target className="mr-2 h-5 w-5" />
                Solicitar Demonstração
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-amber-500 text-amber-600 hover:bg-amber-50 px-8 py-6 text-lg"
                asChild
              >
                <a href="https://wa.me/5512981156856?text=Olá, gostaria de saber mais sobre o Golden Leads" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher o <span className="text-amber-600">Golden Leads</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma solução completa que combina inteligência artificial, automação avançada e analytics em tempo real
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-amber-700">Captura Inteligente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Identifique e capture leads qualificados automaticamente com nossa IA avançada que analisa comportamento e intenção de compra.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-orange-700">Qualificação Automática</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sistema de scoring avançado que qualifica leads em tempo real, priorizando aqueles com maior potencial de conversão.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="bg-gradient-to-r from-red-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-red-700">Analytics Avançado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Dashboards completos com métricas detalhadas, ROI em tempo real e insights acionáveis para otimizar suas campanhas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-purple-700">Integração Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Conecta-se perfeitamente com WhatsApp, CRM, e-mail marketing, redes sociais e mais de 200 ferramentas do mercado.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="bg-gradient-to-r from-green-500 to-teal-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-green-700">Automação 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Trabalha continuamente, capturando e nutrindo leads mesmo quando você não está online, maximizando suas oportunidades.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-blue-700">Suporte Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Equipe dedicada de especialistas para implementação, treinamento e suporte contínuo para garantir seu sucesso.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Resultados que você pode <span className="text-amber-600">esperar</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Aumento de 300% na geração de leads</h3>
                  <p className="text-gray-600">Capture mais prospects qualificados com nossa tecnologia avançada</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Redução de 70% no tempo de qualificação</h3>
                  <p className="text-gray-600">Automatize o processo e foque apenas nos leads com maior potencial</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">ROI de até 800% em 90 dias</h3>
                  <p className="text-gray-600">Investimento que se paga rapidamente com resultados mensuráveis</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementação em menos de 48h</h3>
                  <p className="text-gray-600">Comece a ver resultados imediatamente com nossa instalação express</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="bg-white p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Target className="h-12 w-12 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Case de Sucesso</h3>
                <p className="text-gray-700 mb-4">
                  "Em apenas 60 dias, aumentamos nossa geração de leads em 450% e melhoramos nossa taxa de conversão em 80%. 
                  O Golden Leads transformou completamente nosso funil de vendas."
                </p>
                <p className="text-amber-600 font-semibold">
                  - CEO, Empresa de Marketing Digital
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Form Section */}
      <div id="demo-form" className="py-16 px-4 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Solicite uma Demonstração Gratuita
            </h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Veja o Golden Leads em ação e descubra como ele pode transformar seus resultados
            </p>
          </div>

          <Card className="shadow-2xl border-0">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Agende sua demonstração personalizada</CardTitle>
              <CardDescription className="text-center text-lg">
                Preencha os dados abaixo e nossa equipe entrará em contato em até 2 horas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-lg">Nome completo *</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="Seu nome completo"
                      className="h-12 text-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg">E-mail corporativo *</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      placeholder="seu@empresa.com"
                      className="h-12 text-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-lg">WhatsApp *</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      required 
                      placeholder="(11) 99999-9999"
                      className="h-12 text-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-lg">Empresa *</Label>
                    <Input 
                      id="company" 
                      name="company" 
                      required 
                      placeholder="Nome da sua empresa"
                      className="h-12 text-lg"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-lg py-6 shadow-lg" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Solicitar Demonstração Gratuita"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LeadsPage;
