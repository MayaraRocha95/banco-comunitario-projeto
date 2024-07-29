"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerenteModule = void 0;
const common_1 = require("@nestjs/common");
const gerente_service_1 = require("../../domain/services/gerente.service");
const gerente_controller_1 = require("../adapters/http/gerente.controller");
const cliente_module_1 = require("./cliente.module");
const conta_module_1 = require("./conta.module");
const in_memory_gerente_repository_1 = require("../adapters/persistence/in-memory-gerente.repository");
let GerenteModule = class GerenteModule {
};
exports.GerenteModule = GerenteModule;
exports.GerenteModule = GerenteModule = __decorate([
    (0, common_1.Module)({
        imports: [cliente_module_1.ClienteModule, conta_module_1.ContaModule],
        controllers: [gerente_controller_1.GerenteController],
        providers: [
            gerente_service_1.GerenteService,
            { provide: 'GerenteRepository', useClass: in_memory_gerente_repository_1.InMemoryGerenteRepository },
        ],
        exports: [gerente_service_1.GerenteService],
    })
], GerenteModule);
//# sourceMappingURL=gerente.module.js.map