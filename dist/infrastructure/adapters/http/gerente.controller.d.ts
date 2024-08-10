import { GerenteService } from 'src/domain/services/gerente.service';
import { CreateGerenteDto } from 'src/presentation/dtos/create-gerente.dto';
import { UpdateGerenteDto } from 'src/presentation/dtos/update-gerente.dto';
export declare class GerenteController {
    private readonly gerenteService;
    constructor(gerenteService: GerenteService);
    create(createGerenteDto: CreateGerenteDto): Promise<{
        message: string;
        data: import("../../../domain/entities/gerente.entity").Gerente;
    }>;
    findAll(): Promise<import("../../../domain/entities/gerente.entity").Gerente[]>;
    update(id: string, updateGerenteDto: UpdateGerenteDto): Promise<{
        message: string;
        data: import("../../../domain/entities/gerente.entity").Gerente;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
