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
    <section className="py-20 px-4 sm:px-8 w-full max-w-[90%] mx-auto" id="features">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Feature Items */}
        <div className="flex flex-col gap-6">
          {featureItems.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
              <h4 className="text-2xl sm:text-[1.6rem] font-bold text-[#080846]">{item.title}</h4>
              <p className="sm:ml-2 text-xl sm:text-[1.6rem] text-[#080846]">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center flex flex-col items-center">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#363BB4] flex items-baseline">
              <span className="text-2xl mr-1">R$</span>1bi
            </h3>
            <p className="text-[#080846] mt-2 text-sm sm:text-base">
              em compras de <br />
              lojistas como você <br />
              <span className="font-bold">até 2026</span>
            </p>
          </div>

          <div className="text-center flex flex-col items-center">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#363BB4] flex items-center">
              <span className="text-4xl mr-1">+</span>1mil
            </h3>
            <p className="text-[#080846] mt-2 text-sm sm:text-base">
              novos negócios <br />
              concluídos <span className="font-bold">ao mês</span>
            </p>
          </div>

          <div className="text-center flex flex-col items-center">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#363BB4]">
              80%
            </h3>
            <p className="text-[#080846] mt-2 text-sm sm:text-base">
              de <span className="font-bold">redução</span> no <br />
              tempo de compra <br />e reposição
            </p>
          </div>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="mt-16 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-6 items-center justify-items-center">
        {[
          "lunelli",
          "sol",
          "formitz",
          "tex-cotton",
          "live",
          "kamylus",
          "systextil",
          "marlan",
          "vestcasa",
        ].map((brand, index) => (
          <img
            key={index}
            src={`../../public/${brand}.png`}
            alt={brand}
            className="w-full max-w-[100px] grayscale hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
