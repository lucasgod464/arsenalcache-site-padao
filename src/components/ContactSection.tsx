
import React, { useState } from 'react';
import { Check, Phone, Send } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setFormState(prev => ({ ...prev, submitted: true }));
      toast({
        title: "Demonstração agendada!",
        description: "Entraremos em contato em breve para confirmar seu horário.",
        variant: "default",
      });
    }, 1000);
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
            
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-whatsapp-DEFAULT flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Fale diretamente conosco</p>
                <a href="https://wa.me/5511999999999" className="text-lg font-medium text-arsenal-dark hover:text-arsenal-DEFAULT transition-colors">
                  +55 (11) 99999-9999
                </a>
              </div>
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
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Solicitar demonstração
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
