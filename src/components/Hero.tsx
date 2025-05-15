
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-nextil-navy text-white min-h-screen flex items-center pt-16" id="hero">
      <div className="absolute inset-0 bg-gradient-to-r from-nextil-navy to-nextil-blue/80 opacity-95"></div>
      
      <div className="container-custom relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Compre das marcas mais desejadas,
            <span className="block font-extrabold mt-2">sem sair da sua loja.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-xl">
            Conectamos você com as melhores marcas do mercado para uma experiência de compra simplificada.
          </p>
          
          <div className="pt-4">
            <a href="#register" className="btn-primary group">
              Cadastre-se
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
        
        <div className="hidden md:block animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
            alt="Computador mostrando plataforma Nextil" 
            className="rounded-lg shadow-2xl max-w-full w-auto h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
