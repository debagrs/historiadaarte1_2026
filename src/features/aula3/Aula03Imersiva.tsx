/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  ZoomIn,
  FileText,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Quote,
  Layers,
  Calendar,
  MapPin,
  Palette,
  ExternalLink,
  BookOpen,
  ArrowRight,
  Eye,
  Presentation,
  Compass,
  ArrowUpRight,
} from 'lucide-react';

import { Scene } from './types';
import { scenes as staticScenes } from './data';
import { TechnicalSheetModal } from './components/TechnicalSheetModal';
import { DeepZoomModal } from './components/DeepZoomModal';
import { ComparisonViewer } from './components/ComparisonViewer';
import { PantheonLightSimulator } from './components/PantheonLightSimulator';
import { ConstellationGraph } from './components/ConstellationGraph';
import { ReflectionNotepad } from './components/ReflectionNotepad';
import { PresentationsSection } from './components/PresentationsSection';

export function Aula03Imersiva() {
  const [scenes, setScenes] = useState<Scene[]>(staticScenes);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Modals
  const [selectedTechnicalSheet, setSelectedTechnicalSheet] = useState<Scene | null>(null);
  const [deepZoomScene, setDeepZoomScene] = useState<Scene | null>(null);
  const [deepZoomCustomUrl, setDeepZoomCustomUrl] = useState<string | undefined>(undefined);
  const [showConstellationModal, setShowConstellationModal] = useState(false);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Conteúdo incorporado estaticamente ao site da disciplina.

  // Update current visible index based on scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPos = container.scrollTop + container.clientHeight / 2;
      let closestIdx = 0;
      let minDistance = Infinity;

      sectionRefs.current.forEach((el, index) => {
        if (!el) return;
        const top = el.offsetTop;
        const distance = Math.abs(top - scrollPos);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = index;
        }
      });

      setCurrentIndex(closestIdx);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [scenes]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowDown' || e.key === 'j') {
        e.preventDefault();
        navigateToIndex(Math.min(currentIndex + 1, scenes.length - 1));
      } else if (e.key === 'ArrowUp' || e.key === 'k') {
        e.preventDefault();
        navigateToIndex(Math.max(currentIndex - 1, 0));
      } else if (e.key === 'Escape') {
        setSelectedTechnicalSheet(null);
        setDeepZoomScene(null);
        setShowConstellationModal(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, scenes]);

  const navigateToIndex = (index: number) => {
    if (index >= 0 && index < scenes.length) {
      const targetEl = sectionRefs.current[index];
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
        setCurrentIndex(index);
      }
    }
  };

  const handleOpenZoom = (scene: Scene, customUrl?: string) => {
    setDeepZoomScene(scene);
    setDeepZoomCustomUrl(customUrl);
  };

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const handleScrollToPresentations = () => {
    const el = document.getElementById('apresentacoes-pesquisa');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FAF8F5] text-[#1C1917] min-h-screen selection:bg-[#A83B24] selection:text-white font-sans antialiased">
      {/* Main Snap Scroll Container */}
      <main
        ref={containerRef}
        className="h-[calc(100vh-8rem)] min-h-[42rem] overflow-y-auto scroll-smooth"
      >
        {scenes.map((scene, idx) => {
          const isPrologue = scene.ato === 0;
          const isSummary = scene.tipo === 'summary';
          const isConstellationScene = scene.tipo === 'constellation';
          const isInterruption = scene.tipo === 'interruption';
          const isComparison = scene.tipo === 'comparison';

          return (
            <section
              key={scene.id}
              ref={(el) => (sectionRefs.current[idx] = el)}
              className="min-h-[calc(100vh-3.5rem)] w-full flex items-center justify-center p-2 sm:p-4 lg:p-5 relative border-b border-[#E8E2D8]/60"
            >
              <div className="max-w-[96vw] xl:max-w-[92vw] 2xl:max-w-[1680px] w-full z-10 py-3 sm:py-4">
                {/* 1. PROLOGUE SCENE */}
                {isPrologue && (
                  <div
                    className="max-w-5xl mx-auto text-center space-y-6"
                  >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF2EE] border border-[#E8C9BF] text-[#A83B24] text-sm font-mono uppercase tracking-widest font-bold">
                      <Sparkles className="w-4 h-4" />
                      História e Estética da Arte 1 · Aula 03
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#1C1917] tracking-tight leading-[1.15]">
                      Das Primeiras Imagens ao Mundo Clássico
                    </h1>

                    <p className="text-base sm:text-xl text-[#4A453E] font-sans max-w-2xl mx-auto font-medium">
                      Profa. Dra. Débora Aita Gasparetto · Desenho Industrial UFSM
                    </p>

                    {/* Structural Core Question Card */}
                    <div className="p-6 sm:p-10 rounded-2xl bg-white border border-[#E8E2D8] shadow-md my-6 text-left space-y-3">
                      <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#A83B24] font-mono font-bold block">
                        A Pergunta Estrutural de Toda a Experiência
                      </span>
                      <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-[#1C1917] leading-snug font-bold">
                        «Como imagem, objeto e arquitetura ajudam a organizar uma sociedade?»
                      </blockquote>
                      <div className="mt-4 pt-4 border-t border-[#F0EBE1] text-sm sm:text-base text-[#4A453E] leading-relaxed font-sans">
                        Recusamos a narrativa linear simplificada de "progresso técnico". Compreendemos cada forma como uma resposta tecnológica, política, ritual e estética às tensões materiais de sua época.
                      </div>
                    </div>

                    {/* 5 Structural Verbs Pills */}
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-1">
                      {[
                        { num: 'I', verb: 'MARCAR', sub: 'Inscrição & Matéria' },
                        { num: 'II', verb: 'HABITAR', sub: 'Espaço & Arquitetura' },
                        { num: 'III', verb: 'ORGANIZAR', sub: 'Poder & Divisão Social' },
                        { num: 'IV', verb: 'NORMATIZAR', sub: 'Corpo & Cânone' },
                        { num: 'V', verb: 'GOVERNAR', sub: 'Império & Retórica' },
                      ].map((item) => (
                        <div
                          key={item.num}
                          className="bg-white border border-[#E8E2D8] rounded-xl p-3.5 text-center shadow-xs"
                        >
                          <span className="text-xs font-mono text-[#A83B24] block font-bold">
                            ATO {item.num}
                          </span>
                          <span className="font-serif font-bold text-base sm:text-lg text-[#1C1917] block mt-0.5">
                            {item.verb}
                          </span>
                          <span className="text-xs text-[#5E584F] block font-sans mt-0.5">
                            {item.sub}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="pt-6 flex flex-wrap items-center justify-center gap-3.5">
                      <button
                        onClick={() => navigateToIndex(1)}
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#A83B24] hover:bg-[#8F301C] text-white font-bold text-base transition-all shadow-md cursor-pointer"
                      >
                        <span>Iniciar Navegação Imersiva</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>

                      <button
                        onClick={handleScrollToPresentations}
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#FAF2EE] text-[#A83B24] border border-[#E8C9BF] font-bold text-base transition-all shadow-xs cursor-pointer"
                      >
                        <Presentation className="w-5 h-5" />
                        <span>Espaços de Exploração & Slides</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* 2. THEORETICAL INTERRUPTION SCENE */}
                {isInterruption && (
                  <div
                    className="max-w-4xl mx-auto bg-white border border-[#E8C9BF] rounded-2xl p-6 sm:p-10 shadow-md relative"
                  >
                    <div className="flex items-center gap-2 text-[#A83B24] text-sm font-mono uppercase tracking-widest mb-4 font-bold">
                      <Quote className="w-4 h-4" />
                      <span>{scene.atoTitulo || 'Interrupção Teórica & Crítica'}</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1917] mb-2 leading-tight">
                      {scene.titulo}
                    </h2>
                    {scene.subtitulo && (
                      <p className="text-sm sm:text-base text-[#A83B24] font-mono mb-6 font-semibold">
                        {scene.subtitulo}
                      </p>
                    )}

                    <div className="space-y-4 text-[#2E2A25] text-base sm:text-lg leading-relaxed">
                      <p>{scene.conteudo}</p>
                      {scene.conteudoExtenso && (
                        <p className="text-[#4A453E] text-sm sm:text-base leading-relaxed border-l-3 border-[#A83B24] pl-4 py-1">
                          {scene.conteudoExtenso}
                        </p>
                      )}
                    </div>

                    {scene.perguntaPrincipal && (
                      <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#FAF2EE] border border-[#E8C9BF] text-[#752514]">
                        <strong className="text-xs sm:text-sm uppercase tracking-wider text-[#A83B24] block mb-1.5 font-bold">
                          Provocação para a Turma:
                        </strong>
                        <p className="font-serif italic text-lg sm:text-2xl font-semibold leading-snug">
                          «{scene.perguntaPrincipal}»
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* 3. CONSTELLATION SCENE */}
                {isConstellationScene && (
                  <div
                  >
                    <ConstellationGraph
                      scenes={scenes}
                      onSelectScene={(targetId) => {
                        const targetIdx = scenes.findIndex((s) => s.id === targetId);
                        if (targetIdx !== -1) navigateToIndex(targetIdx);
                      }}
                    />
                  </div>
                )}

                {/* 4. SUMMARY / EPILOGUE SCENE */}
                {isSummary && (
                  <div
                    className="max-w-6xl mx-auto space-y-6"
                  >
                    <div className="text-center">
                      <span className="text-sm font-mono uppercase tracking-widest text-[#A83B24] font-bold">
                        {scene.atoTitulo}
                      </span>
                      <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1C1917] mt-1">
                        {scene.titulo}
                      </h2>
                      <p className="text-base sm:text-lg text-[#4A453E] mt-1">{scene.subtitulo}</p>
                    </div>

                    <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E2D8] text-[#2E2A25] text-base sm:text-lg leading-relaxed space-y-4 shadow-xs">
                      <p>{scene.conteudo}</p>
                      {scene.conteudoExtenso && (
                        <p className="text-[#4A453E] text-sm sm:text-base leading-relaxed border-t border-[#F0EBE1] pt-4">
                          {scene.conteudoExtenso}
                        </p>
                      )}
                    </div>

                    {/* Embedded Exploration Spaces & Presentations Section (Getty, Google Arts, Prezi & Course Slides) */}
                    <PresentationsSection />

                    {/* Student Reflection Notepad Component */}
                    <ReflectionNotepad />
                  </div>
                )}

                {/* 5. REFERENCES / BIBLIOGRAPHY SCENE */}
                {scene.tipo === 'text' && scene.id === 'referencias' && (
                  <div
                    className="max-w-4xl mx-auto bg-white border border-[#E8E2D8] rounded-2xl p-6 sm:p-10 text-[#1C1917] shadow-xs"
                  >
                    <div className="border-b border-[#F0EBE1] pb-4 mb-5">
                      <span className="text-sm font-mono uppercase tracking-widest text-[#A83B24] font-bold">
                        {scene.atoTitulo}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917] mt-1">
                        {scene.titulo}
                      </h2>
                    </div>

                    <div className="whitespace-pre-line font-sans text-sm sm:text-base text-[#2E2A25] leading-relaxed space-y-3">
                      {scene.conteudoExtenso}
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#F0EBE1] flex items-center justify-between text-sm text-[#5E584F] font-mono">
                      <span>Desenho Industrial · UFSM</span>
                      <span>História e Estética da Arte 1</span>
                    </div>
                  </div>
                )}

                {/* 6. STANDARD ARTWORK & OBJECT SCENE (IMAGE / COMPARISON) */}
                {(scene.tipo === 'image' || scene.tipo === 'comparison') && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center w-full">
                    {/* Left Column: Historiographical Context & Analysis */}
                    <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-center space-y-3.5">
                      <div
                      >
                        {/* Act Tag */}
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 rounded bg-[#FAF2EE] text-[#A83B24] text-xs font-mono font-bold uppercase tracking-wider border border-[#E8C9BF]">
                            {scene.atoTitulo || `Ato ${scene.ato}`}
                          </span>
                          {scene.cultura && (
                            <span className="text-sm text-[#4A453E] font-mono font-medium">
                              {scene.cultura}
                            </span>
                          )}
                        </div>

                        {/* Title & Subtitle */}
                        <h2 className="text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-serif font-bold text-[#1C1917] tracking-tight leading-[1.15]">
                          {scene.titulo}
                        </h2>
                        {scene.subtitulo && (
                          <p className="text-sm sm:text-base text-[#A83B24] font-mono mt-1 font-semibold">
                            {scene.subtitulo}
                          </p>
                        )}

                        {/* Chronology & Origin pill summary */}
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

                        {/* Synthesis Text */}
                        <p className="text-base sm:text-lg text-[#2E2A25] leading-relaxed font-sans mt-2.5">
                          {scene.conteudo}
                        </p>

                        {/* Secondary Content / Expanded historiography */}
                        {scene.conteudoExtenso && (
                          <p className="text-xs sm:text-sm text-[#4A453E] leading-relaxed mt-2 border-l-3 border-[#E8C9BF] pl-3 py-0.5 font-sans">
                            {scene.conteudoExtenso}
                          </p>
                        )}

                        {/* Color Palette Swatches */}
                        {scene.paletaCores && scene.paletaCores.length > 0 && (
                          <div className="mt-3.5 pt-2.5 border-t border-[#F0EBE1]">
                            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-[#4A453E] mb-1.5 font-bold">
                              <Palette className="w-4 h-4 text-[#A83B24]" />
                              <span>Paleta de Pigmentos Minerais & Matéria:</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-1.5">
                              {scene.paletaCores.map((color, i) => (
                                <button
                                  key={i}
                                  onClick={() => handleCopyColor(color.hex)}
                                  title={`${color.name} (${color.pigmentOrigin || color.hex}) · Clique para copiar HEX`}
                                  className="group relative flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white border border-[#E8E2D8] hover:border-[#A83B24] transition shadow-2xs cursor-pointer"
                                >
                                  <span
                                    className="w-3.5 h-3.5 rounded-full border border-black/20 shadow-inner"
                                    style={{ backgroundColor: color.hex }}
                                  />
                                  <span className="text-xs font-mono text-[#2E2A25] font-medium group-hover:text-[#A83B24]">
                                    {copiedHex === color.hex ? 'Copiado!' : color.name.split(' ')[0]}
                                  </span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Provocative Question Callout */}
                        {scene.perguntaPrincipal && (
                          <div className="mt-3.5 p-3.5 sm:p-4 rounded-xl bg-[#FAF2EE] border border-[#E8C9BF] text-[#752514]">
                            <strong className="text-xs font-mono uppercase tracking-widest text-[#A83B24] block mb-0.5 font-bold">
                              Pergunta Crítica:
                            </strong>
                            <p className="font-serif italic text-sm sm:text-base font-semibold leading-snug">
                              «{scene.perguntaPrincipal}»
                            </p>
                          </div>
                        )}

                        {/* Action buttons (Ficha Técnica & Deep Zoom) */}
                        <div className="flex flex-wrap items-center gap-2 mt-4">
                          <button
                            onClick={() => setSelectedTechnicalSheet(scene)}
                            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-[#F4EFEA] text-[#1C1917] text-xs sm:text-sm font-semibold border border-[#DCD3C7] transition shadow-xs cursor-pointer"
                          >
                            <FileText className="w-4 h-4 text-[#A83B24]" />
                            <span>Ficha Técnica</span>
                          </button>

                          {scene.imagemUrl && (
                            <button
                              onClick={() => handleOpenZoom(scene)}
                              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#A83B24] hover:bg-[#8F301C] text-white text-xs sm:text-sm font-bold transition shadow-xs cursor-pointer"
                            >
                              <ZoomIn className="w-4 h-4 text-white" />
                              <span>Lupa de Detalhes</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Visual Stage / Huge Image / Comparison / Simulator */}
                    <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-center justify-center w-full">
                      <div
                        className="w-full flex flex-col items-center"
                      >
                        {/* If scene has comparison data */}
                        {isComparison && scene.comparison ? (
                          <ComparisonViewer
                            scene={scene}
                            onOpenZoom={(url) => handleOpenZoom(scene, url)}
                          />
                        ) : scene.id === 'governar-22-panteao' ? (
                          // Roman Pantheon Light Simulator
                          <div className="w-full space-y-3">
                            <PantheonLightSimulator />
                            <div className="flex justify-end">
                              <button
                                onClick={() => handleOpenZoom(scene)}
                                className="flex items-center gap-1.5 text-xs text-[#A83B24] hover:text-[#8F301C] font-semibold cursor-pointer"
                              >
                                <ZoomIn className="w-3.5 h-3.5" />
                                <span>Ver cúpula em altíssima resolução</span>
                              </button>
                            </div>
                          </div>
                        ) : (
                          // Standard High-Res Large Image View
                          scene.imagemUrl && (
                            <div className="relative group w-full min-h-[50vh] max-h-[82vh] lg:max-h-[86vh] rounded-2xl overflow-hidden bg-white border border-[#E8E2D8] p-2 sm:p-3 shadow-lg flex flex-col items-center justify-center">
                              <img
                                src={scene.imagemUrl}
                                alt={scene.imagemAlt || scene.titulo}
                                className="w-full h-full max-h-[76vh] lg:max-h-[82vh] object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.015] cursor-zoom-in"
                                onClick={() => handleOpenZoom(scene)}
                                referrerPolicy="no-referrer"
                              />

                              {/* Hover Floating Trigger */}
                              <button
                                onClick={() => handleOpenZoom(scene)}
                                className="absolute bottom-5 right-5 flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 hover:bg-[#FAF2EE] text-[#A83B24] text-xs sm:text-sm font-bold backdrop-blur-sm border border-[#E8C9BF] transition shadow-lg opacity-90 group-hover:opacity-100 cursor-pointer"
                              >
                                <Eye className="w-4 h-4 text-[#A83B24]" />
                                <span>Inspecionar em Tela Cheia</span>
                              </button>

                              {/* Hotspots Indicator pill if available */}
                              {scene.hotspots && scene.hotspots.length > 0 && (
                                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-mono text-[#A83B24] border border-[#E8C9BF] flex items-center gap-1.5 font-bold shadow-sm">
                                  <Sparkles className="w-3.5 h-3.5 text-[#A83B24]" />
                                  <span>{scene.hotspots.length} Pontos Notáveis</span>
                                </div>
                              )}
                            </div>
                          )
                        )}

                        {/* Image Caption & Copyright */}
                        {scene.imagemFonte && (
                          <div className="w-full flex items-center justify-between text-xs text-[#7A7267] mt-2 px-1 font-mono">
                            <span>{scene.imagemFonte}</span>
                            {scene.imagemLicenca && (
                              <span className="bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#E8E2D8]">
                                {scene.imagemLicenca}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </main>

      {/* MODAL 1: Technical Sheet Modal */}
      <TechnicalSheetModal
        scene={selectedTechnicalSheet}
        onClose={() => setSelectedTechnicalSheet(null)}
      />

      {/* MODAL 2: Deep Zoom & Hotspot Inspection Modal */}
      <DeepZoomModal
        scene={deepZoomScene}
        initialImageUrl={deepZoomCustomUrl}
        onClose={() => {
          setDeepZoomScene(null);
          setDeepZoomCustomUrl(undefined);
        }}
      />

      {/* MODAL 3: Standalone Constellation Graph Overlay */}
      {showConstellationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white border border-[#E8E2D8] rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setShowConstellationModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF8F5] hover:bg-[#F4EFEA] text-[#5E584F] hover:text-[#1C1917] border border-[#E8E2D8] transition"
            >
              ✕
            </button>
            <ConstellationGraph
              scenes={scenes}
              onSelectScene={(targetId) => {
                setShowConstellationModal(false);
                const targetIdx = scenes.findIndex((s) => s.id === targetId);
                if (targetIdx !== -1) navigateToIndex(targetIdx);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

