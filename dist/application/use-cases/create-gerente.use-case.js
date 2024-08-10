"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGerenteUseCase = void 0;
class CreateGerenteUseCase {
    constructor(gerenteService, gerenteRepository) {
        this.gerenteService = gerenteService;
        this.gerenteRepository = gerenteRepository;
    }
    async execute(createGerenteDto) {
        const gerente = this.gerenteService.create(createGerenteDto);
        await this.gerenteRepository.save(await gerente);
    }
    async findAll() {
        return this.gerenteRepository.findAll();
    }
}
exports.CreateGerenteUseCase = CreateGerenteUseCase;
//# sourceMappingURL=create-gerente.use-case.js.map