import { Module } from '@nestjs/common';
import { ContaService } from '../../domain/services/conta.service';
import { ContaController } from '../adapters/http/conta.controller';
import { InMemoryContaRepository } from '../adapters/persistence/in-memory-conta.repository';
import { ClienteModule } from './cliente.module';
import { CreateContaUseCase } from '../../application/use-cases/create-conta.use-case';

@Module({
  imports: [ClienteModule],
  controllers: [ContaController],
  providers: [
    ContaService,
    CreateContaUseCase,
    { provide: 'ContaRepository', useClass: InMemoryContaRepository },
  ],
  exports: [ContaService, CreateContaUseCase],
})
export class ContaModule {}
