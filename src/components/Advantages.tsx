import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CheckCircle } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: <CheckCircle className="text-nextil-blue h-6 w-6" />,
      title: "Prático e inteligente",
      description: "Uma forma mais prática e inteligente de comprar.",
    },
    {
      icon: <CheckCircle className="text-nextil-blue h-6 w-6" />,
      title: "Estoque atualizado",
      description: "Disponibilidade e preços em tempo real.",
    },
    {
      icon: <CheckCircle className="text-nextil-blue h-6 w-6" />,
      title: "Compra simplificada",
      description: "Processo otimizado para eficiência.",
    },
    {
      icon: <CheckCircle className="text-nextil-blue h-6 w-6" />,
      title: "Logística integrada",
      description: "Entrega rápida sem problemas.",
    },
  ];

  return (
    <section
      className="my-16 py-16 rounded-[2rem] bg-white w-[90%]"
      id="advantages"
    >
      <div className="container-custom flex text-[#080846] gap-10 leading-7 my-6">
        <div className=" flex flex-col  justify-center gap-10 ml-10">
          <div className="text-[3rem] font-bold leading-none ">
            Sua loja merece
            <br /> uma forma mais
            <br /> <span className="text-[#00CFFF]">prática e inteligente</span>
            <br /> de comprar.
          </div>
          <div className="leading-5">
            A{" "}
            <span className="font-bold ">
              Nextil conecta você diretamente às marcas,
            </span>{" "}
            <br /> agilizando as compras para a sua loja de moda.
            <br /> Somos uma solução inovadora, pensada para facilitar <br />a
            jornada do lojista na gestão de pedidos multimarcas.
          </div>
        </div>
        <div className="flex gap-8 w-/4">
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <img
                src="../../public/marcas.png"
                alt=""
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col gap-4 text-[1.5rem] font-bold">
                Encontre as marcas <br />
                ideais para sua loja{" "}
                <span className="text-[1rem] font-normal leading-5">
                  Veja lançamentos e novidades em um
                  <br /> só lugar, com uma apresentação clara
                  <br /> e fácil de navegar.
                </span>
              </div>
            </div>
            <div className="flex gap-4">
              <img
                src="../../public/conexoes.png"
                alt=""
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col gap-4 text-[1.5rem] font-bold">
                Interaja em
                <br />
                tempo real{" "}
                <span className="text-[1rem] font-normal leading-5">
                  Fale com as marcas em tempo real por
                  <br /> comentários e mensagens para tirar
                  <br /> todas as suas dúvidas.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <img
                src="../../public/link.png"
                alt=""
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col gap-4 text-[1.5rem] font-bold">
                Conecte-se diretamente <br /> com fornecedores
                <span className="text-[1rem] font-normal leading-5">
                  Peça direto da plataforma, sem
                  <br /> depender de agendas, catálogos
                  <br />
                  confusos ou múltiplos canais.
                </span>
              </div>
            </div>
            <div>
              <div className="flex gap-4">
                <img
                  src="../../public/sacola.png"
                  alt=""
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
                <div className="flex flex-col gap-4 text-[1.5rem] font-bold">
                  Organize e controle <br />
                  seus pedidos
                  <span className="text-[1rem] font-normal leading-5">
                    Centralize suas compras, veja seu
                    <br /> histórico e mantenha seu mix
                    <br />
                    sempre equilibrado em um só lugar.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
