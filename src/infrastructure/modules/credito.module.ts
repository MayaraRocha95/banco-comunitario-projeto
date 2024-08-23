import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credito } from '../../domain/entities/credito.entity';
import { Conta } from '../../domain/entities/conta.entity';
import { Cliente } from '../../domain/entities/cliente.entity'; // Importe a entidade Cliente
import { CreditoService } from '../../domain/services/credito.service';
import { CreditoController } from '../adapters/http/credito.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Credito, Conta, Cliente]), 
  ],
  controllers: [CreditoController],
  providers: [CreditoService],
})
export class CreditoModule {}
