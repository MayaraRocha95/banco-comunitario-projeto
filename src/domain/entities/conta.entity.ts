import { Cliente } from './cliente.entity';

export class Conta {
  id: string;
  numeroConta: string;
  agencia: string;
  tipo: 'corrente' | 'poupanca';
  saldo: number;
  dataAbertura: Date;
  status: 'ativa' | 'inativa' | 'suspensa';
  limiteCredito?: number;
  titular: Cliente;
}