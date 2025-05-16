import { useState } from "react";
import { Menu, X } from "lucide-react";
const Navbar = () => {
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white py-3 h-32 flex items-center justify-between">
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <div className="">
          <img src="../../public/logo.svg" alt="" width={120} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 border-solid border-2 border-[#080846] py-[.3rem]   rounded-[3rem] justify-around md:w-[45rem] lg:w-[45.25rem]">
          {navLinks.slice(0, 5).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link text-sm text-[#080846] hover:text-[#40489E] ${
                link.name === "Cadastre-se"
                  ? "bg-[#e7e7e7] hover:bg-[#eeeeee] px-[1rem] py-[.2rem] rounded-full md:text-normal"
                  : " md:pl-1 lg:pl-12 pr-0"
              }  font-${link.weight}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Login Button (Desktop) */}
        <div className="hidden lg:block ">
          <a
            href="#login"
            className="lg:px-8 lg:p-2.5 md:px-4 md:p-2 rounded-full bg-[#080846] border-2 border-[#080846] text-white hover:bg-[#40489E]  hover:border-[#40489E] transition-colors text-sm font-thin hover:font-normal"
          >
            Login
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-nextil-navy"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t w-full">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#login"
              className="block py-2 px-4 bg-nextil-blue text-white rounded-md text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
