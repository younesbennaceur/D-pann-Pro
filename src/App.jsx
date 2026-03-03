import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { PhoneCall } from 'lucide-react'; // Ajout de l'icône de téléphone
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DetailedServices from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// ✅ ScrollToTop
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}

// ✅ NOUVEAU : Le bouton flottant d'appel
const FloatingCallButton = () => {
  return (
    <a
      href="tel:0652591820" // ⚠️ Remplace par ton vrai numéro de téléphone
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 group flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF5A00] to-[#FF7B33] text-white p-4 md:px-6 md:py-4 rounded-full shadow-lg shadow-[#FF5A00]/40 hover:shadow-2xl hover:shadow-[#FF5A00]/50 hover:-translate-y-1 transition-all duration-300"
      aria-label="Appeler pour un dépannage"
    >
      {/* Effet d'onde (pulse) animé pour attirer l'œil */}
      <span className="absolute inset-0 rounded-full animate-ping bg-[#FF5A00] opacity-25"></span>
      
      {/* Icône avec effet de légère rotation au survol */}
      <PhoneCall size={24} className="relative z-10 group-hover:rotate-12 transition-transform" />
      
      {/* Texte visible uniquement sur les écrans plus larges (tablette/PC) */}
      <span className="relative z-10 font-bold hidden md:block">
        Urgence Dépannage
      </span>
    </a>
  );
};

function App() {
  return (
    <div className="relative min-h-screen">
      <ScrollToTop />
      
      <Navbar />

      {/* Le corps de la page */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<DetailedServices />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>

      <Footer />

      {/* Bouton flottant ajouté ici pour être visible sur TOUTES les pages */}
      <FloatingCallButton />
      
    </div>
  );
}

export default App;