import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react";
import { aulas, formatarData, getAula, tipoLabel, type Aula } from "@/data/aulas";

export const Route = createFileRoute("/aulas/$numero")({
  loader: ({ params }) => {
    const aula = getAula(params.numero);
    if (!aula) throw notFound();
    return { aula };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Aula não encontrada — História da Arte I" }, { name: "robots", content: "noindex" }],
      };
    }
    const { aula } = loaderData;
    const titulo = `Aula ${aula.numero}: ${aula.titulo} — ${aula.subtitulo}`;
    const descricao = `${formatarData(aula.data)} · ${aula.questao}`;
    return {
      meta: [
        { title: `${titulo} | História da Arte I UFSM` },
        { name: "description", content: descricao.slice(0, 158) },
        { property: "og:title", content: titulo },
        { property: "og:description", content: descricao.slice(0, 158) },
      ],
    };
  },
  notFoundComponent: AulaNaoEncontrada,
  component: PaginaAula,
});

function AulaNaoEncontrada() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-28 text-center">
      <h1 className="text-4xl">Essa aula não existe</h1>
      <p className="mt-3 text-muted-foreground">O semestre tem quinze encontros, numerados de 1 a 15.</p>
      <Link to="/aulas" className="mt-6 inline-flex items-center gap-2 text-accent hover:underline">
        Ver todos os encontros <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function Secao({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border py-10">
      <h2 className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{titulo}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function PaginaAula() {
  const { aula } = Route.useLoaderData() as { aula: Aula };
  const anterior = aulas.find((a) => a.numero === aula.numero - 1);
  const proxima = aulas.find((a) => a.numero === aula.numero + 1);
  const temas = aula.conteudos ?? aula.conceitos;

  return (
    <article>
      <header className="grao border-b border-border">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <Link to="/aulas" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent">
            <ArrowLeft className="h-3.5 w-3.5" /> Todos os encontros
          </Link>
          <p className="mt-8 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Encontro {String(aula.numero).padStart(2, "0")} · {tipoLabel[aula.tipo]}
          </p>
          <h1 className="mt-3 text-4xl leading-tight sm:text-6xl">
            {aula.titulo}
            <span className="block italic text-accent">{aula.subtitulo}</span>
          </h1>

          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-accent" /> {formatarData(aula.data)}
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" /> {aula.inicio} às {aula.fim}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" /> {aula.local}
            </li>
          </ul>

        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5">
        <figure className="-mt-0 pt-10">
          <img
            src={aula.imagem}
            alt={aula.imagemAlt}
            loading="lazy"
            className="art-frame aspect-[16/9] w-full object-cover"
          />
          <figcaption className="mt-2 text-xs text-muted-foreground">{aula.imagemAlt}</figcaption>
        </figure>

        <div className="py-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Questão do dia</p>
          <p className="mt-4 font-display text-2xl italic leading-snug sm:text-3xl">{aula.questao}</p>
        </div>

        {(aula.autores || aula.tensao || aula.recorte) && (
          <Secao titulo={aula.tensao ? "Tensão historiográfica" : "Recorte"}>
            <dl className="grid gap-4 sm:grid-cols-2">
              {aula.autores && (
                <div>
                  <dt className="text-sm text-muted-foreground">Autores</dt>
                  <dd className="mt-1 text-lg">{aula.autores}</dd>
                </div>
              )}
              {aula.tensao && (
                <div>
                  <dt className="text-sm text-muted-foreground">Confronto</dt>
                  <dd className="mt-1 text-lg">{aula.tensao}</dd>
                </div>
              )}
              {aula.recorte && (
                <div className="sm:col-span-2">
                  <dt className="text-sm text-muted-foreground">Recorte histórico</dt>
                  <dd className="mt-1 text-lg">{aula.recorte}</dd>
                </div>
              )}
            </dl>
          </Secao>
        )}

        {aula.objetivos?.length ? (
          <Secao titulo="Objetivos">
            <ul className="space-y-2">
              {aula.objetivos.map((o) => (
                <li key={o} className="flex gap-3 leading-relaxed">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {o}
                </li>
              ))}
            </ul>
          </Secao>
        ) : null}

        {temas?.length ? (
          <Secao titulo={aula.conteudos ? "Conteúdos" : "Conceitos"}>
            <ul className="flex flex-wrap gap-2">
              {temas.map((t) => (
                <li key={t} className="rounded-sm border border-border bg-card px-3 py-1.5 text-sm">
                  {t}
                </li>
              ))}
            </ul>
          </Secao>
        ) : null}

        <Secao titulo="Organização das 3 horas">
          <ol className="border-t border-border">
            {aula.blocos.map((b, i) => (
              <li key={i} className="grid grid-cols-[5rem_1fr] gap-4 border-b border-border py-3.5">
                <span className="tabular-nums text-sm text-accent">{b.duracao}</span>
                <span>
                  {b.titulo}
                  {b.detalhe && <span className="block text-sm text-muted-foreground">{b.detalhe}</span>}
                </span>
              </li>
            ))}
          </ol>
        </Secao>

        <Secao titulo="Ateliê">
          <div className="rounded-sm border border-border bg-card p-6">
            <h3 className="text-2xl">{aula.atelie.titulo}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{aula.atelie.descricao}</p>
            {aula.atelie.itens?.length ? (
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {aula.atelie.itens.map((it) => (
                  <li key={it} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {it}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </Secao>

        <Secao titulo="Tarefas dos estudantes">
          <ul className="grid gap-3 sm:grid-cols-2">
            {aula.tarefas.map((t) => (
              <li key={t} className="rounded-sm border-l-2 border-accent bg-secondary/60 px-4 py-3 text-sm leading-relaxed">
                {t}
              </li>
            ))}
          </ul>
        </Secao>

        {aula.projetos?.length ? (
          <Secao titulo="Marcos dos projetos">
            <ul className="space-y-2">
              {aula.projetos.map((p) => (
                <li key={p} className="text-lg text-terracota">
                  {p}
                </li>
              ))}
            </ul>
          </Secao>
        ) : null}

        {aula.observacao ? (
          <Secao titulo="Observação">
            <p className="leading-relaxed text-muted-foreground">{aula.observacao}</p>
          </Secao>
        ) : null}

        <nav className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 my-14">
          {anterior ? (
            <Link to="/aulas/$numero" params={{ numero: anterior.slug }} className="bg-background p-6 hover:bg-card">
              <span className="text-xs text-muted-foreground">← Encontro {anterior.numero}</span>
              <span className="mt-1 block text-lg">{anterior.titulo}</span>
            </Link>
          ) : (
            <span className="bg-background p-6 text-sm text-muted-foreground">Primeiro encontro do semestre</span>
          )}
          {proxima ? (
            <Link
              to="/aulas/$numero"
              params={{ numero: proxima.slug }}
              className="bg-background p-6 text-right hover:bg-card"
            >
              <span className="text-xs text-muted-foreground">Encontro {proxima.numero} →</span>
              <span className="mt-1 block text-lg">{proxima.titulo}</span>
            </Link>
          ) : (
            <span className="bg-background p-6 text-right text-sm text-muted-foreground">
              Último encontro do semestre
            </span>
          )}
        </nav>
      </div>
    </article>
  );
}
