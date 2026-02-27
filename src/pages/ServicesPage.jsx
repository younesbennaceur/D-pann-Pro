import React from 'react';
import { Truck, Zap, MapPin, ShieldAlert, Moon, Key, CheckCircle2 } from 'lucide-react';
import CallToAction from '../components/Cta';

const servicesList = [
  {
    id: 1,
    title: "Dépannage Véhicule Léger",
    description: "Assistance complète pour voitures de tourisme, SUV et utilitaires légers. Panne de batterie, ouverture de portière, crevaison ou erreur de carburant.",
    image: "https://images.unsplash.com/photo-1605649487212-4d4ce3e30f10?q=80&w=800&auto=format&fit=crop",
    icon: <Truck size={20} />,
    features: ["Intervention < 30 min", "Toutes marques", "Réparation sur place possible"],
    priceLabel: "À partir de 90€"
  },
  {
    id: 2,
    title: "Dépannage Moto / Scooter",
    description: "Remorquage spécifique sur plateau avec sangles adaptées pour garantir la stabilité et la sécurité de votre deux-roues.",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop",
    icon: <Zap size={20} />,
    features: ["Système de blocage roue", "Protection carénage", "Transport sécurisé"],
    priceLabel: "À partir de 80€"
  },
  {
    id: 3,
    title: "Remorquage Longue Distance",
    description: "Transport de votre véhicule vers le garage de votre choix, votre domicile ou un lieu de stockage, quelle que soit la distance.",
    image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800&auto=format&fit=crop",
    icon: <MapPin size={20} />,
    features: ["Toute la France", "Véhicule de remplacement", "Suivi en temps réel"],
    priceLabel: "Sur devis (Forfait + Km)"
  },
  {
    id: 4,
    title: "Assistance Accident",
    description: "Prise en charge complète après un accident : sécurisation de la zone, remorquage, photos pour assurance et aide aux démarches.",
    image: "https://images.unsplash.com/photo-1600662657416-5bc4f494bc25?q=80&w=800&auto=format&fit=crop",
    icon: <ShieldAlert size={20} />,
    features: ["Nettoyage chaussée", "Stockage sécurisé", "Lien direct assurance"],
    priceLabel: "Prise en charge Assurance"
  },
  {
    id: 5,
    title: "Intervention Nuit & Week-end",
    description: "Une équipe dédiée disponible 24h/24 et 7j/7 pour ne jamais vous laisser seul, même les jours fériés et au milieu de la nuit.",
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=800&auto=format&fit=crop",
    icon: <Moon size={20} />,
    features: ["Disponibilité garantie", "Équipe de garde", "Secteur étendu"],
    priceLabel: "Majoration légale"
  },
  {
    id: 6,
    title: "Sortie de Fourrière",
    description: "Nous récupérons votre véhicule en fourrière si vous ne pouvez pas vous déplacer (panne, absence de permis valide, etc).",
    image: "https://images.unsplash.com/photo-1486262715619-670810a0445f?q=80&w=800&auto=format&fit=crop",
    icon: <Key size={20} />,
    features: ["Gestion administrative", "Avance de frais possible", "Livraison à domicile"],
    priceLabel: "À partir de 120€"
  }
];

const DetailedServices = () => {
  return (
    <section className="relative font-sans bg-[#F8FAFC]">
      
      {/* --- PARTIE SUPÉRIEURE (SOMBRE & ANIMÉE) --- */}
      <div className="relative bg-[#0a0a0a] pt-24 pb-56 px-6 overflow-hidden">
        {/* Orbes animées en arrière-plan */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF5A00] opacity-10 blur-[120px] mix-blend-screen animate-pulse rounded-full pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#FF8C42] opacity-[0.05] blur-[100px] mix-blend-screen animate-pulse delay-1000 rounded-full pointer-events-none" />
        
        {/* Contenu de l'en-tête */}
        <div className="relative z-10  max-w-7xl mx-auto text-left ">
          <div className="inline-flex items-center gap-2 bg-[#FF5A00]/10 text-[#FF5A00] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-[#FF5A00]/20">
            Expertise & Savoir-faire
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Nos prestations de <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5A00] to-[#FFB185]">dépannage</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl  leading-relaxed">
            Des solutions adaptées à chaque situation d'urgence. Découvrez notre gamme complète de services d'assistance automobile.
          </p>
        </div>
      </div>

      {/* --- PARTIE INFÉRIEURE (CARTES SUPERPOSÉES) --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 -mt-36 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {servicesList.map((service) => (
            <div 
              key={service.id} 
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl hover:shadow-[#FF5A00]/10 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image et Icône */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                
                {/* Icône flottante */}
                <div className="absolute top-4 left-4 bg-[#FF5A00] text-white p-2.5 rounded-xl shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Corps de la carte */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF5A00] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Liste des avantages avec animation au survol */}
                <ul className="space-y-3 mb-8 mt-auto">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-700 transform transition-transform duration-300 group-hover:translate-x-1">
                      <CheckCircle2 size={16} className="text-[#FF5A00] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pied de la carte (Tarification) */}
              <div className="px-8 py-5 bg-gray-50/80 border-t border-gray-100 flex items-center justify-between transition-colors duration-300 group-hover:bg-[#FF5A00]/5">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Tarif indicatif
                </span>
                <span className="font-extrabold text-gray-900 text-sm max-w-[130px] text-right leading-tight">
                  {service.priceLabel}
                </span>
              </div>
              
            </div>
          ))}

        </div>
      </div>

      <CallToAction />

    </section>
  );
};

export default DetailedServices;