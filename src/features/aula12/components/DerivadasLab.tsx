import React, { useEffect, useRef, useState } from 'react';

const NIVEIS = 7;
const COLUNAS = 150;

export const DerivadasLab: React.FC = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [imagem, setImagem] = useState<HTMLImageElement | null>(null);
  const [ordem, setOrdem] = useState(0);

  useEffect(() => {
    const im = new Image();
    im.onload = () => setImagem(im);
    im.src = '/aula12/artworks/manet-folies-bergere.jpg';
  }, []);

  useEffect(() => {
    const c = canvas.current;
    if (!c || !imagem) return;
    const linhas = Math.round((COLUNAS * imagem.height) / imagem.width);
    const off = document.createElement('canvas');
    off.width = COLUNAS;
    off.height = linhas;
    const octx = off.getContext('2d', { willReadFrequently: true })!;
    octx.drawImage(imagem, 0, 0, COLUNAS, linhas);
    const d = octx.getImageData(0, 0, COLUNAS, linhas).data;
    let m: number[] = [];
    for (let i = 0; i < COLUNAS * linhas; i++) {
      const lum = (0.3 * d[i * 4] + 0.59 * d[i * 4 + 1] + 0.11 * d[i * 4 + 2]) / 255;
      m.push(Math.floor((1 - lum) * (NIVEIS - 0.001)));
    }
    for (let k = 0; k < ordem; k++) {
      const n: number[] = new Array(m.length).fill(0);
      for (let y = 0; y < linhas - 1; y++) {
        for (let x = 0; x < COLUNAS - 1; x++) {
          const i = y * COLUNAS + x;
          n[i] = Math.min(NIVEIS - 1, Math.abs(m[i + 1] - m[i]) + Math.abs(m[i + COLUNAS] - m[i]));
        }
      }
      m = n;
    }
    const T = 6;
    c.width = COLUNAS * T;
    c.height = linhas * T;
    const ctx = c.getContext('2d')!;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = '#1C1917';
    m.forEach((v, i) => {
      if (v === 0) return;
      const lado = (T * v) / (NIVEIS - 1);
      const x = (i % COLUNAS) * T + (T - lado) / 2;
      const y = Math.floor(i / COLUNAS) * T + (T - lado) / 2;
      ctx.fillRect(x, y, lado, lado);
    });
  }, [imagem, ordem]);

  const rotulos = ['Ordem 0: imagem em 7 níveis', 'Ordem 1: contornos', 'Ordem 2', 'Ordem 3'];

  return (
    <div className="w-full bg-white border border-[#E8E2D8] rounded-2xl shadow-lg p-3 sm:p-5">
      <span className="text-[11px] uppercase tracking-[0.2em] text-[#A83B24] font-mono font-semibold block mb-2">
        Laboratório · a imagem como matriz numérica
      </span>
      <div className="rounded-xl overflow-hidden border border-[#E8E2D8] bg-white flex justify-center">
        <canvas
          ref={canvas}
          role="img"
          aria-label={`Bar no Folies-Bergère transformado em matriz numérica. ${rotulos[ordem]}.`}
          className="w-full h-auto max-h-[62vh] object-contain block"
        />
      </div>
      <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2" role="group" aria-label="Ordem da derivada">
        {rotulos.map((r, i) => (
          <button
            key={r}
            onClick={() => setOrdem(i)}
            aria-pressed={ordem === i}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold border cursor-pointer ${ordem === i ? 'bg-[#A83B24] text-white border-[#A83B24]' : 'bg-[#FAF8F5] text-[#1C1917] border-[#E8E2D8] hover:border-[#A83B24]'}`}
          >
            {r}
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs text-[#5E584F] leading-relaxed">
        Recriação didática do procedimento, aplicada aqui a uma pintura desta aula. Onde a intensidade é constante, a derivada é zero e o papel fica branco. A obra de 1969 usou outra imagem e outro equipamento.
      </p>
    </div>
  );
};
