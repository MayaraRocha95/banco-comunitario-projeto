import { Module } from '@nestjs/common';
import { ClienteController } from '../infrastructure/adapters/http/cliente.controller';
import { ContaController } from '../infrastructure/adapters/http/conta.controller';
import { GerenteController } from '../infrastructure/adapters/http/gerente.controller';
import { ClienteModule } from '../infrastructure/modules/cliente.module';
import { ContaModule } from '../infrastructure/modules/conta.module';
import { GerenteModule } from '../infrastructure/modules/gerente.module';

@Module({
  imports: [ClienteModule, ContaModule, GerenteModule],
  controllers: [ClienteController, ContaController, GerenteController],
})
export class PresentationModule {}
