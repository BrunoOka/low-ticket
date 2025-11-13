import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface UpsellModalProps {
  isOpen: boolean;
  onAccept: () => void;
  onDecline: () => void;
}

export default function UpsellModal({ isOpen, onAccept, onDecline }: UpsellModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" data-testid="modal-upsell">
      <Card className="max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-300 bg-gradient-to-br from-card to-card/80 border-2 border-cta-orange/30">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-cta-orange/20 border border-cta-orange/30 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-5 h-5 text-cta-orange" />
            <span className="text-cta-orange font-bold uppercase text-sm">Oferta Exclusiva</span>
          </div>
          
          <h3 
            className="text-3xl font-bold text-foreground mb-2 uppercase"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="text-upsell-title"
          >
            ESPERE! OFERTA EXCLUSIVA!
          </h3>
          
          <p className="text-base text-muted-foreground mb-4">
            Que tal ter acesso a <span className="font-bold text-foreground">TUDO</span> por uma pequena diferença?
          </p>

          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-6">
            <p className="text-foreground mb-3 leading-relaxed">
              Leve o <span className="font-bold text-primary">Plano Premium Completo</span> com acesso vitalício, todos os bônus e muito mais por mais
            </p>
            <div className="text-5xl font-bold text-cta-orange mb-1" data-testid="text-upsell-price">
              R$9,99
            </div>
            <p className="text-sm text-muted-foreground">
              Total: R$19,99 (ao invés de R$279)
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <Button
            size="lg"
            className="w-full bg-success-green hover:bg-success-green text-success-green-foreground font-semibold uppercase tracking-wide hover-elevate active-elevate-2"
            onClick={onAccept}
            data-testid="button-upsell-accept"
          >
            QUERO APROVEITAR
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="w-full bg-muted/50 border-border hover:bg-muted"
            onClick={onDecline}
            data-testid="button-upsell-decline"
          >
            Não, quero apenas o básico.
          </Button>
        </div>
      </Card>
    </div>
  );
}
