import { GerenteService } from '../../../domain/services/gerente.service';
import { CreateGerenteDto } from '../../../presentation/dtos/create-gerente.dto';
import { UpdateGerenteDto } from 'src/presentation/dtos/update-gerente.dto';
export declare class GerenteController {
    private readonly gerenteService;
    constructor(gerenteService: GerenteService);
    create(createGerenteDto: CreateGerenteDto): Promise<import("../../../domain/entities/gerente.entity").Gerente>;
    findAll(): Promise<import("../../../domain/entities/gerente.entity").Gerente[]>;
    update(id: string, updateGerenteDto: UpdateGerenteDto): Promise<import("../../../domain/entities/gerente.entity").Gerente>;
}
