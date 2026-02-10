import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { contactInfo, stats } from '../data/mock';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-slate-800/50 border border-amber-500/30 rounded-full text-sm font-medium text-amber-500">
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
            <span>Advocacia Especializada em Direito Previdenciário</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Seus Direitos <span className="text-amber-500">Previdenciários</span> Merecem Ser Defendidos com Excelência
          </h1>
          
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Aposentadorias, revisões de benefícios, auxílios, pensões e isenção de Imposto de Renda. 
            Mais de 20 anos de experiência transformando direitos em conquistas reais para você e sua família.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a 
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-amber-500/50"
            >
              Solicite sua Análise Gratuita
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            
            <a 
              href={`tel:+${contactInfo.whatsapp}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white/10 transition-all duration-300"
            >
              <Phone size={20} className="mr-2" />
              {contactInfo.phone}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-amber-500 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
