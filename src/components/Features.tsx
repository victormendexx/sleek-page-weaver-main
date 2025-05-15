
const Features = () => {
  const stats = [
    {
      title: "1bi",
      prefix: "R$",
      description: "em compras de lojistas como você até 2026"
    },
    {
      title: "1mil",
      prefix: "+",
      description: "novos negócios concluídos ao mês"
    },
    {
      title: "80%",
      prefix: "",
      description: "de redução no tempo de compra e reposição"
    }
  ];

  const featureItems = [
    {
      title: "Simples",
      description: "para quem compra."
    },
    {
      title: "Estratégico",
      description: "para quem lidera marcas."
    }
  ];

  const brandLogos = [
    "Lunelli", "SOL", "FORMITZ", "TEX COTTON", "LIVE!", "kamylus", "Systextil", "marlan", "Vestcasa"
  ];

  return (
    <section className="py-20 bg-white" id="features">
      <div className="container-custom">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nextil-blue flex items-center justify-center">
                <span className="text-2xl">{stat.prefix}</span>{stat.title}
              </h3>
              <p className="text-gray-600 mt-2">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Features Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {featureItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <h4 className="text-2xl font-bold text-nextil-blue">{item.title}</h4>
              <p className="ml-2 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Brand Logos */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 items-center justify-items-center">
          {brandLogos.map((brand, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <div className="bg-gray-100 h-12 w-24 rounded flex items-center justify-center">
                <span className="text-sm font-medium text-gray-500">{brand}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
