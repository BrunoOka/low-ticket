import { Card } from "@/components/ui/card";
import { Dumbbell, Target, Clock, Rocket } from "lucide-react";

export default function BenefitsGrid() {
  const benefits = [
    {
      icon: Dumbbell,
      title: "Ganho de força e resistência",
      description: "Métodos comprovados para aumentar sua força de forma segura e progressiva."
    },
    {
      icon: Target,
      title: "Mais definição muscular",
      description: "Treinos eficientes focados em hipertrofia e definição corporal."
    },
    {
      icon: Clock,
      title: "Economia de tempo",
      description: "Treinos otimizados de 30-45 minutos para máxima eficiência."
    },
    {
      icon: Rocket,
      title: "Comece hoje mesmo",
      description: "Plano completo e pronto para você começar imediatamente."
    }
  ];

  return (
    <section className="py-20 bg-[#0f1729]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 
          className="text-4xl font-bold text-center text-yellow-500 mb-12"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          data-testid="text-benefits-title"
        >
          Benefícios
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 bg-[#0f1729] flex flex-col items-center text-center border border-gray-700/30 rounded-lg"
              data-testid={`card-benefit-${index}`}
            >
              <div className="mb-6">
                <benefit.icon className="w-12 h-12 text-yellow-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3" data-testid={`text-benefit-title-${index}`}>
                {benefit.title}
              </h3>
              <p className="text-gray-400 leading-relaxed" data-testid={`text-benefit-desc-${index}`}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
