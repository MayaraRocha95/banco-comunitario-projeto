import { Gerente } from '../entities/gerente.entity';

export interface GerenteRepository {
  save(gerente: Gerente): Promise<void>;
  findById(id: string): Promise<Gerente | null>;
  findAll(): Promise<Gerente[]>;
  remove(id: string): Promise<boolean>;
}
