import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/bibliografia")({
  head: () => ({
    meta: [
      { title: "Bibliografia — História da Arte I | UFSM" },
      {
        name: "description",
        content:
          "Bibliografia básica e complementar de História da Arte I 2026/2: narrativas clássicas, perspectivas críticas, globais e antropológicas da imagem.",
      },
      { property: "og:title", content: "Bibliografia — História da Arte I" },
      {
        property: "og:description",
        content: "Leituras que sustentam os quinze encontros do semestre, entre cânone e crítica.",
      },
    ],
  }),
  component: Bibliografia,
});

const basica = [
  { a: "GOMBRICH, E. H.", o: "A História da Arte.", e: "Rio de Janeiro: LTC." },
  { a: "JANSON, H. W.", o: "História Geral da Arte.", e: "São Paulo: Martins Fontes." },
  { a: "ARGAN, Giulio Carlo.", o: "História da Arte como História da Cidade.", e: "São Paulo: Martins Fontes." },
  { a: "PANOFSKY, Erwin.", o: "Significado nas Artes Visuais.", e: "São Paulo: Perspectiva." },
  { a: "WÖLFFLIN, Heinrich.", o: "Conceitos Fundamentais da História da Arte.", e: "São Paulo: Martins Fontes." },
];

const complementar = [
  { a: "DIDI-HUBERMAN, Georges.", o: "A Imagem Sobrevivente: história da arte e tempo dos fantasmas segundo Aby Warburg.", e: "Rio de Janeiro: Contraponto." },
  { a: "WARBURG, Aby.", o: "Atlas Mnemosyne.", e: "Madrid: Akal." },
  { a: "BELTING, Hans.", o: "Semelhança e Presença: a história da imagem antes da era da arte.", e: "Rio de Janeiro: Ars Urbe." },
  { a: "BERGER, John.", o: "Modos de Ver.", e: "Rio de Janeiro: Rocco." },
  { a: "GELL, Alfred.", o: "Arte e Agência: uma teoria antropológica.", e: "São Paulo: Ubu." },
  { a: "NOCHLIN, Linda.", o: "Por que não houve grandes mulheres artistas?", e: "São Paulo: Aurora." },
  { a: "PRICE, Sally.", o: "Arte Primitiva em Centros Civilizados.", e: "Rio de Janeiro: UFRJ." },
  { a: "KRENAK, Ailton.", o: "Ideias para Adiar o Fim do Mundo.", e: "São Paulo: Companhia das Letras." },
  { a: "FLUSSER, Vilém.", o: "Filosofia da Caixa Preta.", e: "São Paulo: Annablume." },
  { a: "BENJAMIN, Walter.", o: "A obra de arte na era de sua reprodutibilidade técnica.", e: "São Paulo: Brasiliense." },
  { a: "FOCILLON, Henri.", o: "A Vida das Formas.", e: "Lisboa: Edições 70." },
  { a: "BAXANDALL, Michael.", o: "O Olhar Renascente.", e: "Rio de Janeiro: Paz e Terra." },
];

function Lista({ titulo, itens }: { titulo: string; itens: { a: string; o: string; e: string }[] }) {
  return (
    <section className="mt-14">
      <h2 className="text-3xl">{titulo}</h2>
      <ul className="mt-6 border-t border-border">
        {itens.map((r) => (
          <li key={r.o} className="border-b border-border py-4 leading-relaxed">
            <span className="text-muted-foreground">{r.a}</span>{" "}
            <span className="italic">{r.o}</span>{" "}
            <span className="text-sm text-muted-foreground">{r.e}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Bibliografia() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Referências</p>
      <h1 className="mt-4 text-4xl sm:text-6xl">Bibliografia</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">
        A bibliografia básica oferece as narrativas de referência; a complementar as coloca em questão. O
        semestre trabalha na tensão entre as duas.
      </p>
      <Lista titulo="Bibliografia básica" itens={basica} />
      <Lista titulo="Bibliografia complementar" itens={complementar} />
      <p className="mt-12 text-sm text-muted-foreground">
        Textos específicos de cada encontro, recortes e materiais de apoio são indicados na página da aula
        correspondente e disponibilizados ao longo do semestre.
      </p>
    </div>
  );
}
