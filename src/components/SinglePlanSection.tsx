import React from 'react';
import { Check, Shield, Clock, TrendingUp, MessageCircle, Users, Building, HeadphonesIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SinglePlanSection = () => {
  return (
    <section id="precos" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="bg-blue-600 text-white border-blue-500 mb-4">
            Plano Único
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-blue-600">Whaticket Pro</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Solução completa com tudo que você precisa para automatizar seu atendimento
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Preço Principal */}
          <div className="text-center mb-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="mb-6">
                <div className="text-4xl md:text-5xl font-bold text-gray-900">
                  R$ 495,90
                </div>
                <div className="text-lg text-gray-600 mt-2">
                  Pagamento anual
                </div>
              </div>
            </div>
          </div>

          {/* Conexões Já Incluídas */}
          <Card className="mb-6 border-green-200 bg-green-50">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-green-700">
                <Check className="h-5 w-5" />
                Conexões Já Incluídas no Plano:
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <div className="font-medium text-gray-900">WhatsApp ilimitado</div>
                    <div className="text-sm text-gray-600">API WhatsApp oficial</div>
                  </div>
                </div>
                <div className="text-sm text-gray-700 pl-8">
                  ✨ Conecte quantos números WhatsApp quiser sem custo adicional
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conexões Adicionais */}
          <Card className="mb-6 border-blue-200 bg-blue-50">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <TrendingUp className="h-5 w-5" />
                Conexões Adicionais (Opcionais)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-sm text-gray-700 mb-4">
                Ative Instagram e Facebook para expandir seu atendimento:
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2 p-3 bg-white rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">IG</span>
                  </div>
                  <span className="text-sm font-medium">Instagram (ilimitado)</span>
                </div>
                
                <div className="flex items-center gap-2 p-3 bg-white rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">FB</span>
                  </div>
                  <span className="text-sm font-medium">Facebook (ilimitado)</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border-2 border-blue-300 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">R$ 260,00/mês</div>
                <div className="text-sm text-gray-600">Conexões ilimitadas de Instagram e Facebook</div>
              </div>
            </CardContent>
          </Card>

          {/* Recursos Ilimitados */}
          <Card className="mb-6 border-gray-200 bg-gray-50">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-gray-700">
                <Users className="h-5 w-5" />
                Recursos Ilimitados
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-600" />
                  <span className="text-sm">Usuários ilimitados</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-gray-600" />
                  <span className="text-sm">Departamentos</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeadphonesIcon className="h-4 w-4 text-gray-600" />
                  <span className="text-sm">Atendimentos simultâneos</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-gray-600" />
                  <span className="text-sm">Mensagens por mês</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Garantias */}
          <Card className="mb-8 border-green-200 bg-green-50">
            <CardContent className="pt-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Shield className="h-8 w-8 text-green-600 mb-2" />
                  <div className="font-semibold text-green-700">Garantia</div>
                  <div className="text-sm text-green-600">30 dias</div>
                </div>
                <div className="flex flex-col items-center">
                  <Clock className="h-8 w-8 text-green-600 mb-2" />
                  <div className="font-semibold text-green-700">Ativação</div>
                  <div className="text-sm text-green-600">24 horas</div>
                </div>
                <div className="flex flex-col items-center">
                  <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
                  <div className="font-semibold text-green-700">Uptime</div>
                  <div className="text-sm text-green-600">99,9%</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="https://wa.me/5512981156856?text=Olá,%20gostaria%20de%20contratar%20o%20Whaticket%20Pro%20por%20R$495,90%20anual." target="_blank" rel="noopener noreferrer">
                🚀 QUERO COMEÇAR AGORA
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePlanSection;