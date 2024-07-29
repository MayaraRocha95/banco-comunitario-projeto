"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ClienteService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const cliente_entity_1 = require("../entities/cliente.entity");
let ClienteService = ClienteService_1 = class ClienteService {
    constructor() {
        this.clientes = [];
        this.logger = new common_1.Logger(ClienteService_1.name);
    }
    create(createClienteDto) {
        try {
            const cliente = this.createCliente(createClienteDto);
            this.clientes.push(cliente);
            return cliente;
        }
        catch (error) {
            this.logger.error('Erro ao criar cliente', error.stack);
            throw new common_1.BadRequestException(error.message);
        }
    }
    findAll() {
        try {
            return this.clientes.map((cliente) => (0, class_transformer_1.plainToClass)(cliente_entity_1.Cliente, cliente));
        }
        catch (error) {
            this.logger.error('Erro ao listar todos os clientes', error.stack);
            throw new common_1.BadRequestException(error.message);
        }
    }
    update(id, updateClienteDto) {
        const clienteIndex = this.findClienteIndexById(id);
        if (clienteIndex === -1) {
            throw new common_1.NotFoundException(`Cliente com ID ${id} não encontrado`);
        }
        const updatedCliente = { ...this.clientes[clienteIndex], ...updateClienteDto };
        this.clientes[clienteIndex] = (0, class_transformer_1.plainToClass)(cliente_entity_1.Cliente, updatedCliente);
        return updatedCliente;
    }
    remove(id) {
        try {
            const clienteIndex = this.findClienteIndexById(id);
            this.clientes.splice(clienteIndex, 1);
            return true;
        }
        catch (error) {
            this.logger.error(`Erro ao remover cliente com ID ${id}`, error.stack);
            throw new common_1.BadRequestException(error.message);
        }
    }
    createCliente(createClienteDto) {
        return (0, class_transformer_1.plainToClass)(cliente_entity_1.Cliente, {
            id: this.generateUniqueId(),
            ...createClienteDto,
            contas: [],
            gerente: null,
        });
    }
    findClienteIndexById(id) {
        const index = this.clientes.findIndex((cliente) => cliente.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Cliente com ID ${id} não encontrado`);
        }
        return index;
    }
    generateUniqueId() {
        return Math.random().toString(36).substring(2);
    }
};
exports.ClienteService = ClienteService;
exports.ClienteService = ClienteService = ClienteService_1 = __decorate([
    (0, common_1.Injectable)()
], ClienteService);
//# sourceMappingURL=cliente.service.js.map