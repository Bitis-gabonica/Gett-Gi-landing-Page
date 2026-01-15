import React from 'react';

export const Technology: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section matching Features.tsx format */}
        <div className="text-center mb-24">
           <span className="text-text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Adapté au Contexte</span>
           <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">Conçu pour le Sénégal</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
            {/* Card 1: Connectivité */}
            <div className="clean-card p-12 rounded-[2.5rem] relative overflow-hidden group flex flex-col justify-between h-full bg-white border border-gray-200 hover:border-black/30 transition-all duration-500">
                 <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center mb-8 shadow-lg shadow-black/10 group-hover:scale-110 transition-transform duration-300">
                         <span className="material-symbols-outlined text-white text-2xl">cell_tower</span>
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-4">Connectivité Hybride</h3>
                    <p className="text-text-secondary font-light leading-relaxed mb-12 relative z-10">
                        Notre technologie bascule intelligemment entre le réseau GSM local et les fréquences radio longue portée (LoRaWAN) pour assurer une couverture continue, même dans les zones les plus reculées du Ferlo ou de la Casamance.
                    </p>
                 </div>
                 
                 {/* Illustration: Connectivity */}
                 <div className="absolute right-[-50px] bottom-[-50px] w-80 h-80 overflow-visible pointer-events-none opacity-10 group-hover:opacity-20 transition-all duration-700">
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-[spin_60s_linear_infinite]">
                        <circle cx="100" cy="100" r="99.5" stroke="black" strokeWidth="0.5" strokeDasharray="4 4" />
                        <circle cx="100" cy="100" r="79.5" stroke="black" strokeWidth="1" />
                        <circle cx="100" cy="100" r="59.5" stroke="black" strokeWidth="0.5" strokeDasharray="8 8" />
                        <circle cx="100" cy="100" r="39.5" stroke="black" strokeWidth="1.5" />
                        <circle cx="100" cy="100" r="19.5" stroke="black" strokeWidth="0.5" />
                        <circle cx="100" cy="20" r="3" fill="black" />
                        <circle cx="180" cy="100" r="3" fill="black" />
                        <circle cx="20" cy="100" r="3" fill="black" />
                    </svg>
                 </div>

                 <div className="absolute bottom-10 right-10 flex gap-1.5 items-end opacity-20 group-hover:opacity-50 transition-all duration-500">
                    <div className="w-2 h-3 bg-black rounded-sm animate-[pulse_1.5s_ease-in-out_infinite]"></div>
                    <div className="w-2 h-6 bg-black rounded-sm animate-[pulse_1.5s_ease-in-out_infinite_100ms]"></div>
                    <div className="w-2 h-9 bg-black rounded-sm animate-[pulse_1.5s_ease-in-out_infinite_200ms]"></div>
                    <div className="w-2 h-12 bg-black rounded-sm animate-[pulse_1.5s_ease-in-out_infinite_300ms]"></div>
                 </div>
            </div>

            {/* Card 2: Interface & Culture */}
            <div className="clean-card p-12 rounded-[2.5rem] relative overflow-hidden group flex flex-col justify-between h-full bg-white border border-gray-200 hover:border-black/30 transition-all duration-500">
                 <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center mb-8 shadow-lg shadow-black/10 group-hover:scale-110 transition-transform duration-300">
                         <span className="material-symbols-outlined text-white text-2xl">translate</span>
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-4">Interface Locale</h3>
                    <p className="text-text-secondary font-light leading-relaxed mb-12 relative z-10">
                        Une application pensée pour tous. Disponible en Wolof, Pulaar et Français, avec des interfaces vocales et visuelles intuitives pour une adoption immédiate par les éleveurs.
                    </p>
                 </div>

                 <div className="absolute inset-0 pointer-events-none overflow-hidden">
                     <div className="absolute bottom-0 left-0 w-full h-32 opacity-[0.07] group-hover:opacity-[0.15] transition-opacity duration-500">
                        <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
                            <pattern id="african-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="black" strokeWidth="1"/>
                                <circle cx="20" cy="20" r="2" fill="black"/>
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#african-pattern)"/>
                        </svg>
                     </div>
                     
                     <div className="absolute bottom-6 left-8 right-8 flex justify-between items-end opacity-10 group-hover:opacity-30 transition-all duration-500">
                         <div className="flex gap-1">
                             <div className="w-2 h-2 rounded-full bg-black"></div>
                             <div className="w-2 h-2 rounded-full bg-black"></div>
                             <div className="w-2 h-2 rounded-full bg-black"></div>
                         </div>
                         <div className="flex gap-1 items-center h-12">
                             {[...Array(8)].map((_, i) => (
                                 <div 
                                    key={i} 
                                    className="w-1 bg-black rounded-full animate-[wave_1s_ease-in-out_infinite]"
                                    style={{ 
                                        height: `${Math.random() * 80 + 20}%`,
                                        animationDelay: `${i * 0.1}s` 
                                    }}
                                 ></div>
                             ))}
                         </div>
                     </div>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};