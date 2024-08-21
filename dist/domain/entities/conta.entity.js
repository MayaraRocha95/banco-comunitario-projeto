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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const typeorm_1 = require("typeorm");
const cliente_entity_1 = require("./cliente.entity");
const transacao_entity_1 = require("./transacao.entity");
const conta_pagar_entity_1 = require("./conta-pagar.entity");
let Conta = class Conta {
};
exports.Conta = Conta;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Conta.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Conta.prototype, "numeroConta", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Conta.prototype, "agencia", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Conta.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Conta.prototype, "saldo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Conta.prototype, "dataAbertura", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Conta.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Conta.prototype, "limiteCredito", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cliente_entity_1.Cliente, (cliente) => cliente.contas),
    __metadata("design:type", cliente_entity_1.Cliente)
], Conta.prototype, "titular", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transacao_entity_1.Transacao, (transacao) => transacao.conta),
    __metadata("design:type", Array)
], Conta.prototype, "transacoes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => conta_pagar_entity_1.ContaPagar, (contaPagar) => contaPagar.conta),
    __metadata("design:type", Array)
], Conta.prototype, "contasPagar", void 0);
exports.Conta = Conta = __decorate([
    (0, typeorm_1.Entity)()
], Conta);
//# sourceMappingURL=conta.entity.js.map