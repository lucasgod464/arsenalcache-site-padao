
import React, { useState } from 'react';
import { Check, Phone, Send, MessageCircle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    submitted: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Preparar os dados formatados para envio
      const formattedData = {
        name: formState.name.trim(),
        email: formState.email.trim().toLowerCase(),
        phone: formState.phone.trim().replace(/\D/g, ''), // Remove caracteres não numéricos
        company: formState.company ? formState.company.trim() : null,
        message: formState.message ? formState.message.trim() : null,
        timestamp: new Date().toISOString(),
        source: "website-contact-form"
      };

      // Enviar dados para o Supabase
      const { error } = await supabase
        .from('demo_requests')
        .insert([
          {
            name: formattedData.name,
            email: formattedData.email,
            phone: formattedData.phone,
            company: formattedData.company,
            message: formattedData.message,
            status: 'pending'
          }
        ]);

      if (error) throw error;

      // Envio para webhook
      const webhookUrl = "https://construtor.yuccie.pro/webhook-test/0eec6c59-6fea-4e97-adfd-aa57e8745b4f";
      
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify(formattedData),
        });
        
        console.log("Dados enviados com sucesso para webhook:", formattedData);
      } catch (webhookError) {
        console.error("Erro no webhook (não crítico):", webhookError);
      }

      setFormState(prev => ({ ...prev, submitted: true }));
      toast({
        title: "Demonstração agendada!",
        description: "Entraremos em contato em breve para confirmar seu horário.",
        variant: "default",
      });
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="cta-gradient py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="fade-in-section">
            <span className="inline-block py-1 px-3 rounded-full bg-arsenal-light/20 text-arsenal-dark text-sm font-medium mb-6">
              Entre em contato
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transforme seu atendimento <span className="text-gradient">hoje mesmo</span>
            </h2>
            <p className="text-gray-700 mb-8">
              Agende uma demonstração gratuita e descubra como o MultiAtendimento da Arsenal Cache pode revolucionar a comunicação com seus clientes.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-arsenal-light/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-arsenal-DEFAULT" />
                </div>
                <span className="text-gray-700">Demonstração personalizada para o seu negócio</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-arsenal-light/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-arsenal-DEFAULT" />
                </div>
                <span className="text-gray-700">Atendimento consultivo sem pressão de vendas</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-arsenal-light/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-arsenal-DEFAULT" />
                </div>
                <span className="text-gray-700">Tire todas as suas dúvidas com especialistas</span>
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <a 
                href="https://wa.me/5512981156856" 
                className="phone-link-container"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="phone-icon">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Fale diretamente conosco</p>
                  <span className="phone-number">+55 (12) 98115-6856</span>
                </div>
              </a>
              
              <Button 
                className="w-full max-w-xs bg-green-500 hover:bg-green-600 text-white font-medium shadow-lg shadow-green-500/20 hover:shadow-green-500/30"
                onClick={() => window.open("https://wa.me/5512981156856", "_blank")}
                size="lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chamar no WhatsApp
              </Button>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 fade-in-section">
            {formState.submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Solicitação Enviada!</h3>
                <p className="text-gray-700 mb-6">
                  Agradecemos seu interesse. Nossa equipe entrará em contato em breve para agendar sua demonstração gratuita.
                </p>
                <button 
                  className="btn-outline"
                  onClick={() => setFormState(prev => ({ ...prev, submitted: false }))}
                >
                  Enviar nova solicitação
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold mb-6">Agende sua demonstração gratuita</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-arsenal-light"
                        placeholder="Seu nome"
                        value={formState.name}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-arsenal-light"
                        placeholder="seu@email.com"
                        value={formState.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-arsenal-light"
                        placeholder="(00) 00000-0000"
                        value={formState.phone}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-arsenal-light"
                        placeholder="Nome da empresa"
                        value={formState.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem (opcional)</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-arsenal-light"
                      placeholder="Conte-nos um pouco sobre sua necessidade..."
                      value={formState.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                    {isSubmitting ? "Enviando..." : "Agendar demonstração gratuita"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
