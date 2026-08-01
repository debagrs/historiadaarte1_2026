import { createFileRoute } from "@tanstack/react-router";
import { semestre } from "@/data/aulas";

export const Route = createFileRoute("/metodologia")({
  head: () => ({
    meta: [
      { title: "Metodologia — História da Arte I | UFSM" },
      {
        name: "description",
        content:
          "O método de História da Arte I 2026/2: experiência antes da explicação, grupos-base, plenárias, ateliê e uso transparente de IA em uma turma de quarenta estudantes.",
      },
      { property: "og:title", content: "Metodologia — História da Arte I" },
      {
        property: "og:description",
        content: "Como funciona uma manhã de três horas com quarenta pessoas: ritmo, funções e ateliê.",
      },
    ],
  }),
  component: Metodologia,
});

const principios = [
  {
    t: "Experiência antes da explicação",
    d: "Cada encontro começa por um contato direto com imagens, objetos ou espaços. A contextualização histórica vem depois, para responder a perguntas que já surgiram.",
  },
  {
    t: "Cronologia como orientação, não como destino",
    d: "Percorremos a linha do tempo, mas praticamos o anacronismo deliberado: aproximar imagens distantes para produzir conhecimento.",
  },
  {
    t: "Turma grande, trabalho pequeno",
    d: "Oito grupos-base de cinco pessoas garantem que todo mundo fale. A plenária existe para atravessar os grupos, não para substituí-los.",
  },
  {
    t: "Design como campo de chegada",
    d: "Toda investigação histórica desemboca em uma pergunta projetual: o que isso faz com o modo como projetamos hoje?",
  },
];

const ritmo = [
  { d: "20 min", t: "Abertura e experiência", x: "Uma imagem, um objeto, um som ou uma caminhada. Sem legenda." },
  { d: "40 min", t: "Trabalho em grupos-base", x: "Observação guiada, descrição, comparação, registro." },
  { d: "30 min", t: "Plenária", x: "Relatores apresentam; quem ainda não falou tem prioridade." },
  { d: "15 min", t: "Intervalo", x: "Necessário. Três horas exigem pausa." },
  { d: "60 min", t: "Ateliê", x: "Produção prática vinculada ao tema do dia e aos projetos do semestre." },
  { d: "15 min", t: "Documentação e combinados", x: "Registro no diário e definição das tarefas da semana." },
];

const funcoes = [
  { t: "Mediador", d: "Garante que todos falem e que a discussão avance." },
  { t: "Relator", d: "Sintetiza e apresenta na plenária." },
  { t: "Pesquisador", d: "Verifica fontes, datas, autorias e contextos." },
  { t: "Crítico", d: "Formula a objeção que o grupo não quis fazer." },
  { t: "Responsável pelo tempo", d: "Mantém o grupo dentro dos blocos previstos." },
];

function Metodologia() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Metodologia</p>
      <h1 className="mt-4 text-4xl sm:text-6xl">Como trabalhamos</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">
        {semestre.cargaHoraria} distribuídas em quinze manhãs de sexta-feira, com uma turma de cerca de
        quarenta estudantes. O método existe para que esse tamanho não impeça a conversa.
      </p>

      <section className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
        {principios.map((p) => (
          <div key={p.t} className="bg-background p-6">
            <h2 className="text-xl text-accent">{p.t}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-3xl">O ritmo de uma manhã</h2>
        <ol className="mt-6 border-t border-border">
          {ritmo.map((r) => (
            <li key={r.t} className="grid grid-cols-[5rem_1fr] gap-4 border-b border-border py-4">
              <span className="tabular-nums text-sm text-accent">{r.d}</span>
              <span>
                <span className="text-lg">{r.t}</span>
                <span className="block text-sm text-muted-foreground">{r.x}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl">Funções rotativas no grupo-base</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          As funções mudam a cada encontro, de modo que todo mundo passe por todas ao longo do semestre.
        </p>
        <ul className="mt-6 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {funcoes.map((f) => (
            <li key={f.t} className="bg-background p-5">
              <h3 className="text-lg">{f.t}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 rounded-sm border-l-2 border-accent bg-secondary/50 p-8">
        <h2 className="text-2xl">Podcasts do NotebookLM</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Antes de vários encontros há um podcast gerado a partir das leituras da disciplina. Ele funciona
          como preparação e como objeto de crítica: a ficha de escuta pede que você anote o que o áudio
          afirma, o que ele omite e o que a fonte original diz de fato. Escutar não substitui ler.
        </p>
      </section>
    </div>
  );
}
