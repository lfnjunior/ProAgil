import { Lote } from './Lote';
import { RedeSocial } from './RedeSocial';
import { Palestrante } from './Palestrante';

export interface Evento {
    id: number;
    imagemUrl: string;
    local: string;
    dataDoEvento: Date;
    tema: string;
    telefone: string;
    email: string;
    quantidadeDePessoas: number;
    lotes: Lote[];
    resdesSociais: RedeSocial[];
    palestrantesEventos: Palestrante[];
}
