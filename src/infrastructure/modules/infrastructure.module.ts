import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente.module';
import { ContaModule } from './conta.module';
import { GerenteModule } from './gerente.module';
import { PresentationModule } from '../../presentation/presentation.module';

@Module({
  imports: [ClienteModule, ContaModule, GerenteModule, PresentationModule],
  exports: [ClienteModule, ContaModule, GerenteModule, PresentationModule],
})
export class InfrastructureModule {}
