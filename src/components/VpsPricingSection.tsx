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
    <div className="mt-16 mb-16">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Escolha Seu <span className="text-brand-accent">Servidor VPS</span>
        </h3>
        <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
          Servidores dedicados no Brasil com alta performance para seu Whaticket Pro
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {vpsPlans.map((plan, index) => (
          <Card 
            key={plan.name} 
            className={`relative bg-white/5 backdrop-blur-sm border-white/10 hover:border-brand-accent/30 transition-all duration-300 ${
              plan.popular ? 'ring-2 ring-brand-accent/50 scale-105' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-brand-accent text-white px-4 py-1">
                  Mais Popular
                </Badge>
              </div>
            )}
            
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-brand-accent text-xl font-bold mb-2">
                {plan.name}
              </CardTitle>
              <div className="text-white">
                <span className="text-3xl font-bold">R${plan.price}</span>
                <span className="text-neutral-400 text-sm ml-2">BRL/mês</span>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Features */}
              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <feature.icon className={`h-4 w-4 ${feature.highlight ? 'text-red-400' : 'text-brand-accent'}`} />
                    <span className={`text-sm ${feature.highlight ? 'text-red-400' : 'text-neutral-300'}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Capacity and Support */}
              <div className="space-y-2 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-lg p-2">
                  <Users className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-green-400 font-medium">
                    Capacidade: {plan.capacity}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-lg p-2">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-blue-400 font-medium">
                    Suporta: {plan.support}
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                className={`w-full mt-6 ${
                  plan.popular 
                    ? 'bg-brand-accent hover:bg-brand-accent/90 text-white' 
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
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