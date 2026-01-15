import React from 'react';

const challenges = [
  { icon: 'warning', title: 'Vols de bétail', desc: 'Protection proactive contre les vols récurrents qui menacent l\'économie rurale.' },
  { icon: 'explore_off', title: 'Pertes en transhumance', desc: 'Localisation précise lors des déplacements sur de longues distances en zone blanche.' },
  { icon: 'monitor_heart', title: 'Suivi sanitaire', desc: 'Carnet de santé numérique intégré pour prévenir les épidémies et suivre les vaccins.' },
  { icon: 'fingerprint', title: 'Identification du bétail', desc: 'Identité numérique unique et infalsifiable pour chaque animal. Cet état civil facilite l\'accès au crédit et garantit la propriété.' },
];

export const Challenges: React.FC = () => {
  return (
    <section className="py-32 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight text-black">Les Défis du Terrain</h2>
            <p className="text-lg text-text-secondary max-w-md font-light">Répondre aux problèmes critiques des éleveurs, des coopératives et des institutions sénégalaises.</p>
          </div>
          <div className="h-px bg-gray-200 flex-1 ml-10 hidden md:block"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((item, idx) => (
            <div key={idx} className="clean-card bg-white/80 backdrop-blur-sm p-8 rounded-3xl group cursor-default">
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 border border-gray-100 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-black group-hover:text-white">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};