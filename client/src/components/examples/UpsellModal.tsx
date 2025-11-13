import { useState } from 'react';
import UpsellModal from '../UpsellModal';
import { Button } from '@/components/ui/button';

export default function UpsellModalExample() {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <div className="p-8">
      <Button onClick={() => setIsOpen(true)}>Show Upsell</Button>
      <UpsellModal 
        isOpen={isOpen}
        onAccept={() => {
          console.log('Upsell accepted');
          setIsOpen(false);
        }}
        onDecline={() => {
          console.log('Upsell declined');
          setIsOpen(false);
        }}
      />
    </div>
  );
}
