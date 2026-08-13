import React, { useState } from 'react';
import { Columns, SplitSquareVertical, ArrowRightLeft, ZoomIn, Eye, Sparkles } from 'lucide-react';
import { Scene } from '../types';

interface ComparisonViewerProps {
  scene: Scene;
  onOpenZoom: (url: string) => void;
}

export const ComparisonViewer: React.FC<ComparisonViewerProps> = ({ scene, onOpenZoom }) => {
  const comparison = scene.comparison;
  const [sliderPosition, setSliderPosition] = useState(50);
  const [mode, setMode] = useState<'side-by-side' | 'slider'>('side-by-side');

  if (!comparison) return null;

  return (
    <div className="w-full bg-white border border-[#E8E2D8] rounded-2xl overflow-hidden shadow-md p-3 sm:p-5 my-2">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F0EBE1] pb-3 mb-3">
        <div>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#A83B24] font-mono font-semibold block mb-0.5">
            Estudo Comparativo Morfológico
          </span>
          <h4 className="text-base sm:text-lg font-serif font-bold text-[#1C1917]">
            {comparison.titleLeft} <span className="text-[#A83B24] font-sans">×</span> {comparison.titleRight}
          </h4>
        </div>

        <div className="flex items-center gap-1.5 bg-[#FAF8F5] p-1 rounded-xl border border-[#E8E2D8] text-xs">
          <button
            onClick={() => setMode('side-by-side')}
            className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition ${
              mode === 'side-by-side'
                ? 'bg-white text-[#A83B24] shadow-xs font-semibold'
                : 'text-[#5E584F] hover:text-[#1C1917]'
            }`}
          >
            <Columns className="w-3.5 h-3.5" />
            <span>Lado a Lado</span>
          </button>
          <button
            onClick={() => setMode('slider')}
            className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition ${
              mode === 'slider'
                ? 'bg-white text-[#A83B24] shadow-xs font-semibold'
                : 'text-[#5E584F] hover:text-[#1C1917]'
            }`}
          >
            <SplitSquareVertical className="w-3.5 h-3.5" />
            <span>Cortina Dinâmica</span>
          </button>
        </div>
      </div>

      {/* Main View Area */}
      {mode === 'side-by-side' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {/* Left Item */}
          <div className="flex flex-col bg-[#FAF8F5] rounded-xl p-2.5 sm:p-3 border border-[#E8E2D8]">
            <div className="relative h-[48vh] sm:h-[58vh] lg:h-[64vh] w-full overflow-hidden rounded-lg bg-white border border-[#E8E2D8] flex items-center justify-center group p-1.5">
              <img
                src={comparison.imageLeft}
                alt={comparison.titleLeft}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => onOpenZoom(comparison.imageLeft)}
                className="absolute bottom-3 right-3 p-2.5 rounded-xl bg-white/95 hover:bg-[#FAF2EE] text-[#A83B24] opacity-90 group-hover:opacity-100 transition shadow-md border border-[#E8C9BF] cursor-pointer"
                title="Ampliar obra"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>
            <h5 className="font-serif text-sm font-bold text-[#A83B24] mt-2.5 mb-0.5">
              {comparison.titleLeft}
            </h5>
            <p className="text-xs text-[#423C34] leading-relaxed font-sans">
              {comparison.captionLeft}
            </p>
          </div>

          {/* Right Item */}
          <div className="flex flex-col bg-[#FAF8F5] rounded-xl p-2.5 sm:p-3 border border-[#E8E2D8]">
            <div className="relative h-[48vh] sm:h-[58vh] lg:h-[64vh] w-full overflow-hidden rounded-lg bg-white border border-[#E8E2D8] flex items-center justify-center group p-1.5">
              <img
                src={comparison.imageRight}
                alt={comparison.titleRight}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => onOpenZoom(comparison.imageRight)}
                className="absolute bottom-3 right-3 p-2.5 rounded-xl bg-white/95 hover:bg-[#FAF2EE] text-[#A83B24] opacity-90 group-hover:opacity-100 transition shadow-md border border-[#E8C9BF] cursor-pointer"
                title="Ampliar obra"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>
            <h5 className="font-serif text-sm font-bold text-[#A83B24] mt-2.5 mb-0.5">
              {comparison.titleRight}
            </h5>
            <p className="text-xs text-[#423C34] leading-relaxed font-sans">
              {comparison.captionRight}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full">
          <div className="relative w-full h-[52vh] sm:h-[62vh] lg:h-[68vh] overflow-hidden rounded-xl border border-[#E8E2D8] bg-[#FAF8F5] select-none p-1.5 shadow-inner">
            {/* Background (Right Image) */}
            <img
              src={comparison.imageRight}
              alt={comparison.titleRight}
              className="absolute inset-0 w-full h-full object-contain pointer-events-none p-2"
              referrerPolicy="no-referrer"
            />

            {/* Foreground (Left Image) with clip-path */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none p-2"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={comparison.imageLeft}
                alt={comparison.titleLeft}
                className="absolute inset-0 w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-[#A83B24] shadow-[0_0_10px_rgba(168,59,36,0.5)] z-10 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#A83B24] text-white flex items-center justify-center shadow-lg border-2 border-white">
                <ArrowRightLeft className="w-4 h-4" />
              </div>
            </div>

            {/* Slider range input overlay */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />
          </div>

          <div className="flex justify-between w-full text-xs text-[#5E584F] font-mono mt-2 px-1">
            <span>← {comparison.titleLeft}</span>
            <span>{comparison.titleRight} →</span>
          </div>
        </div>
      )}

      {/* Prompt / Didactic challenge */}
      {comparison.prompt && (
        <div className="mt-3.5 p-3 sm:p-4 bg-[#FAF2EE] border border-[#E8C9BF] rounded-xl text-[#752514] text-xs leading-relaxed">
          <strong className="text-[#A83B24] block mb-0.5 font-semibold">
            Pergunta de Análise Formal:
          </strong>
          {comparison.prompt}
        </div>
      )}
    </div>
  );
};

