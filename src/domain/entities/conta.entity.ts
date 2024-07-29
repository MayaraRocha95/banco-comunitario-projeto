import { Cliente } from './cliente.entity';

export class Conta {
  id: string;
  cliente: Cliente;
  saldo: number;
  tipo: 'corrente' | 'poupanca';
  limiteChequeEspecial?: number;
}