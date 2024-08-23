import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { GerenteService } from 'src/domain/services/gerente.service';
import { CreateGerenteDto } from 'src/presentation/dtos/create-gerente.dto';
import { UpdateGerenteDto } from 'src/presentation/dtos/update-gerente.dto';

@Controller('gerentes')
export class GerenteController {
  constructor(private readonly gerenteService: GerenteService) {}

  @Post()
  async create(@Body() createGerenteDto: CreateGerenteDto) {
    try {
      const gerente = await this.gerenteService.create(createGerenteDto);
      return {
        message: 'Gerente criado com sucesso',
        data: gerente,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async findAll() {
    return await this.gerenteService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateGerenteDto: UpdateGerenteDto) {
    try {
      const gerente = await this.gerenteService.update(id, updateGerenteDto);
      return {
        message: 'Gerente atualizado com sucesso',
        data: gerente,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.gerenteService.remove(id);
      return {
        message: 'Gerente removido com sucesso',
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('contas-com-credito')
  async listarContasComCredito() {
    try {
      const contasComCredito = await this.gerenteService.listarContasComCredito();
      return {
        message: 'Lista de contas com crédito obtida com sucesso',
        data: contasComCredito,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
