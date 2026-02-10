import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Lucas Mecatti</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Advocacia especializada em Direito Previdenciário com mais de 20 anos de experiência 
              defendendo seus direitos.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('sobre')} className="text-slate-400 hover:text-white transition-colors">
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicos')} className="text-slate-400 hover:text-white transition-colors">
                  Serviços
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('diferenciais')} className="text-slate-400 hover:text-white transition-colors">
                  Diferenciais
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="text-slate-400 hover:text-white transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contato')} className="text-slate-400 hover:text-white transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Principais Serviços</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Aposentadorias</li>
              <li>Revisão de Benefícios</li>
              <li>Auxílio-Doença</li>
              <li>BPC/LOAS</li>
              <li>Pensão por Morte</li>
              <li>Isenção de IR</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <a href={`tel:+${contactInfo.whatsapp}`} className="text-slate-400 hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${contactInfo.email}`} className="text-slate-400 hover:text-white transition-colors break-all">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  {contactInfo.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400 text-center md:text-left">
              © {currentYear} Dr. Lucas Mecatti - Todos os direitos reservados
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
