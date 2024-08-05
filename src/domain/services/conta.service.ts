import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Conta } from '../entities/conta.entity';
import { ClienteService } from './cliente.service';
import { CreateContaDto } from '../../presentation/dtos/create-conta.dto';

@Injectable()
export class ContaService {
  private readonly contas: Conta[] = [];
  private readonly logger = new Logger(ContaService.name);

  constructor(private readonly clienteService: ClienteService) {}

  public create(createContaDto: CreateContaDto): Conta {
    try {
      // Verifique se o cliente existe
      const cliente = this.clienteService.findAll().find((c) => c.id === createContaDto.clienteId);
      if (!cliente) {
        this.logger.error(`Cliente com ID ${createContaDto.clienteId} não encontrado`);
        throw new NotFoundException(`Cliente com ID ${createContaDto.clienteId} não encontrado`);
      }

      // Criação da nova conta
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
      this.logger.log(`Conta criada com sucesso: ${novaConta.numeroConta}`);
      return novaConta;
    } catch (error) {
      this.logger.error('Erro ao criar conta', error.stack);
      throw error; 
    }
  }

  public findAll(): Conta[] {
    return this.contas.map((conta) => plainToClass(Conta, conta));
  }

  public findOne(id: string): Conta {
    const conta = this.contas.find((c) => c.id === id);
    if (!conta) {
      throw new NotFoundException(`Conta com ID ${id} não encontrada`);
    }
    return conta;
  }

  private generateUniqueId(): string {
    return Math.random().toString(36).substring(2);
  }

  private generateAccountNumber(): string {
    return Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
  }
}
