import { FooterClipPath } from "./ui/footer";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Sobre", href: "#about", weight: "bold" },
    { name: "Soluções", href: "#solutions", weight: "normal" },
    { name: "Benefícios", href: "#benefits", weight: "normal" },
    { name: "Contato", href: "#contact", weight: "normal" },
    { name: "Cadastre-se", href: "#register", weight: "normal" },
    { name: "Termos de uso", href: "#privacy", weight: "normal" },
    { name: "Políticas de Privacidade", href: "#privacy", weight: "normal" },
  ];

  return (
    <>
      {/* Footer mobile */}
      <footer className="relative w-full mt-[19vw] aspect-[1812/658] overflow-hidden md:hidden">
        <img
          src="../../public/footer-border.svg"
          alt="Rodapé decorativo"
          className="w-full h-full object-cover object-[0.5%]"
        />

        {/* Conteúdo sobre o footer, se desejar */}
        <div className="absolute inset-0 flex flex-col items-start justify-center text-[#080846]">
          <div className="mt-[1vw] ml-[9.25vw] mb-auto">
            <img
              src="../../public/logo.svg"
              alt="Logo"
              className="w-[22.6vw] h-auto"
            />
          </div>

          <p className="text-center px-auto w-full py-[1vw] text-[3.3vw] leading-tight mb-auto">
            A <span className="font-semibold">Nextil</span> é um Social Commerce
            que simplifica a
            <br />
            jornada de compra e venda, conectando marcas
            <br />e lojistas de forma inovadora.
          </p>

          <div className="flex flex-row justify-center items-center gap-[3vw] w-full">
            {/* Sign Up Button for Mobile */}
            {navLinks.map((link) => {
              if (link.name === "Cadastre-se")
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-[3.3vw] font-${link.weight} bg-gray-300 self-center hover:bg-gray-200 text-black border-[0.5vw] border-gray-300 hover:border-gray-200 px-[4vw] py-[1vw] rounded-full md:hidden`}
                  >
                    {link.name}
                  </a>
                );
            })}

            {/* Login Button */}
            <a
              href="#login"
              className="px-[9vw] py-[1vw] rounded-full self-center text-white border-[0.5vw] border-[#080846] bg-[#080846] hover:bg-[#40489E] hover:border-[#40489E] transition-colors text-[3.3vw]"
            >
              Login
            </a>
          </div>
        </div>
      </footer>

      <div className="flex flex-col items-center justify-between mb-auto w-full mt-[2.5vw] md:hidden">
        <nav className="flex flex-col w-full justify-center items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[3.3vw] font-${
                link.weight
              } border-t border-[#080846] w-full p-[1.875vw] ${
                link.name === "Cadastre-se" ? "hidden" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex justify-center border-t border-[#080846] w-full p-[2vw] md:hidden">
        <img
          src="../../public/social_icons.svg"
          alt="Ícones sociais"
          className="w-[37.5vw]"
        />
      </div>

      <div className="border-t border-[#080846] pt-[1.875vw] pb-[2.5vw] flex flex-col justify-center items-center text-[3.3vw] md:hidden">
        <p>{currentYear} © Nextil Ltda - Todos os direitos reservados</p>
      </div>

      {/* Footer for Bigger screens */}
      <footer className="relative w-full mt-[19vw] aspect-[1812/658] overflow-hidden hidden md:block">
        <img
          src="../../public/footer-border.svg"
          alt="Rodapé decorativo"
          className="w-full h-full object-cover object-[0.5%]"
        />

        {/* Conteúdo sobre o footer, se desejar */}
        <div className="absolute inset-0 flex flex-col  items-start justify-center text-[#080846]">
          <div className="flex flex-row mb-auto w-full">
            <div className="mt-[1vw] ml-[9.25vw] lg:mt-[1.5vw] lg:ml-[12.5vw] w-[40%] mb-auto">
              <img
                src="../../public/logo.svg"
                alt="Logo"
                className="w-[22.6vw] lg:w-[17.5vw] h-auto"
              />
            </div>

            <div className="flex flex-row justify-end mr-3 flex-wrap items-center gap-[2vw] w-full">
              {navLinks.map((link) => {
                if (
                  link.name === "Políticas de Privacidade" ||
                  link.name === "Termos de uso"
                ) {
                  return null; // Oculta esses dois
                }

                if (link.name === "Cadastre-se") {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-[2vw] md:text-[1.25vw] font-semibold bg-gray-300 hover:bg-gray-200 text-black border border-gray-300 hover:border-gray-200 px-[2vw] py-[0.5vw] rounded-full transition-colors"
                    >
                      {link.name}
                    </a>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-[2vw] md:text-[1.25vw] font-medium text-[#080846] hover:text-[#40489E] transition-colors"
                  >
                    {link.name}
                  </a>
                );
              })}

              <a
                href="#login"
                className="px-[4vw] py-[1vw] rounded-full text-white border border-[#080846] bg-[#080846] hover:bg-[#40489E] hover:border-[#40489E] transition-colors text-[2vw] md:text-[1.25vw]"
              >
                Login
              </a>
            </div>
          </div>

          <div className="w-full mb-auto flex flex-row">
            <p className="text-start px-auto ml-4 w-1/2 py-[1vw] text-[1.85vw] leading-tight">
              A <span className="font-semibold">Nextil</span> é um Social
              Commerce que simplifica a
              <br />
              jornada de compra e venda, conectando marcas
              <br />e lojistas de forma inovadora.
            </p>

            <div className="flex justify-end w-1/2 py-[2vw] pl-[2vw] pr-[2.3vw]">
              <img
                src="../../public/social_icons.svg"
                alt="Ícones sociais"
                className="w-[17.5vw]"
              />
            </div>
          </div>

          <div className="border-t border-[#080846] w-[96%] self-center flex mb-auto">
            <p className="text-[1.25vw] mt-1 w-1/3 self-start">
              2025 © Nextil Ltda - Todos os direitos reservados
            </p>
            <a className="text-[1.25vw] mt-1 w-2/3 pl-[4.75%]">
              Políticas de Privacidade e Termos de Uso
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
