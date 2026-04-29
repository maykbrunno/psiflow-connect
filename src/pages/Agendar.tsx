import { MessageCircle, ArrowLeft, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import wagnerImg from "@/assets/wagner.jpeg";

const WHATSAPP_LINK = "https://wa.me/5586998252016?text=Olá,%20tenho%20uma%20dúvida%20sobre%20o%20agendamento.";
const INSTAGRAM_LINK = "https://instagram.com/wagnerbarrospsi";

const Agendar = () => {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      {/* Header / Nav */}
      <nav className="py-6 border-b border-primary/5 bg-white/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Button variant="ghost" className="rounded-full" asChild>
            <a href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </a>
          </Button>
          <div className="text-center">
            <h1 className="text-xl font-bold font-display text-primary">Wagner Barros</h1>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Psicólogo Clínico</p>
          </div>
          <div className="w-20"></div> {/* Spacer */}
        </div>
      </nav>

      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Sidebar Info */}
            <div className="w-full lg:w-1/3 space-y-8 sticky top-28">
              <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-primary/5 border border-primary/5 text-center">
                <div className="w-32 h-32 mx-auto rounded-3xl overflow-hidden mb-6 shadow-lg rotate-3">
                  <img src={wagnerImg} alt="Wagner Barros" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-2xl font-bold font-display text-primary">Wagner Barros</h2>
                <p className="text-muted-foreground text-sm mb-6">CRP 21/04332 | Parnaíba - PI</p>
                
                <div className="space-y-3">
                  <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full py-6" asChild>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Dúvidas aqui
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full rounded-full py-6 border-primary text-primary hover:bg-primary/5" asChild>
                    <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-5 h-5 mr-2" />
                      Instagram
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-secondary/20 rounded-[2rem] p-8">
                <h3 className="font-bold text-primary mb-4 font-display">Instruções</h3>
                <ul className="text-sm space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">1.</span>
                    Escolha o melhor dia e horário na agenda ao lado.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">2.</span>
                    Preencha seus dados básicos para confirmação.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">3.</span>
                    Em caso de dúvidas, clique no botão de WhatsApp acima.
                  </li>
                </ul>
              </div>
            </div>

            {/* Calendar Iframe */}
            <div className="w-full lg:w-2/3 bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-primary/5 min-h-[700px]">
              <iframe 
                src="https://calendar.app.google/cuvgGmFs4dv69eo38" 
                className="w-full h-[700px] border-0"
                title="Agenda Wagner Barros"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Lite */}
      <footer className="py-12 border-t border-primary/5 bg-white">
        <div className="container mx-auto px-4 text-center space-y-4">
          <p className="text-sm text-muted-foreground italic max-w-md mx-auto">
            "O autoconhecimento é o caminho para a liberdade emocional."
          </p>
          <div className="pt-4 border-t border-primary/5 w-24 mx-auto"></div>
          <p className="text-[10px] font-semibold text-primary/60">
            Desenvolvido por <span className="text-primary">DigitalTap</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Agendar;
