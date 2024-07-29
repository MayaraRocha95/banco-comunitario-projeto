// src/application/use-cases/create-cliente.use-case.ts
import { Inject, Injectable } from '@nestjs/common';
import { ClienteService } from '../../domain/services/cliente.service';
import { ClienteRepository } from '../ports/cliente.repository.port';
import { CreateClienteDto } from '../../presentation/dtos/create-cliente.dto';

@Injectable()
export class CreateClienteUseCase {
  constructor(
    private readonly clienteService: ClienteService,
    @Inject('ClienteRepository') private readonly clienteRepository: ClienteRepository,
  ) {}

  async execute(createClienteDto: CreateClienteDto): Promise<void> {
    const cliente = this.clienteService.create(createClienteDto);
    await this.clienteRepository.save(cliente);
  }
}
