
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gerente } from '../../domain/entities/gerente.entity';
import { GerenteService } from '../../domain/services/gerente.service';
import { GerenteController } from '../adapters/http/gerente.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Gerente])],
  controllers: [GerenteController],
  providers: [GerenteService],
  exports: [GerenteService],
})
export class GerenteModule {}
