
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
import { CheckCircle2, Send, MessageCircle, Users, Shield, Zap, Rocket } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { supabase } from '@/integrations/supabase/client';

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "E-mail inválido" }),
  phone: z.string().min(10, { message: "Telefone deve ter pelo menos 10 dígitos" }),
  company: z.string().optional(),
  message: z.string().optional(),
});

const LeadsPage = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-section');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if(position.top < window.innerHeight - 100) {
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
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { error } = await supabase
        .from('demo_requests')
        .insert([
          {
            name: values.name,
            email: values.email,
            phone: values.phone,
            company: values.company || null,
            message: values.message || null,
            status: 'pending',
          }
        ]);

      if (error) throw error;

      setIsSubmitted(true);
      form.reset();
      
      toast({
        title: "Formulário enviado com sucesso!",
        description: "Entraremos em contato em breve.",
      });
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro ao enviar formulário",
        description: "Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Helmet>
        <title>Arsenal Cache | Solicite uma demonstração</title>
        <meta name="description" content="Preencha o formulário para solicitar uma demonstração gratuita do Arsenal Cache - a solução completa para WhatsApp profissional." />
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
            .fade-in-section {
              opacity: 0;
              transform: translateY(20px);
              transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
            .fade-in-section.is-visible {
              opacity: 1;
              transform: translateY(0);
            }
            .text-gradient {
              background: linear-gradient(90deg, #4a56e2 0%, #00c2ff 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }`}
        </style>
      </Helmet>

      {/* Golden System Test Banner */}
      <div className="bg-yellow-50 border-b border-yellow-200">
        <div className="container mx-auto px-4 py-3 flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <span className="text-gray-700 font-medium">Teste do sistema</span>
            <img 
              src="/lovable-uploads/8b9a6a08-95c8-42fe-b5cc-f474e2bb229b.png" 
              alt="Golden System Logo" 
              className="h-8" 
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="fade-in-section">
            <div className="inline-block py-1 px-3 rounded-full bg-arsenal-light/20 text-arsenal-dark text-sm font-medium mb-6">
              Solução completa para WhatsApp
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Arsenal<span className="text-whatsapp-DEFAULT">Cache</span>
              <span className="block text-gradient">Transforme seu Atendimento</span>
            </h1>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Preencha o formulário ao lado para solicitar uma demonstração gratuita da nossa plataforma whitelabel com usuários e conexões ilimitadas.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-whatsapp-light/10 flex items-center justify-center mr-3 mt-0.5">
                    <MessageCircle className="w-5 h-5 text-whatsapp-DEFAULT" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Conexões ilimitadas</h3>
                    <p className="text-gray-600">Gerencie múltiplos números de WhatsApp em uma única plataforma</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-arsenal-light/10 flex items-center justify-center mr-3 mt-0.5">
                    <Users className="w-5 h-5 text-arsenal-DEFAULT" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Usuários ilimitados</h3>
                    <p className="text-gray-600">Adicione tantos atendentes quanto precisar, sem custos adicionais</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-whatsapp-light/10 flex items-center justify-center mr-3 mt-0.5">
                    <Shield className="w-5 h-5 text-whatsapp-DEFAULT" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Sistema Whitelabel</h3>
                    <p className="text-gray-600">Personalize com sua marca e revenda para seus clientes</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-arsenal-light/10 flex items-center justify-center mr-3 mt-0.5">
                    <Zap className="w-5 h-5 text-arsenal-DEFAULT" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Atendimento automatizado</h3>
                    <p className="text-gray-600">Chatbots e fluxos de atendimento personalizados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="fade-in-section">
            <Card className="shadow-xl relative overflow-hidden border-arsenal-light/20">
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-arsenal-light/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-whatsapp-light/10 rounded-full blur-3xl"></div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <CardTitle className="text-2xl">Solicite uma demonstração</CardTitle>
                <CardDescription>Preencha o formulário abaixo para conhecer nossa solução</CardDescription>
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
                      className="bg-arsenal-DEFAULT hover:bg-arsenal-dark text-white"
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
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome completo</FormLabel>
                            <FormControl>
                              <Input placeholder="Seu nome completo" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="seu@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefone</FormLabel>
                            <FormControl>
                              <Input placeholder="(00) 00000-0000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Empresa</FormLabel>
                            <FormControl>
                              <Input placeholder="Nome da sua empresa (opcional)" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mensagem (opcional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Conte-nos um pouco sobre suas necessidades..." 
                                className="resize-none" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-whatsapp-DEFAULT hover:bg-whatsapp-dark text-white"
                      >
                        <Rocket className="mr-2 h-4 w-4" />
                        Solicitar demonstração
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsPage;
