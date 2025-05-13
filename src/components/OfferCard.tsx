import React from 'react';
import { Gift, Star } from 'lucide-react';

// Componente de Card de Oferta
// Exibe detalhes sobre a consultoria express com a possibilidade de mostrar bônus, preço e avaliações.

const OfferCard = () => {
  return (
    <section className="bg-brand-gray py-16 md:py-24">
      {/* Container principal da oferta */}
      <div className="container-custom">
        {/* Card de oferta com bordas arredondadas e sombra */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Título da oferta */}
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Consultoria Express
              <br />
              MARCA QUE ATRAI
            </h3>

            {/* Seção de imagens dos clientes e avaliações */}
            <div className="flex justify-center mb-8">
              {/* Imagens dos clientes */}
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                  alt="Cliente"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                  alt="Cliente"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  alt="Cliente"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              </div>

              {/* Rating (avaliações) */}
              <div className="ml-4 flex items-center">
                {/* Estrelas de avaliação */}
                <div className="flex">
                  <Star className="h-5 w-5 fill-brand-gold text-brand-gold" />
                  <Star className="h-5 w-5 fill-brand-gold text-brand-gold" />
                  <Star className="h-5 w-5 fill-brand-gold text-brand-gold" />
                  <Star className="h-5 w-5 fill-brand-gold text-brand-gold" />
                  <Star className="h-5 w-5 fill-brand-gold text-brand-gold" />
                </div>
                <span className="ml-2 text-sm text-gray-600">32 avaliações</span>
              </div>
            </div>

            {/* Seção de preços e bônus */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between border-t border-b border-gray-200 py-8 mb-8">
              {/* Preço da oferta */}
              <div>
                <p className="text-gray-500 text-sm uppercase mb-1">Investimento único</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">R$99,90</span>
                  <span className="text-gray-500 ml-2 line-through">R$199,90</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">ou 12x de R$9,99 no cartão</p>
              </div>

              {/* Bônus inclusos na oferta */}
              <div className="mt-6 md:mt-0">
                <div className="flex items-center mb-2">
                  <div className="bonus-tag mr-2">
                    <Gift className="h-3 w-3 mr-1" />
                    BÔNUS
                  </div>
                  <span className="text-sm">PDF Checklist de Marca</span>
                </div>
                <div className="flex items-center">
                  <div className="bonus-tag mr-2">
                    <Gift className="h-3 w-3 mr-1" />
                    BÔNUS
                  </div>
                  <span className="text-sm">45 min de consultoria por vídeo</span>
                </div>
              </div>
            </div>

            {/* Botão de ação para redirecionar ao pagamento */}
            <a
              href="https://pay.kiwify.com.br/Gpbm0z6"
              className="btn-primary block w-full text-center text-lg"
            >
              QUERO VIRAR ESSE JOGO
            </a>

            {/* Garantia de satisfação */}
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
