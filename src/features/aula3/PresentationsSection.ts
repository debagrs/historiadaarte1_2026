import React, { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Download, ExternalLink, Presentation, Sparkles } from "lucide-react";

type SlideItem = {
  id: number;
  section: "Egito" | "Mesopotâmia" | "Grécia" | "Roma" | "Geral";
  title: string;
  subtitle?: string;
  category: "arquitetura" | "escultura" | "pintura" | "escrita" | "paleta de cores" | "contexto";
  content: string;
  tags?: string[];
  image?: string;
};

const HA1_SLIDES: SlideItem[] = [
  {
    id: 1,
    section: 'Geral',
    title: 'História da Arte 1 — HA1',
    subtitle: 'Prof. Débora Aita Gasparetto · Bacharelado em Desenho Industrial UFSM',
    category: 'contexto',
    content: 'Estrutura curricular do percurso: Arte Egípcia, Arte Mesopotâmica, Arte Grega e Arte Romana.',
    tags: ['UFSM', 'Desenho Industrial', 'Ementa']
  },
  {
    id: 2,
    section: 'Egito',
    title: 'Arte Antigo Egito (4500–332 a.C.)',
    subtitle: 'A arte da imortalidade | Vida além da morte',
    category: 'contexto',
    content: 'Fortes em matemática, arquitetura, astronomia e medicina. Estruturação do cânone visual milenar de representação da eternidade.',
    tags: ['Imortalidade', 'Cânone', 'Nilo']
  },
  {
    id: 3,
    section: 'Egito',
    title: 'Panteão Divino & Crenças Religiosas',
    subtitle: 'Osíris, Ísis, Hórus, Thoth, Rá, Seth, Amon, Ptah, Hathor, Sekhmet, Anúbis, Maat',
    category: 'contexto',
    content: 'Os deuses como personificações das forças cósmicas e garantidores da Maat (ordem, equilíbrio e verdade cósmica).',
    tags: ['Mitologia', 'Religião', 'Iconografia']
  },
  {
    id: 4,
    section: 'Egito',
    title: 'Escrita Hieroglífica & Sinais Sagrados (3500 a.C.)',
    subtitle: 'A Pedra de Roseta (196 a.C.) e a decifração dos três registros',
    category: 'escrita',
    content: 'Três gravações essenciais: Hieróglifo (escrita sagrada), Demótico (escrita popular) e Grego Antigo, permitindo a decifração por Jean-François Champollion em 1822.',
    tags: ['Hieróglifos', 'Pedra de Roseta', 'British Museum']
  },
  {
    id: 5,
    section: 'Egito',
    title: 'Livro dos Mortos em Papiro',
    subtitle: 'Gravuras, orações e o julgamento na pesagem do coração (Psicostasia)',
    category: 'pintura',
    content: 'Manuscritos em rolo de papiro depositados junto às múmias nos sarcófagos para assegurar passagem segura ao reino de Osíris.',
    tags: ['Papiro', 'Psicostasia', 'Ritual Funerário']
  },
  {
    id: 6,
    section: 'Egito',
    title: 'Arquitetura Monumental: Pirâmides de Gizé & Grande Esfinge',
    subtitle: 'Quéops, Quéfren e Miquerinos (c. 2570 a.C.)',
    category: 'arquitetura',
    content: 'Monumentos de pedra talhada alinhados à astronomia sagrada, demonstrando domínio absoluto de engenharia logística e poder teocrático.',
    tags: ['Gizé', 'Monumentalidade', 'Astronomia']
  },
  {
    id: 7,
    section: 'Egito',
    title: 'Templos de Abu Simbel e Amon-Mut-Khonsu (Luxor)',
    subtitle: 'Arquitetura hipostila e colossos de pedra',
    category: 'arquitetura',
    content: 'Complexos arquitetônicos com pilones triunfais, avenidas de esfinges e colunatas com capitéis papiriformes e lotiformes.',
    tags: ['Luxor', 'Karnak', 'Abu Simbel']
  },
  {
    id: 8,
    section: 'Egito',
    title: 'Pintura Parietal & Tumba de Sennedjem (c. 1200 a.C.)',
    subtitle: 'Economia agrícola, cenas do cotidiano e a Lei da Frontalidade',
    category: 'pintura',
    content: 'Representação esquemática do corpo: cabeça e membros de perfil, tronco e olhos de frente para maximizar o reconhecimento do ser eterno.',
    tags: ['Lei da Frontalidade', 'Tumba de Sennedjem', 'Deir el-Medina']
  },
  {
    id: 9,
    section: 'Egito',
    title: 'Busto de Nefertiti & Máscara de Tutancâmon (1345 a.C.)',
    subtitle: 'Calcário policromado, estuque, ouro maciço e lápis-lazúli',
    category: 'escultura',
    content: 'Contraste entre o naturalismo expressivo de Amarna (Tutmés) e a suntuosidade ritual do tesouro faraônico de Tutankhamon.',
    tags: ['Nefertiti', 'Tutancâmon', 'Ourivesaria']
  },
  {
    id: 10,
    section: 'Egito',
    title: 'Vasos Canópicos & Hipopótamo Azul de Faiança',
    subtitle: 'Guardiões das vísceras e símbolos de renascimento',
    category: 'escultura',
    content: 'Quatro filhos de Hórus (Duamutef, Hapi, Imset e Qebehsenuef). Hipopótamo William com decoração de lótus aquático, remetendo à arte abstrata contemporânea.',
    tags: ['Vasos Canopos', 'Faiança Egípcia', 'MET']
  },
  {
    id: 11,
    section: 'Egito',
    title: 'Paleta Cromática Egípcia',
    subtitle: 'Pigmentos minerais: Azul Egípcio, Malaquita, Ocre Amarelo, Ocre Vermelho e Preto de Carvão',
    category: 'paleta de cores',
    content: 'Cores simbólicas que não apenas decoravam, mas conferiam vida e eficácia mágica às representações.',
    tags: ['Azul Egípcio', 'Malaquita', 'Ocre']
  },
  {
    id: 12,
    section: 'Mesopotâmia',
    title: 'Arte Mesopotâmica (3700–332 a.C.)',
    subtitle: 'Terra "Entre Rios" Tigre e Eufrates: Sumérios, Acádios, Assírios, Caldeus e Babilônicos',
    category: 'contexto',
    content: 'Berço da civilização urbana, da metalurgia do bronze, da roda e do sistema sexagesimal de contagem do tempo.',
    tags: ['Tigre e Eufrates', 'Suméria', 'Babilônia']
  },
  {
    id: 13,
    section: 'Mesopotâmia',
    title: 'Escrita Cuneiforme & Tabuletas de Argila (3200 a.C.)',
    subtitle: 'Uruk, Eridu e os primeiros registros contábeis e épicos',
    category: 'escrita',
    content: 'Impressão com estilete de junco triangular sobre barro cru. Epopeia de Gilgamesh e códigos jurídicos fundacionais.',
    tags: ['Cuneiforme', 'Uruk', 'Gilgamesh']
  },
  {
    id: 14,
    section: 'Mesopotâmia',
    title: 'Zigurates: Montanhas Artificiais Sagradas',
    subtitle: 'Zigurates de Ur e Babilônia (Etemenanki / Torre de Babel)',
    category: 'arquitetura',
    content: 'Plataformas escalonadas de tijolo cozido e betume unindo terra e céu. Acesso exclusivo à casta sacerdotal no cume.',
    tags: ['Zigurate', 'Ur', 'Betume']
  },
  {
    id: 15,
    section: 'Mesopotâmia',
    title: 'Portão de Ishtar & Avenida Processional da Babilônia (575 a.C.)',
    subtitle: 'Reinado de Nabucodonosor II · Tijolos vidrados azul-cobalto e relevos zoomórficos',
    category: 'arquitetura',
    content: 'Cavalos, leões (Ishtar), touros (Adad) e dragões Mušḫuššu (Marduk) protegendo os eixos monumentais da metrópole.',
    tags: ['Portão de Ishtar', 'Pergamon Museum', 'Tijolo Vidrado']
  },
  {
    id: 16,
    section: 'Mesopotâmia',
    title: 'Estela do Código de Hamurabi (1750 a.C.)',
    subtitle: 'Basalto negro diorito · Lei de Talião ("Olho por olho, dente por dente")',
    category: 'escultura',
    content: 'Hamurabi em audiência direta com Shamash, o deus solar da justiça, legitimando divinamente as normas cívicas.',
    tags: ['Hamurabi', 'Louvre', 'Diorito']
  },
  {
    id: 17,
    section: 'Mesopotâmia',
    title: 'Lamasus: Guardiões Alados dos Palácios Assírios (720 a.C.)',
    subtitle: 'Khorsabad e Nínive · Touros e leões androcéfalos com cinco patas',
    category: 'escultura',
    content: 'Escultura concebida para criar ilusão de ótica: estática quando vista de frente e em marcha quando vista de perfil.',
    tags: ['Lamassu', 'Assíria', 'Cinco Patas']
  },
  {
    id: 18,
    section: 'Grécia',
    title: 'Arte Grega Clássica (Séculos VIII a IV a.C.)',
    subtitle: 'O Antropocentrismo, a Harmonia Matemática e a Kalokagathia',
    category: 'contexto',
    content: 'O homem como medida de todas as coisas (Protágoras). Busca da perfeição física, cívica e racional na pólis.',
    tags: ['Atenas', 'Antropocentrismo', 'Pólis']
  },
  {
    id: 19,
    section: 'Grécia',
    title: 'Ordens Arquitetônicas Gregas: Dórica, Jônica e Coríntia',
    subtitle: 'Proporção, êntase, arquitrave e friso com métopas e tríglifos',
    category: 'arquitetura',
    content: 'O Partenon de Atenas (Ictinos e Calícrates, 447 a.C.) com refinamentos ópticos milimétricos para compensar distorções da visão humana.',
    tags: ['Dórica', 'Jônica', 'Coríntia', 'Partenon']
  },
  {
    id: 20,
    section: 'Grécia',
    title: 'Evolução Escultórica: Do Kouros Arcaico ao Contrapposto Clássico',
    subtitle: 'Kouros Anavyssos → Doríforo de Policleto → Discóbolo de Míron',
    category: 'escultura',
    content: 'Passagem da rigidez egípcia arcaica para o equilíbrio dinâmico e o Cânone de 7 cabeças formulado por Policleto.',
    tags: ['Contrapposto', 'Policleto', 'Doríforo']
  },
  {
    id: 21,
    section: 'Grécia',
    title: 'A Cerâmica Grega: Figuras Negras e Figuras Vermelhas',
    subtitle: 'Ânforas, Cráteras e Kýlikes · Exéquias e Eufrônio',
    category: 'pintura',
    content: 'Técnica sofisticada de três queimas de engobe de argila ferruginosa para narrativas homéricas e mitologia dos deuses do Olimpo.',
    tags: ['Figuras Negras', 'Figuras Vermelhas', 'Cerâmica']
  },
  {
    id: 22,
    section: 'Roma',
    title: 'Arte Romana: Engenharia, Retrato e Pragmatismo Imperial',
    subtitle: 'Do Período Republicano à Apoteose Imperial (509 a.C. – 476 d.C.)',
    category: 'contexto',
    content: 'Síntese das influências etruscas e helenísticas para a consolidação de um império de escala continental unificado por leis e estradas.',
    tags: ['Império Romano', 'Verismo', 'Engenharia']
  },
  {
    id: 23,
    section: 'Roma',
    title: 'Revolução Construtiva: Opus Caementicium, Arco e Abóbada',
    subtitle: 'Panteão de Roma, Coliseu (Anfiteatro Flaviano) e Aquedutos',
    category: 'arquitetura',
    content: 'Invenção do concreto pozolânico que permitiu vencer vãos livres monumentais, culminando na cúpula hemisférica do Panteão com seu óculo central.',
    tags: ['Panteão', 'Coliseu', 'Concreto Romano']
  },
  {
    id: 24,
    section: 'Roma',
    title: 'O Retrato Romano e o Verismo Republicano',
    subtitle: 'Augusto de Prima Porta e as Máscaras Funerárias (Imagines Maiorum)',
    category: 'escultura',
    content: 'Diferença crucial com a idealização grega: os romanos registravam rugas, calvície e traços individuais reais como sinal de autoridade cívica.',
    tags: ['Augusto Prima Porta', 'Verismo', 'Escultura Romana']
  }
];

