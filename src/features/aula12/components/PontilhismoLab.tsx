import React, { useEffect, useRef, useState } from 'react';

// Pigmentos puros: cada ponto recebe uma destas cores, nunca uma mistura.
const PIGMENTOS: [number, number, number][] = [
  [244, 240, 226], [240, 196, 60], [226, 120, 40], [200, 50, 44], [186, 70, 130],
  [86, 70, 170], [40, 90, 190], [50, 150, 190], [50, 140, 80], [120, 170, 60], [40, 34, 48],
];

const dist = (a: number[], b: number[]) => (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2;

export const PontilhismoLab: React.FC = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [imagem, setImagem] = useState<HTMLImageElement | null>(null);
  const [ponto, setPonto] = useState(7);
  const [olhar, setOlhar] = useState(0);

  useEffect(() => {
    const im = new Image();
    im.onload = () => setImagem(im);
    im.src = '/aula12/artworks/seurat-detalhe.jpg';
  }, []);

  useEffect(() => {
    const c = canvas.current;
    if (!c || !imagem) return;
    const L = 900;
    const A = Math.round((L * imagem.height) / imagem.width);
    c.width = L;
    c.height = A;
    const off = document.createElement('canvas');
    off.width = L;
    off.height = A;
    const octx = off.getContext('2d', { willReadFrequently: true })!;
    octx.drawImage(imagem, 0, 0, L, A);
    const dados = octx.getImageData(0, 0, L, A).data;
    const ctx = c.getContext('2d')!;
    ctx.fillStyle = '#EFE9DA';
    ctx.fillRect(0, 0, L, A);
    let semente = 7;
    const acaso = () => {
      semente = (semente * 16807) % 2147483647;
      return semente / 2147483647;
    };
    for (let y = 0; y < A; y += ponto * 0.8) {
      for (let x = 0; x < L; x += ponto * 0.8) {
        const px = Math.min(L - 1, Math.round(x + (acaso() - 0.5) * ponto));
        const py = Math.min(A - 1, Math.max(0, Math.round(y + (acaso() - 0.5) * ponto)));
        const i = (py * L + px) * 4;
        const cor = [dados[i], dados[i + 1], dados[i + 2]];
        const [a, b] = [...PIGMENTOS].sort((p, q) => dist(cor, p) - dist(cor, q));
        const da = Math.sqrt(dist(cor, a));
        const db = Math.sqrt(dist(cor, b));
        const escolha = acaso() < db / (da + db + 0.001) ? a : b;
        ctx.fillStyle = `rgb(${escolha[0]},${escolha[1]},${escolha[2]})`;
        ctx.beginPath();
        ctx.arc(px, py, ponto / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }, [imagem, ponto]);

  return (
    <div className="w-full bg-white border border-[#E8E2D8] rounded-2xl shadow-lg p-3 sm:p-5">
      <span className="text-[11px] uppercase tracking-[0.2em] text-[#A83B24] font-mono font-semibold block mb-2">
        Laboratório · mistura óptica
      </span>
      <div className="rounded-xl overflow-hidden border border-[#E8E2D8] bg-[#EFE9DA]">
        <canvas
          ref={canvas}
          role="img"
          aria-label="Detalhe da Grande Jatte reconstruído com pontos de onze pigmentos puros"
          className="w-full h-auto max-h-[62vh] object-contain block"
          style={{ filter: `blur(${olhar}px)` }}
        />
      </div>
      <div className="mt-3 grid sm:grid-cols-2 gap-3 text-sm font-mono text-[#4A453E]">
        <label className="flex items-center gap-2">
          Ponto
          <input type="range" min={3} max={18} value={ponto} onChange={(e) => setPonto(Number(e.target.value))} className="flex-1 accent-[#A83B24]" />
          {ponto}px
        </label>
        <label className="flex items-center gap-2">
          Afastar-se
          <input type="range" min={0} max={6} step={0.5} value={olhar} onChange={(e) => setOlhar(Number(e.target.value))} className="flex-1 accent-[#A83B24]" />
          {olhar === 0 ? 'perto' : olhar > 4 ? 'longe' : 'médio'}
        </label>
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        {PIGMENTOS.map((p, i) => (
          <span key={i} className="w-5 h-5 rounded-full border border-black/15" style={{ backgroundColor: `rgb(${p.join(',')})` }} />
        ))}
        <span className="text-xs text-[#5E584F] ml-1">Só estes onze pigmentos. Os tons intermediários acontecem no seu olho.</span>
      </div>
      <p className="mt-2 text-xs text-[#5E584F] leading-relaxed">
        Simulação didática feita a partir de um detalhe da obra. Ela demonstra o princípio, mas não reproduz a técnica de Seurat ponto a ponto.
      </p>
    </div>
  );
};
