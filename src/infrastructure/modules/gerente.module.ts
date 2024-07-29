// src/infrastructure/modules/gerente.module.ts
import { Module } from '@nestjs/common';
import { GerenteService } from '../../domain/services/gerente.service';
import { GerenteController } from '../adapters/http/gerente.controller';
import { ClienteModule } from './cliente.module';
import { ContaModule } from './conta.module';
import { InMemoryGerenteRepository } from '../adapters/persistence/in-memory-gerente.repository';

@Module({
  imports: [ClienteModule, ContaModule],
  controllers: [GerenteController],
  providers: [
    GerenteService,
    { provide: 'GerenteRepository', useClass: InMemoryGerenteRepository },
  ],
  exports: [GerenteService],
})
export class GerenteModule {}
