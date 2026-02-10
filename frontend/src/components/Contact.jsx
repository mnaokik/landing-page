import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { contactInfo } from '../data/mock';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      const response = await axios.post(`${API}/contact/`, formData);
      
      if (response.status === 201) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage(error.response?.data?.detail || 'Erro ao enviar mensagem. Tente novamente.');
      
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-amber-500/20 text-amber-500 rounded-full text-sm font-bold uppercase tracking-wide">
            Fale Conosco
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-4">
            Solicite Sua Análise Gratuita Agora
          </h2>
          
          <p className="text-lg text-slate-400">
            Não deixe seus direitos para depois. Entre em contato e descubra como podemos ajudar você a conquistar o benefício que merece.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center">
                    <Phone size={24} className="text-amber-500" />
                  </div>
                  <div>
                    <div className="font-bold text-white mb-1">Telefone/WhatsApp</div>
                    <a href={`tel:+${contactInfo.whatsapp}`} className="text-slate-300 hover:text-amber-500 transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center">
                    <Mail size={24} className="text-amber-500" />
                  </div>
                  <div>
                    <div className="font-bold text-white mb-1">E-mail</div>
                    <a href={`mailto:${contactInfo.email}`} className="text-slate-300 hover:text-amber-500 transition-colors break-all">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center">
                    <MapPin size={24} className="text-amber-500" />
                  </div>
                  <div>
                    <div className="font-bold text-white mb-1">Atendimento</div>
                    <p className="text-slate-300">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-amber-500/10 rounded-lg border border-amber-500/30">
                <h4 className="font-bold text-white mb-3 text-lg">Análise Gratuita</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Sem compromisso e sem custo inicial</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Avaliação completa do seu caso previdenciário</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Identificação de todos os direitos disponíveis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Resposta em até 24 horas</span>
                  </li>
                </ul>
              </div>

              <a 
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-all duration-300 shadow-lg"
              >
                Falar no WhatsApp
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>

    

export default Contact;
