import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { CreateContaDto } from '../../../presentation/dtos/create-conta.dto';
import { CreateContaUseCase } from '../../../application/use-cases/create-conta.use-case';
import { UpdateContaDto } from 'src/presentation/dtos/update-conta.dto';
import { ContaService } from 'src/domain/services/conta.service';
@Controller('contas')
export class ContaController {
  constructor(private readonly contaService: ContaService) {}

  @Post()
  async create(@Body() createContaDto: CreateContaDto) {
    return this.contaService.create(createContaDto);
  }

  @Get()
  async findAll() {
    return this.contaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.contaService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateContaDto: UpdateContaDto,
  ) {
    return this.contaService.update(id, updateContaDto);
  }
}
