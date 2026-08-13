import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Crosshair, Info } from 'lucide-react';
import { Hotspot, Scene } from '../types';

interface DeepZoomModalProps {
  scene: Scene | null;
  initialImageUrl?: string;
  onClose: () => void;
}

export const DeepZoomModal: React.FC<DeepZoomModalProps> = ({ scene, initialImageUrl, onClose }) => {
  if (!scene) return null;

  const imageUrl = initialImageUrl || scene.imagemUrl;
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [showHotspots, setShowHotspots] = useState(true);

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.5, 5));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.5, 1));
  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setActiveHotspot(null);
  };

  const handleHotspotClick = (h: Hotspot) => {
    setActiveHotspot(h);
    const targetZoom = h.zoomLevel || 2.8;
    setScale(targetZoom);
    // Pan to position the hotspot near center
    const panX = (50 - h.x) * 4.5;
    const panY = (50 - h.y) * 4.5;
    setPosition({ x: panX, y: panY });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const onMouseUp = () => setIsDragging(false);

  return (
    <div className="fixed inset-0 z-50 bg-[#141210]/95 backdrop-blur-md flex flex-col select-none animate-in fade-in duration-200">
      {/* Top bar controls */}
      <div className="h-16 border-b border-[#2C2723] px-6 flex items-center justify-between text-[#FAF8F5] z-10 bg-[#1C1917]/90">
        <div>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#D9822B] font-mono font-semibold">
            Modo Lupa & Análise de Detalhes
          </span>
          <h3 className="text-sm sm:text-base font-serif font-bold text-white">
            {scene.titulo}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          {scene.hotspots && scene.hotspots.length > 0 && (
            <button
              onClick={() => setShowHotspots(!showHotspots)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition border ${
                showHotspots
                  ? 'bg-[#A83B24]/30 text-[#F5C2B6] border-[#A83B24]'
                  : 'bg-[#2C2723] text-[#A89E91] border-[#3D3731]'
              }`}
              title="Exibir ou ocultar pontos de observação crítica"
            >
              <Crosshair className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Pontos Notáveis ({scene.hotspots.length})</span>
            </button>
          )}

          <div className="flex items-center bg-[#2C2723] rounded-lg p-0.5 border border-[#3D3731]">
            <button
              onClick={handleZoomIn}
              className="p-1.5 hover:text-[#D9822B] text-[#E0D8CC] rounded hover:bg-[#3D3731] transition"
              title="Aproximar (+)"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomOut}
              className="p-1.5 hover:text-[#D9822B] text-[#E0D8CC] rounded hover:bg-[#3D3731] transition"
              title="Afastar (-)"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleReset}
              className="p-1.5 hover:text-[#D9822B] text-[#E0D8CC] rounded hover:bg-[#3D3731] transition"
              title="Redefinir Zoom"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#2C2723] hover:bg-[#A83B24] text-[#E0D8CC] hover:text-white transition"
            title="Fechar (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div
        className="flex-1 relative overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <div
          className="relative max-w-full max-h-full transition-transform duration-100 ease-out"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          }}
        >
          <img
            src={imageUrl}
            alt={scene.imagemAlt || scene.titulo}
            className="max-h-[88vh] max-w-[94vw] object-contain shadow-2xl border border-[#2C2723] rounded-xl pointer-events-none"
            referrerPolicy="no-referrer"
          />

          {/* Hotspots Overlay */}
          {showHotspots &&
            scene.hotspots &&
            scene.hotspots.map((h, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  handleHotspotClick(h);
                }}
                style={{ left: `${h.x}%`, top: `${h.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group pointer-events-auto z-20"
              >
                <span className="relative flex h-7 w-7">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A83B24] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-7 w-7 bg-[#A83B24] text-white font-mono text-xs font-bold items-center justify-center shadow-lg border-2 border-white">
                    {i + 1}
                  </span>
                </span>
              </button>
            ))}
        </div>

        {/* Hotspot details banner */}
        {activeHotspot && (
          <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-96 bg-white/95 border border-[#E8E2D8] p-4 rounded-xl shadow-2xl backdrop-blur-md text-[#1C1917] z-30 animate-in slide-in-from-bottom-3 duration-200">
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-1.5 text-[#A83B24] font-semibold text-xs">
                <Info className="w-4 h-4" />
                <span>{activeHotspot.label}</span>
              </div>
              <button
                onClick={() => setActiveHotspot(null)}
                className="text-[#8C8477] hover:text-[#1C1917] p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-xs text-[#423C34] leading-relaxed font-sans">
              {activeHotspot.description}
            </p>
          </div>
        )}
      </div>

      {/* Bottom status bar */}
      <div className="h-10 border-t border-[#2C2723] px-6 flex items-center justify-between text-xs text-[#A89E91] bg-[#1C1917]/90 font-mono">
        <div>
          Dica: Arraste para mover o plano · Use a roda do mouse ou botões para ampliar
        </div>
        <div className="text-[#D9822B] font-semibold">
          Zoom: {Math.round(scale * 100)}%
        </div>
      </div>
    </div>
  );
};

