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
const create_conta_dto_1 = require("../../../presentation/dtos/create-conta.dto");
const update_conta_dto_1 = require("../../../presentation/dtos/update-conta.dto");
const conta_service_1 = require("../../../domain/services/conta.service");
let ContaController = class ContaController {
    constructor(contaService) {
        this.contaService = contaService;
    }
    async create(createContaDto) {
        return this.contaService.create(createContaDto);
    }
    async findAll() {
        return this.contaService.findAll();
    }
    async findOne(id) {
        return this.contaService.findOne(id);
    }
    async update(id, updateContaDto) {
        return this.contaService.update(id, updateContaDto);
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
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_conta_dto_1.UpdateContaDto]),
    __metadata("design:returntype", Promise)
], ContaController.prototype, "update", null);
exports.ContaController = ContaController = __decorate([
    (0, common_1.Controller)('contas'),
    __metadata("design:paramtypes", [conta_service_1.ContaService])
], ContaController);
//# sourceMappingURL=conta.controller.js.map