import OfferPopup from '../OfferPopup';

export default function OfferPopupExample() {
  return <OfferPopup onSelectPlan={(plan) => console.log('Selected plan from popup:', plan)} />;
}
