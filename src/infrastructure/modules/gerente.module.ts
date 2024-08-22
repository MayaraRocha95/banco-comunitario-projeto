
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gerente } from '../../domain/entities/gerente.entity';
import { GerenteService } from '../../domain/services/gerente.service';
import { GerenteController } from '../adapters/http/gerente.controller';
import { Conta } from 'src/domain/entities/conta.entity';
import { Credito } from 'src/domain/entities/credito.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Gerente, Conta, Credito])],
  controllers: [GerenteController],
  providers: [GerenteService],
  exports: [GerenteService],
})
export class GerenteModule {}
