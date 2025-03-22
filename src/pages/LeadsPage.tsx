
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, CheckCircle2, Send, MessageCircle, Zap, LineChart, Shield } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
        title: "Solicitação enviada com sucesso!",
        description: "Nossa equipe entrará em contato em breve.",
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>Sistema Golden | Solicite uma demonstração personalizada</title>
        <meta name="description" content="Agende uma demonstração personalizada do Sistema Golden - a plataforma completa de WhatsApp para empresas que buscam resultados." />
      </Helmet>

      <Navbar />

      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para a página inicial
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="fade-in-section">
            <span className="inline-block py-1 px-3 rounded-full bg-arsenal-light/20 text-arsenal-dark text-sm font-medium mb-6">
              Solução completa para WhatsApp
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Sistema Golden
              <span className="block text-gradient bg-gradient-to-r from-blue-600 to-blue-800">Agende uma demonstração exclusiva</span>
            </h1>
            
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Descubra como o Sistema Golden pode transformar a comunicação da sua empresa e aumentar seus resultados com uma demonstração personalizada.
              </p>
              
              <div className="space-y-5 mt-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-whatsapp-light/10 flex items-center justify-center mr-4">
                    <MessageCircle className="w-6 h-6 text-whatsapp-DEFAULT" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-xl">Conexões ilimitadas</h3>
                    <p className="text-gray-600">Integre quantos números de WhatsApp precisar sem custos adicionais</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-arsenal-light/10 flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-arsenal-DEFAULT" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-xl">Automação inteligente</h3>
                    <p className="text-gray-600">Atendimento automatizado 24/7 com chatbots personalizados</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-whatsapp-light/10 flex items-center justify-center mr-4">
                    <LineChart className="w-6 h-6 text-whatsapp-DEFAULT" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-xl">Métricas em tempo real</h3>
                    <p className="text-gray-600">Relatórios detalhados e dashboards personalizáveis</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-arsenal-light/10 flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-arsenal-DEFAULT" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-xl">100% oficial e seguro</h3>
                    <p className="text-gray-600">API oficial do WhatsApp Business com dados criptografados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="fade-in-section">
            <Card className="shadow-xl border-t-4 border-t-blue-600 overflow-hidden relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-arsenal-light/20 rounded-full blur-3xl"></div>
              <div className="absolute top-20 -left-10 w-64 h-64 bg-whatsapp-light/20 rounded-full blur-3xl"></div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <CardTitle className="text-2xl text-gradient bg-gradient-to-r from-blue-600 to-blue-800">Solicite uma demonstração exclusiva</CardTitle>
                <CardDescription>Preencha o formulário e nossa equipe entrará em contato</CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                {isSubmitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-12 h-12 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-medium text-gray-900">Solicitação recebida!</h3>
                    <p className="text-gray-600 mb-6">
                      Agradecemos seu interesse no Sistema Golden. 
                      <br />Nossa equipe entrará em contato em breve para agendar sua demonstração personalizada.
                    </p>
                    <Button 
                      size="lg"
                      onClick={() => setIsSubmitted(false)}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
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
                              <Input placeholder="Seu nome completo" {...field} className="h-12" />
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
                            <FormLabel>E-mail profissional</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="seu@empresa.com" {...field} className="h-12" />
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
                            <FormLabel>Telefone/WhatsApp</FormLabel>
                            <FormControl>
                              <Input placeholder="(00) 00000-0000" {...field} className="h-12" />
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
                              <Input placeholder="Nome da sua empresa" {...field} className="h-12" />
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
                            <FormLabel>Como podemos ajudar?</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Conte-nos um pouco sobre suas necessidades e objetivos..." 
                                className="resize-none min-h-[100px]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full h-12 mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Solicitar demonstração
                      </Button>
                      
                      <p className="text-xs text-center text-gray-500 mt-4">
                        Ao enviar este formulário, você concorda com nossa política de privacidade 
                        e em receber comunicações sobre nossos produtos e serviços.
                      </p>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-20 text-center fade-in-section">
          <h2 className="text-3xl font-bold mb-8">Empresas que confiam no <span className="text-gradient bg-gradient-to-r from-blue-600 to-blue-800">Sistema Golden</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white/80 p-6 rounded-lg shadow-md flex items-center justify-center">
              <span className="text-xl font-medium text-gray-400">Empresa 1</span>
            </div>
            <div className="bg-white/80 p-6 rounded-lg shadow-md flex items-center justify-center">
              <span className="text-xl font-medium text-gray-400">Empresa 2</span>
            </div>
            <div className="bg-white/80 p-6 rounded-lg shadow-md flex items-center justify-center">
              <span className="text-xl font-medium text-gray-400">Empresa 3</span>
            </div>
            <div className="bg-white/80 p-6 rounded-lg shadow-md flex items-center justify-center">
              <span className="text-xl font-medium text-gray-400">Empresa 4</span>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      
      <style jsx>{`
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
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default LeadsPage;
