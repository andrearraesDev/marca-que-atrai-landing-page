import React from 'react';

const CTASection = () => {
  return (
    <section id="cta" className="bg-brand-black text-white py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Título principal da seção CTA */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
          
          {/* Descrição do que o usuário pode alcançar */}
          <p className="text-lg md:text-xl mb-8">
            Dê o primeiro passo para criar uma marca que atrai<br /> e conquista clientes todos os dias.
          </p>
          
          {/* Container para o bloco de investimento */}
          <div className="bg-white text-brand-black p-8 rounded-lg">
            
            {/* Informações sobre o investimento */}
            <div className="flex flex-col items-center justify-center border-b border-gray-200 pb-6 mb-6">
              <div className="text-center mb-4">
                
                {/* Texto explicativo sobre o valor */}
                <p className="text-gray-500 text-sm uppercase mb-1">Investimento único</p>
                
                {/* Exibindo o preço com desconto e o preço original */}
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">R$99,90</span>
                  <span className="text-gray-500 ml-2 line-through">R$199,90</span>
                </div>
                
                {/* Forma de pagamento */}
                <p className="text-sm text-gray-600 mt-1">ou 12x de R$9,99 no cartão</p>
              </div>
              
              {/* Informações sobre o desconto e a oferta limitada */}
              <div className="mt-4 text-center">
                <div className="inline-block bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-full">
                  50% DE DESCONTO
                </div>
                <p className="text-sm mt-1">Oferta por tempo limitado</p>
              </div>
            </div>
            
            {/* Botão de chamada para ação */}
            <a href="https://pay.kiwify.com.br/Gpbm0z6" className="btn-primary block w-full text-center text-lg">
              QUERO COMEÇAR AGORA
            </a>
            
            {/* Garantia de satisfação */}
            <p className="text-xs text-center text-gray-500 mt-4">Garantia de 7 dias ou seu dinheiro de volta</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
