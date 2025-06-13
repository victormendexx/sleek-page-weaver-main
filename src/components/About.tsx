import SignupButton from "./ui/signup-button";

const About = () => {
  return (
    <section
      id="about"
      className="w-full max-w-[95%] mx-auto md:mx-8 px-4 sm:px-6 md:px-0 md:py-0"
    >
      {/* About for mobile */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full md:hidden">
        <div className="w-full relative aspect-[326/272] overflow-hidden flex flex-col justify-end">
          <img
            src="../../blue-box-empty-mobile.svg"
            className="absolute top-0 left-0 w-full h-full object-fill z-0"
            alt="blue-box-ideal-mix-mobile"
          />

          <div className="relative z-10 mb-auto mt-[14vw] mx-[14vw]">
            <h2 className="text-[#00CFFF] font-bold text-[7.5vw] mb-[3.85vw]">
              Seu mix ideal <br /> a um clique.
            </h2>
            <p className="text-white text-[2.75vw] font-light leading-tight">
              A Nextil, única rede social de moda B2B <br /> do Brasil, conecta
              lojistas às marcas em <br /> um ambiente projetado para matches em
              <br />
              relações comerciais poderosas.
            </p>
          </div>

          {/* Conteúdo sobreposto ao fundo */}
          <div className="relative z-10">
            <SignupButton
              extraClasses="bg-[#363BB4] flex items-center justify-center text-[3.5vw] h-[10vw] w-[45vw] ml-auto text-white border-none"
              buttonExtraClasses="h-[7.5vw] w-[7.5vw]"
              iconExtraClasses="text-[#363BB4]"
              arrowSize="5vw"
            />
          </div>
        </div>

        {/* It's a match */}
        <div className="w-full relative aspect-[323/145] overflow-hidden flex flex-col justify-end">
          <img
            src="../../MATCH.svg"
            className="absolute top-0 left-0 w-full h-full object-fill z-0"
            alt="MATCH"
          />
        </div>
      </div>

      {/* About for bigger screens */}
      <div className="hidden md:flex flex-row justify-between items-stretch gap-3 w-full">
        <div className="basis-1/3 relative aspect-[549/562] overflow-hidden flex flex-col justify-end">
          <img
            src="../../blue-box-empty-desktop-1.svg"
            className="absolute top-0 left-0 w-full h-full object-fill z-0"
            alt="blue-box-ideal-mix-mobile"
          />

          <div className="relative z-10 mb-auto mt-[6vw] mx-[5vw]">
            <h2 className="text-[#00CFFF] font-bold text-[2.75vw] mb-[1.9vw] leading-none">
              Seu mix ideal <br /> a um clique.
            </h2>
            <p className="text-white text-[1.1vw] font-light leading-snug">
              A Nextil, única rede social de moda B2B <br /> do Brasil, conecta
              lojistas às marcas em <br /> um ambiente projetado para matches em
              <br />
              relações comerciais poderosas.
            </p>
          </div>

          {/* Conteúdo sobreposto ao fundo */}
          <div className="relative z-10">
            <SignupButton
              extraClasses="bg-[#363BB4] flex items-center justify-center text-[1.5vw] h-[5vw] w-[20.5vw] ml-auto text-white border-none"
              buttonExtraClasses="h-[3.25vw] w-[3.25vw]"
              iconExtraClasses="text-[#363BB4]"
              arrowSize="2.5vw"
            />
          </div>
        </div>

        {/* It's a match */}
        <div className="basis-2/3 relative aspect-[323/145] overflow-hidden flex flex-col justify-end">
          <img
            src="../../MATCH.svg"
            className="absolute top-0 left-0 w-full h-full object-fill z-0"
            alt="MATCH"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
