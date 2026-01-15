import React from 'react';

export const Pricing: React.FC = () => {
  return (
    <section className="py-32 border-t border-gray-100/50 bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">Un modèle simple et transparent</h2>
            <p className="text-xl text-text-secondary font-light">Des solutions adaptées à chaque échelle.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Standard Plan */}
            <div className="clean-card rounded-[2.5rem] p-10 bg-white flex flex-col items-start text-left hover:border-black transition-all duration-300 h-full group">
                <div className="mb-2">
                    <span className="text-sm font-bold text-black uppercase tracking-wider">Kit Éleveur</span>
                </div>
                <div className="text-4xl font-bold text-black mb-4 tracking-tight">Standard</div>
                <p className="text-sm text-text-secondary mb-10 font-light leading-relaxed">
                    Pour les éleveurs individuels et les petits troupeaux.
                </p>
                
                <ul className="space-y-5 mb-10 w-full flex-1">
                    {[
                        "Colliers GPS (à l'achat)",
                        "Abonnement mensuel réduit",
                        "Application mobile complète",
                        "Support par téléphone"
                    ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-black text-lg shrink-0 font-light">check</span>
                            <span className="text-sm text-text-secondary group-hover:text-black transition-colors font-medium">{feature}</span>
                        </li>
                    ))}
                </ul>

                <button className="w-full py-4 rounded-full border border-gray-200 hover:border-black hover:bg-gray-50 text-black transition-all text-sm font-bold mt-auto">
                    Contacter l'équipe
                </button>
            </div>

            {/* Custom Plan */}
            <div className="clean-card rounded-[2.5rem] p-10 bg-white relative overflow-hidden flex flex-col items-start text-left hover:border-black transition-all duration-300 h-full ring-1 ring-black/5 group">
                <div className="absolute top-8 right-8 bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wider">
                    Populaire
                </div>
                
                <div className="mb-2">
                    <span className="text-sm font-bold text-black uppercase tracking-wider">Partenaires B2B / B2G</span>
                </div>
                <div className="text-4xl font-bold text-black mb-4 tracking-tight">Sur Mesure</div>
                <p className="text-sm text-text-secondary mb-10 font-light leading-relaxed">
                    Pour les grandes organisations et institutions.
                </p>

                <ul className="space-y-5 mb-10 w-full flex-1">
                    {[
                        "Déploiement massif",
                        "Intégration API personnalisée",
                        "Formation des agents terrain",
                        "Account manager dédié"
                    ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                             <span className="material-symbols-outlined text-black text-lg shrink-0 font-light">check</span>
                             <span className="text-sm text-text-secondary group-hover:text-black transition-colors font-medium">{feature}</span>
                        </li>
                    ))}
                </ul>

                <button className="w-full py-4 rounded-full bg-black text-white hover:bg-gray-800 transition-all text-sm font-bold mt-auto border border-black">
                    Contacter l'équipe
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};