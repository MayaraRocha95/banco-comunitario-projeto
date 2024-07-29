import { GerenteRepository } from '../../../application/ports/gerente.repository.port';
import { Gerente } from '../../../domain/entities/gerente.entity';
export declare class InMemoryGerenteRepository implements GerenteRepository {
    private gerentes;
    save(gerente: Gerente): Promise<void>;
    findById(id: string): Promise<Gerente | null>;
    findAll(): Promise<Gerente[]>;
    remove(id: string): Promise<boolean>;
}
