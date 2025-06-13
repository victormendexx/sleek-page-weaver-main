const Features = () => {
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

  return (
    <section
      className="py-[9.5vw] md:py-14 md:px-6 w-full mx-auto"
      id="features"
    >
      <div className="grid grid-cols-1 md:flex gap-7 md:gap-0 md:justify-between lg:justify-around items-start md:items-center">
        {/* Feature Items */}
        <div className="flex flex-col w-fit">
          {featureItems.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 md:gap-[0.6vw] lg:gap-[0.8vw] flex-row items-center justify-center md:justify-start text-center sm:text-left"
            >
              <h4 className="ml-9 text-[5.5vw] md:text-lg lg:text-2xl font-bold text-[#080846]">
                {item.title}
              </h4>
              <p className="text-[4.25vw] md:text-base lg:text-xl text-[#080846]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 md:flex gap-8 md:gap-3 lg:gap-4">
          <div className="text-left md:text-center flex flex-col items-center">
            <h3 className="text-4xl lg:text-6xl font-bold text-[#363BB4] flex items-baseline">
              <span className="text-2xl mr-1">R$</span>1bi
            </h3>
            <p className="text-[#080846] mt-1 hidden md:block md:text-[0.71rem] lg:text-[1rem] text-start">
              em compras de <br />
              lojistas como você <br />
              <span className="pl-[0.4vw] font-bold">até 2026</span>
            </p>
            <p className="text-[#080846] mt-1 text-[2.75vw] md:hidden sm:text-base">
              em compras de <br />
              lojistas como <br /> você
              <span className="pl-1 font-bold">até 2026</span>
            </p>
          </div>

          <div className="text-left md:text-center flex flex-col items-center">
            <h3 className="text-4xl lg:text-6xl font-bold text-[#363BB4] flex items-center">
              <span className="text-4xl mr-1">+</span>1mil
            </h3>
            <p className="text-[#080846] mt-1 text-[2.75vw] md:text-[0.71rem] lg:text-[1rem] text-start">
              novos negócios <br />
              concluídos{" "}
              <span className="font-bold">
                todos os <br className="hidden md:block" /> meses
              </span>
            </p>
          </div>

          <div className="text-left md:text-center flex flex-col items-center">
            <h3 className="text-4xl lg:text-6xl font-bold text-[#363BB4]">
              80%
            </h3>
            <p className="text-[#080846] mt-1 text-[2.75vw] md:text-[0.71rem] lg:text-[1rem] text-start">
              de <span className="font-bold">redução</span> no <br />
              tempo de compra <br />e reposição
            </p>
          </div>
        </div>
      </div>

      <div className="mt-9 md:mt-16 relative w-full">
        {/* Mobile: Carrossel rolando horizontalmente */}
        <div className="relative w-full left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[
              "lunelli",
              "sol-paragliders",
              "formitz",
              "tex-cotton",
              "live",
              "kamylus",
              "systextil",
              "marlan",
              "vestcasa",
              // Duplicado
              "lunelli",
              "sol-paragliders",
              "formitz",
              "tex-cotton",
              "live",
              "kamylus",
              "systextil",
              "marlan",
              "vestcasa",
            ].map((brand, index) => (
              <div
                key={index}
                className="relative w-[17.67vw] h-[4.949vw] xl:w-[16.67vw] xl:h-[3.949vw] mx-4 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div
                  className="absolute inset-0 bg-[#080846]"
                  style={{
                    WebkitMaskImage: `url(../../public/companies/${brand}.svg)`,
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    WebkitMaskSize: "contain",
                    maskImage: `url(../../public/companies/${brand}.svg)`,
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    maskSize: "contain",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
