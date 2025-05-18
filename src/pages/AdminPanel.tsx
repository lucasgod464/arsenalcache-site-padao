import React, { useEffect, useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, FileText, Search, Trash2, User, Users, BarChart, Webhook, Server, Database, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import DemoRequestsTable from '@/components/DemoRequestsTable';
import { Switch } from "@/components/ui/switch";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from '@/integrations/supabase/client';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const webhookFormSchema = z.object({
  webhook_url: z.string().url({
    message: "O URL do webhook deve ser válido"
  }),
  webhook_enabled: z.boolean().default(true),
  webhook_test_payload: z.string().optional(),
});

const AdminPanel = () => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeSystemTab, setActiveSystemTab] = useState<'golden' | 'diamond' | 'all'>('all');
  const [isTesting, setIsTesting] = useState(false);
  const [webhookSettings, setWebhookSettings] = useState({
    webhook_url: "https://construtor.yuccie.pro/webhook-test/0eec6c59-6fea-4e97-adfd-aa57e8745b4f",
    webhook_enabled: true,
    webhook_test_payload: JSON.stringify({
      name: "Teste",
      email: "teste@exemplo.com",
      phone: "11999998888",
      company: "Empresa Teste",
      message: "Mensagem de teste",
      timestamp: new Date().toISOString(),
      source: "admin-panel-test"
    }, null, 2)
  });

  // Inicializar o formulário com webhookSettings
  const webhookForm = useForm<z.infer<typeof webhookFormSchema>>({
    resolver: zodResolver(webhookFormSchema),
    defaultValues: webhookSettings
  });

  // Carregar configurações do localStorage ao iniciar
  useEffect(() => {
    const savedWebhookSettings = localStorage.getItem('webhookSettings');
    if (savedWebhookSettings) {
      try {
        const parsed = JSON.parse(savedWebhookSettings);
        // Certifique-se de que todos os campos necessários estejam presentes
        const safeSettings = {
          webhook_url: parsed.webhook_url || webhookSettings.webhook_url,
          webhook_enabled: parsed.webhook_enabled !== undefined ? parsed.webhook_enabled : webhookSettings.webhook_enabled,
          webhook_test_payload: parsed.webhook_test_payload || webhookSettings.webhook_test_payload
        };
        setWebhookSettings(safeSettings);
        webhookForm.reset(safeSettings); // Atualizar o formulário
      } catch (error) {
        console.error("Erro ao analisar as configurações de webhook:", error);
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication for demo purposes
    // In a real app, use proper authentication
    if (password === 'admin123') {
      setIsAuthenticated(true);
      toast({
        title: "Login bem-sucedido",
        description: "Bem-vindo ao painel administrativo.",
      });
      // Save to localStorage to persist login
      localStorage.setItem('adminAuthenticated', 'true');
    } else {
      toast({
        title: "Erro de autenticação",
        description: "Senha incorreta. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    // Check if user is already authenticated
    const isAuth = localStorage.getItem('adminAuthenticated') === 'true';
    setIsAuthenticated(isAuth);
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuthenticated');
    toast({
      title: "Logout realizado",
      description: "Você saiu do painel administrativo.",
    });
  };

  // Salvar configurações de webhook
  const onSubmitWebhookSettings = (data: z.infer<typeof webhookFormSchema>) => {
    // Garantir que todos os campos estejam presentes
    const completeData = {
      webhook_url: data.webhook_url,
      webhook_enabled: data.webhook_enabled,
      webhook_test_payload: data.webhook_test_payload || webhookSettings.webhook_test_payload
    };
    
    // Salvar no localStorage
    localStorage.setItem('webhookSettings', JSON.stringify(completeData));
    setWebhookSettings(completeData);
    
    toast({
      title: "Configurações salvas",
      description: "As configurações de webhook foram atualizadas com sucesso.",
    });
  };

  // Testar webhook
  const testWebhook = async () => {
    setIsTesting(true);
    const { webhook_url, webhook_test_payload } = webhookForm.getValues();
    
    try {
      let payload;
      try {
        payload = webhook_test_payload ? JSON.parse(webhook_test_payload) : {
          test: true,
          timestamp: new Date().toISOString()
        };
      } catch (e) {
        toast({
          title: "Erro no payload",
          description: "O payload de teste não é um JSON válido.",
          variant: "destructive"
        });
        setIsTesting(false);
        return;
      }
      
      // Enviar requisição para o webhook
      await fetch(webhook_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Importante para evitar erros de CORS
        body: JSON.stringify(payload),
      });
      
      toast({
        title: "Teste enviado",
        description: "O payload de teste foi enviado com sucesso para o webhook.",
      });
    } catch (error) {
      console.error("Erro ao testar webhook:", error);
      toast({
        title: "Erro no teste",
        description: "Não foi possível enviar o payload de teste. Verifique a URL.",
        variant: "destructive"
      });
    } finally {
      setIsTesting(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Painel Administrativo</CardTitle>
            <CardDescription>
              Digite a senha para acessar o painel administrativo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Input
                  id="password"
                  type="password"
                  placeholder="Senha de acesso"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">Acessar Painel</Button>
              <div className="text-center mt-4">
                <Link to="/" className="text-sm text-gray-500 hover:text-gray-700">
                  Voltar para o site principal
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span>Voltar ao site</span>
            </Link>
            <h1 className="text-2xl font-bold">Painel Administrativo | Sistemas Golden & Diamond</h1>
          </div>
          <Button variant="outline" onClick={handleLogout}>Sair</Button>
        </header>

        {/* Sistema Tabs */}
        <Tabs defaultValue="all" className="w-full mb-8" onValueChange={(value) => setActiveSystemTab(value as 'golden' | 'diamond' | 'all')}>
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="all" className="flex items-center gap-2">
              <BarChart className="w-4 h-4" />
              Todos os Sistemas
            </TabsTrigger>
            <TabsTrigger value="golden" className="flex items-center gap-2">
              <BarChart className="w-4 h-4" />
              Sistema Golden
            </TabsTrigger>
            <TabsTrigger value="diamond" className="flex items-center gap-2">
              <BarChart className="w-4 h-4" />
              Sistema Diamond
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <Tabs defaultValue="solicitacoes" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
            <TabsTrigger value="solicitacoes" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Solicitações de Demo
            </TabsTrigger>
            <TabsTrigger value="usuarios" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Usuários
            </TabsTrigger>
            <TabsTrigger value="integracoes" className="flex items-center gap-2">
              <Webhook className="w-4 h-4" />
              Integrações
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="solicitacoes" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>
                    {activeSystemTab === 'all' 
                      ? 'Solicitações de Demonstração (Todos os Sistemas)' 
                      : activeSystemTab === 'golden' 
                        ? 'Solicitações de Demonstração (Sistema Golden)' 
                        : 'Solicitações de Demonstração (Sistema Diamond)'}
                  </CardTitle>
                  <div className="flex gap-2">
                    <div className="relative w-64">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input 
                        type="search" 
                        placeholder="Buscar solicitações..." 
                        className="pl-8"
                      />
                    </div>
                    <Button variant="outline">Exportar CSV</Button>
                  </div>
                </div>
                <CardDescription>
                  Lista de todas as solicitações de demonstração recebidas pelo formulário.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DemoRequestsTable defaultSystem={activeSystemTab} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="usuarios" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Gerenciamento de Usuários</CardTitle>
                <CardDescription>
                  Esta funcionalidade estará disponível em breve.
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <User className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p className="text-lg font-medium">Módulo em Desenvolvimento</p>
                  <p>O gerenciamento de usuários estará disponível na próxima atualização.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integracoes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Configurações de Integrações</CardTitle>
                <CardDescription>
                  Gerencie as integrações com webhooks e APIs externas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="webhook">
                  <TabsList className="mb-6">
                    <TabsTrigger value="webhook">
                      <Webhook className="w-4 h-4 mr-2" />
                      Webhook
                    </TabsTrigger>
                    <TabsTrigger value="api" disabled>
                      <Database className="w-4 h-4 mr-2" />
                      APIs (Em breve)
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="webhook">
                    <div className="space-y-6">
                      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-md">
                        <h3 className="font-semibold text-amber-800">Sobre os Webhooks</h3>
                        <p className="text-amber-700 text-sm mt-1">
                          Os webhooks permitem enviar dados dos formulários para sistemas externos em tempo real.
                          Configure abaixo a URL para onde os dados serão enviados.
                        </p>
                      </div>

                      <Form {...webhookForm}>
                        <form onSubmit={webhookForm.handleSubmit(onSubmitWebhookSettings)} className="space-y-6">
                          <div className="grid gap-6">
                            <FormField
                              control={webhookForm.control}
                              name="webhook_enabled"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                  <div className="space-y-0.5">
                                    <FormLabel className="text-base">Webhook Ativo</FormLabel>
                                    <FormDescription>
                                      Ative ou desative o envio de dados para o webhook.
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
                            
                            <FormField
                              control={webhookForm.control}
                              name="webhook_url"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>URL do Webhook</FormLabel>
                                  <FormControl>
                                    <Input placeholder="https://exemplo.com/webhook" {...field} />
                                  </FormControl>
                                  <FormDescription>
                                    Endereço para onde serão enviados os dados capturados pelos formulários.
                                  </FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={webhookForm.control}
                              name="webhook_test_payload"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Payload para Teste</FormLabel>
                                  <FormControl>
                                    <Textarea 
                                      placeholder="{}" 
                                      className="font-mono min-h-[200px]" 
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormDescription>
                                    Dados JSON que serão enviados ao testar o webhook.
                                  </FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="flex gap-4">
                            <Button variant="outline" type="button" onClick={testWebhook} disabled={isTesting}>
                              {isTesting ? (
                                <>
                                  <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                  Testando...
                                </>
                              ) : (
                                <>
                                  <Server className="w-4 h-4 mr-2" />
                                  Testar Webhook
                                </>
                              )}
                            </Button>
                            <Button type="submit">
                              <Check className="w-4 h-4 mr-2" />
                              Salvar Configurações
                            </Button>
                          </div>

                          <div className="mt-6">
                            <h3 className="font-semibold mb-2">Origem dos Dados</h3>
                            <p className="text-sm text-gray-600 mb-3">
                              Selecione quais formulários enviarão dados para este webhook:
                            </p>
                            <ToggleGroup type="multiple" defaultValue={["golden", "diamond", "ia-conecta"]} className="justify-start">
                              <ToggleGroupItem value="golden">Sistema Golden</ToggleGroupItem>
                              <ToggleGroupItem value="diamond">Sistema Diamond</ToggleGroupItem>
                              <ToggleGroupItem value="ia-conecta">IA Conecta</ToggleGroupItem>
                            </ToggleGroup>
                          </div>
                        </form>
                      </Form>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
