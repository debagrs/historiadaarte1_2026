import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, ExternalLink, MapPin } from "lucide-react";
import { aulas, formatarData, marcosAcademicos, semestre, tipoLabel } from "@/data/aulas";
import { BotaoAgenda } from "@/components/BotaoAgenda";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "História da Arte I — Semestre 2026/2 | UFSM Desenho Industrial" },
      {
        name: "description",
        content:
          "Guia completo do semestre: 15 encontros, combinados, avaliação, projetos e o Atlas Mnemosyne na disciplina de História da Arte I da UFSM.",
      },
      { property: "og:title", content: "História da Arte I — Semestre 2026/2" },
      {
        property: "og:description",
        content:
          "Sextas-feiras de manhã, 15 encontros de 3 horas. Experiência, investigação visual, interpretação e projeto.",
      },
    ],
  }),
  component: Index,
});

const combinados = [
  {
    titulo: "Sextas de manhã, 3 horas",
    texto:
      "Cada encontro tem ritmo próprio: escuta, discussão em grupos, plenária, intervalo, ateliê e documentação. Chegar no horário é parte do combinado.",
  },
  {
    titulo: "Experiência antes da explicação",
    texto:
      "Observar, caminhar, fotografar, descrever e relacionar vêm antes de receber todas as explicações históricas.",
  },
  {
    titulo: "Grupos-base e funções rotativas",
    texto:
      "Oito grupos de cinco. As funções giram: mediador, relator, pesquisador, crítico e responsável pelo tempo.",
  },
  {
    titulo: "Quem ainda não falou, fala primeiro",
    texto:
      "Antes de uma segunda fala na plenária, priorizamos quem ainda não participou. Também vale participar por escrito.",
  },
  {
    titulo: "IA com transparência",
    texto:
      "Podcasts do NotebookLM não substituem a leitura. Sempre consultar as fontes, verificar nomes e datas, e registrar o que foi feito com IA.",
  },
  {
    titulo: "Diário de processo sempre aberto",
    texto:
      "Registrar decisões, testes, referências descartadas e mudanças de direção. Avaliamos o processo, não o acabamento gráfico.",
  },
];

