import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Gerente } from '../entities/gerente.entity';
import { CreateGerenteDto } from '../../presentation/dtos/create-gerente.dto';
import { UpdateGerenteDto } from '../../presentation/dtos/update-gerente.dto';

@Injectable()
export class GerenteService {
  private readonly gerentes: Gerente[] = [];

  create(createGerenteDto: CreateGerenteDto): Gerente {
    const gerente: Gerente = plainToClass(Gerente, {
      id: this.generateUniqueId(),
      ...createGerenteDto,
      clientes: [],
    });
    this.gerentes.push(gerente);
    return gerente;
  }

  findAll(): Gerente[] {
    return this.gerentes.map((gerente) => plainToClass(Gerente, gerente));
  }

  update(id: string, updateGerenteDto: UpdateGerenteDto): Gerente {
    const gerenteIndex = this.gerentes.findIndex((g) => g.id === id);
    if (gerenteIndex === -1) {
      throw new NotFoundException(`Gerente com ID ${id} não encontrado`);
    }
    const updatedGerente = { ...this.gerentes[gerenteIndex], ...updateGerenteDto };
    this.gerentes[gerenteIndex] = plainToClass(Gerente, updatedGerente);
    return updatedGerente;
  }

  private generateUniqueId(): string {
    return Math.random().toString(36).substring(2);
  }
}
