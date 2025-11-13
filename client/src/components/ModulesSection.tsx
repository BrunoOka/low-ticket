import { CheckCircle2 } from "lucide-react";

export default function ModulesSection() {
  const modules = [
    {
      number: 1,
      title: "Fundamentos e conceitos iniciais"
    },
    {
      number: 2,
      title: "Princípios fundamentais do treinamento"
    },
    {
      number: 3,
      title: "Manipulação de volume e intensidade"
    },
    {
      number: 4,
      title: "Tempo sob tensão e controle da execução"
    },
    {
      number: 5,
      title: "Intervalos e densidade de treino"
    },
    {
      number: 6,
      title: "Nível de treinamento e aplicabilidade"
    },
    {
      number: 7,
      title: "Métodos de séries compostas (volume concentrado)"
    },
    {
      number: 8,
      title: "Pré e pós-exaustão muscular"
    },
    {
      number: 9,
      title: "Métodos piramidais e variações"
    },
    {
      number: 10,
      title: "Métodos avançados de progressão"
    },
    {
      number: 11,
      title: "Métodos de pausa e recuperação ativa"
    },
    {
      number: 12,
      title: "Métodos de repetições parciais e controle"
    },
    {
      number: 13,
      title: "Métodos de volume extremo"
    },
    {
      number: 14,
      title: "Métodos de intensidade máxima"
    },
    {
      number: 15,
      title: "Métodos baseados em oclusão e fadiga"
    },
    {
      number: 16,
      title: "Métodos de pico de contração e estímulo neural"
    },
    {
      number: 17,
      title: "Estratégias combinadas"
    },
    {
      number: 18,
      title: "Prescrição inteligente"
    },
    {
      number: 19,
      title: "Considerações finais e otimização"
    }
  ];

  return (
    <section className="py-20 bg-[#0a0f1e]" id="modulos">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 
            className="text-4xl font-bold text-yellow-500 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="text-modules-title"
          >
            O Que Você Vai Aprender
          </h2>
          <p className="text-lg text-gray-400">
            19 módulos completos com 51 métodos de musculação
          </p>
        </div>

        <div className="space-y-3">
          {modules.map((module) => (
            <div
              key={module.number}
              className="bg-[#0d1525] border border-[#1a2538] rounded-lg p-4 flex items-center gap-4 hover:border-[#2a3548] transition-colors"
              data-testid={`card-module-${module.number}`}
            >
              <div className="flex-shrink-0">
                <CheckCircle2 
                  className="w-6 h-6 text-green-500" 
                  fill="currentColor"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-normal text-base">
                  Módulo {module.number}: {module.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
