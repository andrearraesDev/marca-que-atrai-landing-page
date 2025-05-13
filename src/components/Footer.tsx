import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Importando o Font Awesome para ícones

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white py-10">
      <div className="container-custom">
        
        {/* Container para o conteúdo do footer */}
        <div className="flex flex-col md:flex-row items-center justify-center text-center">
          
          {/* Informações de copyright e redes sociais */}
          <div className="text-gray-400 text-sm flex items-center gap-2">
            {/* Link para o Instagram */}
            <a
              href="https://www.instagram.com/thaynacramos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-pink-500 transition-colors"
            >
              <i className="fa fa-instagram"></i> {/* Ícone do Instagram */}
              <span> THAYNÁ RAMOS</span>
            </a>
            
            {/* Texto de copyright */}
            <span>©{new Date().getFullYear()} - Todos os direitos reservados</span>
          </div>
        </div>
        
        {/* Aviso de não afiliação */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>Este site não é afiliado à Meta Platforms, Inc. ou a qualquer uma de suas entidades.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;