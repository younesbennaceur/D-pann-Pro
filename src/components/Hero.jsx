import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, ChevronDown, Phone, Info, ArrowRight, Truck } from 'lucide-react';
import EstimationForm
 from './Estimation';
const HeroSection = () => {
 

  // Animation d'apparition au montage
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  

  return (
    <div className="relative min-h-screen font-sans bg-gray-50 flex flex-col">
      {/* BACKGROUND IMAGE & OVERLAY */}
      <div className="absolute inset-0 z-0 h-[85vh]">
        {/* Remplacez l'URL par votre propre image de fond de dépanneuse */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('./hero.jpg')" }}
        />
        {/* Gradient Overlay pour la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/90 to-black/40" />
        {/* Gradient pour fondre le bas avec la page */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-50 to-transparent" />
      </div>

     

      {/* HERO CONTENT */}
       {/* HERO CONTENT */}
      <div className="relative z-10 flex-grow flex flex-col pt-22 px-6 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          
          {/* Badge animé */}
          <div className={`inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-8 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5A00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5A00]"></span>
            </span>
            <span className="text-gray-200 text-xs font-bold tracking-widest uppercase">
              Disponible maintenant • Intervention &lt; 30 min
            </span>
          </div>

          {/* Headlines avec Gradient Orange */}
          <h1 className={`w-full text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15] mb-6 tracking-tight transition-all duration-1000 delay-150 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Dépannage rapide, <br />
            {/* C'est ici que se trouve le gradient text */}
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#FF5A00] via-[#FF8C42] to-[#FF5A00] animate-gradient-x">
              partout et à toute heure.
            </span> 
            
          </h1>
          
          <p className={`text-gray-400 text-lg md:text-xl  mb-10 leading-relaxed transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Ne restez pas bloqué sur le bord de la route. Nos experts interviennent en moins de 30 minutes pour vous remettre en mouvement, 24h/24 et 7j/7.
          </p>

          {/* CTA Buttons avec interactions enrichies */}
          <div className={`flex flex-col sm:flex-row gap-5 transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="group relative bg-[#FF5A00] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 overflow-hidden shadow-[0_0_20px_rgba(255,90,0,0.3)] hover:shadow-[0_0_30px_rgba(255,90,0,0.5)] transform hover:-translate-y-1 flex items-center justify-center gap-3">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <Phone size={20} className="animate-bounce-slight" />
              <span>Appeler d'urgence</span>
            </button>
            
            <button className="group bg-white/10 hover:bg-white text-white hover:text-gray-900 border border-white/20 hover:border-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 backdrop-blur-sm">
              <span>Voir nos tarifs</span>
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* CONTENEUR DU FORMULAIRE */}
        <div className={`mt-16  relative z-20 transition-all duration-1000 delay-700 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <EstimationForm />
        </div>
      </div>

     
    </div>
  );
};

export default HeroSection;