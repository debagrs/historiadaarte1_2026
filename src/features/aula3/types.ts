export type SceneType = 'text' | 'image' | 'comparison' | 'interactive' | 'interruption' | 'constellation' | 'summary';

export interface Hotspot {
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  label: string;
  description: string;
  zoomLevel?: number;
}

export interface ColorSwatch {
  hex: string;
  name: string;
  pigmentOrigin?: string;
}

export interface ComparisonData {
  titleLeft: string;
  titleRight: string;
  imageLeft: string;
  imageRight: string;
  captionLeft: string;
  captionRight: string;
  prompt: string;
}

export interface Scene {
  id: string;
  ato: number;
  tipo?: SceneType;
  atoTitulo?: string;
  titulo: string;
  subtitulo?: string;
  conteudo: string;
  conteudoExtenso?: string;
  data?: string;
  cultura?: string;
  localOrigem?: string;
  acervoAtual?: string;
  dimensoes?: string;
  material?: string;
  tecnica?: string;
  paletaCores?: (string | ColorSwatch)[];
  composicao?: string;
  artistas?: string[];
  marcos?: string[];
  perguntaPrincipal?: string;
  perguntasSecundarias?: string[];
  conceitos?: string[];
  imagemUrl?: string;
  imagemSecundariaUrl?: string;
  imagemVersoUrl?: string;
  imagemAlt?: string;
  imagemFonte?: string;
  imagemLicenca?: string;
  imagemLink?: string;
  notasProfessora?: string;
  citacaoHistorica?: {
    autor: string;
    obra: string;
    ano?: string;
    texto: string;
    provocacao: string;
  };
  hotspots?: Hotspot[];
  comparison?: ComparisonData;
  designConnections?: string[];
}

export interface AppData {
  scenes: Scene[];
}

