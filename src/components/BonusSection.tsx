import React from 'react';
import { Gift } from 'lucide-react';

const BonusSection = () => {
  return (
    <section className="bg-brand-black text-white section">
      <div className="container-custom">
        {/* Título principal da seção */}
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Bônus Exclusivos</h2>
        </div>
        
        {/* Container do bônus, com um fundo branco e bordas arredondadas */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 relative overflow-hidden text-black">
          
          <div className="relative pt-8 md:pt-2">
            {/* Título do diagnóstico com um pequeno deslocamento no mobile */}
            <h3 className="text-2xl font-bold mb-6 pr-20">Diagnóstico Express</h3>
            
            {/* Lista de itens do bônus */}
            <ul className="space-y-4">
              {/* Cada item da lista tem o ícone e a descrição */}
              <li className="flex">
                <div className="text-brand-gold mr-3 flex-shrink-0">✓</div>
                <span>Análise rápida do negócio (mercado, concorrentes, público-alvo)</span>
              </li>
              <li className="flex">
                <div className="text-brand-gold mr-3 flex-shrink-0">✓</div>
                <span>Pontos fortes e oportunidades de melhoria</span>
              </li>
              <li className="flex">
                <div className="text-brand-gold mr-3 flex-shrink-0">✓</div>
                <span>Sugestão de um diferencial para comunicar ao mercado</span>
              </li>
              <li className="flex">
                <div className="text-brand-gold mr-3 flex-shrink-0">✓</div>
                <span>Indicação dos melhores canais de comunicação</span>
              </li>
              <li className="flex">
                <div className="text-brand-gold mr-3 flex-shrink-0">✓</div>
                <span>Mini-plano de ação com 3 passos práticos</span>
              </li>
            </ul>
            
            {/* Badge "GRÁTIS" posicionado no canto superior direito */}
            <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-black rounded-full text-white flex items-center justify-center font-bold text-sm md:text-lg transform -rotate-12 shadow-xl z-10">
              <div className="transform rotate-12">GRÁTIS</div>
            </div>
          </div>
        </div>
        
        {/* Botão para ação, centralizado abaixo da seção */}
        <div className="text-center mt-8">
          <a href="#cta" className="btn-primary inline-block">
            QUERO ESSES BÔNUS
          </a>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
