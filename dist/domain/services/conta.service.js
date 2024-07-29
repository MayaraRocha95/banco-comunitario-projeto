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
var ContaService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const conta_entity_1 = require("../entities/conta.entity");
const cliente_service_1 = require("./cliente.service");
let ContaService = ContaService_1 = class ContaService {
    constructor(clienteService) {
        this.clienteService = clienteService;
        this.contas = [];
        this.logger = new common_1.Logger(ContaService_1.name);
    }
    create(createContaDto) {
        try {
            const cliente = this.clienteService.findAll().find(c => c.id === createContaDto.clienteId);
            if (!cliente) {
                throw new common_1.NotFoundException(`Cliente com ID ${createContaDto.clienteId} não encontrado`);
            }
            const novaConta = this.createConta(createContaDto, cliente);
            cliente.contas.push(novaConta);
            this.contas.push(novaConta);
            return novaConta;
        }
        catch (error) {
            this.logger.error('Erro ao criar conta', error.stack);
            throw new common_1.BadRequestException(error.message);
        }
    }
    findAll() {
        try {
            return this.contas.map((conta) => (0, class_transformer_1.plainToClass)(conta_entity_1.Conta, conta));
        }
        catch (error) {
            this.logger.error('Erro ao listar todas as contas', error.stack);
            throw new common_1.BadRequestException(error.message);
        }
    }
    findOne(id) {
        try {
            const conta = this.findContaById(id);
            return (0, class_transformer_1.plainToClass)(conta_entity_1.Conta, conta);
        }
        catch (error) {
            this.logger.error(`Conta com ID ${id} não encontrada`, error.stack);
            throw new common_1.NotFoundException(error.message);
        }
    }
    update(id, updateContaDto) {
        const contaIndex = this.findContaIndexById(id);
        if (contaIndex === -1) {
            throw new common_1.NotFoundException(`Conta com ID ${id} não encontrada`);
        }
        const updatedConta = { ...this.contas[contaIndex], ...updateContaDto };
        this.contas[contaIndex] = (0, class_transformer_1.plainToClass)(conta_entity_1.Conta, updatedConta);
        return updatedConta;
    }
    remove(id) {
        try {
            const contaIndex = this.findContaIndexById(id);
            this.contas.splice(contaIndex, 1);
            return true;
        }
        catch (error) {
            this.logger.error(`Erro ao remover conta com ID ${id}`, error.stack);
            throw new common_1.BadRequestException(error.message);
        }
    }
    createConta(createContaDto, cliente) {
        return (0, class_transformer_1.plainToClass)(conta_entity_1.Conta, {
            id: this.generateUniqueId(),
            cliente,
            saldo: createContaDto.saldoInicial,
            tipo: createContaDto.tipo,
            limiteChequeEspecial: this.calculateOverdraftLimit(createContaDto.tipo),
        });
    }
    findContaById(id) {
        const conta = this.contas.find((conta) => conta.id === id);
        if (!conta) {
            throw new common_1.NotFoundException(`Conta com ID ${id} não encontrada`);
        }
        return conta;
    }
    findContaIndexById(id) {
        const index = this.contas.findIndex((conta) => conta.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Conta com ID ${id} não encontrada`);
        }
        return index;
    }
    generateUniqueId() {
        return Math.random().toString(36).substring(2);
    }
    calculateOverdraftLimit(tipo) {
        return tipo === 'corrente' ? 100 : undefined;
    }
};
exports.ContaService = ContaService;
exports.ContaService = ContaService = ContaService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cliente_service_1.ClienteService])
], ContaService);
//# sourceMappingURL=conta.service.js.map