export const PresentationsSection: React.FC = () => {
  const [filtro, setFiltro] = useState<"Todos" | SlideItem["section"]>("Todos");
  const [indice, setIndice] = useState(0);
  const slides = useMemo(() => filtro === "Todos" ? HA1_SLIDES : HA1_SLIDES.filter((s) => s.section === filtro || s.section === "Geral"), [filtro]);
  const atual = slides[Math.min(indice, slides.length - 1)] ?? slides[0];
  const selecionarFiltro = (valor: typeof filtro) => { setFiltro(valor); setIndice(0); };
  return (
    <section id="apresentacoes-pesquisa" className="border-t border-[#E8E2D8] bg-[#F7F2EA] px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A83B24]">Material complementar</p>
            <h2 className="mt-2 font-serif text-4xl font-semibold text-[#1C1917] sm:text-5xl">Espaços de exploração & lâminas</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-[#4A453E]">A apresentação histórica do curso reaparece aqui como percurso navegável: Egito, Mesopotâmia, Grécia e Roma, articulados a arquitetura, escrita, escultura, pintura, materialidade e sistemas de poder.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href="https://prezi.com/czjj7i8at52v/pre-historia-da-arte/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-sm border border-[#A83B24] px-4 py-2 font-semibold text-[#A83B24] hover:bg-[#FAF2EE]">Prezi original <ExternalLink className="h-4 w-4" /></a>
            <a href="https://persepolis.getty.edu/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-sm border border-[#E8E2D8] bg-white px-4 py-2 font-semibold text-[#1C1917] hover:border-[#A83B24]">Persepolis Reimagined <ExternalLink className="h-4 w-4" /></a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {(["Todos", "Egito", "Mesopotâmia", "Grécia", "Roma"] as const).map((item) => (
            <button key={item} type="button" onClick={() => selecionarFiltro(item)} className={`rounded-full border px-4 py-2 font-semibold transition ${filtro === item ? "border-[#A83B24] bg-[#A83B24] text-white" : "border-[#D9D0C4] bg-white text-[#4A453E] hover:border-[#A83B24]"}`}>{item}</button>
          ))}
        </div>

        {atual && (
          <article className="mt-6 rounded-xl border border-[#E8E2D8] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#A83B24]">{atual.section} · {atual.category}</span>
              <span className="font-mono text-sm text-[#7A7267]">{indice + 1} / {slides.length}</span>
            </div>
            <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#1C1917] sm:text-4xl">{atual.title}</h3>
            {atual.subtitle && <p className="mt-2 text-lg text-[#5E584F]">{atual.subtitle}</p>}
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-[#2E2A25]">{atual.content}</p>
            {atual.tags?.length ? <ul className="mt-6 flex flex-wrap gap-2">{atual.tags.map((tag) => <li key={tag} className="rounded-full bg-[#FAF2EE] px-3 py-1.5 text-sm font-semibold text-[#8F301C]">{tag}</li>)}</ul> : null}
            <div className="mt-8 flex items-center justify-between border-t border-[#F0EBE1] pt-5">
              <button type="button" onClick={() => setIndice((i) => Math.max(0, i - 1))} disabled={indice === 0} className="inline-flex items-center gap-2 rounded-sm border border-[#D9D0C4] px-4 py-2 font-semibold disabled:opacity-35"><ArrowLeft className="h-4 w-4" /> Anterior</button>
              <button type="button" onClick={() => setIndice((i) => Math.min(slides.length - 1, i + 1))} disabled={indice >= slides.length - 1} className="inline-flex items-center gap-2 rounded-sm bg-[#A83B24] px-4 py-2 font-semibold text-white disabled:opacity-35">Próxima <ArrowRight className="h-4 w-4" /></button>
            </div>
          </article>
        )}

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <a href="https://artsandculture.google.com/" target="_blank" rel="noreferrer" className="rounded-xl border border-[#E8E2D8] bg-white p-5 transition hover:border-[#A83B24]">
            <Sparkles className="h-6 w-6 text-[#A83B24]" /><h3 className="mt-3 font-serif text-2xl font-semibold">Google Arts & Culture</h3><p className="mt-2 text-[#5E584F]">Amplie o percurso com acervos, exposições digitais e imagens em alta resolução.</p>
          </a>
          <a href="/aula03/arte-antiga-e-classica.pdf" download className="rounded-xl border border-[#E8E2D8] bg-white p-5 transition hover:border-[#A83B24]">
            <Presentation className="h-6 w-6 text-[#A83B24]" />
            <h3 className="mt-3 font-serif text-2xl font-semibold">Apresentação sobre Arte Antiga e Clássica</h3>
            <p className="mt-2 text-[#5E584F]">Material em PDF sobre Arte Egípcia, Mesopotâmica, Grega e Romana, disponível para baixar e consultar durante a aula.</p>
            <span className="mt-4 inline-flex items-center gap-2 font-semibold text-[#A83B24]">Baixar PDF <Download className="h-4 w-4" /></span>
          </a>
        </div>
      </div>
    </section>
  );
};
