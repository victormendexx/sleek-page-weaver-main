
const Testimonials = () => {
  const testimonials = [
    {
      quote: "A plataforma Nextil revolucionou a forma como compramos produtos para nossa loja. Economizamos tempo e dinheiro.",
      author: "Maria Silva",
      position: "Gerente de Compras, ModaStore",
      avatar: "https://randomuser.me/api/portraits/women/17.jpg"
    },
    {
      quote: "Aumento de 30% nas vendas desde que começamos a utilizar o mix de produtos sugerido pela plataforma.",
      author: "Carlos Mendes",
      position: "Proprietário, Mendes Fashion",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "O atendimento é excepcional e a plataforma é intuitiva. Recomendo para todos os lojistas.",
      author: "Ana Ferreira",
      position: "Diretora Comercial, AF Store",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-nextil-blue">O que nossos clientes dizem</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja como a Nextil está transformando a experiência de compra para lojistas em todo o Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-nextil-blue">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
