import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Conta } from '../entities/conta.entity';
import { ClienteService } from './cliente.service';
import { CreateContaDto } from '../../presentation/dtos/create-conta.dto';
import { UpdateContaDto } from '../../presentation/dtos/update-conta.dto';

@Injectable()
export class ContaService {
  private readonly contas: Conta[] = [];
  
  constructor(private readonly clienteService: ClienteService) {}

  public create(createContaDto: CreateContaDto): Conta {
    const cliente = this.clienteService.findAll().find(c => c.id === createContaDto.clienteId);
    if (!cliente) {
      throw new NotFoundException(`Cliente com ID ${createContaDto.clienteId} não encontrado`);
    }
    
    const novaConta: Conta = plainToClass(Conta, {
      id: this.generateUniqueId(),
      numeroConta: this.generateAccountNumber(),
      agencia: createContaDto.agencia,
      tipo: createContaDto.tipo,
      saldo: createContaDto.saldoInicial,
      dataAbertura: new Date(),
      status: 'ativa',
      limiteCredito: createContaDto.limiteCredito,
      titular: cliente,
    });
    
    cliente.contas.push(novaConta);
    this.contas.push(novaConta);
    return novaConta;
  }

  public findAll(): Conta[] {
    return this.contas.map(conta => plainToClass(Conta, conta));
  }

  public findOne(id: string): Conta {
    const conta = this.contas.find(c => c.id === id);
    if (!conta) {
      throw new NotFoundException(`Conta com ID ${id} não encontrada`);
    }
    return conta;
  }

  public update(id: string, updateContaDto: UpdateContaDto): Conta {
    const contaIndex = this.contas.findIndex(c => c.id === id);
    if (contaIndex === -1) {
      throw new NotFoundException(`Conta com ID ${id} não encontrada`);
    }
    const updatedConta = { ...this.contas[contaIndex], ...updateContaDto };
    this.contas[contaIndex] = plainToClass(Conta, updatedConta);
    return updatedConta;
  }

  private generateUniqueId(): string {
    return Math.random().toString(36).substring(2);
  }

  private generateAccountNumber(): string {
    return Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
  }
}
