import { Controller, Get, Post, Body, Param, Put ,  HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { CreateContaDto } from '../../../presentation/dtos/create-conta.dto';
import { CreateContaUseCase } from '../../../application/use-cases/create-conta.use-case';
import { UpdateContaDto } from 'src/presentation/dtos/update-conta.dto';
import { ContaService } from 'src/domain/services/conta.service';

@Controller('contas')
export class ContaController {
  constructor(private readonly contaService: ContaService) {}

  @Post()
  async create(@Body() createContaDto: CreateContaDto) {
    try {
      const conta = await this.contaService.create(createContaDto);
      return {
        message: 'Conta criada com sucesso',
        data: conta,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      } else {
        throw new HttpException('Não foi possível criar a conta', HttpStatus.BAD_REQUEST);
      }
    }
  }

  @Get()
  async findAll() {
    return this.contaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const conta = await this.contaService.findOne(id);
      return conta;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}