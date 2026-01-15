import React from 'react';
import { PhoneMockup } from './PhoneMockup';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-32 overflow-hidden min-h-screen flex items-center bg-transparent">
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="flex flex-col gap-8">
          {/* Author Badge */}
          <div className="flex flex-wrap gap-2 animate-fade-in-up">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 bg-white/50 backdrop-blur-md shadow-sm">
              <span className="material-symbols-outlined text-black text-[18px]">person</span>
              <span className="text-sm font-bold tracking-wide text-black">by Abdoulaye Ly</span>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-black">
              GETT GI <br />
              <span className="text-gray-300">sécurise</span> <br />
              votre bétail.
            </h1>
            <p className="text-xl text-text-secondary max-w-lg font-light leading-relaxed">
              La première plateforme IoT de localisation, alertes et gestion de troupeaux conçues spécifiquement pour la robustesse du terrain au Sénégal.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <a 
              href="#contact"
              className="flex items-center justify-center bg-transparent border border-black text-black font-bold h-14 px-10 rounded-full transition-all hover:bg-black hover:text-white hover:shadow-xl hover:-translate-y-1"
            >
              Voir le produit
            </a>
          </div>
        </div>

        {/* Mockup */}
        <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative">
                {/* Decorative subtle static blur behind phone for depth */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/40 rounded-full blur-3xl -z-10"></div>
                <PhoneMockup />
            </div>
        </div>
      </div>
    </section>
  );
};