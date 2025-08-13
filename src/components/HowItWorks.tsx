import carInterior from "@/assets/car-interior.jpg";
import { ArrowRight, Plug, Settings, Mic } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Plug className="w-8 h-8" />,
      title: "Instalação Simples",
      description: "Conecte o dispositivo ao painel do seu carro em menos de 5 minutos. Não requer modificações no veículo."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Configuração Automática",
      description: "O sistema se auto-configura e aprende as preferências do veículo e do motorista automaticamente."
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Ativação por Voz",
      description: "Diga 'Olá Assistente' e comece a usar todos os recursos inteligentes imediatamente."
    }
  ];

  return (
    <section className="py-24 px-6 bg-surface-dark/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Como{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Funciona
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Três passos simples para transformar sua experiência de direção
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-4">
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <div className="px-3 py-1 rounded-full bg-surface-light text-primary text-sm font-medium">
                        {index + 1}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-primary/40 self-center" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={carInterior} 
                alt="Interior do carro com assistente IA integrado"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              
              {/* Overlay elements */}
              <div className="absolute top-6 left-6 px-4 py-2 rounded-lg bg-surface-dark/80 backdrop-blur-sm border border-primary/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Assistente Ativo</span>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 px-4 py-2 rounded-lg bg-surface-dark/80 backdrop-blur-sm border border-primary/20">
                <span className="text-sm text-primary font-medium">Instalação Completa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;