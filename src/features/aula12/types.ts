import type { Scene } from '../aula3/types';

export interface Placa {
  obra: string;
  autoria: string;
  ano: string;
  acervo?: string;
  descricao: string;
  link: string;
  linkRotulo: string;
}

export interface Ponto {
  t: string;
  d: string;
}

export interface LinhaQuadro {
  movimento: string;
  quando: string;
  gesto: string;
  referencias: string;
  design: string;
}

export type Demo = 'muybridge' | 'pontilhismo' | 'dada' | 'derivadas';
export type Forma = 'parte' | 'cartoes' | 'quadro' | 'video' | 'atelie';

export interface Scene12 extends Scene {
  forma?: Forma;
  placa?: Placa;
  demo?: Demo;
  pontos?: Ponto[];
  quadro?: LinhaQuadro[];
}
