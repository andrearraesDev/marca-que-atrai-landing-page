
import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-16 md:pt-20 bg-brand-black text-white">
      <div className="hero-gradient absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493397212122-2b85dda8106b')] bg-cover bg-center opacity-20"></div>
      </div>
      
      <div className="container-custom relative z-10 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="tag mb-6 md:mb-8 mx-auto md:mx-0 w-fit">CURSO</div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-4xl mx-auto md:mx-0 text-center md:text-left">
          Atraia Mais Clientes e Transforme Seu Negócio
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          Descubra como se tornar uma referência no seu mercado com estratégias práticas de posicionamento e branding.
        </p>
        
        <div className="flex flex-col md:flex-row items-center gap-4 mt-8 max-w-lg mx-auto md:mx-0">
          <a href="#cta" className="btn-primary w-full md:w-auto">
            COMEÇAR AGORA
          </a>
          <a href="#o-que-e" className="text-white underline underline-offset-4 hover:text-brand-lime transition-colors">
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
