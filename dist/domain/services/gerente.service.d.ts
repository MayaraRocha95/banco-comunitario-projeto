import { Repository } from 'typeorm';
import { Gerente } from '../entities/gerente.entity';
import { Conta } from '../entities/conta.entity';
import { Credito } from '../entities/credito.entity';
import { CreateGerenteDto } from '../../presentation/dtos/create-gerente.dto';
import { UpdateGerenteDto } from '../../presentation/dtos/update-gerente.dto';
export declare class GerenteService {
    private gerenteRepository;
    private contaRepository;
    private creditoRepository;
    constructor(gerenteRepository: Repository<Gerente>, contaRepository: Repository<Conta>, creditoRepository: Repository<Credito>);
    create(createGerenteDto: CreateGerenteDto): Promise<Gerente>;
    findAll(): Promise<Gerente[]>;
    update(id: string, updateGerenteDto: UpdateGerenteDto): Promise<Gerente>;
    remove(id: string): Promise<void>;
    listarContasComCredito(): Promise<any[]>;
}
