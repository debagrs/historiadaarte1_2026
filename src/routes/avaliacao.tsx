import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/avaliacao")({
  head: () => ({
    meta: [
      { title: "Avaliação e critérios — História da Arte I | UFSM" },
      {
        name: "description",
        content:
          "Como avaliamos História da Arte I em 2026/2: participação investigativa, projeto de descrição, diário de processo, Atlas Mnemosyne e critérios transversais.",
      },
      { property: "og:title", content: "Avaliação e critérios — História da Arte I" },
      {
        property: "og:description",
        content: "Quatro instrumentos de avaliação e os critérios transversais aplicados a todos eles.",
      },
    ],
  }),
  component: Avaliacao,
});

const instrumentos = [
  {
    peso: "20%",
    titulo: "Participação investigativa e fichas de podcast",
    itens: [
      "Presença ativa nas discussões em grupo e nas plenárias",
      "Fichas de escuta dos podcasts do NotebookLM, com verificação das fontes",
      "Contribuições escritas quando a fala oral não for possível",
      "Cumprimento das funções rotativas dentro do grupo-base",
    ],
  },
  {
    peso: "25%",
    titulo: "Projeto “Ver, descrever e reimaginar”",
    itens: [
      "Qualidade e precisão da descrição escrita",
      "Coerência da nova imagem em relação ao texto recebido",
      "Texto reflexivo sobre os desvios entre original, descrição e reimaginação",
      "Documentação do processo, inclusive de eventuais usos de IA",
    ],
  },
  {
    peso: "15%",
    titulo: "Diário ou caderno de processo",
    itens: [
      "Continuidade dos registros ao longo dos quinze encontros",
      "Anotações visuais, esboços, fotografias e recortes",
      "Registro de referências, dúvidas e caminhos abandonados",
      "Evidência de revisão e mudança de direção",
    ],
  },
  {
    peso: "40%",
    titulo: "Projeto final Atlas Mnemosyne",
    itens: [
      "Consistência do problema visual escolhido",
      "Critérios explícitos de seleção e montagem das imagens",
      "Texto crítico que articule teoria e prática",
      "Desdobramento projetual e participação na curadoria da exposição",
    ],
  },
];

const transversais = [
  "Investigação",
  "Interpretação",
  "Contextualização",
  "Articulação entre teoria e prática",
  "Capacidade de relacionar",
  "Clareza",
  "Autoria",
  "Documentação",
  "Responsabilidade com as fontes",
  "Abertura à revisão",
];

function Avaliacao() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Avaliação</p>
      <h1 className="mt-4 text-4xl sm:text-6xl">Como avaliamos</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">
        A avaliação é processual e contínua. Nenhum instrumento depende de memorização de nomes e datas: o
        que observamos é a construção de um modo de olhar, relacionar e projetar.
      </p>

      <div className="mt-14 space-y-6">
        {instrumentos.map((i) => (
          <section key={i.titulo} className="rounded-sm border border-border bg-card p-8">
            <div className="flex flex-wrap items-baseline gap-4">
              <span className="font-display text-5xl text-accent">{i.peso}</span>
              <h2 className="text-2xl">{i.titulo}</h2>
            </div>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {i.itens.map((t) => (
                <li key={t} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="mt-14">
        <h2 className="text-3xl">Critérios transversais</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Aplicados a todos os instrumentos acima, independentemente do formato da entrega.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {transversais.map((c) => (
            <li key={c} className="rounded-sm border border-border bg-secondary/60 px-3.5 py-2 text-sm">
              {c}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 rounded-sm border-l-2 border-accent bg-secondary/50 p-8">
        <h2 className="text-2xl">Sobre o uso de inteligência artificial</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          A IA é permitida e faz parte do método — os podcasts do NotebookLM são material de estudo. Mas ela
          não substitui a leitura nem a autoria. Toda utilização deve ser declarada e documentada no diário
          de processo, e as informações geradas devem ser verificadas nas fontes originais. Nomes, datas e
          atribuições incorretas são de responsabilidade de quem entrega o trabalho.
        </p>
      </section>
    </div>
  );
}
