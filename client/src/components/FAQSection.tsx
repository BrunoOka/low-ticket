import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "Preciso ter experiência em musculação para aplicar os métodos?",
      answer: "Não! O programa é desenvolvido para todos os níveis, do iniciante ao avançado. Cada método vem com explicações detalhadas e progressões adequadas ao seu nível."
    },
    {
      question: "O acesso é vitalício?",
      answer: "Sim! Você paga uma única vez e tem acesso para sempre ao conteúdo, incluindo todas as atualizações futuras (especialmente no Plano Premium)."
    },
    {
      question: "Posso fazer os treinos em casa?",
      answer: "Com certeza! Os métodos incluem opções para treinar em casa sem equipamentos e também variações para quem tem acesso à academia."
    },
    {
      question: "O conteúdo serve para mulheres também?",
      answer: "Sim! Os métodos de musculação funcionam igualmente para homens e mulheres. A diferença está apenas na intensidade e objetivos pessoais de cada um."
    },
    {
      question: "Os bônus são enviados automaticamente?",
      answer: "Sim! Após a confirmação do pagamento, você recebe imediatamente por e-mail o acesso ao guia completo e todos os bônus gratuitos."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <h2 
          className="text-4xl font-bold text-center text-primary mb-12"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          data-testid="text-faq-title"
        >
          Perguntas Frequentes
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-card-border rounded-lg px-6"
              data-testid={`accordion-faq-${index}`}
            >
              <AccordionTrigger 
                className="text-left text-lg font-semibold hover:text-primary"
                data-testid={`button-faq-${index}`}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent 
                className="text-muted-foreground"
                data-testid={`text-faq-answer-${index}`}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
