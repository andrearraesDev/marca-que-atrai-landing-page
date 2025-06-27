import React from 'react';
import { Gift, Star } from 'lucide-react';

const OfferCard = () => {
  return (
    <section id="cta" className="bg-brand-black text-white py-20">
      <div className="container-custom">
        {/* Cabeçalho motivacional */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-lg md:text-xl">
            Dê o primeiro passo para criar uma marca que atrai<br /> e conquista clientes todos os dias.
          </p>
        </div>

        {/* Card de oferta */}
        <div className="max-w-3xl mx-auto bg-white text-brand-black rounded-lg shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Título da oferta */}
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Consultoria Express
              <br />
              MARCA QUE ATRAI
            </h3>

            {/* Imagens e avaliações */}
            <div className="flex justify-center mb-8">
              <div className="flex -space-x-2">
                <img
                  src="https://raw.githubusercontent.com/andrearraesDev/marca-que-atrai-landing-page/refs/heads/main/public/uploads/vanessa.jpeg"
                  alt="Cliente"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://raw.githubusercontent.com/andrearraesDev/marca-que-atrai-landing-page/refs/heads/main/public/uploads/pamela.jpeg"
                  alt="Cliente"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://raw.githubusercontent.com/andrearraesDev/marca-que-atrai-landing-page/refs/heads/main/public/uploads/aline.jpeg"
                  alt="Cliente"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              </div>
              <div className="ml-4 flex items-center">
                <div className="flex">
                  <Star className="h-5 w-5 fill-brand-gold text-brand-gold" />
                  <Star className="h-5 w-5 fill-brand-gold text-brand-gold" />
                  <Star className="h-5 w-5 fill-brand-gold text-brand-gold" />
                  <Star className="h-5 w-5 fill-brand-gold text-brand-gold" />
                  <Star className="h-5 w-5 fill-brand-gold text-brand-gold" />
                </div>
              </div>
            </div>

            {/* Preço e bônus */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between border-t border-b border-gray-200 py-8 mb-8">
              <div>
                <p className="text-gray-500 text-sm uppercase mb-1">Investimento único</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">R$149,90</span>
                  <span className="text-gray-500 ml-2 line-through">R$399,90</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">ou 12x no cartão</p>
              </div>

              <div className="mt-6 md:mt-0">
                <div className="flex items-center mb-2">
                  <div className="bonus-tag mr-2 flex items-center text-xs font-bold text-white bg-brand-gold px-2 py-1 rounded-full">
                    <Gift className="h-3 w-3 mr-1" />
                    BÔNUS
                  </div>
                  <span className="text-sm ml-1">PDF Checklist de Marca</span>
                </div>
                <div className="flex items-center">
                  <div className="bonus-tag mr-2 flex items-center text-xs font-bold text-white bg-brand-gold px-2 py-1 rounded-full">
                    <Gift className="h-3 w-3 mr-1" />
                    BÔNUS
                  </div>
                  <span className="text-sm ml-1">45 min de consultoria por vídeo</span>
                </div>
              </div>
            </div>

            {/* Bloco de desconto e urgência */}
            <div className="mt-4 text-center">
              <div className="inline-block bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-full">
                60% DE DESCONTO
              </div>
              <p className="text-sm mt-1">Oferta por tempo limitado</p>
            </div>

            {/* Botão de ação */}
            <a
              href="https://pay.kiwify.com.br/Gpbm0z6"
              className="btn-primary block w-full text-center text-lg mt-8"
            >
              QUERO VIRAR ESSE JOGO
            </a>

            {/* Garantia */}
            <p className="text-xs text-center text-gray-500 mt-4">
              Garantia de 7 dias ou seu dinheiro de volta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferCard;
