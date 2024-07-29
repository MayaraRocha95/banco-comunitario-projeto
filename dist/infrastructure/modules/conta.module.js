"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaModule = void 0;
const common_1 = require("@nestjs/common");
const conta_service_1 = require("../../domain/services/conta.service");
const conta_controller_1 = require("../adapters/http/conta.controller");
const in_memory_conta_repository_1 = require("../adapters/persistence/in-memory-conta.repository");
const cliente_module_1 = require("./cliente.module");
const create_conta_use_case_1 = require("../../application/use-cases/create-conta.use-case");
let ContaModule = class ContaModule {
};
exports.ContaModule = ContaModule;
exports.ContaModule = ContaModule = __decorate([
    (0, common_1.Module)({
        imports: [cliente_module_1.ClienteModule],
        controllers: [conta_controller_1.ContaController],
        providers: [
            conta_service_1.ContaService,
            create_conta_use_case_1.CreateContaUseCase,
            { provide: 'ContaRepository', useClass: in_memory_conta_repository_1.InMemoryContaRepository },
        ],
        exports: [conta_service_1.ContaService, create_conta_use_case_1.CreateContaUseCase],
    })
], ContaModule);
//# sourceMappingURL=conta.module.js.map