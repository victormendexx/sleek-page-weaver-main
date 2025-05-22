import { ArrowRight } from "lucide-react";
import SignupButton from "./ui/signup-button";

const Hero = () => {
  return (
    <section
      className="relative text-white flex items-center justify-center bg-[url(../../image-about.png)] bg-no-repeat bg-cover bg-center rounded-2xl w-full max-w-[90%] mx-auto mt-32 px-6 sm:px-10 md:px-20 py-20 sm:py-28 lg:py-40"
      id="hero"
    >
      <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-96 items-center">
        <div
          className="space-y-6 animate-fadeIn text-center md:text-left"
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
            Compre das
            <span className="block font-normal mt-2">marcas mais</span>
            <span className="block font-normal mt-2">desejadas,</span>
            <span className="block font-extrabold mt-2">sem sair da</span>
            <span className="block font-extrabold mt-2">sua loja.</span>
          </h1>

          <SignupButton />
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
