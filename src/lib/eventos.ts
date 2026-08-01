import type { Aula } from "@/data/aulas";
import { semestre, tipoLabel } from "@/data/aulas";

/** Descrição textual do encontro usada no evento do Google Agenda. */
export function descricaoEvento(aula: Aula, baseUrl: string): string {
  const linhas: string[] = [];
  linhas.push(`${tipoLabel[aula.tipo]} — ${aula.subtitulo}`);
  linhas.push("");
  linhas.push(`Questão orientadora: ${aula.questao}`);
  if (aula.autores) linhas.push(`Autores: ${aula.autores}`);
  if (aula.tensao) linhas.push(`Tensão: ${aula.tensao}`);
  if (aula.recorte) linhas.push(`Recorte: ${aula.recorte}`);

  const temas = aula.conteudos ?? aula.conceitos;
  if (temas?.length) {
    linhas.push("");
    linhas.push("Temas do dia:");
    linhas.push(temas.map((t) => `• ${t}`).join("\n"));
  }

  linhas.push("");
  linhas.push(`Ateliê: ${aula.atelie.titulo}`);
  linhas.push(aula.atelie.descricao);

  linhas.push("");
  linhas.push("Tarefas dos estudantes:");
  linhas.push(aula.tarefas.map((t) => `• ${t}`).join("\n"));

  if (aula.projetos?.length) {
    linhas.push("");
    linhas.push("Marcos dos projetos:");
    linhas.push(aula.projetos.map((p) => `• ${p}`).join("\n"));
  }

  linhas.push("");
  linhas.push(`Imagem da aula: ${baseUrl}${aula.imagem}`);
  linhas.push(`Página da aula: ${baseUrl}/aulas/${aula.slug}`);

  return linhas.join("\n");
}

/** Corpo do evento no formato da API do Google Calendar. */
export function montarEvento(aula: Aula, baseUrl: string) {
  return {
    summary: `Aula ${aula.numero} — ${aula.titulo}: ${aula.subtitulo}`,
    location: aula.local,
    description: descricaoEvento(aula, baseUrl),
    start: { dateTime: `${aula.data}T${aula.inicio}:00`, timeZone: semestre.fuso },
    end: { dateTime: `${aula.data}T${aula.fim}:00`, timeZone: semestre.fuso },
    source: { title: `Aula ${aula.numero} — História da Arte I`, url: `${baseUrl}/aulas/${aula.slug}` },
    reminders: {
      useDefault: false,
      overrides: [
        { method: "popup", minutes: 24 * 60 },
        { method: "popup", minutes: 60 },
      ],
    },
    extendedProperties: {
      private: { historiaDaArteAula: String(aula.numero) },
    },
  };
}
