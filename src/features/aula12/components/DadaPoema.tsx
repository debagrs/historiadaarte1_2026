import React, { useState } from 'react';
import { Scissors } from 'lucide-react';

const TEXTO_INICIAL =
  'O governo anuncia novas medidas para a indústria enquanto o museu reabre suas portas ao público e a guerra continua nos jornais da manhã com ofertas especiais de chapéus para toda a família';

const INCLINACOES = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2', 'rotate-0'];

export const DadaPoema: React.FC = () => {
  const [texto, setTexto] = useState(TEXTO_INICIAL);
  const [poema, setPoema] = useState<string[]>([]);

  const recortar = () => {
    const palavras = texto.split(/\s+/).filter(Boolean);
    for (let i = palavras.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [palavras[i], palavras[j]] = [palavras[j], palavras[i]];
    }
    setPoema(palavras);
  };

  return (
    <div className="w-full bg-white border border-[#E8E2D8] rounded-2xl shadow-lg p-4 sm:p-6">
      <span className="text-[11px] uppercase tracking-[0.2em] text-[#A83B24] font-mono font-semibold block mb-2">
        Laboratório · o poema como procedimento
      </span>
      <label className="block text-sm font-semibold text-[#423C34] mb-1.5" htmlFor="dada-texto">
        Cole aqui uma notícia, um anúncio ou um post:
      </label>
      <textarea
        id="dada-texto"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        rows={4}
        className="w-full rounded-xl bg-[#FAF8F5] border border-[#DCD3C7] focus:border-[#A83B24] focus:outline-none focus:ring-2 focus:ring-[#A83B24]/20 p-3 text-sm text-[#1C1917] leading-relaxed"
      />
      <button
        onClick={recortar}
        className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#A83B24] hover:bg-[#8F301C] text-white text-sm font-bold cursor-pointer"
      >
        <Scissors className="w-4 h-4" /> Recortar e tirar do saco
      </button>
      <div className="mt-4 min-h-44 rounded-xl border border-dashed border-[#DCD3C7] bg-[#FAF8F5] p-4 flex flex-wrap gap-2 content-start" aria-live="polite">
        {poema.length === 0 ? (
          <p className="text-sm text-[#5E584F] italic">O poema aparece aqui, palavra por palavra, na ordem do acaso.</p>
        ) : (
          poema.map((p, i) => (
            <span
              key={`${p}-${i}`}
              className={`${INCLINACOES[i % INCLINACOES.length]} bg-white border border-[#DCD3C7] shadow-xs px-2 py-1 text-base ${i % 3 === 0 ? 'font-serif font-bold' : i % 3 === 1 ? 'font-mono text-sm' : 'font-sans'}`}
            >
              {p}
            </span>
          ))
        )}
      </div>
      <p className="mt-3 text-xs text-[#5E584F] leading-relaxed">
        Procedimento adaptado da receita publicada por Tristan Tzara em 1920: recortar um artigo, separar as palavras, sacudi-las num saco e copiá-las na ordem em que saem.
      </p>
    </div>
  );
};
