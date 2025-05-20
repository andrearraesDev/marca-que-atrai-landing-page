import React from 'react';
import { Star } from 'lucide-react';

// Componente de Depoimentos
// Exibe depoimentos de clientes com avaliações em estrelas, texto do depoimento, nome e negócio.

const Testimonials = () => {
  // Lista de depoimentos com informações de cada cliente
  const testimonials = [
    {
      text: "Participar da Marca que Atrai foi um divisor de águas na minha carreira. Como especialista em marketing de influência para o setor de beleza, eu já conhecia várias estratégias, mas aqui aprendi a construir uma marca pessoal autêntica e magnética. O conteúdo é prático, direto e me ajudou a atrair clientes ideais, além de estar me ajudando a fortalecer minha presença digital. Recomendo para todo profissional que quer se destacar de verdade!",
      name: "Vanessa Normandes",
      business: "Especialista em Marketing",
      image: "public/uploads/vanessa.jpeg"
    },
    {
      text: "Eu sempre tive paixão por unhas, alongamentos, mas sentia dificuldade em mostrar meu diferencial nas redes sociais. Depois que entrei para o Marca que Atrai, aprendi a comunicar minha essência e valorizar meu trabalho. Hoje, além de ter agenda cheia, finalmente conquistei clientes fiéis!  O suporte e as reunião são incríveis, vale cada minuto com um pequeno investimento.",
      name: "Pamela França",
      business: "Nail Designer",
      image: "public/uploads/pamela.jpeg"
    },
    {
      text: "O Marca que Atrai superou todas as minhas expectativas! Como biomédica estética, eu precisava de estratégias para me posicionar, posicionar minha nova clínica e transmitir confiança aos meus pacientes. A consultoria me ajudou a finalmente entender a importância de criar autoridade no Instagram e como fazer para aumentar minha procura por procedimentos. Me sinto muito mais segura e realizada profissionalmente!",
      name: "Dra. Aline Rocha",
      business: "Biomédica Estética",
      image: "public/uploads/aline.jpeg"
    }
  ];

  return (
    <section id="depoimentos" className="bg-white section">
      <div className="container-custom">
        {/* Título da seção */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">O que dizem nossos clientes</h2>

        {/* Grid de depoimentos */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-brand-gray p-8 rounded-lg flex flex-col h-full">
              {/* Estrelas de avaliação */}
              <div className="flex mb-4">
                <Star className="h-5 w-5 fill-brand-gold text-brand-gold" />
                <Star className="h-5 w-5 fill-brand-gold text-brand-gold" />
                <Star className="h-5 w-5 fill-brand-gold text-brand-gold" />
                <Star className="h-5 w-5 fill-brand-gold text-brand-gold" />
                <Star className="h-5 w-5 fill-brand-gold text-brand-gold" />
              </div>

              {/* Texto do depoimento */}
              <p className="text-gray-700 mb-6 flex-grow">"{testimonial.text}"</p>

              {/* Informações do cliente */}
              <div className="flex items-center mt-auto">
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
