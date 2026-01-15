import React from 'react';

export const PhoneMockup: React.FC = () => {
  return (
    <div className="relative w-[320px] h-[640px] border border-gray-200 rounded-[3.5rem] bg-white overflow-hidden z-20 shadow-2xl shadow-black/5">
      {/* Phone Bezel */}
      <div className="absolute inset-0 border-[8px] border-black rounded-[3.5rem] pointer-events-none z-50"></div>
      
      {/* Screen Content */}
      <div className="w-full h-full bg-[#F5F5F7] relative flex flex-col">
        {/* Status Bar */}
        <div className="h-14 w-full flex justify-between items-center px-8 pt-4 z-30 select-none">
          <div className="text-xs text-black font-medium tracking-wide">9:41</div>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-black"></div>
            <div className="w-3 h-3 rounded-full bg-black"></div>
          </div>
        </div>

        {/* App Content */}
        <div className="flex-1 relative bg-white overflow-hidden">
          {/* Map Layer */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdIHtBlIQAZWWt4vwW4BLo60A0l_KMcH_5XUDymdCk-n2_VzaXQ_7s7AlnTKhcOzNMjXKj-oHKYjxOeutSenI-hGrvfd127qUv4FqZf-1VgimfoVKbw8q4IP-7iJVRlT3d74VSQ_RjrqWrKqPKck1-ojZe9WjdiPPOo-GYPcLXRdtWwfUhX6tbNm31Ys0dPtxtUFxEbY89N6svt2x4g7IcfOedZ03FUv37CT7Q01hzeeZCwgIGfzUc0EMzEwNH9olh2--25lkNvO8A')",
              filter: "grayscale(100%) contrast(1.1) brightness(1.1)"
            }}
          ></div>
          
          {/* Gradients for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/10 pointer-events-none"></div>

          {/* Map Elements Layer */}
          <div className="absolute inset-0">
             
             {/* Geofence - Centered roughly where the herd is */}
             <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-dashed border-black/40 rounded-full animate-[spin_60s_linear_infinite]"></div>
             <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-black/[0.02] rounded-full"></div>

             {/* Animated Animals - Drifting dots */}
             {[
                { t: '35%', l: '45%', d: '3s' },
                { t: '42%', l: '55%', d: '4s' },
                { t: '38%', l: '60%', d: '5s' },
                { t: '45%', l: '40%', d: '3.5s' },
                { t: '30%', l: '50%', d: '4.5s' },
                { t: '50%', l: '50%', d: '6s' },
             ].map((pos, i) => (
                <div 
                    key={i}
                    className="absolute w-2 h-2 bg-white border border-black rounded-full shadow-sm"
                    style={{ 
                        top: pos.t, 
                        left: pos.l,
                        animation: `bounce ${pos.d} infinite ease-in-out alternate` 
                    }}
                ></div>
             ))}

             {/* Main Marker (Active/Selected) */}
             <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                    <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center animate-ping-slow absolute -top-3.5 -left-3.5 opacity-50"></div>
                    <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center shadow-lg relative z-10 border-2 border-white">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Info Window */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md border border-gray-100 rounded-xl p-3 w-40 shadow-lg text-center">
                      <div className="text-[9px] text-gray-400 uppercase font-bold tracking-widest mb-1">Troupeau Alpha</div>
                      <div className="text-xs font-bold text-black flex items-center justify-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                        Zone Sûre
                      </div>
                    </div>
                </div>
             </div>
          </div>

          {/* Bottom Card */}
          <div className="absolute bottom-0 w-full p-6 bg-white/90 backdrop-blur-xl border-t border-gray-100 rounded-t-[2.5rem]">
            <div className="flex justify-between items-end mb-5">
              <div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Statut Actuel</div>
                <div className="text-xl font-bold text-black tracking-tight">Sécurisé</div>
              </div>
              <div className="text-black font-mono text-[10px] border border-gray-200 rounded-full px-3 py-1 bg-white shadow-sm flex items-center gap-1">
                <span className="w-1 h-3 bg-black rounded-full"></span> 98%
              </div>
            </div>
            
            <div className="space-y-2">
                <div className="flex justify-between text-[10px] text-gray-400 font-medium tracking-wide">
                    <span>Signal GPS</span>
                    <span>Excellent</span>
                </div>
                <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[98%] bg-black rounded-full"></div>
                </div>
            </div>
            
             {/* Action Buttons Row */}
             <div className="grid grid-cols-2 gap-3 mt-6">
                <button className="h-10 rounded-xl bg-black text-white text-xs font-bold flex items-center justify-center hover:bg-gray-800 transition-colors">
                    Suivre
                </button>
                <button className="h-10 rounded-xl border border-gray-200 text-black text-xs font-bold flex items-center justify-center hover:bg-gray-50 transition-colors">
                    Historique
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};