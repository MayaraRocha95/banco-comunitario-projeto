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
            const cliente = this.clienteService.findAll().find((c) => c.id === createContaDto.clienteId);
            if (!cliente) {
                this.logger.error(`Cliente com ID ${createContaDto.clienteId} não encontrado`);
                throw new common_1.NotFoundException(`Cliente com ID ${createContaDto.clienteId} não encontrado`);
            }
            const novaConta = (0, class_transformer_1.plainToClass)(conta_entity_1.Conta, {
                id: this.generateUniqueId(),
                numeroConta: this.generateAccountNumber(),
                agencia: createContaDto.agencia,
                tipo: createContaDto.tipo,
                saldo: createContaDto.saldoInicial,
                dataAbertura: new Date(),
                status: 'ativa',
                limiteCredito: createContaDto.limiteCredito,
                titular: cliente,
            });
            cliente.contas.push(novaConta);
            this.contas.push(novaConta);
            this.logger.log(`Conta criada com sucesso: ${novaConta.numeroConta}`);
            return novaConta;
        }
        catch (error) {
            this.logger.error('Erro ao criar conta', error.stack);
            throw error;
        }
    }
    findAll() {
        return this.contas.map((conta) => (0, class_transformer_1.plainToClass)(conta_entity_1.Conta, conta));
    }
    findOne(id) {
        const conta = this.contas.find((c) => c.id === id);
        if (!conta) {
            throw new common_1.NotFoundException(`Conta com ID ${id} não encontrada`);
        }
        return conta;
    }
    generateUniqueId() {
        return Math.random().toString(36).substring(2);
    }
    generateAccountNumber() {
        return Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
    }
};
exports.ContaService = ContaService;
exports.ContaService = ContaService = ContaService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cliente_service_1.ClienteService])
], ContaService);
//# sourceMappingURL=conta.service.js.map