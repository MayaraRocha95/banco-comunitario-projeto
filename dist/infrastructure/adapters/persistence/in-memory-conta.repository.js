"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryContaRepository = void 0;
class InMemoryContaRepository {
    constructor() {
        this.contas = [];
    }
    async save(conta) {
        this.contas.push(conta);
    }
    async findById(id) {
        return this.contas.find(conta => conta.id === id) || null;
    }
    async findAll() {
        return this.contas;
    }
    async remove(id) {
        const index = this.contas.findIndex(conta => conta.id === id);
        if (index === -1)
            return false;
        this.contas.splice(index, 1);
        return true;
    }
}
exports.InMemoryContaRepository = InMemoryContaRepository;
//# sourceMappingURL=in-memory-conta.repository.js.map