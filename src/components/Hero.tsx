import { ArrowRight } from "lucide-react";
import SignupButton from "./ui/signup-button";

const Hero = () => {
  return (
    <section
      className="relative text-white min-h-screen flex items-center  justify-center "
      id="hero"
    >
      {/* <img
        src="../../image-about.png"
        alt=""
        className="hidden lg:block pt-[8rem] self-center absolute top-[1rem]"
      /> */}

      <div className="container-custom z-10 grid md:grid-cols-2 gap-8 items-center bottom-32 bg-[url(../../image-about.png)] bg-no-repeat bg-cover bg-center rounded-[2rem] w-[80rem] h-[40rem] mt-[8rem] px-[5rem]">
        <div
          className="space-y-6 animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal">
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
        ></div>
      </div>
    </section>
  );
};

export default Hero;
