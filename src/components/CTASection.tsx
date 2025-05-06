
import React from 'react';

const CTASection = () => {
  return (
    <section id="cta" className="bg-brand-blue text-white py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar seu negócio?
          </h2>
          
          <p className="text-lg md:text-xl mb-8">
            Dê o primeiro passo para criar uma marca que atrai e conquista clientes todos os dias.
          </p>
          
          <div className="bg-white text-brand-black p-8 rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200 pb-6 mb-6">
              <div>
                <p className="text-gray-500 text-sm uppercase mb-1">Investimento único</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">R$99,90</span>
                  <span className="text-gray-500 ml-2 line-through">R$199,90</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">ou 12x de R$9,99 no cartão</p>
              </div>
              
              <div className="mt-6 md:mt-0">
                <div className="inline-block bg-brand-gold text-xs font-bold px-3 py-1 rounded-full">
                  50% DE DESCONTO
                </div>
                <p className="text-sm mt-1">Oferta por tempo limitado</p>
              </div>
            </div>
            
            <a href="#" className="btn-primary block w-full text-center text-lg">
              QUERO COMEÇAR AGORA
            </a>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              Garantia de 7 dias ou seu dinheiro de volta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
