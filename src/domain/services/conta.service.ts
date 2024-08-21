import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Conta } from '../entities/conta.entity';
import { Cliente } from '../entities/cliente.entity';
import { Transacao } from '../entities/transacao.entity';
import { CreateContaDto } from '../../presentation/dtos/create-conta.dto';
import { ContaPagar } from '../entities/conta-pagar.entity';
import { CreateContaPagarDto } from 'src/presentation/dtos/create-conta-pagar.dto';

@Injectable()
export class ContaService {
  constructor(
    @InjectRepository(Conta)
    private contaRepository: Repository<Conta>,
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
    @InjectRepository(Transacao)
    private transacaoRepository: Repository<Transacao>,
    @InjectRepository(ContaPagar)
    private contaPagarRepository: Repository<ContaPagar>,
  ) {}

  async criarContaPagar(contaId: string, createContaPagarDto: CreateContaPagarDto): Promise<ContaPagar> {
    const conta = await this.contaRepository.findOne({ where: { id: contaId } });
    if (!conta) {
      throw new NotFoundException('Conta não encontrada');
    }

    // Verifica se o saldo é suficiente
    if (conta.saldo < createContaPagarDto.valor) {
      throw new BadRequestException('Saldo insuficiente para pagar a conta');
    }

    // Cria a conta a pagar e já marca como paga
    const contaPagar = this.contaPagarRepository.create({
      descricao: createContaPagarDto.descricao,
      valor: createContaPagarDto.valor,
      dataVencimento: createContaPagarDto.dataVencimento,
      conta,  // Relaciona a conta a pagar com a conta existente
      paga: true // Marca a conta como paga imediatamente
    });

    // Subtrai o valor do saldo da conta
    conta.saldo -= createContaPagarDto.valor;
    await this.contaRepository.save(conta);

    return await this.contaPagarRepository.save(contaPagar);
  }

  async create(createContaDto: CreateContaDto): Promise<Conta> {
    const cliente = await this.clienteRepository.findOne({ where: { id: createContaDto.clienteId } });

    if (!cliente) {
      throw new NotFoundException(`Cliente com ID ${createContaDto.clienteId} não encontrado`);
    }

    const conta = this.contaRepository.create({
      ...createContaDto,
      titular: cliente,
      numeroConta: this.generateAccountNumber(),
      dataAbertura: new Date(),
      status: 'ativa',
      saldo: createContaDto.saldoInicial,
    });

    return this.contaRepository.save(conta);
  }

  async findAll(): Promise<Conta[]> {
    return this.contaRepository.find({ relations: ['titular'] });
  }

  async findOne(id: string): Promise<Conta> {
    const conta = await this.contaRepository.findOne({ where: { id }, relations: ['titular'] });
    if (!conta) {
      throw new NotFoundException(`Conta com ID ${id} não encontrada`);
    }
    return conta;
  }

  // Método para obter o extrato da conta
  async getExtrato(contaId: string): Promise<any> {
    const conta = await this.contaRepository.findOne({
      where: { id: contaId },
      relations: ['titular', 'transacoes', 'contasPagar'],
    });

    if (!conta) {
      throw new NotFoundException('Conta não encontrada');
    }

    // Obtenha todas as transações e contas a pagar
    const transacoes = await this.transacaoRepository.find({
      where: { conta: { id: contaId } },
    });

    const contasPagar = await this.contaPagarRepository.find({
      where: { conta: { id: contaId } },
    });

    return {
      saldoAtual: conta.saldo,
      transacoes,
      contasPagar,
    };
  }

  private generateAccountNumber(): string {
    return Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
  }
}