const avaliacoes = [
  { peso: "20%", titulo: "Participação investigativa e fichas de podcast" },
  { peso: "25%", titulo: "Projeto “Ver, descrever e reimaginar”" },
  { peso: "15%", titulo: "Diário ou caderno de processo" },
  { peso: "40%", titulo: "Projeto final Atlas Mnemosyne" },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="grao border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            {semestre.curso}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl leading-[1.05] sm:text-7xl">
            História da Arte I
            <span className="block italic text-accent">semestre {semestre.ano}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Um percurso de quinze sextas-feiras pela pintura, arquitetura, escultura e cultura material —
            da pré-história ao presente — tratando a história da arte como experiência, investigação
            visual, interpretação e projeto.
          </p>
          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-sm">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Carga horária</dt>
              <dd className="mt-1 font-display text-xl">{semestre.cargaHoraria}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Encontros</dt>
              <dd className="mt-1 font-display text-xl">15 × 3 horas</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Horário</dt>
              <dd className="mt-1 font-display text-xl">Sextas, 08h30–11h30</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Período</dt>
              <dd className="mt-1 font-display text-xl">07/08 a 27/11/2026</dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/aulas"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Ver os 15 encontros <ArrowRight className="h-4 w-4" />
            </Link>
            <BotaoAgenda variante="discreto" />
          </div>
          <p className="mt-3 max-w-xl text-xs text-muted-foreground">
            A sincronização cria (ou atualiza) os 15 encontros na sua agenda Google, com temas do dia,
            tarefas resumidas e link para a imagem de cada aula.
          </p>
        </div>
      </section>

      {/* Parede de imagens — referência aos salões do século XIX */}
      <section className="salon-wall border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-eyebrow text-primary">Galeria do semestre</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">Imagens em constelação</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Como nas paredes densas dos salões do século XIX, obras de tempos e dimensões diferentes
                convivem lado a lado. A montagem antecipa o método comparativo desenvolvido no Atlas Mnemosyne.
              </p>
            </div>
            <a
              href={import.meta.env.VITE_CONSTELACOES_URL || "https://github.com/debagrs/constalacoes"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-primary px-4 py-2 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Explorar Constelações <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 items-center gap-5 sm:grid-cols-4 lg:grid-cols-6">
            {aulas.slice(0, 10).map((a, index) => {
              const tamanhos = [
                "sm:col-span-2 sm:row-span-2",
                "",
                "lg:col-span-2",
                "",
                "sm:row-span-2",
                "lg:col-span-2",
                "",
                "sm:col-span-2",
                "",
                "lg:col-span-2",
              ];
              const proporcoes = [
                "aspect-[4/5]",
                "aspect-[3/4]",
                "aspect-[5/4]",
                "aspect-[2/3]",
                "aspect-[3/5]",
                "aspect-[16/10]",
                "aspect-square",
                "aspect-[5/4]",
                "aspect-[3/4]",
                "aspect-[16/10]",
              ];
              const giros = ["-rotate-1", "rotate-1", "rotate-0", "-rotate-1", "rotate-1"];
              return (
                <Link
                  key={a.slug}
                  to="/aulas/$numero"
                  params={{ numero: a.slug }}
                  className={`${tamanhos[index]} group`}
                  aria-label={`Abrir encontro ${a.numero}: ${a.titulo}`}
                >
                  <figure className={`art-frame ${giros[index % giros.length]}`}>
                    <div className={`${proporcoes[index]} overflow-hidden bg-muted`}>
                      <img src={a.imagem} alt={a.imagemAlt} loading="lazy" className="transition-transform duration-500 group-hover:scale-[1.03]" />
                    </div>
                    <figcaption className="px-1 pb-1 pt-3 text-center">
                      <span className="block text-eyebrow text-primary">Encontro {String(a.numero).padStart(2, "0")}</span>
                      <span className="mt-1 block font-display text-base leading-tight">{a.titulo}</span>
                    </figcaption>
                  </figure>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pergunta orientadora */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Pergunta orientadora do semestre
          </p>
          <blockquote className="mt-6 font-display text-2xl italic leading-snug sm:text-3xl">
            {semestre.perguntaOrientadora}
          </blockquote>
        </div>
      </section>

      {/* Apresentação */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl">A disciplina</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A cronologia orienta, mas não determina. O curso coloca em diálogo narrativas tradicionais da
              história da arte e perspectivas críticas, globais, antropológicas e anacrônicas.
            </p>
          </div>
          <div className="space-y-6">
            <p className="leading-relaxed">
              Compreendemos a história da arte não como uma sucessão de períodos, estilos e obras-primas, mas
              como um campo de investigação sobre as formas pelas quais as sociedades produzem imagens,
              objetos e espaços — e sobre as relações entre arte, técnica, materialidade, poder, religião,
              trabalho e vida cotidiana.
            </p>
            <p className="leading-relaxed">
              O <strong>Atlas Mnemosyne</strong> é o dispositivo transversal do semestre. Por meio dele
              investigamos relações entre imagens de diferentes tempos e contextos, desenvolvendo seleção,
              comparação, descrição, interpretação, curadoria e projeto.
            </p>
            <p className="rounded-sm border-l-2 border-accent bg-card px-5 py-4 font-display text-xl italic leading-snug">
              experimentar → observar → descrever → contextualizar → comparar → relacionar → montar →
              projetar → documentar → compartilhar
            </p>
          </div>
        </div>
      </section>

      {/* Combinados */}
      <section className="border-y border-border bg-card/60">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl sm:text-4xl">Combinados</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Acordos simples que fazem o semestre funcionar para uma turma de quarenta pessoas.
          </p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {combinados.map((c, i) => (
              <div key={c.titulo} className="bg-background p-6">
                <span className="font-display text-2xl text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-lg">{c.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avaliação resumo */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl">Modos de avaliação</h2>
          <Link to="/avaliacao" className="inline-flex items-center gap-1.5 text-sm hover:text-accent">
            Critérios completos <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {avaliacoes.map((a) => (
            <div key={a.titulo} className="bg-background p-6">
              <p className="font-display text-4xl text-accent">{a.peso}</p>
              <p className="mt-3 text-sm leading-snug">{a.titulo}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
          Todos os trabalhos são observados por critérios transversais: investigação, interpretação,
          contextualização, articulação entre teoria e prática, capacidade de relacionar, clareza,
          autoria, documentação, responsabilidade com as fontes e abertura à revisão.
        </p>
      </section>

      {/* Linha do tempo */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl">Linha do tempo do semestre</h2>
              <p className="mt-3 max-w-xl text-sm text-muted-foreground">
                Datas ajustadas ao calendário acadêmico da UFSM 2026/2. Pulamos a semana da JAI (09 a 13/11)
                e o feriado de 20/11.
              </p>
            </div>
            <Link to="/aulas" className="inline-flex items-center gap-1.5 text-sm hover:text-accent">
              Índice das aulas <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <ol className="mt-10 border-t border-border">
            {aulas.map((a) => (
              <li key={a.slug}>
                <Link
                  to="/aulas/$numero"
                  params={{ numero: a.slug }}
                  className="group grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-1 border-b border-border py-4 transition-colors hover:bg-background sm:grid-cols-[3rem_7rem_1fr_auto] sm:px-3"
                >
                  <span className="font-display text-2xl text-accent">{String(a.numero).padStart(2, "0")}</span>
                  <span className="text-sm tabular-nums text-muted-foreground">{formatarData(a.data, false)}</span>
                  <span className="col-span-2 sm:col-span-1">
                    <span className="text-lg">{a.titulo}</span>
                    <span className="block text-sm text-muted-foreground">{a.subtitulo}</span>
                  </span>
                  <span className="col-span-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:col-span-1">
                    {tipoLabel[a.tipo]}
                  </span>
                </Link>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-sm border border-border bg-background p-6">
            <h3 className="text-lg">Marcos do calendário acadêmico</h3>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {marcosAcademicos.map((m) => (
                <li key={m.data} className="flex gap-3">
                  <span className="w-14 shrink-0 tabular-nums">{formatarData(m.data, false)}</span>
                  <span>{m.titulo}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-3xl sm:text-4xl">Dois projetos atravessam o semestre</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Link
            to="/projetos"
            className="group rounded-sm border border-border bg-card p-8 transition-colors hover:border-accent"
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Projeto 1 · 25%</p>
            <h3 className="mt-3 text-2xl">Ver, descrever e reimaginar</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Descrever uma obra sem nomeá-la e entregar essa descrição a um colega, que criará uma nova
              imagem a partir dela. Encontros 3 a 8.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm group-hover:text-accent">
              <Clock className="h-3.5 w-3.5" /> Entrega no encontro 8
            </span>
          </Link>
          <Link
            to="/projetos"
            className="group rounded-sm border border-border bg-card p-8 transition-colors hover:border-accent"
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Projeto 2 · 40%</p>
            <h3 className="mt-3 text-2xl">Atlas Mnemosyne</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Sobrevivências da história da arte no design: uma investigação visual-projetual autoral, em
              sete etapas, encerrada em exposição coletiva. Encontros 8 a 15.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm group-hover:text-accent">
              <MapPin className="h-3.5 w-3.5" /> Exposição no encontro 15
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
