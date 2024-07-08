import {
  Injectable,
  Logger,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Conta } from './interfaces/conta.interface';
import { ClienteService } from '../clientes/cliente.service';
import { CreateContaDto } from './dto/create-conta.dto';

@Injectable()
export class ContaService {
  private readonly contas: Conta[] = [];
  private readonly logger = new Logger(ContaService.name);

  constructor(private readonly clienteService: ClienteService) {}

  public create = (createContaDto: CreateContaDto): Conta => {
    try {
      const cliente = this.findClienteById(createContaDto.clienteId);
      const novaConta = this.createConta(createContaDto, cliente);
      this.adicionarContaAoCliente(cliente, novaConta);
      this.contas.push(novaConta);
      return novaConta;
    } catch (error) {
      this.handleServiceError('Erro ao criar conta', error);
    }
  };

  public findAll = (): Conta[] => {
    try {
      return this.contas.map((conta) => plainToClass(Conta, conta));
    } catch (error) {
      this.handleServiceError('Erro ao listar todas as contas', error);
    }
  };

  public findOne = (id: string): Conta => {
    try {
      const conta = this.findContaById(id);
      return plainToClass(Conta, conta);
    } catch (error) {
      this.handleNotFoundError(`Conta com ID ${id} não encontrada`, error);
    }
  };

  public remove = (id: string): boolean => {
    try {
      const contaIndex = this.findContaIndexById(id);
      this.removerConta(contaIndex);
      return true;
    } catch (error) {
      this.handleServiceError(`Erro ao remover conta com ID ${id}`, error);
    }
  };

  private findClienteById = (clienteId: string) => {
    const cliente = this.clienteService
      .findAll()
      .find((c) => c.id === clienteId);
    if (!cliente) {
      throw new NotFoundException(`Cliente com ID ${clienteId} não encontrado`);
    }
    return cliente;
  };

  private createConta = (createContaDto: CreateContaDto, cliente): Conta => {
    const novaConta = this.createContaInstance(createContaDto, cliente);
    return novaConta;
  };

  private createContaInstance = (
    createContaDto: CreateContaDto,
    cliente,
  ): Conta => {
    return plainToClass(Conta, {
      id: this.generateUniqueId(),
      cliente,
      saldo: createContaDto.saldoInicial,
      tipo: createContaDto.tipo,
      limiteChequeEspecial: this.calculateOverdraftLimit(createContaDto.tipo),
    });
  };

  private adicionarContaAoCliente = (cliente, conta) => {
    cliente.contas.push(conta);
  };

  private findContaById = (id: string): Conta => {
    const conta = this.contas.find((conta) => conta.id === id);
    if (!conta) {
      throw new NotFoundException(`Conta com ID ${id} não encontrada`);
    }
    return conta;
  };

  private findContaIndexById = (id: string): number => {
    const index = this.contas.findIndex((conta) => conta.id === id);
    if (index === -1) {
      throw new NotFoundException(`Conta com ID ${id} não encontrada`);
    }
    return index;
  };

  private removerConta = (index: number) => {
    const conta = this.contas[index];
    conta.cliente.contas = conta.cliente.contas.filter(
      (c) => c.id !== conta.id,
    );
    this.contas.splice(index, 1);
  };

  private generateUniqueId = (): string => {
    return Math.random().toString(36).substring(2);
  };

  private calculateOverdraftLimit = (tipo: string): number | undefined => {
    return tipo === 'corrente' ? 100 : undefined;
  };

  private handleServiceError = (message: string, error: Error) => {
    this.logger.error(message, error.stack);
    throw new BadRequestException(error.message);
  };

  private handleNotFoundError = (message: string, error: Error) => {
    this.logger.error(message, error.stack);
    throw new NotFoundException(error.message);
  };
}
