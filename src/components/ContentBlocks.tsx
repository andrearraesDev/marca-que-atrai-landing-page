
import React from 'react';

const ContentBlocks = () => {
  const blocks = [
    {
      number: "01",
      title: "Posicionamento",
      description: "Descubra como se diferenciar da concorrência e ocupar um lugar único na mente dos seus clientes."
    },
    {
      number: "02",
      title: "Nicho",
      description: "Identifique e conquiste o público certo para o seu negócio, maximizando seus resultados."
    },
    {
      number: "03",
      title: "Atração",
      description: "Desenvolva estratégias poderosas para atrair clientes ideais de forma contínua e escalonável."
    }
  ];

  return (
    <section className="bg-white section">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">O que você vai aprender</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blocks.map((block, index) => (
            <div key={index} className="bg-brand-gray p-8 rounded-lg flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-12 h-12 bg-brand-black text-white rounded-full flex items-center justify-center font-bold mb-4">
                {block.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{block.title}</h3>
              <p className="text-gray-700">{block.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="flex space-x-4">
            <div className="tag">POSICIONAMENTO</div>
            <div className="tag">NICHO</div>
            <div className="tag">ATRAÇÃO</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentBlocks;
