import { UserPlus, Calendar, Brain, BookOpen, MapPin, Instagram, MessageCircle, Mail, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import wagnerImg from "@/assets/wagner.jpeg";
import heroBg from "@/assets/hero-bg.jpg";
import brainIcon from "@/assets/brain-icon.png";
import { downloadVCard } from "@/lib/vcard";

const WHATSAPP_LINK = "https://wa.me/5586998252016?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta.";
const INSTAGRAM_LINK = "https://instagram.com/wagnerbarrospsi";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Text */}
            <div className="flex-1 text-center md:text-left space-y-6 z-10">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <img src={brainIcon} alt="" className="w-8 h-8" />
                <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">Psicólogo Clínico</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                O melhor para sua{" "}
                <span className="text-gradient">Saúde Mental</span>{" "}
                você encontra aqui!
              </h1>
              <p className="text-muted-foreground text-lg max-w-lg mx-auto md:mx-0">
                Atendimento humanizado e acolhedor para ajudar você a encontrar equilíbrio e bem-estar emocional.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-base shadow-lg"
                  onClick={downloadVCard}
                >
                  <UserPlus className="mr-2 h-5 w-5" />
                  Salvar Contato
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 text-base border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Agendar Consulta
                  </a>
                </Button>
              </div>
              <a href="#agendamento" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mt-4">
                Deslize para baixo para acessar links úteis
                <ChevronDown className="h-4 w-4 animate-bounce" />
              </a>
            </div>
            {/* Photo */}
            <div className="flex-shrink-0 relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-2xl">
                <img src={wagnerImg} alt="Psicólogo Wagner Barros" className="w-full h-full object-cover" width={384} height={384} />
              </div>
              <img src={brainIcon} alt="" className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 opacity-60" loading="lazy" />
            </div>
          </div>
        </div>
        {/* Decorative bg */}
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none" aria-hidden="true" />
      </section>

      {/* Agendamento Online */}
      <section id="agendamento" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 text-center space-y-6">
          <div className="flex items-center gap-2 justify-center text-muted-foreground">
            <img src={brainIcon} alt="" className="w-6 h-6" loading="lazy" />
            <span className="text-sm font-medium">Wagner Barros</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Agendamento 100% Online
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Agende sua consulta de forma rápida e prática pelo WhatsApp. Atendimento presencial e online.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 text-base shadow-lg"
            asChild
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Agende sua Consulta
            </a>
          </Button>
        </div>
      </section>

      {/* Terapias & Abordagens */}
      <section className="py-16 md:py-24 section-alt">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Terapias &amp; Abordagens
              </h2>
              <p className="text-muted-foreground text-lg">
                Conheça as diferentes abordagens terapêuticas utilizadas para auxiliar no seu processo de autoconhecimento e bem-estar emocional.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Brain, title: "Terapia Cognitivo-Comportamental", desc: "Técnicas para reestruturar pensamentos e comportamentos" },
                  { icon: BookOpen, title: "Psicoterapia Individual", desc: "Atendimento personalizado para suas necessidades" },
                  { icon: Brain, title: "Ansiedade e Depressão", desc: "Tratamento especializado para transtornos emocionais" },
                  { icon: BookOpen, title: "Desenvolvimento Pessoal", desc: "Ferramentas para crescimento e autoconhecimento" },
                ].map((item, i) => (
                  <div key={i} className="bg-card rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <item.icon className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <img src={brainIcon} alt="Saúde Mental" className="w-48 h-48 md:w-64 md:h-64 opacity-80" loading="lazy" width={256} height={256} />
            </div>
          </div>
        </div>
      </section>

      {/* Blog / Conteúdo */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 text-center space-y-6">
          <div className="flex items-center gap-2 justify-center text-muted-foreground">
            <img src={brainIcon} alt="" className="w-6 h-6" loading="lazy" />
            <span className="text-sm font-medium">Wagner Barros</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Visite nosso Instagram
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Conteúdo sobre psicologia, dicas de saúde mental, informações e dicas sobre saúde mental e emocional.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-10 text-base border-primary text-primary hover:bg-primary/10"
            asChild
          >
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" />
              @wagnerbarrospsi
            </a>
          </Button>
        </div>
      </section>

      {/* Localização */}
      <section className="py-16 md:py-24 section-alt">
        <div className="container mx-auto px-4 text-center space-y-6">
          <div className="flex items-center gap-2 justify-center">
            <MapPin className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Atendemos até no WhatsApp</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">A nossa Localização</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Atendimento presencial e online. Entre em contato para mais informações sobre endereço e horários.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
              asChild
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" />
                (86) 99825-2016
              </a>
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="mailto:wagnersp2014@hotmail.com">
                <Mail className="mr-2 h-4 w-4" />
                wagnersp2014@hotmail.com
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-primary-foreground rounded-full px-8 hover:opacity-90"
              asChild
            >
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
              </a>
            </Button>
            <Button
              className="bg-green-600 text-primary-foreground rounded-full px-8 hover:bg-green-700"
              asChild
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>
          <p className="text-center text-sm mt-6 opacity-60" style={{ color: 'hsl(0 0% 100%)' }}>
            © {new Date().getFullYear()} Wagner Barros — Psicólogo. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-primary-foreground p-4 rounded-full shadow-2xl transition-transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
};

export default Index;
