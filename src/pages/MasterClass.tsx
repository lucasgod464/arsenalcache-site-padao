
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from "@/components/ui/button";
import { Play, Download, Timer, Users } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const MasterClass = () => {
  const { toast } = useToast();
  const [showContent, setShowContent] = useState(false);
  const [peopleWatching, setPeopleWatching] = useState(1057);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Timer to show content after 1 minute
    const timer = setTimeout(() => {
      setShowContent(true);
      toast({
        title: "Conteúdo exclusivo liberado!",
        description: "Acesse agora o conteúdo especial do Sistema Golden"
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

  const handleDownload = () => {
    setIsLoading(true);
    toast({
      title: "Download iniciado!",
      description: "Obrigado por baixar o Sistema Golden"
    });
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-purple-800 text-white flex flex-col items-center justify-start py-12 px-4">
      <Helmet>
        <title>Sistema Golden | MasterClass Exclusiva</title>
        <meta name="description" content="MasterClass exclusiva do Sistema Golden - Aprenda a alcançar mais de 30K/Mês com nosso software de atendimento via WhatsApp" />
      </Helmet>

      <img 
        src="/lovable-uploads/84f07648-be27-4b8a-a21e-3b47237c252c.png" 
        alt="Sistema Golden Logo" 
        className="w-36 h-36 mb-6 animate-pulse-soft"
      />

      <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Tenha seu Próprio Software de Chatbot e Multiatendimento para WhatsApp e Alcance + de 30K/Mês de Forma Recorrente.
        </h1>
        <p className="text-purple-200 text-lg">
          Assista até o final para conhecer todas as funcionalidades e baixar o código fonte!
        </p>
      </div>

      <div className="w-full max-w-3xl bg-purple-900/50 rounded-lg overflow-hidden shadow-2xl relative mb-8">
        <div className="aspect-w-16 relative bg-gradient-to-br from-purple-900 to-purple-700 flex items-center justify-center p-10">
          {!showContent && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-purple-900/80 p-6">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 animate-bounce">
                <span className="text-4xl font-bold">!</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">CONTEÚDO CONFIDENCIAL</h2>
              <p className="text-xl md:text-2xl font-bold text-center mb-8">SAIRÁ DO AR EM ALGUNS MINUTOS</p>
              
              <div className="bg-red-500 w-24 h-24 rounded-full flex items-center justify-center mb-8 hover:bg-red-600 transition-colors cursor-pointer">
                <Play className="w-12 h-12" />
              </div>
              
              <div className="w-full max-w-md bg-white/10 backdrop-blur-sm border-4 border-dashed border-white p-4 text-center rounded-lg">
                <p className="text-xl font-bold uppercase">CLIQUE AQUI PARA ASSISTIR...</p>
              </div>
            </div>
          )}

          {showContent && (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold mb-6">Sistema Golden - Demonstração Exclusiva</h2>
              <div className="space-y-6 w-full max-w-lg">
                <div className="bg-purple-700 p-4 rounded-lg flex items-start">
                  <div className="bg-amber-400 p-2 rounded-full mr-4">
                    <Users className="text-purple-900" />
                  </div>
                  <div>
                    <h3 className="font-bold">Multiatendimento Ilimitado</h3>
                    <p className="text-purple-200 text-sm">Gerencie múltiplas conversas simultaneamente com sua equipe.</p>
                  </div>
                </div>
                
                <div className="bg-purple-700 p-4 rounded-lg flex items-start">
                  <div className="bg-amber-400 p-2 rounded-full mr-4">
                    <Timer className="text-purple-900" />
                  </div>
                  <div>
                    <h3 className="font-bold">Resposta Automáticas 24/7</h3>
                    <p className="text-purple-200 text-sm">Configure chatbots inteligentes que respondem mesmo quando você não está.</p>
                  </div>
                </div>
                
                <Button 
                  onClick={handleDownload} 
                  disabled={isLoading}
                  className="w-full bg-amber-400 hover:bg-amber-500 text-purple-900 font-bold"
                >
                  <Download className="mr-2 h-5 w-5" />
                  {isLoading ? "Processando..." : "LIBERAR ACESSO AGORA!"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <p className="text-purple-200 mb-8">
        <span className="font-bold">{peopleWatching}</span> pessoas assistindo essa apresentação
      </p>

      <Button 
        onClick={handleDownload} 
        disabled={isLoading}
        className="w-full max-w-2xl bg-orange-500 hover:bg-orange-600 text-white text-xl py-6 h-auto font-bold"
      >
        <Download className="mr-2 h-6 w-6" />
        QUERO BAIXAR AGORA!
        <span className="block text-sm font-normal">(atenção: vagas limitadas)</span>
      </Button>
    </div>
  );
};

export default MasterClass;
