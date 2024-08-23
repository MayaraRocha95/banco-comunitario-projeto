import { Repository } from 'typeorm';
import { Credito } from '../entities/credito.entity';
import { Conta } from '../entities/conta.entity';
import { Cliente } from '../entities/cliente.entity';
export declare class CreditoService {
    private creditoRepository;
    private contaRepository;
    private clienteRepository;
    constructor(creditoRepository: Repository<Credito>, contaRepository: Repository<Conta>, clienteRepository: Repository<Cliente>);
    private formatarDataBr;
    concederCredito(contaId: string, tipo: 'empreendimento' | 'pessoal', valor: number): Promise<any>;
    consultarCreditos(contaId: string): Promise<any[]>;
}
