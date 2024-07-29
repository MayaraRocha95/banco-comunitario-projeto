import { ClienteRepository } from '../../../application/ports/cliente.repository.port';
import { Cliente } from '../../../domain/entities/cliente.entity';

export class InMemoryClienteRepository implements ClienteRepository {
  private clientes: Cliente[] = [];

  async save(cliente: Cliente): Promise<void> {
    this.clientes.push(cliente);
  }

  async findById(id: string): Promise<Cliente | null> {
    return this.clientes.find(cliente => cliente.id === id) || null;
  }

  async findAll(): Promise<Cliente[]> {
    return this.clientes;
  }

  async remove(id: string): Promise<boolean> {
    const index = this.clientes.findIndex(cliente => cliente.id === id);
    if (index === -1) return false;
    this.clientes.splice(index, 1);
    return true;
  }
}
