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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaController = void 0;
const common_1 = require("@nestjs/common");
const conta_service_1 = require("../../../domain/services/conta.service");
const transacao_service_1 = require("../../../domain/services/transacao.service");
const create_conta_dto_1 = require("../../../presentation/dtos/create-conta.dto");
const create_conta_pagar_dto_1 = require("../../../presentation/dtos/create-conta-pagar.dto");
let ContaController = class ContaController {
    constructor(contaService, transacaoService) {
        this.contaService = contaService;
        this.transacaoService = transacaoService;
    }
    async create(createContaDto) {
        try {
            const conta = await this.contaService.create(createContaDto);
            return {
                message: 'Conta criada com sucesso',
                data: conta,
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        return this.contaService.findAll();
    }
    async findOne(id) {
        try {
            const conta = await this.contaService.findOne(id);
            return conta;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async depositar(contaId, valor) {
        try {
            const transacao = await this.transacaoService.depositar(contaId, valor);
            return {
                message: 'Depósito realizado com sucesso',
                data: transacao,
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async sacar(contaId, valor) {
        try {
            const transacao = await this.transacaoService.sacar(contaId, valor);
            return {
                message: 'Saque realizado com sucesso',
                data: transacao,
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async transferir(contaOrigemId, contaDestinoId, valor) {
        try {
            const transacao = await this.transacaoService.transferir(contaOrigemId, contaDestinoId, valor);
            return {
                message: 'Transferência realizada com sucesso',
                data: transacao,
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async extrato(contaId) {
        try {
            const extrato = await this.contaService.getExtrato(contaId);
            return {
                message: 'Extrato obtido com sucesso',
                data: extrato,
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async criarContaPagar(contaId, createContaPagarDto) {
        try {
            const contaPagar = await this.contaService.criarContaPagar(contaId, createContaPagarDto);
            return {
                message: 'Conta a pagar criada e paga com sucesso',
                data: contaPagar,
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.ContaController = ContaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_conta_dto_1.CreateContaDto]),
    __metadata("design:returntype", Promise)
], ContaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/depositar'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('valor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], ContaController.prototype, "depositar", null);
__decorate([
    (0, common_1.Post)(':id/sacar'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('valor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], ContaController.prototype, "sacar", null);
__decorate([
    (0, common_1.Post)(':id/transferir'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('contaDestinoId')),
    __param(2, (0, common_1.Body)('valor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], ContaController.prototype, "transferir", null);
__decorate([
    (0, common_1.Get)(':id/extrato'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContaController.prototype, "extrato", null);
__decorate([
    (0, common_1.Post)(':id/conta-pagar'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_conta_pagar_dto_1.CreateContaPagarDto]),
    __metadata("design:returntype", Promise)
], ContaController.prototype, "criarContaPagar", null);
exports.ContaController = ContaController = __decorate([
    (0, common_1.Controller)('contas'),
    __metadata("design:paramtypes", [conta_service_1.ContaService,
        transacao_service_1.TransacaoService])
], ContaController);
//# sourceMappingURL=conta.controller.js.map