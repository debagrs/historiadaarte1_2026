import React, { useEffect, useState } from 'react';
import { Pause, Play } from 'lucide-react';

const TOTAL = 12;
const quadro = (i: number) => `/aula12/muybridge/f${String(i + 1).padStart(2, '0')}.jpg`;

export const MuybridgePlayer: React.FC = () => {
  const [atual, setAtual] = useState(0);
  const [tocando, setTocando] = useState(false);
  const [fps, setFps] = useState(8);

  useEffect(() => {
    if (!tocando) return;
    const id = window.setInterval(() => setAtual((a) => (a + 1) % TOTAL), 1000 / fps);
    return () => window.clearInterval(id);
  }, [tocando, fps]);

  return (
    <div className="w-full bg-white border border-[#E8E2D8] rounded-2xl shadow-lg p-3 sm:p-5">
      <span className="text-[11px] uppercase tracking-[0.2em] text-[#A83B24] font-mono font-semibold block mb-2">
        Laboratório · do fotograma ao movimento
      </span>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center">
        <div className="relative bg-[#141210] rounded-xl overflow-hidden flex items-center justify-center h-[42vh] sm:h-[56vh]">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <img
              key={i}
              src={quadro(i)}
              alt={i === atual ? `Quadro ${i + 1} de ${TOTAL} da sequência de Muybridge: homem em parada de mãos` : ''}
              className={`absolute inset-0 w-full h-full object-contain ${i === atual ? 'opacity-100' : 'opacity-0'}`}
              loading="lazy"
            />
          ))}
          <span className="absolute top-3 left-3 bg-black/70 text-white font-mono text-xs px-2.5 py-1 rounded">
            Quadro {atual + 1}/{TOTAL}
          </span>
        </div>
        <div className="grid grid-cols-6 md:grid-cols-2 gap-1.5">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setTocando(false);
                setAtual(i);
              }}
              aria-label={`Ver quadro ${i + 1}`}
              className={`w-full md:w-16 aspect-square rounded overflow-hidden border-2 cursor-pointer ${i === atual ? 'border-[#A83B24]' : 'border-transparent opacity-70 hover:opacity-100'}`}
            >
              <img src={quadro(i)} alt="" className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-4">
        <button
          onClick={() => setTocando(!tocando)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#A83B24] hover:bg-[#8F301C] text-white text-sm font-bold cursor-pointer"
        >
          {tocando ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          {tocando ? 'Pausar' : 'Animar a sequência'}
        </button>
        <label className="flex items-center gap-2 text-sm text-[#4A453E] font-mono flex-1 min-w-48">
          Velocidade
          <input
            type="range"
            min={2}
            max={16}
            value={fps}
            onChange={(e) => setFps(Number(e.target.value))}
            className="flex-1 accent-[#A83B24]"
          />
          {fps} q/s
        </label>
      </div>
      <p className="mt-2 text-xs text-[#5E584F] leading-relaxed">
        Doze quadros recortados da prancha nos seus slides. O olho humano nunca viu esses instantes separados: foi a câmera que os tornou visíveis.
      </p>
    </div>
  );
};
