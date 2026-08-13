import React, { useState } from 'react';
import { Compass, Sparkles, ArrowUpRight, Filter, BookOpen } from 'lucide-react';
import { Scene } from '../types';

interface ConstellationGraphProps {
  scenes: Scene[];
  onSelectScene: (sceneId: string) => void;
}

export const ConstellationGraph: React.FC<ConstellationGraphProps> = ({ scenes, onSelectScene }) => {
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);

  // Extract unique concepts across all scenes
  const allConcepts = Array.from(
    new Set(scenes.flatMap((s) => s.conceitos || []))
  ).filter(Boolean);

  // Filter scenes matching selected concept
  const filteredScenes = selectedConcept
    ? scenes.filter((s) => s.conceitos && s.conceitos.includes(selectedConcept))
    : scenes.filter((s) => s.tipo === 'image' || s.tipo === 'comparison');

  return (
    <div className="w-full bg-white border border-[#E8E2D8] rounded-2xl p-6 sm:p-8 shadow-xs text-[#1C1917] my-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F0EBE1] pb-4 mb-6">
        <div>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#A83B24] font-mono flex items-center gap-1.5 font-semibold">
            <Compass className="w-4 h-4" />
            Mapa Conceitual & Epistemológico
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917] mt-1">
            Constelação de Obras, Conceitos e Disputas
          </h3>
          <p className="text-xs sm:text-sm text-[#5E584F] mt-0.5">
            Filtre por conceitos estruturantes para investigar continuidades, rupturas e tensões na cultura material.
          </p>
        </div>

        {selectedConcept && (
          <button
            onClick={() => setSelectedConcept(null)}
            className="self-start sm:self-auto text-xs px-3 py-1.5 rounded-lg bg-[#FAF8F5] hover:bg-[#F4EFEA] text-[#1C1917] border border-[#E8E2D8] flex items-center gap-1.5 transition font-medium"
          >
            <Filter className="w-3.5 h-3.5 text-[#A83B24]" />
            <span>Limpar Filtro ({selectedConcept})</span>
          </button>
        )}
      </div>

      {/* Concept Badges / Nodes */}
      <div className="flex flex-wrap gap-2 mb-6">
        {allConcepts.map((concept) => {
          const count = scenes.filter(
            (s) => s.conceitos && s.conceitos.includes(concept)
          ).length;
          const isSelected = selectedConcept === concept;

          return (
            <button
              key={concept}
              onClick={() => setSelectedConcept(isSelected ? null : concept)}
              className={`text-xs px-3.5 py-1.5 rounded-full transition-all border flex items-center gap-2 ${
                isSelected
                  ? 'bg-[#A83B24] text-white border-[#A83B24] font-semibold shadow-xs scale-105'
                  : 'bg-[#FAF8F5] hover:bg-[#FAF2EE] text-[#4A453E] hover:text-[#A83B24] border-[#E8E2D8]'
              }`}
            >
              <span>{concept}</span>
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full font-mono ${
                  isSelected ? 'bg-white/20 text-white font-bold' : 'bg-[#EBE5DB] text-[#5E584F]'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of Linked Artworks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredScenes.map((scene) => (
          <div
            key={scene.id}
            onClick={() => onSelectScene(scene.id)}
            className="group cursor-pointer bg-[#FAF8F5] hover:bg-white border border-[#E8E2D8] hover:border-[#A83B24]/40 hover:shadow-md rounded-xl p-3.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Thumbnail */}
              {scene.imagemUrl && (
                <div className="relative aspect-video rounded-lg overflow-hidden bg-white mb-3 border border-[#E8E2D8]">
                  <img
                    src={scene.imagemUrl}
                    alt={scene.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded text-xs font-mono text-[#A83B24] border border-[#E8E2D8] font-semibold">
                    Ato {scene.ato > 0 ? scene.ato : 'P'}
                  </div>
                </div>
              )}

              <h4 className="font-serif text-sm font-bold text-[#1C1917] group-hover:text-[#A83B24] transition-colors line-clamp-1">
                {scene.titulo}
              </h4>
              <p className="text-[11px] text-[#5E584F] font-mono mt-0.5 line-clamp-1">
                {scene.cultura || scene.subtitulo || 'Estudo Historiográfico'}
              </p>
            </div>

            {/* Tags footer */}
            <div className="mt-3 pt-2.5 border-t border-[#E8E2D8] flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {(scene.conceitos || []).slice(0, 2).map((c, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-0.5 rounded bg-white text-[#5E584F] border border-[#E8E2D8] font-sans"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#8C8477] group-hover:text-[#A83B24] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

