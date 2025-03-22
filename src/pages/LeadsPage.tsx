
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
import { ArrowLeft, CheckCircle2, Send } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>Sistema Golden | Solicite uma demonstração</title>
        <meta name="description" content="Preencha o formulário para solicitar uma demonstração gratuita do Sistema Golden - a solução completa para gestão da sua empresa." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para a página inicial
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Sistema Golden
              <span className="block text-blue-600">Transforme sua gestão</span>
            </h1>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Preencha o formulário ao lado para solicitar uma demonstração gratuita da nossa solução completa para gestão empresarial.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">Aumente sua produtividade</h3>
                    <p className="text-gray-600">Reduza em até 40% o tempo gasto em tarefas administrativas</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">Controle financeiro completo</h3>
                    <p className="text-gray-600">Visualize em tempo real a saúde financeira da sua empresa</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">Decisões baseadas em dados</h3>
                    <p className="text-gray-600">Relatórios e dashboards personalizados para sua gestão</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">Suporte personalizado</h3>
                    <p className="text-gray-600">Equipe dedicada para implementação e treinamento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="shadow-lg">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">Solicite uma demonstração</CardTitle>
                <CardDescription>Preencha o formulário abaixo para conhecer nossa solução</CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Solicitação recebida!</h3>
                    <p className="text-gray-600 mb-6">Nossa equipe entrará em contato em breve para agendar sua demonstração.</p>
                    <Button onClick={() => setIsSubmitted(false)}>Enviar nova solicitação</Button>
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
                      
                      <Button type="submit" className="w-full">
                        <Send className="mr-2 h-4 w-4" />
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
