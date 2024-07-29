import { Conta } from '../../domain/entities/conta.entity';

export interface ContaRepository {
  save(conta: Conta): Promise<void>;
  findById(id: string): Promise<Conta | null>;
  findAll(): Promise<Conta[]>;
  remove(id: string): Promise<boolean>;
}
