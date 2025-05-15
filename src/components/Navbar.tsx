import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Sobre", href: "#about" },
    { name: "Soluções", href: "#solutions" },
    { name: "Benefícios", href: "#benefits" },
    { name: "Contato", href: "#contact" },
    { name: "Cadastre-se", href: "#register" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3">
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a
            href="#"
            className="text-2xl font-bold text-nextil-blue flex items-center"
          >
            <span className="text-nextil-blue font-bold">nextil</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 border-solid border-2 border-[#080846] p-2 px-4 rounded-[3rem] justify-around">
          {navLinks.slice(0, 4).map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Login Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="#login"
            className="px-4 py-2 rounded-md bg-nextil-blue text-white hover:bg-nextil-blue/90 transition-colors"
          >
            Login
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-nextil-navy"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
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
