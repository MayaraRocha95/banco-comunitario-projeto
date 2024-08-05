import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Cliente } from '../entities/cliente.entity';
import { CreateClienteDto } from '../../presentation/dtos/create-cliente.dto';

@Injectable()
export class ClienteService {
  private readonly clientes: Cliente[] = [];
  private readonly logger = new Logger(ClienteService.name);

  create(createClienteDto: CreateClienteDto): Cliente {
    try {
      const cliente: Cliente = plainToClass(Cliente, {
        id: this.generateUniqueId(),
        ...createClienteDto,
        contas: [],
      });
      this.clientes.push(cliente);
      this.logger.log(`Cliente criado com sucesso: ${cliente.nome}`);
      return cliente;
    } catch (error) {
      this.logger.error('Erro ao criar cliente', error.stack);
      throw new BadRequestException('Não foi possível criar o cliente');
    }
  }

  findAll(): Cliente[] {
    return this.clientes.map((cliente) => plainToClass(Cliente, cliente));
  }

  private generateUniqueId(): string {
    return Math.random().toString(36).substring(2);
  }
}
