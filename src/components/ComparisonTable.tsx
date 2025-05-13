import React from 'react';

const ComparisonTable = () => {
  // Dados de comparação entre "Antes" e "Depois"
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
        {/* Título da seção */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Antes e Depois</h2>
        
        {/* Container para a tabela de comparação */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          
          {/* Cabeçalhos das colunas: "Negócio Antes" e "Negócio Depois" */}
          <div className="grid grid-cols-2">
            <div className="bg-brand-black text-white p-4 font-bold text-center">NEGÓCIO ANTES</div>
            <div className="bg-brand-blue text-white p-4 font-bold text-center">NEGÓCIO DEPOIS</div>
          </div>
          
          {/* Separador de linhas e mapeamento dos itens de comparação */}
          <div className="divide-y divide-gray-200">
            {comparisons.map((item, index) => (
              <div key={index} className="grid grid-cols-2">
                
                {/* Coluna do "Antes" */}
                <div className="p-4 border-r border-gray-200">
                  <p className="text-gray-700">{item.without}</p>
                </div>
                
                {/* Coluna do "Depois" */}
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