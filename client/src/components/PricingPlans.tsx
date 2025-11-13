import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

interface PricingPlansProps {
  onSelectPlan: (plan: string) => void;
}

export default function PricingPlans({ onSelectPlan }: PricingPlansProps) {
  const plans = [
    {
      id: "basico",
      name: "Plano Básico",
      originalPrice: 297,
      price: 10,
      discount: "ECONOMIZE 95%",
      features: [
        "Certificação completa: 51 Métodos de treino na musculação; do iniciante ao bodybuilder",
        "Material de apoio/apostila",
        "Um ano de acesso"
      ],
      popular: false
    },
    {
      id: "premium",
      name: "Plano Premium",
      originalPrice: 397,
      price: 20,
      discount: "ECONOMIZE 95%",
      features: [
        "Tudo do Plano Básico",
        "Módulo exclusivo de Treinos Avançados e Estratégias de Periodização",
        "Técnicas para hipertrofia máxima, cutting e recomposição corporal",
        "Protocolos utilizados por atletas e preparadores profissionais",
        "Aulas bônus com especialistas convidados",
        "Professores de educação física e atletas explicando na prática",
        "Acesso a aulas de biomecânica aplicada, ajustes posturais e execução perfeita",
        "Modelos prontos para diferentes objetivos (hipertrofia, resistência, definição, iniciantes e avançados)",
        "Material exclusivo com estudos de caso, erros mais comuns e estratégias para evolução contínua",
        "Acesso vitalício + atualizações gratuitas",
        "O curso evolui, e você acompanha tudo sem pagar nada a mais"
      ],
      popular: true
    }
  ];

  return (
    <section className="py-20 bg-[#0f1729]" id="planos">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 
            className="text-4xl font-bold text-yellow-500 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="text-pricing-title"
          >
            Escolha Seu Plano
          </h2>
          <p className="text-lg text-gray-400">Desconto exclusivo por tempo limitado</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            if (plan.id === "basico") {
              return (
                <div
                  key={plan.id}
                  className="overflow-hidden rounded-lg border border-gray-700/30"
                  data-testid={`card-plan-${index}`}
                >
                  <div className="bg-yellow-500 text-center py-4 px-6">
                    <h3 className="text-xl font-bold text-[#0f1729] uppercase tracking-wide">
                      TREINAMENTO COMPLETO
                    </h3>
                    <p className="text-sm font-semibold text-[#0f1729] uppercase mt-1" data-testid={`text-plan-name-${index}`}>
                      {plan.name}
                    </p>
                  </div>
                  
                  <div className="bg-[#0f1729] p-8">
                    <div className="text-center mb-6">
                      <p className="text-sm text-gray-400 mb-3">
                        De <span className="line-through">R${plan.originalPrice},00</span> por apenas:
                      </p>
                      <div className="text-7xl font-bold text-yellow-500 mb-4" data-testid={`text-plan-price-${index}`}>
                        R${plan.price}
                      </div>
                      <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full font-bold text-sm">
                        {plan.discount}
                      </div>
                    </div>

                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-3" data-testid={`feature-${index}-${fIndex}`}>
                          <Check className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      size="lg"
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-bold uppercase tracking-wide py-6 text-sm rounded-full shadow-lg"
                      onClick={() => onSelectPlan(plan.id)}
                      data-testid={`button-select-plan-${index}`}
                    >
                      SIM, QUERO MEU ACESSO AGORA!
                    </Button>
                    
                    <p className="text-center text-xs text-gray-400 mt-4">
                      Compra 100% segura.
                    </p>
                  </div>
                </div>
              );
            }
            
            return (
              <div
                key={plan.id}
                className="overflow-hidden rounded-lg border-2 border-red-600 relative"
                data-testid={`card-plan-${index}`}
              >
                <div className="bg-yellow-500 text-center py-2 px-6">
                  <p className="text-sm font-bold text-[#0f1729] uppercase tracking-wide">
                    MAIS VENDIDO
                  </p>
                </div>
                
                <div className="bg-red-600 text-center py-4 px-6">
                  <p className="text-base font-bold text-white uppercase tracking-wide leading-tight">
                    ESPERE! EU TENHO ALGO AINDA MELHOR PARA VOCÊ AQUI!
                  </p>
                </div>
                
                <div className="bg-[#0f1729] p-8">
                  <div className="text-center mb-6">
                    <p className="text-sm text-gray-400 mb-3">
                      De <span className="line-through">R${plan.originalPrice},00</span> por apenas:
                    </p>
                    <div className="text-7xl font-bold text-yellow-500 mb-4" data-testid={`text-plan-price-${index}`}>
                      R${plan.price}
                    </div>
                    <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full font-bold text-sm">
                      {plan.discount}
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3" data-testid={`feature-${index}-${fIndex}`}>
                        <Check className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold uppercase tracking-wide py-6 text-sm rounded-full shadow-lg"
                    onClick={() => onSelectPlan(plan.id)}
                    data-testid={`button-select-plan-${index}`}
                  >
                    SIM, EU QUERO O PLANO PREMIUM!
                  </Button>
                  
                  <p className="text-center text-xs text-gray-400 mt-4">
                    👥 + de 5.732 alunos
                  </p>
                  <p className="text-center text-xs text-gray-400">
                    Compra 100% segura. Acesso Vitalício.
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center mt-8 text-sm text-gray-400">
          ⏰ Promoção por tempo limitado • Acesso imediato após o pagamento
        </p>
      </div>
    </section>
  );
}
