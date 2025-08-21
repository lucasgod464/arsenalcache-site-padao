import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Server, Cpu, HardDrive, Network, CheckCircle, Users, Phone } from 'lucide-react';

const VpsPricingSection = () => {
  const vpsPlans = [
    {
      name: "VPS 6GB",
      price: "149.90",
      features: [
        { icon: Server, text: "6GB RAM" },
        { icon: Cpu, text: "2 vCPU" },
        { icon: HardDrive, text: "100 GB NVMe" },
        { icon: Network, text: "1 IPV4" },
        { icon: Server, text: "Servidor no Brasil" },
        { icon: CheckCircle, text: "Uptime superior a 99,9%" }
      ],
      capacity: "Até 15 clientes",
      support: "Até 18 conexões",
      buttonText: "Contratar VPS 6GB"
    },
    {
      name: "VPS 8GB",
      price: "169.90",
      features: [
        { icon: Server, text: "8GB RAM" },
        { icon: Cpu, text: "2 vCPU" },
        { icon: HardDrive, text: "120 GB NVMe" },
        { icon: Network, text: "1 IPV4" },
        { icon: Server, text: "Servidor no Brasil" },
        { icon: CheckCircle, text: "Uptime superior a 99,9%" }
      ],
      capacity: "Até 20 clientes",
      support: "Até 26 conexões",
      buttonText: "Contratar VPS 8GB"
    },
    {
      name: "VPS 16GB",
      price: "279.90",
      popular: true,
      features: [
        { icon: Server, text: "16GB RAM" },
        { icon: Cpu, text: "6 vCPU" },
        { icon: HardDrive, text: "200 GB NVMe", highlight: true },
        { icon: Network, text: "1 IPV4" },
        { icon: Server, text: "Servidor no Brasil" },
        { icon: CheckCircle, text: "Uptime superior a 99,9%" }
      ],
      capacity: "Até 40 clientes",
      support: "Até 34 conexões",
      buttonText: "Contratar VPS 16GB"
    },
    {
      name: "VPS 32GB",
      price: "429.90",
      features: [
        { icon: Server, text: "32GB RAM" },
        { icon: Cpu, text: "6 vCPU" },
        { icon: HardDrive, text: "250 GB NVMe" },
        { icon: Network, text: "1 IPV4" },
        { icon: Server, text: "Servidor no Brasil" },
        { icon: CheckCircle, text: "Uptime superior a 99,9%" }
      ],
      capacity: "Até 60 clientes",
      support: "Até 45 conexões",
      buttonText: "Contratar VPS 32GB"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 md:p-6 lg:p-8 mb-8 lg:mb-12 mx-2 md:mx-0 overflow-x-hidden">
      <div className="text-center mb-6 lg:mb-8">
        <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-2 lg:mb-3 leading-tight">
          Escolha Seu <span className="text-blue-600">Servidor VPS</span>
        </h3>
        <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
          Servidores dedicados no Brasil com alta performance para seu Whaticket Pro
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
        {vpsPlans.map((plan, index) => (
          <Card 
            key={plan.name} 
            className={`relative bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-none ${
              plan.popular ? 'ring-2 ring-blue-500 lg:scale-105 border-blue-300' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white px-3 lg:px-4 py-1 text-xs lg:text-sm">
                  Mais Popular
                </Badge>
              </div>
            )}
            
            <CardHeader className="text-center pb-3 lg:pb-4 p-4 lg:p-6">
              <CardTitle className="text-blue-600 text-lg lg:text-xl font-bold mb-2">
                {plan.name}
              </CardTitle>
              <div className="text-gray-900">
                <span className="text-2xl lg:text-3xl font-bold">R${plan.price}</span>
                <span className="text-gray-600 text-xs lg:text-sm ml-1 lg:ml-2">BRL/mês</span>
              </div>
            </CardHeader>

            <CardContent className="space-y-3 lg:space-y-4 p-4 lg:p-6 pt-0">
              {/* Features */}
              <div className="space-y-2 lg:space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 lg:gap-3">
                    <feature.icon className={`h-3 w-3 lg:h-4 lg:w-4 ${feature.highlight ? 'text-red-500' : 'text-blue-600'}`} />
                    <span className={`text-xs lg:text-sm ${feature.highlight ? 'text-red-500' : 'text-gray-700'}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Capacity and Support */}
              <div className="space-y-2 pt-3 lg:pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg p-1.5 lg:p-2">
                  <Users className="h-3 w-3 lg:h-4 lg:w-4 text-green-600" />
                  <span className="text-xs lg:text-sm text-green-700 font-medium">
                    Capacidade: {plan.capacity}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg p-1.5 lg:p-2">
                  <Phone className="h-3 w-3 lg:h-4 lg:w-4 text-blue-600" />
                  <span className="text-xs lg:text-sm text-blue-700 font-medium">
                    Suporta: {plan.support}
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                className={`w-full mt-4 lg:mt-6 text-xs lg:text-sm py-2 lg:py-3 ${
                  plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300'
                }`}
                asChild
              >
                <a 
                  href={`https://wa.me/5512981156856?text=Olá,%20gostaria%20de%20contratar%20o%20${plan.name}%20por%20R$${plan.price}%20BRL/mês.`}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {plan.buttonText}
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VpsPricingSection;