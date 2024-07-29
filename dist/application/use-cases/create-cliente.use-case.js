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
exports.CreateClienteUseCase = void 0;
const common_1 = require("@nestjs/common");
const cliente_service_1 = require("../../domain/services/cliente.service");
let CreateClienteUseCase = class CreateClienteUseCase {
    constructor(clienteService, clienteRepository) {
        this.clienteService = clienteService;
        this.clienteRepository = clienteRepository;
    }
    async execute(createClienteDto) {
        const cliente = this.clienteService.create(createClienteDto);
        await this.clienteRepository.save(cliente);
    }
};
exports.CreateClienteUseCase = CreateClienteUseCase;
exports.CreateClienteUseCase = CreateClienteUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)('ClienteRepository')),
    __metadata("design:paramtypes", [cliente_service_1.ClienteService, Object])
], CreateClienteUseCase);
//# sourceMappingURL=create-cliente.use-case.js.map