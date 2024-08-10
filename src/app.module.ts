import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './infrastructure/modules/cliente.module';
import { ContaModule } from './infrastructure/modules/conta.module';
import { GerenteModule } from './infrastructure/modules/gerente.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Pedro2010@',
      database: 'banco_comunitario',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Usado apenas em desenvolvimento para sincronizar o esquema automaticamente
    }),
    ClienteModule,
    ContaModule,
    GerenteModule,
  ],
})
export class AppModule {}
