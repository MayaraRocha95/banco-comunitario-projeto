import { CreateContaDto } from '../../../presentation/dtos/create-conta.dto';
import { CreateContaUseCase } from '../../../application/use-cases/create-conta.use-case';
export declare class ContaController {
    private readonly createContaUseCase;
    constructor(createContaUseCase: CreateContaUseCase);
    create(createContaDto: CreateContaDto): Promise<void>;
    findAll(): Promise<import("../../../domain/entities/conta.entity").Conta[]>;
    findOne(id: string): Promise<import("../../../domain/entities/conta.entity").Conta>;
}
