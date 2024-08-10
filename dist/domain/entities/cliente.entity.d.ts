import { Gerente } from './gerente.entity';
import { Conta } from './conta.entity';
export declare class Cliente {
    id: string;
    nome: string;
    endereco: string;
    telefone: string;
    renda: number;
    gerente: Gerente;
    contas: Conta[];
}
