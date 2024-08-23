
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gerente } from '../../domain/entities/gerente.entity';
import { Conta } from '../../domain/entities/conta.entity';
import { Credito } from '../../domain/entities/credito.entity';
import { GerenteService } from '../../domain/services/gerente.service';
import { GerenteController } from '../adapters/http/gerente.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Gerente, Conta, Credito]),
  ],
  controllers: [GerenteController],
  providers: [GerenteService],
  exports: [GerenteService],
})
export class GerenteModule {}
