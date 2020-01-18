export interface Lote {
    id: number;
    nome: string;
    preco: number;
    dataInicio?: Date;
    datafim?: Date;
    quantidade: number;
    eventoId: number;
}
