import { Cliente } from './cliente.entity';
export declare class Gerente {
    id: string;
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    endereco: string;
    dataInicio: Date;
    status: 'ativo' | 'inativo';
    departamento: string;
    nivelAcesso: string;
    clientes: Cliente[];
}
