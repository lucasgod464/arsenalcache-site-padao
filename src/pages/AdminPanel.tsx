
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
import { ArrowLeft, FileText, Search, Trash2, User, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import DemoRequestsTable from '@/components/DemoRequestsTable';
import { supabase } from '@/integrations/supabase/client';
import bcrypt from 'bcryptjs';

const AdminPanel = () => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError('');
    
    try {
      // Buscar hash da senha no banco de dados
      const { data, error } = await supabase
        .from('admin_credentials')
        .select('password_hash')
        .single();
      
      if (error) {
        console.error('Erro ao buscar credenciais:', error);
        setLoginError('Erro ao verificar credenciais. Verifique o console para detalhes.');
        toast({
          title: "Erro ao verificar credenciais",
          description: "Não foi possível buscar as informações de login.",
          variant: "destructive",
        });
        return;
      }
      
      // Se não encontrou dados, use uma senha padrão para desenvolvimento
      if (!data) {
        const isDefaultPassword = password === 'admin123';
        if (isDefaultPassword) {
          setIsAuthenticated(true);
          localStorage.setItem('adminAuthenticated', 'true');
          toast({
            title: "Login bem-sucedido (modo desenvolvimento)",
            description: "Bem-vindo ao painel administrativo.",
          });
        } else {
          setLoginError('Senha incorreta. Tente novamente.');
          toast({
            title: "Erro de autenticação",
            description: "Senha incorreta. Tente novamente.",
            variant: "destructive",
          });
        }
        return;
      }
      
      // Verificar senha usando bcrypt ou comparação direta (para senhas não hashificadas)
      let isPasswordValid = false;
      
      if (data.password_hash === password) {
        // Senha armazenada sem hash
        isPasswordValid = true;
      } else if (data.password_hash.startsWith('$2')) {
        // Senha armazenada com hash bcrypt
        try {
          isPasswordValid = bcrypt.compareSync(password, data.password_hash);
        } catch (e) {
          console.error('Erro ao verificar hash bcrypt:', e);
        }
      }
      
      if (isPasswordValid) {
        setIsAuthenticated(true);
        toast({
          title: "Login bem-sucedido",
          description: "Bem-vindo ao painel administrativo.",
        });
        // Salvar no localStorage para persistir login
        localStorage.setItem('adminAuthenticated', 'true');
      } else {
        setLoginError('Senha incorreta. Tente novamente.');
        toast({
          title: "Erro de autenticação",
          description: "Senha incorreta. Tente novamente.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Erro de autenticação:', error);
      setLoginError('Erro no servidor. Tente novamente mais tarde.');
      toast({
        title: "Erro no servidor",
        description: "Não foi possível verificar suas credenciais. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Verificar se o usuário já está autenticado
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
                  disabled={isLoading}
                  className={loginError ? "border-red-500" : ""}
                />
                {loginError && (
                  <p className="text-sm text-red-500">{loginError}</p>
                )}
                <p className="text-xs text-gray-400 mt-1">
                  Senha padrão: admin123 (para desenvolvimento)
                </p>
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Verificando..." : "Acessar Painel"}
              </Button>
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
            <h1 className="text-2xl font-bold">Painel Administrativo | Sistema Golden</h1>
          </div>
          <Button variant="outline" onClick={handleLogout}>Sair</Button>
        </header>

        <Tabs defaultValue="solicitacoes" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="solicitacoes" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Solicitações de Demo
            </TabsTrigger>
            <TabsTrigger value="usuarios" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Usuários
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="solicitacoes" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Solicitações de Demonstração</CardTitle>
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
                  Lista de todas as solicitações de demonstração gratuita recebidas pelo formulário.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DemoRequestsTable />
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
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
