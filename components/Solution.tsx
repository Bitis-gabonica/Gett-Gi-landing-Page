import React from 'react';

export const Solution: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-transparent" id="produit">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold tracking-tight mb-6 text-black">Une Solution Intégrale</h2>
          <p className="text-xl text-text-secondary font-light">Trois piliers technologiques pour une gestion moderne.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Dashed Connector Line */}
          <div className="hidden md:block absolute top-20 left-[16%] right-[16%] h-px bg-transparent border-t border-dashed border-gray-300 z-0"></div>

          <div className="relative z-10 flex flex-col items-center text-center group cursor-default">
            <div className="w-40 h-40 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-10 group-hover:border-black transition-all duration-300 shadow-sm relative z-10">
              <span className="text-5xl font-bold text-gray-300 group-hover:text-black transition-colors">01</span>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Localiser</h3>
            <p className="text-base text-text-secondary max-w-xs leading-relaxed">Suivi GPS hybride temps réel sur carte interactive. Précision de 5 mètres, partout au Sénégal.</p>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center group cursor-default">
            <div className="w-40 h-40 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-10 group-hover:border-black transition-all duration-300 shadow-sm relative z-10">
              <span className="text-5xl font-bold text-gray-300 group-hover:text-black transition-colors">02</span>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Sécuriser</h3>
            <p className="text-base text-text-secondary max-w-xs leading-relaxed">Geofencing intelligent. Recevez des alertes SMS/App immédiates si un animal quitte sa zone définie.</p>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center group cursor-default">
            <div className="w-40 h-40 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-10 group-hover:border-black transition-all duration-300 shadow-sm relative z-10">
              <span className="text-5xl font-bold text-gray-300 group-hover:text-black transition-colors">03</span>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Identifier</h3>
            <p className="text-base text-text-secondary max-w-xs leading-relaxed">Identification claire et fiable de chaque animal. Fiches individuelles avec informations essentielles et historique associé.</p>
          </div>
        </div>
      </div>
    </section>
  );
};