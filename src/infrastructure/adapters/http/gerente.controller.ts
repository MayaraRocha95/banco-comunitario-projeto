import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { GerenteService } from '../../../domain/services/gerente.service'
import { CreateGerenteDto } from '../../../presentation/dtos/create-gerente.dto';
import { CreateContaDto } from '../../../presentation/dtos/create-conta.dto';

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

  @Put(':gerenteId/clientes/:clienteId')
  async addCliente(@Param('gerenteId') gerenteId: string, @Param('clienteId') clienteId: string) {
    return this.gerenteService.addCliente(gerenteId, clienteId);
  }

  @Delete(':gerenteId/clientes/:clienteId')
  async removeCliente(@Param('gerenteId') gerenteId: string, @Param('clienteId') clienteId: string) {
    return this.gerenteService.removeCliente(gerenteId, clienteId);
  }

  @Put(':gerenteId/contas/:contaId')
  async modifyConta(@Param('gerenteId') gerenteId: string, @Param('contaId') contaId: string, @Body() { tipo }: { tipo: 'corrente' | 'poupanca' }) {
    return this.gerenteService.modifyConta(gerenteId, contaId, tipo);
  }

  @Post(':gerenteId/contas')
  async openConta(@Param('gerenteId') gerenteId: string, @Body() createContaDto: CreateContaDto) {
    return this.gerenteService.openConta(gerenteId, createContaDto);
  }

  @Delete(':gerenteId/contas/:contaId')
  async closeConta(@Param('gerenteId') gerenteId: string, @Param('contaId') contaId: string) {
    return this.gerenteService.closeConta(gerenteId, contaId);
  }
}
