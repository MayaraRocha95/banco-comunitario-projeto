import { Conta } from '../entities/conta.entity';
import { ClienteService } from './cliente.service';
import { CreateContaDto } from '../../presentation/dtos/create-conta.dto';
export declare class ContaService {
    private readonly clienteService;
    private readonly contas;
    private readonly logger;
    constructor(clienteService: ClienteService);
    create(createContaDto: CreateContaDto): Conta;
    findAll(): Conta[];
    findOne(id: string): Conta;
    private generateUniqueId;
    private generateAccountNumber;
}
