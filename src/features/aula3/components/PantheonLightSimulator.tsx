import React, { useState } from 'react';
import { Sun, Clock, Sparkles } from 'lucide-react';

export const PantheonLightSimulator: React.FC = () => {
  const [timeOfDay, setTimeOfDay] = useState<'morning' | 'noon' | 'afternoon'>('noon');

  const lightStyles = {
    morning: {
      beamTransform: 'rotate(-28deg) translate(20px, 30px)',
      beamOpacity: 0.85,
      beamColor: 'from-amber-300/50 via-amber-200/30 to-transparent',
      spotlightPosition: 'left-[22%] top-[65%]',
      label: 'Manhã (09:00) · Feixe oblíquo atinge os nichos ocidentais',
      desc: 'O raio solar desce em ângulo agudo, iluminando as esculturas dos deuses dispostas nos nichos da parede ocidental.',
    },
    noon: {
      beamTransform: 'rotate(0deg) translate(0px, 45px)',
      beamOpacity: 0.95,
      beamColor: 'from-yellow-100/60 via-amber-200/40 to-transparent',
      spotlightPosition: 'left-[50%] top-[80%]',
      label: 'Meio-Dia Solar (12:00) · Feixe vertical atinge o centro do pavimento',
      desc: 'Nos equinócios e solstícios, o feixe cai com precisão sobre o centro do pavimento de pórfiro, unindo o imperador ao zênite cósmico.',
    },
    afternoon: {
      beamTransform: 'rotate(28deg) translate(-20px, 30px)',
      beamOpacity: 0.85,
      beamColor: 'from-orange-400/50 via-amber-300/30 to-transparent',
      spotlightPosition: 'left-[78%] top-[65%]',
      label: 'Fim de Tarde (17:30) · Feixe dourado atinge os caixotões orientais',
      desc: 'A luz poente rasga a penumbra da cúpula, revelando o relevo geométrico dos 28 caixotões de concreto pozolânico.',
    },
  };

  const current = lightStyles[timeOfDay];

  return (
    <div className="w-full bg-white border border-[#E8E2D8] rounded-2xl p-3.5 sm:p-5 my-2 text-[#1C1917] shadow-md">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F0EBE1] pb-3 mb-3">
        <div>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#A83B24] font-mono font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Simulador Espacial · Arquitetura como Relógio Cósmico
          </span>
          <h4 className="text-base sm:text-lg font-serif font-bold text-[#1C1917] mt-0.5">
            A Trajetória Solar pelo Óculo do Panteão (Roma, 118–125 EC)
          </h4>
        </div>

        {/* Time Selector Buttons */}
        <div className="flex items-center gap-1 bg-[#FAF8F5] p-1 rounded-xl border border-[#E8E2D8] text-xs">
          <button
            onClick={() => setTimeOfDay('morning')}
            className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
              timeOfDay === 'morning'
                ? 'bg-[#A83B24] text-white font-semibold shadow-xs'
                : 'text-[#5E584F] hover:text-[#1C1917]'
            }`}
          >
            Manhã (9h)
          </button>
          <button
            onClick={() => setTimeOfDay('noon')}
            className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
              timeOfDay === 'noon'
                ? 'bg-[#A83B24] text-white font-semibold shadow-xs'
                : 'text-[#5E584F] hover:text-[#1C1917]'
            }`}
          >
            Meio-Dia (12h)
          </button>
          <button
            onClick={() => setTimeOfDay('afternoon')}
            className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
              timeOfDay === 'afternoon'
                ? 'bg-[#A83B24] text-white font-semibold shadow-xs'
                : 'text-[#5E584F] hover:text-[#1C1917]'
            }`}
          >
            Entardecer (17h30)
          </button>
        </div>
      </div>

      {/* Interactive Visual Stage */}
      <div className="relative w-full h-[50vh] sm:h-[62vh] lg:h-[68vh] rounded-xl overflow-hidden bg-black border border-[#E8E2D8] flex items-center justify-center shadow-inner">
        {/* Background Pantheon Interior */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pantheon_dome.jpg/1280px-Pantheon_dome.jpg"
          alt="Cúpula do Panteão"
          className="w-full h-full object-cover opacity-80 filter brightness-95 transition-all duration-500"
          referrerPolicy="no-referrer"
        />

        {/* The Oculus Opening at Top */}
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-2 border-amber-300 bg-amber-100 shadow-[0_0_40px_rgba(251,191,36,0.95)] z-20 flex items-center justify-center">
          <Sun className="w-8 h-8 text-amber-600 animate-pulse" />
        </div>

        {/* Sunlight Volumetric Beam */}
        <div
          className={`absolute top-[12%] left-1/2 -translate-x-1/2 w-40 sm:w-48 h-[80%] bg-gradient-to-b ${current.beamColor} pointer-events-none transition-all duration-700 ease-in-out z-10`}
          style={{
            transformOrigin: 'top center',
            transform: current.beamTransform,
            clipPath: 'polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)',
          }}
        />

        {/* Light Patch on floor or wall */}
        <div
          className={`absolute ${current.spotlightPosition} -translate-x-1/2 -translate-y-1/2 w-36 h-14 rounded-[50%] bg-amber-200/70 blur-md pointer-events-none transition-all duration-700 ease-in-out z-10`}
        />

        {/* In-canvas indicator */}
        <div className="absolute top-4 left-4 bg-[#1C1917]/85 backdrop-blur-sm border border-white/20 px-3.5 py-1.5 rounded-lg text-xs text-[#FAF8F5] font-mono flex items-center gap-2 shadow-md">
          <Clock className="w-4 h-4 text-[#D9822B]" />
          <span>{current.label.split('·')[0]}</span>
        </div>
      </div>

      {/* Description below */}
      <div className="mt-3.5 p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] text-xs">
        <p className="text-[#A83B24] font-serif font-bold text-sm mb-0.5">{current.label}</p>
        <p className="text-[#423C34] leading-relaxed font-sans">{current.desc}</p>
      </div>
    </div>
  );
};

