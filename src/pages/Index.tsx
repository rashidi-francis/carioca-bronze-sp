
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import { MessageCircle, Star, Shield, Clock, AirVent, Instagram } from "lucide-react";

const testimonials = [
  {
    name: "Juliana M.",
    comment: "Melhor bronzeamento de São Paulo! A Manu entende tudo de marquinha perfeita, parece que estive no Rio!",
    stars: 5,
  },
  {
    name: "Rafaela S.",
    comment: "Ambiente super limpo e confortável. Marquinha impecável e atendimento nota 10. Recomendo demais!",
    stars: 5,
  },
  {
    name: "Camila R.",
    comment: "Finalmente uma cabine profissional em SP. As 8 lâmpadas fazem toda diferença no resultado, amei!",
    stars: 5,
  },
  {
    name: "Beatriz T.",
    comment: "Já experimentei vários lugares, mas o bronzeado da Manu é outro nível. Vou sempre voltar!",
    stars: 5,
  },
];

const benefits = [
  {
    title: "Marquinha perfeita",
    description: "Bronzeado uniforme e marquinha estilo carioca impecável",
    icon: Star,
  },
  {
    title: "Tempo controlado",
    description: "Bronze seguro com tempo ajustado ao seu tipo de pele",
    icon: Clock,
  },
  {
    title: "Ambiente climatizado",
    description: "Conforto térmico durante toda a sessão de bronzeamento",
    icon: AirVent,
  },
  {
    title: "Produtos aprovados",
    description: "Cosméticos dermatologicamente testados e aprovados",
    icon: Shield,
  },
];

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=5511940869224&text=Ol%C3%A1%20vim%20do%20site,%20*Bronze%20Carioca%20em%20SP*%20%20gostaria%20agendar%20sess%C3%A3o%20de%20bronzeamento%20artificial...", "_blank");
    toast("Abrindo WhatsApp", {
      description: "Vamos agendar seu bronzeamento!",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-[#FDE1D3] to-[#FDF8F3]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#333] animate-fade-in" style={{textShadow: "2px 2px 4px rgba(0,0,0,0.1)"}}>
            Bronzeamento Artificial no Centro de São Paulo
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#555] max-w-3xl mx-auto animate-fade-in">
            A tradição carioca do bronze agora em SP. Segurança, conforto e marquinhas perfeitas!
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            className="px-8 py-6 text-lg bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 shadow-lg transform transition-all duration-300 hover:scale-105 animate-fade-in"
          >
            Agende sua sessão agora
          </Button>
        </div>
      </section>

      {/* Tradição Carioca Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#333] border-l-4 border-amber-400 pl-4">
                A Tradição Carioca Agora em São Paulo
              </h2>
              <p className="text-lg mb-4 text-[#555]">
                O método carioca de bronzeamento com máquina está conquistando São Paulo, trazendo o charme e a expertise das melhores casas do Rio de Janeiro para o centro da capital paulista.
              </p>
              <p className="text-lg mb-6 text-[#555]">
                Nosso estúdio conta com equipamento profissional de última geração: cabine com 8 lâmpadas e sistema de resfriamento, garantindo um bronze perfeito, rápido e seguro.
              </p>
              <Button 
                variant="outline" 
                onClick={handleWhatsAppClick}
                className="border-amber-400 text-amber-700 hover:bg-amber-50"
              >
                Conheça nosso espaço
              </Button>
            </div>
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl" data-aos="fade-left">
              <img 
                src="https://images.unsplash.com/photo-1592554119834-951db21673c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="Cabine profissional de bronzeamento" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quem é Manu Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#FDF8F3] to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#333] border-l-4 border-amber-400 pl-4">
                Quem é Manu? A carioca que trouxe o bronze raiz para o Centro de SP
              </h2>
              <p className="text-lg mb-4 text-[#555]">
                Emanuelle, ou simplesmente Manu como é carinhosamente conhecida, é carioca da gema e trouxe para São Paulo toda a experiência e paixão pelo bronze perfeito.
              </p>
              <p className="text-lg mb-6 text-[#555]">
                Especialista em marquinhas estilo carioca, Manu combina profissionalismo com o carisma típico do Rio, criando uma experiência única de atendimento e resultados impressionantes para suas clientes.
              </p>
              <div className="flex items-center space-x-4">
                <Button 
                  variant="outline"
                  className="border-amber-400 text-amber-700 hover:bg-amber-50"
                  onClick={() => window.open("https://instagram.com/bronze_manu_carioca", "_blank")}
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  Siga no Instagram
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 rounded-full overflow-hidden shadow-xl border-4 border-amber-200" data-aos="fade-right">
              <img 
                src="https://images.unsplash.com/photo-1624454002302-36b812a2b1e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="Manu, especialista em bronzeamento" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#333]">
            Benefícios do Bronzeamento com Máquina
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border border-amber-100 shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full mb-4 shadow-lg">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-[#333]">{benefit.title}</h3>
                    <p className="text-[#555]">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#FDF8F3] to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#333]">
            Depoimentos Reais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-amber-100 shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col">
                    <div className="flex mb-3">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-[#555] mb-4">"{testimonial.comment}"</p>
                    <p className="font-semibold text-[#333]">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#333]">
            Como Funciona o Agendamento
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg shadow-md max-w-xs">
              <div className="bg-amber-400 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-bold text-xl mb-2 text-[#333]">Clique no WhatsApp</h3>
              <p className="text-[#555]">Entre em contato pelo botão de WhatsApp para iniciar seu agendamento</p>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg shadow-md max-w-xs">
              <div className="bg-amber-400 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-bold text-xl mb-2 text-[#333]">Escolha o horário</h3>
              <p className="text-[#555]">Selecione a data e horário que melhor se encaixa na sua agenda</p>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg shadow-md max-w-xs">
              <div className="bg-amber-400 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-bold text-xl mb-2 text-[#333]">Compareça e relaxe</h3>
              <p className="text-[#555]">Venha no horário marcado e relaxe enquanto cuidamos do seu bronzeado perfeito</p>
            </div>
          </div>
          <Button 
            onClick={handleWhatsAppClick}
            className="px-8 py-6 text-lg bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            Agende sua sessão agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#333] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 border-l-4 border-amber-400 pl-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-amber-400" />
                  <span>WhatsApp: (11) 94086-9224</span>
                </li>
                <li className="flex items-center">
                  <Facebook className="h-5 w-5 mr-2 text-amber-400" />
                  <span>Facebook: facebook.com/bronzecariocasp</span>
                </li>
                <li className="flex items-center">
                  <Instagram className="h-5 w-5 mr-2 text-amber-400" />
                  <span>Instagram: @bronze_manu_carioca</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 border-l-4 border-amber-400 pl-4">Endereço</h3>
              <p>Centro de São Paulo - SP</p>
              <p>Próximo ao metrô da Sé e da República</p>
              <p className="mt-2">Endereço: Rua Praça da Sé, 21</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 border-l-4 border-amber-400 pl-4">Horário de Funcionamento</h3>
              <p>Segunda a Sexta: 10h às 19h</p>
              <p>Sábados: 10h às 18h</p>
              <p>Domingos: Consultar agenda</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 Bronzeamento Artificial Centro de São Paulo - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <div 
        className={`fixed ${isVisible ? 'opacity-100' : 'opacity-0'} bottom-6 right-6 z-50 transition-opacity duration-300`}
      >
        <Button
          onClick={handleWhatsAppClick}
          className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
