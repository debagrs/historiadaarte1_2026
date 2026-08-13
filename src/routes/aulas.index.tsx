import { createFileRoute, Link } from "@tanstack/react-router";
import { aulas, formatarData, tipoLabel } from "@/data/aulas";

export const Route = createFileRoute("/aulas/")({
  head: () => ({
    meta: [
      { title: "Os 15 encontros — História da Arte I | UFSM" },
      {
        name: "description",
        content:
          "Índice cronológico dos 15 encontros de História da Arte I no semestre 2026/2: temas, datas, autores e entregas de cada sexta-feira.",
      },
      { property: "og:title", content: "Os 15 encontros — História da Arte I" },
      {
        property: "og:description",
        content: "Cronograma completo das quinze sextas-feiras do semestre 2026/2.",
      },
    ],
  }),
  component: IndiceAulas,
});

function IndiceAulas() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Cronograma</p>
      <h1 className="mt-4 text-4xl sm:text-6xl">Os 15 encontros</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">
        Uma aula por sexta-feira de manhã, das 08h30 às 11h30, de 07 de agosto a 27 de novembro de 2026.
        A ordem é cronológica e cada página traz a organização minuto a minuto do encontro.
      </p>

      <div className="salon-wall mt-14 rounded-sm border border-border p-5 sm:p-8">
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {aulas.map((a, index) => (
            <Link
              key={a.slug}
              to="/aulas/$numero"
              params={{ numero: a.slug }}
              className="group mb-6 block break-inside-avoid"
            >
              <article className={`art-frame ${index % 4 === 0 ? "-rotate-[0.5deg]" : index % 4 === 1 ? "rotate-[0.5deg]" : ""}`}>
                <div className={index % 3 === 0 ? "aspect-[4/5] overflow-hidden" : index % 3 === 1 ? "aspect-[5/4] overflow-hidden" : "aspect-[3/4] overflow-hidden"}>
                  <img src={a.imagem} alt={a.imagemAlt} loading="lazy" className="transition-transform duration-500 group-hover:scale-[1.025]" />
                </div>
                <div className="p-4 text-center">
                  <div className="flex items-baseline justify-center gap-3">
                    <span className="font-display text-3xl text-primary">{String(a.numero).padStart(2, "0")}</span>
                    <span className="text-xs tabular-nums text-muted-foreground">{formatarData(a.data, false)}</span>
                  </div>
                  <span className="mt-2 block text-eyebrow text-muted-foreground">{tipoLabel[a.tipo]}</span>
                  <h2 className="mt-2 text-xl leading-snug">{a.titulo}</h2>
                  <p className="text-sm text-muted-foreground">{a.subtitulo}</p>
                  <p className="mt-3 text-sm italic leading-relaxed text-muted-foreground">“{a.questao}”</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
