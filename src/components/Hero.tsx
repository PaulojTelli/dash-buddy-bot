import { Button } from "@/components/ui/button";
import robotDashboard from "@/assets/robot-dashboard.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      
      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-surface-light border border-primary/20">
                <span className="text-sm text-primary font-medium">
                  Tecnologia Automotiva do Futuro
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Seu{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Assistente IA
                </span>{" "}
                no Painel
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Revolucione sua experiência de direção com nosso robô assistente inteligente. 
                Integrado perfeitamente ao painel do seu veículo.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 shadow-glow animate-pulse-glow">
                Solicitar Demonstração
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/30 hover:border-primary">
                Ver Características
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Precisão de Voz</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Disponível</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5s</div>
                <div className="text-sm text-muted-foreground">Instalação</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={robotDashboard} 
                alt="Robô assistente integrado no painel do carro"
                className="w-full h-auto animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full border border-primary/20 flex items-center justify-center">
              <div className="w-12 h-12 bg-primary rounded-full animate-pulse-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;