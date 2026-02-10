import React from 'react';
import { Award, Globe, Users, Shield } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Globe,
      title: "Atuação Nacional",
      description: "Atendimento em todo o território brasileiro, 100% online"
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Cada cliente recebe atenção individualizada e humanizada"
    },
    {
      icon: Award,
      title: "Experiência Comprovada",
      description: "Centenas de processos conduzidos com sucesso"
    },
    {
      icon: Shield,
      title: "Você em Boas Mãos",
      description: "Compromisso genuíno de lutar pelo que é seu por direito"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://drlucasmecatti.com.br/assets/dr-lucas-mecatti-BNAPg7Eb.jpg"
                alt="Dr. Lucas Mecatti - Advogado Especialista em Direito Previdenciário"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-8">
                <h3 className="text-2xl font-bold text-white mb-1">Dr. Lucas Mecatti</h3>
                <p className="text-slate-300">Advogado | Especialista em Direito Previdenciário e Tributário</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-bold uppercase tracking-wide">
              Sobre
            </div>
            
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Sobre o Dr. Lucas Mecatti
            </h2>
            
            <h3 className="text-2xl font-semibold text-amber-600 mb-6">
              Mais de 20 anos dedicados à defesa dos seus direitos
            </h3>
            
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Com uma trajetória sólida de mais de duas décadas no exercício da advocacia, 
                construí minha carreira com base em três pilares fundamentais: <strong>conhecimento técnico</strong>, 
                <strong> comprometimento com resultados</strong> e <strong>atendimento humanizado</strong>.
              </p>
              
              <p>
                Ao longo desses anos, especializei-me profundamente em questões tributárias e previdenciárias, 
                conquistando <strong>três especializações</strong> que me capacitam a oferecer soluções jurídicas 
                precisas e eficazes para cada caso.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Icon size={20} className="text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
              <p className="text-lg italic text-slate-800">
                "Minha missão é transformar direitos previstos em lei em benefícios concretos para você e sua família."
              </p>
              <p className="mt-2 text-sm font-bold text-slate-900">— Dr. Lucas Mecatti</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
