import React from 'react';
import { Brain, Heart, Globe, Zap, Eye, MessageCircle } from 'lucide-react';
import { differentials } from '../data/mock';

const Differentials = () => {
  const icons = [Brain, Heart, Globe, Zap, Eye, MessageCircle];

  return (
    <section id="diferenciais" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-amber-500/20 text-amber-500 rounded-full text-sm font-bold uppercase tracking-wide">
            Por Que Nos Escolher
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-4">
            Diferenciais Que Fazem a Diferença
          </h2>
          
          <p className="text-lg text-slate-400">
            Compromisso genuíno com seus direitos e sua tranquilidade
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-amber-500 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={28} className="text-amber-500" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
