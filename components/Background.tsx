import React, { useEffect, useRef } from 'react';

export const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const scrollY = window.scrollY;

      if (canvas.width !== width || canvas.height !== height) {
         canvas.width = width;
         canvas.height = height;
      }

      ctx.clearRect(0, 0, width, height);
      
      // Espacement augmenté pour avoir "moins de points" (35 au lieu de 22)
      const gap = 35; 
      const rows = Math.ceil(height / gap) + 4;
      const cols = Math.ceil(width / gap) + 4;

      ctx.fillStyle = '#000000';

      for (let ix = 0; ix < cols; ix++) {
        for (let iy = 0; iy < rows; iy++) {
           const x = ix * gap;
           const y = iy * gap;

           // Fréquences pour des vagues larges et douces (Low frequency)
           const freqX = ix * 0.12;
           const freqY = iy * 0.12;
           
           // Ralentissement du temps pour un effet majestueux
           const t = time * 0.4; 
           const s = scrollY * 0.0005;

           // Calcul de la vague (Wave Function style "Sheet")
           // Combinaison de Sinus et Cosinus pour créer des bosses et des creux larges
           const wave = Math.sin(freqX + t + s) * Math.cos(freqY + t * 0.8);
           const secondaryWave = Math.sin(freqX * 0.5 - t) * 0.5;

           const magnitude = wave + secondaryWave;

           // Amplitude très forte pour faire des "grosses vagues" (65px de déplacement)
           const displacementY = magnitude * 65;
           
           // Léger déplacement X pour l'effet organique
           const displacementX = Math.cos(freqY + t) * 10;

           const finalX = x + displacementX;
           const finalY = y + displacementY;

           // POINTS "BIEN NOIR MAIS PETIT"
           
           // Taille petite et constante pour l'élégance
           const radius = 1.3; 
           
           // Opacité plus élevée (points bien noirs)
           // On garde une légère variation pour la profondeur (0.4 à 0.8)
           // C'est beaucoup plus opaque qu'avant (c'était ~0.08)
           const alpha = 0.4 + (Math.max(0, magnitude) * 0.4);

           ctx.globalAlpha = Math.min(0.85, alpha); // Max opacity cap
           ctx.beginPath();
           ctx.arc(finalX, finalY, radius, 0, Math.PI * 2);
           ctx.fill();
        }
      }

      time += 0.02; // Vitesse d'animation
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 bg-white pointer-events-none" />;
};