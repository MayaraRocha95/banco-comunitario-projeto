import { Conta } from './conta.entity';
export declare class Credito {
    id: string;
    tipo: 'empreendimento' | 'pessoal';
    valor: number;
    dataConcessao: Date;
    saldoDevedor: number;
    conta: Conta;
}
