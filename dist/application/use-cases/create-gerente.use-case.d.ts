import { GerenteService } from '../../domain/services/gerente.service';
import { GerenteRepository } from '../ports/gerente.repository.port';
import { CreateGerenteDto } from '../../presentation/dtos/create-gerente.dto';
export declare class CreateGerenteUseCase {
    private readonly gerenteService;
    private readonly gerenteRepository;
    constructor(gerenteService: GerenteService, gerenteRepository: GerenteRepository);
    execute(createGerenteDto: CreateGerenteDto): Promise<void>;
    findAll(): Promise<import("../../domain/entities/gerente.entity").Gerente[]>;
}
