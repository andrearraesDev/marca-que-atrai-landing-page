import React from 'react';

// Componente de Seção de Vídeo
// Exibe um vídeo incorporado de Vimeo com um fundo customizado e responsivo.

const VideoSection = () => {
  return (
    <section className="bg-brand-black py-5">
      <div className="container-custom">
        {/* Contêiner do vídeo */}
        <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden bg-brand-black">
          {/* Incorporação do vídeo do Vimeo */}
          <iframe
            src="https://player.vimeo.com/video/238573128?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
            title="NATURE" // Descrição do vídeo, importante para acessibilidade
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;