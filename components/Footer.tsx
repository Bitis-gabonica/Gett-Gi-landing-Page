import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 border-t border-gray-200/60 bg-white/40 backdrop-blur-md mt-20">
      <div className="max-w-[95%] mx-auto px-6 flex flex-col">
        
        {/* Top Label - Minimalist Centered */}
        <div className="w-full flex justify-center mb-4">
           <span className="text-xs font-medium text-gray-500 tracking-wide">Innovation au Sénégal</span>
        </div>

        {/* Giant Text - Replacing Logo */}
        <div className="w-full flex justify-center overflow-hidden">
            <h1 className="text-[18vw] leading-[0.8] font-bold tracking-tighter text-black text-center select-none transform translate-y-2">
              GETT GI
            </h1>
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end md:items-center mt-12 md:mt-16 gap-6 pt-8 border-t border-gray-200/30">
            <div className="text-sm font-bold text-black flex flex-col">
                <span>Gett Gi © 2024</span>
                <span className="text-[10px] text-gray-400 font-normal mt-0.5">Dakar, Sénégal</span>
            </div>

            <div className="flex gap-8 text-sm font-medium text-gray-500">
                <a href="#" className="hover:text-black transition-colors">À propos</a>
                <a href="#" className="hover:text-black transition-colors">Confidentialité</a>
                <a href="#" className="hover:text-black transition-colors">Termes</a>
            </div>
        </div>

      </div>
    </footer>
  );
};