
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CheckCircle } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: <CheckCircle className="text-nextil-blue h-6 w-6" />,
      title: "Prático e inteligente",
      description: "Uma forma mais prática e inteligente de comprar."
    },
    {
      icon: <CheckCircle className="text-nextil-blue h-6 w-6" />,
      title: "Estoque atualizado",
      description: "Disponibilidade e preços em tempo real."
    },
    {
      icon: <CheckCircle className="text-nextil-blue h-6 w-6" />,
      title: "Compra simplificada",
      description: "Processo otimizado para eficiência."
    },
    {
      icon: <CheckCircle className="text-nextil-blue h-6 w-6" />,
      title: "Logística integrada",
      description: "Entrega rápida sem problemas."
    }
  ];

  return (
    <section className="py-16 bg-white" id="advantages">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-nextil-blue mb-4">
            Sua loja merece uma forma mais <span className="text-blue-400">prática</span> e <span className="text-green-400">inteligente</span> de comprar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossa plataforma oferece todas as ferramentas necessárias para otimizar suas compras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side with advantages */}
          <div className="grid grid-cols-1 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start p-4 rounded-lg">
                <div className="mr-4 mt-1">
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side with image */}
          <div className="rounded-lg overflow-hidden">
            <AspectRatio ratio={16/9} className="bg-nextil-gray">
              <div className="h-full w-full flex items-center justify-center">
                <div className="text-center p-6 bg-gradient-to-br from-nextil-blue to-blue-400 rounded-lg text-white shadow-lg">
                  <h3 className="text-xl font-bold mb-2">Interface de usuário intuitiva</h3>
                  <p>Plataforma desenvolvida para facilitar suas compras</p>
                </div>
              </div>
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
