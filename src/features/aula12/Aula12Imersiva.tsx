import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calendar,
  Eye,
  FileText,
  ImageOff,
  MapPin,
  Navigation,
  Palette,
  Play,
  Quote,
  Sparkles,
  ZoomIn,
} from 'lucide-react';

import { ATOS, scenes } from './data';
import type { ColorSwatch } from '../aula3/types';
import type { Scene12 } from './types';
import { TechnicalSheetModal } from '../aula3/components/TechnicalSheetModal';
import { DeepZoomModal } from '../aula3/components/DeepZoomModal';
import { ComparisonViewer } from '../aula3/components/ComparisonViewer';
import { ConstellationGraph } from '../aula3/components/ConstellationGraph';
import { ReflectionNotepad } from '../aula3/components/ReflectionNotepad';
import { MuybridgePlayer } from './components/MuybridgePlayer';
import { PontilhismoLab } from './components/PontilhismoLab';
import { DadaPoema } from './components/DadaPoema';
import { DerivadasLab } from './components/DerivadasLab';

const MATERIAIS = [
  { t: 'Slides: Impressionismo e Neo-Impressionismo', d: 'PDF da aula (58 páginas).', href: '/aula12/impressionismo-e-neoimpressionismo.pdf' },
  { t: 'O Curto-Circuito da Arte Digital no Brasil', d: 'Livro de Débora Aita Gasparetto (2014), no Archive of Digital Art.', href: 'https://digitalartarchive.at/fileadmin/user_upload/Virtualart/PDF/359_OCURTOADBRASIL_EBOOK.pdf' },
  { t: 'Vídeo sobre Muybridge', d: 'Indicado nos slides da aula.', href: 'https://www.youtube.com/watch?v=aG5erS2GNG0' },
  { t: 'L’Œuvre, de Émile Zola', d: 'Edição digitalizada na BnF Gallica.', href: 'https://gallica.bnf.fr/ark:/12148/bpt6k64536j' },
  { t: 'Antropofagia', d: 'Verbete da Tate sobre o termo na arte brasileira.', href: 'https://www.tate.org.uk/art/art-terms/a/anthropophagia' },
  { t: 'Net Art Anthology', d: 'Rhizome: obras de net art restauradas e navegáveis.', href: 'https://anthology.rhizome.org/my-boyfriend-came-back-from-the-war' },
];

function Etiqueta({ children }: { children: React.ReactNode }) {
  return <span className="text-sm font-mono uppercase tracking-widest text-[#A83B24] font-bold">{children}</span>;
}

function Provocacao({ texto, rotulo = 'Pergunta Crítica:' }: { texto: string; rotulo?: string }) {
  return (
    <div className="mt-6 p-5 rounded-2xl bg-[#FAF2EE] border border-[#E8C9BF] text-[#752514]">
      <strong className="text-xs font-mono uppercase tracking-widest text-[#A83B24] block mb-1 font-bold">{rotulo}</strong>
      <p className="font-serif italic text-lg sm:text-xl font-semibold leading-snug">«{texto}»</p>
    </div>
  );
}

