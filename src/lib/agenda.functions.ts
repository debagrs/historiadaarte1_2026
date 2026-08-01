import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { aulas, semestre } from "@/data/aulas";
import { montarEvento } from "@/lib/eventos";

const GATEWAY = "https://connector-gateway.lovable.dev/google_calendar/calendar/v3";

function credenciais() {
  const lovableKey = process.env.LOVABLE_API_KEY;
  const connectionKey = process.env.GOOGLE_CALENDAR_API_KEY;
  return { lovableKey, connectionKey };
}

async function chamarAgenda(
  path: string,
  init: RequestInit,
  keys: { lovableKey: string; connectionKey: string },
) {
  const res = await fetch(`${GATEWAY}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${keys.lovableKey}`,
      "X-Connection-Api-Key": keys.connectionKey,
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  });
  const texto = await res.text();
  if (!res.ok) {
    console.error(`Google Calendar [${res.status}]: ${texto}`);
    throw new Error(`Google Agenda respondeu ${res.status}: ${texto.slice(0, 300)}`);
  }
  return texto ? JSON.parse(texto) : {};
}

/** Diz se o conector do Google Agenda já está ligado ao projeto. */
export const statusAgenda = createServerFn({ method: "GET" }).handler(async () => {
  const { lovableKey, connectionKey } = credenciais();
  return { conectado: Boolean(lovableKey && connectionKey) };
});

async function sincronizarNumeros(numeros: number[], baseUrl: string) {
  const { lovableKey, connectionKey } = credenciais();
  if (!lovableKey || !connectionKey) {
    throw new Error(
      "O Google Agenda ainda não está conectado a este projeto. Conecte a conta Google para sincronizar os encontros.",
    );
  }
  const keys = { lovableKey, connectionKey };

  const resultados: { numero: number; acao: "criado" | "atualizado"; link?: string }[] = [];

  for (const numero of numeros) {
    const aula = aulas.find((a) => a.numero === numero);
    if (!aula) continue;
    const evento = montarEvento(aula, baseUrl);

    // Procura um evento já criado para esta aula (mesma chave privada).
    const busca = await chamarAgenda(
      `/calendars/primary/events?privateExtendedProperty=${encodeURIComponent(
        `historiaDaArteAula=${aula.numero}`,
      )}&showDeleted=false&maxResults=5`,
      { method: "GET" },
      keys,
    );

    const existente = (busca.items ?? [])[0];
    if (existente?.id) {
      const atualizado = await chamarAgenda(
        `/calendars/primary/events/${encodeURIComponent(existente.id)}`,
        { method: "PUT", body: JSON.stringify(evento) },
        keys,
      );
      resultados.push({ numero, acao: "atualizado", link: atualizado.htmlLink });
    } else {
      const criado = await chamarAgenda(
        `/calendars/primary/events`,
        { method: "POST", body: JSON.stringify(evento) },
        keys,
      );
      resultados.push({ numero, acao: "criado", link: criado.htmlLink });
    }
  }

  return { total: resultados.length, resultados, timeZone: semestre.fuso };
}

export const sincronizarAula = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) =>
    z.object({ numero: z.number().int().min(1).max(15), baseUrl: z.string().url() }).parse(input),
  )
  .handler(async ({ data }) => sincronizarNumeros([data.numero], data.baseUrl));

export const sincronizarSemestre = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => z.object({ baseUrl: z.string().url() }).parse(input))
  .handler(async ({ data }) =>
    sincronizarNumeros(
      aulas.map((a) => a.numero),
      data.baseUrl,
    ),
  );
