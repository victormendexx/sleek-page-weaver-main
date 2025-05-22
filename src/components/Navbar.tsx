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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#E6E6E6] py-2 sm:py-3 h-20 sm:h-24 md:h-28 lg:h-32 flex items-center justify-between transition-all max-w-[100vw]">
      <div className="w-full max-w-7xl xl:max-w-screen-xl 2xl:max-w-[1600px] mx-auto flex justify-between items-center px-4 sm:px-8 lg:px-12 xl:px-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="../../public/logo.svg"
            alt="Logo"
            width={120}
            className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4  border-solid border-2 border-[#080846] py-[.3rem] px-2 xl:px-6 rounded-[3rem] justify-around lg:w-[38rem] xl:w-[45rem] 2xl:w-[55rem] transition-all">
          {navLinks.slice(0, 5).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link text-xs sm:text-sm xl:text-base text-[#080846] hover:text-[#40489E] ${
                link.name === "Cadastre-se"
                  ? "bg-[#e7e7e7] hover:bg-[#eeeeee] px-3 xl:px-6 py-1 rounded-full font-semibold"
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

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-nextil-navy ml-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t w-full absolute top-full left-0 shadow-lg">
          <div className="w-full max-w-7xl mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-[#080846] text-base font-medium nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#login"
              className="block py-2 px-4 bg-[#363BB4] text-white rounded-full text-center font-medium"
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
