import React from 'react';

// Importação dos componentes principais para a página inicial
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
      {/* Navbar: Barra de navegação no topo */}
      <Navbar />
      
      {/* Corpo principal da página */}
      <main className="flex-grow">
        {/* Seção inicial - Hero */}
        <Hero />
        
        {/* Seção de vídeo explicativo */}
        <VideoSection />
        
      {/* Seção "Quem é Thayná Ramos" */}
<section id="quem-e-thayna" className="bg-black text-white section">
  <div className="container-custom flex flex-col md:flex-row items-center gap-8">
    {/* Imagem da Thayná */}
   <div className="md:w-1/2 flex justify-center"> {/* Centraliza a imagem */}
  <div className="rounded-lg overflow-hidden w-full max-w-md"> {/* Limita largura máxima */}
    <img 
      src="https://raw.githubusercontent.com/andrearraesDev/marca-que-atrai-landing-page/refs/heads/main/public/uploads/profile.jpg" 
      alt="Thayná Ramos - Estrategista e diretora criativa" 
      className="w-full h-auto"
    />
  </div>
</div>
    
    {/* Texto sobre a Thayná */}
    <div className="md:w-1/2">
      <div className="inline-block px-4 py-1 rounded-full border border-yellow-500 text-yellow-500 font-medium mb-4">
        @THAYNACRAMOS
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Oi, eu sou a Thayná
      </h2>
      
      <div className="space-y-4 text-gray-300">
        <p>
          Sou Thayná Ramos, estrategista e diretora criativa especializada em design e gestão de marcas.
        </p>
        
        <p>
          Graduada em Design Gráfico pela Belas Artes e pós-graduada em Gestão de Imagem e Branding pela Anhembi Morumbi, atuo há mais de 6 anos como especialista em direção criativa, design de embalagens, branding e implantação de reposicionamento de marcas, com formação complementar pela ESPM.
        </p>
        
        <p>
          Ao longo da minha trajetória, desenvolvi projetos para marcas de destaque no segmento de beleza, como Cadiveu Professional, Boca Rosa Hair, K.Pro e Richée Professional, contribuindo para o fortalecimento e reposicionamento dessas marcas no mercado.
        </p>
        
        <p>
          Atualmente, atuo como estrategista e diretora criativa para pequenos negócios, empreendedores, marcas pessoais e grandes empresas, com foco especial nos setores de beauty, health, moda e wellness. Minha missão é unir estratégia e criatividade para impulsionar marcas, gerando valor e resultados consistentes.
        </p>
      </div>
    </div>
  </div>
</section>
        
        {/* Cartão de oferta */}
        {/* <OfferCard /> */}
        
        {/* Seção "O que você vai ganhar?" */}
        <section id="como-funciona" className="bg-white section">
          <div className="container-custom">
            {/* Título da seção */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">O que você vai ganhar?</h2>
            
            <div className="max-w-4xl mx-auto">
              {/* Grid com as três principais ofertas */}
              <div className="grid md:grid-cols-3 gap-8 text-center">
                
                {/* Primeiro benefício */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-brand-black text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-3">Diagnóstico Express</h3>
                  <p className="text-gray-700">Análise do seu negócio, concorrência e público.</p>
                </div>
                
                {/* Segundo benefício */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-brand-black text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-3">Estratégia Básica</h3>
                  <p className="text-gray-700">Recomendações claras para posicionar sua marca e se diferenciar.</p>
                </div>
                
                {/* Terceiro benefício */}
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
        
        {/* Outras seções do site */}
        <BonusSection />
        <ContentBlocks />
        <ComparisonTable />
        <Testimonials />
        <FAQ />
        {/* <CTASection /> */}
        <OfferCard />
      </main>
      
      {/* Rodapé da página */}
      <Footer />
    </div>
  );
};

export default Index;
