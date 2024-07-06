import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Conta } from './interfaces/conta.interface';
import { ClienteService } from '../clientes/cliente.service';
import { CreateContaDto } from './dto/create-conta.dto';

@Injectable()
export class ContaService {
  private readonly contas: Conta[] = [];
  private readonly logger = new Logger(ContaService.name);

  constructor(private readonly clienteService: ClienteService) {}

  create = (createContaDto: CreateContaDto): Conta => {
    try {
      const cliente = this.findClienteById(createContaDto.clienteId);
      const novaConta = this.createConta(createContaDto, cliente);

      this.adicionarContaAoCliente(cliente, novaConta);
      this.contas.push(novaConta);

      return novaConta;
    } catch (error) {
      this.logger.error('Erro ao criar conta', error.stack);
      throw new BadRequestException(error.message);
    }
  }

  findAll = (): Conta[] => {
    try {
      return this.contas.map(conta => plainToClass(Conta, conta));
    } catch (error) {
      this.logger.error('Erro ao listar todas as contas', error.stack);
      throw new BadRequestException(error.message);
    }
  }

  findOne = (id: string): Conta => {
    try {
      return plainToClass(Conta, this.findContaById(id));
    } catch (error) {
      this.logger.error(`Erro ao encontrar conta com ID ${id}`, error.stack);
      throw new NotFoundException(error.message);
    }
  }

  remove = (id: string): boolean => {
    try {
      const contaIndex = this.findContaIndexById(id);
      this.removerConta(contaIndex);
      return true;
    } catch (error) {
      this.logger.error(`Erro ao remover conta com ID ${id}`, error.stack);
      throw new BadRequestException(error.message);
    }
  }

  private findClienteById = (clienteId: string) => {
    const cliente = this.clienteService.findAll().find(c => c.id === clienteId);
    if (!cliente) {
      throw new NotFoundException(`Cliente com ID ${clienteId} não encontrado`);
    }
    return cliente;
  }

  private createConta = (createContaDto: CreateContaDto, cliente): Conta => {
    return plainToClass(Conta, {
      id: this.generateUniqueId(),
      cliente,
      saldo: createContaDto.saldoInicial,
      tipo: createContaDto.tipo,
      limiteChequeEspecial: this.calculateOverdraftLimit(createContaDto.tipo),
    });
  }

  private adicionarContaAoCliente = (cliente, conta) => {
    cliente.contas.push(conta);
  }

  private findContaById = (id: string): Conta => {
    const conta = this.contas.find(conta => conta.id === id);
    if (!conta) {
      throw new NotFoundException(`Conta com ID ${id} não encontrada`);
    }
    return conta;
  }

  private findContaIndexById = (id: string): number => {
    const index = this.contas.findIndex(conta => conta.id === id);
    if (index === -1) {
      throw new NotFoundException(`Conta com ID ${id} não encontrada`);
    }
    return index;
  }

  private removerConta = (index: number) => {
    const conta = this.contas[index];
    conta.cliente.contas = conta.cliente.contas.filter(c => c.id !== conta.id);
    this.contas.splice(index, 1);
  }

  private generateUniqueId = (): string => {
    return Math.random().toString(36).substring(2);
  }

  private calculateOverdraftLimit = (tipo: string): number | undefined => {
    return tipo === 'corrente' ? 100 : undefined;
  }
}
