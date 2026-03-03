import React from 'react';
import { PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="relative py-24 bg-white font-sans overflow-hidden">
      
      {/* Arrière-plan subtil (Gradient radial pour centrer l'attention) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,90,0,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Icône avec effet de pulsation */}
        <div className="relative inline-flex justify-center items-center mb-8 group cursor-pointer">
          {/* Cercle d'animation (Pulse) */}
          <div className="absolute w-20 h-20 bg-[#FF5A00] rounded-full opacity-20 animate-ping" />
          {/* Cercle principal */}
          <div className="relative w-16 h-16 bg-[#FF5A00]/10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <PhoneCall size={28} className="text-[#FF5A00]" />
          </div>
        </div>

        {/* Textes */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Besoin d'un dépannage immédiat ?
        </h2>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Nos équipes sont prêtes à intervenir. Contactez-nous maintenant pour une prise en charge prioritaire.
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          
          {/* Bouton Primaire (Appel) */}
          <a href="tel:0652591820" className="w-full sm:w-auto">
            <button className="w-full bg-[#FF5A00] hover:bg-[#e04f00] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-[#FF5A00]/30 transform hover:-translate-y-1 flex items-center justify-center gap-2">
              Appeler le 0652591820
            </button>
          </a>

          
          <Link to="/" className="w-full sm:w-auto">
            <button className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 hover:border-gray-300 px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1 flex items-center justify-center">
              Estimer mon dépannage
            </button>
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default CallToAction;