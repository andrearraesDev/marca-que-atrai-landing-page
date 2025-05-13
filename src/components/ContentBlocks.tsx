import React from 'react';

const ContentBlocks = () => {
  // Definindo os blocos de conteúdo com número, título e descrição
  const blocks = [
    {
      number: "01",
      title: "Posicionamento",
      description: "Descubra como diferenciar sua marca da concorrência e ocupar um lugar único na mente e no coração dos seus clientes."
    },
    {
      number: "02",
      title: "Diferencial Local",
      description: "Aprenda a identificar e comunicar o seu maior diferencial para se destacar no mercado de beleza, moda, bem-estar e saúde da sua região."
    },
    {
      number: "03",
      title: "Atração de Clientes",
      description: "Desenvolva estratégias práticas para atrair mais clientes ideais e transformar sua marca em referência de vendas no seu bairro ou cidade."
    }
  ];

  return (
    <section className="bg-white section">
      <div className="container-custom">
        {/* Título principal da seção */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">O que você vai aprender?</h2>
        
        {/* Grid para os blocos de conteúdo, 3 colunas no md e gap entre eles */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mapeando cada bloco de conteúdo */}
          {blocks.map((block, index) => (
            <div key={index} className="bg-brand-gray p-8 rounded-lg flex flex-col items-center md:items-start text-center md:text-left">
              
              {/* Número do bloco dentro de um círculo */}
              <div className="w-12 h-12 bg-brand-black text-white rounded-full flex items-center justify-center font-bold mb-4">
                {block.number}
              </div>
              
              {/* Título do bloco */}
              <h3 className="text-xl font-bold mb-3">{block.title}</h3>
              
              {/* Descrição do bloco */}
              <p className="text-gray-700">{block.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentBlocks;
