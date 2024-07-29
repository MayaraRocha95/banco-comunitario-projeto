import { ClienteRepository } from '../../../application/ports/cliente.repository.port';
import { Cliente } from '../../../domain/entities/cliente.entity';
export declare class InMemoryClienteRepository implements ClienteRepository {
    private clientes;
    save(cliente: Cliente): Promise<void>;
    findById(id: string): Promise<Cliente | null>;
    findAll(): Promise<Cliente[]>;
    remove(id: string): Promise<boolean>;
}
