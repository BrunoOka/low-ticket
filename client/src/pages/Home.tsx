import { useRef, useState } from "react";
import CountdownTimer from "@/components/CountdownTimer";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ModulesSection from "@/components/ModulesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import BenefitsGrid from "@/components/BenefitsGrid";
import PricingPlans from "@/components/PricingPlans";
import BonusSection from "@/components/BonusSection";
import SocialProof from "@/components/SocialProof";
import FAQSection from "@/components/FAQSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import OfferPopup from "@/components/OfferPopup";
import UpsellModal from "@/components/UpsellModal";
import Footer from "@/components/Footer";

export default function Home() {
  const checkoutRef = useRef<HTMLDivElement>(null);
  const [showUpsell, setShowUpsell] = useState(false);

  const scrollToCheckout = () => {
    checkoutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectPlan = (plan: string) => {
    console.log('Selected plan:', plan);
    
    if (plan === 'basico') {
      setShowUpsell(true);
    } else {
      window.location.href = 'https://www.ggcheckout.com/checkout/v2/YTwjBZVItaAqL263COHj';
    }
  };

  const handleUpsellAccept = () => {
    setShowUpsell(false);
    window.location.href = 'https://www.ggcheckout.com/checkout/v2/YTwjBZVItaAqL263COHj';
  };

  const handleUpsellDecline = () => {
    setShowUpsell(false);
    window.location.href = 'https://www.ggcheckout.com/checkout/v2/ourlNbtm7SeSb84zHnfg';
  };

  return (
    <div className="min-h-screen">
      <CountdownTimer />
      <HeroSection onCTAClick={scrollToCheckout} />
      <ProblemSection />
      <SolutionSection />
      <ModulesSection />
      <BeforeAfterSection />
      <BenefitsGrid />
      <div ref={checkoutRef}>
        <PricingPlans onSelectPlan={handleSelectPlan} />
      </div>
      <BonusSection />
      <SocialProof />
      <FAQSection />
      <GuaranteeSection />
      <Footer />
      <OfferPopup onSelectPlan={handleSelectPlan} />
      <UpsellModal 
        isOpen={showUpsell}
        onAccept={handleUpsellAccept}
        onDecline={handleUpsellDecline}
      />
    </div>
  );
}
