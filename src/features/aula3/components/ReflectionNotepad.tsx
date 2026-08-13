import React, { useState, useEffect } from 'react';
import { Edit3, Copy, Check, Sparkles } from 'lucide-react';

export const ReflectionNotepad: React.FC = () => {
  const [reflection, setReflection] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('aula03_reflexao');
    if (saved) setReflection(saved);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setReflection(val);
    localStorage.setItem('aula03_reflexao', val);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(reflection);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full bg-white border border-[#E8E2D8] rounded-2xl p-6 sm:p-8 shadow-xs text-[#1C1917] my-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F0EBE1] pb-4 mb-5">
        <div>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#A83B24] font-mono flex items-center gap-1.5 font-semibold">
            <Edit3 className="w-3.5 h-3.5" />
            Caderno de Síntese & Investigação Projetual
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917] mt-1">
            Espaço de Reflexão do Estudante
          </h3>
          <p className="text-xs sm:text-sm text-[#5E584F] mt-0.5">
            Registre suas anotações, conexões com o Desenho Industrial e interpretações para o debate em sala com a Profa. Débora.
          </p>
        </div>

        <button
          onClick={handleCopy}
          disabled={!reflection.trim()}
          className="self-start sm:self-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-[#A83B24] hover:bg-[#8F301C] text-white font-medium text-xs transition shadow-xs disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-white" />
              <span>Copiado com Sucesso!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copiar Anotação</span>
            </>
          )}
        </button>
      </div>

      <div className="space-y-3">
        <label className="block text-xs font-semibold text-[#423C34] leading-relaxed">
          Como os 5 verbos fundamentais (Marcar, Habitar, Organizar, Normatizar, Governar) transformam o seu olhar para o projeto de design e a cultura material?
        </label>
        <textarea
          value={reflection}
          onChange={handleChange}
          rows={5}
          placeholder="Escreva aqui suas reflexões, correlações projetuais e respostas às perguntas críticas da aula..."
          className="w-full rounded-xl bg-[#FAF8F5] border border-[#DCD3C7] focus:border-[#A83B24] focus:ring-2 focus:ring-[#A83B24]/20 p-4 text-sm text-[#1C1917] placeholder-[#8C8477] focus:outline-none transition leading-relaxed font-sans"
        />
        <div className="flex items-center justify-between text-[11px] text-[#7A7267] font-mono">
          <span>{reflection.length} caracteres registrados</span>
          <span className="text-emerald-700 font-medium">✓ Salvo localmente no navegador</span>
        </div>
      </div>
    </div>
  );
};

