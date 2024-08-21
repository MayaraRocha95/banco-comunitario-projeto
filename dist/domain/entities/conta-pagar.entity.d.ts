import { Conta } from './conta.entity';
export declare class ContaPagar {
    id: string;
    descricao: string;
    valor: number;
    dataVencimento: Date;
    paga: boolean;
    conta: Conta;
}
