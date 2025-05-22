import { useState } from "react";
import { ArrowRight, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

type FAQItem = {
  id: string;
  number: string;
  question: string;
  answer: string | null;
};

const faqData: FAQItem[] = [
  {
    id: "1",
    number: "01",
    question: "O que a Nextil faz?",
    answer: null,
  },
  {
    id: "2",
    number: "02",
    question: "Como a Nextil faz?",
    answer: `A Nextil é voltada ao setor de moda e entrega uma ferramenta inovadora e eficiente, simplificando a jornada de compra e venda, conectando marcas e lojistas de maneira rápida, segura e moderna.`,
  },
  {
    id: "3",
    number: "03",
    question: "Por que a Nextil faz?",
    answer: null,
  },
  {
    id: "4",
    number: "04",
    question: "Como faço meu cadastro?",
    answer: null,
  },
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="w-full max-w-[90%] mx-auto mt-20 px-4 sm:px-6 text-[#080846]">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Perguntas frequentes
      </h2>

      <div className="flex flex-col">
        {faqData.map((item) => (
          <div key={item.id} className="border-t border-[#080846]">
            <div
              onClick={() => toggleItem(item.id)}
              className="py-6 cursor-pointer flex justify-between items-center group"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <span
                  className={cn(
                    "text-gray-500 text-lg md:text-xl font-extrabold",
                    openItem === item.id ? "text-[#080846]" : ""
                  )}
                >
                  {item.number}
                </span>
                <h3
                  className={cn(
                    "text-gray-500 text-lg md:text-xl font-semibold",
                    openItem === item.id ? "text-[#080846]" : ""
                  )}
                >
                  {item.question}
                </h3>
              </div>
              <div
                className={cn(
                  "transition-transform duration-300",
                  openItem === item.id ? "rotate-180" : ""
                )}
              >
                {openItem === item.id ? (
                  <Minus
                    className={cn(
                      "h-6 w-6 text-gray-500",
                      openItem === item.id ? "text-[#080846]" : ""
                    )}
                  />
                ) : (
                  <ArrowRight
                    className={cn(
                      "h-6 w-6 text-gray-500 rotate-45",
                      openItem === item.id ? "text-[#080846]" : ""
                    )}
                  />
                )}
              </div>
            </div>

            {item.answer && (
              <div
                className={cn(
                  "transition-all duration-300 overflow-hidden text-sm sm:text-base",
                  openItem === item.id ? "max-h-80 pb-6" : "max-h-0"
                )}
              >
                <div className="px-4 sm:px-8">{item.answer}</div>
              </div>
            )}
          </div>
        ))}

        <div className="border-t border-[#080846]"></div>
      </div>
    </div>
  );
};

export default FAQ;
