import { Repository } from 'typeorm';
import { Cliente } from '../entities/cliente.entity';
import { CreateClienteDto } from '../../presentation/dtos/create-cliente.dto';
import { UpdateClienteDto } from '../../presentation/dtos/update-cliente.dto';
export declare class ClienteService {
    private clienteRepository;
    constructor(clienteRepository: Repository<Cliente>);
    create(createClienteDto: CreateClienteDto): Promise<Cliente>;
    findAll(): Promise<Cliente[]>;
    update(id: string, updateClienteDto: UpdateClienteDto): Promise<Cliente>;
}
