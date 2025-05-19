import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ClipPath } from "./ui/ClipPath";
import { Sign } from "crypto";
import SignupButton from "./ui/signup-button";

const About = () => {
  return (
    <section id="about" className="w-[90%]">
      <ClipPath />

      <div className="flex justify-between items-center w-full">
        <div
          style={{ clipPath: "url(#clip-mix)" }}
          className="bg-[#080846] size-full flex flex-col h-[27rem] w-[27rem] p-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#00CFFF]">
            Seu mix ideal a um clique.
          </h2>
          <div className="space-y-4 text-white">
            <p className="text-sm">
              A Nextil conecta você, lojista, às marcas certas, com mais
              agilidade, controle e visibilidade de produtos e estoque.
            </p>
            <p className="text-sm">
              Encontre as marcas que são o match perfeito com o seu público e
              faça pedidos diretamente, em um só lugar.
            </p>
          </div>
          <div className="mt-8"></div>
        </div>
          <SignupButton extraClasses="mt-[22.7rem] ml-[9.2rem] bg-[#363BB4] border-[#363BB4] text-white w-[17.5rem] h-[3.8rem] flex justify-between z-0" />

        <div className="relative w-[57.5rem] h-[27rem] bg-[url(../../match.png)] bg-no-repeat bg-cover bg-center rounded-[2rem]"></div>
      </div>
    </section>
  );
};

export default About;