/** Imagem principal; se a fonte externa falhar, oferece o link para o acervo. */
function PalcoImagem({ scene, onZoom }: { scene: Scene12; onZoom: () => void }) {
  const [falhou, setFalhou] = useState(false);

  if (falhou) {
    return (
      <div className="w-full min-h-[50vh] rounded-2xl bg-white border border-[#E8E2D8] p-8 shadow-lg flex flex-col items-center justify-center text-center gap-3">
        <ImageOff className="w-8 h-8 text-[#A83B24]" />
        <p className="font-serif text-xl font-bold">{scene.titulo}</p>
        <p className="text-sm text-[#5E584F]">A imagem não carregou agora. Verifique a sua conexão ou abra a obra na fonte.</p>
        {scene.imagemLink && (
          <a href={scene.imagemLink} target="_blank" rel="noreferrer" className="font-bold text-[#A83B24] underline underline-offset-4">
            Abrir a imagem na fonte
          </a>
        )}
      </div>
    );
  }

  return (
    <div className="relative group w-full min-h-[50vh] max-h-[82vh] lg:max-h-[86vh] rounded-2xl overflow-hidden bg-white border border-[#E8E2D8] p-2 sm:p-3 shadow-lg flex flex-col items-center justify-center">
      <img
        src={scene.imagemUrl}
        alt={scene.imagemAlt || scene.titulo}
        loading="lazy"
        onError={() => setFalhou(true)}
        className="w-full h-full max-h-[76vh] lg:max-h-[82vh] object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.015] cursor-zoom-in"
        onClick={onZoom}
        referrerPolicy="no-referrer"
      />
      <button
        onClick={onZoom}
        className="absolute bottom-5 right-5 flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 hover:bg-[#FAF2EE] text-[#A83B24] text-xs sm:text-sm font-bold backdrop-blur-sm border border-[#E8C9BF] transition shadow-lg opacity-90 group-hover:opacity-100 cursor-pointer"
      >
        <Eye className="w-4 h-4" />
        <span>Inspecionar em Tela Cheia</span>
      </button>
      {scene.hotspots && scene.hotspots.length > 0 && (
        <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-mono text-[#A83B24] border border-[#E8C9BF] flex items-center gap-1.5 font-bold shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{scene.hotspots.length} Pontos Notáveis</span>
        </div>
      )}
    </div>
  );
}

/** Obra sob direitos autorais: descrição verbal e link direto para o acervo. */
function PlacaObra({ scene }: { scene: Scene12 }) {
  const p = scene.placa!;
  return (
    <div className="w-full rounded-2xl bg-[#1C1917] text-[#FAF8F5] p-6 sm:p-10 shadow-lg min-h-[50vh] flex flex-col justify-between gap-6">
      <div>
        <span className="text-[11px] uppercase tracking-[0.2em] text-[#E8A08E] font-mono font-semibold block">
          Descreva antes de ver
        </span>
        <p className="mt-5 font-serif text-2xl sm:text-3xl lg:text-4xl leading-snug">{p.descricao}</p>
      </div>
      <div className="border-t border-white/20 pt-5 flex flex-wrap items-end justify-between gap-4">
        <div className="text-sm font-mono text-[#D9CFC4]">
          <p className="font-serif italic text-lg text-white">{p.obra}</p>
          <p>
            {p.autoria}, {p.ano}
            {p.acervo ? ` · ${p.acervo}` : ''}
          </p>
        </div>
        <a
          href={p.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#A83B24] hover:bg-[#8F301C] text-white text-sm font-bold"
        >
          {p.linkRotulo} <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

function CenaObra({
  scene,
  copied,
  onCopy,
  onSheet,
  onZoom,
}: {
  scene: Scene12;
  copied: string | null;
  onCopy: (hex: string) => void;
  onSheet: () => void;
  onZoom: (url?: string) => void;
}) {
  const paleta = (scene.paletaCores ?? []) as ColorSwatch[];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center w-full">
      <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded bg-[#FAF2EE] text-[#A83B24] text-xs font-mono font-bold uppercase tracking-wider border border-[#E8C9BF]">
            {scene.atoTitulo}
          </span>
          {scene.cultura && <span className="text-sm text-[#4A453E] font-mono font-medium">{scene.cultura}</span>}
        </div>
        <h2 className="text-2xl sm:text-4xl xl:text-5xl font-serif font-bold text-[#1C1917] tracking-tight leading-[1.15]">{scene.titulo}</h2>
        {scene.subtitulo && <p className="text-sm sm:text-base text-[#A83B24] font-mono mt-1 font-semibold">{scene.subtitulo}</p>}

        <div className="flex flex-wrap items-center gap-3 my-2.5 text-xs sm:text-sm text-[#4A453E] font-mono">
          {scene.data && (
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#A83B24]" />
              {scene.data}
            </span>
          )}
          {scene.localOrigem && (
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#A83B24]" />
              {scene.localOrigem.split(',')[0]}
            </span>
          )}
        </div>

        <p className="text-base sm:text-lg text-[#2E2A25] leading-relaxed mt-2.5">{scene.conteudo}</p>
        {scene.conteudoExtenso && (
          <p className="text-xs sm:text-sm text-[#4A453E] leading-relaxed mt-2 border-l-3 border-[#E8C9BF] pl-3 py-0.5">{scene.conteudoExtenso}</p>
        )}

        {paleta.length > 0 && (
          <div className="mt-3.5 pt-2.5 border-t border-[#F0EBE1]">
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-[#4A453E] mb-1.5 font-bold">
              <Palette className="w-4 h-4 text-[#A83B24]" />
              <span>Cores dominantes da reprodução:</span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              {paleta.map((cor) => (
                <button
                  key={cor.hex + cor.name}
                  onClick={() => onCopy(cor.hex)}
                  title={`${cor.name} (${cor.hex}) · Clique para copiar HEX`}
                  className="group flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white border border-[#E8E2D8] hover:border-[#A83B24] transition cursor-pointer"
                >
                  <span className="w-3.5 h-3.5 rounded-full border border-black/20" style={{ backgroundColor: cor.hex }} />
                  <span className="text-xs font-mono text-[#2E2A25] font-medium group-hover:text-[#A83B24]">
                    {copied === cor.hex ? 'Copiado!' : cor.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {scene.perguntaPrincipal && (
          <div className="mt-3.5 p-3.5 sm:p-4 rounded-xl bg-[#FAF2EE] border border-[#E8C9BF] text-[#752514]">
            <strong className="text-xs font-mono uppercase tracking-widest text-[#A83B24] block mb-0.5 font-bold">Pergunta Crítica:</strong>
            <p className="font-serif italic text-sm sm:text-base font-semibold leading-snug">«{scene.perguntaPrincipal}»</p>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-2 mt-4">
          <button
            onClick={onSheet}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-[#F4EFEA] text-[#1C1917] text-xs sm:text-sm font-semibold border border-[#DCD3C7] transition cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#A83B24]" />
            <span>Ficha Técnica</span>
          </button>
          {scene.imagemUrl && !scene.comparison && !scene.demo && (
            <button
              onClick={() => onZoom()}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#A83B24] hover:bg-[#8F301C] text-white text-xs sm:text-sm font-bold transition cursor-pointer"
            >
              <ZoomIn className="w-4 h-4" />
              <span>Lupa de Detalhes</span>
            </button>
          )}
        </div>
      </div>

      <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-center justify-center w-full">
        {scene.comparison ? (
          <ComparisonViewer scene={scene} onOpenZoom={(url) => onZoom(url)} />
        ) : scene.placa ? (
          <PlacaObra scene={scene} />
        ) : scene.demo === 'muybridge' ? (
          <MuybridgePlayer />
        ) : scene.demo === 'pontilhismo' ? (
          <PontilhismoLab />
        ) : scene.demo === 'dada' ? (
          <DadaPoema />
        ) : scene.demo === 'derivadas' ? (
          <DerivadasLab />
        ) : (
          scene.imagemUrl && <PalcoImagem scene={scene} onZoom={() => onZoom()} />
        )}
        {scene.imagemFonte && (
          <div className="w-full flex flex-wrap items-center justify-between gap-2 text-xs text-[#7A7267] mt-2 px-1 font-mono">
            <span>{scene.imagemFonte}</span>
            {scene.imagemLicenca && <span className="bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#E8E2D8]">{scene.imagemLicenca}</span>}
          </div>
        )}
      </div>
    </div>
  );
}

function CenaCartoes({ scene }: { scene: Scene12 }) {
  return (
    <div className="max-w-6xl mx-auto">
      <Etiqueta>{scene.atoTitulo}</Etiqueta>
      <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1C1917] mt-1 leading-tight">{scene.titulo}</h2>
      {scene.subtitulo && <p className="text-sm sm:text-base text-[#A83B24] font-mono mt-1 font-semibold">{scene.subtitulo}</p>}
      <p className="text-base sm:text-xl text-[#2E2A25] leading-relaxed mt-4 max-w-4xl">{scene.conteudo}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-6">
        {scene.pontos?.map((p) => (
          <div key={p.t} className="bg-white border border-[#E8E2D8] rounded-xl p-5 shadow-xs">
            <h3 className="font-serif text-xl font-bold text-[#A83B24] leading-snug">{p.t}</h3>
            <p className="mt-1.5 text-sm sm:text-base text-[#2E2A25] leading-relaxed">{p.d}</p>
          </div>
        ))}
      </div>
      {scene.imagemLink && (
        <a href={scene.imagemLink} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 font-bold text-[#A83B24] underline underline-offset-4">
          Ler o livro em PDF <ArrowUpRight className="w-4 h-4" />
        </a>
      )}
      {scene.perguntaPrincipal && <Provocacao texto={scene.perguntaPrincipal} />}
    </div>
  );
}

function CenaQuadro({ scene }: { scene: Scene12 }) {
  return (
    <div className="max-w-7xl mx-auto">
      <Etiqueta>{scene.atoTitulo}</Etiqueta>
      <h2 className="text-3xl sm:text-5xl font-serif font-bold mt-1">{scene.titulo}</h2>
      <p className="text-base sm:text-lg text-[#2E2A25] mt-3 max-w-4xl">{scene.conteudo}</p>
      <div className="mt-5 overflow-x-auto rounded-2xl border border-[#E8E2D8] bg-white shadow-xs">
        <table className="w-full min-w-[820px] text-left text-sm">
          <thead className="bg-[#FAF2EE] text-[#A83B24] font-mono uppercase text-xs tracking-wider">
            <tr>
              {['Movimento', 'Quando', 'O gesto', 'Referências', 'Para o design'].map((c) => (
                <th key={c} scope="col" className="px-4 py-3 font-bold">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {scene.quadro?.map((l) => (
              <tr key={l.movimento} className="border-t border-[#F0EBE1] align-top">
                <th scope="row" className="px-4 py-2.5 font-serif text-base font-bold text-[#1C1917]">{l.movimento}</th>
                <td className="px-4 py-2.5 font-mono text-xs text-[#4A453E] whitespace-nowrap">{l.quando}</td>
                <td className="px-4 py-2.5">{l.gesto}</td>
                <td className="px-4 py-2.5 text-[#4A453E]">{l.referencias}</td>
                <td className="px-4 py-2.5 text-[#752514] font-medium">{l.design}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {scene.perguntaPrincipal && <Provocacao texto={scene.perguntaPrincipal} />}
    </div>
  );
}

function CenaVideo({ scene }: { scene: Scene12 }) {
  const [ativo, setAtivo] = useState(false);
  return (
    <div className="max-w-6xl mx-auto">
      <Etiqueta>{scene.atoTitulo}</Etiqueta>
      <h2 className="text-3xl sm:text-5xl font-serif font-bold mt-1">{scene.titulo}</h2>
      <p className="text-base sm:text-lg text-[#2E2A25] mt-2">{scene.conteudo}</p>
      <div className="mt-5 grid lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7 aspect-video rounded-2xl overflow-hidden bg-[#1C1917] border border-[#E8E2D8] shadow-lg">
          {ativo ? (
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/QYhWiC2pamU?autoplay=1"
              title="Aula gravada da Profa. Débora Aita Gasparetto"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button onClick={() => setAtivo(true)} className="w-full h-full flex flex-col items-center justify-center gap-3 text-white cursor-pointer group">
              <span className="w-16 h-16 rounded-full bg-[#A83B24] group-hover:bg-[#8F301C] flex items-center justify-center">
                <Play className="w-7 h-7 fill-white" />
              </span>
              <span className="font-serif text-xl">Assistir à aula</span>
              <span className="text-xs font-mono text-[#D9CFC4]">O vídeo abre pelo YouTube</span>
            </button>
          )}
        </div>
        <ul className="lg:col-span-5 space-y-2">
          {MATERIAIS.map((m) => (
            <li key={m.t}>
              <a href={m.href} target="_blank" rel="noreferrer" className="flex gap-3 rounded-xl border border-[#E8E2D8] bg-white p-3.5 hover:border-[#A83B24] transition">
                <BookOpen className="w-5 h-5 mt-0.5 shrink-0 text-[#A83B24]" />
                <span>
                  <span className="font-semibold text-[#1C1917] block leading-snug">{m.t}</span>
                  <span className="text-sm text-[#5E584F]">{m.d}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Aula12Imersiva() {
  const [atual, setAtual] = useState(0);
  const [ficha, setFicha] = useState<Scene12 | null>(null);
  const [zoom, setZoom] = useState<{ scene: Scene12; url?: string } | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const aoRolar = () => {
      const pos = window.scrollY + window.innerHeight / 2;
      let melhor = 0;
      refs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top + window.scrollY <= pos) melhor = i;
      });
      setAtual(melhor);
    };
    aoRolar();
    window.addEventListener('scroll', aoRolar, { passive: true });
    window.addEventListener('resize', aoRolar);
    return () => {
      window.removeEventListener('scroll', aoRolar);
      window.removeEventListener('resize', aoRolar);
    };
  }, []);

  const irPara = (i: number) => {
    const el = refs.current[Math.max(0, Math.min(i, scenes.length - 1))];
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const tecla = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === 'ArrowDown' || e.key === 'j') {
        e.preventDefault();
        irPara(atual + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'k') {
        e.preventDefault();
        irPara(atual - 1);
      } else if (e.key === 'Escape') {
        setFicha(null);
        setZoom(null);
      }
    };
    window.addEventListener('keydown', tecla);
    return () => window.removeEventListener('keydown', tecla);
  }, [atual]);

  const copiar = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopied(hex);
    window.setTimeout(() => setCopied(null), 2000);
  };

  const irParaAto = (verbo: string) => {
    const i = scenes.findIndex((s) => s.atoTitulo?.endsWith(verbo));
    if (i !== -1) irPara(i);
  };

  return (
    <div className="bg-[#FAF8F5] text-[#1C1917] min-h-screen selection:bg-[#A83B24] selection:text-white font-sans antialiased">
      <main className="w-full overflow-visible scroll-smooth">
        {scenes.map((scene, idx) => (
          <section
            key={scene.id}
            id={scene.id}
            ref={(el) => {
              refs.current[idx] = el;
            }}
            className={`scroll-mt-14 min-h-[calc(100vh-3.5rem)] w-full flex items-center justify-center p-2 sm:p-4 lg:p-5 relative border-b border-[#E8E2D8]/60 ${scene.forma === 'parte' ? 'bg-[#1C1917] text-[#FAF8F5]' : ''}`}
          >
            <div className="max-w-[96vw] xl:max-w-[92vw] 2xl:max-w-[1680px] w-full py-3 sm:py-4">
              {scene.id === 'intro' && (
                <div className="max-w-5xl mx-auto text-center space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF2EE] border border-[#E8C9BF] text-[#A83B24] text-xs sm:text-sm font-mono uppercase tracking-widest font-bold">
                    <Sparkles className="w-4 h-4 shrink-0" />
                    História e Estética da Arte 1 · Aula 12
                  </div>
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-[1.1]">{scene.titulo}</h1>
                  <p className="text-xl sm:text-2xl font-serif italic text-[#A83B24]">{scene.conteudo}</p>
                  <p className="text-base sm:text-xl text-[#4A453E] font-medium">Profa. Dra. Débora Aita Gasparetto · Desenho Industrial UFSM</p>

                  <div className="p-6 sm:p-10 rounded-2xl bg-white border border-[#E8E2D8] shadow-md text-left space-y-3">
                    <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#A83B24] font-mono font-bold block">A Pergunta Estrutural de Toda a Experiência</span>
                    <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif italic leading-snug font-bold">«{scene.perguntaPrincipal}»</blockquote>
                    <p className="mt-4 pt-4 border-t border-[#F0EBE1] text-sm sm:text-base text-[#4A453E] leading-relaxed">
                      Recusamos a sucessão de “ismos” como uma linha de progresso. Cada ato é um verbo: uma operação que a arte fez sobre o mundo e sobre si mesma, e que o design herdou.
                    </p>
                  </div>

                  {[1, 2].map((parte) => (
                    <div key={parte} className="text-left">
                      <p className="text-xs font-mono uppercase tracking-widest text-[#5E584F] font-bold mb-2">
                        {parte === 1 ? 'Parte I · Aula completa: Academia ao Pós-Impressionismo' : 'Parte II · Resumão: vanguardas ao presente'}
                      </p>
                      <div className={"grid grid-cols-2 gap-2.5 sm:grid-cols-4"}>
                        {ATOS.filter((a) => a.parte === parte).map((a) => (
                          <button
                            key={a.num}
                            onClick={() => irParaAto(a.verbo)}
                            className="bg-white border border-[#E8E2D8] hover:border-[#A83B24] rounded-xl p-3 text-center cursor-pointer transition min-w-0"
                          >
                            <span className="text-xs font-mono text-[#A83B24] block font-bold">ATO {a.num}</span>
                            <span className="font-serif font-bold text-sm sm:text-base block mt-0.5 [overflow-wrap:anywhere]">{a.verbo}</span>
                            <span className="text-xs text-[#5E584F] block mt-0.5 leading-tight">{a.sub}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
                    <button onClick={() => irPara(1)} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#A83B24] hover:bg-[#8F301C] text-white font-bold transition shadow-md cursor-pointer">
                      Iniciar Navegação Imersiva <ArrowRight className="w-5 h-5" />
                    </button>
                    <button onClick={() => irPara(scenes.findIndex((s) => s.id === 'quadro-sintese'))} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#FAF2EE] text-[#A83B24] border border-[#E8C9BF] font-bold transition cursor-pointer">
                      Ir para o Quadro-Síntese
                    </button>
                    <button onClick={() => irPara(scenes.findIndex((s) => s.id === 'aula-gravada'))} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#FAF2EE] text-[#A83B24] border border-[#E8C9BF] font-bold transition cursor-pointer">
                      <Play className="w-5 h-5" /> Aula gravada
                    </button>
                  </div>
                  <a href="/aulas/12" className="inline-block font-semibold text-[#5E584F] underline decoration-[#D9CFC4] underline-offset-4 hover:text-[#A83B24]">
                    Voltar para a Aula 12
                  </a>
                </div>
              )}

              {scene.forma === 'parte' && (
                <div className="max-w-5xl mx-auto text-center">
                  <span className="text-sm font-mono uppercase tracking-[0.25em] text-[#E8A08E] font-bold">{scene.atoTitulo}</span>
                  <h2 className="mt-4 text-5xl sm:text-7xl lg:text-8xl font-serif font-bold leading-[1.05]">{scene.titulo}</h2>
                  <p className="mt-5 text-sm sm:text-base font-mono text-[#E8A08E] leading-relaxed">{scene.subtitulo}</p>
                  <p className="mt-6 text-lg sm:text-2xl leading-relaxed text-[#EDE6DA] max-w-3xl mx-auto">{scene.conteudo}</p>
                </div>
              )}

              {scene.forma === 'cartoes' && <CenaCartoes scene={scene} />}
              {scene.forma === 'quadro' && <CenaQuadro scene={scene} />}
              {scene.forma === 'video' && <CenaVideo scene={scene} />}

              {scene.forma === 'atelie' && (
                <div className="max-w-5xl mx-auto">
                  <CenaCartoes scene={scene} />
                  <ReflectionNotepad
                    storageKey="aula12_regra_projetual"
                    prompt="A partir das relações encontradas no meu atlas, meu projeto deverá..."
                  />
                </div>
              )}

              {scene.tipo === 'interruption' && (
                <div className="max-w-4xl mx-auto bg-white border border-[#E8C9BF] rounded-2xl p-6 sm:p-10 shadow-md">
                  <div className="flex items-center gap-2 text-[#A83B24] text-sm font-mono uppercase tracking-widest mb-4 font-bold">
                    <Quote className="w-4 h-4" />
                    <span>{scene.atoTitulo}</span>
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-serif font-bold mb-2 leading-tight">{scene.titulo}</h2>
                  <p className="text-sm sm:text-base text-[#A83B24] font-mono mb-6 font-semibold">{scene.subtitulo}</p>
                  <div className="space-y-4 text-[#2E2A25] text-base sm:text-lg leading-relaxed">
                    <p>{scene.conteudo}</p>
                    <p className="text-[#4A453E] text-sm sm:text-base border-l-3 border-[#A83B24] pl-4 py-1">{scene.conteudoExtenso}</p>
                  </div>
                  {scene.perguntaPrincipal && <Provocacao texto={scene.perguntaPrincipal} rotulo="Provocação para a Turma:" />}
                </div>
              )}

              {scene.tipo === 'summary' && (
                <div className="max-w-5xl mx-auto">
                  <div className="text-center">
                    <Etiqueta>{scene.atoTitulo}</Etiqueta>
                    <h2 className="text-3xl sm:text-5xl font-serif font-bold mt-1">{scene.titulo}</h2>
                    <p className="text-base sm:text-lg text-[#4A453E] mt-1">{scene.subtitulo}</p>
                  </div>
                  <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E2D8] text-[#2E2A25] text-base sm:text-lg leading-relaxed space-y-4 shadow-xs">
                    <p>{scene.conteudo}</p>
                    <p className="text-[#4A453E] text-sm sm:text-base border-t border-[#F0EBE1] pt-4">{scene.conteudoExtenso}</p>
                  </div>
                  {scene.perguntaPrincipal && <Provocacao texto={scene.perguntaPrincipal} rotulo="Para levar:" />}
                </div>
              )}

              {scene.tipo === 'constellation' && (
                <ConstellationGraph
                  scenes={scenes}
                  onSelectScene={(id) => {
                    const i = scenes.findIndex((s) => s.id === id);
                    if (i !== -1) irPara(i);
                  }}
                />
              )}

              {scene.id === 'referencias' && (
                <div className="max-w-4xl mx-auto bg-white border border-[#E8E2D8] rounded-2xl p-6 sm:p-10 shadow-xs">
                  <div className="border-b border-[#F0EBE1] pb-4 mb-5">
                    <Etiqueta>{scene.atoTitulo}</Etiqueta>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold mt-1">{scene.titulo}</h2>
                  </div>
                  <div className="whitespace-pre-line text-sm sm:text-base text-[#2E2A25] leading-relaxed">{scene.conteudoExtenso}</div>
                  <div className="mt-8 pt-4 border-t border-[#F0EBE1] flex flex-wrap items-center justify-between gap-2 text-sm text-[#5E584F] font-mono">
                    <span>Desenho Industrial · UFSM</span>
                    <span>História e Estética da Arte 1</span>
                  </div>
                </div>
              )}

              {(scene.tipo === 'image' || scene.tipo === 'comparison') && (
                <CenaObra
                  scene={scene}
                  copied={copied}
                  onCopy={copiar}
                  onSheet={() => setFicha(scene)}
                  onZoom={(url) => setZoom({ scene, url })}
                />
              )}
            </div>
          </section>
        ))}
      </main>

      {/* Navegador de atos: a aula tem muitas cenas, então o percurso precisa estar sempre à mão. */}
      <div className="fixed bottom-3 right-3 z-40 flex items-center gap-2 rounded-xl bg-white/95 backdrop-blur-sm border border-[#E8C9BF] shadow-lg pl-3 pr-2 py-1.5">
        <Navigation className="w-4 h-4 text-[#A83B24] shrink-0" />
        <label className="sr-only" htmlFor="navegar-cenas">Ir para uma cena da aula</label>
        <select
          id="navegar-cenas"
          value={atual}
          onChange={(e) => irPara(Number(e.target.value))}
          className="bg-transparent text-xs sm:text-sm font-mono text-[#1C1917] max-w-[58vw] sm:max-w-72 cursor-pointer focus:outline-none"
        >
          {scenes.map((s, i) => (
            <option key={s.id} value={i}>
              {i + 1}/{scenes.length} · {s.titulo}
            </option>
          ))}
        </select>
      </div>

      <TechnicalSheetModal scene={ficha} onClose={() => setFicha(null)} />
      {zoom && <DeepZoomModal key={zoom.scene.id + (zoom.url ?? '')} scene={zoom.scene} initialImageUrl={zoom.url} onClose={() => setZoom(null)} />}
    </div>
  );
}
