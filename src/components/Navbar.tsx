
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-brand-black text-brand-white z-50">
      <div className="container-custom flex justify-between items-center h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-xl md:text-2xl font-heading font-extrabold">
            Marca<span className="text-brand-lime">dos</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#o-que-e" className="text-sm font-medium uppercase hover:text-brand-lime transition-colors">PNAC</a>
          <a href="#como-funciona" className="text-sm font-medium uppercase hover:text-brand-lime transition-colors">O que tem dentro</a>
          <a href="#depoimentos" className="text-sm font-medium uppercase hover:text-brand-lime transition-colors">Depoimentos</a>
          <a href="#faq" className="text-sm font-medium uppercase hover:text-brand-lime transition-colors">FAQ</a>
          <a href="#cta" className="btn-primary text-sm">COMEÇAR AGORA</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-brand-black py-4 px-4 absolute top-16 left-0 right-0 flex flex-col space-y-4 border-t border-gray-800">
          <a 
            href="#o-que-e" 
            className="text-sm font-medium uppercase py-2 hover:text-brand-lime"
            onClick={() => setIsMenuOpen(false)}
          >
            PNAC
          </a>
          <a 
            href="#como-funciona" 
            className="text-sm font-medium uppercase py-2 hover:text-brand-lime"
            onClick={() => setIsMenuOpen(false)}
          >
            O que tem dentro
          </a>
          <a 
            href="#depoimentos" 
            className="text-sm font-medium uppercase py-2 hover:text-brand-lime"
            onClick={() => setIsMenuOpen(false)}
          >
            Depoimentos
          </a>
          <a 
            href="#faq" 
            className="text-sm font-medium uppercase py-2 hover:text-brand-lime"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </a>
          <a 
            href="#cta" 
            className="btn-primary text-sm w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            COMEÇAR AGORA
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
