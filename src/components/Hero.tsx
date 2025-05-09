
import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-brand-black text-white">
      <div className="hero-gradient absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/1569ad4a-e1af-4f63-ba7d-e242413cfc6d.png')] bg-cover bg-center opacity-100"></div>
      </div>
      
      <div className="container-custom relative z-10 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="flex justify-end">
          <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
            <a href="#cta" className="btn-primary w-full md:w-auto">
              COMEÇAR AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
