import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* 
        Image de l'icône (Tête de taureau) 
        Veuillez nommer votre fichier image 'logo-icon.png' et le placer dans le dossier public
      */}
      <img 
        src="/logo-icon.png" 
        alt="GETT GI Icon" 
        className="h-12 w-auto object-contain"
      />
      
      {/* 
        Image du texte (GETT GI)
        Veuillez nommer votre fichier image 'logo-text.png' et le placer dans le dossier public
      */}
      <img 
        src="/logo-text.png" 
        alt="GETT GI" 
        className="h-5 w-auto object-contain mt-1" 
      />
    </div>
  );
};