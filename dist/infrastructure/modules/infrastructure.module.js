"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfrastructureModule = void 0;
const common_1 = require("@nestjs/common");
const cliente_module_1 = require("./cliente.module");
const conta_module_1 = require("./conta.module");
const gerente_module_1 = require("./gerente.module");
const presentation_module_1 = require("../../presentation/presentation.module");
let InfrastructureModule = class InfrastructureModule {
};
exports.InfrastructureModule = InfrastructureModule;
exports.InfrastructureModule = InfrastructureModule = __decorate([
    (0, common_1.Module)({
        imports: [cliente_module_1.ClienteModule, conta_module_1.ContaModule, gerente_module_1.GerenteModule, presentation_module_1.PresentationModule],
        exports: [cliente_module_1.ClienteModule, conta_module_1.ContaModule, gerente_module_1.GerenteModule, presentation_module_1.PresentationModule],
    })
], InfrastructureModule);
//# sourceMappingURL=infrastructure.module.js.map