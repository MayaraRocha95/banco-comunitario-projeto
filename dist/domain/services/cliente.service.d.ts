import { Cliente } from '../entities/cliente.entity';
import { CreateClienteDto } from '../../presentation/dtos/create-cliente.dto';
export declare class ClienteService {
    private readonly clientes;
    private readonly logger;
    create(createClienteDto: CreateClienteDto): Cliente;
    findAll(): Cliente[];
    private generateUniqueId;
}
