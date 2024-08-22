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
const update_gerente_dto_1 = require("../../../presentation/dtos/update-gerente.dto");
let GerenteController = class GerenteController {
    constructor(gerenteService) {
        this.gerenteService = gerenteService;
    }
    async create(createGerenteDto) {
        try {
            const gerente = await this.gerenteService.create(createGerenteDto);
            return {
                message: 'Gerente criado com sucesso',
                data: gerente,
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        return await this.gerenteService.findAll();
    }
    async update(id, updateGerenteDto) {
        try {
            const gerente = await this.gerenteService.update(id, updateGerenteDto);
            return {
                message: 'Gerente atualizado com sucesso',
                data: gerente,
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async remove(id) {
        try {
            await this.gerenteService.remove(id);
            return {
                message: 'Gerente removido com sucesso',
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async listarContasComCredito() {
        try {
            const contasComCredito = await this.gerenteService.listarContasComCredito();
            return {
                message: 'Lista de contas com crédito obtida com sucesso',
                data: contasComCredito,
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
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
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_gerente_dto_1.UpdateGerenteDto]),
    __metadata("design:returntype", Promise)
], GerenteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GerenteController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('contas-com-credito'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GerenteController.prototype, "listarContasComCredito", null);
exports.GerenteController = GerenteController = __decorate([
    (0, common_1.Controller)('gerentes'),
    __metadata("design:paramtypes", [gerente_service_1.GerenteService])
], GerenteController);
//# sourceMappingURL=gerente.controller.js.map