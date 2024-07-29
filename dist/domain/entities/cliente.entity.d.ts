import { Conta } from './conta.entity';
import { Gerente } from './gerente.entity';
export declare class Cliente {
    id: string;
    nome: string;
    endereco: string;
    telefone: string;
    renda: number;
    contas: Conta[];
    gerente: Gerente;
}
