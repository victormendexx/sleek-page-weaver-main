const LiveFeature = () => {
  return (
    <>
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center bg-gradient-to-r from-[#00CFFF] via-[#363BB4] to-[#080846] bg-clip-text text-transparent mt-[9.5vw] md:mt-[4.75vw] mb-8 px-4">
        Compre durante lives de lançamento.
      </h1>

      <section
        className="relative overflow-hidden py-20 bg-gradient-to-r from-[#00CFFF] via-[#363BB4] to-[#080846] w-full max-w-[90%] mx-auto rounded-[2rem] aspect-[325/168] md:aspect-auto md:min-h-[35rem] lg:min-h-[40rem]"
        id="live"
      >
        <video
          src="../../MAC.webm"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full"
        />
      </section>

      <div className="md:flex md:flex-row md:w-full md:justify-between lg:justify-around md:flex-wrap gap-8 md:gap-0 mb-[13.5vw] md:mb-0 mt-[11.5vw] xl:mt-[5.5vw] px-4 md:px-16 border-none">
        <div className="flex gap-[42px]">
          <div className="flex items-center gap-4 text-[3vw] md:text-[1.5vw] md:text-lg font-bold text-[#080846] w-fit">
            <img
              src="../../public/Chat.png"
              alt="Interaja ao vivo"
              className="w-[6.5vw] h-[6.5vw] md:w-[4.5vw] md:h-[4.5vw]"
            />
            Interaja ao vivo
          </div>

          <div className="flex items-center gap-4 text-[3vw] md:text-[1.5vw] md:text-lg font-bold text-[#080846] w-fit">
            <img
              src="../../public/Coração.png"
              alt="Favorite peças"
              className="w-[6.5vw] h-[5.5vw] md:w-[4.5vw] md:h-[3.5vw]"
            />
            <p className="leading-none">
              Favorite <br /> peças
            </p>
          </div>
        </div>

        <div className="flex gap-[45px] mt-[29px] md:mt-0">
          <div className="flex items-center gap-4 text-[3vw] md:text-[1.5vw] md:text-lg font-bold text-[#080846] w-fit">
            <img
              src="../../public/Pedidos.png"
              alt="Compre sem sair da live"
              className="w-[6.5vw] h-[7.5vw] md:w-[4.5vw] md:h-[5.5vw]"
            />
            <div className="leading-none">
              Compre sem <br /> sair da live
            </div>
          </div>

          <div className="flex items-center gap-4 text-[3vw] md:text-[1.5vw] md:text-lg font-bold text-[#080846] w-fit">
            <img
              src="../../public/Ticket.png"
              alt="Descontos especiais"
              className="w-[6.5vw] h-[3.5vw] md:w-[4.5vw] md:h-[2.5vw]"
            />
            <div className="leading-none">
              Garanta <br className="md:hidden" /> descontos <br /> especiais
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-9 md:mt-16 relative w-full">
        <div className="relative w-full left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8].map(
              (num, index) => (
                <div
                  key={index}
                  className="h-14 w-[100px] mx-4 flex-shrink-0 transition-all duration-300 rounded-lg"
                >
                  <img
                    src={`/livePhotos/Background%20%28${num}%29%20%281%29_11zon.webp`}
                    alt={`Imagem ${num}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="mt-9 md:mt-16 relative w-full">
        <div className="relative w-full left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[9, 10, 11, 12, 13, 14, 15, 16, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (num, index) => (
                <div
                  key={index}
                  className="h-14 w-[100px] mx-4 flex-shrink-0 transition-all duration-300 rounded-lg"
                >
                  <img
                    src={`/livePhotos/Background%20%28${num}%29%20%281%29_11zon.webp`}
                    alt={`Imagem ${num}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="mt-9 md:mt-16 relative w-full">
        <div className="relative w-full left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[
              17, 18, 19, 20, 21, 22, 23, 24, 17, 18, 19, 20, 21, 22, 23, 24,
            ].map((num, index) => (
              <div
                key={index}
                className="h-14 w-[100px] mx-4 flex-shrink-0 transition-all duration-300 rounded-lg"
              >
                <img
                  src={`/livePhotos/Background%20%28${num}%29%20%281%29_11zon.webp`}
                  alt={`Imagem ${num}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-9 md:mt-16 relative w-full">
        <div className="relative w-full left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[
              25, 26, 27, 28, 29, 30, 31, 32, 25, 26, 27, 28, 29, 30, 31, 32,
            ].map((num, index) => (
              <div
                key={index}
                className="h-14 w-[100px] mx-4 flex-shrink-0 transition-all duration-300"
              >
                <img
                  src={`/livePhotos/Background%20%28${num}%29%20%281%29_11zon.webp`}
                  alt={`Imagem ${num}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default LiveFeature;
