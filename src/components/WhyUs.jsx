import React, { useState, useEffect } from 'react';
import { Clock, ShieldCheck, Euro, Star, ChevronLeft, ChevronRight, User, Settings, Wrench } from 'lucide-react';

// Tableau des images pour le slider
const sliderImages = [
  "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=1000&auto=format&fit=crop", // Mécanicien souriant
  "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=1000&auto=format&fit=crop", // Poignée de main / Confiance
  "https://images.unsplash.com/photo-1605649487212-4d4ce3e30f10?q=80&w=1000&auto=format&fit=crop"  // Dépanneuse en action
];

const WhyChooseUs = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fonction pour l'image précédente
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  // Fonction pour l'image suivante
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Autoplay : change d'image toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval); // Nettoyage lors du démontage du composant
  }, []);

  return (
    <section className="relative py-24 bg-[#FAFAFA] font-sans overflow-hidden">
      
      {/* --- DÉCORATIONS D'ARRIÈRE-PLAN (THEME RELATED) --- */}
      
      {/* 1. Grille technique subtile (Dot pattern) */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60 z-0"></div>

      {/* 2. Grandes icônes mécaniques transparentes */}
      <div className="absolute -top-32 -right-32 text-gray-200/40 transform rotate-12 z-0 animate-[spin_120s_linear_infinite]">
        <Settings size={500} strokeWidth={0.5} />
      </div>
      <div className="absolute -bottom-24 left-1/3 text-gray-200/50 transform -rotate-45 z-0">
        <Wrench size={300} strokeWidth={0.5} />
      </div>

      {/* 3. Bandes de signalisation (Hazard stripes) discrètes en bas à droite */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[repeating-linear-gradient(45deg,transparent,transparent_15px,#f3f4f6_15px,#f3f4f6_30px)] opacity-60 rounded-tl-[100px] z-0"></div>

      {/* --- CONTENU PRINCIPAL --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- COLONNE GAUCHE : VISUELS (SLIDER) --- */}
          <div className="relative">
            {/* Forme décorative noire (Arrière-plan, haut-gauche) */}
            <div className="absolute -top-8 -left-8 w-full h-full bg-[#0a0a0a] rounded-[40px] transform -rotate-6 z-0 scale-95 transition-transform duration-700 hover:rotate-0" />
            
            {/* Forme décorative beige (Arrière-plan, bas-droite) */}
            <div className="absolute -bottom-10 -right-6 w-10/12 h-full bg-[#F3E5DC] rounded-[40px] z-0 shadow-inner" />

            {/* Slider Images */}
            <div className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl bg-white border-4 border-white h-[500px]">
              {sliderImages.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`Illustration ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                />
              ))}
              
              {/* Indicateurs (Petits points en bas de l'image) */}
              <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-2">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-[#FF5A00] w-6' : 'bg-white/60 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Carte Flottante : Avis Clients & Contrôles du Slider */}
            <div className="absolute -bottom-6 left-6 md:left-12 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-5 w-[85%] sm:w-auto transform transition-transform hover:-translate-y-1">
              
              {/* Avatars superposés */}
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-gray-400">
                    <User size={16} />
                  </div>
                ))}
              </div>

              {/* Note et texte */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-gray-900 text-lg">4.9/5</span>
                  <div className="flex text-[#FF5A00]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-500 font-medium mt-0.5">Basé sur +2500 avis clients</p>
              </div>

              {/* Boutons de navigation du Slider */}
              <div className="hidden sm:flex items-center gap-2 ml-4">
                <button 
                  onClick={prevImage}
                  className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#FF5A00] hover:text-white transition-colors border border-gray-200 hover:border-[#FF5A00] cursor-pointer"
                >
                  <ChevronLeft size={16} />
                </button>
                <button 
                  onClick={nextImage}
                  className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#FF5A00] hover:text-white transition-colors border border-gray-200 hover:border-[#FF5A00] cursor-pointer"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* --- COLONNE DROITE : CONTENU --- */}
          <div className="lg:pl-8 mt-12 lg:mt-0 relative">
            
            {/* Badge */}
            <div className="inline-block bg-[#FF5A00] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 shadow-md shadow-[#FF5A00]/20">
              Pourquoi nous choisir ?
            </div>

            {/* Titre et Paragraphe */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-[1.15] tracking-tight">
              La confiance se <br className="hidden md:block" /> gagne sur le terrain.
            </h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-lg bg-white/50 backdrop-blur-sm p-2 -ml-2 rounded-lg transition-all duration-300">
              Chez Dépann Pro, nous transformons une situation stressante en une prise en charge rassurante. Nos techniciens sont formés pour intervenir rapidement et efficacement.
            </p>

            {/* Liste des avantages */}
            <div className="space-y-8">
              
              {/* Avantage 1 */}
              <div className="flex items-start gap-5 group bg-white/40 p-3 -ml-3 rounded-xl hover:bg-white/80 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF5A00]/10 flex items-center justify-center text-[#FF5A00] group-hover:bg-[#FF5A00] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1.5">Intervention en 30 min</h3>
                  <p className="text-gray-500 leading-relaxed text-sm max-w-md">
                    Notre maillage local nous permet d'être sur les lieux en temps record.
                  </p>
                </div>
              </div>

              {/* Avantage 2 */}
              <div className="flex items-start gap-5 group bg-white/40 p-3 -ml-3 rounded-xl hover:bg-white/80 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF5A00]/10 flex items-center justify-center text-[#FF5A00] group-hover:bg-[#FF5A00] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1.5">Agréé Assurances</h3>
                  <p className="text-gray-500 leading-relaxed text-sm max-w-md">
                    Nous travaillons avec les plus grandes compagnies d'assurance pour votre tranquillité.
                  </p>
                </div>
              </div>

              {/* Avantage 3 */}
              <div className="flex items-start gap-5 group bg-white/40 p-3 -ml-3 rounded-xl hover:bg-white/80 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF5A00]/10 flex items-center justify-center text-[#FF5A00] group-hover:bg-[#FF5A00] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Euro size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1.5">Prix Transparents</h3>
                  <p className="text-gray-500 leading-relaxed text-sm max-w-md">
                    Devis annoncé avant intervention. Pas de surprise sur la facture finale.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;