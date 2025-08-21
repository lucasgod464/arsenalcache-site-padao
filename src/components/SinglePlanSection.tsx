import React, { useState, useEffect } from 'react';
import { 
  Check, 
  Shield, 
  Clock, 
  TrendingUp, 
  MessageCircle, 
  Users, 
  Building, 
  HeadphonesIcon,
  Smartphone,
  Globe,
  Star,
  Zap,
  Settings,
  PhoneCall,
  Mail,
  Bot,
  Palette,
  DollarSign,
  CreditCard,
  Crown,
  Quote
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import VpsPricingSection from './VpsPricingSection';

const SinglePlanSection = () => {
  const [clientCount, setClientCount] = useState(1247);

  // Contador dinâmico de clientes
  useEffect(() => {
    const interval = setInterval(() => {
      setClientCount(prev => prev + Math.floor(Math.random() * 3));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "TechSolutions",
      role: "CEO",
      content: "Reduzi 80% do tempo de resposta e aumentei as vendas em 150%. O ROI foi alcançado em apenas 2 meses!",
      rating: 5,
      savings: "R$ 2.800/mês",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Ana Costa",
      company: "Digital Marketing Pro",
      role: "Diretora",
      content: "Automatizamos 90% dos atendimentos iniciais. Nossa equipe agora foca apenas em vendas qualificadas.",
      rating: 5,
      savings: "R$ 3.200/mês",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b4c0?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Roberto Lima",
      company: "E-commerce Plus",
      role: "Fundador",
      content: "Sistema pagou por si só em 45 dias. Agora gerencio 500+ conversas simultâneas sem esforço.",
      rating: 5,
      savings: "R$ 1.850/mês",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Mariana Santos",
      company: "Consultoria MS",
      role: "Sócia",
      content: "Consegui automatizar todo meu atendimento inicial. Agora trabalho só com clientes qualificados.",
      rating: 5,
      savings: "R$ 1.400/mês",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "João Ferreira",
      company: "InfoTech",
      role: "Diretor",
      content: "Impressionante como conseguimos atender 3x mais clientes com a mesma equipe. Recomendo!",
      rating: 5,
      savings: "R$ 2.100/mês",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Fernanda Oliveira",
      company: "Beauty Express",
      role: "Proprietária",
      content: "Nunca mais perdi um cliente por demora no atendimento. O sistema responde na hora!",
      rating: 5,
      savings: "R$ 980/mês",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <section id="precos" className="py-12 md:py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-x-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header com Social Proof */}
        <div className="text-center mb-12 md:mb-16 px-2">
          <Badge variant="outline" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 mb-6 px-6 py-2 text-sm font-semibold animate-pulse">
            <Crown className="h-4 w-4 mr-2" />
            + de {clientCount.toLocaleString('pt-BR')} empresas já automatizaram
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Whaticket Pro
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8 px-2">
            A solução mais completa para transformar seu atendimento em uma máquina de vendas automatizada
          </p>
          
          {/* Rating */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4 px-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm md:text-base text-gray-600 text-center">4.9/5 • Baseado em 1,247+ avaliações</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-12 md:mb-16">
          {/* Coluna da Esquerda - Preço e CTA */}
          <div className="lg:col-span-1 order-1 lg:order-1">
            <Card className="lg:sticky lg:top-8 border-2 border-blue-200 shadow-2xl bg-gradient-to-br from-white to-blue-50">
              <CardContent className="p-6 lg:p-8">
                <div className="text-center mb-6 lg:mb-8">
                  <div className="mb-4 lg:mb-6">
                    <Badge className="bg-red-100 text-red-700 px-3 py-1 lg:px-4 lg:py-2 text-xs lg:text-sm font-semibold mb-3 lg:mb-4">
                      🔥 Oferta Limitada - 50% OFF
                    </Badge>
                    <div className="text-xl lg:text-2xl text-gray-400 line-through mb-2">
                      De R$ 997,90
                    </div>
                    <div className="text-4xl lg:text-6xl font-bold text-gray-900 mb-2">
                      R$ 495
                      <span className="text-xl lg:text-2xl text-gray-600">,90</span>
                    </div>
                    <div className="text-base lg:text-lg text-gray-600 mb-3 lg:mb-4">
                      Pagamento anual
                    </div>
                    <div className="bg-green-100 rounded-lg p-3 lg:p-4 mb-4 lg:mb-6">
                      <div className="text-green-800 font-bold text-base lg:text-lg mb-1">
                        6x de R$ 82,65
                      </div>
                      <div className="text-xs lg:text-sm text-green-700">
                        Sem juros no cartão
                      </div>
                    </div>
                    <div className="bg-blue-100 rounded-lg p-3 lg:p-4 mb-4 lg:mb-6">
                      <div className="text-xs lg:text-sm text-blue-800 font-medium">
                        Equivale a apenas R$ 41,32/mês
                      </div>
                      <div className="text-xs text-blue-600 mt-1">
                        Economia de R$ 502,00
                      </div>
                    </div>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 lg:py-4 text-base lg:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 mb-3 lg:mb-4"
                  asChild
                >
                  <a href="https://wa.me/5512981156856?text=Olá,%20gostaria%20de%20contratar%20o%20Whaticket%20Pro%20por%20R$495,90%20(6x%20sem%20juros)." target="_blank" rel="noopener noreferrer">
                    🚀 GARANTIR DESCONTO AGORA
                  </a>
                </Button>

                <div className="text-center text-xs lg:text-sm text-gray-600 space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="h-4 w-4 text-green-600" />
                    Garantia de 30 dias
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    Ativação em 24h
                  </div>
                  <div className="text-xs text-red-600 font-medium">
                    ⏰ Oferta válida por tempo limitado
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coluna Central e Direita - Recursos */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8 order-2 lg:order-2">

            {/* Conexões Já Incluídas */}
            <Card className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-green-700 text-xl">
                  <Check className="h-6 w-6 bg-green-600 text-white rounded-full p-1" />
                  ✅ Conexões Já Incluídas no Plano
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-xl text-gray-900">WhatsApp Ilimitado</div>
                      <div className="text-green-600 font-medium">API oficial do WhatsApp</div>
                    </div>
                  </div>
                  <div className="bg-green-100 rounded-lg p-4">
                    <div className="text-green-800 font-medium text-center">
                      ✨ Conecte quantos números WhatsApp quiser • Zero custo adicional
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conexões Opcionais */}
            <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-700 text-xl">
                  <TrendingUp className="h-6 w-6" />
                  📈 Conexões Adicionais (Opcionais)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-gray-700 mb-4">Expanda seu alcance com Instagram e Facebook:</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-purple-500">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <Smartphone className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">Instagram</div>
                          <div className="text-sm text-gray-600">Conexões ilimitadas</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-blue-600">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                          <Globe className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">Facebook</div>
                          <div className="text-sm text-gray-600">Conexões ilimitadas</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-blue-300 text-center shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">R$ 260,00/mês</div>
                    <div className="text-blue-700 font-medium">Instagram + Facebook Ilimitado</div>
                    <div className="text-sm text-gray-600 mt-2">Opcional • Ative quando precisar</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recursos Incluídos */}
            <Card className="border-gray-200 bg-gradient-to-r from-gray-50 to-slate-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-gray-700 text-xl">
                  <Star className="h-6 w-6 text-yellow-500" />
                  🌟 Tudo Que Está Incluído
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                  <div className="space-y-3 lg:space-y-4">
                    <h4 className="font-bold text-gray-900 flex items-center gap-2">
                      <Users className="h-5 w-5 text-blue-600" />
                      Recursos Ilimitados
                    </h4>
                    <div className="space-y-3 pl-7">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">Usuários ilimitados</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">Departamentos ilimitados</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">Atendimentos simultâneos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">Mensagens por mês</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-900 flex items-center gap-2">
                      <Settings className="h-5 w-5 text-blue-600" />
                      Personalização Total
                    </h4>
                    <div className="space-y-3 pl-7">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">Sua logo no sistema</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">Cores personalizadas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">Nome personalizado</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">White Label completo</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-900 flex items-center gap-2">
                      <HeadphonesIcon className="h-5 w-5 text-blue-600" />
                      Suporte Premium
                    </h4>
                    <div className="space-y-3 pl-7">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">Instalação pela nossa equipe</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">Atualizações automáticas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">Suporte humano especializado</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">Suporte via WhatsApp</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-900 flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-blue-600" />
                      Monetização
                    </h4>
                    <div className="space-y-3 pl-7">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">Revenda de assinaturas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">Clientes ilimitados</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">Múltiplas empresas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">Sistema de cobrança</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* VPS Pricing Section */}
        <VpsPricingSection />

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
            🗣️ O que nossos clientes estão dizendo
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-blue-600">{testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <Quote className="h-5 w-5 text-gray-400 mb-2" />
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-green-700 font-bold">Economia: {testimonial.savings}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Garantias */}
        <Card className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-center text-green-700 mb-6">🛡️ Suas Garantias</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div className="font-bold text-green-700 text-lg">Garantia Total</div>
                <div className="text-green-600 font-medium">30 dias</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <div className="font-bold text-blue-700 text-lg">Ativação Rápida</div>
                <div className="text-blue-600 font-medium">24 horas</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="font-bold text-purple-700 text-lg">Uptime Garantido</div>
                <div className="text-purple-600 font-medium">99,9%</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SinglePlanSection;