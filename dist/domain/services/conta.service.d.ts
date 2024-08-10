import { Repository } from 'typeorm';
import { Conta } from '../entities/conta.entity';
import { Cliente } from '../entities/cliente.entity';
import { Transacao } from '../entities/transacao.entity';
import { CreateContaDto } from '../../presentation/dtos/create-conta.dto';
export declare class ContaService {
    private contaRepository;
    private clienteRepository;
    private transacaoRepository;
    constructor(contaRepository: Repository<Conta>, clienteRepository: Repository<Cliente>, transacaoRepository: Repository<Transacao>);
    create(createContaDto: CreateContaDto): Promise<Conta>;
    findAll(): Promise<Conta[]>;
    findOne(id: string): Promise<Conta>;
    private generateAccountNumber;
}
