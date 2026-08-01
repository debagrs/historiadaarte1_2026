import { createFileRoute, Link } from "@tanstack/react-router";
import { aulas } from "@/data/aulas";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos do semestre — Atlas Mnemosyne | História da Arte I UFSM" },
      {
        name: "description",
        content:
          "Os dois projetos de História da Arte I 2026/2: “Ver, descrever e reimaginar” e o Atlas Mnemosyne — sobrevivências da história da arte no design.",
      },
      { property: "og:title", content: "Projetos — Atlas Mnemosyne e Ver, descrever e reimaginar" },
      {
        property: "og:description",
        content: "Duas investigações visual-projetuais que atravessam os quinze encontros do semestre.",
      },
    ],
  }),
  component: Projetos,
});

const etapasAtlas = [
  { n: 1, titulo: "Definição do problema visual", texto: "Escolha de um tema, uma forma, um gesto ou uma questão que se repita ao longo do tempo." },
  { n: 2, titulo: "Pesquisa e coleta", texto: "Reunir imagens de diferentes períodos, culturas e mídias, com fonte registrada." },
  { n: 3, titulo: "Seleção e critérios", texto: "Explicitar por que cada imagem entra e por que outras foram descartadas." },
  { n: 4, titulo: "Montagem do painel", texto: "Trabalhar escala, vizinhança, ritmo e vazio como argumentos visuais." },
  { n: 5, titulo: "Texto crítico", texto: "Um texto curto que sustente a montagem e articule teoria e prática." },
  { n: 6, titulo: "Desdobramento projetual", texto: "Uma peça de design derivada da investigação: objeto, sistema visual, espaço ou interface." },
  { n: 7, titulo: "Curadoria e exposição", texto: "Montagem coletiva, mediação e visita comentada no último encontro." },
];

function Projetos() {
  const marcos = aulas.filter((a) => a.projetos?.length);

  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Projetos</p>
      <h1 className="mt-4 text-4xl sm:text-6xl">Duas investigações longas</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">
        Os projetos não são trabalhos finais isolados: eles atravessam o semestre e são construídos aula a
        aula, com documentação contínua no diário de processo.
      </p>

      <section className="mt-16 rounded-sm border border-border bg-card p-8">
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Projeto 1 · 25% · encontros 3 a 8</p>
        <h2 className="mt-3 text-3xl">Ver, descrever e reimaginar</h2>
        <p className="mt-4 leading-relaxed">
          Cada estudante escolhe uma obra e escreve uma descrição detalhada, sem nomear a obra, o autor ou o
          período. Essa descrição é entregue a um colega, que produz uma nova imagem a partir apenas do texto
          — desenho, colagem, fotografia, modelagem ou imagem gerada por IA, desde que o processo esteja
          documentado.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {[
            { t: "Descrever", d: "Exercício de atenção: o que está de fato na imagem, antes de qualquer interpretação." },
            { t: "Traduzir", d: "O colega interpreta o texto sem ver o original. A distância é o material da análise." },
            { t: "Confrontar", d: "Original, descrição e nova imagem lado a lado, com reflexão escrita sobre o desvio." },
          ].map((x) => (
            <div key={x.t}>
              <h3 className="text-lg text-accent">{x.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Entrega: original, descrição, nova imagem e texto reflexivo — apresentados no encontro 8.
        </p>
      </section>

      <section className="mt-10 rounded-sm border border-border bg-card p-8">
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Projeto 2 · 40% · encontros 8 a 15</p>
        <h2 className="mt-3 text-3xl">Atlas Mnemosyne</h2>
        <p className="mt-1 font-display text-xl italic text-accent">
          sobrevivências da história da arte no design
        </p>
        <p className="mt-4 leading-relaxed">
          Inspirado no atlas de Aby Warburg, o projeto é uma investigação visual autoral sobre a permanência
          e a transformação de formas, gestos e imagens ao longo do tempo — e sobre como essas sobrevivências
          operam no design contemporâneo. Pode ser individual ou em dupla.
        </p>
        <ol className="mt-8 border-t border-border">
          {etapasAtlas.map((e) => (
            <li key={e.n} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-border py-4">
              <span className="font-display text-2xl text-accent">{e.n}</span>
              <span>
                <span className="text-lg">{e.titulo}</span>
                <span className="block text-sm leading-relaxed text-muted-foreground">{e.texto}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl">Marcos ao longo dos encontros</h2>
        <ul className="mt-6 border-t border-border">
          {marcos.map((a) => (
            <li key={a.slug} className="border-b border-border py-4">
              <Link to="/aulas/$numero" params={{ numero: a.slug }} className="group grid gap-1 sm:grid-cols-[8rem_1fr]">
                <span className="text-sm text-muted-foreground">Encontro {a.numero}</span>
                <span>
                  {a.projetos!.map((p) => (
                    <span key={p} className="block group-hover:text-accent">
                      {p}
                    </span>
                  ))}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
