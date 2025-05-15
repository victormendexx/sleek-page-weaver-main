
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "O que é Nextil B2B?",
      answer: "Nextil B2B é uma plataforma que conecta lojistas e marcas para uma experiência de compra mais eficiente e estratégica, permitindo que você compre das marcas mais desejadas sem sair da sua loja."
    },
    {
      question: "Como a Nextil faz?",
      answer: "Através de nossa plataforma digital, integramos o processo de compra entre lojistas e marcas, oferecendo uma interface intuitiva para visualizar produtos, gerenciar pedidos e acompanhar entregas em tempo real."
    },
    {
      question: "Por que a Nextil faz?",
      answer: "Nossa missão é simplificar o processo de compra B2B no setor de varejo, reduzindo tempo, custos operacionais e erros, enquanto fornecemos ferramentas estratégicas para melhores decisões de negócio."
    },
    {
      question: "Como fazer meu cadastro?",
      answer: "O cadastro na Nextil é simples e rápido. Basta acessar nossa página de registro, preencher suas informações de loja ou marca, validar seus dados e começar a usar nossa plataforma imediatamente."
    }
  ];

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-nextil-blue mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tire suas principais dúvidas sobre a Nextil
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
