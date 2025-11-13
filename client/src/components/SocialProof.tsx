import { Card } from "@/components/ui/card";
import { Star, CheckCircle2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import manCarlos from "@assets/stock_images/man_male_person_port_497f507a.jpg";
import manLucas from "@assets/stock_images/man_male_person_port_f4fadcb9.jpg";
import manRafael from "@assets/stock_images/man_male_person_port_afe53bfe.jpg";
import womanAna from "@assets/stock_images/woman_female_person__1f4fed33.jpg";
import womanJuliana from "@assets/stock_images/woman_female_person__67153c9d.jpg";
import womanMariana from "@assets/stock_images/woman_female_person__16ebddb0.jpg";

export default function SocialProof() {
  const testimonials = [
    {
      name: "Carlos Silva",
      location: "São Paulo, SP",
      rating: 5,
      text: "Em 6 semanas já notei mudanças incríveis! Os métodos são práticos e direto ao ponto. Melhor investimento que já fiz.",
      initials: "CS",
      image: manCarlos
    },
    {
      name: "Mariana Costa",
      location: "Rio de Janeiro, RJ",
      rating: 5,
      text: "Nunca tinha conseguido resultados tão rápidos. Os 51 métodos são perfeitos para quem treina em casa como eu!",
      initials: "MC",
      image: womanMariana
    },
    {
      name: "Rafael Mendes",
      location: "Belo Horizonte, MG",
      rating: 5,
      text: "O guia superou minhas expectativas. Métodos que realmente funcionam, sem enrolação. Recomendo demais!",
      initials: "RM",
      image: manRafael
    },
    {
      name: "Ana Paula",
      location: "Curitiba, PR",
      rating: 5,
      text: "Finalmente um programa que respeita meu tempo! Treinos de 30-45 min e resultados visíveis. Amei!",
      initials: "AP",
      image: womanAna
    },
    {
      name: "Lucas Ferreira",
      location: "Brasília, DF",
      rating: 5,
      text: "Como personal trainer, aprovo 100%. Métodos comprovados e bem explicados. Uso até com meus alunos!",
      initials: "LF",
      image: manLucas
    },
    {
      name: "Juliana Rocha",
      location: "Porto Alegre, RS",
      rating: 5,
      text: "Estava perdida na academia, esse guia organizou tudo! Agora sei exatamente o que fazer em cada treino.",
      initials: "JR",
      image: womanJuliana
    }
  ];

  const stats = [
    { number: "15.000+", label: "Alunos transformados" },
    { number: "98%", label: "Taxa de satisfação" },
    { number: "4.9/5", label: "Avaliação média" }
  ];

  return (
    <section className="py-20 bg-[#0f1729]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 
            className="text-4xl font-bold text-yellow-500 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="text-social-proof-title"
          >
            O Que Nossos Alunos Dizem
          </h2>
          <p className="text-lg text-gray-400">Junte-se a milhares de pessoas que já transformaram seus corpos</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-[#0f1729] border border-gray-700/30 rounded-lg"
              data-testid={`stat-${index}`}
            >
              <div className="text-4xl font-bold text-yellow-500 mb-2" data-testid={`stat-number-${index}`}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-400" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-[#0f1729] border border-gray-700/30 rounded-lg"
              data-testid={`testimonial-${index}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="w-12 h-12 border-2 border-yellow-500/30">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" />
                  <AvatarFallback className="bg-yellow-500/20 text-yellow-500 font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-white" data-testid={`testimonial-name-${index}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-400">{testimonial.location}</div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-yellow-500 ml-auto flex-shrink-0" />
              </div>
              
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" />
                ))}
              </div>
              
              <p className="text-sm text-gray-300 leading-relaxed" data-testid={`testimonial-text-${index}`}>
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-yellow-500" />
            Todos os depoimentos são de clientes reais verificados
          </p>
        </div>
      </div>
    </section>
  );
}
