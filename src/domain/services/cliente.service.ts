import { Injectable, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Cliente } from '../entities/cliente.entity';
import { CreateClienteDto } from '../../presentation/dtos/create-cliente.dto';
import { UpdateClienteDto } from '../../presentation/dtos/update-cliente.dto';

@Injectable()
export class ClienteService {
  private readonly clientes: Cliente[] = [];
  private readonly logger = new Logger(ClienteService.name);

  create(createClienteDto: CreateClienteDto): Cliente {
    try {
      const cliente: Cliente = this.createCliente(createClienteDto);
      this.clientes.push(cliente);
      return cliente;
    } catch (error) {
      this.logger.error('Erro ao criar cliente', error.stack);
      throw new BadRequestException(error.message);
    }
  }

  findAll(): Cliente[] {
    try {
      return this.clientes.map((cliente) => plainToClass(Cliente, cliente));
    } catch (error) {
      this.logger.error('Erro ao listar todos os clientes', error.stack);
      throw new BadRequestException(error.message);
    }
  }

  update(id: string, updateClienteDto: UpdateClienteDto): Cliente {
    const clienteIndex = this.findClienteIndexById(id);
    if (clienteIndex === -1) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
    }
    const updatedCliente = { ...this.clientes[clienteIndex], ...updateClienteDto };
    this.clientes[clienteIndex] = plainToClass(Cliente, updatedCliente);
    return updatedCliente;
  }

  remove(id: string): boolean {
    try {
      const clienteIndex = this.findClienteIndexById(id);
      this.clientes.splice(clienteIndex, 1);
      return true;
    } catch (error) {
      this.logger.error(`Erro ao remover cliente com ID ${id}`, error.stack);
      throw new BadRequestException(error.message);
    }
  }

  private createCliente(createClienteDto: CreateClienteDto): Cliente {
    return plainToClass(Cliente, {
      id: this.generateUniqueId(),
      ...createClienteDto,
      contas: [],
      gerente: null,
    });
  }

  private findClienteIndexById(id: string): number {
    const index = this.clientes.findIndex((cliente) => cliente.id === id);
    if (index === -1) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
    }
    return index;
  }

  private generateUniqueId(): string {
    return Math.random().toString(36).substring(2);
  }
}
