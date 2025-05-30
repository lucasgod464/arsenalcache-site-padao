
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Users } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import MasterClassPricing from '@/components/MasterClassPricing';
import FloatingCta from '@/components/FloatingCta';

const MasterClass = () => {
  const { toast } = useToast();
  const [peopleWatching, setPeopleWatching] = useState(1057);
  const [showPricing, setShowPricing] = useState(false);

  useEffect(() => {
    // Random number of people watching (between 1000 and 1200)
    const peopleInterval = setInterval(() => {
      setPeopleWatching(Math.floor(Math.random() * 200 + 1000));
    }, 5000);

    // Show pricing section after 1 minute (60 seconds)
    const pricingTimer = setTimeout(() => {
      setShowPricing(true);
      toast({
        title: "Preços especiais disponíveis!",
        description: "Confira nossos planos e preços exclusivos abaixo.",
        variant: "default",
      });
    }, 60000); // 60 seconds = 1 minute

    return () => {
      clearInterval(peopleInterval);
      clearTimeout(pricingTimer);
    };
  }, [toast]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-950 text-white flex flex-col items-center justify-start py-12 px-4">
      <Helmet>
        <title>Sistema Golden | MasterClass Exclusiva</title>
        <meta name="description" content="MasterClass exclusiva do Sistema Golden - Aprenda a alcançar mais de 30K/Mês com nosso software de atendimento via WhatsApp" />
      </Helmet>

      {/* Logo at the top */}
      <div className="mb-12">
        <img 
          src="/lovable-uploads/53c07531-dc1d-42f9-a64d-8bc945090d79.png" 
          alt="Sistema Golden Logo" 
          className="max-w-full h-auto w-72 md:w-96"
        />
      </div>

      <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          DOMINE O MERCADO DE WHATSAPP COM SEU PRÓPRIO SOFTWARE E FATURE +30K MENSAIS COM RECEITA RECORRENTE GARANTIDA!
        </h1>
        <p className="text-purple-200 text-lg">
          Assista o vídeo completo para descobrir como o Sistema Golden pode transformar seu negócio!
        </p>
      </div>

      {/* YouTube Video Embed */}
      <div className="w-full max-w-3xl bg-purple-900/50 rounded-lg overflow-hidden shadow-2xl mb-8">
        <div className="relative pb-[56.25%] h-0">
          <iframe 
            className="absolute top-0 left-0 w-full h-full" 
            src="https://www.youtube.com/embed/3eHP_ApNx9E" 
            title="Sistema Golden MasterClass" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="text-purple-200 mb-8 flex items-center justify-center">
        <span className="font-bold">{peopleWatching}</span>
        <span className="ml-2">pessoas assistindo essa apresentação</span>
      </div>

      {/* Show pricing section conditionally */}
      {showPricing && (
        <div className="w-full">
          <div className="max-w-7xl mx-auto">
            <MasterClassPricing />
          </div>
        </div>
      )}
      
      {/* Floating WhatsApp CTA button */}
      <FloatingCta />
    </div>
  );
};

export default MasterClass;
