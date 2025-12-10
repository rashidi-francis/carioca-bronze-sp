import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import { MessageCircle, Star, Heart, Sparkles, Sun, Droplets, Shield, Clock, Instagram, MapPin, Phone } from "lucide-react";

const testimonials = [
  {
    name: "Juliana M.",
    comment: "Minha marquinha ficou perfeita! Agora posso arrasar na praia sem medo. A Manu é incrível!",
    stars: 5,
  },
  {
    name: "Rafaela S.",
    comment: "Ambiente super feminino e acolhedor. Me senti em casa! O bronze ficou natural e lindo.",
    stars: 5,
  },
  {
    name: "Camila R.",
    comment: "Finalmente um lugar que entende o que a gente quer! Marquinha definida e sem manchas.",
    stars: 5,
  },
  {
    name: "Beatriz T.",
    comment: "Já virei cliente fiel! Sempre saio com a pele dourada e pronta pra arrasar no verão.",
    stars: 5,
  },
];

const processSteps = [
  {
    step: 1,
    title: "Preparação da Pele",
    description: "Esfoliação e hidratação prévia para um bronze uniforme e duradouro",
    icon: Droplets,
  },
  {
    step: 2,
    title: "Escolha da Marquinha",
    description: "Você escolhe o modelo de biquíni ou fita para criar sua marquinha perfeita",
    icon: Heart,
  },
  {
    step: 3,
    title: "Sessão na Cabine",
    description: "Relaxe enquanto nossa cabine de 8 lâmpadas proporciona o bronze ideal",
    icon: Sun,
  },
  {
    step: 4,
    title: "Resultado Final",
    description: "Pele dourada e marquinha impecável pronta para exibir na praia ou piscina!",
    icon: Sparkles,
  },
];

