import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const CTA = () => {
  const benefits = [
    "Instalação em 5 minutos",
    "Garantia de 2 anos",
    "Suporte técnico 24/7",
    "Atualizações gratuitas"
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <Card className="p-12 lg:p-16 bg-gradient-card border-primary/20 shadow-glow relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-tech-blue/5 rounded-full blur-2xl" />
          
          <div className="relative z-10 text-center space-y-8">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-surface-light border border-primary/20">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                  <span className="ml-2 text-sm font-medium">5.0 (2,847 avaliações)</span>
                </div>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                Pronto para o{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Futuro?
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Junte-se a milhares de motoristas que já transformaram sua experiência de direção.
                Solicite uma demonstração gratuita hoje mesmo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="text-lg px-12 py-6 shadow-glow animate-pulse-glow">
                Solicitar Demonstração Grátis
              </Button>
              <div className="text-sm text-muted-foreground">
                📞 (11) 9999-9999 | 📧 contato@assistente.ai
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 justify-center sm:justify-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-border/50">
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span>Disponível para todos os veículos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span>Entrega em todo o Brasil</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span>Parcelamento em até 12x</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTA;