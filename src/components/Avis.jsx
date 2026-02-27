import React from 'react';
import { Star } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: "Sarah M.",
    role: "MOTARDE",
    initial: "S",
    avatarBg: "bg-slate-600",
    text: "Batterie à plat ce matin avant le travail. Intervention éclair, prix annoncé au téléphone respecté. Merci pour votre réactivité !"
  },
  {
    id: 2,
    name: "Eric L.",
    role: "AUTOMOBILISTE",
    initial: "E",
    avatarBg: "bg-blue-900",
    text: "Nous faisions route vers les vacances. Dépannage rapide sur l'autoroute et garagiste partenaire honnête. Un grand merci."
  },
  {
    id: 3,
    name: "Julien D.",
    role: "CHAUFFEUR LIVREUR",
    initial: "J",
    avatarBg: "bg-emerald-800",
    text: "Camionnette en panne au milieu de ma tournée. L'équipe a été super pro et m'a permis de repartir avec un minimum de retard."
  },
  {
    id: 4,
    name: "Marie P.",
    role: "AUTOMOBILISTE",
    initial: "M",
    avatarBg: "bg-[#FF5A00]",
    text: "Crevaison de nuit sous la pluie... Le dépanneur est arrivé en 25 minutes, souriant et efficace. Je recommande les yeux fermés."
  },
  {
    id: 5,
    name: "Thomas B.",
    role: "MÉCANICIEN",
    initial: "T",
    avatarBg: "bg-purple-900",
    text: "En tant que pro, j'apprécie le matériel de remorquage utilisé, parfaitement adapté aux véhicules bas. Très bon travail."
  }
];

const Testimonials = () => {
  // On duplique le tableau pour créer l'effet de boucle infinie (Marquee)
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <section className="relative py-24 bg-[#050505] font-sans overflow-hidden">
      
      {/* --- ARRIÈRE-PLAN ANIMÉ (Orbes lumineuses fluides) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Orbe Orange */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#FF5A00] opacity-[0.07] blur-[100px] mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]" />
        
        {/* Orbe Bleu/Gris */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gray-600 opacity-[0.05] blur-[120px] mix-blend-screen animate-[pulse_12s_ease-in-out_infinite_reverse]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        {/* En-tête */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Ce qu'ils disent de nous
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            La satisfaction de nos clients est notre meilleure publicité.
          </p>
        </div>
      </div>

      {/* --- CARROUSEL INFINI (MARQUEE) --- */}
      <div className="relative z-10 w-full flex overflow-hidden">
        
        {/* Masques de fondu sur les bords pour l'effet d'apparition douce */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

        {/* Piste de défilement (Scroll track) */}
        <div className="flex animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused] gap-6 px-3">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div 
              key={`${testimonial.id}-${index}`}
              className="w-[320px] md:w-[380px] flex-shrink-0 bg-[#121212]/80 backdrop-blur-md border border-white/5 rounded-2xl p-8 flex flex-col justify-between hover:border-white/10 hover:bg-[#1a1a1a]/90 transition-all duration-300"
            >
              <div>
                {/* Étoiles */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#FF5A00] text-[#FF5A00]" />
                  ))}
                </div>
                
                {/* Texte de l'avis */}
                <p className="text-gray-300 text-sm md:text-base italic leading-relaxed mb-8 font-light">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Profil Utilisateur */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-inner ${testimonial.avatarBg}`}>
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs tracking-widest uppercase mt-0.5">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Testimonials;