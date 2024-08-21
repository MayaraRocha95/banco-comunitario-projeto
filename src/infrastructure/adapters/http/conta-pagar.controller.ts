import { Controller, Post, Body, Param, HttpException, HttpStatus, Get } from '@nestjs/common';
import { ContaService } from '../../../domain/services/conta.service'
import { CreateContaPagarDto } from 'src/presentation/dtos/create-conta-pagar.dto';


@Controller('contas')
export class ContaPagarController {
  constructor(private readonly contaService: ContaService) {}

  

  @Post(':id/conta-pagar')
  async criarContaPagar(@Param('id') contaId: string, @Body() createContaPagarDto: CreateContaPagarDto) {
    try {
      const contaPagar = await this.contaService.criarContaPagar(contaId, createContaPagarDto);
      return {
        message: 'Conta a pagar criada e paga com sucesso',
        data: contaPagar,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id/extrato')
  async extrato(@Param('id') contaId: string) {
    try {
      const extrato = await this.contaService.getExtrato(contaId);
      return {
        message: 'Extrato obtido com sucesso',
        data: extrato,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}

