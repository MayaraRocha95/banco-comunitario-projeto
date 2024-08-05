import { Type } from 'class-transformer';
import { Cliente } from './cliente.entity';

export class Gerente {
  id: string;
  nome: string;
  @Type(() => Cliente)
  clientes: Cliente[];
}