import React, { useState } from 'react';
import { MapPin, Navigation, ChevronDown, Info, ArrowRight, Car } from 'lucide-react';

const EstimationForm = () => {
  // --- ÉTATS DU FORMULAIRE ---
  const [formData, setFormData] = useState({
    depart: '',
    arrivee: '',
    vehicule: 'Voiture citadine',
    panne: 'Batterie HS',
    horaire: 'Jour'
  });

  // --- ÉTATS DE L'INTERFACE ET DU RÉSULTAT ---
  const [isCalculated, setIsCalculated] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [result, setResult] = useState({ distance: 0, price: 0 });

  // --- GESTION DES CHANGEMENTS ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Si l'utilisateur modifie une valeur, on réinitialise le résultat
    if (isCalculated) setIsCalculated(false);
  };

  const handleHoraireChange = (time) => {
    setFormData(prev => ({ ...prev, horaire: time }));
    if (isCalculated) setIsCalculated(false);
  };

  // --- LOGIQUE DE CALCUL ---
  const handleCalculate = (e) => {
    e.preventDefault();
    setIsAnimating(true);

    // Simulation d'un temps de calcul (API)
    setTimeout(() => {
      // 1. Simulation d'une distance entre 5 et 30 km (Pour la démo)
      // Si vous voulez fixer à 14km pour correspondre à la photo : const distance = 14;
      const mockDistance = Math.floor(Math.random() * 25) + 5; 

      // 2. Tarifs de base
      const basePrice = 50; 
      const pricePerKm = 2; 

      // 3. Multiplicateurs selon le véhicule
      let vehicleMultiplier = 1;
      if (formData.vehicule === 'SUV / 4x4') vehicleMultiplier = 1.2;
      if (formData.vehicule === 'Utilitaire') vehicleMultiplier = 1.5;
      if (formData.vehicule === 'Moto / Scooter') vehicleMultiplier = 0.8;

      // 4. Multiplicateurs selon l'horaire
      let timeMultiplier = 1;
      if (formData.horaire === 'Nuit') timeMultiplier = 1.5;
      if (formData.horaire === 'Week-end') timeMultiplier = 1.3;

      // 5. Calcul final : (Base + (Distance * Prix/Km)) * Majorations
      const subTotal = basePrice + (mockDistance * pricePerKm);
      const total = subTotal * vehicleMultiplier * timeMultiplier;

      setResult({
        distance: mockDistance,
        price: Math.round(total) // On arrondit pour avoir un prix net
      });
      
      setIsCalculated(true);
      setIsAnimating(false);
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto w-full font-sans">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 relative overflow-hidden">
        
        {/* EN-TÊTE DU FORMULAIRE */}
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-[#FF5A00]/10 p-3 rounded-xl text-[#FF5A00]">
            <Car size={24} />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Estimez le coût de votre dépannage</h2>
            <p className="text-gray-500 text-sm">Obtenez une estimation immédiate et transparente</p>
          </div>
        </div>

        <form onSubmit={handleCalculate} className="space-y-6">
          
          {/* LIGNE 1 : ADRESSES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[11px] font-bold text-gray-500 mb-2 tracking-wide uppercase">1. Adresse de départ</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#FF5A00]">
                  <MapPin size={18} />
                </div>
                <input 
                  type="text" 
                  name="depart"
                  value={formData.depart}
                  onChange={handleChange}
                  required
                  placeholder="Ex: 12 Rue de Rivoli, Paris" 
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A00]/50 focus:border-[#FF5A00] transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-500 mb-2 tracking-wide uppercase">2. Adresse d'arrivée</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#FF5A00]">
                  <Navigation size={18} className="transform rotate-45" />
                </div>
                <input 
                  type="text" 
                  name="arrivee"
                  value={formData.arrivee}
                  onChange={handleChange}
                  required
                  placeholder="Ex: Garage Renault, Boulogne-Billancourt" 
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A00]/50 focus:border-[#FF5A00] transition-all text-sm"
                />
              </div>
            </div>
          </div>

          {/* LIGNE 2 : OPTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* VÉHICULE */}
            <div>
              <label className="block text-[11px] font-bold text-gray-500 mb-2 tracking-wide uppercase">3. Véhicule</label>
              <div className="relative">
                <select 
                  name="vehicule"
                  value={formData.vehicule}
                  onChange={handleChange}
                  className="w-full appearance-none px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A00]/50 focus:border-[#FF5A00] transition-all text-sm text-gray-700"
                >
                  <option>Voiture citadine</option>
                  <option>SUV / 4x4</option>
                  <option>Moto / Scooter</option>
                  <option>Utilitaire</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                  <ChevronDown size={18} />
                </div>
              </div>
            </div>

            {/* PANNE */}
            <div>
              <label className="block text-[11px] font-bold text-gray-500 mb-2 tracking-wide uppercase">4. Panne</label>
              <div className="relative">
                <select 
                  name="panne"
                  value={formData.panne}
                  onChange={handleChange}
                  className="w-full appearance-none px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A00]/50 focus:border-[#FF5A00] transition-all text-sm text-gray-700"
                >
                  <option>Batterie HS</option>
                  <option>Crevaison</option>
                  <option>Panne moteur</option>
                  <option>Accident</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                  <ChevronDown size={18} />
                </div>
              </div>
            </div>

            {/* HORAIRE */}
            <div>
              <label className="block text-[11px] font-bold text-gray-500 mb-2 tracking-wide uppercase">5. Horaire d'intervention</label>
              <div className="flex bg-gray-50 border border-gray-200 rounded-lg p-1">
                {['Jour', 'Nuit', 'Week-end'].map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => handleHoraireChange(time)}
                    className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      formData.horaire === time 
                        ? 'bg-[#FF5A00] text-white shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-gray-100 my-6" />

          {/* FOOTER DU FORMULAIRE : RÉSULTAT ET BOUTON */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Zone de résultat à gauche */}
            <div className="w-full md:w-auto flex-grow min-h-[70px] flex items-center">
              {!isCalculated ? (
                <div className="flex items-center gap-2 text-gray-400">
                  <Info size={16} />
                  <span className="italic text-sm">Remplissez le formulaire pour voir le tarif</span>
                </div>
              ) : (
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex items-center justify-between w-full md:max-w-md animate-fade-in shadow-inner">
                  <div>
                    <span className="text-[10px] font-bold text-gray-500 tracking-wide uppercase">
                      Estimation ({result.distance} km)
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-3xl font-bold text-gray-900">{result.price}€</span>
                      <span className="text-xs font-bold text-gray-600">TTC</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="bg-white text-gray-400 text-[10px] px-3 py-1.5 rounded border border-gray-200">
                      Prix indicatif, sans engagement
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Bouton de calcul à droite */}
            <button 
              type="submit"
              disabled={isAnimating}
              className={`flex-shrink-0 flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold transition-all duration-300 w-full md:w-auto ${
                isCalculated 
                  ? 'bg-[#FF5A00] text-white hover:bg-[#e04f00] shadow-lg shadow-[#FF5A00]/20' 
                  : 'bg-[#FFB185] text-white hover:bg-[#FF5A00]' // Couleur saumonée avant calcul comme sur l'image 1
              }`}
            >
              {isAnimating ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Calculer mon estimation</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EstimationForm;