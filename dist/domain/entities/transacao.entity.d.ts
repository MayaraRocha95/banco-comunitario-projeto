import { Conta } from './conta.entity';
export declare class Transacao {
    id: string;
    valor: number;
    tipo: 'deposito' | 'saque' | 'transferencia';
    data: Date;
    conta: Conta;
    contaDestino?: Conta;
}
