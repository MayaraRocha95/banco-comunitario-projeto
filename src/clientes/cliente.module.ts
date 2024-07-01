import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';

@Module({
  controllers: [ClienteController],
  providers: [ClienteService],
  exports: [ClienteService], // Adicione esta linha para exportar o ClienteService
})
export class ClienteModule {}
