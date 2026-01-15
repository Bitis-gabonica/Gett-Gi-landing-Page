import React from 'react';

const impactItems = [
  { 
    title: "Sécurisation du patrimoine", 
    desc: "Réduction drastique des vols et des pertes grâce à la surveillance continue et aux mécanismes d'alerte rapide." 
  },
  { 
    title: "Données fiables pour les politiques", 
    desc: "Agrégation de statistiques précises à l'échelle nationale pour orienter efficacement les décisions publiques et sanitaires." 
  },
  { 
    title: "Système National d'Identité",
    desc: "Permet la création d'un système national d'identité et de traçabilité du bétail pour une gestion transparente du cheptel."
  },
  { 
    title: "Modernisation de l’élevage", 
    desc: "Une transition numérique douce qui intègre les technologies IoT avancées aux pratiques pastorales traditionnelles." 
  },
  { 
    title: "Inclusion des petits éleveurs", 
    desc: "Des solutions accessibles financièrement et techniquement, conçues pour ne laisser aucun acteur rural de côté." 
  }
];

export const Impact: React.FC = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative">
        
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
           <span className="text-text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Impact National</span>
           <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-6 leading-tight">
             Un impact structuré pour <br className="hidden md:block" /> l’élevage sénégalais
           </h2>
           <div className="inline-block px-6 py-2 rounded-full bg-white/80 border border-gray-200/60 backdrop-blur-sm">
             <p className="text-sm text-text-secondary font-medium">
               Outil utile dans les stratégies nationales d’agriculture et d’élevage.
             </p>
           </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>
          
          <div className="flex flex-col">
            {impactItems.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center w-full relative mb-6 md:mb-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Card Side */}
                <div className="flex-1 w-full md:w-1/2 md:px-12 py-4">
                  <div className={`clean-card p-6 rounded-3xl bg-white hover:border-black transition-all duration-300 relative group w-full ${index % 2 !== 0 ? 'md:text-right' : 'text-left'}`}>
                     {/* Watermark Number */}
                     <span className={`absolute top-4 text-4xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors pointer-events-none -z-0 ${index % 2 !== 0 ? 'left-6' : 'right-6'}`}>
                        0{index + 1}
                     </span>
                     <h3 className="text-lg font-bold text-black mb-2 relative z-10">{item.title}</h3>
                     <p className="text-sm text-text-secondary font-light leading-relaxed relative z-10">{item.desc}</p>
                  </div>
                </div>

                {/* Center Marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full border border-gray-300 flex items-center justify-center z-20 shadow-sm relative">
                        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    </div>
                </div>

                {/* Empty Spacer Side */}
                <div className="flex-1 w-full md:w-1/2 hidden md:block"></div>
              
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};