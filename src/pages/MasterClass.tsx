
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from "@/components/ui/button";
import { Download, Timer, Users } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const MasterClass = () => {
  const { toast } = useToast();
  const [showPurchaseButton, setShowPurchaseButton] = useState(false);
  const [peopleWatching, setPeopleWatching] = useState(1057);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Timer to show purchase button after 1 minute
    const timer = setTimeout(() => {
      setShowPurchaseButton(true);
      toast({
        title: "Acesso Liberado!",
        description: "O botão de compra do Sistema Golden está disponível agora!"
      });
    }, 60000); // 60000ms = 1 minute

    // Random number of people watching (between 1000 and 1200)
    const peopleInterval = setInterval(() => {
      setPeopleWatching(Math.floor(Math.random() * 200 + 1000));
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(peopleInterval);
    };
  }, [toast]);

  const handlePurchase = () => {
    setIsLoading(true);
    toast({
      title: "Processando sua compra!",
      description: "Obrigado por adquirir o Sistema Golden"
    });
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-purple-800 text-white flex flex-col items-center justify-start py-12 px-4">
      <Helmet>
        <title>Sistema Golden | MasterClass Exclusiva</title>
        <meta name="description" content="MasterClass exclusiva do Sistema Golden - Aprenda a alcançar mais de 30K/Mês com nosso software de atendimento via WhatsApp" />
      </Helmet>

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
            src="https://www.youtube.com/embed/MWjsCIiyjGg" 
            title="Sistema Golden MasterClass" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <p className="text-purple-200 mb-8">
        <span className="font-bold">{peopleWatching}</span> pessoas assistindo essa apresentação
      </p>

      {showPurchaseButton && (
        <div className="w-full max-w-2xl animate-fade-in">
          <Button 
            onClick={handlePurchase} 
            disabled={isLoading} 
            className="w-full bg-amber-400 hover:bg-amber-500 text-purple-900 text-xl py-6 h-auto font-bold"
          >
            <Download className="mr-2 h-6 w-6" />
            COMPRAR SISTEMA GOLDEN AGORA!
            <span className="block text-sm font-normal">(oferta por tempo limitado)</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default MasterClass;
