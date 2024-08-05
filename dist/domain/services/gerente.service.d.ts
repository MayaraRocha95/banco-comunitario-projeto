import { Gerente } from '../entities/gerente.entity';
import { CreateGerenteDto } from '../../presentation/dtos/create-gerente.dto';
import { UpdateGerenteDto } from '../../presentation/dtos/update-gerente.dto';
export declare class GerenteService {
    private readonly gerentes;
    create(createGerenteDto: CreateGerenteDto): Gerente;
    findAll(): Gerente[];
    update(id: string, updateGerenteDto: UpdateGerenteDto): Gerente;
    private generateUniqueId;
}
