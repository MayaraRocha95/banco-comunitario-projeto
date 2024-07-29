import { ContaService } from '../../domain/services/conta.service';
import { ContaRepository } from '../ports/conta.repository.port';
import { CreateContaDto } from '../../presentation/dtos/create-conta.dto';
export declare class CreateContaUseCase {
    private readonly contaService;
    private readonly contaRepository;
    constructor(contaService: ContaService, contaRepository: ContaRepository);
    execute(createContaDto: CreateContaDto): Promise<void>;
    findAll(): Promise<import("../../domain/entities/conta.entity").Conta[]>;
    findOne(id: string): Promise<import("../../domain/entities/conta.entity").Conta>;
}
