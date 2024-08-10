import { Repository } from 'typeorm';
import { Gerente } from '../entities/gerente.entity';
import { CreateGerenteDto } from '../../presentation/dtos/create-gerente.dto';
import { UpdateGerenteDto } from '../../presentation/dtos/update-gerente.dto';
export declare class GerenteService {
    private gerenteRepository;
    constructor(gerenteRepository: Repository<Gerente>);
    create(createGerenteDto: CreateGerenteDto): Promise<Gerente>;
    findAll(): Promise<Gerente[]>;
    update(id: string, updateGerenteDto: UpdateGerenteDto): Promise<Gerente>;
    remove(id: string): Promise<void>;
}
