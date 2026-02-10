import React from 'react';
import { process } from '../data/mock';

const Process = () => {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-bold uppercase tracking-wide">
            Como Funciona
          </div>
          
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Um Caminho Claro Para Seus Direitos
          </h2>
          
          <p className="text-lg text-slate-700">
            Processo transparente e eficiente, do início ao resultado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 text-white rounded-full text-2xl font-bold mb-6 shadow-lg">
                {step.number}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {step.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
