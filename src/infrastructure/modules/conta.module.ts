import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conta } from '../../domain/entities/conta.entity';
import { Transacao } from '../../domain/entities/transacao.entity';
import { ContaService } from '../../domain/services/conta.service';
import { TransacaoService } from '../../domain/services/transacao.service';
import { ContaController } from '../adapters/http/conta.controller';
import { ClienteModule } from './cliente.module'; // Importe o ClienteModule
import { Cliente } from 'src/domain/entities/cliente.entity';
import { ContaPagar } from 'src/domain/entities/conta-pagar.entity';
import { ContaPagarController } from '../adapters/http/conta-pagar.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cliente, Conta, Transacao,  ContaPagar]),
    ClienteModule, 
  ],
  controllers: [ContaController, ContaPagarController],
  providers: [ContaService, TransacaoService],
  exports: [ContaService, TransacaoService],
})
export class ContaModule {}
