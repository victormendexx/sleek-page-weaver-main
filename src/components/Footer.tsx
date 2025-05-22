import { Facebook, Instagram, Linkedin } from "lucide-react";
import { FooterClipPath } from "./ui/footer";
import { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Empresa",
      links: [
        { name: "Sobre nós", href: "#about" },
        { name: "Carreiras", href: "#" },
        { name: "Imprensa", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      title: "Soluções",
      links: [
        { name: "Para lojistas", href: "#" },
        { name: "Para marcas", href: "#" },
        { name: "Marketplace", href: "#" },
        { name: "Integrações", href: "#" },
      ],
    },
    {
      title: "Suporte",
      links: [
        { name: "Ajuda", href: "#" },
        { name: "Contato", href: "#contact" },
        { name: "FAQ", href: "#" },
        { name: "Documentação", href: "#" },
      ],
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Sobre", href: "#about", weight: "bold" },
    { name: "Soluções", href: "#solutions", weight: "normal" },
    { name: "Benefícios", href: "#benefits", weight: "normal" },
    { name: "Contato", href: "#contact", weight: "normal" },
    { name: "Cadastre-se", href: "#register", weight: "normal" },
  ];
  return (
    <footer
      className=" border-t border-gray-200  overflow-hidden h-[30rem] mt-[10rem]"
      id="contact "
    >
      <img
        src="../../public/logo.svg"
        alt=""
        className="relative left-44 top-24 w-48"
      />
      <FooterClipPath />
      <div
        style={{ clipPath: "url(#footer-clip-path)" }}
        className="bg-[#080846] w-[calc(100vw-13rem)]  h-[32.5rem] pt-10 flex flex-row justify-end items-start mx-auto gap-10 lg:gap-10 text-white z-20"
      >
        <nav className="hidden lg:flex items-center space-x-4  border-solid border-2 border-[#080846] py-[.3rem] px-2 xl:px-6 rounded-[3rem] justify-around lg:w-[38rem] xl:w-[45rem] 2xl:w-[55rem] transition-all  ">
          {navLinks.slice(0, 5).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link text-xs sm:text-sm xl:text-base text-[#fff] hover:text-[#40489E] ${
                link.name === "Cadastre-se"
                  ? "bg-[#202058] hover:bg-[#eeeeee] px-3 xl:px-6 py-1 rounded-full font-semibold"
                  : "pl-1 xl:pl-12 pr-0"
              } font-${link.weight} transition-all`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Login Button (Desktop) */}
        <div className="hidden lg:block">
          <a
            href="#login"
            className="px-4 xl:px-8 py-2 xl:py-2.5 rounded-full bg-[#080846] border-2 border-[#080846] text-white hover:bg-[#40489E] hover:border-[#40489E] transition-colors text-xs sm:text-sm xl:text-base font-thin hover:font-normal"
          >
            Login
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
