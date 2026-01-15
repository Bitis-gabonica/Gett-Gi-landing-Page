import React from 'react';

const audience = [
    { 
        num: '01', 
        title: 'Éleveurs', 
        desc: 'Protégez votre patrimoine contre le vol et les pertes. Suivez chaque animal en temps réel.', 
        checks: ['Protection anti-vol', 'Retrouver les égarés', 'Suivi de transhumance'] 
    },
    { 
        num: '02', 
        title: 'Coopératives / ONG', 
        desc: 'Gérez de grands cheptels communautaires et créez de la valeur pour vos membres.', 
        checks: ['Vue d\'ensemble multi-troupeaux', 'Données pour financeurs', 'Rapports automatisés'] 
    },
    { 
        num: '03', 
        title: 'Institutions', 
        desc: 'Modernisez le secteur de l\'élevage avec des données fiables à l\'échelle nationale.', 
        checks: ['Statistiques nationales', 'Contrôle sanitaire', 'Intégration API'] 
    },
];

export const Audience: React.FC = () => {
  return (
    <section className="py-32 bg-transparent relative" id="pour-qui">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-24">
           <span className="text-text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Impact Ciblé</span>
           <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">Pour chaque acteur</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 bg-white/80 backdrop-blur-sm p-8 rounded-[3rem] border border-gray-100">
            {audience.map((item) => (
                <div key={item.num} className="flex flex-col gap-6 border-l border-gray-300 pl-8 hover:border-black transition-colors duration-500 group">
                    <span className="text-black/30 group-hover:text-black transition-colors text-6xl font-bold tracking-tighter opacity-20 group-hover:opacity-100">{item.num}</span>
                    <h3 className="text-3xl font-bold text-black -mt-4">{item.title}</h3>
                    <p className="text-text-secondary text-base font-light leading-relaxed mb-4 min-h-[60px]">{item.desc}</p>
                    <ul className="space-y-4 text-sm text-text-secondary font-medium mt-auto">
                        {item.checks.map(check => (
                            <li key={check} className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-[10px] text-white font-bold">check</span>
                                </div>
                                <span className="text-black">{check}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};