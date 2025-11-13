import { Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function GuaranteeSection() {
  return (
    <section className="py-16 bg-success-green/20 border-y border-success-green/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Shield className="w-12 h-12 text-success-green" />
          <h2 
            className="text-3xl font-bold text-success-green"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="text-guarantee-title"
          >
            Garantia de 7 Dias
          </h2>
        </div>
        <p className="text-lg text-foreground" data-testid="text-guarantee-desc">
          Satisfação garantida ou seu dinheiro de volta em 7 dias. Sem perguntas, sem complicação.
        </p>
      </div>
    </section>
  );
}
