import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateContaDto } from '../../../presentation/dtos/create-conta.dto';
import { CreateContaUseCase } from '../../../application/use-cases/create-conta.use-case';

@Controller('contas')
export class ContaController {
  constructor(private readonly createContaUseCase: CreateContaUseCase) {}

  @Post()
  async create(@Body() createContaDto: CreateContaDto) {
    await this.createContaUseCase.execute(createContaDto);
  }

  @Get()
  async findAll() {
    return this.createContaUseCase.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.createContaUseCase.findOne(id);
  }
}
