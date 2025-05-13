import React, { useState } from 'react'; 
import { Plus, Minus } from 'lucide-react';

const FAQ = () => { 
  // Estado para controlar o índice da FAQ aberta (null significa nenhuma FAQ aberta)
  const [openIndex, setOpenIndex] = useState<number | null>(0); 

  // Array de perguntas e respostas frequentes (FAQ)
  const faqs = [ 
    { 
      question: "O que é a Consultoria Marca Que Atrai?", 
      answer: "É uma consultoria express: rápida, acessível e personalizada, que identifica os pontos fortes do seu negócio, revela oportunidades de diferenciação e entrega um mini-plano de ação para você atrair clientes, fortalecer sua presença e criar uma marca que realmente fica na cabeça (e no coração!) das pessoas." 
    }, 
    { 
      question: "Como funciona o processo?", 
      answer: (
        <div>
          O processo tem três etapas: 
          <ol className="list-decimal pl-5">
            <li>Diagnóstico Express: análise do seu negócio, concorrência e público;</li>
            <li>Estratégia Básica: recomendações claras para posicionar sua marca;</li>
            <li>Mini-plano de ação: passos práticos para aplicar imediatamente e ver resultados rápidos.</li>
          </ol>
        </div>
      ) 
    }, 
    { 
      question: "Quanto tempo leva para receber o diagnóstico?", 
      answer: "O diagnóstico personalizado é entregue em até 3 dias úteis após a contratação. Se você optar pela consultoria por vídeo, ela será agendada de acordo com a disponibilidade mútua, normalmente dentro de uma semana." 
    }, 
    { 
      question: "Quais tipos de negócios podem se beneficiar?", 
      answer: "A consultoria é voltada principalmente para pequenos negócios de beleza, moda, bem estar e saúde que querem se destacar localmente e atrair mais clientes." 
    }, 
    { 
      question: "Como é feita a entrega do conteúdo?", 
      answer: "A entrega é feita através de um PDF personalizado enviado por e-mail ou, se preferir, uma consultoria de até 45 minutos por chamada de vídeo (com envio do resumo por e-mail posteriormente)." 
    } 
  ]; 

  // Função para alternar o estado da FAQ aberta (abre ou fecha a FAQ)
  const toggleFaq = (index: number) => { 
    setOpenIndex(openIndex === index ? null : index); // Se a FAQ clicada já estiver aberta, fecha, caso contrário, abre
  };

  return ( 
    <section id="faq" className="bg-brand-black text-white section"> 
      <div className="container-custom"> 
        {/* Título da seção de perguntas frequentes */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Perguntas Frequentes</h2> 

        {/* Container que segura a lista de FAQs */}
        <div className="max-w-3xl mx-auto"> 

          {/* Mapeia e exibe cada FAQ */}
          {faqs.map((faq, index) => ( 
            <div key={index} className="border-b border-gray-700 last:border-0"> 

              {/* Botão que alterna o estado da FAQ (aberta ou fechada) */}
              <button 
                className="w-full flex justify-between items-center py-6 text-left" 
                onClick={() => toggleFaq(index)} 
              > 
                {/* Exibe a pergunta */}
                <h3 className="text-lg md:text-xl font-medium">{faq.question}</h3> 

                {/* Exibe o ícone de "+" ou "-" conforme o estado da FAQ */}
                {openIndex === index ? ( 
                  <Minus className="flex-shrink-0 ml-4" size={20} /> 
                ) : ( 
                  <Plus className="flex-shrink-0 ml-4" size={20} /> 
                )} 
              </button> 

              {/* Exibe a resposta da FAQ apenas se estiver aberta */}
              {openIndex === index && ( 
                <div className="pb-6 text-gray-300"> 
                  <p>{faq.answer}</p> 
                </div> 
              )} 
            </div> 
          ))} 
        </div> 
      </div> 
    </section> 
  ); 
}; 

export default FAQ;
