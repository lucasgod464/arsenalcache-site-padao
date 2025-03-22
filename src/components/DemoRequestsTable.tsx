
import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Trash2, 
  MoreVertical, 
  Eye, 
  Check, 
  X, 
  Phone, 
  Mail,
  AlertCircle 
} from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Tipo para a solicitação de demonstração
interface DemoRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  status: 'pending' | 'contacted' | 'completed' | 'canceled';
  timestamp: string;
}

// Dados de exemplo para quando não houver dados no localStorage
const MOCK_REQUESTS: DemoRequest[] = [
  {
    id: "1",
    name: "João Silva",
    email: "joao.silva@empresa.com",
    phone: "(11) 98765-4321",
    company: "Tech Solutions",
    message: "Gostaria de uma demonstração para minha equipe de vendas.",
    status: "pending",
    timestamp: "2023-09-15T14:30:00"
  },
  {
    id: "2",
    name: "Maria Oliveira",
    email: "maria@consultorias.com.br",
    phone: "(21) 97654-3210",
    company: "Consultorias Ltda",
    message: "Preciso de uma solução para meus 10 atendentes.",
    status: "contacted",
    timestamp: "2023-09-14T10:15:00"
  },
  {
    id: "3",
    name: "Pedro Santos",
    email: "pedro@varejista.com",
    phone: "(31) 96543-2109",
    company: "Varejista Nacional",
    message: "Queremos integrar com nosso ERP atual.",
    status: "completed",
    timestamp: "2023-09-12T16:45:00"
  }
];

const DemoRequestsTable = () => {
  const { toast } = useToast();
  const [requests, setRequests] = useState<DemoRequest[]>([]);
  const [loading, setLoading] = useState(true);

  // Carregar dados do localStorage ou usar os dados mockados
  useEffect(() => {
    const localStorageKey = 'demoRequests';
    const savedRequests = localStorage.getItem(localStorageKey);
    
    if (savedRequests) {
      try {
        const parsedRequests = JSON.parse(savedRequests);
        setRequests(parsedRequests);
      } catch (error) {
        console.error('Error parsing saved requests:', error);
        setRequests(MOCK_REQUESTS);
      }
    } else {
      // Se não houver dados no localStorage, use os dados mockados
      setRequests(MOCK_REQUESTS);
    }
    
    setLoading(false);
  }, []);

  // Salvar as alterações no localStorage
  const saveToLocalStorage = (updatedRequests: DemoRequest[]) => {
    localStorage.setItem('demoRequests', JSON.stringify(updatedRequests));
  };

  // Formatação de data
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  // Atualiza o status de uma solicitação
  const updateStatus = (id: string, newStatus: DemoRequest['status']) => {
    const updatedRequests = requests.map(req => 
      req.id === id ? { ...req, status: newStatus } : req
    );
    
    setRequests(updatedRequests);
    saveToLocalStorage(updatedRequests);
    
    toast({
      title: "Status atualizado",
      description: `A solicitação foi marcada como "${newStatus}".`,
    });
  };

  // Remove uma solicitação
  const deleteRequest = (id: string) => {
    const updatedRequests = requests.filter(req => req.id !== id);
    setRequests(updatedRequests);
    saveToLocalStorage(updatedRequests);
    
    toast({
      title: "Solicitação removida",
      description: "A solicitação foi removida com sucesso.",
    });
  };

  // Renderiza o badge de status com a cor apropriada
  const renderStatusBadge = (status: DemoRequest['status']) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Pendente</Badge>;
      case 'contacted':
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Contatado</Badge>;
      case 'completed':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Concluído</Badge>;
      case 'canceled':
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Cancelado</Badge>;
      default:
        return <Badge variant="outline">Desconhecido</Badge>;
    }
  };

  if (loading) {
    return (
      <div className="py-10 text-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-gray-500">Carregando solicitações...</p>
      </div>
    );
  }

  return (
    <div>
      <Table>
        <TableCaption>Total de {requests.length} solicitações de demonstração.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px]">Nome</TableHead>
            <TableHead>Empresa</TableHead>
            <TableHead>Contato</TableHead>
            <TableHead>Data</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-10">
                <div className="flex flex-col items-center justify-center text-gray-500">
                  <AlertCircle className="w-10 h-10 mb-3 text-gray-400" />
                  <p className="text-lg font-medium">Nenhuma solicitação encontrada</p>
                  <p className="text-sm">As solicitações de demonstração aparecerão aqui quando os clientes preencherem o formulário de contato.</p>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            requests.map((request) => (
              <TableRow key={request.id}>
                <TableCell className="font-medium">{request.name}</TableCell>
                <TableCell>{request.company || "-"}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-3.5 h-3.5 mr-1.5" /> {request.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-3.5 h-3.5 mr-1.5" /> {request.phone}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{formatDate(request.timestamp)}</TableCell>
                <TableCell>{renderStatusBadge(request.status)}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-56" align="end">
                        <div className="grid gap-1">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="flex items-center justify-start font-normal"
                            onClick={() => {
                              toast({
                                title: "Detalhes da solicitação",
                                description: `${request.name}: "${request.message || 'Sem mensagem'}"`,
                              });
                            }}
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            Ver detalhes
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="flex items-center justify-start font-normal text-green-600"
                            onClick={() => updateStatus(request.id, 'completed')}
                            disabled={request.status === 'completed'}
                          >
                            <Check className="mr-2 h-4 w-4" />
                            Marcar como concluído
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="flex items-center justify-start font-normal text-blue-600"
                            onClick={() => updateStatus(request.id, 'contacted')}
                            disabled={request.status === 'contacted'}
                          >
                            <Phone className="mr-2 h-4 w-4" />
                            Marcar como contatado
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="flex items-center justify-start font-normal text-red-600"
                            onClick={() => updateStatus(request.id, 'canceled')}
                            disabled={request.status === 'canceled'}
                          >
                            <X className="mr-2 h-4 w-4" />
                            Marcar como cancelado
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="flex items-center justify-start font-normal"
                            onClick={() => window.open(`https://wa.me/${request.phone.replace(/\D/g, '')}`, '_blank')}
                          >
                            <Phone className="mr-2 h-4 w-4" />
                            Contatar via WhatsApp
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="flex items-center justify-start font-normal text-red-600"
                            onClick={() => deleteRequest(request.id)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Remover solicitação
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DemoRequestsTable;
