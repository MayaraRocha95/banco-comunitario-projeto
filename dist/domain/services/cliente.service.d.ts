import { Cliente } from '../entities/cliente.entity';
import { CreateClienteDto } from '../../presentation/dtos/create-cliente.dto';
import { UpdateClienteDto } from '../../presentation/dtos/update-cliente.dto';
export declare class ClienteService {
    private readonly clientes;
    private readonly logger;
    create(createClienteDto: CreateClienteDto): Cliente;
    findAll(): Cliente[];
    update(id: string, updateClienteDto: UpdateClienteDto): Cliente;
    remove(id: string): boolean;
    private createCliente;
    private findClienteIndexById;
    private generateUniqueId;
}