const benefits = [
  {
    title: "Marquinha Perfeita",
    description: "Bronze uniforme com marquinha definida estilo carioca",
    icon: Heart,
  },
  {
    title: "Ambiente Feminino",
    description: "Espaço acolhedor e pensado especialmente para você",
    icon: Sparkles,
  },
  {
    title: "Tempo Controlado",
    description: "Sessões personalizadas para seu tipo de pele",
    icon: Clock,
  },
  {
    title: "Produtos Aprovados",
    description: "Cosméticos dermatologicamente testados",
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-pink-soft overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 animate-fade-in">
                ✨ Bronzeamento Artificial Feminino
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground animate-fade-in leading-tight">
                Sua <span className="text-primary">Marquinha Perfeita</span> no Centro de São Paulo
              </h1>
              <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-xl animate-fade-in">
                O charme carioca do bronze agora em SP! Ambiente exclusivo feminino, marquinhas impecáveis e o dourado perfeito para arrasar na praia e piscina.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-primary hover:bg-pink-600 text-primary-foreground shadow-pink transform transition-all duration-300 hover:scale-105 px-8 py-6 text-lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agende sua Sessão
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
                  onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Como Funciona
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 animate-fade-in-up">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/imagesupload/bronze-foto1.webp" 
                    alt="Resultado de marquinha de bronzeamento na cintura" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/imagesupload/marquinha-costas.jpeg" 
                    alt="Resultado marquinha nas costas" 
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/imagesupload/marquinha-colo.jpeg" 
                    alt="Resultado marquinha no colo" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=500&fit=crop" 
                    alt="Mulher na piscina com bronze" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Resultados Reais
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Marquinhas que <span className="text-primary">Fazem Sucesso</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Veja como nossas clientes arrasam na praia e piscina com o bronze perfeito feito aqui no nosso estúdio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=600&fit=crop" 
                alt="Mulher relaxando na praia" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-primary-foreground font-medium">Pronta para a praia!</p>
              </div>
            </div>
            
            <div className="group relative rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="/imagesupload/marquinha-fita.jpeg" 
                alt="Processo de bronzeamento com fita" 
                className="w-full h-80 object-cover object-top group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-primary-foreground font-medium">Marquinha definida</p>
              </div>
            </div>
            
            <div className="group relative rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=500&h=600&fit=crop" 
                alt="Mulher na piscina" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-primary-foreground font-medium">Bronze perfeito para piscina!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-20 bg-gradient-pink-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Passo a Passo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como Funciona o <span className="text-primary">Bronzeamento</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Entenda cada etapa do processo para conquistar sua marquinha perfeita
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/80 backdrop-blur">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nosso Estúdio Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Nosso Espaço
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Estúdio Exclusivo <span className="text-primary">Feminino</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Nosso estúdio foi pensado especialmente para você! Um ambiente acolhedor, feminino e super confortável no coração do Centro de São Paulo.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">Ambiente decorado e aconchegante</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">Cabine profissional de 8 lâmpadas</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">Privacidade e conforto garantidos</span>
                </li>
              </ul>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-primary hover:bg-pink-600 text-primary-foreground shadow-pink"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Conhecer o Estúdio
              </Button>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img 
                src="/imagesupload/espaco-porta.jpeg" 
                alt="Porta de entrada do estúdio Bronze Manu Carioca" 
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="/imagesupload/espaco-recepcao.jpeg" 
                alt="Recepção do estúdio com decoração verde" 
                className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
              />
              <img 
                src="/imagesupload/espaco-produtos.jpeg" 
                alt="Mesa de produtos para bronzeamento" 
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="/imagesupload/espaco-cabine.jpeg" 
                alt="Cabine de bronzeamento com lâmpadas UV" 
                className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quem é Manu Section */}
      <section className="py-20 bg-gradient-pink-soft">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Conheça a Especialista
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Quem é <span className="text-primary">Manu</span>?
              </h2>
              <p className="text-muted-foreground mb-4">
                Manu é carioca e trouxe para São Paulo toda a tradição do bronzeamento artificial do Rio de Janeiro. Com anos de experiência, ela domina a arte da marquinha perfeita!
              </p>
              <p className="text-muted-foreground mb-6">
                Apaixonada pelo que faz, Manu cuida de cada cliente com carinho e atenção, garantindo que você saia do estúdio pronta para arrasar em qualquer ocasião.
              </p>
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  onClick={() => window.open("https://instagram.com/bronze_manu_carioca", "_blank")}
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  @bronze_manu_carioca
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl"></div>
                <img 
                  src="/imagesupload/house-manager.webp" 
                  alt="Manu, especialista em bronzeamento" 
                  className="relative rounded-3xl shadow-xl w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Por que nos escolher
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Benefícios do <span className="text-primary">Nosso Bronze</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border border-border/50 shadow-md hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                    <benefit.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-pink-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Depoimentos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que nossas <span className="text-primary">Clientes Dizem</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <CardContent className="pt-6 pb-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-pink">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Pronta para sua Marquinha Perfeita?
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
            Agende agora sua sessão e conquiste o bronze dos sonhos! Ambiente exclusivo feminino no Centro de São Paulo.
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg transform transition-all duration-300 hover:scale-105 px-10 py-6 text-lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Agendar pelo WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 border-l-4 border-primary pl-4">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-primary" />
                  <span>WhatsApp: (11) 94086-9224</span>
                </li>
                <li className="flex items-center">
                  <Instagram className="h-5 w-5 mr-3 text-primary" />
                  <span>@bronze_manu_carioca</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 border-l-4 border-primary pl-4">Endereço</h3>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary mt-1" />
                <div>
                  <p>Centro de São Paulo - SP</p>
                  <p>Próximo ao metrô da Sé e República</p>
                  <p className="mt-2">Rua Praça da Sé, 21</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 border-l-4 border-primary pl-4">Horário</h3>
              <p>Segunda a Sexta: 10h às 19h</p>
              <p>Sábados: 10h às 18h</p>
              <p>Domingos: Consultar agenda</p>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
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
          className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center animate-float"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
};

export default Index;