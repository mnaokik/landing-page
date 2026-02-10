import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900 shadow-lg' : 'bg-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              Dr. Lucas Mecatti
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('sobre')} className="text-slate-300 hover:text-amber-500 transition-colors font-medium">
              Sobre
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-slate-300 hover:text-amber-500 transition-colors font-medium">
              Serviços
            </button>
            <button onClick={() => scrollToSection('como-funciona')} className="text-slate-300 hover:text-amber-500 transition-colors font-medium">
              Como Funciona
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-slate-300 hover:text-amber-500 transition-colors font-medium">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-slate-300 hover:text-amber-500 transition-colors font-medium">
              Contato
            </button>
          </nav>

          {/* WhatsApp Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <a 
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-colors"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-amber-500 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <nav className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('sobre')} className="text-slate-300 hover:text-amber-500 transition-colors font-medium text-left py-2">
                Sobre
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-slate-300 hover:text-amber-500 transition-colors font-medium text-left py-2">
                Serviços
              </button>
              <button onClick={() => scrollToSection('como-funciona')} className="text-slate-300 hover:text-amber-500 transition-colors font-medium text-left py-2">
                Como Funciona
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-slate-300 hover:text-amber-500 transition-colors font-medium text-left py-2">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-slate-300 hover:text-amber-500 transition-colors font-medium text-left py-2">
                Contato
              </button>
              <a 
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-colors"
              >
                WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
