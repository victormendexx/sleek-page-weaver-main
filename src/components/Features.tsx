const Features = () => {
  const stats = [
    {
      title: "1bi",
      prefix: "R$",
      description: "em compras de lojistas como você até 2026",
    },
    {
      title: "1mil",
      prefix: "+",
      description: "novos negócios concluídos ao mês",
    },
    {
      title: "80%",
      prefix: "",
      description: "de redução no tempo de compra e reposição",
    },
  ];

  const featureItems = [
    {
      title: "Simples",
      description: "para quem compra.",
    },
    {
      title: "Estratégico",
      description: "para quem lidera marcas.",
    },
  ];

  const brandLogos = [
    "../../public/lunelli.png",
    "../../public/sol.png",
    "../../public/formitz.png",
    "../../public/tex-cotton.png",
    "../../public/live.png",
    "../../public/kamylus.png",
    "../../public/systextil.png",
    "../../public/marlan.png",
    "../../public/vestcasa.png",
  ];

  return (
    <section className="py-20 bg-white w-[75%]" id="features">
      <div className="container-custom  ">
        <div className="flex items-center justify-center w-full">
          {/* Features Items */}
          <div className="w-2/4 gap-8 mb-16 flex flex-col ">
            {featureItems.map((item, index) => (
              <div key={index} className="flex items-center">
                <h4 className="text-[1.6rem] font-bold text-[#080846]">
                  {item.title}
                </h4>
                <p className="ml-2 text-[1.6rem] text-[#080846]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 w-2/4">
            <div className="text-center flex flex-col items-center justify-start">
              <h3
                className={`text-4xl md:text-5xl lg:text-7xl font-bold text-[#363BB4] flex justify-center items-baseline`}
              >
                <span className={`text-[2rem] `}>R$</span>
                1bi
              </h3>
              <p className="text-[#080846] mt-2 text-left  text-[1.1rem]">
                em compras de
                <br />
                lojistas como <br /> você{" "}
                <span className="font-bold">até 2026</span>
              </p>
            </div>

            <div className="text-center flex flex-col items-center justify-start">
              <h3
                className={`text-4xl md:text-5xl lg:text-7xl font-bold text-[#363BB4] flex justify-center items-center`}
              >
                <span className={`text-[4rem]`}>+</span>
                1mil
              </h3>
              <p className="text-[#080846] mt-2 text-left text-[1.1rem]">
                novos negócios <br />
                concluídos <span className="font-bold">ao mês</span>
              </p>
            </div>

            <div className="text-center flex flex-col items-center justify-start">
              <h3
                className={`text-4xl md:text-5xl lg:text-7xl font-bold text-[#363BB4] flex justify-center`}
              >
                80%
              </h3>
              <p className="text-[#080846] mt-2 text-left  text-[1.1rem]">
                de <span className="font-bold">redução</span> no <br />
                tempo de compra <br />e reposição
              </p>
            </div>
          </div>
        </div>
        {/* Brand Logos */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 items-center justify-items-center">
          {brandLogos.map((brand, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="bg-gray-100 h-12 w-24 rounded flex items-center justify-center">
                <span className="text-sm font-medium text-gray-500">
                  {brand}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
