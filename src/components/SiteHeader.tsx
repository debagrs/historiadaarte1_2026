import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, ExternalLink, Menu, Moon, Sun, X } from "lucide-react";
import { aulas, formatarData } from "@/data/aulas";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/theme";

const paginas = [
  { to: "/", label: "Início" },
  { to: "/aulas", label: "Aulas" },
  { to: "/projetos", label: "Projetos" },
  { to: "/avaliacao", label: "Avaliação" },
  { to: "/metodologia", label: "Metodologia" },
  { to: "/bibliografia", label: "Bibliografia" },
] as const;

const constelacoesUrl =
  import.meta.env.VITE_CONSTELACOES_URL || "https://github.com/debagrs/constalacoes";

export function SiteHeader() {
  const [aberto, setAberto] = useState(false);
  const [listaAulas, setListaAulas] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/92 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="group flex min-w-0 items-baseline gap-2">
          <span className="truncate font-display text-xl font-semibold leading-none">História da Arte I</span>
          <span className="hidden text-eyebrow text-muted-foreground sm:inline">UFSM · 2026/2</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {paginas.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              activeOptions={{ exact: p.to === "/" }}
              className="rounded-sm px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground data-[status=active]:text-foreground data-[status=active]:underline data-[status=active]:decoration-primary data-[status=active]:decoration-2 data-[status=active]:underline-offset-8"
            >
              {p.label}
            </Link>
          ))}
          <a
            href={constelacoesUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-sm px-3 py-1.5 text-sm text-primary transition-colors hover:bg-secondary"
          >
            Constelações <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <div className="relative">
            <button
              type="button"
              onClick={() => setListaAulas((v) => !v)}
              onBlur={() => window.setTimeout(() => setListaAulas(false), 150)}
              className="flex items-center gap-1 rounded-sm border border-border px-3 py-1.5 text-sm transition-colors hover:bg-secondary"
              aria-expanded={listaAulas}
            >
              15 encontros
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", listaAulas && "rotate-180")} />
            </button>
            {listaAulas && (
              <div className="absolute right-0 mt-2 max-h-[70vh] w-80 overflow-y-auto rounded-sm border border-border bg-popover p-1.5 shadow-xl">
                {aulas.map((a) => (
                  <Link
                    key={a.slug}
                    to="/aulas/$numero"
                    params={{ numero: a.slug }}
                    className="flex items-baseline gap-3 rounded-sm px-2.5 py-2 text-sm transition-colors hover:bg-secondary"
                  >
                    <span className="w-5 shrink-0 text-right font-display text-base text-primary">{a.numero}</span>
                    <span className="flex-1 leading-snug">
                      {a.titulo}
                      <span className="block text-xs text-muted-foreground">{a.subtitulo}</span>
                    </span>
                    <span className="shrink-0 text-xs tabular-nums text-muted-foreground">{formatarData(a.data, false)}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            className="rounded-sm border border-border p-2 transition-colors hover:bg-secondary"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            type="button"
            className="rounded-sm border border-border p-2 lg:hidden"
            onClick={() => setAberto((v) => !v)}
            aria-label="Abrir menu"
          >
            {aberto ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {aberto && (
        <div className="max-h-[78vh] overflow-y-auto border-t border-border px-5 pb-6 lg:hidden">
          <div className="grid gap-1 py-3 sm:grid-cols-2">
            {paginas.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                onClick={() => setAberto(false)}
                className="rounded-sm px-3 py-2.5 text-sm hover:bg-secondary"
              >
                {p.label}
              </Link>
            ))}
            <a
              href={constelacoesUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-sm px-3 py-2.5 text-sm text-primary hover:bg-secondary"
            >
              Abrir Constelações <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <p className="border-t border-border pt-4 text-eyebrow text-muted-foreground">Encontros</p>
          <div className="mt-2 grid gap-1 sm:grid-cols-2">
            {aulas.map((a) => (
              <Link
                key={a.slug}
                to="/aulas/$numero"
                params={{ numero: a.slug }}
                onClick={() => setAberto(false)}
                className="flex gap-3 rounded-sm px-3 py-2 hover:bg-secondary"
              >
                <span className="font-display text-lg text-primary">{String(a.numero).padStart(2, "0")}</span>
                <span className="text-sm leading-snug">{a.titulo}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
