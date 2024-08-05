import { Conta } from '../entities/conta.entity';
import { ClienteService } from './cliente.service';
import { CreateContaDto } from '../../presentation/dtos/create-conta.dto';
import { UpdateContaDto } from '../../presentation/dtos/update-conta.dto';
export declare class ContaService {
    private readonly clienteService;
    private readonly contas;
    constructor(clienteService: ClienteService);
    create(createContaDto: CreateContaDto): Conta;
    findAll(): Conta[];
    findOne(id: string): Conta;
    update(id: string, updateContaDto: UpdateContaDto): Conta;
    private generateUniqueId;
    private generateAccountNumber;
}
