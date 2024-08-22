import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Credito } from '../entities/credito.entity';
import { Conta } from '../entities/conta.entity';
import { Cliente } from '../entities/cliente.entity'; // Importe a entidade Cliente
import { CreateContaDto } from 'src/presentation/dtos/create-conta.dto';

@Injectable()
export class CreditoService {
  constructor(
    @InjectRepository(Credito)
    private creditoRepository: Repository<Credito>,
    @InjectRepository(Conta)
    private contaRepository: Repository<Conta>,
    @InjectRepository(Cliente) // Injetando o repositório Cliente
    private clienteRepository: Repository<Cliente>,
  ) {}

  private formatarDataBr(data: Date): string {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');

    return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
  }

  async concederCredito(contaId: string, tipo: 'empreendimento' | 'pessoal', valor: number): Promise<any> {
    const conta = await this.contaRepository.findOne({ where: { id: contaId } });

    if (!conta) {
      throw new NotFoundException('Conta não encontrada');
    }

    const credito = this.creditoRepository.create({
      tipo,
      valor,
      dataConcessao: new Date(),
      saldoDevedor: valor,
      conta,
    });

    const savedCredito = await this.creditoRepository.save(credito);

    return {
      ...savedCredito,
      dataConcessao: this.formatarDataBr(savedCredito.dataConcessao), // Formata a dataConcessao
      conta: {
        ...savedCredito.conta,
        dataAbertura: this.formatarDataBr(savedCredito.conta.dataAbertura), // Formata a dataAbertura da conta
      },
    };
  }

  async consultarCreditos(contaId: string): Promise<any[]> {
    const creditos = await this.creditoRepository.find({ where: { conta: { id: contaId } } });
    return creditos.map((credito) => ({
      ...credito,
      dataConcessao: this.formatarDataBr(credito.dataConcessao),
    }));
  }
}
