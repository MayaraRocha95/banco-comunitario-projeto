import { ContaRepository } from '../../../application/ports/conta.repository.port';
import { Conta } from '../../../domain/entities/conta.entity';
export declare class InMemoryContaRepository implements ContaRepository {
    private contas;
    save(conta: Conta): Promise<void>;
    findById(id: string): Promise<Conta | null>;
    findAll(): Promise<Conta[]>;
    remove(id: string): Promise<boolean>;
}
