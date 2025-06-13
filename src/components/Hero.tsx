import SignupButton from "./ui/signup-button";

const Hero = () => {
  return (
    <section
      className="relative text-white flex items-center justify-center md:bg-[url(../../image-about.png)] bg-no-repeat bg-cover bg-center rounded-2xl w-full max-w-[90%] mx-auto mt-[7vw] md:mt-32 px-6 sm:px-10 md:px-20 md:py-20 lg:py-40"
      id="hero"
    >
      <div className="z-10 grid grid-cols-1 md:grid-cols-3 gap-96 md:gap-0 items-center">
        {/* Hero para tablet e acima */}
        <div
          className="space-y-6 w-full animate-fadeIn text-center hidden md:block md:text-left"
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-normal leading-tight md:leading-none w-full whitespace-nowrap">
            Compre das
            <span className="block font-normal mt-2">marcas mais</span>
            <span className="block font-normal mt-2">desejadas,</span>
            <span className="block font-extrabold mt-2">sem sair da</span>
            <span className="block font-extrabold mt-2">sua loja.</span>
          </h1>

          <SignupButton extraClasses="w-[25.5vw] lg:w-[20vw] xl:w-[10vw] lg:text-[0.62vw]" />
        </div>

        {/* Hero para mobile */}
        <div
          className="space-y-[3vw] animate-fadeIn text-center md:hidden mt-[11vw]"
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="text-[6.2vw] font-normal leading-[7vw]">
            Compre das marcas
            <div className="flex justify-center gap-[1vw]">
              <span className="block font-normal">mais desejadas,</span>
              <span className="block font-extrabold">sem</span>
            </div>
            <span className="block font-extrabold">sair da sua loja.</span>
          </h1>
        </div>

        <div
          className="hidden md:block animate-fadeIn"
          style={{ animationDelay: "0.4s" }}
        >
          {/* Se desejar adicionar uma imagem ou gráfico, pode colocá-lo aqui */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
