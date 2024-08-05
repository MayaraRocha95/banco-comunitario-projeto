import { Type } from 'class-transformer';
import { Cliente } from './cliente.entity';

export class Gerente {
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
  @Type(() => Cliente)
  clientes: Cliente[];
}