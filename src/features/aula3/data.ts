import { Scene } from './types';

export const scenes: Scene[] = [
  {
    id: 'intro',
    ato: 0,
    tipo: 'text',
    atoTitulo: 'Prólogo',
    titulo: 'Das Primeiras Imagens ao Mundo Clássico',
    subtitulo: 'História e Estética da Arte 1 · Aula 03',
    conteudo: 'Profa. Dra. Débora Aita Gasparetto | Departamento de Desenho Industrial — Universidade Federal de Santa Maria (UFSM)',
    conteudoExtenso: 'Esta aula-exposição propõe uma travessia crítica que recusa o modelo evolucionista linear da História da Arte tradicional. Em vez de perguntar "como a arte progrediu?", investigamos: Por que humanos marcam superfícies? Como objetos corporificam ritos e poderes? De que modo a arquitetura normatiza cidades e impérios? Ao longo de 5 atos estruturados por verbos operatórios — Marcar, Habitar, Organizar, Normatizar e Governar —, confrontamos a historiografia canônica eurocêntrica com abordagens decoloniais e feministas.',
    perguntaPrincipal: 'Onde começa a História da Arte — e quem decidiu esse ponto de partida?',
    perguntasSecundarias: [
      'Por que a arte europeia foi tomada historicamente como padrão universal?',
      'O que separa uma inscrição ritual de uma obra estética?',
      'Como a materialidade e a técnica estruturam as relações sociais?'
    ],
    conceitos: ['Historiografia Crítica', 'Decolonialidade', 'Materialidade', 'Suporte', 'Poder'],
    designConnections: [
      'Comunicação visual e legibilidade iconográfica',
      'Ergonomia e proporções do corpo no espaço',
      'Sistemas de identidade visual e propaganda institucional'
    ],
    notasProfessora: 'Comece pedindo aos alunos que definam mentalmente a palavra "Arte" antes de ver qualquer imagem. Desafie a ideia de que a história começa na Europa ou na Grécia antiga.'
  },

  // ATO I: MARCAR
  {
    id: 'marcar-01-capivara',
    ato: 1,
    tipo: 'image',
    atoTitulo: 'Ato I · MARCAR',
    titulo: 'Serra da Capivara',
    subtitulo: 'Toca do Boqueirão da Pedra Furada / Parque Nacional Serra da Capivara',
    conteudo: 'Piauí · Brasil. O suporte rochoso não é uma tela passiva: suas fissuras, relevos e concavidades integram ativamente o gesto da inscrição e a percepção visual do grupo.',
    conteudoExtenso: 'Com datações que desafiam os paradigmas arqueológicos tradicionais da ocupação das Américas (vestígios de até 50.000 anos e pinturas entre 12.000 e 4.000 AP), as pinturas rupestres da Serra da Capivara apresentam cenas de caça, rituais, dança, sexo e interações cotidianas. A matéria pictórica consiste em óxidos de ferro, manganês e argilas misturados com aglutinantes orgânicos.',
    data: 'c. 12.000 – 4.000 AP (com ocupações anteriores)',
    cultura: 'Povoamentos originários do Nordeste brasileiro (Tradição Nordeste e Tradição Agreste)',
    localOrigem: 'São Raimundo Nonato, Piauí, Brasil',
    acervoAtual: 'Parque Nacional Serra da Capivara (Patrimônio Mundial UNESCO)',
    dimensoes: 'Paredões de abrigo sob rocha de até 100m de extensão',
    material: 'Pigmentos minerais (hematita, ocre, carvão vegetal, argilas) e aglutinantes naturais',
    tecnica: 'Pintura rupestre direta com aplicação digital e pincéis de fibras vegetais / sopro',
    paletaCores: [
      { hex: '#8B2616', name: 'Ocre Hematita Vermelho', pigmentOrigin: 'Óxido de ferro natural' },
      { hex: '#D29054', name: 'Argila Amarelada', pigmentOrigin: 'Terra sedimentar' },
      { hex: '#3B2F2F', name: 'Manganês Escuro', pigmentOrigin: 'Dióxido de manganês' },
      { hex: '#E7D8C5', name: 'Arenito Suporte', pigmentOrigin: 'Rocha sedimentar do Piauí' }
    ],
    composicao: 'Cenas dinâmicas com sobreposição rítmica de figuras antropomórficas e zoomórficas, explorando a topografia e rugosidade natural da rocha como relevo cenográfico.',
    marcos: ['Pioneirismo das pesquisas de Niède Guidon', 'Deslocamento da narrativa eurocêntrica da origem da arte'],
    perguntaPrincipal: 'Isto representa um acontecimento histórico ou participa de uma experiência ritual em ato?',
    perguntasSecundarias: [
      'Por que os manuais europeus costumam ignorar a arte rupestre das Américas e da África?',
      'Como a rugosidade do suporte rochoso dialoga com a iluminação do fogo à noite?'
    ],
    conceitos: ['Suporte Rochoso', 'Gesto', 'Tradição Nordeste', 'Memória Coletiva'],
    imagemUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pinturas_rupestres_serra_da_capivara.jpg',
    imagemAlt: 'Pinturas rupestres na Serra da Capivara, Piauí, Brasil',
    imagemFonte: 'Fundação Museu do Homem Americano (FUMDHAM) / Wikimedia Commons',
    imagemLicenca: 'CC BY-SA 4.0',
    imagemLink: 'https://commons.wikimedia.org/wiki/File:Pinturas_rupestres_Serra_da_Capivara.jpg',
    hotspots: [
      { x: 34, y: 48, label: 'Figuras Antropomórficas', description: 'Corpos estilizados em movimento circular que sugerem dança ou coreografia coletiva.', zoomLevel: 2.5 },
      { x: 62, y: 58, label: 'Superfície do Arenito', description: 'A rocha viva absorve o pigmento mineral fixado por séculos de reações químicas naturais.', zoomLevel: 2.8 },
      { x: 80, y: 35, label: 'Fauna Representada', description: 'Veados, capivaras e tatus delineados com precisão cinética notável.', zoomLevel: 2.2 }
    ],
    notasProfessora: 'Focar na pesquisadora brasileira Niède Guidon e na importância de descentralizar o cânone europeu logo na primeira obra.'
  },

  {
    id: 'marcar-02-tassili',
    ato: 1,
    tipo: 'image',
    atoTitulo: 'Ato I · MARCAR',
    titulo: 'Tassili n\'Ajjer',
    subtitulo: 'Planalto dos Rios / Deserto do Saara',
    conteudo: 'Argélia · Norte da África. Um Saara verde e navegável registrado em mais de 15.000 pinturas e gravuras rupestres que documentam milênios de transformações ecológicas e culturais.',
    conteudoExtenso: 'O planalto rochoso de Tassili n\'Ajjer preserva uma das mais densas e extraordinárias concentrações de arte rupestre do planeta. As pinturas registram desde o Período das Cabeças Redondas (xamânico e monumental) até os períodos Pastoral e dos Cavalos, demonstrando que o Saara foi uma savana fértil habitada por comunidades pastoris complexas antes da desertificação.',
    data: 'c. 9.000 – 2.000 AP',
    cultura: 'Sociedades caçadoras e pastoris do Saara pré-histórico',
    localOrigem: 'Planalto de Tassili n\'Ajjer, Djanet, Argélia',
    acervoAtual: 'Parque Nacional de Tassili n\'Ajjer (UNESCO)',
    dimensoes: 'Mais de 72.000 km² de sítios arqueológicos',
    material: 'Pigmentos minerais, carvão, óxidos ferrosos sobre arenito eólico',
    tecnica: 'Pintura parietal com pincéis finos, gravura incisa e pigmentação policromática',
    paletaCores: [
      { hex: '#B84A39', name: 'Terracota Saariana', pigmentOrigin: 'Óxido de ferro oxidado' },
      { hex: '#F0E6D2', name: 'Calcita Clara', pigmentOrigin: 'Mineral calcário' },
      { hex: '#634832', name: 'Ocre Pardo', pigmentOrigin: 'Argila rica em limonita' }
    ],
    composicao: 'Composições complexas de figuras humanas em procissão, gado domesticado e deidades antropomórficas monumentais com elmos circulares.',
    marcos: ['Registro visual da mudança climática holocênica', 'Tradições visuais africanas anteriores às dinastias egípcias'],
    perguntaPrincipal: 'Quantas histórias existiram antes daquilo que a historiografia ocidental denominou como "História"?',
    perguntasSecundarias: [
      'Qual a relação entre as imagens de Tassili e as origens da cosmologia do Vale do Nilo?',
      'Como a arte preserva a memória de ecossistemas extintos?'
    ],
    conceitos: ['Paisagem Mutável', 'África Pré-Dinástica', 'Corpo Simbólico', 'Cosmologia'],
    imagemUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/African_cave_paintings.jpg',
    imagemAlt: 'Pintura rupestre em Tassili n\'Ajjer, Argélia',
    imagemFonte: 'UNESCO / Wikimedia Commons',
    imagemLicenca: 'Public Domain',
    imagemLink: 'https://commons.wikimedia.org/wiki/File:Tassili_Rock_Art.jpg',
    hotspots: [
      { x: 45, y: 50, label: 'Figuras em Procissão', description: 'Traços fluidos e refinados detalhando vestimentas, máscaras e adereços corporais.', zoomLevel: 2.4 },
      { x: 70, y: 40, label: 'Bovídeos Pastoris', description: 'Rebanhos detalhados com chifres decorados, evidência da domesticação e economia pastoral.', zoomLevel: 2.1 }
    ],
    notasProfessora: 'Destacar que a África não é apenas "berço biológico da humanidade", mas pioneira em sofisticação estética e documentação gráfica milenar.'
  },

  {
    id: 'marcar-03-lascaux',
    ato: 1,
    tipo: 'image',
    atoTitulo: 'Ato I · MARCAR',
    titulo: 'Gruta de Lascaux',
    subtitulo: 'A Sala dos Touros e a Nave subterrânea',
    conteudo: 'Dordogne · França. A imagem nasce na escuridão absoluta: não para ser vista sob a luz solar, mas ativada pela chama oscilante da lâmpada de gordura.',
    conteudoExtenso: 'Descoberta em 1940, a caverna de Lascaux abriga quase 6.000 figuras (animais, humanos e signos abstratos). Os artistas paleolíticos utilizaram a projeção anatômica tridimensional das saliências da rocha para dar volume muscular aos bisões, cavalos e auroques, demonstrando um domínio refinado da perspectiva torcida e da dinâmica espacial.',
    data: 'c. 17.000 – 15.000 AP (Solutrense / Magdaleniano)',
    cultura: 'Paleolítico Superior Europeu',
    localOrigem: 'Montignac, Dordonha, França',
    acervoAtual: 'Sítio original fechado ao público para conservação; réplica em Lascaux IV',
    material: 'Dióxido de manganês, carvão vegetal, ocre vermelho e amarelo misturados com gordura animal',
    tecnica: 'Pintura a sopro (aerografia pré-histórica com tubos de osso), estêncil e traço a carvão',
    paletaCores: [
      { hex: '#1E1917', name: 'Carvão Manganês', pigmentOrigin: 'Pirofusita e carvão vegetal' },
      { hex: '#A83224', name: 'Ocre Vermelho Intenso', pigmentOrigin: 'Hematita calcinada' },
      { hex: '#D6A548', name: 'Ocre Amarelo Goethita', pigmentOrigin: 'Hidróxido de ferro' },
      { hex: '#EDE4D1', name: 'Calcário Parietal', pigmentOrigin: 'Rocha calcária da caverna' }
    ],
    composicao: 'Perspectiva torcida (corpo de perfil com chifres de frente), sobreposições intencionais gerando sensação cinética sob a luz oscilante das tochas.',
    marcos: ['Ponto de inflexão nos estudos da percepção visual pré-histórica', 'Consciência sofisticada de suporte arquitetônico imersivo'],
    perguntaPrincipal: 'Se essas pinturas foram feitas no fundo inacessível de cavernas escuras, para quem elas foram criadas?',
    perguntasSecundarias: [
      'A parede da caverna é um fundo neutro ou uma membrana entre mundos?',
      'O que acontece quando a luz da tocha se movimenta diante da pintura?'
    ],
    conceitos: ['Espaço Imersivo', 'Perspectiva Torcida', 'Percepção Cinética', 'Rito Subterrâneo'],
    imagemUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lascaux_painting.jpg',
    imagemAlt: 'Pinturas parietais na Sala dos Touros em Lascaux, França',
    imagemFonte: 'Centre National de Préhistoire / Wikimedia Commons',
    imagemLicenca: 'Public Domain',
    imagemLink: 'https://commons.wikimedia.org/wiki/File:Lascaux_painting.jpg',
    hotspots: [
      { x: 38, y: 46, label: 'Auroque Monumental', description: 'Linha contínua expressiva de mais de 5 metros de comprimento traçada com dióxido de manganês.', zoomLevel: 2.6 },
      { x: 72, y: 60, label: 'Cavalo em Movimento', description: 'Degradê obtido por sopro de pigmento, aproveitando o abaulamento da rocha para sugerir volume.', zoomLevel: 2.4 },
      { x: 18, y: 30, label: 'Signos Geométricos', description: 'Pontos e linhas misteriosas que precedem qualquer sistema de escrita formal.', zoomLevel: 2.2 }
    ],
    notasProfessora: 'Apagar a luz da sala de aula e acender uma lanterna direcionada para exemplificar a experiência perceptiva original.'
  },

  {
    id: 'marcar-04-interrupcao-gombrich',
    ato: 1,
    tipo: 'interruption',
    atoTitulo: 'Interrupção Historiográfica 01',
    titulo: 'Ernst Gombrich e o Mito da "Origem"',
    subtitulo: 'A História da Arte (1950) sob escrutínio',
    conteudo: '«Não existe realmente essa coisa chamada Arte. Existem apenas artistas. (...) Se por arte entendemos a criação de coisas belas, temos de admitir que tais figuras não são arte.»',
    conteudoExtenso: 'O célebre livro de E. H. Gombrich abre com a famosa provocação, mas logo ancora a história em uma marcha evolutiva que culmina na Europa renascentista. Para Gombrich, a arte pré-histórica operava sob o signo da "magia prática" (garantir a caça), enquanto a arte ocidental operaria sob a "estética pura". Essa divisão hierárquica entre "magia primitiva" e "arte civilizada" é o pilar que a crítica contemporânea desconstrói.',
    citacaoHistorica: {
      autor: 'Ernst Gombrich',
      obra: 'A História da Arte (The Story of Art)',
      ano: '1950',
      texto: 'Esses criadores primitivos não olhavam para as suas cabanas e para os seus fetiches como nós olhamos para obras de arte. Pensavam neles como coisas com um propósito definido.',
      provocacao: 'Por que o Ocidente reservou a palavra "Arte" para seus próprios objetos e chamou a produção de outros povos de "fetiche", "artesanato" ou "documento etnográfico"?'
    },
    perguntaPrincipal: 'Quando um museu expõe um objeto ritual em uma redoma de vidro, o que ele preserva e o que ele aniquila?',
    conceitos: ['Eurocentrismo', 'Institucionalização', 'Fetiche vs. Arte', 'Historiografia'],
    notasProfessora: 'Discuta com a turma como os manuais clássicos moldaram o gosto e os preconceitos epistemológicos sobre o que é ou não é arte.'
  },

  {
    id: 'marcar-05-willendorf',
    ato: 1,
    tipo: 'image',
    atoTitulo: 'Ato I · MARCAR',
    titulo: 'Mulher de Willendorf',
    subtitulo: 'Nomeada arbitrariamente como "Vênus de Willendorf"',
    conteudo: 'Áustria. Um objeto portátil esculpido em calcário oolítico não nativo da região, impregnado de ocre vermelho, moldado para caber na palma da mão.',
    conteudoExtenso: 'Encontrada em 1908 perto de Willendorf (Áustria), a estatueta de apenas 11,1 cm de altura apresenta hipertrofia das características anatômicas femininas (seios, nádegas, ventre, vulva) e ausência intencional de traços faciais, substituídos por um trançado concêntrico ou touca. Nomeada pelos arqueólogos do século XX como "Vênus" — projetando o ideal clássico greco-romano da deusa da beleza erótica —, o artefato é hoje compreendido como amuleto obstétrico, símbolo de ancestralidade, matriz genealógica ou autorretrato tátil feito por mulheres gestantes.',
    data: 'c. 28.000 – 25.000 AP (Gravetense)',
    cultura: 'Paleolítico Superior Gravetense',
    localOrigem: 'Willendorf in der Wachau, Baixa Áustria',
    acervoAtual: 'Naturhistorisches Museum Wien (Viena, Áustria)',
    dimensoes: '11,1 cm de altura × 5,7 cm de largura × 4,5 cm de espessura; Peso: 86,4g',
    material: 'Calcário oolítico com incrustações de ocre vermelho (pedra originária do norte da Itália)',
    tecnica: 'Escultura por entalhe e polimento com ferramentas de sílex',
    paletaCores: [
      { hex: '#B89B72', name: 'Calcário Oolítico Poroso', pigmentOrigin: 'Carbonato de cálcio fóssil' },
      { hex: '#943825', name: 'Ocre Vermelho Residual', pigmentOrigin: 'Pigmento mineral de óxido de ferro' },
      { hex: '#635345', name: 'Pátina Arqueológica', pigmentOrigin: 'Deposição sedimentar milenar' }
    ],
    composicao: 'Escultura tridimensional volumétrica centrada no tronco, ausência de pés autoportantes (feita para ser transportada e segurada), cabeça esferoidal.',
    marcos: ['Desconstrução da nomenclatura patriarcal "Vênus"', 'Hipótese de autorrepresentação e circulação inter-regional de materiais'],
    perguntaPrincipal: 'Quem deu a este objeto o nome da deusa romana do amor e da beleza — e o que essa nomeação esconde?',
    perguntasSecundarias: [
      'Por que a figura não possui pés para ficar em pé sobre um pedestal?',
      'O que a procedência do calcário (a centenas de quilômetros de distância) nos diz sobre redes de circulação no Paleolítico?'
    ],
    conceitos: ['Corpo Gravetense', 'Portabilidade', 'Crítica Feminista', 'Objeto Ritual'],
    imagemUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Venus_of_Willendorf_frontview.jpg',
    imagemAlt: 'Mulher de Willendorf, vista frontal',
    imagemFonte: 'Naturhistorisches Museum Wien / Wikimedia Commons',
    imagemLicenca: 'CC BY-SA 4.0',
    imagemLink: 'https://commons.wikimedia.org/wiki/File:Venus_of_Willendorf_front.jpg',
    hotspots: [
      { x: 50, y: 15, label: 'Padrão da Cabeça', description: 'Sete voltas concêntricas representando cabelos trançados ou touca têxtil, sem olhos, boca ou nariz.', zoomLevel: 2.8 },
      { x: 50, y: 40, label: 'Tronco e Seios', description: 'Massa volumétrica esculpida com braços minúsculos repousando sobre os seios proeminentes.', zoomLevel: 2.5 },
      { x: 50, y: 65, label: 'Ventre e Linha Ínguinal', description: 'Linha de fenda anatômica detalhada e dobras de tecido adiposo associadas à gestação e sobrevivência.', zoomLevel: 2.6 }
    ],
    notasProfessora: 'Explicar a teoria da antropóloga Catherine McCoid e LeRoy McDermott: a perspectiva da estátua é a mesma que uma mulher tem ao olhar para o próprio corpo de cima para baixo durante a gravidez.'
  },

  // ATO II: HABITAR
  {
    id: 'habitar-06-gobekli',
    ato: 2,
    tipo: 'image',
    atoTitulo: 'Ato II · HABITAR',
    titulo: 'Göbekli Tepe',
    subtitulo: 'A Colina da Barriga / Anatólia',
    conteudo: 'Turquia. A arquitetura monumental não nasce após a agricultura: foram o rito, a reunião e a criação de imagens espaciais que impulsionaram a sedentarização humana.',
    conteudoExtenso: 'Datado do 10º milênio AEC, Göbekli Tepe antecede Stonehenge em mais de 6.000 anos e a cerâmica em milênios. Seus recintos circulares são formados por megálitos em forma de T com até 5,5 metros de altura e pesando até 20 toneladas, esculpidos com relevos de animais predadores (leões, touros, javalis, raposas, cobras, abutres) e braços humanos estilizados, sugerindo seres antropomórficos colossais guardiões do espaço sagrado.',
    data: 'c. 9.500 – 8.000 AEC (Neolítico Pré-Cerâmico A e B)',
    cultura: 'Sociedades caçadoras-coletoras em transição para a domesticação',
    localOrigem: 'Şanlıurfa, Anatólia Sudeste, Turquia',
    acervoAtual: 'Sítio Arqueológico de Göbekli Tepe (Patrimônio UNESCO) / Museu de Şanlıurfa',
    dimensoes: 'Pilares em T de 3 a 5,5 m de altura; recintos de 10 a 30 m de diâmetro',
    material: 'Calcário monolítico esculpido in situ',
    tecnica: 'Extração monumental com cunhas de madeira e entalhe em alto e baixo-relevo com percutores de sílex',
    paletaCores: [
      { hex: '#CBB292', name: 'Calcário Anatólio', pigmentOrigin: 'Rocha calcária da montanha Germuş' },
      { hex: '#877462', name: 'Sombra de Relevo', pigmentOrigin: 'Contraste óptico das incisões' },
      { hex: '#4A3E31', name: 'Terra Arqueológica', pigmentOrigin: 'Sedimento de soterramento intencional' }
    ],
    composicao: 'Plantas circulares e ovais concêntricas com dois pilares centrais maiores voltados para o interior, cercados por muros de pedra com pilares radiais.',
    marcos: ['Reversão da teoria de Gordon Childe (o templo precede a cidade e a lavoura)', 'Nascimento da arquitetura espacial ritual'],
    perguntaPrincipal: 'A imagem virou espaço — ou o espaço foi construído para abrigar a imagem?',
    perguntasSecundarias: [
      'Como caçadores-coletores sem tração animal ergueram monólitos de 20 toneladas?',
      'Por que o complexo foi intencionalmente soterrado com terra ao final de seu ciclo de uso?'
    ],
    conceitos: ['Monumento', 'Espaço Sagrado', 'Revolução Simbólica', 'Arquitetura Neolítica'],
    imagemUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Göbekli_Tepe,_Urfa.jpg',
    imagemAlt: 'Escavações dos pilares em T de Göbekli Tepe, Turquia',
    imagemFonte: 'Deutsches Archäologisches Institut / Wikimedia Commons',
    imagemLicenca: 'CC BY-SA 3.0',
    imagemLink: 'https://commons.wikimedia.org/wiki/File:Gobekli_Tepe,_Urfa.jpg',
    hotspots: [
      { x: 48, y: 55, label: 'Pilar em T Central', description: 'Braços e mãos humanas esculpidos em relevo nas laterais com cinto e pano de pele de raposa.', zoomLevel: 2.5 },
      { x: 30, y: 40, label: 'Relevos de Animais', description: 'Javalis, aves predadoras e serpentes entalhadas em relevo positivo com presas afiadas.', zoomLevel: 2.7 }
    ],
    notasProfessora: 'Contraste com a visão tradicional que dizia que o ser humano primeiro plantou, depois fez casas e só então construiu templos. Klaus Schmidt provou que a reunião ritual antecedeu a agricultura.'
  },

  {
    id: 'habitar-07-interrupcao-clark',
    ato: 2,
    tipo: 'interruption',
    atoTitulo: 'Interrupção Historiográfica 02',
    titulo: 'Kenneth Clark e o Preconceito de "Civilização"',
    subtitulo: 'Civilisation: A Personal View (BBC, 1969)',
    conteudo: '«Não sei definir o que é civilização em termos abstratos, mas reconheço-a quando a vejo: basta olhar para o Apolo de Belvedere e para uma máscara tribal africana.»',
    conteudoExtenso: 'Na célebre série documental da BBC, o historiador britânico Sir Kenneth Clark comparou o mármore grego do Apolo de Belvedere a uma máscara africana Fang para defender que o primeiro encarnava a "civilização" e a razão, enquanto a segunda pertencia ao "medo e à superstição". Essa declaração cristalizou o viés evolucionista da história da arte europeia, que mediu todas as culturas a partir da régua estética grega.',
    citacaoHistorica: {
      autor: 'Kenneth Clark',
      obra: 'Civilisation: A Personal View',
      ano: '1969',
      texto: 'O Apolo de Belvedere representa um triunfo do intelecto e da ordem moral humana sobre a barbárie do mundo natural.',
      provocacao: 'O que torna o cânone de mármore mais "civilizado" do que a síntese formal e expressiva de uma máscara esculpida em madeira?'
    },
    perguntaPrincipal: 'Quantas formas de conhecimento foram apagadas sob a justificativa de não serem "civilizadas"?',
    conceitos: ['Hierarquia Cultural', 'Colonialismo Epistêmico', 'Apolo de Belvedere', 'Canon'],
    notasProfessora: 'Mostre como a estética serviu de legitimação moral para o imperialismo e para a espoliação colonial de patrimônios.'
  },

  // ATO III: ORGANIZAR
  {
    id: 'organizar-08-tell-asmar',
    ato: 3,
    tipo: 'image',
    atoTitulo: 'Ato III · ORGANIZAR',
    titulo: 'Estatuetas Votivas de Tell Asmar',
    subtitulo: 'O Tesouro do Templo Quadrado de Abu em Eshnunna',
    conteudo: 'Mesopotâmia · Atual Iraque. Os olhos desmedidamente abertos com incrustações de concha e calcário negro: a imagem não descansa, ela vigia e ora perpetuamente diante dos deuses.',
    conteudoExtenso: 'Enterradas sob o piso do templo por volta de 2700 AEC, essas 12 figuras de alabastro e gesso representam devotos sumérios de diferentes status hierárquicos. Em postura de perpétua oração (mãos postas diante do peito), os olhos desproporcionais e fixos encarnam a atenção contínua do fiel na presença da divindade. A estátua atua como substituto vicário do corpo físico.',
    data: 'c. 2700 – 2600 AEC (Dinástico Arcaico II)',
    cultura: 'Suméria Antiga (Mesopotâmia)',
    localOrigem: 'Tell Asmar (antiga Eshnunna), Vale do Rio Diyala, Iraque',
    acervoAtual: 'National Museum of Iraq (Bagdá) / Oriental Institute (Chicago) / Metropolitan Museum (NY)',
    dimensoes: 'Figura masculina maior: 72 cm de altura; menor: 21 cm',
    material: 'Gesso (alabastro de gipsita), incrustações de concha marinha, calcário negro e betume',
    tecnica: 'Talhe geométrico em bloco compacto, polimento e incrustação mineral',
    paletaCores: [
      { hex: '#EAE1CE', name: 'Alabastro Calcítico', pigmentOrigin: 'Sulfato de cálcio hidratado' },
      { hex: '#1C1917', name: 'Betume Betuminoso', pigmentOrigin: 'Alcatrão natural mesopotâmico' },
      { hex: '#C2A378', name: 'Lápis e Concha', pigmentOrigin: 'Conchas do Golfo Pérsico' }
    ],
    composicao: 'Hierarquia de escala (tamanho proporcional ao status/função), corpos cônicos simplificados que direcionam a tensão visual exclusivamente para as órbitas oculares abertas.',
    marcos: ['Substituição do corpo humano pelo artefato no espaço cúltico', 'Primeiro sistema de mediação visual institucionalizada'],
    perguntaPrincipal: 'Por que os olhos são desproporcionalmente grandes e não piscam?',
    perguntasSecundarias: [
      'A estatueta é um retrato pessoal ou um substituto operacional do orante?',
      'Como a geometrização do corpo facilita a produção seriada em oficinas templárias?'
    ],
    conceitos: ['Olhar Votivo', 'Substituição Vicária', 'Hierarquia Visual', 'Cidades-Estado'],
    imagemUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sumerian_Status_from_Tell_Asmar,_part_of_the_Tell_Asmar_Hoard.jpg',
    imagemAlt: 'Estatuetas votivas sumerianas de Tell Asmar, Mesopotâmia',
    imagemFonte: 'Oriental Institute of Chicago / Wikimedia Commons',
    imagemLicenca: 'Public Domain',
    imagemLink: 'https://commons.wikimedia.org/wiki/File:Sumerian_votive_statues.jpg',
    hotspots: [
      { x: 38, y: 25, label: 'Olhos Incrustados', description: 'Pupilas de calcário negro engastadas com betume em órbitas de concha, criando um olhar vigilante permanente.', zoomLevel: 2.8 },
      { x: 45, y: 55, label: 'Mãos em Oração', description: 'Palmas fechadas segurando cálice de libação junto ao coração em atitude de devoção servil.', zoomLevel: 2.4 }
    ],
    notasProfessora: 'Chame a atenção dos estudantes de Desenho Industrial para a modularidade e redução volumétrica das formas anatômicas a cones e cilindros.'
  },

  {
    id: 'organizar-09-standard-ur',
    ato: 3,
    tipo: 'image',
    atoTitulo: 'Ato III · ORGANIZAR',
    titulo: 'O Estandarte de Ur',
    subtitulo: 'Os Painéis da Paz e da Guerra / Cemitério Real de Ur',
    conteudo: 'Suméria · Iraque. A invenção da narrativa visual em registros horizontais: a hierarquia de tamanho e a ordem dos tributos e da guerra organizam visualmente a pirâmide social.',
    conteudoExtenso: 'Uma caixa de madeira trapezoidal com quatro lados revestidos por um suntuoso mosaico de conchas do Golfo Pérsico, lápis-lazúli do Afeganistão e calcário vermelho. De um lado, a "Guerra" (carros de combate trucidando inimigos, prisioneiros nus sendo levados ao rei); do outro, a "Paz" (banquete real, servos carregando peixes, gado e cereais). A leitura é feita de baixo para cima, culminando na figura do monarca (Ensi), cujo topo da cabeça rompe o limite superior do friso.',
    data: 'c. 2600 – 2400 AEC (Primeira Dinastia de Ur)',
    cultura: 'Suméria (Cemitério Real de Ur)',
    localOrigem: 'Tumba Real PG 779, Ur (atual Tell el-Muqayyar, Dhi Qar, Iraque)',
    acervoAtual: 'British Museum (Londres, Reino Unido)',
    dimensoes: '21,59 cm de altura × 49,53 cm de comprimento × 11,43 cm de profundidade',
    material: 'Madeira, conchas marinhas gravadas, calcário vermelho, lápis-lazúli afegão colados com betume líquido',
    tecnica: 'Mosaico figurativo em embutimento micrométrico sobre suporte estrutural de madeira',
    paletaCores: [
      { hex: '#1C355E', name: 'Lápis-Lazúli Ultramarino', pigmentOrigin: 'Badakhshan, Afeganistão (comércio a 2.500 km)' },
      { hex: '#EBE2D3', name: 'Concha Nacarada', pigmentOrigin: 'Conchas do Mar da Arábia / Golfo Pérsico' },
      { hex: '#9E3A33', name: 'Calcário Vermelho', pigmentOrigin: 'Pedra calcária importada' },
      { hex: '#1F1A17', name: 'Betume Adesivo', pigmentOrigin: 'Hidrocarboneto natural de Hit' }
    ],
    composicao: 'Três faixas horizontais paralelas (registros) lidas cronológica e hierarquicamente de baixo para cima; o rei quebra a moldura superior por escala hierárquica.',
    marcos: ['Invenção da narrativa sequencial em quadrinhos', 'Materialização das rotas globais de comércio no Bronze Antigo'],
    perguntaPrincipal: 'Como uma imagem ensina quem manda, quem serve e quem morre em uma sociedade?',
    perguntasSecundarias: [
      'Por que a cabeça do rei ultrapassa a linha da moldura no topo?',
      'O que a presença de Lápis-lazúli do Afeganistão em Ur revela sobre o mundo antigo?'
    ],
    conceitos: ['Registros Visuais', 'Escala Hierárquica', 'Comércio Global Arcaico', 'Narrativa de Poder'],
    imagemUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Standard_of_ur.jpg',
    imagemAlt: 'O Estandarte de Ur, Painel da Paz e da Guerra, Suméria',
    imagemFonte: 'British Museum / Wikimedia Commons',
    imagemLicenca: 'Public Domain',
    imagemLink: 'https://commons.wikimedia.org/wiki/File:Standard_of_ur.jpg',
    hotspots: [
      { x: 30, y: 22, label: 'O Rei Banqueteando', description: 'Figura entronizada em escala monumental maior que todos os cortesãos, rompendo a linha superior.', zoomLevel: 2.7 },
      { x: 80, y: 25, label: 'O Músico e a Lira', description: 'Toca uma lira de touro ornamentada com cabeça de ouro e lápis-lazúli para entreter a corte.', zoomLevel: 2.5 },
      { x: 50, y: 80, label: 'Servos e Tributos', description: 'O povo comum em fila transportando fardos de peixe, cabras e provisões para os celeiros estatais.', zoomLevel: 2.4 }
    ],
    notasProfessora: 'Trabalhe a questão do design da informação: o Estandarte é um infográfico antigo que legitima o estado tributário e a guerra.'
  },

  {
    id: 'organizar-10-enheduanna',
    ato: 3,
    tipo: 'image',
    atoTitulo: 'Ato I · ORGANIZAR',
    titulo: 'Disco de Enheduanna',
    subtitulo: 'A primeira pessoa com autoria nomeada na história da humanidade',
    conteudo: 'Acádia · Mesopotâmia. Princesa, Alta Sacerdotisa de Nanna em Ur e poeta. O disco de alabastro documenta seu gesto litúrgico e traz sua assinatura inscrita em escrita cuneiforme.',
    conteudoExtenso: 'Filha do rei Sargão da Acádia, Enheduanna (c. 2285–2250 AEC) escreveu hinos templários e os famosos poemas à deusa Inanna («A Exaltação de Inanna»). Ela assinou explicitamente suas obras literárias, tornando-se o autor individual com nome registrado mais antigo de toda a história humana — séculos antes de Homero ou dos escribas bíblicos. No disco de alabastro, ela é retratada presidindo uma libação diante do zigurate.',
    data: 'c. 2300 – 2250 AEC (Império Acádio)',
    cultura: 'Acádia / Suméria Unificada',
    localOrigem: 'Gipar (residência das sacerdotisas), Ur, Iraque',
    acervoAtual: 'Penn Museum (Filadélfia, EUA)',
    dimensoes: '25,6 cm de diâmetro × 7,1 cm de espessura',
    material: 'Alabastro translúcido (gipsita/calcita) com incisões epigráficas cuneiformes',
    tecnica: 'Escultura em relevo circular e inscrição de epigrafia cuneiforme acádia',
    paletaCores: [
      { hex: '#DDD3C1', name: 'Alabastro Claro', pigmentOrigin: 'Pedra translúcida nobre' },
      { hex: '#7D705C', name: 'Sombra Cuneiforme', pigmentOrigin: 'Ranhuras dos caracteres cuneiformes' }
    ],
    composicao: 'Composição processional circular com Enheduanna no centro em escala superior aos seus três auxiliares masculinos, vestindo manto plissado de volutas em camadas.',
    marcos: ['Primeiro autor individual registrado da história universal', 'Documento incontestável de liderança religiosa, intelectual e estética feminina'],
    perguntaPrincipal: 'Por que a maioria dos livros de história da arte começa a falar de autores individuais apenas na Grécia ou no Renascimento?',
    perguntasSecundarias: [
      'Como o apagamento de Enheduanna nos manuais tradicionais serviu à tese da autoria exclusivamente masculina e ocidental?',
      'Qual o papel da escrita cuneiforme no verso do disco para garantir a imortalidade do seu nome?'
    ],
    conceitos: ['Autoria Primordial', 'Enheduanna', 'Gênero e Poder', 'Epigrafia'],
    imagemUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Disk_of_Enheduanna.JPG',
    imagemAlt: 'Disco de alabastro da Alta Sacerdotisa Enheduanna, Ur, Mesopotâmia',
    imagemFonte: 'Penn Museum / Wikimedia Commons',
    imagemLicenca: 'Public Domain',
    imagemLink: 'https://commons.wikimedia.org/wiki/File:Disk_of_Enheduanna.jpg',
    hotspots: [
      { x: 45, y: 50, label: 'Enheduanna com Tiaras', description: 'Vestida com túnica cerimonial de babados em camadas (flounced garment) e touca canônica de Alta Sacerdotisa.', zoomLevel: 2.8 },
      { x: 28, y: 55, label: 'Sacerdote Assistente', description: 'Despeja líquido em um vaso de libação sobre o altar do templo.', zoomLevel: 2.3 },
      { x: 75, y: 50, label: 'Escriba com Tabuleta', description: 'Auxiliar carregando a vara de medir e o estilete de escrita.', zoomLevel: 2.4 }
    ],
    notasProfessora: 'Momento alto da aula: surpreender a turma revelando que o primeiro autor da história humana é uma mulher não-ocidental.'
  },

  {
    id: 'organizar-11-interrupcao-nochlin',
    ato: 3,
    tipo: 'interruption',
    atoTitulo: 'Interrupção Historiográfica 03',
    titulo: 'Linda Nochlin e as Estruturas Institucionais',
    subtitulo: 'Why Have There Been No Great Women Artists? (Artnews, 1971)',
    conteudo: '«A pergunta ‘Por que não houve grandes mulheres artistas?’ é uma armadilha. A falha não reside nos nossos genes ou na nossa falta de talento, mas na estrutura das nossas instituições sociais e educacionais.»',
    conteudoExtenso: 'O ensaio seminal de Linda Nochlin em 1971 fundou a historiografia feminista da arte. Nochlin demonstrou que a ideia de "gênio individual masculino" é uma construção ideológica que mascara a exclusão sistemática: mulheres foram historicamente proibidas de frequentar ateliês de modelo vivo, de ingressar em academias de arte e de controlar suas próprias finanças.',
    citacaoHistorica: {
      autor: 'Linda Nochlin',
      obra: 'Why Have There Been No Great Women Artists?',
      ano: '1971',
      texto: 'O milagre é que, dadas as condições avassaladoras de desvantagem institucional, tantas mulheres tenham conseguido produzir arte de relevância duradoura.',
      provocacao: 'Quando olhamos para a história antiga, estamos vendo a ausência de mulheres criadoras ou o apagamento deliberado dos seus nomes pelos escribas e historiadores posteriores?'
    },
    perguntaPrincipal: 'Quantas obras atribuídas a "autor desconhecido" foram feitas por mãos femininas?',
    conceitos: ['Historiografia Feminista', 'Gênio como Mito', 'Barreiras Institucionais', 'Visibilidade'],
    notasProfessora: 'Conecte Nochlin com o caso de Enheduanna e com a exclusão de tecelãs, ceramistas e pintoras nas narrativas canônicas.'
  },

  // ATO IV: NORMATIZAR
  {
    id: 'normatizar-12-narmer',
    ato: 4,
    tipo: 'image',
    atoTitulo: 'Ato IV · NORMATIZAR',
    titulo: 'A Paleta de Narmer',
    subtitulo: 'A pedra fundamental do Estado Faraônico / Templo de Hórus em Hieracômpolis',
    conteudo: 'Egito Pré-Dinástico. A invenção da lei da frontalidade e da gramática visual do faraó: o monarca golpeia o inimigo com a clava sob a bênção do falcão Hórus.',
    conteudoExtenso: 'Uma placa cerimonial de siltito verde de 64 cm utilizada originalmente para moer cosméticos minerais para a estátua do deus. No verso, o rei Narmer usa a Coroa Branca do Alto Egito enquanto subjuga o Baixo Egito; na frente, marcha triunfal usando a Coroa Vermelha do Baixo Egito diante de dez prisioneiros decapitados com as cabeças entre os pés. Os animais fantásticos com pescoços entrelaçados (serpopardos) contêm a concavidade para o pigmento e simbolizam a unificação cósmica das Duas Terras.',
    data: 'c. 3100 – 3000 AEC (Dinastia 0 / I Dinastia)',
    cultura: 'Egito Antigo Unificado',
    localOrigem: 'Depósito Principal do Templo de Nekhen (Hieracômpolis), Alto Egito',
    acervoAtual: 'Museu Egípcio do Cairo (Egito)',
    dimensoes: '64 cm de altura × 42 cm de largura × 2,5 cm de espessura; Peso: aprox. 12 kg',
    material: 'Siltito grauvaca verde-oliva com polimento fino',
    tecnica: 'Escultura em baixo-relevo bifacial com registros contínuos',
    paletaCores: [
      { hex: '#4A5B4C', name: 'Siltito Verde-Oliva', pigmentOrigin: 'Rocha sedimentar do Wadi Hammamat' },
      { hex: '#2A352B', name: 'Grauvaca Sombreada', pigmentOrigin: 'Pátina escura do polimento' },
      { hex: '#7A8C78', name: 'Relevo Iluminado', pigmentOrigin: 'Reflexo de luz rasante' }
    ],
    composicao: 'Lei da Frontalidade canônica egípcia: cabeça de perfil, olho frontal, ombros de frente, quadril em 3/4 e pernas de perfil; escala hierárquica impositiva.',
    marcos: ['Estabelecimento do cânone visual egípcio imutável por 3.000 anos', 'Certidão de nascimento do Estado monárquico unificado'],
    perguntaPrincipal: 'Por que o cânone de representação do corpo inventado nesta paleta permaneceu praticamente idêntico por mais de três mil anos?',
    perguntasSecundarias: [
      'Como a arte egípcia equilibra função cosmomágica com pura propaganda militar?',
      'Por que a cabeça é de perfil, mas o olho é desenhado de frente?'
    ],
    conceitos: ['Lei da Frontalidade', 'Cânone Egípcio', 'Unificação Política', 'Iconografia do Poder'],
    imagemUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Narmer_Palette.jpg',
    imagemAlt: 'Paleta de Narmer, verso e frente, Museu Egípcio do Cairo',
    imagemFonte: 'Egyptian Museum Cairo / Wikimedia Commons',
    imagemLicenca: 'Public Domain',
    imagemLink: 'https://commons.wikimedia.org/wiki/File:Narmer_Palette.jpg',
    hotspots: [
      { x: 32, y: 40, label: 'Narmer e a Clava', description: 'Gesto paradigmático do faraó punindo o caos (Maat contra Isfet) que se repetirá até o período romano.', zoomLevel: 2.6 },
      { x: 38, y: 28, label: 'Falcão Hórus', description: 'Personificação divina entregando a terra dos papiros (o Delta) amarrada por um gancho nasal.', zoomLevel: 2.7 },
      { x: 72, y: 55, label: 'Serpopardos Entrelaçados', description: 'Leopardos com pescoços serpentiformes controlados por cordas, emoldurando a cavidade para moagem do colírio de malaquita.', zoomLevel: 2.5 }
    ],
    notasProfessora: 'Mostre como a estética egípcia não buscava o "instantâneo fotográfico", mas a "eternidade": desenhar a parte do corpo pelo seu ângulo mais reconhecível e imutável.'
  },

  {
    id: 'normatizar-13-gize',
    ato: 4,
    tipo: 'image',
    atoTitulo: 'Ato IV · NORMATIZAR',
    titulo: 'Complexo das Pirâmides de Gizé',
    subtitulo: 'Quéops, Quéfren e Miquerinos / A materialização da montanha primordial',
    conteudo: 'Planalto de Gizé · Egito. A geometria pura em escala geológica: mais de 2,3 milhões de blocos de calcário erguidos para transformar o túmulo do faraó no motor cosmomágico do império.',
    conteudoExtenso: 'A Grande Pirâmide de Quéops (originalmente com 146,6 metros de altura) foi a estrutura mais alta construída pela humanidade por mais de 3.800 anos. Alinhada com precisão astronômica quase milimétrica aos pontos cardeais verdadeiros e à constelação de Órion, sua construção não foi obra de escravos chicoteados, mas de uma massiva mobilização estatal de trabalhadores sazonais remunerados durante a cheia do Nilo.',
    data: 'c. 2580 – 2510 AEC (IV Dinastia, Império Antigo)',
    cultura: 'Egito Antigo (Império Antigo)',
    localOrigem: 'Planalto de Gizé, Cairo, Egito',
    acervoAtual: 'Patrimônio Mundial da Humanidade (UNESCO)',
    dimensoes: 'Base de Quéops: 230,34 m de lado; Altura original: 146,6 m; Volume: aprox. 2,58 milhões de m³',
    material: 'Calcário local numolítico do platô, calcário branco fino de Tura (revestimento polido) e granito rosa de Assuã',
    tecnica: 'Arquitetura megalítica estereotômica com rampas de alvenaria e alavancas mecânicas',
    paletaCores: [
      { hex: '#D5B88F', name: 'Calcário do Deserto', pigmentOrigin: 'Pedra numulítica fóssil' },
      { hex: '#A6835B', name: 'Arenito Dourado', pigmentOrigin: 'Patina solar milenar' },
      { hex: '#58738C', name: 'Céu do Platô', pigmentOrigin: 'Atmosfera e contraste cromático' }
    ],
    composicao: 'Triangulação geométrica de proporções áureas, alinhamento astronômico axial norte-sul com margem de erro inferior a 0,05 grau.',
    marcos: ['Pico da engenharia arquitetônica de cantaria no mundo antigo', 'Símbolo supremo da centralização tributária e religiosa'],
    perguntaPrincipal: 'Escala é poder? Por que regimes imperiais sempre recorrem à monumentalidade para calar a escala do corpo humano?',
    perguntasSecundarias: [
      'Como a organização do canteiro de obras das pirâmides prefigura o design de operações e logística moderna?',
      'O que resta do impacto visual sabendo que as pirâmides eram cobertas de calcário branco reluzente com pontas de eletro dourado?'
    ],
    conceitos: ['Escala Monumental', 'Engenharia de Estado', 'Geometria Cósmica', 'Necrópole'],
    imagemUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kheops-Pyramid.jpg',
    imagemAlt: 'A Grande Pirâmide de Quéops no platô de Gizé, Egito',
    imagemFonte: 'Wikimedia Commons',
    imagemLicenca: 'CC BY-SA 3.0',
    imagemLink: 'https://commons.wikimedia.org/wiki/File:Kheops-Pyramid.jpg',
    hotspots: [
      { x: 50, y: 30, label: 'Ápice da Pirâmide', description: 'Originalmente coroada por um piramídio (benben) revestido em folha de ouro para refletir os primeiros raios de Rá.', zoomLevel: 2.2 },
      { x: 50, y: 75, label: 'Fiadas de Blocos', description: 'Cada bloco de calcário pesa em média 2,5 toneladas, ajustados com juntas inferiores a meio milímetro.', zoomLevel: 2.5 }
    ],
    notasProfessora: 'Desconstrua a lenda de Hollywood sobre escravos construindo pirâmides: as escavações de Mark Lehner e Zahi Hawass encontraram a cidade dos operários, com dietas ricas em carne e atendimento médico.'
  },

  {
    id: 'normatizar-14-nefertiti',
    ato: 4,
    tipo: 'image',
    atoTitulo: 'Ato IV · NORMATIZAR',
    titulo: 'Busto de Nefertiti',
    subtitulo: 'O Ateliê de Tutmés em Akhetaton / A Revolução de Amarna',
    conteudo: 'Egito · Novo Império. Uma obra-prima de gesso policromado criada não para um túmulo, mas como modelo pedagógico de oficina para replicação escultórica da Grande Esposa Real.',
    conteudoExtenso: 'Esculpido por volta de 1345 AEC pelo mestre escultor Tutmés em Amarna, o busto de Nefertiti rompeu com o tradicional hieratismo egípcio em favor de uma elegância sinuosa e naturalista. Descoberto em 1912 pelo arqueólogo alemão Ludwig Borchardt, o busto foi retirado do Egito através de partilha fraudulenta e levado para a Alemanha. Hoje no Neues Museum em Berlim, é o centro de uma das maiores disputas internacionais de repatriação patrimonial e justiça decolonial.',
    data: 'c. 1345 AEC (XVIII Dinastia, Período Amarniano)',
    cultura: 'Egito Antigo (Período de Akhenaton / Amarna)',
    localOrigem: 'Ateliê do Escultor Tutmés, Akhetaton (atual Tell el-Amarna), Médio Egito',
    acervoAtual: 'Neues Museum / Ägyptisches Museum und Papyrussammlung (Berlim, Alemanha)',
    dimensoes: '48 cm de altura; Peso: aprox. 20 kg',
    material: 'Núcleo de calcário recoberto por camadas modeladas de estuque de gesso policromado, olho de cristal de rocha com cera de abelha',
    tecnica: 'Modelagem em estuque sobre núcleo pétreo esculpido e pintura com têmpera mineral',
    paletaCores: [
      { hex: '#26547C', name: 'Azul Egípcio de Nefertiti', pigmentOrigin: 'Silicato de cálcio e cobre sintetizado' },
      { hex: '#BA7A58', name: 'Pele Terracota Amarniana', pigmentOrigin: 'Ocre vermelho misturado com gesso branco' },
      { hex: '#D4AF37', name: 'Faixa Dourada da Coroa', pigmentOrigin: 'Pigmento amarelo de orpimento' },
      { hex: '#1B1E23', name: 'Kohl dos Olhos', pigmentOrigin: 'Galena / fuligem negra' }
    ],
    composicao: 'Simetria facial com pescoço longo e elegante que equilibra a pesada coroa cilíndrica azul (khepresh feminino). O olho esquerdo nunca recebeu a incrustação de cristal, confirmando sua função como modelo de oficina.',
    marcos: ['Pico do naturalismo e elegância do período amarniano', 'Ícone da luta contemporânea pela restituição de arte espoliada'],
    perguntaPrincipal: 'Por que o símbolo máximo da realeza e beleza egípcia está exposto em Berlim e não no Cairo?',
    perguntasSecundarias: [
      'Como a partilha colonial de escavações no início do século XX legitimou a pilhagem de tesouros do Sul Global?',
      'O que a ausência intencional do olho esquerdo nos ensina sobre o processo de design e prototipagem em um ateliê de escultura antigo?'
    ],
    conceitos: ['Restituição e Decolonialidade', 'Amarna', 'Prototipagem de Ateliê', 'Azul Egípcio'],
    imagemUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nofretete_Neues_Museum.jpg',
    imagemAlt: 'Busto de Nefertiti em exibição no Neues Museum de Berlim',
    imagemFonte: 'Neues Museum Berlin / Wikimedia Commons',
    imagemLicenca: 'CC BY-SA 3.0',
    imagemLink: 'https://commons.wikimedia.org/wiki/File:Nofretete_Neues_Museum.jpg',
    hotspots: [
      { x: 50, y: 18, label: 'Coroa Azul Cilindrica', description: 'Coroa real única amarrada por uma fita dourada com a serpente Uraeus (naja) na fronte.', zoomLevel: 2.5 },
      { x: 42, y: 44, label: 'Olho de Cristal Incrustado', description: 'Íris de cristal de rocha polido com pupila pintada em laca preta e fixada com cera.', zoomLevel: 2.8 },
      { x: 58, y: 44, label: 'Órbita Esquerda Vazia', description: 'Ausência de cola ou resíduo prova que o busto era um molde de ateliê para treinar aprendizes.', zoomLevel: 2.8 }
    ],
    notasProfessora: 'Promova um debate em sala: O Egito tem direito de exigir Nefertiti e a Pedra de Roseta de volta? Quais os argumentos dos museus europeus e por que eles são frágeis?'
  },

  {
    id: 'normatizar-15-kouros',
    ato: 4,
    tipo: 'comparison',
    atoTitulo: 'Ato IV · NORMATIZAR',
    titulo: 'Kouros Arcaico e a Influência Egípcia',
    subtitulo: 'Kouros de Anavyssos (Kroisos) vs. Estatuária Real Egípcia',
    conteudo: 'Grécia Arcaica. O chamado "Milagre Grego" não nasceu do nada: a escultura grega em mármore derivou diretamente da grade de proporções e da postura das estátuas egípcias.',
    conteudoExtenso: 'Durante o século VI AEC, escultores gregos visitaram o Egito e adotaram sua técnica monumental de talhe em pedra dura e sua grade modular de proporções (o cânone de 18-21 punhos). O Kouros grego herda a postura rígida egípcia: pé esquerdo avançado, punhos cerrados colados às coxas, ombros largos e visão estritamente frontal. A grande inovação grega foi a nudez heroica atlética (ausente no Egito) e o "sorriso arcaico", que insere uma centelha de vida no rosto de pedra.',
    data: 'c. 530 AEC (Período Arcaico Grego)',
    cultura: 'Grécia Arcaica (Ática)',
    localOrigem: 'Anavyssos, Ática, Grécia',
    acervoAtual: 'Museu Arqueológico Nacional de Atenas (Grécia)',
    dimensoes: '1,94 m de altura (sobre-humano)',
    material: 'Mármore de Paros com restos de policromia original',
    tecnica: 'Escultura por extração em bloco com punção, gradina e abrasão com esmeril de Naxos',
    paletaCores: [
      { hex: '#EAE5DB', name: 'Mármore de Paros', pigmentOrigin: 'Carbonato cristalino translúcido' },
      { hex: '#A84131', name: 'Vermelho Cinábrio (Cabelos)', pigmentOrigin: 'Sulfeto de mercúrio policromo' },
      { hex: '#87705B', name: 'Sombra Muscular', pigmentOrigin: 'Incisão das costelas e patela' }
    ],
    composicao: 'Bilateralmente simétrico, pé esquerdo à frente sem deslocamento do centro de gravidade da bacia, peitorais geométricos e sorriso arcaico nos lábios.',
    marcos: ['Desmistificação do "Milagre Grego": apropriação e adaptação das técnicas egípcias', 'Transição da função votiva tumular para a glorificação do corpo cidadão'],
    comparison: {
      titleLeft: 'Estátua Egípcia (ex: Menkaure)',
      titleRight: 'Kouros de Anavyssos',
      imageLeft: 'https://commons.wikimedia.org/wiki/Special:FilePath/King_Menkaura_(Mycerinus)_and_queen.jpg',
      imageRight: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kroisos_Kouros.jpg',
      captionLeft: 'Menkaure (c. 2500 AEC): vestido com saiote real (shendyt), apoiado no pilar dorsal de pedra, olhar focado no além cósmico.',
      captionRight: 'Kroisos (c. 530 AEC): nudez total, sem pilar de sustentação dorsal, sorriso arcaico voltado para o espectador terreno.',
      prompt: 'Compare os pés e os braços: a postura é idêntica, mas o que muda quando o pilar de pedra de apoio às costas é removido e o corpo se desnuda?'
    },
    perguntaPrincipal: 'A Grécia inventou a escultura do nada — ou ela aprendeu a esculpir com os egípcios?',
    perguntasSecundarias: [
      'Por que a história da arte clássica tentou esconder a dívida formal que os gregos tinham com o Egito e com o Oriente Próximo?',
      'O que significa o "sorriso arcaico" nos lábios das estátuas gregas?'
    ],
    conceitos: ['Kouros', 'Sorriso Arcaico', 'Apropriação Cultural', 'Nudez Heroica'],
    imagemUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kroisos_Kouros.jpg',
    imagemAlt: 'Kouros de Anavyssos (Kroisos), Museu Arqueológico Nacional de Atenas',
    imagemFonte: 'National Archaeological Museum Athens / Wikimedia Commons',
    imagemLicenca: 'CC BY-SA 3.0',
    imagemLink: 'https://commons.wikimedia.org/wiki/File:NAMA_Kroisos.jpg',
    hotspots: [
      { x: 50, y: 15, label: 'Cabelos Perolados', description: 'Tranças estilizadas caindo sobre as costas em contas esféricas que protegem o pescoço da quebra.', zoomLevel: 2.7 },
      { x: 50, y: 22, label: 'Sorriso Arcaico', description: 'Curvatura dos lábios para cima que visa conferir vitalidade e presença animada à pedra inanimada.', zoomLevel: 2.8 },
      { x: 50, y: 48, label: 'Sulco Inguinal e Abdômen', description: 'Divisão anatômica geométrica ainda rígida (oito gomos), antecipando o cânone clássico.', zoomLevel: 2.4 }
    ],
    notasProfessora: 'Mencione o livro "Black Athena" de Martin Bernal e o debate historiográfico sobre as raízes afro-asiáticas da civilização clássica.'
  },

  {
    id: 'normatizar-16-doriforo',
    ato: 4,
    tipo: 'image',
    atoTitulo: 'Ato IV · NORMATIZAR',
    titulo: 'O Doríforo de Policleto',
    subtitulo: 'O Portador da Lança / O Cânone de Proporções e o Contrapposto',
    conteudo: 'Grécia Clássica. A beleza como cálculo matemático rigoroso: a proporção de 1 para 7 cabeças e o equilíbrio dinâmico entre tensão e relaxamento muscular.',
    conteudoExtenso: 'Policleto de Argos escreveu um tratado teórico intitulado «O Cânone» (Kanon) e esculpiu o Doríforo (c. 450–440 AEC) em bronze para materializar sua tese: a beleza não é subjetiva, mas resulta da simetria numérica de todas as partes entre si (dedo para o dedo, mão para o punho, cabeça para o tronco). O Doríforo consolidou o contrapposto: a perna direita sustenta o peso do corpo (tensa), enquanto a esquerda relaxa; inversamente, o braço esquerdo carrega a lança (tenso) e o direito pende livre (relaxado).',
    data: 'c. 450 – 440 AEC (original em bronze perdido; cópias romanas em mármore do séc. I AEC–I EC)',
    cultura: 'Grécia Clássica (Argos / Atenas)',
    localOrigem: 'Argos / Pompéia (cópia romana mais preservada)',
    acervoAtual: 'Museo Archeologico Nazionale di Napoli (Nápoles, Itália)',
    dimensoes: '2,12 m de altura com base',
    material: 'Original em bronze cera perdida; cópia romana em mármore branco com esteio em tronco de árvore',
    tecnica: 'Fundição em bronze cera perdida (original) e cópia pantográfica em mármore (romana)',
    paletaCores: [
      { hex: '#F4EFEA', name: 'Mármore de Carrara (Cópia)', pigmentOrigin: 'Mármore apuano italiano' },
      { hex: '#7A6B5D', name: 'Bronze Pátina Original', pigmentOrigin: 'Liga de cobre e estanho polido a ouro' },
      { hex: '#C2B6A6', name: 'Luz Escultórica', pigmentOrigin: 'Modelado suave de transição anatômica' }
    ],
    composicao: 'Contrapposto clássico (quiasmo em X): perna de apoio vs. perna livre; braço ativo vs. braço passivo; linha dos ombros inclina-se em direção oposta à linha dos quadris.',
    marcos: ['Nascimento da teoria canônica da proporção matemática na arte ocidental', 'Fundamento histórico da ergonomia e do design antropométrico'],
    perguntaPrincipal: 'Quem é excluído quando uma sociedade define que existe apenas UM corpo matematicamente "perfeito"?',
    perguntasSecundarias: [
      'Como o cânone de Policleto influenciou o Homem Vitruviano de Da Vinci e o Modulor de Le Corbusier?',
      'Por que a maioria das estátuas gregas que conhecemos são na verdade cópias de mármore feitas por romanos séculos depois?'
    ],
    conceitos: ['Cânone de Policleto', 'Contrapposto', 'Antropometria', 'Exclusão Corporal'],
    imagemUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Doryphoros_MAN_Napoli_Inv6011-2.jpg',
    imagemAlt: 'Doríforo de Policleto, cópia romana em mármore no Museu de Nápoles',
    imagemFonte: 'Museo Archeologico Nazionale di Napoli / Wikimedia Commons',
    imagemLicenca: 'CC BY-SA 3.0',
    imagemLink: 'https://commons.wikimedia.org/wiki/File:Doryphoros_MAN_Napoli_Inv6011-2.jpg',
    hotspots: [
      { x: 50, y: 12, label: 'Proporção da Cabeça', description: 'A altura total do corpo é exatamente igual a 7 vezes a altura da cabeça.', zoomLevel: 2.6 },
      { x: 45, y: 48, label: 'Báscula Pélvica', description: 'O quadril direito sobe para absorver a sustentação do peso, compensado pelo ombro direito que desce.', zoomLevel: 2.5 },
      { x: 62, y: 75, label: 'Esteio em Tronco de Árvore', description: 'Adição estrutural romana indispensável para evitar que o pesado mármore quebre nos tornozelos (o bronze original não precisava deste apoio).', zoomLevel: 2.4 }
    ],
    notasProfessora: 'Conexão direta com Desenho Industrial: discuta as tabelas antropométricas contemporâneas e como o "corpo padrão" muitas vezes ignora corpos com deficiência, idosos e diferentes biotipos globais.'
  },

  {
    id: 'normatizar-17-interrupcao-pollock',
    ato: 4,
    tipo: 'interruption',
    atoTitulo: 'Interrupção Historiográfica 04',
    titulo: 'Griselda Pollock e a Diferenciação do Cânone',
    subtitulo: 'Differencing the Canon: Feminist Desire and the Writing of Art’s Histories (1999)',
    conteudo: '«O cânone não é uma lista neutra das melhores obras da humanidade; é uma estrutura ativa de poder que legitima a supremacia patriarcal, colonial e de classe.»',
    conteudoExtenso: 'A historiadora da arte Griselda Pollock argumenta que criticar o cânone não significa apenas "adicionar algumas mulheres ou artistas não-brancos" à lista existente, mas transformar radicalmente as perguntas que fazemos. Para Pollock, o cânone clássico funciona como um mito de origem que projeta os desejos dos homens brancos da elite ocidental como se fossem verdades universais para toda a humanidade.',
    citacaoHistorica: {
      autor: 'Griselda Pollock',
      obra: 'Differencing the Canon',
      ano: '1999',
      texto: 'O cânone funciona como um sistema de repetição mítica que confirma continuamente a identidade de quem o consagra.',
      provocacao: 'Quando ensinamos que a Grécia é o "berço da civilização", quem estamos colocando na posição de filhos legítimos e quem estamos declarando como bastardos?'
    },
    perguntaPrincipal: 'É possível desmantelar o cânone sem destruir a história?',
    conceitos: ['Desconstrução do Cânone', 'Crítica Institucional', 'Política da Representação', 'Poder Simbólico'],
    notasProfessora: 'Proponha à turma pensar como o curso de Desenho Industrial pode utilizar a história da arte para projetar para um mundo diverso em vez de reproduzir padrões excludentes.'
  },

  {
    id: 'normatizar-18-exekias',
    ato: 4,
    tipo: 'image',
    atoTitulo: 'Ato IV · NORMATIZAR',
    titulo: 'Exekias: Aquiles e Ájax jogando dados',
    subtitulo: 'Ânfora de Figuras Negras / O momento de calmaria antes da tragédia',
    conteudo: 'Atenas · Grécia. O suporte cerâmico utilitário como campo de alta tensão dramática: a curvatura da ânfora direciona as lanças dos heróis para o centro do tabuleiro.',
    conteudoExtenso: 'Assinada por Exekias tanto como oleiro quanto como pintor («Exekias epoiesen» / «Exekias egrapse me»), esta ânfora de figuras negras (c. 540–530 AEC) retrata os dois maiores guerreiros aqueus jogando dados durante o cerco de Troia. Aquiles grita "Quatro!" (tesara) e Ájax grita "Três!" (tria), conforme as inscrições pintadas ao lado de suas bocas — como balões de fala arcaicos. As lanças inclinadas e as costas curvadas dos heróis espelham com perfeição matemática o perfil dos ombros do vaso cerâmico.',
    data: 'c. 540 – 530 AEC (Período Arcaico Tardio)',
    cultura: 'Grécia (Atenas / Cerâmica Ática)',
    localOrigem: 'Atenas, Grécia (encontrada em necrópole etrusca em Vulci, Itália)',
    acervoAtual: 'Musei Vaticani (Museu Gregoriano Etrusco, Cidade do Vaticano)',
    dimensoes: '61 cm de altura; Diâmetro máximo: aprox. 38 cm',
    material: 'Argila ática rica em ferro (terracota alaranjada) e engobe de queima redutora',
    tecnica: 'Técnica de figuras negras: silhuetas pintadas com barbotina negra e detalhes gravados com estilete de incisão fina',
    paletaCores: [
      { hex: '#D97443', name: 'Terracota Ática Queimada', pigmentOrigin: 'Argila ferruginosa do Monte Himeto' },
      { hex: '#191716', name: 'Verniz Negro Reduzido', pigmentOrigin: 'Barbotina de argila coloidal calcinada' },
      { hex: '#F0E2C8', name: 'Incisão Clara', pigmentOrigin: 'Linhas incisas expondo a base da cerâmica' }
    ],
    composicao: 'Composição piramidal convergente: as lanças formam um triângulo que conduz o olhar diretamente ao tabuleiro e aos dados na base central.',
    marcos: ['Fusão perfeita entre a morfologia funcional do produto (design cerâmico) e a narrativa visual', 'Uso pioneiro de escrita epigráfica como elemento gráfico sonoro'],
    perguntaPrincipal: 'Isto é um utensílio doméstico de armazenamento ou uma obra de arte dramática?',
    perguntasSecundarias: [
      'Como o formato tridimensional do vaso afeta a leitura da cena quando giramos o objeto nas mãos?',
      'Por que os vasos áticos atenienses eram encontrados em tumbas nobres etruscas na Itália?'
    ],
    conceitos: ['Design de Superfície', 'Figuras Negras', 'Exekias', 'Tensão Dramática'],
    imagemUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Amphora_Achilles_Ajax_Louvre_F204.jpg',
    imagemAlt: 'Ânfora de figuras negras de Exekias: Aquiles e Ájax jogando dados',
    imagemFonte: 'Musei Vaticani / Louvre / Wikimedia Commons',
    imagemLicenca: 'Public Domain',
    imagemLink: 'https://commons.wikimedia.org/wiki/File:Amphora_Achilles_Ajax_Louvre_F204.jpg',
    hotspots: [
      { x: 38, y: 50, label: 'Aquiles com Elmo', description: 'Mantém o elmo na cabeça, indicando sua superioridade hierárquica e seu número maior no jogo de dados.', zoomLevel: 2.7 },
      { x: 62, y: 52, label: 'Ájax com Pés Tensos', description: 'Calcanhares erguidos demonstrando extrema ansiedade física diante do resultado do lance de dados.', zoomLevel: 2.6 },
      { x: 50, y: 62, label: 'O Tabuleiro de Dados', description: 'Ponto focal da convergência de todas as linhas de força e das pontas das duas lanças.', zoomLevel: 2.9 }
    ],
    notasProfessora: 'Destaque para o design de produto: o vaso era feito para misturar vinho e água no simpósio, unindo função prática com conversa filosófica e mitológica.'
  },

  {
    id: 'normatizar-19-euphronios',
    ato: 4,
    tipo: 'image',
    atoTitulo: 'Ato IV · NORMATIZAR',
    titulo: 'Cratera de Euphronios: A Morte de Sarpedon',
    subtitulo: 'A Revolução das Figuras Vermelhas e o Escorço Tridimensional',
    conteudo: 'Atenas · Grécia. A inversão do processo técnico: pintar o fundo em preto e deixar as figuras na cor natural da argila permite desenhar detalhes anatômicos com pincel fluido.',
    conteudoExtenso: 'Criada por volta de 515 AEC pelo pintor Euphronios e pelo oleiro Euxitheos, esta cratera de cálice é uma das maiores façanhas do desenho na Antiguidade. Retrata o corpo gigantesco do herói troiano Sarpedon sendo carregado do campo de batalha pelos deuses alados Hipnos (o Sono) e Tânatos (a Morte), sob o comando de Hermes. Euphronios utilizou a recém-inventada técnica das figuras vermelhas e o escorço perspectiveiro (trompe-l\'œil muscular do braço caído) para capturar o peso físico e a tragédia da morte.',
    data: 'c. 515 AEC (Período Arcaico Final)',
    cultura: 'Grécia (Atenas / Cerâmica Ática)',
    localOrigem: 'Atenas (saqueada ilegalmente de tumba etrusca em Cerveteri nos anos 1970)',
    acervoAtual: 'Museo Nazionale Archeologico Cerite (Cerveteri, Itália) — devolvida pelo MET em 2008',
    dimensoes: '45,7 cm de altura × 55,1 cm de diâmetro; Capacidade: 45 litros',
    material: 'Argila ática com verniz negro coloidal',
    tecnica: 'Técnica de figuras vermelhas com escorço anatômico e aplicação de linhas em relevo com seringa de osso',
    paletaCores: [
      { hex: '#161413', name: 'Fundo Negro Esmaltado', pigmentOrigin: 'Argila coloidal vitrificada' },
      { hex: '#E07A48', name: 'Argila Vermelha dos Corpos', pigmentOrigin: 'Terracota natural ática' },
      { hex: '#7A3222', name: 'Sangue Escorrendo', pigmentOrigin: 'Verniz diluído em tons avermelhados' }
    ],
    composicao: 'Composição horizontal axial dominada pela diagonal descendente do cadáver de Sarpedon, sustentado simetricamente pelas asas desdobradas dos dois deuses alados.',
    marcos: ['Triunfo do escorço anatômico na representação da tridimensionalidade', 'Caso histórico pioneiro de repatriação triunfal de patrimônio arqueológico saqueado'],
    perguntaPrincipal: 'Quem deve ser considerado o "autor" de um objeto: quem projeta a forma física ou quem desenha a superfície?',
    perguntasSecundarias: [
      'Por que o Metropolitan Museum de Nova York foi obrigado pela justiça internacional a devolver este vaso à Itália em 2008?',
      'Como a mudança técnica de figuras negras para figuras vermelhas expandiu a liberdade do desenhista?'
    ],
    conceitos: ['Figuras Vermelhas', 'Escorço Anatômico', 'Autoria Compartilhada', 'Repatriação de Patrimônio'],
    imagemUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Euphronios_krater_side_A_MET_L.2006.10.jpg',
    imagemAlt: 'Cratera de cálice de Euphronios: Morte de Sarpedon',
    imagemFonte: 'Metropolitan Museum of Art / Museo di Cerveteri / Wikimedia Commons',
    imagemLicenca: 'Public Domain',
    imagemLink: 'https://commons.wikimedia.org/wiki/File:Euphronios_krater_side_A_MET_L.2006.10.jpg',
    hotspots: [
      { x: 50, y: 60, label: 'O Corpo de Sarpedon', description: 'Notável escorço muscular: as costelas e o abdômen torcem-se realisticamente para sugerir o peso inerte do cadáver.', zoomLevel: 2.8 },
      { x: 30, y: 40, label: 'Hipnos (O Sono)', description: 'Asas de penas detalhadas com pincel fino, sustentando os ombros do guerreiro morto.', zoomLevel: 2.5 },
      { x: 50, y: 25, label: 'Hermes com Caduceu', description: 'O deus psicopompo que guia as almas ao submundo comanda o resgate solene.', zoomLevel: 2.4 }
    ],
    notasProfessora: 'Use o caso da Cratera de Euphronios para discutir a máfia dos "tombaroli" (ladrões de tumbas) e o mercado ilícito bilionário de antiguidades.'
  },

  {
    id: 'normatizar-20-partenon',
    ato: 4,
    tipo: 'image',
    atoTitulo: 'Ato IV · NORMATIZAR',
    titulo: 'O Partenon e as Ordens Arquitetônicas',
    subtitulo: 'Acrópole de Atenas / Ictinos, Calícrates e Fídias',
    conteudo: 'Atenas · Grécia. A ilusão da linha reta: nenhuma coluna é vertical e nenhum piso é plano. Todas as pedras foram curvadas para corrigir as distorções da retina humana.',
    conteudoExtenso: 'Erguido entre 447 e 432 AEC sob a liderança política de Péricles com o tesouro da Liga de Delos, o Partenon é um templo dórico octástilo dedicado a Atena Partenos. Para que o edifício parecesse perfeitamente reto e estável ao olho humano, os arquitetos aplicaram refinamentos ópticos milimétricos: o estilóbato (piso) é abaulado para cima no centro, as colunas possuem éntase (ligeiro inchaço no terço médio) e inclinam-se sutilmente para dentro (se prolongadas até o céu, encontrar-se-iam a 2,4 km de altura).',
    data: 'c. 447 – 432 AEC (Século de Péricles)',
    cultura: 'Grécia Clássica (Atenas)',
    localOrigem: 'Acrópole de Atenas, Grécia',
    acervoAtual: 'Acrópole de Atenas / Mármores de Elgin no British Museum (Londres) / Museu da Acrópole',
    dimensoes: '69,5 m de comprimento × 30,9 m de largura; Colunas: 10,4 m de altura',
    material: 'Mármore Pentélico branco com alto teor de ferro (que oxida ao sol em tom dourado caraterístico)',
    tecnica: 'Arquitetura estereotômica trilítica com encaixes a seco com cavilhas de ferro chumbadas',
    paletaCores: [
      { hex: '#EBD8B8', name: 'Mármore Pentélico Solar', pigmentOrigin: 'Mármore das pedreiras do Monte Pentélico' },
      { hex: '#2A4D69', name: 'Azul Egípcio dos Tríglifos', pigmentOrigin: 'Policromia original dos frisos' },
      { hex: '#8B2616', name: 'Vermelho dos Métopas', pigmentOrigin: 'Fundo policromado das esculturas' }
    ],
    composicao: 'Templo períptero octástilo (8 × 17 colunas), proporção áurea de 4:9 em toda a elevação, ordens dórica externa e jônica interna no tesouro.',
    marcos: ['Clímax do sistema das ordens arquitetônicas clássicas (Dórica, Jônica, Coríntia)', 'Maior conflito contemporâneo de repatriação patrimonial (Mármores de Elgin)'],
    perguntaPrincipal: 'Por que foi preciso construir um edifício totalmente curvo para que ele parecesse reto?',
    perguntasSecundarias: [
      'Como a arquitetura manipula a psicologia da percepção visual e a escala cívica?',
      'O Partenon era branco como vemos nas ruínas hoje ou era intensamente colorido e berrante na Antiguidade?'
    ],
    conceitos: ['Ordens Arquitetônicas', 'Éntase e Correção Óptica', 'Mármore Pentélico', 'Policromia Antiga'],
    imagemUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/The_Parthenon_in_Athens.jpg',
    imagemAlt: 'Fachada ocidental do Partenon na Acrópole de Atenas',
    imagemFonte: 'Wikimedia Commons',
    imagemLicenca: 'CC BY-SA 2.0',
    imagemLink: 'https://commons.wikimedia.org/wiki/File:The_Parthenon_in_Athens.jpg',
    hotspots: [
      { x: 50, y: 25, label: 'Frontão e Friso Dórico', description: 'Originalmente abrigava as esculturas de Fídias narrando o nascimento de Atena e a disputa com Posídon.', zoomLevel: 2.4 },
      { x: 28, y: 60, label: 'Éntase das Colunas', description: 'Inchaço sutil de cerca de 2 cm que evita o efeito óptico de afinamento no centro do fuste.', zoomLevel: 2.6 },
      { x: 50, y: 88, label: 'Curvatura do Estilóbato', description: 'O degrau central é 11 cm mais alto que as extremidades para evitar a sensação de afundamento do horizonte.', zoomLevel: 2.5 }
    ],
    notasProfessora: 'Mostre imagens das reconstruções digitais do Partenon policromado (azul ultramarino, vermelho vivo e dourado) para destruir o mito do "classicismo branco e asséptico".'
  },

  // ATO V: GOVERNAR
  {
    id: 'governar-21-augusto',
    ato: 5,
    tipo: 'image',
    atoTitulo: 'Ato V · GOVERNAR',
    titulo: 'Augusto de Prima Porta',
    subtitulo: 'A invenção da propaganda imperial e do imperador eternamente jovem',
    conteudo: 'Roma Imperial. O poder romano substitui a democracia pelo império: a retórica do general vitorioso (adlocutio) funde o cânone grego de Policleto com a divinização do líder político.',
    conteudoExtenso: 'Encontrada na vila da imperatriz Lívia em Prima Porta, esta estátua de mármore de 2,08 m retrata Caio Otávio Augusto, o primeiro imperador de Roma. Augusto apropriou-se conscientemente do corpo perfeito e das proporções do Doríforo grego, mas vestiu-o com uma couraça militar anatômica ricamente esculpida. O relevo peitoral retrata os partas devolvendo os estandartes das legiões romanas perdidas por Crasso — uma vitória diplomática vendida visualmente como triunfo cósmico apoiado pelos deuses Apolo, Diana e Tellus.',
    data: 'c. 20 AEC – 14 EC (Início do Principado Romano)',
    cultura: 'Império Romano (Dinastia Júlio-Claudiana)',
    localOrigem: 'Villa de Lívia em Prima Porta, Roma, Itália',
    acervoAtual: 'Musei Vaticani (Braccio Nuovo, Roma)',
    dimensoes: '2,08 m de altura; Peso: aprox. 1.000 kg',
    material: 'Mármore de Paros com densos vestígios de policromia original (vermelho escarlate, azul egípcio, amarelo)',
    tecnica: 'Escultura em mármore policromado e iconografia programática estatal',
    paletaCores: [
      { hex: '#8B1E1E', name: 'Púrpura Imperial (Paludamentum)', pigmentOrigin: 'Múrice fenício / cinábrio' },
      { hex: '#D4AF37', name: 'Dourado da Couraça', pigmentOrigin: 'Folha de ouro e ocre brilhante' },
      { hex: '#1E3F66', name: 'Azul do Peitoral', pigmentOrigin: 'Azul egípcio sintético' },
      { hex: '#EDE8E1', name: 'Mármore Base', pigmentOrigin: 'Mármore nobre grego importado' }
    ],
    composicao: 'Postura de adlocutio (braço direito erguido em comando militar ao exército), contrapposto policletiano, pés descalços (indício de divinização póstuma) apoiados por Cupido montado em golfinho.',
    marcos: ['Consolidação da máquina de marketing político do Império Romano', 'Padronização dos retratos oficiais enviados a todas as províncias do império'],
    perguntaPrincipal: 'Isto é um retrato fiel de um homem de carne e osso ou uma peça de marketing político calculada para construir um deus?',
    perguntasSecundarias: [
      'Por que Augusto governou até os 75 anos de idade, mas nunca permitiu que nenhuma estátua oficial o mostrasse idoso ou enrugado?',
      'O que a presença de Cupido (filho de Vênus) ao lado do tornozelo de Augusto pretende afirmar sobre a família imperial?'
    ],
    conceitos: ['Propaganda Imperial', 'Retórica Visual', 'Divinização Política', 'Pax Romana'],
    imagemUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Statue-Augustus.jpg',
    imagemAlt: 'Estátua de Augusto de Prima Porta nos Museus Vaticanos',
    imagemFonte: 'Musei Vaticani / Wikimedia Commons',
    imagemLicenca: 'CC BY-SA 3.0',
    imagemLink: 'https://commons.wikimedia.org/wiki/File:Statue-Augustus.jpg',
    hotspots: [
      { x: 65, y: 18, label: 'Braço da Adlocutio', description: 'Gesto solene do imperador discursando às tropas para exigir obediência e silêncio.', zoomLevel: 2.4 },
      { x: 50, y: 40, label: 'Couraça Histórica', description: 'O rei dos partas entrega a águia da legião a um general romano sob a bênção do Sol e do Céu.', zoomLevel: 2.8 },
      { x: 38, y: 82, label: 'Cupido e o Golfinho', description: 'Reivindica a descendência da dinastia Júlia diretamente da deusa Vênus e do herói Eneias.', zoomLevel: 2.6 }
    ],
    notasProfessora: 'Conecte com a construção da imagem pública de presidentes, ditadores e celebridades nas redes sociais e na mídia de massa atual.'
  },

  {
    id: 'governar-22-ara-pacis',
    ato: 5,
    tipo: 'image',
    atoTitulo: 'Ato V · GOVERNAR',
    titulo: 'Ara Pacis Augustae',
    subtitulo: 'O Altar da Paz Augusta no Campo de Marte',
    conteudo: 'Roma. A monumentalização da paz imposta pelas armas: o friso esculpido não mostra deuses abstratos, mas a família imperial de carne e osso com suas crianças caminhando em procissão cívica.',
    conteudoExtenso: 'Consagrado em 9 AEC para celebrar o retorno pacificador de Augusto das campanhas na Hispânia e na Gália, o Ara Pacis é um altar monumental cercado por um recinto de mármore de Luna. Nos relevos inferiores, uma exuberante vegetação de acantos simboliza a fertilidade da Era de Ouro; nos relevos superiores, a procissão cerimonial inclui Augusto, senadores, sacerdotes e, pela primeira vez na arte ocidental monumental, crianças pequenas puxando as togas de seus pais — promovendo a política estatal de natalidade e sucessão dinástica.',
    data: 'c. 13 – 9 AEC',
    cultura: 'Império Romano (Augustana)',
    localOrigem: 'Campo de Marte, Roma, Itália',
    acervoAtual: 'Museo dell\'Ara Pacis (Roma, Itália)',
    dimensoes: 'Recinto externo: 11,6 m × 10,6 m × 3,68 m de altura',
    material: 'Mármore de Luna (Carrara) talhado em altíssimo e baixíssimo relevo contínuo',
    tecnica: 'Escultura de relevo narrativo com sobreposição de planos de profundidade (graduação perspectiva)',
    paletaCores: [
      { hex: '#EAE6E1', name: 'Mármore de Luna', pigmentOrigin: 'Pedreiras da Toscana' },
      { hex: '#63755A', name: 'Verde das Folhas de Acanto', pigmentOrigin: 'Policromia dos frisos botânicos' },
      { hex: '#9E382B', name: 'Bordô das Togas', pigmentOrigin: 'Púrpura das vestes sacerdotais' }
    ],
    composicao: 'Frisos laterais processoriais contínuos em dois registros verticais: ordem cósmica da natureza abaixo e procissão humana histórica acima.',
    marcos: ['Primeira inclusão monumental de crianças em narrativa estatal ocidental', 'Síntese arquitetônica entre altar sagrado e manifesto político dinástico'],
    perguntaPrincipal: 'Como uma potência imperial constrói visualmente a ideia de "Paz" após séculos de guerra civil sangrenta?',
    perguntasSecundarias: [
      'Por que a representação realista de crianças na procissão tinha uma finalidade de política demográfica e legal?',
      'Qual a diferença entre a procissão mítica do Partenon e a procissão de personagens históricos reais do Ara Pacis?'
    ],
    conceitos: ['Pax Augusta', 'Narrativa Histórica Real', 'Família e Dinastia', 'Friso Contínuo'],
    imagemUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ara_pacis_1.jpg',
    imagemAlt: 'Friso processional sul da Ara Pacis Augustae, Roma',
    imagemFonte: 'Museo dell\'Ara Pacis / Wikimedia Commons',
    imagemLicenca: 'CC BY-SA 3.0',
    imagemLink: 'https://commons.wikimedia.org/wiki/File:Ara_pacis_1.jpg',
    hotspots: [
      { x: 35, y: 45, label: 'Augusto e os Sacerdotes', description: 'O imperador velado como Pontifex Maximus liderando o sacrifício cívico.', zoomLevel: 2.5 },
      { x: 68, y: 55, label: 'Crianças da Família Imperial', description: 'Príncipes herdeiros de túnica curta, humanizando a imagem do império e garantindo a continuidade do trono.', zoomLevel: 2.7 }
    ],
    notasProfessora: 'Destaque como a arquitetura moderna de Richard Meier protege hoje o monumento no centro de Roma.'
  },

  {
    id: 'governar-23-panteao',
    ato: 5,
    tipo: 'image',
    atoTitulo: 'Ato V · GOVERNAR',
    titulo: 'O Panteão de Roma',
    subtitulo: 'Templo de Todos os Deuses / Cúpula de Adriano',
    conteudo: 'Roma. O ápice da revolução do concreto romano (opus caementicium): um espaço interior esférico perfeito de 43,3 metros coroado por um óculo aberto para o céu por onde a luz do sol viaja como um relógio cósmico.',
    conteudoExtenso: 'Reconstruído pelo imperador Adriano entre 118 e 125 EC, o Panteão é o edifício clássico mais bem preservado do mundo. Sua cúpula de concreto não armado de 43,30 metros de vão livre permanece até hoje como a maior de sua categoria na história da engenharia. A estrutura foi viabilizada pelo alívio progressivo dos agregados da argamassa (usando basalto pesado nas fundações, tufo no meio e pedra-pomes vulcânica levíssima no topo) e pelos 140 caixotões escalonados.',
    data: 'c. 118 – 125 EC (Reinado de Adriano)',
    cultura: 'Império Romano (Alto Império)',
    localOrigem: 'Piazza della Rotonda, Roma, Itália',
    acervoAtual: 'Basílica de Santa Maria ad Martyres (Roma, Itália)',
    dimensoes: 'Diâmetro interior: 43,30 m; Altura interior: 43,30 m (esfera inscrita perfeita); Diâmetro do óculo: 8,92 m; Espessura da base da cúpula: 6,4 m',
    material: 'Concreto romano pozolânico (opus caementicium), tijolo cerâmico bípede, pedra-pomes vulcânica, mármores policromados imperiais',
    tecnica: 'Cofragem de cúpula de concreto moldado contínuo com caixotões trapezoidais e óculo zenital autoportante',
    paletaCores: [
      { hex: '#876953', name: 'Pozolana Romana', pigmentOrigin: 'Cinza vulcânica do Vesúvio e Pozzuoli' },
      { hex: '#E3BE7B', name: 'Giallo Antico (Mármore Amarelo)', pigmentOrigin: 'Numídia (Norte da África)' },
      { hex: '#582E38', name: 'Pórfiro Vermelho Egípcio', pigmentOrigin: 'Deserto Oriental do Egito' },
      { hex: '#C2CAD4', name: 'Luz Zenital do Óculo', pigmentOrigin: 'Feixe solar direto projetado no interior' }
    ],
    composicao: 'Espaço interior cósmico: uma esfera perfeita de 43,3 metros inscrita no cilindro; pórtico octástilo com colunas monolíticas de granito cinza e rosa de Assuã.',
    marcos: ['Maior cúpula de concreto não armado já construída na história da arquitetura', 'Inversão copernicana do espaço: o foco passa do exterior (Grécia) para o espaço interior experienciado (Roma)'],
    perguntaPrincipal: 'A luz solar é um material de construção tanto quanto o concreto e o mármore?',
    perguntasSecundarias: [
      'Como a invenção do concreto romano permitiu que a arquitetura deixasse de ser um conjunto de paredes e colunas para se tornar a modelagem de vazios habitáveis?',
      'O que acontece quando chove dentro do Panteão através do óculo aberto de 9 metros?'
    ],
    conceitos: ['Revolução do Concreto', 'Óculo Zenital', 'Espaço Interior Esférico', 'Tecnologia Construtiva'],
    imagemUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pantheon_dome.jpg',
    imagemAlt: 'Cúpula e óculo iluminado do Panteão de Roma',
    imagemFonte: 'Wikimedia Commons',
    imagemLicenca: 'CC BY-SA 3.0',
    imagemLink: 'https://commons.wikimedia.org/wiki/File:Pantheon_dome.jpg',
    hotspots: [
      { x: 50, y: 50, label: 'O Óculo Zenital', description: 'Abertura circular de 8,92 m que é a única fonte de luz natural, atuando como o olho cósmico do cosmos romano.', zoomLevel: 2.8 },
      { x: 50, y: 70, label: 'Caixotões em Degraus', description: 'Cinco anéis de 28 caixotões trapezoidais que reduzem a massa de concreto e corrigem a perspectiva para quem olha do chão.', zoomLevel: 2.5 },
      { x: 25, y: 85, label: 'Piso Drenante', description: 'Piso de mármore levemente convexo com 22 ralos ocultos para drenar a água da chuva que entra pelo teto.', zoomLevel: 2.3 }
    ],
    notasProfessora: 'Feche o ciclo da aula contrastando a caverna escura de Lascaux (Ato I) com a cúpula iluminada do Panteão (Ato V): a humanidade começou na caverna natural e terminou construindo uma caverna artificial de luz cósmica.'
  },

  // SÍNTESE E EPÍLOGO
  {
    id: 'epilogo',
    ato: 6,
    tipo: 'summary',
    atoTitulo: 'Epílogo & Síntese',
    titulo: 'Como imagem, objeto e arquitetura organizam uma sociedade?',
    subtitulo: 'Síntese Historiográfica dos Cinco Atos',
    conteudo: 'Da mão inscrita na rocha da Serra da Capivara à cúpula radiante do Panteão, a História da Arte não é uma linha reta de "progresso técnico", mas uma sucessão de disputas políticas, rituais e corporais.',
    conteudoExtenso: 'Percorremos os cinco verbos estruturantes da experiência estética antiga: 1. MARCAR (a inscrição humana no mundo físico e a ruptura com o esquecimento); 2. HABITAR (a criação do espaço sagrado e arquitetônico que precede a própria agricultura); 3. ORGANIZAR (a divisão social, a vigilância ritualística e o nascimento da autoria nomeada); 4. NORMATIZAR (a fixação de regras corporais, cânones estéticos e códigos de exclusão); e 5. GOVERNAR (a monumentalidade estatal, a retórica imperial e a engenharia de massas).',
    perguntaPrincipal: 'Qual é o papel do designer e do artista hoje: reproduzir os cânones herdados ou projetar novas formas de habitar e ver o mundo?',
    perguntasSecundarias: [
      'Como a desconstrução dos preconceitos eurocêntricos nos liberta para criar uma cultura visual plural?',
      'O que você levará desta aula para seus projetos de Desenho Industrial?'
    ],
    conceitos: ['Síntese Crítica', 'História Viva', 'Design Social', 'Decolonialidade Prática'],
    designConnections: [
      'Ética da representação na comunicação visual contemporânea',
      'Ergonomia crítica e design inclusivo',
      'Responsabilidade política na criação de marcas, monumentos e interfaces'
    ],
    notasProfessora: 'Peça para cada estudante redigir um parágrafo reflexivo antes de encerrar a aula. Utilize as ferramentas interativas para revisar os conceitos principais.'
  },

  {
    id: 'constelacao',
    ato: 6,
    tipo: 'constellation',
    atoTitulo: 'Grafo Visual',
    titulo: 'Constelação Conceitual da Aula',
    subtitulo: 'Navegação por nós temáticos e obras conectadas',
    conteudo: 'Explore as pontes invisíveis entre tempos, geografias e matérias. Clique nos conceitos-chave (Corpo, Poder, Suporte, Espaço, Sagrado, Autoria, Cânone, Decolonialidade) para filtrar as obras correspondentes.',
    perguntaPrincipal: 'Como as ideias viajam através dos milênios e conectam continentes?',
    conceitos: ['Corpo', 'Poder', 'Suporte', 'Espaço', 'Sagrado', 'Autoria', 'Cânone', 'Decolonialidade'],
    notasProfessora: 'Utilize esta visualização em rede para testar conexões multidisciplinares com os alunos.'
  },

  {
    id: 'referencias',
    ato: 6,
    tipo: 'text',
    atoTitulo: 'Fontes & Bibliografia',
    titulo: 'Referências Bibliográficas e Acervos Consultados',
    subtitulo: 'Créditos institucionais e literatura recomendada',
    conteudo: 'Bibliografia básica e complementar para aprofundamento crítico em História e Estética da Arte.',
    conteudoExtenso: `
• GOMBRICH, Ernst H. A História da Arte. Rio de Janeiro: LTC, 2012.
• NOCHLIN, Linda. "Why Have There Been No Great Women Artists?". In: Women, Art, and Power and Other Essays. Nova York: Harper & Row, 1988.
• POLLOCK, Griselda. Differencing the Canon: Feminist Desire and the Writing of Art's Histories. Londres/Nova York: Routledge, 1999.
• GUIDON, Niède. As Ocupações Pré-Históricas do Brasil e a Serra da Capivara. São Paulo: FUMDHAM, 2003.
• BERNAL, Martin. Black Athena: The Afroasiatic Roots of Classical Civilization. New Brunswick: Rutgers University Press, 1987.
• SCHMIDT, Klaus. Göbekli Tepe: A Stone Age Sanctuary in South-Eastern Anatolia. Berlim: ex oriente, 2012.
• BOARDMAN, John. A Arte Grega. São Paulo: Martins Fontes, 2006.
• ZANKER, Paul. The Power of Images in the Age of Augustus. Ann Arbor: University of Michigan Press, 1988.
• CLARKE, John R. Art in the Lives of Ordinary Romans. Berkeley: University of California Press, 2003.
• ACERVOS INSTITUCIONAIS: British Museum, Museo Archeologico Nazionale di Napoli, Musei Vaticani, Penn Museum, Naturhistorisches Museum Wien, Neues Museum Berlin, Musée du Louvre, National Museum of Iraq, Fundação Museu do Homem Americano.
    `,
    perguntaPrincipal: 'A História da Arte continua em disputa — qual página você vai escrever?',
    conceitos: ['Bibliografia Crítica', 'Fontes Primárias', 'Acervos Globais', 'Pesquisa Contínua'],
    notasProfessora: 'Indique capítulos específicos para os seminários temáticos do semestre.'
  }
];

