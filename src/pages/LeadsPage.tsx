import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Send, MessageCircle, Users, Shield, Zap, Rocket, Clock, BadgeCheck } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { supabase } from '@/integrations/supabase/client';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nome deve ter pelo menos 2 caracteres"
  }),
  email: z.string().email({
    message: "E-mail inválido"
  }),
  phone: z.string().min(10, {
    message: "Telefone deve ter pelo menos 10 dígitos"
  }),
  company: z.string().optional(),
  message: z.string().optional()
});

const LeadsPage = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [webhookStatus, setWebhookStatus] = useState<string | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-section');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          element.classList.add('is-visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Preparar dados formatados para envio
      const formattedData = {
        name: values.name.trim(),
        email: values.email.trim().toLowerCase(),
        phone: values.phone.trim().replace(/\D/g, ''), // Remove caracteres não numéricos
        company: values.company ? values.company.trim() : null,
        message: values.message ? values.message.trim() : null,
        timestamp: new Date().toISOString(),
        source: "golden-leads-page"
      };

      console.log("Dados formatados para envio:", formattedData);

      // Enviar para o Supabase
      const { error: supabaseError } = await supabase.from('demo_requests').insert([{
        name: formattedData.name,
        email: formattedData.email,
        phone: formattedData.phone,
        company: formattedData.company,
        message: formattedData.message,
        status: 'pending'
      }]);

      if (supabaseError) {
        console.error("Erro ao enviar para Supabase:", supabaseError);
        throw supabaseError;
      }

      // Enviar para webhook
      const webhookUrl = "https://construtor.yuccie.pro/webhook-test/0eec6c59-6fea-4e97-adfd-aa57e8745b4f";
      
      setWebhookStatus("sending");
      
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors", // Importante para evitar erros de CORS
          body: JSON.stringify(formattedData),
        });
        
        console.log("Dados enviados com sucesso para webhook:", formattedData);
        setWebhookStatus("success");
      } catch (webhookError) {
        console.error("Erro no webhook:", webhookError);
        setWebhookStatus("error");
      }

      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Formulário enviado com sucesso!",
        description: "Entraremos em contato em breve."
      });
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro ao enviar formulário",
        description: "Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      <Helmet>
        <title>Sistema Golden | Solicite uma demonstração</title>
        <meta name="description" content="Preencha o formulário para solicitar uma demonstração gratuita do Sistema Golden - a solução completa para WhatsApp profissional." />
        <style>
          {`.aspect-w-16 {
              position: relative;
              padding-bottom: 56.25%;
            }
            .aspect-w-16 iframe {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
            .text-gradient {
              background: linear-gradient(90deg, #FB9936, #FBB121);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            .fade-in-section {
              opacity: 0;
              transform: translateY(20px);
              transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
            .fade-in-section.is-visible {
              opacity: 1;
              transform: translateY(0);
            }
            .glow-button {
              animation: pulse 2s infinite;
            }
            @keyframes pulse {
              0% {
                box-shadow: 0 0 0 0 rgba(251, 153, 54, 0.4);
              }
              70% {
                box-shadow: 0 0 0 10px rgba(251, 153, 54, 0);
              }
              100% {
                box-shadow: 0 0 0 0 rgba(251, 153, 54, 0);
              }
            }
            .feature-card {
              transition: all 0.3s ease;
            }
            .feature-card:hover {
              transform: translateY(-5px);
            }
            .hero-gradient {
              background-image: radial-gradient(circle at top right, rgba(251, 191, 36, 0.1), transparent), 
                              radial-gradient(circle at bottom left, rgba(251, 153, 54, 0.1), transparent);
            }`}
        </style>
      </Helmet>

      <div className="sticky top-0 z-50 bg-amber-400 text-white p-3 text-center flex items-center justify-center">
        <Clock className="w-5 h-5 mr-2" />
        <p className="font-bold text-sm md:text-base">🚀 OFERTA LIMITADA: Experimente o Sistema Golden por 7 dias gratuitamente! 🚀</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="fade-in-section">
            <div className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6">
              <BadgeCheck className="w-4 h-4 inline mr-1" />
              Solução completa para WhatsApp
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sistema<span className="text-amber-400">Golden</span>
              <span className="block text-gradient">Transforme seu Atendimento</span>
            </h1>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-700">
                O sistema whitelabel definitivo para gerenciar múltiplos atendimentos via WhatsApp de forma profissional e escalável.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-amber-100 feature-card">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3 mb-3">
                    <MessageCircle className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="font-medium text-gray-900">Conexões ilimitadas</h3>
                  <p className="text-gray-600 text-sm">Gerencie múltiplos números sem limites</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-amber-100 feature-card">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3 mb-3">
                    <Users className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="font-medium text-gray-900">Usuários ilimitados</h3>
                  <p className="text-gray-600 text-sm">Adicione tantos atendentes quanto precisar</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-amber-100 feature-card">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3 mb-3">
                    <Shield className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="font-medium text-gray-900">Sistema Whitelabel</h3>
                  <p className="text-gray-600 text-sm">Personalize e revenda para seus clientes</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-amber-100 feature-card">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3 mb-3">
                    <Zap className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="font-medium text-gray-900">Automação completa</h3>
                  <p className="text-gray-600 text-sm">Chatbots e fluxos personalizados</p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg border-l-4 border-amber-400">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-amber-800 mb-2">TESTE GRÁTIS POR 7 DIAS!</h3>
                    <p className="text-amber-700">Experimente todos os recursos premium sem compromisso e transforme seu atendimento hoje mesmo.</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <BadgeCheck className="w-4 h-4 text-amber-500 mr-2" />
                        <span className="text-sm text-amber-700">Acesso total às funcionalidades</span>
                      </li>
                      <li className="flex items-center">
                        <BadgeCheck className="w-4 h-4 text-amber-500 mr-2" />
                        <span className="text-sm text-amber-700">Suporte técnico durante o período de teste</span>
                      </li>
                      <li className="flex items-center">
                        <BadgeCheck className="w-4 h-4 text-amber-500 mr-2" />
                        <span className="text-sm text-amber-700">Sem compromisso de compra</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="fade-in-section">
            <Card className="shadow-xl relative overflow-hidden border-amber-200">
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl"></div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <CardTitle className="text-2xl font-bold">Solicite uma demonstração</CardTitle>
                <CardDescription>Preencha o formulário para conhecer nossa solução</CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Solicitação recebida!</h3>
                    <p className="text-gray-600 mb-6">Nossa equipe entrará em contato em breve para agendar sua demonstração.</p>
                    <Button 
                      onClick={() => setIsSubmitted(false)} 
                      className="bg-amber-400 hover:bg-amber-500 text-white"
                    >
                      Enviar nova solicitação
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField 
                        control={form.control} 
                        name="name" 
                        render={({field}) => (
                          <FormItem>
                            <FormLabel>Nome completo</FormLabel>
                            <FormControl>
                              <Input placeholder="Seu nome completo" {...field} className="border-amber-200 focus:border-amber-400" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} 
                      />
                      
                      <FormField 
                        control={form.control} 
                        name="email" 
                        render={({field}) => (
                          <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="seu@email.com" {...field} className="border-amber-200 focus:border-amber-400" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} 
                      />
                      
                      <FormField 
                        control={form.control} 
                        name="phone" 
                        render={({field}) => (
                          <FormItem>
                            <FormLabel>Telefone</FormLabel>
                            <FormControl>
                              <Input placeholder="(00) 00000-0000" {...field} className="border-amber-200 focus:border-amber-400" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} 
                      />
                      
                      <FormField 
                        control={form.control} 
                        name="company" 
                        render={({field}) => (
                          <FormItem>
                            <FormLabel>Empresa</FormLabel>
                            <FormControl>
                              <Input placeholder="Nome da sua empresa (opcional)" {...field} className="border-amber-200 focus:border-amber-400" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} 
                      />
                      
                      <FormField 
                        control={form.control} 
                        name="message" 
                        render={({field}) => (
                          <FormItem>
                            <FormLabel>Mensagem (opcional)</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Conte-nos um pouco sobre suas necessidades..." className="resize-none border-amber-200 focus:border-amber-400" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} 
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-amber-400 hover:bg-amber-500 text-white glow-button flex items-center justify-center"
                        disabled={form.formState.isSubmitting}
                      >
                        {form.formState.isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Rocket className="mr-2 h-4 w-4" />
                            Solicitar demonstração
                          </>
                        )}
                      </Button>

                      {webhookStatus === 'error' && (
                        <div className="text-sm text-amber-600 text-center mt-2">
                          Dados salvos com sucesso, mas ocorreu um erro ao enviar para o webhook externo.
                        </div>
                      )}
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
            
            {/* Depoimentos de clientes */}
            <div className="mt-6 bg-white rounded-lg shadow-sm p-5 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Empresas confiam no Sistema Golden</h4>
                  <p className="text-sm text-gray-500">Mais de 300 empresas já transformaram seu atendimento</p>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-around gap-2">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">97%</div>
                  <p className="text-xs text-gray-600">Satisfação</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">40%</div>
                  <p className="text-xs text-gray-600">Aumento em vendas</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">65%</div>
                  <p className="text-xs text-gray-600">Redução de tempo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Seção informativa adicional */}
        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-gray-200">
          <div className="text-center mb-10 fade-in-section">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Por que escolher o Sistema Golden?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Nossa plataforma foi desenvolvida para atender todas as necessidades de comunicação da sua empresa com seus clientes via WhatsApp</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 fade-in-section">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <Shield className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Segurança e Privacidade</h3>
              <p className="text-gray-600">Seus dados sempre protegidos com criptografia e em conformidade com LGPD.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <Rocket className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Implementação Rápida</h3>
              <p className="text-gray-600">Em apenas 24 horas seu sistema estará pronto para uso com configurações personalizadas.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <MessageCircle className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Suporte Exclusivo</h3>
              <p className="text-gray-600">Equipe dedicada para ajudar você em qualquer questão técnica ou operacional.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsPage;
