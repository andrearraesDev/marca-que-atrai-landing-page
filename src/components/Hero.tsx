import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-brand-black text-white min-h-[80vh] md:min-h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/1569ad4a-e1af-4f63-ba7d-e242413cfc6d.png"
          alt="Consultoria Express"
          className="w-full h-full object-cover object-[30%_top]"
          loading="eager"
        />
      </div>

      <div className="absolute top-[60%] md:top-[66%] right-[8%] z-10 p-4">
        <a
          href="#cta"
          className="btn-primary px-8 py-3 md:px-12 md:py-4 text-base md:text-xl shadow-lg transform hover:scale-105 transition-transform"
        >
          COMEÇAR AGORA
        </a>
      </div>
    </section>
  );
};

export default Hero;
