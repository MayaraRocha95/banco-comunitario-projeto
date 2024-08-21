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
exports.ContaPagarController = void 0;
const common_1 = require("@nestjs/common");
const conta_service_1 = require("../../../domain/services/conta.service");
const create_conta_pagar_dto_1 = require("../../../presentation/dtos/create-conta-pagar.dto");
let ContaPagarController = class ContaPagarController {
    constructor(contaService) {
        this.contaService = contaService;
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
};
exports.ContaPagarController = ContaPagarController;
__decorate([
    (0, common_1.Post)(':id/conta-pagar'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_conta_pagar_dto_1.CreateContaPagarDto]),
    __metadata("design:returntype", Promise)
], ContaPagarController.prototype, "criarContaPagar", null);
__decorate([
    (0, common_1.Get)(':id/extrato'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContaPagarController.prototype, "extrato", null);
exports.ContaPagarController = ContaPagarController = __decorate([
    (0, common_1.Controller)('contas'),
    __metadata("design:paramtypes", [conta_service_1.ContaService])
], ContaPagarController);
//# sourceMappingURL=conta-pagar.controller.js.map