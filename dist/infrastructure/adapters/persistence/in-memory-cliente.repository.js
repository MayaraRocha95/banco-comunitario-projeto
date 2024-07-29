"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryClienteRepository = void 0;
class InMemoryClienteRepository {
    constructor() {
        this.clientes = [];
    }
    async save(cliente) {
        this.clientes.push(cliente);
    }
    async findById(id) {
        return this.clientes.find(cliente => cliente.id === id) || null;
    }
    async findAll() {
        return this.clientes;
    }
    async remove(id) {
        const index = this.clientes.findIndex(cliente => cliente.id === id);
        if (index === -1)
            return false;
        this.clientes.splice(index, 1);
        return true;
    }
}
exports.InMemoryClienteRepository = InMemoryClienteRepository;
//# sourceMappingURL=in-memory-cliente.repository.js.map