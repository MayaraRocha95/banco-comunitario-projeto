import { Repository } from 'typeorm';
import { Conta } from '../entities/conta.entity';
import { Transacao } from '../entities/transacao.entity';
export declare class TransacaoService {
    private contaRepository;
    private transacaoRepository;
    constructor(contaRepository: Repository<Conta>, transacaoRepository: Repository<Transacao>);
    depositar(contaId: string, valor: number): Promise<Transacao>;
    sacar(contaId: string, valor: number): Promise<Transacao>;
    transferir(contaOrigemId: string, contaDestinoId: string, valor: number): Promise<Transacao>;
    getExtrato(contaId: string): Promise<any[]>;
}
