import React from "react";

function Mobile() {
  return (
    <>
      {/* For Mobile ad Tablet */}
      <div className="relative w-[90%] md:w-[60%] max-w-7xl mx-auto aspect-[3/5.5] mt-[5rem] lg:hidden rounded-2xl overflow-hidden">
        <img
          src="../../public/WOMAN_ADAPTED.png"
          alt="Apps"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl"></div>

        {/* Texto sobre a imagem */}
        <div className="absolute inset-0 flex flex-col items-center text-center text-white p-[9.5vw]">
          <h1 className="text-[7.1vw] md:text-[3.55vw] font-bold leading-none">
            <span className="font-light">
              Baixe nosso App <br />
            </span>
            agora mesmo.
          </h1>
          <p className="font-light text-[3.3vw] md:text-[2.2vw] leading-tight mt-auto text-left">
            A Nextil é voltada ao setor de moda <br /> e entrega uma ferramenta
            inovadora <br /> e eficiente, simplificando a jornada <br /> de
            compra e venda, conectando <br /> marcas e lojistas de maneira
            rápida, <br /> segura e moderna.
          </p>

          {/* Botões de app */}
          <div className="flex row gap-[5.5vw] items-center mt-[7.25vw]">
            <div className="flex flex-col items-center gap-[1.75vw]">
              <div className="bg-white w-[22.75vw] h-[22.75vw] md:w-[11.375vw] md:h-[11.375vw] rounded-2xl" />
              <p className="font-extralight text-sm lg:text-base">App Store</p>
            </div>
            <div className="flex flex-col items-center gap-[1.75vw]">
              <div className="bg-white w-[22.75vw] h-[22.75vw] md:w-[11.375vw] md:h-[11.375vw] rounded-2xl" />
              <p className="font-extralight text-sm lg:text-base">
                Google Play
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* For Desktop */}
      <div className="w-[90%] max-w-7xl xl:max-w-screen-xl 2xl:max-w-[1600px] mx-auto bg-[url(../../public/mobile.png)] bg-cover bg-no-repeat bg-center rounded-[2rem] h-auto min-h-[40rem] mt-[5rem] lg:flex justify-center items-center py-10 px-4 sm:px-8 lg:py-20 lg:px-20 hidden">
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 lg:gap-20 text-white z-20">
          {/* Texto e loja */}
          <div className="flex flex-col gap-6 md:gap-8 max-w-xl xl:max-w-2xl text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-6xl font-bold leading-tight">
              <span className="font-light">
                Baixe nosso
                <br /> App
              </span>{" "}
              agora
              <br /> mesmo.
            </h1>
            <p className="font-light text-sm sm:text-base lg:text-[1.2vw] xl:text-xl leading-relaxed">
              A Nextil é voltada ao setor de moda e <br /> entrega uma
              ferramenta inovadora e <br /> eficiente, simplificando a jornada
              de <br /> compra e venda, conectando marcas e <br /> lojistas de
              maneira rápida, segura e <br /> moderna.
            </p>

            <div className="flex lg:flex-col xl:flex-row">
              <img
                src="../../public/app-store.png"
                alt="Lojas"
                className="w-20 lg:w-36 lg:mb-[1.25vw] xl:w-40 xl:mb-0 xl:mr-[1.25vw] mx-auto md:mx-0"
              />
              <img
                src="../../public/google-play.png"
                alt="Lojas"
                className="w-20 lg:w-36 xl:w-40 lg:mb-0 mx-auto md:mx-0"
              />
            </div>
          </div>

          {/* Botões de app */}
          <div className="flex flex-col gap-8 items-center">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-white w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-[2rem]" />
              <p className="font-extralight text-sm lg:text-base">App Store</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-white w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-[2rem]" />
              <p className="font-extralight text-sm lg:text-base">
                Google Play
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mobile;
