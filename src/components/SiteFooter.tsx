import { Link } from "@tanstack/react-router";
import { semestre } from "@/data/aulas";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <h2 className="font-display text-2xl">{semestre.disciplina}</h2>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            {semestre.curso} · {semestre.cargaHoraria} · 15 encontros de 3 horas.
            <br />
            {semestre.horario}.
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm">
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Semestre</span>
          <Link to="/aulas" className="hover:text-accent">
            Todas as aulas
          </Link>
          <Link to="/projetos" className="hover:text-accent">
            Projetos
          </Link>
          <Link to="/avaliacao" className="hover:text-accent">
            Avaliação
          </Link>
        </nav>
        <nav className="flex flex-col gap-2 text-sm">
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Apoio</span>
          <Link to="/metodologia" className="hover:text-accent">
            Metodologia
          </Link>
          <Link to="/bibliografia" className="hover:text-accent">
            Bibliografia
          </Link>
          <a
            href="https://www.ufsm.br/calendario/2026-71069"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent"
          >
            Calendário acadêmico UFSM
          </a>
        </nav>
      </div>
      <div className="border-t border-border/70 px-5 py-5 text-center text-xs text-muted-foreground">
        Universidade Federal de Santa Maria · Desenho Industrial · 2º semestre letivo de 2026
      </div>
    </footer>
  );
}
