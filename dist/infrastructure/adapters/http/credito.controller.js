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
exports.CreditoController = void 0;
const common_1 = require("@nestjs/common");
const credito_service_1 = require("../../../domain/services/credito.service");
let CreditoController = class CreditoController {
    constructor(creditoService) {
        this.creditoService = creditoService;
    }
    async concederCredito(contaId, tipo, valor) {
        const credito = await this.creditoService.concederCredito(contaId, tipo, valor);
        return {
            message: 'Crédito concedido com sucesso',
            data: credito,
        };
    }
    async consultarCreditos(contaId) {
        const creditos = await this.creditoService.consultarCreditos(contaId);
        return {
            message: 'Créditos consultados com sucesso',
            data: creditos,
        };
    }
};
exports.CreditoController = CreditoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('tipo')),
    __param(2, (0, common_1.Body)('valor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], CreditoController.prototype, "concederCredito", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CreditoController.prototype, "consultarCreditos", null);
exports.CreditoController = CreditoController = __decorate([
    (0, common_1.Controller)('contas/:id/creditos'),
    __metadata("design:paramtypes", [credito_service_1.CreditoService])
], CreditoController);
//# sourceMappingURL=credito.controller.js.map