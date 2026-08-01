import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CalendarPlus, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { sincronizarAula, sincronizarSemestre } from "@/lib/agenda.functions";
import { cn } from "@/lib/utils";

type Props = {
  numero?: number;
  variante?: "principal" | "discreto";
  rotulo?: string;
};

export function BotaoAgenda({ numero, variante = "principal", rotulo }: Props) {
  const [carregando, setCarregando] = useState(false);
  const enviarAula = useServerFn(sincronizarAula);
  const enviarSemestre = useServerFn(sincronizarSemestre);

  async function acionar() {
    setCarregando(true);
    try {
      const baseUrl = window.location.origin;
      const resposta =
        numero === undefined
          ? await enviarSemestre({ data: { baseUrl } })
          : await enviarAula({ data: { numero, baseUrl } });

      const criados = resposta.resultados.filter((r) => r.acao === "criado").length;
      const atualizados = resposta.resultados.length - criados;
      toast.success(
        numero === undefined
          ? `Semestre sincronizado: ${criados} evento(s) criado(s), ${atualizados} atualizado(s).`
          : `Aula ${numero} ${criados ? "criada" : "atualizada"} na sua agenda.`,
      );
    } catch (erro) {
      toast.error(erro instanceof Error ? erro.message : "Não foi possível falar com o Google Agenda.");
    } finally {
      setCarregando(false);
    }
  }

  const texto = rotulo ?? (numero === undefined ? "Sincronizar semestre" : "Enviar para o Google Agenda");

  return (
    <button
      type="button"
      onClick={acionar}
      disabled={carregando}
      className={cn(
        "inline-flex items-center gap-2 rounded-sm px-4 py-2.5 text-sm font-medium transition-colors disabled:opacity-60",
        variante === "principal"
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : "border border-border bg-card hover:bg-secondary",
      )}
    >
      {carregando ? <Loader2 className="h-4 w-4 animate-spin" /> : <CalendarPlus className="h-4 w-4" />}
      {texto}
    </button>
  );
}
