import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import ebookImage from "@assets/generated_images/E-book_cover_mockup_76b8d6e4.png";

export default function SolutionSection() {
  const solutions = [
    "Métodos passo a passo para todos os níveis.",
    "Técnicas de força, hipertrofia e resistência.",
    "Treinos curtos (30–45 min).",
    "PDF + vídeos demonstrativos."
  ];

  return (
    <section className="py-20 bg-[#0f1729]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src={ebookImage} 
              alt="51 Métodos de Musculação - E-book Cover"
              className="w-full max-w-md mx-auto drop-shadow-2xl"
              data-testid="img-ebook-mockup"
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <h2 
              className="text-4xl font-bold text-yellow-500 mb-8"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              data-testid="text-solution-title"
            >
              A Solução Completa
            </h2>
            
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="p-6 flex items-start gap-4 bg-[#0f1729] border border-gray-700/30 rounded-lg"
                data-testid={`card-solution-${index}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-yellow-500" />
                  </div>
                </div>
                <p className="text-lg text-white font-medium pt-1" data-testid={`text-solution-${index}`}>
                  {solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
