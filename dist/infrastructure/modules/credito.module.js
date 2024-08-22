"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const credito_entity_1 = require("../../domain/entities/credito.entity");
const conta_entity_1 = require("../../domain/entities/conta.entity");
const cliente_entity_1 = require("../../domain/entities/cliente.entity");
const credito_service_1 = require("../../domain/services/credito.service");
const credito_controller_1 = require("../adapters/http/credito.controller");
let CreditoModule = class CreditoModule {
};
exports.CreditoModule = CreditoModule;
exports.CreditoModule = CreditoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([credito_entity_1.Credito, conta_entity_1.Conta, cliente_entity_1.Cliente]),
        ],
        controllers: [credito_controller_1.CreditoController],
        providers: [credito_service_1.CreditoService],
    })
], CreditoModule);
//# sourceMappingURL=credito.module.js.map