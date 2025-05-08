import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection';
import OfferCard from '../components/OfferCard';
import ContentBlocks from '../components/ContentBlocks';
import BonusSection from '../components/BonusSection';
import ComparisonTable from '../components/ComparisonTable';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <VideoSection />
        
        <section id="o-que-e" className="bg-white section">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              O que é a Consultoria Express<br/>
              MARCA QUE ATRAI?
            </h2>
            
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-6">
                A Consultoria MARCA QUE ATRAI é um serviço de diagnóstico estratégico e orientação prática voltado para pequenos negócios e marcas pessoais de beleza, moda, bem estar e saúde que querem conquistar mais clientes e aumentar suas vendas, tornando-se referência na memória e na experiência do público local.
              </p>
              
              <p className="text-lg mb-6">
                É uma consultoria express: rápida, acessível e personalizada, que identifica os pontos fortes do seu negócio, revela oportunidades de diferenciação e entrega um mini-plano de ação para você atrair clientes, fortalecer sua presença e criar uma marca que realmente fica na cabeça (e no coração!) das pessoas.
              </p>
            </div>
          </div>
        </section>
        
        <OfferCard />
        
        <section id="como-funciona" className="bg-white section">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">O que você vai ganhar?</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-brand-black text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-3">Diagnóstico Express</h3>
                  <p className="text-gray-700">Análise do seu negócio, concorrência e público.</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-brand-black text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-3">Estratégia Básica</h3>
                  <p className="text-gray-700">Recomendações claras para posicionar sua marca e se diferenciar.</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-brand-black text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-3">Mini-plano de ação</h3>
                  <p className="text-gray-700">Passos práticos para aplicar imediatamente e ver resultados rápidos.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <BonusSection />
        <ContentBlocks />
        <ComparisonTable />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
