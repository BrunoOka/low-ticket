import { Card } from "@/components/ui/card";
import { Gift, BookOpen, Heart, Video, Crown } from "lucide-react";

export default function BonusSection() {
  const bonuses = [
    {
      icon: BookOpen,
      title: "E-book de Alimentação Inteligente",
      description: "Guia completo para ganho de massa muscular com receitas práticas e planos alimentares."
    },
    {
      icon: Heart,
      title: "Guia de Recuperação Muscular",
      description: "Técnicas e estratégias para acelerar a recuperação e prevenir lesões."
    },
    {
      icon: Video,
      title: "Mini Curso: Monte Seus Próprios Treinos",
      description: "Aprenda a criar treinos personalizados sem precisar de academia ou equipamentos caros."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0f1729] to-[#0a0f1e] relative overflow-hidden">
      <div className="absolute inset-0 bg-yellow-500/5 backdrop-blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-1 mb-12 shadow-2xl">
          <div className="bg-[#0a0f1e] rounded-xl p-8 md:p-12">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500 rounded-full px-8 py-3 mb-6 shadow-lg">
                <Crown className="w-6 h-6 text-yellow-500" />
                <span className="text-yellow-500 font-bold text-lg uppercase tracking-wide">Exclusivo Plano Premium</span>
              </div>
              
              <h2 
                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                data-testid="text-bonus-title"
              >
                Bônus Exclusivos do Plano Premium
              </h2>
              <p className="text-gray-400 text-sm">
                🎁 Disponível apenas para quem escolher o Plano Premium
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="group p-8 text-center bg-gradient-to-b from-[#0f1729] to-[#0a0f1e] border-2 border-yellow-500/30 rounded-xl hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 relative overflow-hidden"
              data-testid={`card-bonus-${index}`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <bonus.icon className="w-10 h-10 text-yellow-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-500 transition-colors" data-testid={`text-bonus-title-${index}`}>
                  {bonus.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed" data-testid={`text-bonus-desc-${index}`}>
                  {bonus.description}
                </p>
              </div>
              
              <div className="absolute bottom-3 right-3">
                <Gift className="w-6 h-6 text-yellow-500/20 group-hover:text-yellow-500/40 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
          <p className="text-base text-yellow-500 font-semibold mb-2">
            ⭐ Bônus Enviados Automaticamente
          </p>
          <p className="text-sm text-gray-400">
            Todos os bônus são liberados instantaneamente por e-mail após a compra do Plano Premium
          </p>
        </div>
      </div>
    </section>
  );
}
