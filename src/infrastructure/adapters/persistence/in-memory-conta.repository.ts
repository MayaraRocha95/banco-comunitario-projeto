import { ContaRepository } from '../../../application/ports/conta.repository.port';
import { Conta } from '../../../domain/entities/conta.entity';

export class InMemoryContaRepository implements ContaRepository {
  private contas: Conta[] = [];

  async save(conta: Conta): Promise<void> {
    this.contas.push(conta);
  }

  async findById(id: string): Promise<Conta | null> {
    return this.contas.find(conta => conta.id === id) || null;
  }

  async findAll(): Promise<Conta[]> {
    return this.contas;
  }

  async remove(id: string): Promise<boolean> {
    const index = this.contas.findIndex(conta => conta.id === id);
    if (index === -1) return false;
    this.contas.splice(index, 1);
    return true;
  }
}
