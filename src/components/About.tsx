import { ClipPath } from "./ui/ClipPath";
import SignupButton from "./ui/signup-button";

const About = () => {
  return (
    <section
      id="about"
      className="w-full max-w-[95%] mx-auto px-4 sm:px-6 md:px-12 py-16"
    >
      <ClipPath />

      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full">
        {/* Caixa com texto e fundo azul */}
        <div
          style={{ clipPath: "url(#clip-mix)" }}
          className="bg-[#080846] w-full md:w-[30rem] h-auto lg:h-[27rem] p-8 sm:p-12 flex flex-col"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#00CFFF]">
            Seu mix ideal a um clique.
          </h2>
          <div className="space-y-4 text-white text-sm sm:text-base">
            <p>
              A Nextil conecta você, lojista, às marcas certas, com mais
              agilidade, controle e visibilidade de produtos e estoque.
            </p>
            <p>
              Encontre as marcas que são o match perfeito com o seu público e
              faça pedidos diretamente, em um só lugar.
            </p>
          </div>

          {/* Botão visível em telas menores */}
          <div className="mt-6 lg:hidden">
            <SignupButton extraClasses="bg-[#363BB4] border-[#363BB4] text-white w-full sm:w-[17rem] h-[3.5rem]" />
          </div>
        </div>

        {/* Imagem */}
        <div className="relative md:w-[70%] h-64 sm:h-80 md:h-[27rem] bg-[url(../../match.png)] bg-no-repeat bg-cover bg-center rounded-2xl"></div>

        {/* Botão visível somente em telas grandes */}
        <div className="hidden lg:block absolute mt-[18.7rem] ml-[10.2rem] z-0">
          <SignupButton extraClasses="bg-[#363BB4] border-[#363BB4] text-white w-[19.5rem] h-[3.8rem] flex justify-between" />
        </div>
      </div>
    </section>
  );
};

export default About;
