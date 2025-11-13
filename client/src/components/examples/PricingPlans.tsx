import PricingPlans from '../PricingPlans';

export default function PricingPlansExample() {
  return <PricingPlans onSelectPlan={(plan) => console.log('Selected plan:', plan)} />;
}
