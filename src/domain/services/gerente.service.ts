import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gerente } from '../entities/gerente.entity';
import { Conta } from '../entities/conta.entity';
import { Credito } from '../entities/credito.entity';
import { CreateGerenteDto } from '../../presentation/dtos/create-gerente.dto';
import { UpdateGerenteDto } from '../../presentation/dtos/update-gerente.dto';

@Injectable()
export class GerenteService {
  constructor(
    @InjectRepository(Gerente)
    private gerenteRepository: Repository<Gerente>,
    @InjectRepository(Conta)
    private contaRepository: Repository<Conta>,
    @InjectRepository(Credito)
    private creditoRepository: Repository<Credito>,
  ) {}

  async create(createGerenteDto: CreateGerenteDto): Promise<Gerente> {
    const gerente = this.gerenteRepository.create(createGerenteDto);
    return await this.gerenteRepository.save(gerente);
  }

  async findAll(): Promise<Gerente[]> {
    return await this.gerenteRepository.find({ relations: ['clientes'] });
  }

  async update(id: string, updateGerenteDto: UpdateGerenteDto): Promise<Gerente> {
    await this.gerenteRepository.update(id, updateGerenteDto);
    const gerente = await this.gerenteRepository.findOne({ where: { id } });
    if (!gerente) {
      throw new NotFoundException(`Gerente com ID ${id} não encontrado`);
    }
    return gerente;
  }

  async remove(id: string): Promise<void> {
    await this.gerenteRepository.delete(id);
  }


  async listarContasComCredito(): Promise<any[]> {
    const contasComCreditos = await this.contaRepository
      .createQueryBuilder('conta')
      .leftJoinAndSelect('conta.creditos', 'credito')
      .leftJoinAndSelect('conta.titular', 'titular')
      .where('credito.id IS NOT NULL')
      .getMany();

    return contasComCreditos.map(conta => ({
      contaId: conta.id,
      titularNome: conta.titular.nome,
      creditos: conta.creditos.map(credito => ({
        tipo: credito.tipo,
        valor: credito.valor,
      })),
    }));
  }
}
