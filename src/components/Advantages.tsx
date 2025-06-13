import SignupButton from "./ui/signup-button";

const Advantages = () => {
  return (
    <>
      <section className="my-10 py-[9.5vw] md:my-8 md:py-[7.5vw] rounded-2xl bg-white w-full max-w-[90%] mx-auto md:mx-0 xl:flex xl:justify-around">
        <div className="container-custom flex flex-col md:flex-row lg:flex-row lg:self-center text-[#080846] gap-[11.5vw] md:gap-3 lg:justify-between md:justify-around w-[90%] lg:w-full md:w-fit md:mx-0">
          {/* Texto principal */}
          <div className="flex flex-col md:my-auto justify-center gap-[5.5vw] md:gap-[2.25vw] w-full md:w-1/3 lg:w-[42.5%] xl:w-[50%]">
            {/* Texto para telas maiores */}
            <h2 className="hidden md:block text-2xl md:text-[2.3vw] lg:text-4xl font-bold md:leading-none">
              Sua loja merece
              <br /> uma forma mais <br />
              <span className="text-[#00CFFF]">prática e inteligente</span>
              <br /> de comprar.
            </h2>

            {/* Texto para mobile */}
            <h2 className="text-[6vw] md:hidden font-bold leading-tight">
              Sua loja merece uma
              <br /> forma mais
              <span className="text-[#00CFFF] px-[0.375rem]">
                prática e <br /> inteligente
              </span>
              de comprar.
            </h2>

            <p className="text-[3.3vw] md:text-[1.05vw] lg:text-[1.35vw] xl:text-[0.85vw] leading-snug md:leading-tight">
              A Nextil conecta você diretamente às marcas, <br /> agilizando as
              compras para a sua marca de moda. Nosso{" "}
              <br className="hidden lg:block" /> propósito é claro: fortalecer a
              moda nacional com <br className="hidden md:block" /> soluções
              pensadas exclusivamente para o segmento.
            </p>
          </div>

          {/* Cards de vantagens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[7.5vw] md:gap-[1.875vw] w-full md:w-2/3 lg:w-[55%] xl:w-[60%]">
            {/* Card 1 */}
            <div className="flex gap-[2.5vw] md:gap-[1.25vw]">
              <img
                src="../../public/marcas.png"
                alt=""
                className="w-[11.5vw] h-[11.5vw] gap-[1.5vw] md:w-[3.8vw] md:h-[3.8vw] object-contain"
              />
              <div className="flex flex-col md:gap-[1.25vw]">
                <h3 className="text-[4.2vw] md:text-[1.8vw] lg:text-[1.35vw] font-bold leading-none">
                  Encontre as marcas <br /> ideais para sua loja
                </h3>
                <p className="text-[3.3vw] md:text-[1.05vw] lg:text-[0.95vw] leading-snug">
                  Veja lançamentos e novidades em um <br /> só lugar, com uma
                  apresentação clara <br /> e fácil de navegar.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex gap-[2.5vw] md:gap-[1.25vw]">
              <img
                src="../../public/link.png"
                alt=""
                className="w-[11.5vw] h-[11.5vw] gap-[1.5vw] md:w-[3.8vw] md:h-[3.8vw] object-contain"
              />
              <div className="flex flex-col md:gap-[1.25vw]">
                <h3 className="text-[4.2vw] md:text-[1.8vw] lg:text-[1.35vw] font-bold leading-none">
                  Conecte-se diretamente <br /> com fornecedores
                </h3>
                <p className="text-[3.3vw] md:text-[1.05vw] lg:text-[0.95vw] leading-snug">
                  Peça direto da plataforma, sem <br /> depender de agendas,
                  catálogos <br />
                  confusos ou múltiplos canais.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex gap-[2.5vw] md:gap-[1.25vw]">
              <img
                src="../../public/sacola.png"
                alt=""
                className="w-[11.5vw] h-[11.5vw] gap-[1.5vw] md:w-[3.8vw] md:h-[3.8vw] object-contain"
              />
              <div className="flex flex-col md:gap-[1.25vw]">
                <h3 className="text-[4.2vw] md:text-[1.8vw] lg:text-[1.35vw] font-bold leading-none">
                  Organize e controle <br /> seus pedidos
                </h3>
                <p className="text-[3.3vw] md:text-[1.05vw] lg:text-[0.95vw] leading-snug">
                  Centralize suas compras, veja seu <br /> histórico e mantenha
                  seu mix <br />
                  sempre equilibrado em um só lugar.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex gap-[2.5vw] md:gap-[1.25vw]">
              <img
                src="../../public/conexoes.png"
                alt=""
                className="w-[11.5vw] h-[11.5vw] gap-[1.5vw] md:w-[3.8vw] md:h-[3.8vw] object-contain"
              />
              <div className="flex flex-col md:gap-[1.25vw]">
                <h3 className="text-[4.2vw] md:text-[1.8vw] lg:text-[1.35vw] font-bold leading-none">
                  Interaja em <br /> tempo real
                </h3>
                <p className="text-[3.3vw] md:text-[1.05vw] lg:text-[0.95vw] leading-snug">
                  Fale com as marcas em tempo real <br /> por comentários e
                  mensagens para <br /> tirar todas as suas dúvidas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segunda secção para mobile */}
      <div className="px-[5vw] md:hidden w-full">
        {/* Iphones */}
        <div className="w-full relative aspect-[324/157] overflow-hidden flex flex-col justify-end md:hidden">
          <img
            src="../../iphone-nextil.png"
            className="absolute top-0 left-0 w-full h-full object-fill z-0"
            alt="IPHONE"
          />
        </div>

        {/* Caixa com texto e fundo azul */}
        <div className="w-full mt-[9.5vw] relative aspect-[326/272] overflow-hidden flex flex-col justify-end">
          <img
            src="../../blue-box-like-comment-mobile.svg"
            className="absolute top-0 left-0 w-full h-full object-fill z-0"
            alt="blue-box-ideal-mix-mobile"
          />

          {/* Conteúdo sobreposto ao fundo */}
          <div className="relative z-10">
            <SignupButton
              extraClasses="bg-[#363BB4] flex items-center justify-center text-[3.5vw] h-[10vw] w-[47vw] ml-auto text-white border-none"
              buttonExtraClasses="h-[7.5vw] w-[7.5vw]"
              iconExtraClasses="text-[#363BB4]"
              arrowSize="5vw"
            />
          </div>
        </div>

        <div className="relative w-full aspect-[325/192] overflow-hidden rounded-xl mt-[9.5vw]">
          <video
            src="../../IPHONE.webm"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full bg-[#00CFFF]"
          />
        </div>
      </div>

      {/* Imagem final com zoom apenas na direita */}
      <div className="relative w-full mt-[-6vw] z-20 md:hidden overflow-hidden">
        <img
          src="../../public/LOJISTA_CORTADO.png"
          alt="Lojista"
          className="w-full object-cover"
        />
      </div>

      <div className="w-full h-full relative">
        {/* Segunda secção para telas maiores */}
        <div className="hidden md:flex flex-row justify-between items-start w-full">
          {/* Coluna esquerda */}
          <div className="flex flex-col w-[47.5%]">
            <div className="bg-[url('../../iphone-nextil.png')] bg-no-repeat bg-contain bg-center rounded-[2rem] aspect-[893/441] ml-[2.5%] mb-[3.625%]"></div>

            <div className="ml-[2.5%] basis-1/3 relative aspect-[888/436] overflow-hidden flex flex-col justify-end">
              <img
                src="../../blue-box-empty-desktop-2.svg"
                className="absolute top-0 left-0 w-full h-full object-fill z-0"
                alt="blue-box-ideal-mix-mobile"
              />
              <div className="relative z-10 mb-auto mt-[4.5vw] mx-[5vw]">
                <h2 className="text-white font-bold text-[3.25vw] mb-[1.9vw] leading-none">
                  Curta, comente e <br /> salve seus favoritos.
                </h2>
                <p className="text-white text-[1.1vw] font-light leading-snug">
                  Navegue exatamente como nas redes sociais enquanto abastece{" "}
                  <br /> seu estoque. A Nextil é o único social commerce do
                  Brasil. Nele, <br />
                  você encontra os produtos ideias para seu mix.
                </p>
              </div>
            </div>
          </div>

          {/* Coluna direita (vídeo no topo) */}
          <div className="relative w-[46.25%] aspect-[892/913] overflow-hidden rounded-xl mr-[1.2%]">
            {/* Imagem de fundo */}
            <img
              src="/background-for-video-1-desktop.svg"
              alt="Background"
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            {/* Vídeo sobreposto */}
            <video
              src="/IPHONE.webm"
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-contain z-10"
            />
          </div>
        </div>

        {/* Botão sobreposto colado no fundo do vídeo */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[10]">
          <SignupButton
            extraClasses="bg-[#363BB4] flex items-center justify-center text-[1.75vw] h-[5vw] w-[24vw] text-white border-none"
            buttonExtraClasses="h-[3.75vw] w-[3.75vw]"
            iconExtraClasses="text-[#363BB4]"
            arrowSize="2.5vw"
          />
        </div>
      </div>

      {/* Imagem final para telas maiores */}
      <img
        src="/lojista.png"
        alt="Lojista"
        className="object-cover hidden md:block relative -mt-[5vw] mx-auto z-10"
      />
    </>
  );
};

export default Advantages;
