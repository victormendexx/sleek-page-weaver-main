import { IphoneClipPath } from "./ui/iphone-clip-path";
import { LikeClipPath } from "./ui/like-clip-path";
import SignupButton from "./ui/signup-button";

const Advantages = () => {
  return (
    <>
      <section
        className="my-16 py-16 rounded-2xl bg-white w-full max-w-[90%] mx-auto"
        id="advantages"
      >
        <div className="container-custom flex flex-col lg:flex-row text-[#080846] gap-12 px-4 md:px-10 w-[90%] ">
          {/* Texto principal */}
          <div className="flex flex-col justify-center gap-6 w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Sua loja merece
              <br /> uma forma mais <br />
              <span className="text-[#00CFFF]">prática e inteligente</span>
              <br /> de comprar.
            </h2>

            <p className="text-sm md:text-base leading-relaxed">
              A{" "}
              <span className="font-bold">
                Nextil conecta você diretamente às marcas,
              </span>{" "}
              agilizando as compras para a sua loja de moda.
              <br />
              Somos uma solução inovadora, pensada para facilitar a jornada do
              lojista na gestão de pedidos multimarcas.
            </p>
          </div>

          {/* Cards de vantagens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-1/2">
            {/* Card 1 */}
            <div className="flex gap-4">
              <img
                src="../../public/marcas.png"
                alt=""
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">
                  Encontre as marcas <br />
                  ideais para sua loja
                </h3>
                <p className="text-sm leading-snug">
                  Veja lançamentos e novidades em um só lugar, com uma
                  apresentação clara e fácil de navegar.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex gap-4">
              <img
                src="../../public/conexoes.png"
                alt=""
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Interaja em tempo real</h3>
                <p className="text-sm leading-snug">
                  Fale com as marcas em tempo real por comentários e mensagens
                  para tirar todas as suas dúvidas.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex gap-4">
              <img
                src="../../public/link.png"
                alt=""
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">
                  Conecte-se diretamente com fornecedores
                </h3>
                <p className="text-sm leading-snug">
                  Peça direto da plataforma, sem depender de agendas, catálogos
                  confusos ou múltiplos canais.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex gap-4">
              <img
                src="../../public/sacola.png"
                alt=""
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">
                  Organize e controle seus pedidos
                </h3>
                <p className="text-sm leading-snug">
                  Centralize suas compras, veja seu histórico e mantenha seu mix
                  sempre equilibrado em um só lugar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-end gap-8 w-[95%]">
        <LikeClipPath />
        <IphoneClipPath />
        <div className="flex flex-col gap-8 w-full">
          <div className="bg-[url(../../iphone-nextil.png)] bg-no-repeat bg-cover bg-center rounded-[2rem] h-[18rem] w-[100%%]"></div>

          <div className="bg-[#080846] w-full md:w-[100%] h-auto lg:h-[18rem] p-8 sm:p-12 flex flex-col text-white gap-3 inverted-three">
            <h3 className="leading-8">
              Curta, comente e<br /> salve seus favoritos.
            </h3>
            <span className="text-sm font-extralight leading-4">
              Navegue exatamente como nas redes sociais enquanto abastece
              <br /> seu estoque. A Nextil é o único social commerce do Brasil.
              Nele,
              <br /> você encontra os produtos ideias para seu mix.
            </span>
          </div>
        </div>
        <div className="bg-[#00CFFF] w-full md:w-[100%] h-auto lg:h-[38rem] p-8 sm:p-12 flex flex-col inverted-two"></div>
        <SignupButton extraClasses=" absolute right-10 mt-[33rem] left-0 m-auto self-center flex justify-center bg-[#363BB4] border-[#363BB4] text-white cursor-pointer w-[20%] h-20" />
      </div>
      {/* Imagem final responsiva */}
      <img src="../../public/lojista.png" alt="" className="  object-cover" />
    </>
  );
};

export default Advantages;
