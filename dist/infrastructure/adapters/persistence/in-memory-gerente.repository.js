"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryGerenteRepository = void 0;
class InMemoryGerenteRepository {
    constructor() {
        this.gerentes = [];
    }
    async save(gerente) {
        this.gerentes.push(gerente);
    }
    async findById(id) {
        return this.gerentes.find(gerente => gerente.id === id) || null;
    }
    async findAll() {
        return this.gerentes;
    }
    async remove(id) {
        const index = this.gerentes.findIndex(gerente => gerente.id === id);
        if (index === -1)
            return false;
        this.gerentes.splice(index, 1);
        return true;
    }
}
exports.InMemoryGerenteRepository = InMemoryGerenteRepository;
//# sourceMappingURL=in-memory-gerente.repository.js.map