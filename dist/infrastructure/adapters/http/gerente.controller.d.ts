import { GerenteService } from '../../../domain/services/gerente.service';
import { CreateGerenteDto } from '../../../presentation/dtos/create-gerente.dto';
import { CreateContaDto } from '../../../presentation/dtos/create-conta.dto';
export declare class GerenteController {
    private readonly gerenteService;
    constructor(gerenteService: GerenteService);
    create(createGerenteDto: CreateGerenteDto): Promise<import("../../../domain/entities/gerente.entity").Gerente>;
    findAll(): Promise<import("../../../domain/entities/gerente.entity").Gerente[]>;
    addCliente(gerenteId: string, clienteId: string): Promise<import("../../../domain/entities/gerente.entity").Gerente>;
    removeCliente(gerenteId: string, clienteId: string): Promise<{
        success: boolean;
        message: string;
    }>;
    modifyConta(gerenteId: string, contaId: string, { tipo }: {
        tipo: 'corrente' | 'poupanca';
    }): Promise<import("../../../domain/entities/conta.entity").Conta>;
    openConta(gerenteId: string, createContaDto: CreateContaDto): Promise<import("../../../domain/entities/conta.entity").Conta>;
    closeConta(gerenteId: string, contaId: string): Promise<boolean>;
}
