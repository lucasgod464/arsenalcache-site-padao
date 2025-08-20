import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageSquare, 
  Users, 
  RefreshCw, 
  Shield, 
  LayoutGrid, 
  Check, 
  ArrowRight,
  Bot,
  Zap,
  TrendingUp,
  Clock,
  Star,
  BarChart3,
  Rocket,
  Target,
  DollarSign,
  Headphones
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  benefits?: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  color,
  benefits
}) => {
  return (
    <Card className="group bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
      <CardContent className="p-8">
        <div className="flex flex-col items-center text-center">
          <div className={`${color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mb-4 group-hover:w-16 transition-all duration-300"></div>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {description}
          </p>
          {benefits && (
            <div className="space-y-2 w-full">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-green-600">
                  <Check className="h-4 w-4 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const TransformeSection = () => {
  const [stats, setStats] = useState({
    automatedChats: 12450,
    savedHours: 8760,
    responseTime: 98
  });

  // Contador dinâmico de estatísticas
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        automatedChats: prev.automatedChats + Math.floor(Math.random() * 5),
        savedHours: prev.savedHours + Math.floor(Math.random() * 3),
        responseTime: Math.min(99, prev.responseTime + (Math.random() > 0.8 ? 1 : 0))
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: "IA Inteligente Integrada",
      description: "Sistema com inteligência artificial que aprende com cada interação, oferecendo respostas cada vez mais precisas e personalizadas.",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      benefits: ["Respostas automáticas inteligentes", "Aprendizado contínuo", "Integração com ChatGPT"]
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Automação Completa",
      description: "Automatize todo fluxo de atendimento: desde a primeira mensagem até o fechamento da venda, incluindo follow-ups automáticos.",
      color: "bg-gradient-to-br from-yellow-500 to-orange-500",
      benefits: ["Fluxos personalizáveis", "Respostas automáticas", "Follow-ups inteligentes"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Analytics Avançado",
      description: "Dashboards completos com métricas em tempo real: conversões, tempo de resposta, performance da equipe e muito mais.",
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
      benefits: ["Relatórios detalhados", "Métricas em tempo real", "ROI calculado automaticamente"]
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Gestão de Equipe",
      description: "Gerencie toda sua equipe de atendimento com distribuição inteligente de conversas e controle de performance individual.",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
      benefits: ["Distribuição automática", "Controle de performance", "Hierarquia personalizada"]
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Segurança Empresarial",
      description: "Ambiente 100% seguro com criptografia de ponta, backups automáticos e compliance com LGPD para proteger seus dados.",
      color: "bg-gradient-to-br from-red-500 to-pink-500",
      benefits: ["Criptografia completa", "Backups automáticos", "Compliance LGPD"]
    },
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: "Escalabilidade Infinita",
      description: "Sistema preparado para crescer junto com seu negócio: desde startups até grandes corporações, sem limite de usuários.",
      color: "bg-gradient-to-br from-indigo-500 to-purple-500",
      benefits: ["Sem limite de usuários", "Infraestrutura robusta", "Crescimento ilimitado"]
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-blue-25 to-indigo-50">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-200 opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-200 opacity-20 blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-green-200 opacity-15 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 hover:from-blue-200 hover:to-indigo-200 px-6 py-2 text-sm mb-6 font-semibold border-0">
            🚀 Transformação Digital Completa
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
            Transforme seu Atendimento em uma
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
              Máquina de Vendas
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Revolucione a forma como sua empresa se comunica com clientes. Automação inteligente, 
            resultados extraordinários e crescimento exponencial garantido.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <div className="text-3xl font-bold mb-2">{stats.automatedChats.toLocaleString('pt-BR')}+</div>
              <div className="text-blue-100">Conversas Automatizadas</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <Clock className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <div className="text-3xl font-bold mb-2">{stats.savedHours.toLocaleString('pt-BR')}h</div>
              <div className="text-green-100">Horas Economizadas</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <Target className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <div className="text-3xl font-bold mb-2">{stats.responseTime}%</div>
              <div className="text-purple-100">Taxa de Conversão</div>
            </CardContent>
          </Card>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="transform hover:scale-105 transition-all duration-300">
              <FeatureCard 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
                color={feature.color}
                benefits={feature.benefits}
              />
            </div>
          ))}
        </div>

        {/* Before/After Comparison */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Antes vs. Depois do Whaticket Pro
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Antes */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-3">
                ❌ Antes (Atendimento Manual)
              </h4>
              <div className="space-y-4">
                {[
                  "Tempo de resposta de 30+ minutos",
                  "Perda de leads por demora",
                  "Equipe sobrecarregada",
                  "Custos altos com funcionários",
                  "Atendimento limitado ao horário comercial",
                  "Dificuldade para escalar o negócio"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Depois */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-3">
                ✅ Depois (Com Whaticket Pro)
              </h4>
              <div className="space-y-4">
                {[
                  "Resposta instantânea 24/7",
                  "100% dos leads capturados",
                  "Equipe focada em vendas",
                  "Redução de 70% nos custos",
                  "Atendimento automatizado sempre ativo",
                  "Crescimento ilimitado e escalável"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Revolucionar seu Atendimento?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 1.200+ empresas que já transformaram seus resultados com o Whaticket Pro
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            onClick={() => document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Rocket className="mr-2 h-5 w-5" />
            Ver Planos e Preços
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TransformeSection;