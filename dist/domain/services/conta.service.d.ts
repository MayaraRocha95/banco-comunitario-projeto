import { Repository } from 'typeorm';
import { Conta } from '../entities/conta.entity';
import { Cliente } from '../entities/cliente.entity';
import { Transacao } from '../entities/transacao.entity';
import { CreateContaDto } from '../../presentation/dtos/create-conta.dto';
import { ContaPagar } from '../entities/conta-pagar.entity';
import { CreateContaPagarDto } from 'src/presentation/dtos/create-conta-pagar.dto';
export declare class ContaService {
    private contaRepository;
    private clienteRepository;
    private transacaoRepository;
    private contaPagarRepository;
    constructor(contaRepository: Repository<Conta>, clienteRepository: Repository<Cliente>, transacaoRepository: Repository<Transacao>, contaPagarRepository: Repository<ContaPagar>);
    criarContaPagar(contaId: string, createContaPagarDto: CreateContaPagarDto): Promise<ContaPagar>;
    create(createContaDto: CreateContaDto): Promise<Conta>;
    findAll(): Promise<Conta[]>;
    findOne(id: string): Promise<Conta>;
    getExtrato(contaId: string): Promise<any>;
    private generateAccountNumber;
}
