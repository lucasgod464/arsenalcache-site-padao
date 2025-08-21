import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Server, Cpu, HardDrive, Network, Database, Check } from 'lucide-react';

const VpsTableSection = () => {
  const vpsPlans = [
    {
      name: "VPS 6GB",
      price: "149.90",
      ram: "6GB RAM",
      cpu: "2 vCPU",
      storage: "100 GB NVMe",
      ip: "1 IPV4",
      location: "Servidor no Brasil",
      uptime: "Uptime superior à 99,9%",
      capacity: "Até 15 clientes",
      connections: "Até 18 conexões"
    },
    {
      name: "VPS 8GB",
      price: "169.90",
      ram: "8GB RAM",
      cpu: "2 vCPU",
      storage: "120 GB NVMe",
      ip: "1 IPV4",
      location: "Servidor no Brasil",
      uptime: "Uptime superior à 99,9%",
      capacity: "Até 20 clientes",
      connections: "Até 26 conexões"
    },
    {
      name: "VPS 16GB",
      price: "279.90",
      ram: "16GB RAM",
      cpu: "6 vCPU",
      storage: "200 GB NVMe",
      ip: "1 IPV4",
      location: "Servidor no Brasil",
      uptime: "Uptime superior à 99,9%",
      capacity: "Até 40 clientes",
      connections: "Até 34 conexões"
    },
    {
      name: "VPS 32GB",
      price: "429.90",
      ram: "32GB RAM",
      cpu: "6 vCPU",
      storage: "250 GB NVMe",
      ip: "1 IPV4",
      location: "Servidor no Brasil",
      uptime: "Uptime superior à 99,9%",
      capacity: "Até 60 clientes",
      connections: "Até 45 conexões"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vpsPlans.map((plan, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0 rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-gray-900">R${plan.price}</span>
                    <span className="text-sm text-gray-600 ml-1">BRL/mês</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Server className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">{plan.ram}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Cpu className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">{plan.cpu}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <HardDrive className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">{plan.storage}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Network className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">{plan.ip}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Database className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">{plan.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-green-600">
                    <Check className="w-4 h-4" />
                    <span className="text-sm">{plan.uptime}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <span className="text-sm font-medium text-green-700">
                      Capacidade: {plan.capacity}
                    </span>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <span className="text-sm font-medium text-blue-700">
                      Suporta: {plan.connections}
                    </span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-semibold"
                  asChild
                >
                  <a 
                    href={`https://api.whatsapp.com/send?phone=5512981156856&text=Olá,%20tenho%20interesse%20na%20${plan.name}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Contratar {plan.name}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VpsTableSection;