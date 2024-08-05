import { Controller, Get, Post, Body,  HttpException, HttpStatus  } from '@nestjs/common';
import { CreateClienteUseCase } from '../../../application/use-cases/create-cliente.use-case';
import { CreateClienteDto } from '../../../presentation/dtos/create-cliente.dto';
import { ClienteService } from '../../../domain/services/cliente.service';


@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  async create(@Body() createClienteDto: CreateClienteDto) {
    try {
      const cliente = await this.clienteService.create(createClienteDto);
      return {
        message: 'Cliente criado com sucesso',
        data: cliente,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async findAll() {
    return this.clienteService.findAll();
  }
}
