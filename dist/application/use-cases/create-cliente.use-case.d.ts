import { ClienteService } from '../../domain/services/cliente.service';
import { ClienteRepository } from '../ports/cliente.repository.port';
import { CreateClienteDto } from '../../presentation/dtos/create-cliente.dto';
export declare class CreateClienteUseCase {
    private readonly clienteService;
    private readonly clienteRepository;
    constructor(clienteService: ClienteService, clienteRepository: ClienteRepository);
    execute(createClienteDto: CreateClienteDto): Promise<void>;
}
