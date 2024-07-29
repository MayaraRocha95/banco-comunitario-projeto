import { GerenteService } from '../../domain/services/gerente.service';
import { GerenteRepository } from '../ports/gerente.repository.port';
import { CreateGerenteDto } from '../../presentation/dtos/create-gerente.dto';

export class CreateGerenteUseCase {
  constructor(
    private readonly gerenteService: GerenteService,
    private readonly gerenteRepository: GerenteRepository
  ) {}

  async execute(createGerenteDto: CreateGerenteDto): Promise<void> {
    const gerente = this.gerenteService.create(createGerenteDto);
    await this.gerenteRepository.save(gerente);
  }

  async findAll() {
    return this.gerenteRepository.findAll();
  }
}
