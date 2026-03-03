import React from 'react';
import { Truck, Zap, Key, Car, Clock, Wrench, Settings } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: "Dépannage Véhicule Léger",
    description: "Assistance complète pour voitures de tourisme, SUV et utilitaires légers. Panne de batterie, erreur de carburant...",
    image: "/2.jpeg", 
    icon: <Truck size={24} />
  },
  {
    id: 2,
    title: "Dépannage Moto / Scooter",
    description: "Remorquage spécifique sur plateau avec sangles adaptées pour garantir la stabilité et la sécurité totale de votre deux-roues.",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop",
    icon: <Zap size={24} />
  },
  {
    id: 3,
    title: "Remorquage Longue Distance",
    description: "Transport de votre véhicule vers le garage de votre choix, votre domicile ou un lieu de stockage, partout en France.",
    image: "/1.jpeg",
    icon: <Key size={24} />
  },
  {
    id: 4,
    title: "Assistance Accident",
    description: "Prise en charge complète après un accident : sécurisation de la zone, remorquage, et aide aux démarches immédiates.",
    image: "/3.jpeg",
    icon: <Car size={24} />
  },
  {
    id: 5,
    title: "Intervention Nuit & Week-end",
    description: "Une équipe dédiée disponible 24h/24 et 7j/7 pour ne jamais vous laisser seul, même les jours fériés et au milieu de la nuit.",
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=800&auto=format&fit=crop",
    icon: <Clock size={24} />
  },
  {
    id: 6,
    title: "Mécanique Légère sur Place",
    description: "Diagnostic rapide et réparations mineures (changement de roue, batterie, ampoules) pour vous remettre en route sans remorquage.",
    image: "4.jpeg",
    icon: <Wrench size={24} />
  }
];

const ServicesSection = () => {
  return (
    <section className="relative py-28 bg-[#FAFAFA] font-sans overflow-hidden">
      
      {/* --- ARRIÈRE-PLAN DÉCORATIF MODERNE --- */}
      {/* 1. Motif de grille technique subtil (Dot pattern) */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-40 z-0"></div>

      {/* 2. Grandes icônes d'engrenage transparentes et animées pour le "thème mécanique" */}
      <div className="absolute -top-32 -right-32 text-gray-200/50 transform rotate-12 z-0 animate-[spin_120s_linear_infinite]">
        <Settings size={600} strokeWidth={0.5} />
      </div>
      <div className="absolute -bottom-48 -left-48 text-gray-100/70 transform -rotate-45 z-0 animate-[spin_180s_linear_infinite_reverse]">
        <Settings size={800} strokeWidth={0.5} />
      </div>

      {/* --- CONTENU PRINCIPAL --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* En-tête de la section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-[#FF5A00]/10 text-[#FF5A00] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-inner border border-[#FF5A00]/20">
            <Wrench size={14} />
              Nos Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-[1.15] tracking-tight">
            Services d'intervention <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5A00] via-[#FF8C42] to-[#FF5A00] animate-gradient-x">rapides et experts</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Nous couvrons tous les types de pannes pour vous garantir une mobilité sans interruption, 24h/24 et 7j/7.
          </p>
        </div>

        {/* Grille de services améliorée */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-[#FF5A00]/10 transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Image Container avec effet de survol sophistiqué */}
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Overlay dégradé subtil au survol (Glassmorphism effect) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-[#FF5A00]/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icône Orange flottante (plus grande et animée au survol) */}
                <div className="absolute top-5 left-5 bg-white text-[#FF5A00] p-3 rounded-2xl shadow-lg border border-gray-100 group-hover:bg-[#FF5A00] group-hover:text-white transition-all duration-300 transform group-hover:rotate-6 group-hover:scale-110">
                  {service.icon}
                </div>
              </div>

              {/* Contenu Texte */}
              <div className="p-9 flex-grow flex flex-col relative">
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#FF5A00] transition-colors duration-300 tracking-tight leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  {service.description}
                </p>

                {/* Petit détail de design au survol (bordure orange en bas) */}
                <div className="absolute bottom-0 left-0 h-1.5 bg-[#FF5A00] rounded-t-full transition-all duration-300 w-0 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>

        

      </div>
    </section>
  );
};

export default ServicesSection;