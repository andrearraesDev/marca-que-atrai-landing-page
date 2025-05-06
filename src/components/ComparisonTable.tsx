
import React from 'react';

const ComparisonTable = () => {
  const comparisons = [
    {
      without: "Confusão sobre quem é seu público-alvo",
      with: "Clareza total sobre seu cliente ideal e suas necessidades"
    },
    {
      without: "Dificuldade em explicar o valor do seu trabalho",
      with: "Comunicação clara e persuasiva do seu diferencial"
    },
    {
      without: "Concorre por preço com outros negócios",
      with: "É escolhido pelo valor e resultado que entrega"
    },
    {
      without: "Atende qualquer cliente que aparece",
      with: "Seleciona os clientes ideais para o seu negócio"
    },
    {
      without: "Depende de indicações para conseguir clientes",
      with: "Sistema de atração de clientes consistente e escalável"
    }
  ];

  return (
    <section className="bg-brand-gray section">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Antes e Depois</h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-2">
            <div className="bg-brand-black text-white p-4 font-bold text-center">
              NEGÓCIO SEM POSICIONAMENTO
            </div>
            <div className="bg-brand-blue text-white p-4 font-bold text-center">
              NEGÓCIO COM POSICIONAMENTO
            </div>
          </div>
          
          <div className="divide-y divide-gray-200">
            {comparisons.map((item, index) => (
              <div key={index} className="grid grid-cols-2">
                <div className="p-4 border-r border-gray-200">
                  <p className="text-gray-700">{item.without}</p>
                </div>
                <div className="p-4 bg-gray-50">
                  <p className="font-medium">{item.with}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
