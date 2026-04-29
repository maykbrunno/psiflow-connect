import { Calendar, Brain, BookOpen, MapPin, Instagram, MessageCircle, Mail, Phone, ChevronDown, CheckCircle2, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import wagnerImg from "@/assets/wagner.jpeg";
import brainIcon from "@/assets/brain-icon.png";

const WHATSAPP_LINK = "https://wa.me/5586998252016?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta.";
const INSTAGRAM_LINK = "https://instagram.com/wagnerbarrospsi";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            {/* Photo */}
            <div className="flex-shrink-0 relative order-2 md:order-1">
              <div className="w-72 h-72 md:w-[450px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src={wagnerImg} alt="Psicólogo Wagner Barros" className="w-full h-full object-cover scale-110" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full -z-10 blur-2xl opacity-60"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full -z-10 blur-xl"></div>
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left space-y-8 order-1 md:order-2">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/10 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest">CRP 21/04332</span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] font-display text-primary">
                  Sua jornada de <br />
                  <span className="italic font-normal">autoconhecimento</span> <br />
                  começa aqui.
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed">
                  Olá, sou o <span className="font-semibold text-foreground">Wagner Barros</span>. 
                  Ofereço um espaço de acolhimento e escuta qualificada para ajudar você a ressignificar sua história e encontrar equilíbrio emocional.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 h-14 text-lg shadow-xl hover:translate-y-[-2px] transition-all"
                  asChild
                >
                  <a href="/agendar">
                    Nossa Agenda
                  </a>
                </Button>
              </div>
              
              <div className="pt-4 flex items-center gap-6 justify-center md:justify-start text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Atendimento Online</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Presencial em Parnaíba - Piauí</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Quote Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Quote className="w-12 h-12 text-secondary mx-auto mb-8 opacity-40" />
          <h2 className="text-3xl md:text-4xl font-medium font-display leading-relaxed italic text-primary/80">
            "A psicoterapia é um investimento em você mesmo. Um espaço seguro onde a sua dor é acolhida e a sua transformação é incentivada."
          </h2>
        </div>
      </section>

      {/* Atendimentos Section */}
      <section id="atendimentos" className="py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-primary">Conheça meus atendimentos!</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Online Therapy */}
            <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl shadow-primary/5 hover:shadow-primary/10 transition-all border border-primary/5 flex flex-col gap-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-display text-primary">Psicoterapia Online</h3>
              <p className="text-muted-foreground leading-relaxed">
                Atendimento remoto com o mesmo acolhimento e ética do presencial. Ideal para quem busca flexibilidade, conforto e segurança, sem as barreiras da distância.
              </p>
              <ul className="space-y-3 mt-4">
                {["Horários flexíveis", "Segurança e privacidade", "Conforto do seu lar"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="mt-auto bg-primary text-white rounded-full py-6 text-lg" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Saiba mais</a>
              </Button>
            </div>

            {/* Specialized Therapy */}
            <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl shadow-primary/5 hover:shadow-primary/10 transition-all border border-primary/5 flex flex-col gap-6">
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-display text-primary">Ansiedade e Depressão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Suporte especializado para lidar com os desafios da saúde mental contemporânea. Através de abordagens baseadas em evidências, trabalhamos na regulação emocional e autoconhecimento.
              </p>
              <ul className="space-y-3 mt-4">
                {["Acompanhamento personalizado", "Escuta sem julgamentos", "Foco no seu bem-estar"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="mt-auto bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full py-6 text-lg" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Agendar consulta</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-primary">O que dizem os pacientes</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "O Wagner é um profissional extremamente dedicado e atencioso. Senti-me acolhida desde a primeira sessão.",
              "Excelente psicólogo! Me ajudou muito a lidar com minhas crises de ansiedade. Recomendo demais.",
              "Um espaço de muita escuta e empatia. Tem sido fundamental para o meu crescimento pessoal."
            ].map((text, i) => (
              <div key={i} className="bg-section-alt p-8 rounded-[2rem] relative">
                <Quote className="w-8 h-8 text-primary/10 absolute top-6 right-6" />
                <p className="text-muted-foreground italic mb-6 leading-relaxed">"{text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/30 rounded-full flex items-center justify-center text-xs font-bold text-primary">
                    P{i+1}
                  </div>
                  <span className="text-sm font-semibold">Paciente</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold font-display max-w-3xl mx-auto leading-tight">
              Priorize sua saúde mental. Um novo começo é possível hoje mesmo!
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto italic">
              "Investir em psicoterapia é investir no seu ativo mais precioso: você."
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-12 h-16 text-xl font-bold shadow-2xl transition-transform hover:scale-105" asChild>
              <a href="/agendar">Nossa Agenda</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-primary">Perguntas Frequentes</h2>
            <p className="text-muted-foreground">Tire suas principais dúvidas sobre o processo terapêutico.</p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "Como funciona a primeira sessão?", a: "A primeira sessão é um momento de acolhimento e conhecimento mútuo. Nela, você poderá compartilhar suas demandas e entender como o processo terapêutico pode te ajudar." },
              { q: "Qual o tempo de duração das sessões?", a: "As sessões individuais têm duração média de 50 minutos, ocorrendo geralmente uma vez por semana." },
              { q: "Como funciona o atendimento online?", a: "O atendimento online é realizado via videochamada em plataformas seguras e sigilosas, garantindo a mesma qualidade do atendimento presencial." },
              { q: "Quais as formas de pagamento?", a: "Trabalhamos com Pix e transferência bancária. Entre em contato para consultar valores e disponibilidade." }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white border-none rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-2xl font-bold font-display text-primary">Wagner Barros</h3>
              <p className="text-muted-foreground max-w-xs leading-relaxed">
                Psicólogo Clínico <br />
                CRP 21/04332 <br />
                Parnaíba - Piauí
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex items-center gap-4">
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-section-alt rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-section-alt rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Wagner Barros. Todos os direitos reservados.
              </p>
              <p className="text-xs font-semibold text-primary/60 hover:text-primary transition-colors">
                Desenvolvido por <span className="text-primary">DigitalTap</span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-5 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] transition-all hover:scale-110 active:scale-95 group"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute right-full mr-4 bg-white text-foreground px-4 py-2 rounded-xl text-sm font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-primary/5">
          Agende sua sessão
        </span>
      </a>
    </div>
  );
};

export default Index;
