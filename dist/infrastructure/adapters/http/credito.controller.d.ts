import { CreditoService } from 'src/domain/services/credito.service';
export declare class CreditoController {
    private readonly creditoService;
    constructor(creditoService: CreditoService);
    concederCredito(contaId: string, tipo: 'empreendimento' | 'pessoal', valor: number): Promise<{
        message: string;
        data: any;
    }>;
    consultarCreditos(contaId: string): Promise<{
        message: string;
        data: any[];
    }>;
}
