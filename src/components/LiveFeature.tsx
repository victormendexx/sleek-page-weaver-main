import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const LiveFeature = () => {
  return (
    <>
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center bg-gradient-to-r from-[#00CFFF] via-[#363BB4] to-[#080846] bg-clip-text text-transparent mt-[46rem] mb-8 px-4">
        Compre durante lives de lançamento.
      </h1>

      <section
        className="py-20 bg-gradient-to-r from-[#00CFFF] via-[#363BB4] to-[#080846] w-full max-w-[90%] mx-auto rounded-[2rem] min-h-[30rem] md:min-h-[35rem] lg:min-h-[40rem]"
        id="live"
      ></section>

      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-8 md:gap-12 mb-16 mt-12 px-4">
        <div className="flex items-center gap-4 text-base md:text-lg font-bold text-[#080846]">
          <img
            src="../../public/chat.png"
            alt="Interaja ao vivo"
            className="w-10 h-10"
          />
          Interaja ao vivo
        </div>

        <div className="flex items-center gap-4 text-base md:text-lg font-bold text-[#080846]">
          <img
            src="../../public/coracao.png"
            alt="Favorite peças"
            className="w-10 h-10"
          />
          Favorite peças
        </div>

        <div className="flex items-center gap-4 text-base md:text-lg font-bold text-[#080846]">
          <img
            src="../../public/pedidos.png"
            alt="Compre sem sair da live"
            className="w-10 h-10"
          />
          <div className="leading-tight">
            Compre sem <br className="hidden sm:block" /> sair da live
          </div>
        </div>

        <div className="flex items-center gap-4 text-base md:text-lg font-bold text-[#080846]">
          <img
            src="../../public/ticket.png"
            alt="Descontos especiais"
            className="w-10 h-10"
          />
          <div className="leading-tight">
            Garanta descontos <br className="hidden sm:block" /> especiais
          </div>
        </div>
      </div>

      <div className="w-full px-4">
        <img
          src="../../public/lives.png"
          alt="Apresentação de lives"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </>
  );
};

export default LiveFeature;
