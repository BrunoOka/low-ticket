import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Shield } from "lucide-react";

interface OfferSectionProps {
  onCTAClick: () => void;
}

export default function OfferSection({ onCTAClick }: OfferSectionProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="p-12 border-2 border-primary/20">
          <div className="text-center space-y-6">
            <h2 
              className="text-4xl font-bold text-primary"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              data-testid="text-offer-title"
            >
              Oferta Especial
            </h2>
            
            <div className="py-6">
              <div className="text-6xl font-bold text-cta-orange mb-2" data-testid="text-offer-price">
                R$29
              </div>
              <p className="text-muted-foreground">Pagamento único • Acesso vitalício</p>
            </div>
            
            <div className="bg-success-green/10 border border-success-green/20 rounded-lg p-4 flex items-center justify-center gap-3">
              <Gift className="w-5 h-5 text-success-green" />
              <p className="text-success-green font-semibold" data-testid="text-offer-bonus">
                Bônus: Vídeo demonstrativo com 5 métodos exclusivos
              </p>
            </div>
            
            <Button
              size="lg"
              className="bg-cta-orange hover:bg-cta-orange text-cta-orange-foreground px-12 py-6 text-lg font-semibold uppercase tracking-wide shadow-xl hover-elevate active-elevate-2 w-full md:w-auto"
              onClick={onCTAClick}
              data-testid="button-offer-cta"
            >
              Quero Meu Guia Agora
            </Button>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4" />
              <span data-testid="text-offer-guarantee">Satisfação garantida ou seu dinheiro de volta em 7 dias</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
