
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  return (
    <section className="py-20 bg-nextil-gray" id="about">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-nextil-blue">Seu mix ideal a um clique.</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                A Nextil conecta você, lojista, às marcas certas, com mais agilidade, controle e visibilidade de produtos e estoque.
              </p>
              <p>
                Encontre as marcas que são o match perfeito com o seu público e faça pedidos diretamente, em um só lugar.
              </p>
            </div>
            <div className="mt-8">
              <a href="#register" className="btn-primary">
                Cadastre-se
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-tr from-blue-400 to-blue-600 p-1 rounded-lg">
              <AspectRatio ratio={4/3}>
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                  alt="Pessoa utilizando a plataforma Nextil"
                  className="rounded-lg w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
            
            {/* Numbers/Stats overlay */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 md:p-6 w-40 md:w-48">
              <div className="space-y-4">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-nextil-blue">+500</p>
                  <p className="text-sm text-gray-600">Lojas conectadas</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-nextil-blue">+50</p>
                  <p className="text-sm text-gray-600">Marcas parceiras</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
