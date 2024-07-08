import { Module } from '@nestjs/common';
import { GerenteService } from './gerente.service';
import { GerenteController } from './gerente.controller';
import { ClienteModule } from '../clientes/cliente.module';
import { ContaModule } from '../contas/conta.module';

@Module({
  imports: [ClienteModule, ContaModule],
  controllers: [GerenteController],
  providers: [GerenteService],
})
export class GerenteModule {}
