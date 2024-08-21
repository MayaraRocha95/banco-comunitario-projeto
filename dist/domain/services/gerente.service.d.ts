import { Repository } from 'typeorm';
import { Gerente } from '../entities/gerente.entity';
import { Conta } from '../entities/conta.entity';
import { ClienteService } from './cliente.service';
import { ContaService } from './conta.service';
import { CreateGerenteDto } from '../../presentation/dtos/create-gerente.dto';
import { CreateContaDto } from '../../presentation/dtos/create-conta.dto';
export declare class GerenteService {

    private gerenteRepository;
    constructor(gerenteRepository: Repository<Gerente>);
    create(createGerenteDto: CreateGerenteDto): Promise<Gerente>;
    findAll(): Promise<Gerente[]>;
    update(id: string, updateGerenteDto: UpdateGerenteDto): Promise<Gerente>;
    remove(id: string): Promise<void>;

    private readonly clienteService;
    private readonly contaService;
    private readonly gerentes;
    private readonly logger;
    constructor(clienteService: ClienteService, contaService: ContaService);
    create(createGerenteDto: CreateGerenteDto): Gerente;
    findAll(): Gerente[];
    addCliente(gerenteId: string, clienteId: string): Gerente;
    removeCliente(gerenteId: string, clienteId: string): {
        success: boolean;
        message: string;
    };
    modifyConta(gerenteId: string, contaId: string, tipo: 'corrente' | 'poupanca'): Conta;
    openConta(gerenteId: string, createContaDto: CreateContaDto): Conta;
    closeConta(gerenteId: string, contaId: string): boolean;
    private findGerenteById;
    private generateUniqueId;

}
