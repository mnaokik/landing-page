import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { faqs } from '../data/mock';

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-bold uppercase tracking-wide">
            Tire Suas Dúvidas
          </div>
          
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Perguntas Frequentes
          </h2>
          
          <p className="text-lg text-slate-700">
            Respostas claras sobre direito previdenciário
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id}
              className="bg-white rounded-lg border-2 border-slate-200 px-6 hover:border-amber-500 transition-colors duration-300"
            >
              <AccordionTrigger className="text-left text-lg font-bold text-slate-900 hover:text-amber-600 py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
