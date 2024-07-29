import { Exclude, Type } from 'class-transformer';
import { Conta } from './conta.entity';
import { Gerente } from './gerente.entity';

export class Cliente {
  id: string;
  nome: string;
  endereco: string;
  telefone: string;
  renda: number;
  @Type(() => Conta)
  contas: Conta[];
  @Exclude()
  gerente: Gerente;
}
