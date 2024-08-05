import { CreateContaDto } from '../../../presentation/dtos/create-conta.dto';
import { UpdateContaDto } from 'src/presentation/dtos/update-conta.dto';
import { ContaService } from 'src/domain/services/conta.service';
export declare class ContaController {
    private readonly contaService;
    constructor(contaService: ContaService);
    create(createContaDto: CreateContaDto): Promise<import("../../../domain/entities/conta.entity").Conta>;
    findAll(): Promise<import("../../../domain/entities/conta.entity").Conta[]>;
    findOne(id: string): Promise<import("../../../domain/entities/conta.entity").Conta>;
    update(id: string, updateContaDto: UpdateContaDto): Promise<import("../../../domain/entities/conta.entity").Conta>;
}
