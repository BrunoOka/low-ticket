import { ArrowRight } from "lucide-react";

export default function BeforeAfterSection() {
  const transformations = [
    {
      id: 1,
      before: "/transformations/antes1.jpg",
      after: "/transformations/depois1.jpg",
      name: "Transformação Feminina",
      time: "6 meses"
    },
    {
      id: 2,
      before: "/transformations/antes2.jpg",
      after: "/transformations/depois2.jpg",
      name: "Transformação Masculina",
      time: "8 meses"
    },
    {
      id: 3,
      before: "/transformations/antes3.jpg",
      after: "/transformations/depois3.jpg",
      name: "Definição Feminina",
      time: "5 meses"
    }
  ];

  return (
    <section className="py-20 bg-[#0a0f1e]" id="resultados">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 
            className="text-4xl font-bold text-yellow-500 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="text-transformations-title"
          >
            Resultados Reais de Nossos Alunos
          </h2>
          <p className="text-lg text-gray-400">
            Veja as transformações incríveis de quem aplicou os métodos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((transformation) => (
            <div
              key={transformation.id}
              className="bg-[#0f1729] rounded-lg overflow-hidden border border-gray-800 hover:border-yellow-500/50 transition-all group"
              data-testid={`card-transformation-${transformation.id}`}
            >
              <div className="relative">
                <div className="grid grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full font-bold z-10">
                      ANTES
                    </div>
                    <img
                      src={transformation.before}
                      alt="Antes da transformação"
                      className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all"
                      data-testid={`img-before-${transformation.id}`}
                    />
                  </div>
                  <div className="relative overflow-hidden">
                    <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full font-bold z-10">
                      DEPOIS
                    </div>
                    <img
                      src={transformation.after}
                      alt="Depois da transformação"
                      className="w-full h-80 object-cover"
                      data-testid={`img-after-${transformation.id}`}
                    />
                  </div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-yellow-500 rounded-full p-2 shadow-lg">
                    <ArrowRight className="w-6 h-6 text-[#0f1729]" strokeWidth={3} />
                  </div>
                </div>
              </div>

              <div className="p-4 text-center border-t border-gray-800">
                <h3 className="text-white font-semibold text-base mb-1">
                  {transformation.name}
                </h3>
                <p className="text-yellow-500 text-sm font-medium">
                  Resultado em {transformation.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 text-lg mb-4">
            <span className="text-yellow-500 font-bold">Esses resultados são reais</span> e foram alcançados aplicando os métodos ensinados no curso
          </p>
          <p className="text-sm text-gray-400">
            ⚠️ Resultados individuais podem variar de acordo com dedicação, genética e consistência
          </p>
        </div>
      </div>
    </section>
  );
}
