import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { Play } from "lucide-react";

interface HeroSectionProps {
  onCTAClick: () => void;
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleClickOverlay = () => {
    setVideoLoaded(true);
  };

  return (
    <section className="relative py-20 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <h1 
          className="text-4xl md:text-5xl font-bold mb-6 text-center text-foreground leading-tight"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          data-testid="text-hero-title"
        >
          51 Métodos de Musculação para Transformar Seu Corpo
        </h1>
        
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-md bg-card rounded-lg overflow-hidden border border-border" style={{ aspectRatio: '9/16' }} data-testid="video-hero">
            {videoLoaded && (
              <iframe
                ref={iframeRef}
                src="https://player.vimeo.com/video/1136122760?autoplay=1&muted=0&controls=1&quality=auto&playsinline=1"
                style={{ width: '100%', height: '100%' }}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="51 Métodos de Musculação"
              />
            )}
            
            {!videoLoaded && (
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={handleClickOverlay}
                data-testid="video-overlay"
                style={{
                  backgroundImage: 'url(/video-cover.png)',
                  backgroundSize: '100% auto',
                  backgroundPosition: 'center 45%',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Mask to cover Vimeo header */}
                <div 
                  className="absolute top-0 left-0 right-0 bg-black"
                  style={{ height: '80px', zIndex: 1 }}
                />
                {/* Mask to cover Vimeo controls */}
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-black"
                  style={{ height: '60px', zIndex: 1 }}
                />
                <div className="absolute inset-0 bg-black/30" style={{ zIndex: 2 }} />
                <div className="bg-red-600 px-8 py-6 rounded-md text-center text-white shadow-lg relative z-10">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Play className="w-8 h-8" fill="white" />
                  </div>
                  <p className="text-lg font-bold mb-2">
                    Clique para assistir
                  </p>
                  <p className="text-sm opacity-90">
                    com áudio
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <p 
          className="text-xl md:text-2xl mb-8 text-center text-muted-foreground font-medium"
          data-testid="text-hero-subtitle"
        >
          Transforme seu corpo e sua performance com o método certo. Escolha seu plano e comece hoje com acesso imediato.
        </p>
        
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-cta-orange hover:bg-cta-orange text-cta-orange-foreground px-12 py-6 text-lg font-semibold uppercase tracking-wide shadow-xl hover-elevate active-elevate-2"
            onClick={onCTAClick}
            data-testid="button-hero-cta"
          >
            Ver Planos Disponíveis
          </Button>
        </div>
      </div>
    </section>
  );
}
