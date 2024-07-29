import { Module } from '@nestjs/common';
import { ClienteService } from '../../domain/services/cliente.service';
import { CreateClienteUseCase } from '../../application/use-cases/create-cliente.use-case';
import { InMemoryClienteRepository } from '../adapters/persistence/in-memory-cliente.repository';

@Module({
  providers: [
    ClienteService,
    CreateClienteUseCase,
    { provide: 'ClienteRepository', useClass: InMemoryClienteRepository },
  ],
  exports: [ClienteService, CreateClienteUseCase],
})
export class ClienteModule {}
