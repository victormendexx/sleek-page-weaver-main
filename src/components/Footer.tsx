import { FooterClipPath } from "./ui/footer";
import { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Sobre", href: "#about", weight: "bold" },
    { name: "Soluções", href: "#solutions", weight: "normal" },
    { name: "Benefícios", href: "#benefits", weight: "normal" },
    { name: "Contato", href: "#contact", weight: "normal" },
    { name: "Cadastre-se", href: "#register", weight: "normal" },
  ];

  return (
    <footer
      className="border-t border-gray-200 overflow-hidden mt-40 w-full"
      id="contact"
    >
      {/* Logo */}
      <img
        src="../../public/logo.svg"
        alt="Logo Nextil"
        className="relative top-10 sm:top-16 ml-4 sm:left-16 w-32 sm:w-48"
      />

      {/* Clipping Path */}
      <FooterClipPath />

      {/* Main Container */}
      <div className="bg-[#080846] w-full min-h-[32rem] pt-10 px-4 sm:px-6 md:px-12 flex flex-col text-white z-20 inverted-radius">
        <div className="max-w-7xl w-full mx-auto">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Description */}
            <div className="flex justify-center items-center w-full lg:w-2/6">
              <p className="text-center lg:text-left px-4 text-sm sm:text-base pt-4 sm:pt-10 mt-16 sm:mt-28">
                A <span className="font-semibold">Nextil</span> é um Social
                Commerce que simplifica a
                <br className="hidden sm:block" />
                jornada de compra e venda, conectando marcas
                <br className="hidden sm:block" />
                e lojistas de forma inovadora.
              </p>
            </div>

            {/* Links & Redes */}
            <div className="flex flex-col gap-6 justify-between w-full lg:w-4/6">
              {/* Nav Links + Login */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <nav className="flex flex-wrap justify-center items-center lg:justify-start gap-x-6 gap-y-2 w-full">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`text-xs sm:text-sm font-${link.weight} ${
                        link.name === "Cadastre-se"
                          ? "bg-[#202058] hover:bg-[#303068] px-4 py-1 rounded-full font-semibold"
                          : ""
                      }`}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>

                {/* Login Button */}
                <a
                  href="#login"
                  className="px-4 py-2 rounded-full text-[#080846] border-2 border-white bg-white hover:bg-[#d4d4d4] transition-colors text-xs sm:text-sm"
                >
                  Login
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center lg:justify-end pt-6">
                <img
                  src="../../public/icons.svg"
                  alt="Ícones sociais"
                  className="w-32 sm:w-40"
                />
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="border-t border-gray-400 mt-10 pt-4 pb-10 flex flex-col sm:flex-row justify-center sm:justify-between items-center text-sm gap-2 sm:gap-0">
            <p>{currentYear} © Nextil Ltda - Todos os direitos reservados</p>
            <p className="text-center">
              Políticas de Privacidade e Termos de Uso
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
