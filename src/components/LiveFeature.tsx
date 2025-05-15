
import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const LiveFeature = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-500 to-blue-500 text-white" id="live">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Compre durante lives de lançamento</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Participe de eventos exclusivos e aproveite condições especiais em tempo real
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Live demo placeholder */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <AspectRatio ratio={16/9}>
              <div className="bg-nextil-navy/20 h-full w-full flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-6 backdrop-blur-sm">
                  <Play className="h-16 w-16 text-white" />
                </div>
              </div>
            </AspectRatio>
          </div>

          {/* Live features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">Experiência Imersiva</h3>
              <p className="text-white/80">
                Conecte-se diretamente com as marcas em apresentações ao vivo de produtos e coleções
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Acesso Exclusivo</h3>
              <p className="text-white/80">
                Seja o primeiro a conhecer as novidades e garanta produtos em alta demanda
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Condições Especiais</h3>
              <p className="text-white/80">
                Aproveite promoções relâmpago e descontos exclusivos durante os eventos ao vivo
              </p>
            </div>

            <div className="pt-4">
              <a href="#" className="inline-flex items-center bg-white text-nextil-blue px-6 py-3 rounded-full font-medium transition-all hover:bg-opacity-90">
                Cadastre-se para próximos eventos
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Brand logos/partners */}
        <div className="mt-20 pt-10 border-t border-white/20">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-white/70">Logo</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveFeature;
