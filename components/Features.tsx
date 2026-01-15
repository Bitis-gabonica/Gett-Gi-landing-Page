import React from 'react';

export const Features: React.FC = () => {
  return (
    <section className="py-32 max-w-7xl mx-auto px-6 bg-transparent" id="features">
      <div className="text-center mb-24">
        <span className="text-text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Technologie Avancée</span>
        <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">Fonctionnalités Clés</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        
        {/* Large Card - Map */}
        <div className="md:col-span-2 clean-card bg-white rounded-[2.5rem] p-10 relative overflow-hidden group flex flex-col justify-between">
            <div className="relative z-10 pointer-events-none">
                 <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center mb-6">
                     <span className="material-symbols-outlined text-black">map</span>
                 </div>
                 <h3 className="text-2xl font-bold text-black">Carte Temps Réel</h3>
                 <p className="text-text-secondary text-base mt-2 max-w-sm font-light">Visualisation satellitaire précise. Suivez chaque tête de bétail individuellement.</p>
            </div>
            
            {/* Animated Minimalist Map */}
            <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                <svg className="w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-50 150 C 100 100, 200 250, 350 150 S 550 50, 650 100" stroke="black" strokeWidth="2" strokeDasharray="10 10" fill="none" />
                    <path d="M100 350 C 150 200, 300 100, 450 200 S 550 250, 600 350" stroke="black" strokeWidth="1" fill="none" />
                    <path d="M50 -50 C 100 100, 250 50, 300 150 S 400 350, 450 400" stroke="black" strokeWidth="1.5" strokeDasharray="5 5" fill="none" />

                    <g>
                        <circle r="6" fill="black">
                            <animateMotion dur="20s" repeatCount="indefinite" path="M-50 150 C 100 100, 200 250, 350 150 S 550 50, 650 100" />
                        </circle>
                        <circle r="12" fill="black" opacity="0.2">
                            <animateMotion dur="20s" repeatCount="indefinite" path="M-50 150 C 100 100, 200 250, 350 150 S 550 50, 650 100" />
                        </circle>
                    </g>
                    
                    <g>
                        <circle r="4" fill="black">
                            <animateMotion dur="25s" begin="2s" repeatCount="indefinite" path="M100 350 C 150 200, 300 100, 450 200 S 550 250, 600 350" />
                        </circle>
                    </g>

                    <circle cx="350" cy="150" r="3" fill="black" className="animate-ping" style={{animationDuration: '3s'}} />
                    <circle cx="200" cy="250" r="2" fill="black" />
                    <circle cx="550" cy="50" r="2" fill="black" />
                </svg>
            </div>
        </div>

        {/* Small Card - Geofence */}
        <div className="clean-card bg-white rounded-[2.5rem] p-8 flex flex-col justify-between group relative overflow-hidden">
            <div className="relative z-10">
                 <div className="w-12 h-12 rounded-2xl bg-gray-50 group-hover:bg-white border border-gray-100 flex items-center justify-center transition-colors mb-4">
                     <span className="material-symbols-outlined text-2xl text-black">hexagon</span>
                </div>
                <h3 className="text-xl font-bold text-black">Geofence Virtuel</h3>
                <p className="text-text-secondary text-sm mt-2 font-light">Zones de sécurité dynamiques.</p>
            </div>
            
            <div className="absolute -right-6 -bottom-6 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-[spin_10s_linear_infinite]">
                    <path d="M50 5 L93.3 30 V80 L50 105 L6.7 80 V30 L50 5Z" stroke="black" strokeWidth="2" strokeDasharray="8 4" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-black rounded-full animate-ping"></div>
                </div>
            </div>
        </div>

        {/* Small Card - Alerts */}
        <div className="clean-card bg-white rounded-[2.5rem] p-8 flex flex-col justify-between group relative overflow-hidden">
             <div className="relative z-10">
                 <div className="w-12 h-12 rounded-2xl bg-gray-50 group-hover:bg-white border border-gray-100 flex items-center justify-center transition-colors mb-4">
                     <span className="material-symbols-outlined text-2xl text-black">notifications_active</span>
                </div>
                <h3 className="text-xl font-bold text-black">Alertes</h3>
                <p className="text-text-secondary text-sm mt-2 font-light">SMS & Push instantanés.</p>
            </div>

            <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500 flex items-center justify-center">
                <div className="absolute w-full h-full border border-black rounded-full animate-[ping_3s_linear_infinite]"></div>
                <div className="absolute w-2/3 h-2/3 border border-black rounded-full animate-[ping_3s_linear_infinite_1s]"></div>
                <div className="absolute w-1/3 h-1/3 border border-black rounded-full animate-[ping_3s_linear_infinite_2s]"></div>
                <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
        </div>

        {/* Large Card - Health */}
        <div className="md:col-span-2 clean-card bg-white rounded-[2.5rem] p-10 relative overflow-hidden group flex flex-col justify-between">
             <div className="relative z-20 pointer-events-none">
                 <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center mb-6">
                     <span className="material-symbols-outlined text-black">qr_code_2</span>
                 </div>
                <h3 className="text-2xl font-bold text-black">Identification & Santé</h3>
                <p className="text-text-secondary text-base mt-2 max-w-md font-light">Fiche d'identité numérique pour chaque animal. Suivi des vaccins, âge et historique médical.</p>
            </div>

            <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <div className="w-full h-full grid grid-cols-8 gap-2 p-8">
                    {Array.from({ length: 48 }).map((_, i) => (
                        <div 
                            key={i} 
                            className="bg-black rounded-[1px]"
                            style={{ opacity: Math.random() > 0.5 ? 0.8 : 0.2 }}
                        ></div>
                    ))}
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-black shadow-[0_0_20px_rgba(0,0,0,0.5)] animate-[bounce_3s_infinite_ease-in-out]"></div>
            </div>
        </div>

      </div>
    </section>
  );
};