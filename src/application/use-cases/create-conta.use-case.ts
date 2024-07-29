import { ContaService } from '../../domain/services/conta.service';
import { ContaRepository } from '../ports/conta.repository.port';
import { CreateContaDto } from '../../presentation/dtos/create-conta.dto';

export class CreateContaUseCase {
  constructor(
    private readonly contaService: ContaService,
    private readonly contaRepository: ContaRepository
  ) {}

  async execute(createContaDto: CreateContaDto): Promise<void> {
    const conta = this.contaService.create(createContaDto);
    await this.contaRepository.save(conta);
  }

  async findAll() {
    return this.contaRepository.findAll();
  }

  async findOne(id: string) {
    return this.contaRepository.findById(id);
  }
}
