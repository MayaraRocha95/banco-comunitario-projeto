"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContaUseCase = void 0;
class CreateContaUseCase {
    constructor(contaService, contaRepository) {
        this.contaService = contaService;
        this.contaRepository = contaRepository;
    }
    async execute(createContaDto) {
        const conta = this.contaService.create(createContaDto);
        await this.contaRepository.save(await conta);
    }
    async findAll() {
        return this.contaRepository.findAll();
    }
    async findOne(id) {
        return this.contaRepository.findById(id);
    }
}
exports.CreateContaUseCase = CreateContaUseCase;
//# sourceMappingURL=create-conta.use-case.js.map