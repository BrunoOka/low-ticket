import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShoppingCart } from "lucide-react";

interface OrderBump {
  id: string;
  title: string;
  description: string;
  price: number;
}

export default function OrderBumpsSection() {
  const mainProduct = {
    title: "51 Métodos de Musculação",
    price: 29
  };

  const orderBumps: OrderBump[] = [
    {
      id: "planilha",
      title: "Planilha de acompanhamento de treino",
      description: "Acompanhe séries, cargas e evolução.",
      price: 9
    },
    {
      id: "alimentacao",
      title: "Guia de alimentação para hipertrofia (20 receitas)",
      description: "Receitas práticas e nutritivas para ganho muscular.",
      price: 19
    },
    {
      id: "videos",
      title: "Pacote de 10 vídeos de técnica avançada",
      description: "Domine técnicas avançadas com vídeos exclusivos.",
      price: 29
    }
  ];

  const [selectedBumps, setSelectedBumps] = useState<Set<string>>(new Set());
  const [formData, setFormData] = useState({ name: "", email: "" });

  const toggleBump = (id: string) => {
    const newSelected = new Set(selectedBumps);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedBumps(newSelected);
  };

  const calculateTotal = () => {
    let total = mainProduct.price;
    orderBumps.forEach(bump => {
      if (selectedBumps.has(bump.id)) {
        total += bump.price;
      }
    });
    return total;
  };

  const handleCheckout = () => {
    console.log('Checkout:', { formData, selectedBumps: Array.from(selectedBumps), total: calculateTotal() });
    alert(`Pedido confirmado! Total: R$${calculateTotal()}`);
  };

  return (
    <section className="py-20 bg-muted" id="checkout">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 
            className="text-4xl font-bold text-primary mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="text-checkout-title"
          >
            Complete Seu Pedido
          </h2>
          <p className="text-muted-foreground">Adicione extras opcionais e finalize sua compra</p>
        </div>

        <Card className="p-8 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
              <div>
                <h3 className="font-bold text-lg" data-testid="text-main-product">{mainProduct.title}</h3>
                <p className="text-sm text-muted-foreground">Produto principal</p>
              </div>
              <div className="text-2xl font-bold text-primary" data-testid="text-main-price">
                R${mainProduct.price}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg mb-4" data-testid="text-bumps-title">Aproveite estas ofertas especiais:</h3>
              
              {orderBumps.map((bump, index) => (
                <Card 
                  key={bump.id}
                  className={`p-4 cursor-pointer transition-all ${
                    selectedBumps.has(bump.id) ? 'border-2 border-primary' : ''
                  }`}
                  onClick={() => toggleBump(bump.id)}
                  data-testid={`card-bump-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <Checkbox
                      checked={selectedBumps.has(bump.id)}
                      onCheckedChange={() => toggleBump(bump.id)}
                      className="mt-1"
                      data-testid={`checkbox-bump-${index}`}
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-semibold mb-1" data-testid={`text-bump-title-${index}`}>
                            {bump.title}
                          </h4>
                          <p className="text-sm text-muted-foreground" data-testid={`text-bump-desc-${index}`}>
                            {bump.description}
                          </p>
                        </div>
                        <div className="text-lg font-bold text-cta-orange whitespace-nowrap" data-testid={`text-bump-price-${index}`}>
                          + R${bump.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="border-t pt-6 space-y-4">
            <div className="flex items-center justify-between text-2xl font-bold">
              <span data-testid="text-total-label">Total:</span>
              <span className="text-cta-orange" data-testid="text-total-value">R${calculateTotal()}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4">
              <div>
                <Label htmlFor="name">Nome Completo</Label>
                <Input 
                  id="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  data-testid="input-name"
                />
              </div>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  data-testid="input-email"
                />
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-cta-orange hover:bg-cta-orange text-cta-orange-foreground text-lg font-semibold uppercase tracking-wide hover-elevate active-elevate-2"
              onClick={handleCheckout}
              data-testid="button-checkout"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Finalizar Compra - R${calculateTotal()}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Ao finalizar a compra, você receberá acesso imediato por e-mail
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
