import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conta } from '../../domain/entities/conta.entity';
import { Transacao } from '../../domain/entities/transacao.entity';
import { ContaService } from '../../domain/services/conta.service';
import { TransacaoService } from '../../domain/services/transacao.service';
import { ContaController } from '../adapters/http/conta.controller';
import { ClienteModule } from './cliente.module'; // Importe o ClienteModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Conta, Transacao]),
    ClienteModule, 
  ],
  controllers: [ContaController],
  providers: [ContaService, TransacaoService],
  exports: [ContaService, TransacaoService],
})
export class ContaModule {}
