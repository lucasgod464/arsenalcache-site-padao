
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Users } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import DiamondPlans from '@/components/diamond/DiamondPlans';
import FloatingCta from '@/components/FloatingCta';

const DiamondMasterClass = () => {
  const { toast } = useToast();
  const [peopleWatching, setPeopleWatching] = useState(987);
  const [showPlans, setShowPlans] = useState(false);

  useEffect(() => {
    // Random number of people watching (between 900 and 1100)
    const peopleInterval = setInterval(() => {
      setPeopleWatching(Math.floor(Math.random() * 200 + 900));
    }, 5000);

    // Show Diamond plans section after 1 minute (60 seconds)
    const plansTimer = setTimeout(() => {
      setShowPlans(true);
      toast({
        title: "Planos especiais disponíveis!",
        description: "Confira nossos planos e preços exclusivos do Sistema Diamond abaixo.",
        variant: "default"
      });
    }, 60000); // 60 seconds = 1 minute

    return () => {
      clearInterval(peopleInterval);
      clearTimeout(plansTimer);
    };
  }, [toast]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 text-white flex flex-col items-center justify-start py-12 px-4">
      <Helmet>
        <title>Sistema Diamond | MasterClass Exclusiva</title>
        <meta name="description" content="MasterClass exclusiva do Sistema Diamond - Aprenda a escalar suas conexões de WhatsApp e fature mais de 30K/Mês" />
      </Helmet>

      {/* Logo at the top */}
      <div className="mb-12">
        
      </div>

      <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          DOMINE O MERCADO DE WHATSAPP COM CENTENAS DE CONEXÕES E FATURE +30K MENSAIS COM RECEITA RECORRENTE!
        </h1>
        <p className="text-blue-200 text-lg">
          Assista o vídeo completo para descobrir como o Sistema Diamond pode escalar seus atendimentos!
        </p>
      </div>

      {/* YouTube Video Embed */}
      <div className="w-full max-w-3xl bg-blue-900/50 rounded-lg overflow-hidden shadow-2xl mb-8">
        <div className="relative pb-[56.25%] h-0">
          <iframe 
            className="absolute top-0 left-0 w-full h-full" 
            src="https://www.youtube.com/embed/3eHP_ApNx9E" 
            title="Sistema Diamond MasterClass" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="text-blue-200 mb-8 flex items-center justify-center gap-2">
        <Users className="w-5 h-5" />
        <span className="font-bold">{peopleWatching}</span>
        <span>pessoas assistindo essa apresentação</span>
      </div>

      {/* Show Diamond plans section conditionally */}
      {showPlans && (
        <div className="w-full bg-white">
          <div className="max-w-7xl mx-auto">
            <DiamondPlans />
          </div>
        </div>
      )}
      
      {/* Floating WhatsApp CTA button */}
      <FloatingCta />
    </div>
  );
};

export default DiamondMasterClass;
