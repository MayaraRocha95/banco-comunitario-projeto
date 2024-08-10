import { CreateClienteDto } from '../../../presentation/dtos/create-cliente.dto';
import { UpdateClienteDto } from '../../../presentation/dtos/update-cliente.dto';
import { ClienteService } from '../../../domain/services/cliente.service';
export declare class ClienteController {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    create(createClienteDto: CreateClienteDto): Promise<{
        message: string;
        data: import("../../../domain/entities/cliente.entity").Cliente;
    }>;
    findAll(): Promise<import("../../../domain/entities/cliente.entity").Cliente[]>;
    update(id: string, updateClienteDto: UpdateClienteDto): Promise<{
        message: string;
        data: import("../../../domain/entities/cliente.entity").Cliente;
    }>;
}
