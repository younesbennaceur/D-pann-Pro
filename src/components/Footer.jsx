import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 font-sans pt-16 pb-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Grille principale du Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Colonne 1 : Marque et présentation */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Dépann Pro Logo" className="h-8" />
              
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Le spécialiste du dépannage et remorquage automobile premium. Intervention rapide 24h/24 et 7j/7 partout en région.
            </p>
          
          </div>

          {/* Colonne 2 : Navigation */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Navigation</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-[#FF5A00] transition-colors">Accueil</Link></li>
              <li><Link to="/services" className="hover:text-[#FF5A00] transition-colors">Nos Services</Link></li>
              <li><Link to="/services" className="hover:text-[#FF5A00] transition-colors">Tarifs</Link></li>
              <li><Link to="/about" className="hover:text-[#FF5A00] transition-colors">À propos</Link></li>
            </ul>
          </div>

          {/* Colonne 3 : Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Contact</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#FF5A00] shrink-0 mt-0.5" />
                <span className="leading-relaxed">123 Avenue de la République,<br />75011 Paris</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#FF5A00] shrink-0" />
                <span>06 52 59 18 20</span>
              </li>
             
            </ul>
          </div>

          {/* Colonne 4 : Urgence / CTA */}
          <div className="bg-[#FF5A00] rounded-2xl p-6 lg:p-8 text-white shadow-xl shadow-[#FF5A00]/10 flex flex-col justify-center">
            <h3 className="font-bold text-2xl mb-3 leading-tight">Urgence<br />dépannage ?</h3>
            <p className="text-white/90 text-sm mb-6 leading-relaxed">
              Nos équipes sont prêtes à intervenir immédiatement.
            </p>
            <a href="tel:0652591820" className="w-full">
              <button className="w-full bg-white text-[#FF5A00] font-bold py-3.5 px-4 rounded-lg text-sm hover:bg-gray-50 transition-colors shadow-sm transform hover:-translate-y-0.5 duration-300">
                Appeler le 0652591820
              </button>
            </a>
          </div>

        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Dépann Pro. Tous droits réservés.</p>
         
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;