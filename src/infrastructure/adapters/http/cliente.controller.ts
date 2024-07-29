import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateClienteUseCase } from '../../../application/use-cases/create-cliente.use-case';
import { CreateClienteDto } from '../../../presentation/dtos/create-cliente.dto';
import { ClienteService } from '../../../domain/services/cliente.service';

@Controller('clientes')
export class ClienteController {
  constructor(
    private readonly createClienteUseCase: CreateClienteUseCase,
    private readonly clienteService: ClienteService
  ) {}

  @Post()
  async create(@Body() createClienteDto: CreateClienteDto) {
    await this.createClienteUseCase.execute(createClienteDto);
  }

  @Get()
  async findAll() {
    return this.clienteService.findAll();
  }
}
