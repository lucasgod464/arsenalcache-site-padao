
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { Save, Trash2, RefreshCw, Globe } from 'lucide-react';

// Esquema de validação para configurações de webhook
const webhookConfigSchema = z.object({
  leadsPageWebhookUrl: z.string().url({ message: "URL inválida" }).or(z.string().length(0)),
  leadsPageWebhookEnabled: z.boolean().default(false),
  masterClassWebhookUrl: z.string().url({ message: "URL inválida" }).or(z.string().length(0)),
  masterClassWebhookEnabled: z.boolean().default(false),
  iaConectaWebhookUrl: z.string().url({ message: "URL inválida" }).or(z.string().length(0)),
  iaConectaWebhookEnabled: z.boolean().default(false)
});

type WebhookConfig = z.infer<typeof webhookConfigSchema>;

const WebhookConfigPage = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("general");
  
  const form = useForm<WebhookConfig>({
    resolver: zodResolver(webhookConfigSchema),
    defaultValues: {
      leadsPageWebhookUrl: "",
      leadsPageWebhookEnabled: false,
      masterClassWebhookUrl: "",
      masterClassWebhookEnabled: false,
      iaConectaWebhookUrl: "",
      iaConectaWebhookEnabled: false
    }
  });

  // Carregar configurações do localStorage
  useEffect(() => {
    const savedConfig = localStorage.getItem('webhookConfig');
    if (savedConfig) {
      try {
        const parsedConfig = JSON.parse(savedConfig);
        form.reset(parsedConfig);
      } catch (e) {
        console.error("Erro ao carregar configurações:", e);
      }
    }
  }, [form]);

  const onSubmit = (values: WebhookConfig) => {
    setIsLoading(true);
    
    try {
      // Salvar configurações no localStorage
      localStorage.setItem('webhookConfig', JSON.stringify(values));
      
      toast({
        title: "Configurações salvas",
        description: "As configurações de webhook foram salvas com sucesso.",
      });
    } catch (error) {
      console.error("Erro ao salvar configurações:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao salvar as configurações.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    form.reset({
      leadsPageWebhookUrl: "",
      leadsPageWebhookEnabled: false,
      masterClassWebhookUrl: "",
      masterClassWebhookEnabled: false,
      iaConectaWebhookUrl: "",
      iaConectaWebhookEnabled: false
    });
    
    localStorage.removeItem('webhookConfig');
    
    toast({
      title: "Configurações resetadas",
      description: "Todas as configurações foram redefinidas para os valores padrão.",
    });
  };

  const testWebhook = async (webhookUrl: string, formName: string) => {
    if (!webhookUrl) {
      toast({
        title: "URL não definida",
        description: "Por favor, defina uma URL de webhook válida antes de testar.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Enviar dados de teste para o webhook
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Importante para evitar erros de CORS
        body: JSON.stringify({
          test: true,
          timestamp: new Date().toISOString(),
          message: `Teste de webhook para formulário: ${formName}`,
          source: "webhook-config-page"
        }),
      });
      
      toast({
        title: "Requisição enviada",
        description: `Teste enviado para webhook do formulário ${formName}. Verifique o serviço de destino para confirmar o recebimento.`,
      });
    } catch (error) {
      console.error("Erro ao testar webhook:", error);
      toast({
        title: "Erro",
        description: "Não foi possível testar o webhook. Verifique a URL e tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 pb-16">
      <Helmet>
        <title>Configuração de Webhooks | Sistema Golden</title>
        <meta name="description" content="Configure webhooks para formulários do Sistema Golden" />
        <style>
          {`
            body {
              background-color: #f9fafb;
            }
          `}
        </style>
      </Helmet>

      <div className="py-8 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Configuração de Webhooks</h1>
            <p className="text-gray-600">Configure os webhooks para os formulários do sistema</p>
          </div>
          
          <div className="mb-8">
            <Card>
              <CardHeader className="bg-gray-50 border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Configurações de Webhooks</CardTitle>
                    <CardDescription>Configure para onde os dados dos formulários serão enviados</CardDescription>
                  </div>
                  <Globe className="h-8 w-8 text-gray-400" />
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                      <TabsList className="mb-4">
                        <TabsTrigger value="general">Geral</TabsTrigger>
                        <TabsTrigger value="leads">Golden Leads</TabsTrigger>
                        <TabsTrigger value="masterclass">MasterClass</TabsTrigger>
                        <TabsTrigger value="iaconecta">IA Conecta</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="general" className="space-y-4">
                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                          <h2 className="text-lg font-semibold text-amber-800 mb-2">Como configurar os webhooks</h2>
                          <p className="text-amber-800 mb-2">
                            Configure URLs de webhook para receber dados dos formulários quando forem enviados.
                          </p>
                          <ul className="list-disc list-inside text-sm text-amber-700 space-y-1">
                            <li>Insira uma URL válida para cada formulário</li>
                            <li>Ative ou desative cada webhook individualmente</li>
                            <li>Use o botão de teste para verificar a conexão</li>
                            <li>As configurações são salvas no navegador local</li>
                          </ul>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="leads" className="space-y-4">
                        <FormField
                          control={form.control}
                          name="leadsPageWebhookUrl"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>URL do Webhook para Golden Leads</FormLabel>
                              <FormControl>
                                <Input placeholder="https://seu-webhook.com/endpoint" {...field} />
                              </FormControl>
                              <FormDescription>
                                URL para onde os dados do formulário Golden Leads serão enviados
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="flex items-center justify-between py-2">
                          <div className="space-y-0.5">
                            <FormField
                              control={form.control}
                              name="leadsPageWebhookEnabled"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                  <div className="space-y-0.5">
                                    <FormLabel className="text-base">
                                      Ativar webhook para Golden Leads
                                    </FormLabel>
                                    <FormDescription>
                                      Quando ativado, os dados do formulário serão enviados para o webhook
                                    </FormDescription>
                                  </div>
                                  <FormControl>
                                    <Switch
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <Button 
                            type="button" 
                            variant="outline"
                            onClick={() => testWebhook(form.getValues('leadsPageWebhookUrl'), 'Golden Leads')}
                            disabled={!form.getValues('leadsPageWebhookUrl')}
                          >
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Testar Webhook
                          </Button>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="masterclass" className="space-y-4">
                        <FormField
                          control={form.control}
                          name="masterClassWebhookUrl"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>URL do Webhook para MasterClass</FormLabel>
                              <FormControl>
                                <Input placeholder="https://seu-webhook.com/endpoint" {...field} />
                              </FormControl>
                              <FormDescription>
                                URL para onde os dados do formulário MasterClass serão enviados
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="flex items-center justify-between py-2">
                          <div className="space-y-0.5">
                            <FormField
                              control={form.control}
                              name="masterClassWebhookEnabled"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                  <div className="space-y-0.5">
                                    <FormLabel className="text-base">
                                      Ativar webhook para MasterClass
                                    </FormLabel>
                                    <FormDescription>
                                      Quando ativado, os dados do formulário serão enviados para o webhook
                                    </FormDescription>
                                  </div>
                                  <FormControl>
                                    <Switch
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <Button 
                            type="button" 
                            variant="outline"
                            onClick={() => testWebhook(form.getValues('masterClassWebhookUrl'), 'MasterClass')}
                            disabled={!form.getValues('masterClassWebhookUrl')}
                          >
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Testar Webhook
                          </Button>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="iaconecta" className="space-y-4">
                        <FormField
                          control={form.control}
                          name="iaConectaWebhookUrl"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>URL do Webhook para IA Conecta</FormLabel>
                              <FormControl>
                                <Input placeholder="https://seu-webhook.com/endpoint" {...field} />
                              </FormControl>
                              <FormDescription>
                                URL para onde os dados do formulário IA Conecta serão enviados
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="flex items-center justify-between py-2">
                          <div className="space-y-0.5">
                            <FormField
                              control={form.control}
                              name="iaConectaWebhookEnabled"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                  <div className="space-y-0.5">
                                    <FormLabel className="text-base">
                                      Ativar webhook para IA Conecta
                                    </FormLabel>
                                    <FormDescription>
                                      Quando ativado, os dados do formulário serão enviados para o webhook
                                    </FormDescription>
                                  </div>
                                  <FormControl>
                                    <Switch
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <Button 
                            type="button" 
                            variant="outline"
                            onClick={() => testWebhook(form.getValues('iaConectaWebhookUrl'), 'IA Conecta')}
                            disabled={!form.getValues('iaConectaWebhookUrl')}
                          >
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Testar Webhook
                          </Button>
                        </div>
                      </TabsContent>
                    </Tabs>

                    <Separator />

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={handleReset}>
                        <Trash2 className="mr-2 h-4 w-4" />
                        Resetar Configurações
                      </Button>
                      <Button type="submit" disabled={isLoading}>
                        {isLoading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Salvando...
                          </>
                        ) : (
                          <>
                            <Save className="mr-2 h-4 w-4" />
                            Salvar Configurações
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebhookConfigPage;
