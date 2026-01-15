import React from 'react';

const steps = [
    { num: 1, title: 'Équipez votre troupeau', desc: 'Installez les colliers connectés GETT GI. Robustes, étanches et dotés d\'une autonomie longue durée solaire.' },
    { num: 2, title: 'Les données sont transmises', desc: 'Le réseau IoT basse consommation envoie les données de position et de santé vers nos serveurs sécurisés.' },
    { num: 3, title: 'Visualisez et agissez', desc: 'Connectez-vous à l\'application mobile ou web pour tout surveiller en temps réel.' },
];

export const HowItWorks: React.FC = () => {
    return (
        <section className="py-32 bg-transparent border-y border-gray-100/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-12 text-black tracking-tight">Comment ça marche ?</h2>
                        <div className="space-y-16 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gray-200"></div>
                            
                            {steps.map((step) => (
                                <div key={step.num} className="relative pl-16 group cursor-default">
                                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border border-gray-200 text-text-secondary flex items-center justify-center text-sm font-bold group-hover:border-black group-hover:text-black transition-all duration-300 shadow-sm">
                                        {step.num}
                                    </div>
                                    <h4 className="text-2xl font-bold text-black mb-3 group-hover:translate-x-1 transition-transform">{step.title}</h4>
                                    <p className="text-text-secondary text-base font-light leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Phone Mockup Container */}
                    <div className="flex justify-center items-center py-10 lg:py-0">
                         {/* Phone Body */}
                         <div className="relative w-[340px] h-[680px] bg-white rounded-[3rem] border-[8px] border-black shadow-2xl overflow-hidden ring-1 ring-gray-200">
                            
                            {/* Screen Content */}
                            <div className="w-full h-full bg-[#FAFAFA] relative font-sans flex flex-col">
                                
                                {/* Map Background Area (Full Height underneath) */}
                                <div className="absolute inset-0 z-0">
                                    {/* Generic Map Pattern Image - Grayscale */}
                                    <div 
                                        className="w-full h-full bg-cover bg-center opacity-40 grayscale contrast-125"
                                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdIHtBlIQAZWWt4vwW4BLo60A0l_KMcH_5XUDymdCk-n2_VzaXQ_7s7AlnTKhcOzNMjXKj-oHKYjxOeutSenI-hGrvfd127qUv4FqZf-1VgimfoVKbw8q4IP-7iJVRlT3d74VSQ_RjrqWrKqPKck1-ojZe9WjdiPPOo-GYPcLXRdtWwfUhX6tbNm31Ys0dPtxtUFxEbY89N6svt2x4g7IcfOedZ03FUv37CT7Q01hzeeZCwgIGfzUc0EMzEwNH9olh2--25lkNvO8A')" }}
                                    ></div>
                                    
                                    {/* Animated Dots & Geofence Overlay */}
                                    <div className="absolute inset-0">
                                        {/* Geofence Circle (Dashed Black) */}
                                        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-dashed border-black/60 rounded-full pointer-events-none"></div>
                                        
                                        {/* Home Icon (Black) */}
                                        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 shadow-sm">
                                            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center border-2 border-white">
                                                <span className="material-symbols-outlined text-white text-sm">home</span>
                                            </div>
                                        </div>

                                        {/* Animated Animals (White dots with Black border) */}
                                        {[
                                            { t: '10%', l: '20%', d: '4s' },
                                            { t: '15%', l: '60%', d: '7s' },
                                            { t: '40%', l: '80%', d: '5s' },
                                            { t: '50%', l: '25%', d: '6s' },
                                            { t: '25%', l: '30%', d: '8s' },
                                            { t: '30%', l: '70%', d: '9s' },
                                            { t: '45%', l: '50%', d: '10s' },
                                        ].map((pos, i) => (
                                            <div 
                                                key={i}
                                                className="absolute w-3 h-3 bg-white border border-black rounded-full shadow-sm animate-bounce"
                                                style={{ 
                                                    top: pos.t, 
                                                    left: pos.l,
                                                    animation: `bounce ${pos.d} infinite ease-in-out alternate` 
                                                }}
                                            ></div>
                                        ))}
                                    </div>
                                </div>

                                {/* Top UI Elements - Minimal */}
                                <div className="absolute top-0 w-full px-5 pt-12 pb-4 flex justify-between items-start z-10 pointer-events-none">
                                    <button className="w-10 h-10 bg-white rounded-full shadow-none border border-gray-200 flex items-center justify-center">
                                        <div className="relative">
                                            <span className="material-symbols-outlined text-black text-xl">notifications</span>
                                            <div className="absolute top-0 right-0 w-2 h-2 bg-black rounded-full border border-white"></div>
                                        </div>
                                    </button>
                                    <button className="w-10 h-10 bg-white rounded-full shadow-none border border-gray-200 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-black text-xl">crop_free</span>
                                    </button>
                                </div>

                                {/* Bottom Sheet UI - Monochrome */}
                                <div className="mt-auto relative z-20 bg-white rounded-t-[2rem] border-t border-gray-200 h-[55%] flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                                    
                                    {/* Handle */}
                                    <div className="w-full flex justify-center pt-3 pb-1">
                                        <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
                                    </div>
                                    
                                    <div className="px-6 pb-4">
                                        {/* Header Row */}
                                        <div className="flex items-center justify-between mb-6 mt-2">
                                            <h3 className="text-xl font-bold text-black tracking-tight">Mes animaux (10)</h3>
                                            <div className="flex gap-2">
                                                <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                                                    <span className="material-symbols-outlined text-black">search</span>
                                                </button>
                                                <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center shadow-sm">
                                                    <span className="material-symbols-outlined text-white">add</span>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Filters Row */}
                                        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 mb-2">
                                            <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                                                 <span className="material-symbols-outlined text-white text-lg">menu</span>
                                            </button>
                                            <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 text-gray-400 hover:text-black hover:border-black transition-colors">
                                                 <span className="material-symbols-outlined text-lg">male</span>
                                            </button>
                                            <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 text-gray-400 hover:text-black hover:border-black transition-colors">
                                                 <span className="material-symbols-outlined text-lg">female</span>
                                            </button>
                                            <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 text-gray-400 hover:text-black hover:border-black transition-colors">
                                                 <span className="material-symbols-outlined text-lg">location_on</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* List Items - Black & White */}
                                    <div className="flex-1 overflow-y-auto px-2 pb-6 space-y-1">
                                        
                                        {/* Item 1 */}
                                        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-2xl transition-colors group cursor-pointer">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white group-hover:border-black transition-colors">
                                                    <span className="material-symbols-outlined text-black text-sm">female</span>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-bold text-black text-sm">ovin_n1</span>
                                                        <span className="material-symbols-outlined text-black text-[16px]">battery_3_bar</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                                                <span className="material-symbols-outlined text-sm">location_on</span>
                                            </div>
                                        </div>

                                        {/* Item 2 */}
                                        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-2xl transition-colors group cursor-pointer">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white group-hover:border-black transition-colors">
                                                    <span className="material-symbols-outlined text-black text-sm">male</span>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-bold text-black text-sm">caprin_n2</span>
                                                        <span className="material-symbols-outlined text-black text-[16px]">battery_full</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                                                <span className="material-symbols-outlined text-sm">location_on</span>
                                            </div>
                                        </div>

                                        {/* Item 3 */}
                                        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-2xl transition-colors group cursor-pointer">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white group-hover:border-black transition-colors">
                                                    <span className="material-symbols-outlined text-black text-sm">female</span>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-bold text-black text-sm">bovin_n3</span>
                                                        <span className="material-symbols-outlined text-black text-[16px]">battery_5_bar</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                                                <span className="material-symbols-outlined text-sm">location_on</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};