import { Injectable, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Conta } from '../entities/conta.entity';
import { ClienteService } from './cliente.service';
import { CreateContaDto } from '../../presentation/dtos/create-conta.dto';
import { UpdateContaDto } from '../../presentation/dtos/update-conta.dto';

@Injectable()
export class ContaService {
  private readonly contas: Conta[] = [];
  private readonly logger = new Logger(ContaService.name);

  constructor(private readonly clienteService: ClienteService) {}

  public create(createContaDto: CreateContaDto): Conta {
    try {
      const cliente = this.clienteService.findAll().find(c => c.id === createContaDto.clienteId);
      if (!cliente) {
        throw new NotFoundException(`Cliente com ID ${createContaDto.clienteId} não encontrado`);
      }
      const novaConta = this.createConta(createContaDto, cliente);
      cliente.contas.push(novaConta);
      this.contas.push(novaConta);
      return novaConta;
    } catch (error) {
      this.logger.error('Erro ao criar conta', error.stack);
      throw new BadRequestException(error.message);
    }
  }

  public findAll(): Conta[] {
    try {
      return this.contas.map((conta) => plainToClass(Conta, conta));
    } catch (error) {
      this.logger.error('Erro ao listar todas as contas', error.stack);
      throw new BadRequestException(error.message);
    }
  }

  public findOne(id: string): Conta {
    try {
      const conta = this.findContaById(id);
      return plainToClass(Conta, conta);
    } catch (error) {
      this.logger.error(`Conta com ID ${id} não encontrada`, error.stack);
      throw new NotFoundException(error.message);
    }
  }

  public update(id: string, updateContaDto: UpdateContaDto): Conta {
    const contaIndex = this.findContaIndexById(id);
    if (contaIndex === -1) {
      throw new NotFoundException(`Conta com ID ${id} não encontrada`);
    }
    const updatedConta = { ...this.contas[contaIndex], ...updateContaDto };
    this.contas[contaIndex] = plainToClass(Conta, updatedConta);
    return updatedConta;
  }

  public remove(id: string): boolean {
    try {
      const contaIndex = this.findContaIndexById(id);
      this.contas.splice(contaIndex, 1);
      return true;
    } catch (error) {
      this.logger.error(`Erro ao remover conta com ID ${id}`, error.stack);
      throw new BadRequestException(error.message);
    }
  }

  private createConta(createContaDto: CreateContaDto, cliente): Conta {
    return plainToClass(Conta, {
      id: this.generateUniqueId(),
      cliente,
      saldo: createContaDto.saldoInicial,
      tipo: createContaDto.tipo,
      limiteChequeEspecial: this.calculateOverdraftLimit(createContaDto.tipo),
    });
  }

  private findContaById(id: string): Conta {
    const conta = this.contas.find((conta) => conta.id === id);
    if (!conta) {
      throw new NotFoundException(`Conta com ID ${id} não encontrada`);
    }
    return conta;
  }

  private findContaIndexById(id: string): number {
    const index = this.contas.findIndex((conta) => conta.id === id);
    if (index === -1) {
      throw new NotFoundException(`Conta com ID ${id} não encontrada`);
    }
    return index;
  }

  private generateUniqueId(): string {
    return Math.random().toString(36).substring(2);
  }

  private calculateOverdraftLimit(tipo: string): number | undefined {
    return tipo === 'corrente' ? 100 : undefined;
  }
}
