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
exports.GerenteController = void 0;
const common_1 = require("@nestjs/common");
const gerente_service_1 = require("../../../domain/services/gerente.service");
const create_gerente_dto_1 = require("../../../presentation/dtos/create-gerente.dto");
const create_conta_dto_1 = require("../../../presentation/dtos/create-conta.dto");
let GerenteController = class GerenteController {
    constructor(gerenteService) {
        this.gerenteService = gerenteService;
    }
    async create(createGerenteDto) {
        return this.gerenteService.create(createGerenteDto);
    }
    async findAll() {
        return this.gerenteService.findAll();
    }
    async addCliente(gerenteId, clienteId) {
        return this.gerenteService.addCliente(gerenteId, clienteId);
    }
    async removeCliente(gerenteId, clienteId) {
        return this.gerenteService.removeCliente(gerenteId, clienteId);
    }
    async modifyConta(gerenteId, contaId, { tipo }) {
        return this.gerenteService.modifyConta(gerenteId, contaId, tipo);
    }
    async openConta(gerenteId, createContaDto) {
        return this.gerenteService.openConta(gerenteId, createContaDto);
    }
    async closeConta(gerenteId, contaId) {
        return this.gerenteService.closeConta(gerenteId, contaId);
    }
};
exports.GerenteController = GerenteController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gerente_dto_1.CreateGerenteDto]),
    __metadata("design:returntype", Promise)
], GerenteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GerenteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)(':gerenteId/clientes/:clienteId'),
    __param(0, (0, common_1.Param)('gerenteId')),
    __param(1, (0, common_1.Param)('clienteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], GerenteController.prototype, "addCliente", null);
__decorate([
    (0, common_1.Delete)(':gerenteId/clientes/:clienteId'),
    __param(0, (0, common_1.Param)('gerenteId')),
    __param(1, (0, common_1.Param)('clienteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], GerenteController.prototype, "removeCliente", null);
__decorate([
    (0, common_1.Put)(':gerenteId/contas/:contaId'),
    __param(0, (0, common_1.Param)('gerenteId')),
    __param(1, (0, common_1.Param)('contaId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], GerenteController.prototype, "modifyConta", null);
__decorate([
    (0, common_1.Post)(':gerenteId/contas'),
    __param(0, (0, common_1.Param)('gerenteId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_conta_dto_1.CreateContaDto]),
    __metadata("design:returntype", Promise)
], GerenteController.prototype, "openConta", null);
__decorate([
    (0, common_1.Delete)(':gerenteId/contas/:contaId'),
    __param(0, (0, common_1.Param)('gerenteId')),
    __param(1, (0, common_1.Param)('contaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], GerenteController.prototype, "closeConta", null);
exports.GerenteController = GerenteController = __decorate([
    (0, common_1.Controller)('gerentes'),
    __metadata("design:paramtypes", [gerente_service_1.GerenteService])
], GerenteController);
//# sourceMappingURL=gerente.controller.js.map