import React from 'react';
import { X, ExternalLink, ShieldCheck, MapPin, Calendar, Layers, Palette, Eye, Award, BookOpen } from 'lucide-react';
import { Scene } from '../types';

interface TechnicalSheetModalProps {
  scene: Scene | null;
  onClose: () => void;
}

export const TechnicalSheetModal: React.FC<TechnicalSheetModalProps> = ({ scene, onClose }) => {
  if (!scene) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white border border-[#E8E2D8] rounded-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto shadow-2xl text-[#1C1917] p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF8F5] hover:bg-[#F4EFEA] text-[#5E584F] hover:text-[#1C1917] border border-[#E8E2D8] transition"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="border-b border-[#E8E2D8] pb-4 mb-5">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A83B24] font-bold block mb-1">
            Ficha Técnica & Historiografia Crítica
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1C1917]">
            {scene.titulo}
          </h2>
          {scene.subtitulo && (
            <p className="text-sm sm:text-base text-[#5E584F] font-mono mt-1 font-medium">{scene.subtitulo}</p>
          )}
        </div>

        {/* Large Artwork Preview inside Technical Sheet */}
        {scene.imagemUrl && (
          <div className="mb-6 rounded-xl overflow-hidden border border-[#E8E2D8] bg-[#FAF8F5] p-2 flex items-center justify-center relative group">
            <img
              src={scene.imagemUrl}
              alt={scene.imagemAlt || scene.titulo}
              className="max-h-[48vh] w-full object-contain rounded-lg shadow-xs"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          {scene.data && (
            <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E8E2D8]">
              <div className="flex items-center gap-1.5 text-[#5E584F] font-bold mb-1">
                <Calendar className="w-4 h-4 text-[#A83B24]" />
                <span>Cronologia / Datação</span>
              </div>
              <p className="text-[#1C1917] font-mono font-semibold text-base">{scene.data}</p>
            </div>
          )}

          {scene.cultura && (
            <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E8E2D8]">
              <div className="flex items-center gap-1.5 text-[#5E584F] font-bold mb-1">
                <Award className="w-4 h-4 text-[#A83B24]" />
                <span>Cultura / Período</span>
              </div>
              <p className="text-[#1C1917] font-semibold text-base">{scene.cultura}</p>
            </div>
          )}

          {scene.localOrigem && (
            <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E8E2D8]">
              <div className="flex items-center gap-1.5 text-[#5E584F] font-bold mb-1">
                <MapPin className="w-4 h-4 text-[#A83B24]" />
                <span>Local de Origem</span>
              </div>
              <p className="text-[#1C1917] font-medium">{scene.localOrigem}</p>
            </div>
          )}

          {scene.acervoAtual && (
            <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E8E2D8]">
              <div className="flex items-center gap-1.5 text-[#5E584F] font-bold mb-1">
                <ShieldCheck className="w-4 h-4 text-[#A83B24]" />
                <span>Acervo Atual / Localização</span>
              </div>
              <p className="text-[#1C1917] font-semibold">{scene.acervoAtual}</p>
            </div>
          )}

          {scene.material && (
            <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E8E2D8]">
              <div className="flex items-center gap-1.5 text-[#5E584F] font-bold mb-1">
                <Layers className="w-4 h-4 text-[#A83B24]" />
                <span>Material / Suporte</span>
              </div>
              <p className="text-[#1C1917] font-medium">{scene.material}</p>
            </div>
          )}

          {scene.tecnica && (
            <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E8E2D8]">
              <div className="flex items-center gap-1.5 text-[#5E584F] font-bold mb-1">
                <Palette className="w-4 h-4 text-[#A83B24]" />
                <span>Técnica de Execução</span>
              </div>
              <p className="text-[#1C1917] font-medium">{scene.tecnica}</p>
            </div>
          )}

          {scene.dimensoes && (
            <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E8E2D8] sm:col-span-2">
              <div className="flex items-center gap-1.5 text-[#5E584F] font-bold mb-1">
                <Eye className="w-4 h-4 text-[#A83B24]" />
                <span>Dimensões Físicas</span>
              </div>
              <p className="text-[#1C1917] font-mono font-medium">{scene.dimensoes}</p>
            </div>
          )}
        </div>

        {/* Composition analysis */}
        {scene.composicao && (
          <div className="mt-5 p-5 rounded-xl bg-[#FAF2EE] border border-[#E8C9BF]">
            <h4 className="text-xs sm:text-sm font-bold text-[#A83B24] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>Análise Morfológica & Visual</span>
            </h4>
            <p className="text-sm sm:text-base text-[#2E2A25] leading-relaxed font-sans">{scene.composicao}</p>
          </div>
        )}

        {/* Source & Rights */}
        <div className="mt-6 pt-4 border-t border-[#E8E2D8] flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-[#7A7267]">
          <div>
            <span>Fonte da Imagem: </span>
            <strong className="text-[#1C1917]">{scene.imagemFonte || 'Acervo Público'}</strong>
            {scene.imagemLicenca && (
              <span className="ml-2 px-2.5 py-0.5 rounded bg-[#FAF8F5] text-[#A83B24] font-bold border border-[#E8E2D8]">
                {scene.imagemLicenca}
              </span>
            )}
          </div>

          {scene.imagemLink && (
            <a
              href={scene.imagemLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#A83B24] hover:text-[#8F301C] font-bold underline cursor-pointer"
            >
              <span>Ver no acervo original</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

