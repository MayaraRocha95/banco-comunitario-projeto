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
exports.CreditoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const credito_entity_1 = require("../entities/credito.entity");
const conta_entity_1 = require("../entities/conta.entity");
const cliente_entity_1 = require("../entities/cliente.entity");
let CreditoService = class CreditoService {
    constructor(creditoRepository, contaRepository, clienteRepository) {
        this.creditoRepository = creditoRepository;
        this.contaRepository = contaRepository;
        this.clienteRepository = clienteRepository;
    }
    formatarDataBr(data) {
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
        const horas = String(data.getHours()).padStart(2, '0');
        const minutos = String(data.getMinutes()).padStart(2, '0');
        return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
    }
    async concederCredito(contaId, tipo, valor) {
        const conta = await this.contaRepository.findOne({ where: { id: contaId } });
        if (!conta) {
            throw new common_1.NotFoundException('Conta não encontrada');
        }
        const credito = this.creditoRepository.create({
            tipo,
            valor,
            dataConcessao: new Date(),
            saldoDevedor: valor,
            conta,
        });
        const savedCredito = await this.creditoRepository.save(credito);
        return {
            ...savedCredito,
            dataConcessao: this.formatarDataBr(savedCredito.dataConcessao),
            conta: {
                ...savedCredito.conta,
                dataAbertura: this.formatarDataBr(savedCredito.conta.dataAbertura),
            },
        };
    }
    async consultarCreditos(contaId) {
        const creditos = await this.creditoRepository.find({ where: { conta: { id: contaId } } });
        return creditos.map((credito) => ({
            ...credito,
            dataConcessao: this.formatarDataBr(credito.dataConcessao),
        }));
    }
};
exports.CreditoService = CreditoService;
exports.CreditoService = CreditoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(credito_entity_1.Credito)),
    __param(1, (0, typeorm_1.InjectRepository)(conta_entity_1.Conta)),
    __param(2, (0, typeorm_1.InjectRepository)(cliente_entity_1.Cliente)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CreditoService);
//# sourceMappingURL=credito.service.js.map