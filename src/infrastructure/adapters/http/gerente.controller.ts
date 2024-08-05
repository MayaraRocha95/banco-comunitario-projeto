import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { GerenteService } from '../../../domain/services/gerente.service'
import { CreateGerenteDto } from '../../../presentation/dtos/create-gerente.dto';
import { CreateContaDto } from '../../../presentation/dtos/create-conta.dto';
import { UpdateGerenteDto } from 'src/presentation/dtos/update-gerente.dto';

@Controller('gerentes')
export class GerenteController {
  constructor(private readonly gerenteService: GerenteService) {}

  @Post()
  async create(@Body() createGerenteDto: CreateGerenteDto) {
    return this.gerenteService.create(createGerenteDto);
  }

  @Get()
  async findAll() {
    return this.gerenteService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateGerenteDto: UpdateGerenteDto) {
    return this.gerenteService.update(id, updateGerenteDto);
  }
}
