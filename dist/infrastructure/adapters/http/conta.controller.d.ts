import { ContaService } from 'src/domain/services/conta.service';
import { TransacaoService } from 'src/domain/services/transacao.service';
import { CreateContaDto } from 'src/presentation/dtos/create-conta.dto';
export declare class ContaController {
    private readonly contaService;
    private readonly transacaoService;
    constructor(contaService: ContaService, transacaoService: TransacaoService);
    create(createContaDto: CreateContaDto): Promise<{
        message: string;
        data: import("../../../domain/entities/conta.entity").Conta;
    }>;
    findAll(): Promise<import("../../../domain/entities/conta.entity").Conta[]>;
    findOne(id: string): Promise<import("../../../domain/entities/conta.entity").Conta>;
    depositar(contaId: string, valor: number): Promise<{
        message: string;
        data: import("../../../domain/entities/transacao.entity").Transacao;
    }>;
    sacar(contaId: string, valor: number): Promise<{
        message: string;
        data: import("../../../domain/entities/transacao.entity").Transacao;
    }>;
    transferir(contaOrigemId: string, contaDestinoId: string, valor: number): Promise<{
        message: string;
        data: import("../../../domain/entities/transacao.entity").Transacao;
    }>;
    extrato(contaId: string): Promise<{
        message: string;
        data: any[];
    }>;
}
