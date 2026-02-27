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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* COLONNE GAUCHE : COORDONNÉES */}
          <div className="bg-transparent pt-12">

            
            <div className="space-y-8 mt-8 mb-12">
              {/* Adresse */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FF5A00]/10 flex items-center justify-center text-[#FF5A00] flex-shrink-0 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Siège Social</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">123 Avenue de la République<br />75011 Paris, France</p>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FF5A00]/10 flex items-center justify-center text-[#FF5A00] flex-shrink-0 mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Téléphone</h3>
                  <p className="text-gray-500 text-sm mb-1">Standard : 01 23 45 67 89</p>
                  <p className="text-[#FF5A00] font-bold text-sm">Urgence 24/7 : 0800 123 456</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FF5A00]/10 flex items-center justify-center text-[#FF5A00] flex-shrink-0 mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:contact@depannpro.fr" className="text-gray-500 text-sm hover:text-[#FF5A00] transition-colors">contact@depannpro.fr</a>
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

            {/* Espace Carte (Google Maps iframe) */}
            <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-inner border border-gray-100">
              {/* Remplacez le src par votre propre lien d'intégration Google Maps */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647875454655!5m2!1sfr!2sfr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>

          {/* COLONNE DROITE : FORMULAIRE */}
          <div className="bg-white rounded-[32px] shadow-xl border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Envoyez-nous un message</h2>
            <p className="text-gray-500 text-sm mb-8">Nous vous répondrons sous 24h ouvrées.</p>

            {isSent ? (
              <div className="bg-green-50 text-green-700 p-6 rounded-2xl text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Message envoyé !</h3>
                <p className="text-sm">Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.</p>
                <button 
                  onClick={() => setIsSent(false)}
                  className="mt-6 text-[#FF5A00] font-bold text-sm hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Prénom */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Prénom</label>
                    <input 
                      type="text" 
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      required
                      placeholder="Jean" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF5A00]/50 focus:border-[#FF5A00] transition-all"
                    />
                  </div>

                  {/* Nom */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Nom</label>
                    <input 
                      type="text" 
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      placeholder="Dupont" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF5A00]/50 focus:border-[#FF5A00] transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jean.dupont@exemple.com" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF5A00]/50 focus:border-[#FF5A00] transition-all"
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Téléphone</label>
                  <input 
                    type="tel" 
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="06 12 34 56 78" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF5A00]/50 focus:border-[#FF5A00] transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Comment pouvons-nous vous aider ?" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF5A00]/50 focus:border-[#FF5A00] transition-all resize-none"
                  ></textarea>
                </div>

                {/* RGPD Checkbox */}
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="rgpd"
                    name="rgpd"
                    checked={formData.rgpd}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 text-[#FF5A00] bg-gray-50 border-gray-300 rounded focus:ring-[#FF5A00]"
                  />
                  <label htmlFor="rgpd" className="text-xs text-gray-500 leading-relaxed">
                    J'accepte que mes données soient traitées pour répondre à ma demande.
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FF5A00] hover:bg-[#e04f00] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-[#FF5A00]/20 transform hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Envoyer ma demande</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;