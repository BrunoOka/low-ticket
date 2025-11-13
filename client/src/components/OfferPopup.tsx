import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Zap, Star, Check } from "lucide-react";

interface OfferPopupProps {
  onSelectPlan: (plan: string) => void;
}

export default function OfferPopup({ onSelectPlan }: OfferPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'basico' | 'premium'>('premium');

  const planBenefits = {
    basico: [
      "51 Métodos de treino",
      "Material de apoio/apostila",
      "1 ano de acesso"
    ],
    premium: [
      "TUDO do Básico +",
      "Módulo de Treinos Avançados",
      "Aulas com especialistas",
      "Modelos prontos de treinos",
      "Acesso VITALÍCIO + atualizações ⭐"
    ]
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto" data-testid="popup-offer">
      <div className="max-w-lg w-full bg-[#0f1729] border-2 border-yellow-500 rounded-lg p-5 relative animate-in fade-in zoom-in duration-300 shadow-2xl my-8">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors"
          data-testid="button-close-popup"
        >
          <X className="w-4 h-4 text-white" />
        </button>

        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-red-600 rounded-full px-4 py-1 mb-3">
            <Zap className="w-4 h-4 text-white" fill="currentColor" />
            <span className="text-white font-bold uppercase text-xs">Oferta Relâmpago</span>
          </div>
          
          <h3 
            className="text-2xl font-bold text-yellow-500 mb-2"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="text-popup-title"
          >
            Oferta Exclusiva!
          </h3>
          
          <p className="text-sm text-gray-300 mb-4">
            Leve agora o acesso completo com até <span className="text-yellow-500 font-bold">95% de desconto</span>. Escolha seu plano antes que o valor volte ao normal.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <button
            onClick={() => setSelectedPlan('basico')}
            className={`p-3 rounded-lg bg-[#0f1729] transition-all cursor-pointer text-left ${
              selectedPlan === 'basico' 
                ? 'border-2 border-yellow-500 shadow-lg' 
                : 'border border-gray-700 hover:border-gray-600'
            }`}
          >
            <div className="text-xs text-gray-400 mb-1">Plano Básico</div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-xs line-through text-gray-500">R$297</span>
              <span className="text-2xl font-bold text-yellow-500">R$10</span>
            </div>
            <div className="inline-block bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">95% OFF</div>
          </button>
          
          <button
            onClick={() => setSelectedPlan('premium')}
            className={`p-3 rounded-lg bg-[#0f1729] relative transition-all cursor-pointer text-left ${
              selectedPlan === 'premium' 
                ? 'border-2 border-yellow-500 shadow-lg' 
                : 'border border-gray-700 hover:border-gray-600'
            }`}
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2">
              <div className="bg-yellow-500 text-[#0f1729] text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 font-bold">
                <Star className="w-2.5 h-2.5" fill="currentColor" />
                POPULAR
              </div>
            </div>
            <div className="text-xs text-gray-400 mb-1">Plano Premium</div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-xs line-through text-gray-500">R$397</span>
              <span className="text-2xl font-bold text-yellow-500">R$20</span>
            </div>
            <div className="inline-block bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">95% OFF</div>
          </button>
        </div>

        <div className="bg-[#1a2332] rounded-lg p-3 mb-3 border border-gray-700/50">
          <h4 className="text-xs font-bold text-yellow-500 mb-2 flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5" fill="currentColor" />
            {selectedPlan === 'premium' ? 'Tudo Isso Incluído:' : 'Incluído:'}
          </h4>
          <ul 
            className={`flex flex-col gap-y-2 ${selectedPlan === 'premium' ? 'sm:grid sm:grid-cols-2 sm:gap-x-2 sm:gap-y-2' : ''}`}
            data-testid="list-popup-benefits"
          >
            {planBenefits[selectedPlan].map((benefit, index) => (
              <li key={index} className="flex items-start gap-1.5 text-[11px] text-gray-300">
                <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <Button
            size="default"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold uppercase tracking-wide text-xs rounded-full shadow-lg"
            onClick={() => {
              setIsVisible(false);
              onSelectPlan(selectedPlan);
            }}
            data-testid="button-popup-buy"
          >
            SIM, QUERO MINHA VAGA AGORA!
          </Button>
          
          <Button
            size="default"
            variant="outline"
            className="w-full border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white text-xs"
            onClick={() => setIsVisible(false)}
            data-testid="button-popup-learn-more"
          >
            Quero Saber Mais Antes de Comprar
          </Button>
        </div>

        <p className="text-[10px] text-center text-gray-400 mt-3">
          ⏰ Esta oferta é válida apenas por tempo limitado
        </p>
      </div>
    </div>
  );
}
