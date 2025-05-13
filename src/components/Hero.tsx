import React from "react";
import { useIsMobile } from "../hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile(); // Verifica se é um dispositivo móvel

  return (
    <section className="relative bg-brand-black text-white">

      {/* Versão Desktop */}
      <div className="hidden md:block relative">
        <div className="relative flex justify-end items-end">
          
          {/* Imagem de fundo */}
          <img
            src="uploads/imagem02.png"
            alt="Marca que Atrai"
            className="w-full"
          />

          {/* Overlay com conteúdo centralizado */}
          <div className="absolute inset-0 flex items-center justify-end">
            <div
              className="w-full max-w-md mx-8 text-center text-black"
              style={{ fontFamily: 'Helvetica, Arial, sans-serif', maxWidth: '33%' }}
            >
              <h2
                className="mb-2"
                style={{
                  fontSize: 'clamp(18px, 2.2vw, 26.5px)',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  lineHeight: '1.2',
                }}
              >
                ATRAIA MAIS CLIENTES E<br />
                TRANSFORME SEU NEGÓCIO!
              </h2>

              <p
                className="mb-4"
                style={{
                  fontSize: 'clamp(14px, 1.8vw, 21px)',
                  lineHeight: '1.5',
                }}
              >
                Descubra como se tornar uma referência no<br />
                seu mercado com estratégias práticas<br />
                de posicionamento e branding.
              </p>

              {/* Botão de ação */}
              <div className="text-center">
                <a
                  href="#cta"
                  className="btn-primary inline-block"
                  style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                >
                  COMEÇAR AGORA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Versão Mobile - Com botão sobre a imagem */}
      <div className="md:hidden relative">
        <div className="relative">
          
          {/* Banner de imagem com botão sobreposto */}
          <img
            src="uploads/imagem01.png"
            alt="Marca que Atrai"
            className="w-full"
          />

          {/* Botão sobreposto na imagem */}
          <a
            href="#cta"
            className="btn-primary absolute text-center"
            style={{
              bottom: "15%", // Posicionado um pouco mais acima
              left: "27%", // Mantido conforme seu ajuste
              transform: "translateX(-50%)", // Centralização precisa
              width: "160px", // Largura fixa menor
              height: "36px", // Altura controlada
              padding: "6px 12px", // Padding equilibrado
              fontSize: "13px", // Tamanho de fonte legível
              fontFamily: 'Helvetica, Arial, sans-serif',
              borderRadius: "4px", // Borda arredondada
              lineHeight: "1.2", // Espaçamento de texto melhorado
              textDecoration: "none", // Remove sublinhado
              display: "flex", // Melhor controle interno
              alignItems: "center", // Centraliza texto verticalmente
              justifyContent: "center", // Centraliza texto horizontalmente
              boxSizing: "border-box" // Garante que padding não afete a largura
            }}
          >
            COMEÇAR AGORA
          </a>

        </div>

        {/* Conteúdo abaixo do banner */}
        <div
          className="bg-gray-100 text-black px-4 py-6 -mt-1"
          style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
        >
          <div className="text-center mb-1">
            <h2
              className="mb-3 font-bold uppercase"
              style={{
                fontSize: 'clamp(16px, 5vw, 24px)',
                lineHeight: '1.2',
              }}
            >
              ATRAIA MAIS CLIENTES E TRANSFORME SEU NEGÓCIO!
            </h2>

            <p
              className="mb-1"
              style={{
                fontSize: 'clamp(12px, 4vw, 18px)',
                lineHeight: '1.4',
              }}
            >
              Descubra como se tornar uma referência no
              seu mercado com estratégias práticas
              de posicionamento e branding.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;