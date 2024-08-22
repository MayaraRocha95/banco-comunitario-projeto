import { Cliente } from './cliente.entity';
import { Transacao } from './transacao.entity';
import { ContaPagar } from './conta-pagar.entity';
import { Credito } from './credito.entity';
export declare class Conta {
    id: string;
    numeroConta: string;
    agencia: string;
    tipo: string;
    saldo: number;
    dataAbertura: Date;
    status: string;
    limiteCredito: number;
    titular: Cliente;
    transacoes: Transacao[];
    contasPagar: ContaPagar[];
    creditos: Credito[];
}
