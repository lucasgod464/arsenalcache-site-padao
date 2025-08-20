import React from 'react';
import { Check, Shield, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SinglePlanCard = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-md mx-auto space-y-4">
      {/* Conexões Incluídas */}
      <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            <CardTitle className="text-lg">Conexões Já Incluídas no Plano:</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white" />
              <span className="text-sm">Sistema Completo Whaticket</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white" />
              <span className="text-sm">Instalação Profissional</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white" />
              <span className="text-sm">Atualizações Automáticas</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white" />
              <span className="text-sm">Monitoramento IA 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white" />
              <span className="text-sm">Suporte Especializado</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white" />
              <span className="text-sm">Sistema Whitelabel</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-green-400/30">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span className="font-medium">WhatsApp ilimitado</span>
              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                📱 API WhatsApp oficial
              </Badge>
            </div>
            <p className="text-sm text-green-100 flex items-center gap-1 mt-2">
              <Check className="w-4 h-4" />
              Conecte quantos números WhatsApp quiser sem custo adicional
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Conexões Adicionais */}
      <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-orange-400 rounded flex items-center justify-center">
              <span className="text-xs text-white">+</span>
            </div>
            <CardTitle className="text-lg">Conexões Adicionais (Opcionais)</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-blue-100">
            Ative Instagram e Facebook para expandir seu atendimento:
          </p>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-blue-400/30 text-white border-0">
                📷 Instagram (ilimitado)
              </Badge>
              <Badge variant="secondary" className="bg-blue-400/30 text-white border-0">
                📘 Facebook (ilimitado)
              </Badge>
            </div>
          </div>
          <div className="text-center py-4 bg-blue-400/20 rounded-lg">
            <div className="text-2xl font-bold">R$ 260,00/mês</div>
            <div className="text-sm text-blue-100">Conexões ilimitadas de Instagram e Facebook</div>
          </div>
          <div className="mt-4 p-3 bg-green-100 rounded-lg border border-green-200">
            <div className="text-center">
              <div className="text-lg font-bold text-green-800">Plano Anual: R$ 495,90</div>
              <div className="text-sm text-green-600">Whaticket Pro - Economia garantida</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recursos Ilimitados */}
      <Card className="bg-gray-50 border border-gray-200">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
              <span className="text-xs text-white">∞</span>
            </div>
            <CardTitle className="text-lg text-gray-800">Recursos Ilimitados</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-gray-500" />
              <span>Usuários ilimitados</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-gray-500" />
              <span>Atendimentos simultâneos</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-gray-500" />
              <span>Departamentos</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-gray-500" />
              <span>Mensagens por mês</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Garantias */}
      <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
        <CardContent className="py-4">
          <div className="flex items-center justify-between text-center">
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-8 h-8" />
              <div className="text-sm font-semibold">Garantia</div>
              <div className="text-xs text-green-100">30 dias</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Clock className="w-8 h-8" />
              <div className="text-sm font-semibold">Ativação</div>
              <div className="text-xs text-green-100">24 horas</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <TrendingUp className="w-8 h-8" />
              <div className="text-sm font-semibold">Uptime</div>
              <div className="text-xs text-green-100">99.9%</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA Button */}
      <Button 
        onClick={() => scrollToSection('contato')}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 text-lg border-0"
      >
        🚀 QUERO COMEÇAR AGORA
      </Button>
    </div>
  );
};

export default SinglePlanCard;