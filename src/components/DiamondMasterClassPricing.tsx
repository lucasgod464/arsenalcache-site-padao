
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, Star, Users, Zap } from 'lucide-react';

const DiamondMasterClassPricing = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Escolha Seu Plano de Acesso</h2>
        <p className="text-blue-200 max-w-2xl mx-auto">
          Acesso completo à MasterClass Diamond e todos os recursos para escalar suas conexões de WhatsApp e maximizar seus resultados.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Basic Plan */}
        <Card className="border-2 border-blue-300/20 bg-white/5 backdrop-blur-sm hover:shadow-lg hover:border-blue-300/40 transition-all duration-300">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-xl text-blue-100">Plano Básico</CardTitle>
            <div className="mt-4 flex flex-col items-center">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">R$ 497</span>
                <Badge variant="outline" className="text-blue-300 border-blue-300 ml-2">única vez</Badge>
              </div>
              <CardDescription className="text-blue-300 mt-2">
                Acesso por 12 meses
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                <span>Acesso completo à MasterClass</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                <span>7 módulos de treinamento</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                <span>Material de apoio básico</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                <span>Acesso ao grupo de suporte</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                <span>Acesso por 12 meses</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="pt-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Quero Esse Plano
            </Button>
          </CardFooter>
        </Card>

        {/* Premium Plan */}
        <Card className="border-2 border-blue-500 relative bg-gradient-to-b from-blue-900/40 to-blue-950/40 backdrop-blur-sm hover:shadow-xl transition-all duration-300 scale-105">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-blue-500/5"></div>
          </div>
          <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-sm font-bold py-1 px-4 rounded-full">
            MAIS POPULAR
          </span>
          <CardHeader className="text-center pb-2 relative">
            <CardTitle className="text-xl text-blue-50">Plano Premium</CardTitle>
            <div className="mt-4 flex flex-col items-center">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">R$ 997</span>
                <Badge variant="outline" className="text-blue-200 border-blue-300 ml-2">única vez</Badge>
              </div>
              <CardDescription className="text-blue-200 mt-2">
                Acesso vitalício
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-6 relative">
            <ul className="space-y-3">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-blue-300 mr-2 flex-shrink-0" />
                <span>Tudo do plano Básico</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-300 mr-2 flex-shrink-0" />
                <span>Acesso vitalício ao conteúdo</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-300 mr-2 flex-shrink-0" />
                <span>3 mentorias em grupo</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-300 mr-2 flex-shrink-0" />
                <span>Bônus: 10 templates prontos</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-300 mr-2 flex-shrink-0" />
                <span>Desconto de 20% no Sistema Diamond</span>
              </li>
              <li className="flex items-start">
                <Users className="w-5 h-5 text-blue-300 mr-2 flex-shrink-0" />
                <span>Acesso ao grupo VIP de alunos</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="pt-4 relative">
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
              Quero Esse Plano
            </Button>
          </CardFooter>
        </Card>

        {/* VIP Plan */}
        <Card className="border-2 border-blue-300/20 bg-white/5 backdrop-blur-sm hover:shadow-lg hover:border-blue-300/40 transition-all duration-300">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-xl text-blue-100">Plano VIP</CardTitle>
            <div className="mt-4 flex flex-col items-center">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">R$ 1.997</span>
                <Badge variant="outline" className="text-blue-300 border-blue-300 ml-2">única vez</Badge>
              </div>
              <CardDescription className="text-blue-300 mt-2">
                Acesso vitalício + Mentoria
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                <span>Tudo do plano Premium</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                <span>Mentoria individual (2 sessões)</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                <span>Revisão do seu plano de negócios</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                <span>30 dias de suporte prioritário</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                <span>Desconto de 35% no Sistema Diamond</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                <span>Acesso antecipado a novas atualizações</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="pt-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Quero Esse Plano
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12 text-center max-w-2xl mx-auto bg-blue-800/30 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Garantia de 7 dias</h3>
        <p className="text-blue-200">
          Se por qualquer motivo você não ficar satisfeito com a MasterClass, 
          você tem 7 dias para solicitar o reembolso integral do seu investimento, 
          sem perguntas ou complicações.
        </p>
      </div>
    </div>
  );
};

export default DiamondMasterClassPricing;
