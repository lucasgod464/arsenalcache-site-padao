import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Crown, Infinity, Users, MessageCircle, Palette, HeadphonesIcon, DollarSign } from 'lucide-react';

const WhaticketsProTable = () => {
  const features = [
    {
      category: "Recursos Ilimitados",
      icon: Infinity,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      items: [
        "Usuários ilimitados",
        "Departamentos ilimitados", 
        "Atendimentos simultâneos",
        "Mensagens por mês",
        "Conexões WhatsApp"
      ]
    },
    {
      category: "Personalização Total",
      icon: Palette,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      items: [
        "Sua logo no sistema",
        "Cores personalizadas",
        "Nome personalizado",
        "White Label completo",
        "Tema customizável"
      ]
    },
    {
      category: "Suporte Premium",
      icon: HeadphonesIcon,
      color: "text-green-600",
      bgColor: "bg-green-50",
      items: [
        "Instalação pela nossa equipe",
        "Atualizações automáticas",
        "Suporte humano especializado",
        "Suporte via WhatsApp",
        "Treinamento incluso"
      ]
    },
    {
      category: "Monetização",
      icon: DollarSign,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      items: [
        "Revenda de assinaturas",
        "Clientes ilimitados",
        "Múltiplas empresas",
        "Sistema de cobrança",
        "Comissões automáticas"
      ]
    }
  ];

  const connectionTypes = [
    {
      name: "WhatsApp Business",
      included: true,
      price: "Incluído",
      description: "API oficial do WhatsApp",
      connections: "Ilimitadas"
    },
    {
      name: "Instagram",
      included: false,
      price: "R$ 130/mês",
      description: "Direct Messages automatizados",
      connections: "Ilimitadas"
    },
    {
      name: "Facebook",
      included: false,
      price: "R$ 130/mês",
      description: "Messenger integrado",
      connections: "Ilimitadas"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Recursos Principais */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-100">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Crown className="h-6 w-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">Recursos Incluídos no Plano</h3>
          </div>
          <p className="text-gray-600">Tudo que você precisa para automatizar seu atendimento</p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((category, index) => (
            <Card key={index} className={`${category.bgColor} border-0`}>
              <CardHeader className="pb-3">
                <CardTitle className={`flex items-center gap-2 ${category.color} text-base`}>
                  <category.icon className="h-5 w-5" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Stack */}
        <div className="md:hidden space-y-4">
          {features.map((category, index) => (
            <Card key={index} className={`${category.bgColor} border-0`}>
              <CardHeader className="pb-3">
                <CardTitle className={`flex items-center gap-2 ${category.color} text-lg`}>
                  <category.icon className="h-5 w-5" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Tabela de Conexões */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
          <div className="flex items-center gap-2 mb-2">
            <MessageCircle className="h-6 w-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">Conexões Disponíveis</h3>
          </div>
          <p className="text-gray-600">Escolha quais plataformas integrar ao seu sistema</p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Plataforma</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-900">Status</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-900">Preço</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-900">Conexões</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {connectionTypes.map((connection, index) => (
                <tr key={index} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{connection.name}</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {connection.included ? (
                      <Badge className="bg-green-100 text-green-700">✅ Incluído</Badge>
                    ) : (
                      <Badge variant="outline" className="border-orange-300 text-orange-700">🔄 Opcional</Badge>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`font-semibold ${connection.included ? 'text-green-600' : 'text-blue-600'}`}>
                      {connection.price}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-700">{connection.connections}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-600 text-sm">{connection.description}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden p-4 space-y-4">
          {connectionTypes.map((connection, index) => (
            <Card key={index} className="border border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">{connection.name}</h4>
                  {connection.included ? (
                    <Badge className="bg-green-100 text-green-700">✅ Incluído</Badge>
                  ) : (
                    <Badge variant="outline" className="border-orange-300 text-orange-700">🔄 Opcional</Badge>
                  )}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Preço:</span>
                    <span className={`font-semibold ${connection.included ? 'text-green-600' : 'text-blue-600'}`}>
                      {connection.price}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Conexões:</span>
                    <span className="text-gray-700">{connection.connections}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">{connection.description}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Rodapé da tabela */}
        <div className="bg-blue-50 p-4 text-center">
          <div className="text-sm text-blue-800">
            <strong>💡 Dica:</strong> Comece apenas com WhatsApp (incluído) e adicione outras plataformas conforme sua necessidade
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhaticketsProTable;