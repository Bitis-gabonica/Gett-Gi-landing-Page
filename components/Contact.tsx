import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-transparent" id="contact">
      <div className="max-w-7xl mx-auto">
         {/* Container principal style iOS / Minimaliste - Mise à jour: Fond blanc et bordure */}
         <div className="bg-white border border-gray-200 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
            
            <div className="grid lg:grid-cols-2 gap-16 items-start relative z-10">
               {/* Colonne Gauche : Titre et Info Principale */}
               <div className="flex flex-col h-full justify-between gap-10">
                  <div>
                     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-8 shadow-sm">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-black">Disponible maintenant</span>
                     </div>
                     
                     <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight leading-[1.05] mb-6">
                        Envoyez-nous <br/> un message.
                     </h2>
                     <p className="text-lg text-text-secondary font-light max-w-md leading-relaxed">
                        Vous souhaitez équiper votre troupeau ou devenir partenaire ? Notre équipe à Dakar est à votre écoute.
                     </p>
                  </div>

                  <div className="hidden lg:block">
                     <p className="text-sm text-text-secondary mb-2">Email direct</p>
                     <a href="mailto:theabdoulay@gmail.com" className="text-2xl font-bold text-black hover:opacity-70 transition-opacity underline decoration-1 underline-offset-8">
                        theabdoulay@gmail.com
                     </a>
                  </div>
               </div>

               {/* Colonne Droite : Grille de Cartes Contact */}
               <div className="grid sm:grid-cols-2 gap-4">
                  
                  {/* Carte Email */}
                  <div className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-black transition-all duration-300 group shadow-sm hover:shadow-md">
                     <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-black transition-colors duration-300 border border-gray-100">
                        <span className="material-symbols-outlined text-black group-hover:text-white text-lg font-light">mail</span>
                     </div>
                     <h3 className="font-bold text-black mb-1">Email</h3>
                     <p className="text-xs text-text-secondary mb-6 font-medium">Réponse sous 24h</p>
                     <a href="mailto:theabdoulay@gmail.com" className="text-sm font-bold text-black hover:underline block break-all">
                        theabdoulay@gmail.com
                     </a>
                  </div>

                  {/* Carte Téléphone */}
                  <div className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-black transition-all duration-300 group shadow-sm hover:shadow-md">
                     <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-black transition-colors duration-300 border border-gray-100">
                        <span className="material-symbols-outlined text-black group-hover:text-white text-lg font-light">call</span>
                     </div>
                     <h3 className="font-bold text-black mb-1">Téléphone</h3>
                     <p className="text-xs text-text-secondary mb-6 font-medium">Lundi - Samedi</p>
                     <a href="tel:+221777778576" className="text-sm font-bold text-black hover:underline block">
                        +221 77 777 85 76
                     </a>
                  </div>

                   {/* Carte WhatsApp */}
                   <div className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-black transition-all duration-300 group shadow-sm hover:shadow-md">
                     <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-black transition-colors duration-300 border border-gray-100">
                        <span className="material-symbols-outlined text-black group-hover:text-white text-lg font-light">chat</span>
                     </div>
                     <h3 className="font-bold text-black mb-1">WhatsApp</h3>
                     <p className="text-xs text-text-secondary mb-6 font-medium">Chat rapide</p>
                     <a href="https://wa.me/221777778576" className="text-sm font-bold text-black hover:underline flex items-center gap-1">
                        Démarrer le chat <span className="material-symbols-outlined text-sm">arrow_outward</span>
                     </a>
                  </div>

                  {/* Carte Bureau */}
                  <div className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-black transition-all duration-300 group shadow-sm hover:shadow-md">
                     <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-black transition-colors duration-300 border border-gray-100">
                        <span className="material-symbols-outlined text-black group-hover:text-white text-lg font-light">location_on</span>
                     </div>
                     <h3 className="font-bold text-black mb-1">Bureau</h3>
                     <p className="text-xs text-text-secondary mb-6 font-medium">Siège Social</p>
                     <span className="text-sm font-bold text-black block">
                        Dakar, Sénégal
                     </span>
                  </div>

               </div>
            </div>
         </div>
      </div>
    </section>
  );
};