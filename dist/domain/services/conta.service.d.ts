import { Conta } from '../entities/conta.entity';
import { ClienteService } from './cliente.service';
import { CreateContaDto } from '../../presentation/dtos/create-conta.dto';
import { UpdateContaDto } from '../../presentation/dtos/update-conta.dto';
export declare class ContaService {
    private readonly clienteService;
    private readonly contas;
    private readonly logger;
    constructor(clienteService: ClienteService);
    create(createContaDto: CreateContaDto): Conta;
    findAll(): Conta[];
    findOne(id: string): Conta;
    update(id: string, updateContaDto: UpdateContaDto): Conta;
    remove(id: string): boolean;
    private createConta;
    private findContaById;
    private findContaIndexById;
    private generateUniqueId;
    private calculateOverdraftLimit;
}
