import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Permet de savoir sur quelle page on est pour colorer le lien actif
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Utilisation de vrais chemins de routage (path) au lieu des ancres (#)
  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Nos Services', path: '/services' },
    { name: 'À propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Fonction pour vérifier si un lien est actif
  const isActive = (path) => location.pathname === path;

  return (
    <header 
      // J'ai corrigé la syntaxe ici pour que l'effet de transparence au scroll fonctionne
      className={`fixed w-full top-0 z-[100] transition-all duration-300 font-sans 
         bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg py-3
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO - Redirige vers l'accueil */}
          <Link to="/" onClick={closeMenu} className="flex-shrink-0 flex items-center gap-2 cursor-pointer z-[101]">
            <img src="/logo.png" alt="Dépann Pro Logo" className="h-8" />
           
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path) 
                    ? 'text-[#FF5A00]' // Couleur active
                    : 'text-gray-200 hover:text-[#FF5A00]' // Couleur par défaut
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* --- CTA (Desktop) --- */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:0800123456" className="flex items-center gap-3 group cursor-pointer">
              <div className="bg-[#FF5A00]/10 p-2.5 rounded-full text-[#FF5A00] group-hover:bg-[#FF5A00] group-hover:text-white transition-all duration-300">
                <Phone size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 group-hover:text-gray-300 text-[10px] uppercase font-bold tracking-wider transition-colors">
                  Urgence 24/7
                </span>
                <span className="text-white font-bold text-lg leading-none">
                  0800 123 456
                </span>
              </div>
            </a>
            
            <Link to="/#estimation">
              <button className="bg-[#FF5A00] hover:bg-[#e04f00] text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#FF5A00]/20 hover:shadow-[#FF5A00]/40 transform hover:-translate-y-0.5">
                Estimez le dépannage
              </button>
            </Link>
          </div>

          {/* --- MOBILE MENU BUTTON --- */}
          <div className="lg:hidden flex items-center z-[101]">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white hover:text-[#FF5A00] focus:outline-none p-2 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU (Framer Motion) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 w-full bg-gray-900 border-t border-gray-800 shadow-2xl z-[90]"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              
              {/* Liens Mobile */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={`flex items-center justify-between w-full px-4 py-4 text-base font-bold border-b border-gray-800 transition-all rounded-lg ${
                    isActive(link.path) 
                      ? 'text-[#FF5A00] bg-gray-800/30' 
                      : 'text-white hover:text-[#FF5A00] hover:bg-gray-800/50'
                  }`}
                >
                  {link.name}
                  <ChevronRight size={18} className={isActive(link.path) ? "text-[#FF5A00]" : "text-gray-500"} />
                </Link>
              ))}

              {/* CTA Mobile */}
              <div className="pt-6 px-4 space-y-4">
                <a 
                  href="tel:0800123456" 
                  className="flex items-center justify-center gap-3 w-full bg-gray-800 hover:bg-gray-700 text-white py-4 rounded-lg transition-colors"
                >
                  <Phone size={20} className="text-[#FF5A00]" />
                  <span className="font-bold text-lg">0800 123 456</span>
                </a>
                
                <Link to="/#estimation" onClick={closeMenu} className="block">
                  <button className="w-full bg-[#FF5A00] hover:bg-[#e04f00] text-white py-4 rounded-lg font-bold uppercase tracking-wide text-sm transition-colors shadow-lg shadow-[#FF5A00]/20">
                    Estimez le dépannage
                  </button>
                </Link>
              </div>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;