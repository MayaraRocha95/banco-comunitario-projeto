"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerenteService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const gerente_entity_1 = require("../entities/gerente.entity");
let GerenteService = class GerenteService {
    constructor() {
        this.gerentes = [];
    }
    create(createGerenteDto) {
        const gerente = (0, class_transformer_1.plainToClass)(gerente_entity_1.Gerente, {
            id: this.generateUniqueId(),
            ...createGerenteDto,
            clientes: [],
        });
        this.gerentes.push(gerente);
        return gerente;
    }
    findAll() {
        return this.gerentes.map((gerente) => (0, class_transformer_1.plainToClass)(gerente_entity_1.Gerente, gerente));
    }
    update(id, updateGerenteDto) {
        const gerenteIndex = this.gerentes.findIndex((g) => g.id === id);
        if (gerenteIndex === -1) {
            throw new common_1.NotFoundException(`Gerente com ID ${id} não encontrado`);
        }
        const updatedGerente = { ...this.gerentes[gerenteIndex], ...updateGerenteDto };
        this.gerentes[gerenteIndex] = (0, class_transformer_1.plainToClass)(gerente_entity_1.Gerente, updatedGerente);
        return updatedGerente;
    }
    generateUniqueId() {
        return Math.random().toString(36).substring(2);
    }
};
exports.GerenteService = GerenteService;
exports.GerenteService = GerenteService = __decorate([
    (0, common_1.Injectable)()
], GerenteService);
//# sourceMappingURL=gerente.service.js.map