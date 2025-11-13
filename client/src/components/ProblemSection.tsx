import { Clock, Target, AlertTriangle } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: "Falta de Tempo",
      description: "Você passa horas na academia sem ver resultados expressivos e sente que está desperdiçando seu tempo.",
      color: "text-yellow-500"
    },
    {
      icon: Target,
      title: "Treinos Genéricos",
      description: "Cansado de seguir treinos que não são feitos para você e que não atacam seus pontos fracos de verdade.",
      color: "text-yellow-500"
    },
    {
      icon: AlertTriangle,
      title: "Medo de Lesões",
      description: "A incerteza sobre a execução correta dos exercícios te impede de treinar pesado e progredir.",
      color: "text-yellow-500"
    }
  ];

  return (
    <section className="py-20 bg-[#0a0f1e]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          data-testid="text-problem-title"
        >
          Você se identifica com isso?
        </h2>
        
        <div className="space-y-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-[#0f1729] p-8 rounded-lg border border-gray-800 hover:border-yellow-500/30 transition-all"
              data-testid={`card-problem-${index}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`mb-4 ${problem.color}`}>
                  <problem.icon className="w-16 h-16" strokeWidth={1.5} />
                </div>
                <h3 
                  className="text-xl font-bold text-white mb-3"
                  data-testid={`text-problem-title-${index}`}
                >
                  {problem.title}
                </h3>
                <p 
                  className="text-gray-400 text-base leading-relaxed"
                  data-testid={`text-problem-description-${index}`}
                >
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
