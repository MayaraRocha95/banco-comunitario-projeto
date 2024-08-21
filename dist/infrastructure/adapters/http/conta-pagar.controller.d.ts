import { ContaService } from '../../../domain/services/conta.service';
import { CreateContaPagarDto } from 'src/presentation/dtos/create-conta-pagar.dto';
export declare class ContaPagarController {
    private readonly contaService;
    constructor(contaService: ContaService);
    criarContaPagar(contaId: string, createContaPagarDto: CreateContaPagarDto): Promise<{
        message: string;
        data: import("../../../domain/entities/conta-pagar.entity").ContaPagar;
    }>;
    extrato(contaId: string): Promise<{
        message: string;
        data: any;
    }>;
}
