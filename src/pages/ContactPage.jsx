import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, AlertTriangle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    message: '',
    rgpd: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ prenom: '', nom: '', email: '', telephone: '', message: '', rgpd: false });
    }, 1500);
  };

  return (
    <div className="font-sans bg-[#FAFAFA] min-h-screen">
      
      {/* --- BARRE D'ALERTE URGENCE --- */}
      <div className="bg-[#FF5A00] text-white py-2.5 px-4 text-center text-sm font-bold flex items-center justify-center gap-2  z-40 relative">
        <AlertTriangle size={16} />
        <p>Urgence dépannage ? N'utilisez pas ce formulaire. Appelez directement le <a href="tel:0800123456" className="underline hover:text-gray-200">0800 123 456</a> (24h/24)</p>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="bg-[#0a0a0a] pt-16 pb-24 px-6 lg:px-8 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF5A00] opacity-10 blur-[100px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#FF5A00]/10 text-[#FF5A00] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-[#FF5A00]/20">
            UNE QUESTION ?
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Contactez-nous
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Pour toute demande de devis, information ou partenariat, notre équipe est à votre écoute.
          </p>
        </div>
      </section>

      {/* --- CONTENU PRINCIPAL (COORDONNÉES + FORMULAIRE) --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-12 pb-24 relative z-20">
        <div className="flex  gap-12 lg:gap-16">
          
          {/* COLONNE GAUCHE : COORDONNÉES */}
          <div className="bg-transparent pt-12">

            
            <div className="flex flex-col gap-10 mt-10">
             

              {/* Téléphone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FF5A00]/10 flex items-center justify-center text-[#FF5A00] flex-shrink-0 mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Téléphone</h3>
                  <p className="text-gray-500 text-sm mb-1">Standard : 06 52 59 18 20</p>
                  <p className="text-[#FF5A00] font-bold text-sm">Urgence 24/7 : 06 52 59 18 20</p>
                </div>
              </div>

             

              {/* Horaires */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FF5A00]/10 flex items-center justify-center text-[#FF5A00] flex-shrink-0 mt-1">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Horaires Bureau</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Lundi - Vendredi : 8h00 - 19h00<br />
                    Samedi : 9h00 - 12h00
                  </p>
                  <p className="text-[#FF5A00] text-xs font-bold mt-2">* Dépannage assuré 24h/24 7j/7</p>
                </div>
              </div>
            </div>

            
          </div>


        </div>
      </section>
    </div>
  );
};

export default ContactPage;