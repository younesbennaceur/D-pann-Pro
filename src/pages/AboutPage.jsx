import React from 'react';
import { 
  Star, ShieldCheck, Users, Clock, Truck, 
  MapPin, Wrench, PhoneCall, Flag, TrendingUp, Building2, Award 
} from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="font-sans">
      
      {/* =========================================
          1. HERO SECTION (Qui sommes-nous ?)
      ========================================= */}
      <section className="relative bg-[#0a0a0a] pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF5A00]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FF5A00]/10 text-[#FF5A00] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-[#FF5A00]/20">
                L'ENTREPRISE
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                Qui sommes-nous ?
              </h1>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">
                Édités par une équipe de passionnés de l'automobile, Dépann Pro est la référence du dépannage premium en région parisienne.
              </p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-[#FF5A00]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <span className="text-white font-bold text-lg">4.9/5</span>
                <span className="text-gray-500 text-sm">sur +2500 avis</span>
              </div>
            </div>

            <div className="relative h-[400px] w-full hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=600&auto=format&fit=crop" 
                alt="Dépanneuse" 
                className="absolute right-0 top-0 w-2/3 h-64 object-cover rounded-3xl border-4 border-[#0a0a0a] shadow-2xl z-10"
              />
              <img 
                src="/hero.jpg" 
                alt="Intervention" 
                className="absolute left-0 bottom-0 w-2/3 h-64 object-cover rounded-3xl border-4 border-[#0a0a0a] shadow-2xl z-20"
              />
              
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. NOTRE HISTOIRE
      ========================================= */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative">
              <div className="absolute inset-0 bg-gray-100 rounded-[40px] transform -rotate-3 scale-105 z-0" />
              <img 
                src="/hero1.png" 
                alt="Notre équipe" 
                className="relative z-10 w-full rounded-[32px] shadow-xl object-cover h-[500px]"
              />
              <img 
                src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=300&auto=format&fit=crop" 
                alt="Mécanicien" 
                className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl border-8 border-white shadow-2xl z-20 object-cover"
              />
            </div>

            <div className="lg:pl-8 mt-12 lg:mt-0">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                Notre histoire : <span className="text-[#FF5A00]">15 ans</span> de passion et de service.
              </h2>
              <div className="space-y-6 text-gray-500 text-lg leading-relaxed mb-10">
                <p>
                  Fondée en 2011, Dépann Pro est née d'une ambition simple : redéfinir les standards du dépannage automobile. Fini les attentes interminables et l'opacité des tarifs.
                </p>
                <p>
                  Aujourd'hui, nous sommes fiers d'accompagner des milliers d'automobilistes chaque année, avec une flotte moderne et une équipe de techniciens passionnés, prêts à intervenir à tout moment.
                </p>
              </div>

              <div className="flex items-center gap-12 border-t border-gray-100 pt-8">
                <div>
                  <span className="block text-3xl font-extrabold text-gray-900 mb-1">12</span>
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Camions</span>
                </div>
                <div>
                  <span className="block text-3xl font-extrabold text-gray-900 mb-1">25</span>
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Experts</span>
                </div>
                <div>
                  <span className="block text-3xl font-extrabold text-[#FF5A00] mb-1">24/7</span>
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Disponibilité</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          3. ÉTAPES CLÉS DE CROISSANCE (NOUVEAU)
      ========================================= */}
      <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[#FF5A00] text-sm font-bold tracking-widest uppercase mb-2 block">NOTRE PARCOURS</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Les étapes clés de notre <span className="text-[#FF5A00]">croissance</span>
            </h2>
          </div>

          {/* Ligne de connexion décorative en arrière plan (visible sur Desktop) */}
          <div className="hidden lg:block absolute top-[60%] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-[#FF5A00]/20 to-transparent -z-10" />

          {/* Grille de la Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            
            {/* Étape 1 */}
            <div className="bg-white rounded-[2rem] p-8 text-center shadow-lg border border-gray-50 relative transform lg:-translate-y-8 hover:-translate-y-10 transition-transform duration-300">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#FF5A00] rounded-2xl rotate-45 flex items-center justify-center shadow-lg shadow-[#FF5A00]/30">
                <Flag size={20} className="text-white -rotate-45" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">Création</h3>
              <span className="text-[#FF5A00] font-black text-lg block mb-3">2011</span>
              <p className="text-gray-500 text-sm leading-relaxed">Création de Dépann Pro avec un seul camion et une volonté de fer de changer les choses.</p>
            </div>

            {/* Étape 2 */}
            <div className="bg-white rounded-[2rem] p-8 text-center shadow-lg border border-gray-50 relative transform lg:translate-y-8 hover:translate-y-6 transition-transform duration-300">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#FF5A00] rounded-2xl rotate-45 flex items-center justify-center shadow-lg shadow-[#FF5A00]/30">
                <TrendingUp size={20} className="text-white -rotate-45" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">Croissance</h3>
              <span className="text-[#FF5A00] font-black text-lg block mb-3">2015</span>
              <p className="text-gray-500 text-sm leading-relaxed">Élargissement de la flotte avec 5 nouveaux véhicules pour répondre à une forte demande locale.</p>
            </div>

            {/* Étape 3 */}
            <div className="bg-white rounded-[2rem] p-8 text-center shadow-lg border border-gray-50 relative transform lg:-translate-y-8 hover:-translate-y-10 transition-transform duration-300">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#FF5A00] rounded-2xl rotate-45 flex items-center justify-center shadow-lg shadow-[#FF5A00]/30">
                <Building2 size={20} className="text-white -rotate-45" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">Expansion</h3>
              <span className="text-[#FF5A00] font-black text-lg block mb-3">2019</span>
              <p className="text-gray-500 text-sm leading-relaxed">Ouverture de notre 2ème centre de dépôt sécurisé pour mieux couvrir toute la région parisienne.</p>
            </div>

            {/* Étape 4 */}
            <div className="bg-white rounded-[2rem] p-8 text-center shadow-lg border border-gray-50 relative transform lg:translate-y-8 hover:translate-y-6 transition-transform duration-300">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#FF5A00] rounded-2xl rotate-45 flex items-center justify-center shadow-lg shadow-[#FF5A00]/30">
                <Award size={20} className="text-white -rotate-45" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">Aujourd'hui</h3>
              <span className="text-[#FF5A00] font-black text-lg block mb-3">2026</span>
              <p className="text-gray-500 text-sm leading-relaxed">Une équipe de 25 experts et une position de leader régional sur le dépannage express et premium.</p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          4. NOS VALEURS FONDAMENTALES
      ========================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#FF5A00] text-sm font-bold tracking-widest uppercase mb-2 block">L'ADN Dépann Pro</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Nos valeurs <span className="text-[#FF5A00]">fondamentales</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=600&auto=format&fit=crop" alt="Réactivité" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 bg-[#FF5A00] p-2.5 rounded-xl text-white">
                  <Clock size={20} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Réactivité absolue</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Parce qu'une panne n'attend pas, notre logistique est optimisée pour vous rejoindre en moins de 30 minutes.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop" alt="Transparence" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 bg-[#FF5A00] p-2.5 rounded-xl text-white">
                  <ShieldCheck size={20} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transparence totale</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Fini les mauvaises surprises. Nos tarifs sont clairs, annoncés à l'avance et nos interventions expliquées en détail.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop" alt="Humain" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 bg-[#FF5A00] p-2.5 rounded-xl text-white">
                  <Users size={20} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dimension humaine</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Derrière chaque volant, il y a une personne stressée. Nos techniciens sont formés pour rassurer et accompagner avec le sourire.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. STATISTIQUES (Dark Section)
      ========================================= */}
      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Dépann Pro en <span className="text-[#FF5A00]">chiffres</span>
            </h2>
            <p className="text-gray-400 mt-4">Des résultats qui parlent d'eux-mêmes.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-[#151515] border border-white/10 rounded-2xl p-8 text-center hover:bg-[#1a1a1a] hover:border-[#FF5A00]/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-extrabold text-white mb-2">15+</div>
              <div className="text-gray-400 text-xs font-bold uppercase tracking-wider">Ans d'expérience</div>
            </div>
            <div className="bg-[#151515] border border-white/10 rounded-2xl p-8 text-center hover:bg-[#1a1a1a] hover:border-[#FF5A00]/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-extrabold text-white mb-2">5000+</div>
              <div className="text-gray-400 text-xs font-bold uppercase tracking-wider">Interventions/an</div>
            </div>
            <div className="bg-[#151515] border border-white/10 rounded-2xl p-8 text-center hover:bg-[#1a1a1a] hover:border-[#FF5A00]/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-extrabold text-white mb-2">50km</div>
              <div className="text-gray-400 text-xs font-bold uppercase tracking-wider">Rayon d'action</div>
            </div>
            <div className="bg-[#151515] border border-white/10 rounded-2xl p-8 text-center hover:bg-[#1a1a1a] hover:border-[#FF5A00]/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-extrabold text-white mb-2">25</div>
              <div className="text-gray-400 text-xs font-bold uppercase tracking-wider">Experts dédiés</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          6. GALERIE PHOTO (NOUVEAU)
      ========================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#FF5A00] text-sm font-bold tracking-widest uppercase mb-2 block">EN IMAGES</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Notre quotidien sur le <span className="text-[#FF5A00]">terrain</span>
            </h2>
          </div>

          {/* Grille Masonry / Asymétrique à 4 colonnes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px]">
            
            {/* Image 1 : Grande et haute (Col 1) */}
            <div className="col-span-1 row-span-2 rounded-3xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=800&auto=format&fit=crop" alt="Dépanneuse en action" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>

            {/* Image 2 : Petite (Col 2, Haut) */}
            <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden group">
              <img src="/hero.jpg" alt="Véhicule chargé" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>

            {/* Image 3 : Grande et haute (Col 3) */}
            <div className="col-span-1 row-span-2 rounded-3xl overflow-hidden group">
              <img src="/hero.jpg" alt="Outils et treuil" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>

            {/* Image 4 : Petite (Col 4, Haut) */}
            <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden group">
              <img src="/hero1.png" alt="Moteur de voiture" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>

            {/* Image 5 : Petite (Col 2, Bas) */}
            <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=600&auto=format&fit=crop" alt="Mécanicien souriant" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>

            {/* Image 6 : Petite (Col 4, Bas) */}
            <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=600&auto=format&fit=crop" alt="Dépannage moto" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          7. CTA FINAL (Bandeau Orange)
      ========================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#FF5A00] rounded-[40px] p-12 text-center relative overflow-hidden shadow-2xl shadow-[#FF5A00]/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <PhoneCall size={32} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Prêt à nous faire confiance ?
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                Nos équipes sont prêtes à intervenir. Contactez-nous sur notre ligne prioritaire pour une prise en charge immédiate.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-[#FF5A00] hover:bg-gray-50 px-8 py-4 rounded-xl font-bold transition-transform hover:-translate-y-1">
                  Estimer mon dépannage
                </button>
                <a href="tel:0800123456">
                  <button className="bg-[#0a0a0a] text-white hover:bg-gray-900 px-8 py-4 rounded-xl font-bold transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 w-full sm:w-auto">
                    <PhoneCall size={18} />
                    0800 123 456
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;