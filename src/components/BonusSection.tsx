
import React from 'react';
import { Gift } from 'lucide-react';

const BonusSection = () => {
  return (
    <section className="bg-brand-black text-white section">
      <div className="container-custom">
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Bônus Exclusivos</h2>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 relative overflow-hidden text-black">
          {/* Removido o grid background effect */}
          
          <div className="relative">
            <h3 className="text-2xl font-bold mb-6">Diagnóstico Express</h3>
            
            <ul className="space-y-4">
              <li className="flex">
                <div className="text-brand-gold mr-3">✓</div>
                <span>Análise rápida do negócio (mercado, concorrentes, público-alvo)</span>
              </li>
              <li className="flex">
                <div className="text-brand-gold mr-3">✓</div>
                <span>Pontos fortes e oportunidades de melhoria</span>
              </li>
              <li className="flex">
                <div className="text-brand-gold mr-3">✓</div>
                <span>Sugestão de um diferencial para comunicar ao mercado</span>
              </li>
              <li className="flex">
                <div className="text-brand-gold mr-3">✓</div>
                <span>Indicação dos melhores canais de comunicação</span>
              </li>
              <li className="flex">
                <div className="text-brand-gold mr-3">✓</div>
                <span>Mini-plano de ação com 3 passos práticos</span>
              </li>
            </ul>
            
            <div className="w-20 h-20 absolute top-0 right-0 bg-black rounded-full text-white flex items-center justify-center font-bold -rotate-12 shadow-xl">
              <div className="transform rotate-12">GRÁTIS</div>
            </div>
          </div>
        </div>
        
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
