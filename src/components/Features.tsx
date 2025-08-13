import { Card } from "@/components/ui/card";
import { Mic, Brain, Shield, Zap, Car, MessageSquare } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Comando de Voz Avançado",
      description: "Reconhecimento de voz com 99% de precisão, mesmo com ruído do motor e estrada.",
      highlight: "99% precisão"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "IA Contextual",
      description: "Entende o contexto da viagem e oferece sugestões inteligentes baseadas no trajeto.",
      highlight: "Aprendizado contínuo"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Integração Total",
      description: "Conecta-se diretamente aos sistemas do veículo para controle completo.",
      highlight: "Plug & Play"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Assistente Conversacional",
      description: "Conversa natural e fluida, como ter um copiloto inteligente sempre presente.",
      highlight: "Linguagem natural"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacidade Total",
      description: "Todos os dados são processados localmente, garantindo sua privacidade.",
      highlight: "Dados locais"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Resposta Instantânea",
      description: "Processamento em tempo real sem dependência de internet.",
      highlight: "< 1s resposta"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Características{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Revolucionárias
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologia de ponta projetada especificamente para o ambiente automotivo,
            oferecendo uma experiência única e intuitiva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div className="px-3 py-1 rounded-full bg-surface-light border border-primary/20 text-xs font-medium text-primary">
                    {feature.highlight}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;