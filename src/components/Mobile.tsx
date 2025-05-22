import React from "react";

function Mobile() {
  return (
    <div className="w-[90%] max-w-7xl xl:max-w-screen-xl 2xl:max-w-[1600px] mx-auto bg-[url(../../public/mobile.png)] bg-cover bg-no-repeat bg-center rounded-[2rem] h-auto min-h-[40rem] mt-[5rem] flex justify-center items-center py-10 px-4 sm:px-8 lg:py-20 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 lg:gap-20 text-white z-20">
        {/* Texto e loja */}
        <div className="flex flex-col gap-6 md:gap-8 max-w-xl xl:max-w-2xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            <span className="font-light">
              Baixe nosso
              <br /> App
            </span>{" "}
            agora
            <br /> mesmo.
          </h1>
          <p className="font-light text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
            A Nextil é voltada ao setor de moda e entrega uma
            <br /> ferramenta inovadora e eficiente, simplificando a <br />
            jornada de compra e venda, conectando marcas e <br />
            lojistas de maneira rápida, segura e moderna.
          </p>

          <img
            src="../../public/lojas.png"
            alt="Lojas"
            className="w-40 sm:w-52 md:w-60 lg:w-72 xl:w-80 mx-auto md:mx-0"
          />
        </div>

        {/* Botões de app */}
        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-col items-center gap-2">
            <div className="bg-white w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-[2rem]" />
            <p className="font-extralight text-sm lg:text-base">App Store</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-white w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-[2rem]" />
            <p className="font-extralight text-sm lg:text-base">Google Play</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile;