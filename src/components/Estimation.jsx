import React, { useState } from 'react';
import { MapPin, Navigation, ChevronDown, ArrowRight, Car, ShieldCheck, AlertCircle } from 'lucide-react';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const EstimationForm = () => {
  // --- ÉTATS DU FORMULAIRE ---
  const [formData, setFormData] = useState({
    depart: '',
    arrivee: '',
    vehicule: '', // Vide par défaut
    panne: '',    // Vide par défaut
    horaire: 'Jour'
  });

  // --- ÉTATS POUR MAPBOX ET L'UI ---
  const [suggestions, setSuggestions] = useState({ depart: [], arrivee: [] });
  const [activeInput, setActiveInput] = useState(null);
  const [coords, setCoords] = useState({ depart: null, arrivee: null });
  
  const [isCalculated, setIsCalculated] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [result, setResult] = useState({ distance: 0, price: 0 });
  const [errorMessage, setErrorMessage] = useState('');

  // --- GESTION DES RECHERCHES D'ADRESSES (MAPBOX) ---
  const handleAddressChange = async (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({ ...prev, [name]: value }));
    setCoords(prev => ({ ...prev, [name]: null })); // On annule les coordonnées si modification
    if (isCalculated) setIsCalculated(false);
    if (errorMessage) setErrorMessage('');

    if (value.length > 2) {
      try {
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(value)}.json?access_token=${MAPBOX_TOKEN}&country=fr&autocomplete=true&limit=5`;
        const response = await fetch(url);
        const data = await response.json();
        
        setSuggestions(prev => ({ ...prev, [name]: data.features }));
      } catch (error) {
        console.error("Erreur d'autocomplétion:", error);
      }
    } else {
      setSuggestions(prev => ({ ...prev, [name]: [] }));
    }
  };

  // --- SÉLECTION D'UNE SUGGESTION MAPBOX ---
  const handleSelectSuggestion = (name, feature) => {
    setFormData(prev => ({ ...prev, [name]: feature.place_name }));
    setCoords(prev => ({ 
      ...prev, 
      [name]: { lon: feature.center[0], lat: feature.center[1] } 
    }));
    setSuggestions(prev => ({ ...prev, [name]: [] }));
    setActiveInput(null);
    setErrorMessage('');
  };

  // --- GESTION DES AUTRES CHAMPS ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (isCalculated) setIsCalculated(false);
    if (errorMessage) setErrorMessage('');
  };

  const handleHoraireChange = (time) => {
    setFormData(prev => ({ ...prev, horaire: time }));
    if (isCalculated) setIsCalculated(false);
  };

  // --- LOGIQUE DE CALCUL ---
  const handleCalculate = async (e) => {
    e.preventDefault();
    
    // 1. Vérification stricte des champs
    if (!formData.depart || !formData.arrivee || !formData.vehicule || !formData.panne) {
      setErrorMessage("Veuillez remplir tous les champs pour obtenir une estimation précise.");
      return;
    }

    // 2. Vérification que l'utilisateur a bien cliqué sur une suggestion
    if (!coords.depart || !coords.arrivee) {
      setErrorMessage("Veuillez sélectionner les adresses de départ et d'arrivée dans la liste des suggestions.");
      return;
    }

    setErrorMessage('');
    setIsAnimating(true);

    try {
      // 3. Appel API Mapbox Directions
      const directionsUrl = `https://api.mapbox.com/directions/v5/mapbox/driving/${coords.depart.lon},${coords.depart.lat};${coords.arrivee.lon},${coords.arrivee.lat}?access_token=${MAPBOX_TOKEN}`;
      const routeResponse = await fetch(directionsUrl);
      const routeData = await routeResponse.json();

      if (routeData.code !== 'Ok' || !routeData.routes || routeData.routes.length === 0) {
        throw new Error("Impossible de trouver une route carrossable entre ces deux points.");
      }

      const distanceEnKm = routeData.routes[0].distance / 1000;

      // 4. Calcul du prix
      const basePrice = 50; 
      const pricePerKm = 2; 

      let vehicleMultiplier = 1;
      if (formData.vehicule === 'Moto') vehicleMultiplier = 0.8;
      if (formData.vehicule === 'Camion') vehicleMultiplier = 2.0;
      if (formData.vehicule === 'Autre') vehicleMultiplier = 1.2;

      let timeMultiplier = 1;
      if (formData.horaire === 'Nuit') timeMultiplier = 1.5;
      if (formData.horaire === 'Week-end') timeMultiplier = 1.3;

      const subTotal = basePrice + (distanceEnKm * pricePerKm);
      const total = subTotal * vehicleMultiplier * timeMultiplier;

      setResult({
        distance: Math.round(distanceEnKm * 10) / 10, 
        price: Math.round(total) 
      });
      
      setIsCalculated(true);
    } catch (error) {
      console.error("Erreur calcul:", error);
      setErrorMessage(error.message);
    } finally {
      setIsAnimating(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto w-full font-sans">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 relative overflow-hidden">
        
        {/* EN-TÊTE */}
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-gradient-to-br from-[#FF5A00] to-[#FF7B33] p-3 rounded-xl text-white shadow-lg shadow-[#FF5A00]/20">
            <Car size={24} />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Estimez le coût de votre dépannage</h2>
            <p className="text-gray-500 text-sm mt-1">Obtenez un tarif immédiat, transparent et sans surprise</p>
          </div>
        </div>

        {/* AFFICHAGE DES ERREURS */}
        {errorMessage && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg flex items-center gap-3 animate-fade-in">
            <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
            <p className="text-sm font-medium text-red-800">{errorMessage}</p>
          </div>
        )}

        <form onSubmit={handleCalculate} className="space-y-6">
          
          {/* LIGNE 1 : ADRESSES (AVEC MAPBOX) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* DÉPART */}
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
                  onChange={handleAddressChange}
                  onFocus={() => setActiveInput('depart')}
                  onBlur={() => setTimeout(() => setActiveInput(null), 200)}
                  placeholder="Ex: 12 Rue de Rivoli, Paris" 
                  autoComplete="off"
                  className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A00]/50 transition-all text-sm ${errorMessage && (!formData.depart || !coords.depart) ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-[#FF5A00]'}`}
                />
                
                {activeInput === 'depart' && suggestions.depart.length > 0 && (
                  <ul className="absolute z-10 w-full bg-white border border-gray-200 mt-1 rounded-lg shadow-xl max-h-48 overflow-y-auto">
                    {suggestions.depart.map(feature => (
                      <li
                        key={feature.id}
                        onMouseDown={() => handleSelectSuggestion('depart', feature)}
                        className="px-4 py-3 hover:bg-[#FF5A00]/10 cursor-pointer text-sm text-gray-700 border-b border-gray-50 last:border-0 truncate"
                      >
                        {feature.place_name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* ARRIVÉE */}
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
                  onChange={handleAddressChange}
                  onFocus={() => setActiveInput('arrivee')}
                  onBlur={() => setTimeout(() => setActiveInput(null), 200)}
                  placeholder="Ex: Garage Renault, Boulogne-Billancourt" 
                  autoComplete="off"
                  className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A00]/50 transition-all text-sm ${errorMessage && (!formData.arrivee || !coords.arrivee) ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-[#FF5A00]'}`}
                />
                
                {activeInput === 'arrivee' && suggestions.arrivee.length > 0 && (
                  <ul className="absolute z-10 w-full bg-white border border-gray-200 mt-1 rounded-lg shadow-xl max-h-48 overflow-y-auto">
                    {suggestions.arrivee.map(feature => (
                      <li
                        key={feature.id}
                        onMouseDown={() => handleSelectSuggestion('arrivee', feature)}
                        className="px-4 py-3 hover:bg-[#FF5A00]/10 cursor-pointer text-sm text-gray-700 border-b border-gray-50 last:border-0 truncate"
                      >
                        {feature.place_name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* LIGNE 2 : OPTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* TYPE DE VÉHICULE */}
            <div>
              <label className="block text-[11px] font-bold text-gray-500 mb-2 tracking-wide uppercase">3. Type de véhicule</label>
              <div className="relative">
                <select 
                  name="vehicule"
                  value={formData.vehicule}
                  onChange={handleChange}
                  className={`w-full appearance-none px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A00]/50 transition-all text-sm text-gray-700 ${errorMessage && !formData.vehicule ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-[#FF5A00]'}`}
                >
                  <option value="" disabled>Sélectionnez...</option>
                  <option value="Voiture">Voiture</option>
                  <option value="Moto">Moto</option>
                  <option value="Camion">Camion</option>
                  <option value="Autre">Autre</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                  <ChevronDown size={18} />
                </div>
              </div>
            </div>

            {/* TYPE DE PANNE */}
            <div>
              <label className="block text-[11px] font-bold text-gray-500 mb-2 tracking-wide uppercase">4. Type de panne</label>
              <div className="relative">
                <select 
                  name="panne"
                  value={formData.panne}
                  onChange={handleChange}
                  className={`w-full appearance-none px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A00]/50 transition-all text-sm text-gray-700 ${errorMessage && !formData.panne ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-[#FF5A00]'}`}
                >
                  <option value="" disabled>Sélectionnez...</option>
                  <option value="Crevaison">Crevaison</option>
                  <option value="Panne moteur">Panne moteur</option>
                  <option value="Accident">Accident</option>
                  <option value="Autre">Autre</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                  <ChevronDown size={18} />
                </div>
              </div>
            </div>

            {/* HEURE D'INTERVENTION */}
            <div>
              <label className="block text-[11px] font-bold text-gray-500 mb-2 tracking-wide uppercase">5. Heure d'intervention</label>
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

          <hr className="border-gray-100 my-8" />

          {/* FOOTER : RÉSULTAT ET BOUTON */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="w-full md:w-auto flex-grow min-h-[70px] flex items-center">
              {!isCalculated ? (
                <div className="flex items-center gap-3 bg-green-50 border border-green-100 py-3 px-5 rounded-xl">
                  <div className="bg-white text-green-500 p-1.5 rounded-full shadow-sm">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">Tarif 100% transparent</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">Estimation indicative sans engagement</p>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center justify-between w-full md:max-w-md shadow-inner animate-fade-in">
                  <div>
                    <span className="text-[10px] font-bold text-gray-500 tracking-wide uppercase">
                      Estimation ({result.distance} km)
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-3xl font-bold text-[#FF5A00]">{result.price}€</span>
                      <span className="text-xs font-bold text-gray-600">TTC</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="bg-white text-gray-500 text-[10px] font-medium px-3 py-1.5 rounded-md border border-gray-200 shadow-sm block">
                      Prix indicatif
                    </span>
                    <span className="text-[9px] text-gray-400 mt-1.5 block uppercase tracking-wider">Sans engagement</span>
                  </div>
                </div>
              )}
            </div>

            <button 
              type="submit"
              disabled={isAnimating}
              className={`group flex-shrink-0 flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 w-full md:w-auto text-white overflow-hidden relative ${
                isCalculated 
                  ? 'bg-gray-900 hover:bg-gray-800 shadow-lg' 
                  : 'bg-gradient-to-r from-[#FF5A00] to-[#FF7B33] hover:shadow-xl hover:shadow-[#FF5A00]/30 hover:-translate-y-0.5'
              }`}
            >
              {isAnimating ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span className="relative z-10 text-base">
                    {isCalculated ? 'Calculer mon estimation' : 'Calculer mon estimation'}
                  </span>
                  <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
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