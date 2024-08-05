"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var GerenteService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerenteService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const gerente_entity_1 = require("../entities/gerente.entity");
const conta_entity_1 = require("../entities/conta.entity");
const cliente_service_1 = require("./cliente.service");
const conta_service_1 = require("./conta.service");
let GerenteService = GerenteService_1 = class GerenteService {
    constructor(clienteService, contaService) {
        this.clienteService = clienteService;
        this.contaService = contaService;
        this.gerentes = [];
        this.logger = new common_1.Logger(GerenteService_1.name);
    }
    create(createGerenteDto) {
        const gerente = (0, class_transformer_1.plainToClass)(gerente_entity_1.Gerente, {
            id: this.generateUniqueId(),
            nome: createGerenteDto.nome,
            clientes: [],
        });
        this.gerentes.push(gerente);
        return gerente;
    }
    findAll() {
        return this.gerentes.map((gerente) => (0, class_transformer_1.plainToClass)(gerente_entity_1.Gerente, gerente));
    }
    addCliente(gerenteId, clienteId) {
        const gerente = this.findGerenteById(gerenteId);
        const cliente = this.clienteService.findAll().find((c) => c.id === clienteId);
        if (gerente && cliente) {
            gerente.clientes.push(cliente);
            cliente.gerente = gerente;
        }
        return (0, class_transformer_1.plainToClass)(gerente_entity_1.Gerente, gerente);
    }
    removeCliente(gerenteId, clienteId) {
        const gerente = this.findGerenteById(gerenteId);
        const cliente = this.clienteService.findAll().find((c) => c.id === clienteId);
        if (gerente && cliente) {
            gerente.clientes = gerente.clientes.filter((c) => c.id !== clienteId);
            cliente.gerente = null;
            const removed = this.clienteService.remove(clienteId);
            return {
                success: removed,
                message: removed ? 'Cliente removido com sucesso' : 'Falha ao remover o cliente',
            };
        }
        return { success: false, message: 'Gerente ou cliente não encontrado' };
    }
    modifyConta(gerenteId, contaId, tipo) {
        const gerente = this.findGerenteById(gerenteId);
        const conta = this.contaService.findAll().find((c) => c.id === contaId);
        if (gerente && conta) {
            conta.tipo = tipo;
            conta.limiteChequeEspecial = tipo === 'corrente' ? 100 : undefined;
        }
        return (0, class_transformer_1.plainToClass)(conta_entity_1.Conta, conta);
    }
    openConta(gerenteId, createContaDto) {
        const gerente = this.findGerenteById(gerenteId);
        const cliente = this.clienteService.findAll().find((c) => c.id === createContaDto.clienteId);
        if (gerente && cliente) {
            const conta = this.contaService.create(createContaDto);
            cliente.contas.push(conta);
            return (0, class_transformer_1.plainToClass)(conta_entity_1.Conta, conta);
        }
        return null;
    }
    closeConta(gerenteId, contaId) {
        const gerente = this.findGerenteById(gerenteId);
        const conta = this.contaService.findAll().find((c) => c.id === contaId);
        if (gerente && conta) {
            this.contaService.remove(contaId);
            conta.cliente.contas = conta.cliente.contas.filter((c) => c.id !== contaId);
            return true;
        }
        return false;
    }
    findGerenteById(id) {
        const gerente = this.gerentes.find((g) => g.id === id);
        if (!gerente) {
            throw new common_1.NotFoundException(`Gerente com ID ${id} não encontrado`);
        }
        return gerente;
    }
    generateUniqueId() {
        return Math.random().toString(36).substring(2);
    }
};
exports.GerenteService = GerenteService;
exports.GerenteService = GerenteService = GerenteService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cliente_service_1.ClienteService,
        conta_service_1.ContaService])
], GerenteService);
//# sourceMappingURL=gerente.service.js.map