
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "A consultoria foi um divisor de águas para o meu negócio. Consegui entender meus pontos fortes e como me comunicar melhor com meus clientes.",
      name: "Ana Silva",
      business: "Studio de Design",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      text: "Em apenas uma semana aplicando as estratégias, já notei um aumento significativo no interesse pelos meus serviços. Recomendo muito!",
      name: "Carlos Mendes",
      business: "Salão de Beleza",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    },
    {
      text: "O mini-plano de ação foi perfeito para mim que estava começando. Direto, prático e com resultados rápidos.",
      name: "Patrícia Lima",
      business: "Consultora de Imagem",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    }
  ];

  return (
    <section id="depoimentos" className="bg-white section">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">O que dizem nossos clientes</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-brand-gray p-8 rounded-lg">
              <div className="flex mb-4">
                <Star className="h-5 w-5 fill-brand-gold text-brand-gold" />
                <Star className="h-5 w-5 fill-brand-gold text-brand-gold" />
                <Star className="h-5 w-5 fill-brand-gold text-brand-gold" />
                <Star className="h-5 w-5 fill-brand-gold text-brand-gold" />
                <Star className="h-5 w-5 fill-brand-gold text-brand-gold" />
              </div>
              
              <p className="text-gray-700 mb-6">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
