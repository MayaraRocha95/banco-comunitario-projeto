import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { CreditoService } from 'src/domain/services/credito.service';


@Controller('contas/:id/creditos')
export class CreditoController {
  constructor(private readonly creditoService: CreditoService) {}

  @Post()
  async concederCredito(
    @Param('id') contaId: string,
    @Body('tipo') tipo: 'empreendimento' | 'pessoal',
    @Body('valor') valor: number
  ) {
    const credito = await this.creditoService.concederCredito(contaId, tipo, valor);
    return {
      message: 'Crédito concedido com sucesso',
      data: credito,
    };
  }

  @Get()
  async consultarCreditos(@Param('id') contaId: string) {
    const creditos = await this.creditoService.consultarCreditos(contaId);
    return {
      message: 'Créditos consultados com sucesso',
      data: creditos,
    };
  }
}
