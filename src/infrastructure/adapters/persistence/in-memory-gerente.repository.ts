import { GerenteRepository } from '../../../application/ports/gerente.repository.port';
import { Gerente } from '../../../domain/entities/gerente.entity';

export class InMemoryGerenteRepository implements GerenteRepository {
  private gerentes: Gerente[] = [];

  async save(gerente: Gerente): Promise<void> {
    this.gerentes.push(gerente);
  }

  async findById(id: string): Promise<Gerente | null> {
    return this.gerentes.find(gerente => gerente.id === id) || null;
  }

  async findAll(): Promise<Gerente[]> {
    return this.gerentes;
  }

  async remove(id: string): Promise<boolean> {
    const index = this.gerentes.findIndex(gerente => gerente.id === id);
    if (index === -1) return false;
    this.gerentes.splice(index, 1);
    return true;
  }
}
