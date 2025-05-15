
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Empresa",
      links: [
        { name: "Sobre nós", href: "#about" },
        { name: "Carreiras", href: "#" },
        { name: "Imprensa", href: "#" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Soluções",
      links: [
        { name: "Para lojistas", href: "#" },
        { name: "Para marcas", href: "#" },
        { name: "Marketplace", href: "#" },
        { name: "Integrações", href: "#" }
      ]
    },
    {
      title: "Suporte",
      links: [
        { name: "Ajuda", href: "#" },
        { name: "Contato", href: "#contact" },
        { name: "FAQ", href: "#" },
        { name: "Documentação", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-200" id="contact">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-nextil-blue mb-4">nextil</div>
            <p className="text-gray-600 mb-6 max-w-xs">
              Conectando lojistas e marcas para uma experiência de compra mais eficiente e estratégica.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-nextil-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-nextil-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-nextil-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column, index) => (
            <div key={index} className="md:col-span-1">
              <h4 className="font-semibold text-lg mb-4 text-nextil-blue">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="text-gray-500 hover:text-nextil-blue transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Download app section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold mb-4">Baixe nosso App agora mesmo.</h4>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="flex items-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                  <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none">
                    <path d="M17.5 12C17.5 9.7 15.8 7.9 13.7 7.1C14.5 6.3 15 5.2 15 4H9C9 5.2 9.5 6.3 10.3 7.1C8.2 7.9 6.5 9.7 6.5 12C6.5 14.3 8.2 16.1 10.3 16.9C9.5 17.7 9 18.8 9 20H15C15 18.8 14.5 17.7 13.7 16.9C15.8 16.1 17.5 14.3 17.5 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  App Store
                </a>
                <a href="#" className="flex items-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                  <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3V21M5.5 5.5L18.5 18.5M3 12H21M5.5 18.5L18.5 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Google Play
                </a>
              </div>
            </div>
            <div className="md:text-right">
              <p className="text-sm text-gray-500">
                &copy; {currentYear} Nextil. Todos os direitos reservados.
              </p>
              <div className="flex space-x-6 mt-4 md:justify-end">
                <a href="#" className="text-gray-500 hover:text-nextil-blue text-sm">Termos de Serviço</a>
                <a href="#" className="text-gray-500 hover:text-nextil-blue text-sm">Política de Privacidade</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
