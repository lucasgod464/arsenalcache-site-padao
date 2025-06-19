
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [webhookConfig, setWebhookConfig] = useState({
    url: '',
    enabled: false
  });

  // Carregar configurações de webhook
  useEffect(() => {
    const savedConfig = localStorage.getItem('webhookConfig');
    if (savedConfig) {
      try {
        const parsedConfig = JSON.parse(savedConfig);
        setWebhookConfig({
          url: parsedConfig.contactWebhookUrl || '',
          enabled: parsedConfig.contactWebhookEnabled || false
        });
      } catch (e) {
        console.error("Erro ao carregar configurações de webhook:", e);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      message: formData.get('message') as string,
      timestamp: new Date().toISOString(),
      source: "contact-form"
    };

    try {
      const webhookUrl = webhookConfig.enabled && webhookConfig.url
        ? webhookConfig.url
        : "https://construtor.yuccie.pro/webhook-test/0eec6c59-6fea-4e97-adfd-aa57e8745b4f";

      // Enviar dados para o webhook
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(data),
      });

      console.log("Dados enviados com sucesso para o webhook:", data);
      
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato com você em breve.",
        variant: "default",
      });

      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente em alguns minutos.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Entre em <span className="text-blue-600">contato</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pronto para transformar seu atendimento no WhatsApp? Nossa equipe está aqui para ajudar você a escolher a solução ideal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Fale conosco</h3>
              <p className="text-gray-600">
                Entre em contato através dos canais abaixo ou preencha o formulário. 
                Respondemos rapidamente e estamos prontos para ajudar.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">WhatsApp Direto</h4>
                  <p className="text-gray-600">+55 (12) 98115-6856</p>
                  <Button 
                    asChild
                    className="mt-2 bg-green-600 hover:bg-green-700"
                  >
                    <a 
                      href="https://wa.me/5512981156856" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Conversar no WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">E-mail</h4>
                  <p className="text-gray-600">contato@arsenalcache.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Horário de Atendimento</h4>
                  <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                  <p className="text-gray-600">Sábado: 9h às 12h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Envie sua mensagem</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e entraremos em contato rapidamente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo *</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      required 
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input 
                      id="company" 
                      name="company" 
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    required 
                    placeholder="Conte-nos sobre sua necessidade..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
