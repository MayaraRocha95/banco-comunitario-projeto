import { CreateClienteUseCase } from '../../../application/use-cases/create-cliente.use-case';
import { CreateClienteDto } from '../../../presentation/dtos/create-cliente.dto';
import { ClienteService } from '../../../domain/services/cliente.service';
export declare class ClienteController {
    private readonly createClienteUseCase;
    private readonly clienteService;
    constructor(createClienteUseCase: CreateClienteUseCase, clienteService: ClienteService);
    create(createClienteDto: CreateClienteDto): Promise<void>;
    findAll(): Promise<import("../../../domain/entities/cliente.entity").Cliente[]>;
}
