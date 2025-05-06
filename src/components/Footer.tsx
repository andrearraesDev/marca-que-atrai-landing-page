
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white py-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-heading font-bold">
              Marca<span className="text-brand-lime">dos</span>
            </p>
            <p className="text-sm text-gray-400">DE SÃO PAULO PARA O MUNDO</p>
          </div>
          
          <div className="text-gray-400 text-sm">
            <p>M ©{new Date().getFullYear()} - Todos os direitos reservados</p>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Após sair do Facebook, a responsabilidade não é deles e sim do nosso site.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">Termos de Uso</a>
            <a href="#" className="text-gray-400 hover:text-white">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
