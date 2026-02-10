import React from 'react';
import { Clock, Briefcase, Shield, Users, Sprout, GraduationCap, FileCheck, HeartPulse, HandHeart, Heart, DollarSign, FileText } from 'lucide-react';
import { services } from '../data/mock';

const Services = () => {
  const icons = [Clock, Briefcase, Shield, Users, Sprout, GraduationCap, FileCheck, HeartPulse, HandHeart, Heart, DollarSign, FileText];

  return (
    <section id="servicos" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-amber-500/20 text-amber-500 rounded-full text-sm font-bold uppercase tracking-wide">
            Áreas de Atuação
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-4">
            Serviços em Direito Previdenciário
          </h2>
          
          <p className="text-lg text-slate-400">
            Assessoria jurídica completa para proteger seus direitos junto ao INSS e regimes próprios de previdência
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={service.id}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-amber-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <Icon size={24} className="text-amber-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
